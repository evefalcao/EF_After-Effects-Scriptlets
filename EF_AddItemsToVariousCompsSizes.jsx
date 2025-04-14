/**========================================================================
 * ?                  EF_AddItemsToVariousCompsSizes.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Quickly saves the given frame of the selected Comps to PSD next to the project file.
 *========================================================================**/

(function addItemsToVariousCompsSizes() {

    function removeExtension(filename) {
        var lastDot = filename.lastIndexOf(".");
        if (lastDot > -1) {
            return filename.substring(0, lastDot);
        }
        return filename;
    }

    function createCompWithItem(baseName, width, height, item) {
        var duration = item.duration || 1;
        var frameRate = item.mainSource && item.mainSource.frameRate ? item.mainSource.frameRate : 30;

        var compName = baseName + "_" + width + "x" + height;
        var comp = app.project.items.addComp(compName, width, height, 1, duration, frameRate);
        var layer = comp.layers.add(item);

        var itemWidth = item.width;
        var itemHeight = item.height;

        if (itemWidth === 0 || itemHeight === 0) {
            alert("Item '" + baseName + "' has no width or height.");
            return;
        }

        var scaleX = width / itemWidth;
        var scaleY = height / itemHeight;
        var finalScale = Math.max(scaleX, scaleY) * 100;

        layer.property("Scale").setValue([finalScale, finalScale]);

        return comp;
    }

    app.beginUndoGroup("'Add Items to Comps'");

    var selectedItems = app.project.selection;

    if (selectedItems.length === 0) {
        alert("Please select one or more footage items in the Project panel.");
        app.endUndoGroup();
        return;
    }

    for (var i = 0; i < selectedItems.length; i++) {
        var curItem = selectedItems[i];
        var curItemName = removeExtension(curItem.name);

        if (!(curItem instanceof FootageItem)) {
            alert("Item '" + curItem.name + "' is not a valid footage item. Skipping.");
            continue;
        }

        createCompWithItem(curItemName, 1920, 1080, curItem);
        createCompWithItem(curItemName, 1080, 1080, curItem);
        createCompWithItem(curItemName, 1080, 1920, curItem);
    }

    app.endUndoGroup();
})();
