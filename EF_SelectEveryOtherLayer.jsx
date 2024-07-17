/**========================================================================
 * ?                  EF_SelectEveryOtherLayer.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Selects every other layer.
 *========================================================================**/
 
(function selectEveryOtherLayer() {

    var comp = app.project.activeItem;
    var compLayers = comp.layers;

    app.beginUndoGroup("'Select every other layer'");

    for (var layer = 1; layer <= compLayers.length; layer = layer + 2) {
        var curlayer = compLayers[layer];
        
        if (!curlayer.locked) {
            curlayer.selected = true;
        }
    }

    app.endUndoGroup();

})()