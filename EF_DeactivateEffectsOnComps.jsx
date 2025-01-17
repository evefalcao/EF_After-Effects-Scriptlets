/**========================================================================
 * ?                  EF_DeactivateEffectsOnComps.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Deactivate a given effect from the selected comps. Is case insensitive.
 *========================================================================**/

(function deactivateEffectsOnComps(){

    var comps = app.project.selection;
    var userInput = prompt("Type the Effect Name you wish to disable:", "Effect Name");
    if (userInput) {
        var targetEffectName = userInput.toString().toLowerCase();
    }

    app.beginUndoGroup("'Deactivate Effects'");
    for (var item = 0; item < comps.length; item++) {
        var curItem = comps[item];
        if (curItem instanceof CompItem) {
            var layers = curItem.layers;

            for (var layer = 1; layer <= layers.length; layer++) {
                var currentLayer = layers[layer];
                var effectsProp = currentLayer.property("ADBE Effect Parade");
    
                if (effectsProp) {
                    for(var effect = 1; effect <= effectsProp.numProperties; effect++){
                        var effectName = effectsProp.property(effect).name.toLowerCase();

                        if (effectName == targetEffectName) {
                            effectsProp.property(effect).enabled = false;
                        }
                    }
                }
            }
        }
    }
    app.endUndoGroup();

})();