/**========================================================================
 * ?                  EF_ExportSelectedCompsExpressions.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Exports the expressions of the selected comps in the Projec Panel to a .jsx file. Each comp exports a file next to the project.
 *========================================================================**/

(function exportLayersExpressionsToFile() {

    (function main() {
        var project = app.project;
        var projectPath = project.file;
        var projectName = projectPath.toString();
        var projItems = project.selection;
        var expressions = [];

        // Check if project is saved
        if (projectPath != null) {
            var filePath = projectPath.toString().replace(".aep", "");
        } else {
            alert("Save your project to continue.");
        }

        app.beginUndoGroup("Export Comps Expressions");
        for (var item = 0; item < projItems.length; item++) {
            var curItem = projItems[item];

            if (curItem instanceof CompItem) {
                var curComp = projItems[item];
                var layers = curComp.layers;

                for (var layer = 1; layer <= layers.length; layer++) {
                    var currentLayer = layers[layer];
                    var curLayerName = currentLayer.name;
                    var curLayerIndex = currentLayer.index;

                    processProperty(currentLayer, curLayerName, curLayerIndex, expressions);
                }

                if (expressions.length != 0) {
                    // Add the project and comp name to the first element of the array
                    var compString = "/*\n\tProject: " + projectName + "\n\tComposition: " + curComp.name + "\n*/";
                    expressions.unshift(compString);

                    // Join array and save file
                    var expressionsString = expressions.join("\n\n\n\n");
                    saveFile(filePath, "Expressions", ".jsx", expressionsString, curComp);

                    // Reset the expressions array
                    expressions = [];
                }

            }
        }
        app.endUndoGroup();
    })();


    // Supporting functions
    function processProperty(property, curLayerName, curLayerIndex, expressionsList) {

        // Pass a layer or a prop
        if (property.propertyType == PropertyType.PROPERTY) { // Check if value is a single property and do something

            if (property.expressionEnabled) {
                var layerAndPropInfo = "// Layer " + curLayerIndex + ": \"" + curLayerName + "\" - " + property.name;
                var exp = property.expression.replace(/[\r\n]+/g, "\n").trim();
                var expression = layerAndPropInfo + "\n" + exp;
                expressionsList.push(expression);
            }

        } else {

            for (var i = 1; i <= property.numProperties; i++) {
                processProperty(property.property(i), curLayerName, curLayerIndex, expressionsList);
            }

        }
    }

    function saveFile(filePath, fileSuffix, fileFormat, content, comp) {
        // Prompt to save the file
        var extension = fileFormat;
        var compName = comp.name;
        var file = new File(filePath + "_" + compName + "_" + fileSuffix + extension);

        // Write the file
        if (file != null) {
            file.open("w");
            file.write(content);
            file.close();
        }
    }

})();