/**========================================================================
 * ?                  EF_RemoveExpressionsFromLayers.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Removes all expressions from selected layers.
 *========================================================================**/

(function removeLayersExpressions() {

    app.beginUndoGroup("Remove selected layers expressions.")

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    function processProperty(property) {
        // Pass a layer or a prop
        if (property.propertyType == PropertyType.PROPERTY) { // Check if value is a single property and do something
            if (property.expressionEnabled) {
                property.expression = "";
            }
        } else {
            for (var i = 1; i <= property.numProperties; i++) {
                processProperty(property.property(i));
            }
        }
    }

    for (var layer = 0; layer < layers.length; layer++) {
        var currentLayer = layers[layer];
        processProperty(currentLayer);
    }

    app.endUndoGroup();

})();