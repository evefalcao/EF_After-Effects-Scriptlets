/**========================================================================
 * ?                     EF_CreateFolderStructure.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Create folders in a project.
 *========================================================================**/

 (function createFolderStructure(){
    app.beginUndoGroup("Create Folder Structure");

    var mainFolders = ["1_Input", "2_PreComps", "3_Output", "Solids"];
    var inputSubFolders = ["Stills", "Audio", "Videos", "3D", "Data", "Projects", "Missing"];
    var inputFolder = "1_Input";

    function findItemByName(itemName){
        var myItem;
        var itemCollection = app.project.items;

        for(var itemIndex = 1; itemIndex <= itemCollection.length; itemIndex++){
            if (itemCollection[itemIndex].name == itemName){
                myItem = itemCollection[itemIndex];
            }
        }
        return myItem;
    }

    function createFolders(mainFoldersList, inputSubFoldersList){
        for(var folderIndex = 0; folderIndex < mainFoldersList.length; folderIndex++){
            var currentItem = app.project.items.addFolder(mainFoldersList[folderIndex]);
            currentItem.label = 0;
        }

        for(var folderIndex = 0; folderIndex < inputSubFoldersList.length; folderIndex++){
            var currentItem = app.project.items.addFolder(inputSubFoldersList[folderIndex]);
            currentItem.label = 0;
        }

    }

    function parentSubFolders(inputSubFoldersList, parentFolder){
        var myFolder = findItemByName(parentFolder);
        var currentItem;

        for (var item = 0; item < inputSubFoldersList.length; item++){
            currentItem = findItemByName(inputSubFoldersList[item]);
            currentItem.parentFolder = myFolder;
        }
    }

    createFolders(mainFolders, inputSubFolders, inputFolder);
    parentSubFolders(inputSubFolders, inputFolder);

    app.endUndoGroup();
 })();