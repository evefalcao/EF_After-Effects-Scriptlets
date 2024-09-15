/**========================================================================
 * ?                  EF_ExportLayersExpressionsToFile.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Exports the expressions of a comp to file.
 *========================================================================**/

(function exportLayersExpressionsToFile() {

    app.beginUndoGroup("Export Layers Expressions");

    var projectPath = app.project.file;
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var expressions = ["// " + comp.name];

    function processProperty(property, layerCompName, curLayerName, curLayerIndex) {

        // Pass a layer or a prop
        if (property.propertyType == PropertyType.PROPERTY) { // Check if value is a single property and do something

            if (property.expressionEnabled) {
                var string = "// On " + curLayerIndex + ": \"" + curLayerName + "\" - " + property.name + "\n\n";
                var expression = string + property.expression;
                expressions.push(expression);
            }

        } else {

            for (var i = 1; i <= property.numProperties; i++) {
                processProperty(property.property(i), layerCompName, curLayerName, curLayerIndex);
            }

        }
    }

    for (var layer = 1; layer <= layers.length; layer++) {
        var currentLayer = layers[layer];
        var layerCompName = currentLayer.containingComp.name;
        var curLayerName = currentLayer.name;
        var curLayerIndex = currentLayer.index;
        // alert(curLayerName);
        processProperty(currentLayer, layerCompName, curLayerName, curLayerIndex);
    }

    // If project is saved
    if(projectPath != null){
        var filePath = projectPath.toString().replace(".aep", "");
    } else {
        alert("Save your project to continue.")
    }

    // Separates each item with three line breaks
    var expressionsString = expressions.join("\n\n\n");

    // Prompt to save the file
    var file = new File(filePath + "_" + comp.name + "_Expressions.txt").saveDlg("Select the file destination.", "*.txt");

    // Write the file
    if (file != null) {
        file.open("w");
        file.write(expressionsString);
        file.close();
    }

    app.endUndoGroup();

})();