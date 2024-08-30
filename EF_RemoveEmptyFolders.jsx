/**========================================================================
* ?                  EF_RemoveEmptyFolders.jsx
* @author            Eveline Falcão (https://evelinefalcao.com)
* @email             hello@evelinefalcao.com
* @version           1.0.0
* @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
* @description       Removes empty folders.
*========================================================================**/


(function removeEmptyFolders() {
    function removeEmptyFolder(folderItem) {
        if (folderItem.numItems == 0) {
            folderItem.remove();
        }
    }

    var projectItems = app.project.items;

    app.beginUndoGroup("'Remove empty folders'");
    for (var item = projectItems.length; item > 0; item--) {
        var folderItem = projectItems[item];
        if (folderItem instanceof FolderItem) {
            removeEmptyFolder(folderItem);
        }
    }
    app.endUndoGroup();
})();