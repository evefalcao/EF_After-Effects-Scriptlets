/**========================================================================
 * ?                  EF_DeleteAllEffects.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Deletes all effects from selected layers.
 *========================================================================**/

(function deleteAllEffects(){
    
    app.beginUndoGroup("'Reset Transform'");

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    if(layers.length != 0){
        for(var layer = 0; layer < layers.length; layer++){
            var currentLayer = layers[layer];
            var effectsProp = currentLayer.property("ADBE Effect Parade");

            for(var effect = effectsProp.numProperties; effect != 0; effect--){
                effectsProp.property(effect).remove();
            }
        }

    } else {
        alert("Select some layers to continue.")
    }

    app.endUndoGroup();
})()