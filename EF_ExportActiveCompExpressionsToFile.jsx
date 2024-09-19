/**========================================================================
 * ?                  EF_ExportActiveCompExpressionsToFile.jsx
 * @author            Eveline Falcão (https://evelinefalcao.com)
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Exports the expressions of the active comp to a .jsx file.
 *========================================================================**/

(function exportActiveCompExpressionsToFile() {

    app.beginUndoGroup("Export Active Comp Expressions");

    var project = app.project;
    var projectPath = project.file;
    var projectName = projectPath.toString();
    var comp = project.activeItem;
    var layers = comp.layers;
    var docHeader = "/*\n" + "\tProject: " + projectName + "\n\tComposition: " + comp.name + "\n*/";
    var expressions = [docHeader];

    function processProperty(property, curLayerName, curLayerIndex) {

        // Pass a layer or a prop
        if (property.propertyType == PropertyType.PROPERTY) { // Check if value is a single property and do something

            if (property.expressionEnabled) {
                var string = "// On " + curLayerIndex + ": \"" + curLayerName + "\" - " + property.name + "\n";
                var exp = property.expression.replace(/\n\r/g, "");
                var expression = string + exp;
                expressions.push(expression);
            }

        } else {

            for (var i = 1; i <= property.numProperties; i++) {
                processProperty(property.property(i), curLayerName, curLayerIndex);
            }

        }
    }

    for (var layer = 1; layer <= layers.length; layer++) {
        var currentLayer = layers[layer];
        var curLayerName = currentLayer.name;
        var curLayerIndex = currentLayer.index;
        // alert(curLayerName);
        processProperty(currentLayer, curLayerName, curLayerIndex);
    }

    // Check if project is saved
    if(projectPath != null){
        var filePath = projectPath.toString().replace(".aep", "");
    } else {
        alert("Save your project to continue.")
    }

    // Separates each item with three line breaks
    var expressionsString = expressions.join("\n\n\n");

    // Prompt to save the file
    var file = new File(filePath + "_" + comp.name + "_Expressions.jsx").saveDlg("Select the file destination.", "*.jsx");

    // Write the file
    if (file != null) {
        file.open("w");
        file.write(expressionsString);
        file.close();
    }

    app.endUndoGroup();

})();