/**========================================================================
 * ?                  EF_ReplaceMissingFootageWithSolid.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Replace all Missing Footage with a white solid with the same size as the layers.
 *========================================================================**/

 (function replaceMissingFootageWithSolid(){
    app.beginUndoGroup("'Replace Missing Footage with Solids'");
    
    var projectItems = app.project.items;

    function replaceWithSolid(layer, index){
        var color = [1.0, 1.0, 1.0]
        var name = 'Solid - ' + index;
        var width = layer.width;
        var height = layer.height;
        var pixelAspect = [1.0];

        layer.replaceWithSolid(color, name, width, height, pixelAspect);
    }

    for(var numItem = projectItems.length; numItem != 0; numItem--){
        currentItem = projectItems[numItem];

        if(currentItem.footageMissing){
            alert(numItem)
            replaceWithSolid(currentItem, numItem)
        }
    }

    app.endUndoGroup();
})()