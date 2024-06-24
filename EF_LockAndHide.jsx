/**========================================================================
 * ?                  EF_CreateFolderStructure.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Locks, activates the shy guy and hides all the layers within the selected compositions in the project panel. Is recursive.
 *========================================================================**/


(function lockAndHideLayers(){
    var selectedComps = app.project.selection;

    function lockAndShy(layer){
        layer.shy = true;
        layer.locked = true;
    }

    function recursivelyLockAndShy(selectedComps){
        for(var comp = 0; comp < selectedComps.length; comp++){
            var currentComp = selectedComps[comp];

            for(var layer = 1; layer <= currentComp.numLayers; layer++){
                var currentLayer = currentComp.layer(layer);
                
                if(currentLayer.source instanceof CompItem){
                    recursivelyLockAndShy([currentLayer.source]);
                }
                lockAndShy(currentLayer);
            }

            currentComp.hideShyLayers = true;
        }
    }

    app.beginUndoGroup("'Lock and Hide Layers'");
    recursivelyLockAndShy(selectedComps);
    app.endUndoGroup();

})();