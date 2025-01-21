/**========================================================================
 * ?                  EF_BatchEditEffectProperty.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Batch edits the effects in the selected Compositions. Case sensitive.
 *========================================================================**/

(function batchEditEffectProperty(){

    var comps = app.project.selection;
    // var targetEffectName = "Fill";
    // var targetPropertyName = "Opacity";
    // var newPropValue = 0.5;

    var effectInput = prompt("Effect Name:", "Effect Name");
    if (effectInput) {
        var targetEffectName = effectInput.toString();
    }
    var propName = prompt("Effect Property Name:", "Property Name");
    if (propName) {
        var targetPropertyName = propName.toString();
    }
    var propValue = prompt("New Property Value:", "Eg: Numeric Value: 100, Checkbox: 0 or 1, Color: [1.0, 1.0, 1.0], Percentage: 1.0");
    if (propValue) {
        var newPropValue = propValue;
    }

    app.beginUndoGroup("'Batch Edit Effects'");
    for (var item = 0; item < comps.length; item++) {
        var curItem = comps[item];

        if (curItem instanceof CompItem) {
            var layers = curItem.layers;

            for (var layer = 1; layer <= layers.length; layer++) {
                var currentLayer = layers[layer];

                var effectsProp = currentLayer.property("ADBE Effect Parade");
                if (effectsProp) {
                    for(var effect = 1; effect <= effectsProp.numProperties; effect++){
                        var effectName = effectsProp.property(effect).name;
                        
                        if (effectName == targetEffectName) {
                            effectsProp.property(targetEffectName).property(targetPropertyName).setValue(newPropValue);
                        }
                    }
                }
            }
        }
    }
    app.endUndoGroup();

})();