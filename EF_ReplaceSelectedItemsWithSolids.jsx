/**========================================================================
 * ?                  EF_ReplaceSelectedItemsWithSolids.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Replace all selected footages in the Project Panel with a white solid with the same size as the layers.
 *========================================================================**/

 (function replaceSelectedFootageWithSolids(){
    app.beginUndoGroup("'Replace Selected Footage with Solids'");
    
    var selectedItems = app.project.selection;

    function replaceWithSolid(layer, index){
        var color = [1.0, 1.0, 1.0]
        var name = 'Solid - ' + index;
        var width = layer.width;
        var height = layer.height;
        var pixelAspect = [1.0];

        layer.replaceWithSolid(color, name, width, height, pixelAspect);
    }

    for(var item = 0; item < selectedItems.length; item++){
        currentItem = selectedItems[item];

        if(currentItem instanceof FootageItem){
            replaceWithSolid(currentItem, item);
        }
    }

    app.endUndoGroup();
})()