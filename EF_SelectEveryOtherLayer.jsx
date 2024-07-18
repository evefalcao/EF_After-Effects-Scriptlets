/**========================================================================
 * ?                  EF_SelectEveryOtherLayer.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Selects every other layer. Starts from the first selected layer. Ignores locked layers.
 *========================================================================**/
 
(function selectEveryOtherLayer() {

    var comp = app.project.activeItem;
    var compLayers = comp.layers;
    var selectedLayer = comp.selectedLayers[0];

    app.beginUndoGroup("'Select every other layer'");

    for (var layer = selectedLayer.index; layer <= compLayers.length; layer = layer + 2) {
        var curlayer = compLayers[layer];

        if (!curlayer.locked) {
            curlayer.selected = true;
        }
    }

    app.endUndoGroup();

})()

// Start from the selected layer