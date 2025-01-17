/**========================================================================
 * ?                  EF_FindAndReplaceLayer.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Find a layer by name and replace it with another item. Is case sensitive.
 *========================================================================**/

(function findAndReplaceLayer(){

    var comps = app.project.selection;
    var layerInput = prompt("Type the Layer Name you wish to replace:", "Layer Name");
    if (layerInput) {
        var targetLayerName = layerInput.toString();
    }
    var sourceInput = prompt("Type the Item Name you wish to replace the layer with:", "Source Name");
    if (sourceInput) {
        var targetSourceName = sourceInput.toString();
    }

    var projectItems = app.project.items;

    for (var item = 1; item <= projectItems.length; item++) {
        if (projectItems[item].name == targetSourceName) {
            var targetSource = projectItems[item];
        }
    }

    app.beginUndoGroup("'Replace Layers'");
    for (var item = 0; item < comps.length; item++) {
        var curItem = comps[item];
        if (curItem instanceof CompItem) {
            var layers = curItem.layers;

            for (var layer = 1; layer <= layers.length; layer++) {
                var currentLayer = layers[layer];
                var curLayerName = currentLayer.name;

                if (curLayerName == targetLayerName) {
                    currentLayer.replaceSource(targetSource, true);
                }
            }
        }
    }
    app.endUndoGroup();

})();