/**========================================================================
 * ?                  EF_ChangeFontsInProject.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Changes the font and style of text layers of the entire project.
 *========================================================================**/

var newFont = "Shikamaru";
var newStyle = "Regular";

function changeFontsInTextLayer(textLayer, fontName, fontStyle) {
    var textProp = textLayer.property("Source Text");
    var textDocument = textProp.value;
    textDocument.font = fontName;
    textProp.setValue(textDocument);
}

function processComp(comp, fontName, fontStyle) {
    for (var i = 1; i <= comp.numLayers; i++) {
        var layer = comp.layer(i);
        if (layer instanceof TextLayer) {
            changeFontsInTextLayer(layer, fontName, fontStyle);
        } else if (layer instanceof AVLayer && layer.source instanceof CompItem) {
            processComp(layer.source, fontName, fontStyle);
        }
    }
}

app.beginUndoGroup("Batch Change Fonts");

for (var i = 1; i <= app.project.numItems; i++) {
    var item = app.project.item(i);
    if (item instanceof CompItem) {
        processComp(item, newFont, newStyle);
    }
}

app.endUndoGroup();
