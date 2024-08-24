/**========================================================================
 * ?                  EF_CreateMasksFromText.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Creates masks from selected text layers by executing the "Create Masks from Text" menu command.
 *========================================================================**/
 
(function createMasksFromText() {

    function processLayers(layer) {
        var comp = layer.containingComp;
		var initialSelection = comp.selectedLayers;

        if (layer instanceof TextLayer) {
            // Deselect all layers
            for (var k = 0; k < layers.length; k++) {
                layers[k].selected = false;
            }

            // Select only the current layer
            layer.selected = true;

            // 2933: CreateOutlineMasks ("Create Masks from Text")
            app.executeCommand(2933); 

            // Deselect the created solid layer
            var newLayer = comp.selectedLayers[0];
            newLayer.selected = false;
        }
    }
    
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    app.beginUndoGroup("'Create Masks from Text Layer'");

    for (var layer = 0; layer < layers.length; layer++) {
        var curLayer = layers[layer];
        processLayers(curLayer);

        // Reselect the original layers
        for (var j = 0; j < layers.length; j++) {
            layers[j].selected = true;
        }
    }

    app.endUndoGroup();

})()