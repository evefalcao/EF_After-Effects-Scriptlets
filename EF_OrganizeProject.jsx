/**========================================================================
* ?                  EF_OrganizeProject.jsx
* @author            Eveline Falcão (https://evelinefalcao.com)
* @email             hello@evelinefalcao.com
* @version           1.0.0
* @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
* @description       Creates folders and organizes the project items by type into a Comps, PreComps and Assets folders.
*========================================================================**/

(function organizeProject() {

    var fileTypesObj = {
        "Video": [".crm", ".mxf", ".hevc", ".3pg", ".3g2", ".amc", ".swf", ".flv", ".f4v", ".gif", ".mov", ".mwts", ".m4v", 
            ".mpg", ".m2p", ".m2v", ".m2a", ".m2t", ".mp4", ".omf", ".avi", ".wmv", ".wma"],
        "Still": [".ai", ".eps", ".ps", ".pdf", ".psd", ".bmp", ".rle", ".dib", ".tif", ".crw", ".nef", ".raf", ".orf", 
            ".mrw", ".dcr", ".mos", ".raw", ".pef", ".srf", ".dng", ".x3f", ".cr2", ".erf", ".cin", ".dpx", ".rla", 
            ".rpf", ".img", ".ei", ".iff", ".tdi", ".jpg", ".jpe", ".heif", ".exr", ".pcx", ".png", ".hdr", ".rgbe", 
            ".xyze", ".sgi", ".bw", ".rgb", ".pic", ".tga", ".vda", ".icb", ".vst"],
        "Audio": [".aac", ".m4a", ".aif", ".aiff", ".mp3", ".mpeg", ".mpg", ".mpa",  ".mpe",".wav"],
        "Project": [".aep", ".aepx", ".prproj", ".aaf"],
        "Data": [".json", ".mgjson", ".csv", ".tsv", ".txt"],
        "Library": [".jsbin", ".jsx"],
        "3D": [".c4d", ".obj", ".glb", ".gltf", ".ma"],
    };

    var categoriesObj = {
        "Video": [],
        "Still": [],
        "Audio": [],
        "Project": [],
        "Data": [],
        "Library": [],
        "3D": [],
        "Solids": [],
        "Comps": [],
        "PreComps": [],
        "Folders": [],
    };

    var folders = ["Comps", "PreComps", "Assets"];
    var assetFolders = ["Video", "Still", "Audio", "Project", "Data", "Library", "3D", "Solids"];

    (function main() {
        var projectItems = app.project.items;

        app.beginUndoGroup("'Organize Project'");

        // Categorize all items
        for (var i = 1; i <= projectItems.length; i++) {
            var item = projectItems[i];
            addItemToCategory(item, fileTypesObj, categoriesObj);
        }

        // Create Folders
        var mainFolders = createMainFolders(categoriesObj, folders);
        createAssetsFolders(categoriesObj);
        parentSubFolders(assetFolders, mainFolders.createdFolders["Assets"].name);

        // Move items
        for (var key in categoriesObj) {
            if (key == "Comps") {
                var targetFolderName = (key == "Comps" ? "1_Comps" : key);
                moveItemsToFolder(categoriesObj[key], targetFolderName);
            } else if (key == "PreComps") {
                var targetFolderName = (key == "PreComps" ? "2_PreComps" : key);
                moveItemsToFolder(categoriesObj[key], targetFolderName);
            } else if (key != "Folders") {
                var targetFolderName = key;
                moveItemsToFolder(categoriesObj[key], targetFolderName);
            }
        }

        // Remove empty folders
        for (var item = projectItems.length; item > 0; item--) {
            var folderItem = projectItems[item];
            if (folderItem instanceof FolderItem) {
                removeEmptyFolder(folderItem);
            }
        }

        app.endUndoGroup();
    })();


    function findItemByName(name) {
        for (var i = 1; i <= app.project.items.length; i++) {
            var item = app.project.items[i];
            if (item.name == name) {
                return item;
            }
        }
        return null;
    }

    function moveItemsToFolder(items, targetFolderName) {
        var itemsLength = items.length;
        var targetFolder = findItemByName(targetFolderName);

        for (var i = 0; i < itemsLength; i++) {
            var item = items[i];
            item.parentFolder = targetFolder;
        }
    }

    function parentSubFolders(childFoldersList, parentName) {
        var parent = findItemByName(parentName);

        for (var childIndex = 0; childIndex < childFoldersList.length; childIndex++){
            var child = findItemByName(childFoldersList[childIndex]);
            if (child) {
                child.parentFolder = parent;
            }
        }
    }

    function removeEmptyFolder(folderItem) {
        if (folderItem.numItems == 0) {
            folderItem.remove();
        }
    }

    function addItemToCategory(item, fileTypesObj, categoriesObj) {
        var categories = ["Video", "Still", "Audio", "Project", "Data", "Library", "3D", "Comps", "PreComps", "Solids", "Folders"];
        var itemName = item.name;
        var itemFormat = itemName.substring(itemName.lastIndexOf(".")).toLowerCase();

        if (item instanceof CompItem && (item.usedIn.length == 0)) {
            categoriesObj["Comps"].push(item);
        } else if (item instanceof CompItem && (item.usedIn.length > 0)) {
            categoriesObj["PreComps"].push(item);
        } else if (item instanceof FolderItem) {
            categoriesObj["Folders"].push(item);
        } else if (item.mainSource instanceof SolidSource) {
            categoriesObj["Solids"].push(item);
        } else {
            for (var i = 0; i < categories.length; i++) {
                var type = categories[i];
                var fileType = fileTypesObj[type]; // Eg.: fileTypesObj["Video"]

                for (var j = 0; j < fileType.length; j++) {
                    var format = fileType[j];

                    if (itemFormat == format) {
                        categoriesObj[type].push(item);
                        return;
                    }
                }
            }
        }
    }

    function createMainFolders(categoriesObj, folders) {
        var createComp = false;
        var createPreComp = false;
        var createAssets = false;
        var projectItems = app.project.items;
        var folderCounter = 1;

        if (categoriesObj.Comps.length != 0) createComp = true;
        if (categoriesObj.PreComps.length != 0) createPreComp = true;

        if (categoriesObj.Video.length != 0 ||categoriesObj.Still.length != 0 ||
        categoriesObj.Audio.length != 0 || categoriesObj.Project.length != 0 ||
        categoriesObj.Data.length != 0 || categoriesObj.Library.length != 0 ||
        categoriesObj.threeD.length != 0 || categoriesObj.Solids.length != 0) createAssets = true;

        var existingFolders = categoriesObj.Folders;
        var createdFolders = {};

        for (var i = 0; i < folders.length; i++) {
            var folderExists = false;

            for (var j = 0; j < existingFolders.length; j++) {
                if (folders[i] === existingFolders[j]) {
                    folderExists = true;
                    break;
                }
            }

            if (!folderExists) {
                var newFolderName = folderCounter + "_" + folders[i];
                switch (folders[i]) {
                    case "Comps":
                        if (createComp) {
                            var newFolder = projectItems.addFolder(newFolderName);
                            newFolder.label = 0;
                            createdFolders["Comps"] = newFolder;
                            folderCounter++;
                        }
                        break;
                    case "PreComps":
                        if (createPreComp) {
                            var newFolder = projectItems.addFolder(newFolderName);
                            newFolder.label = 0;
                            createdFolders["PreComps"] = newFolder;
                            folderCounter++;
                        }
                        break;
                    case "Assets":  
                        if (createAssets) {
                            var newFolder = projectItems.addFolder(newFolderName);
                            newFolder.label = 0;
                            createdFolders["Assets"] = newFolder;
                            folderCounter++;
                        }
                        break;
                }
            }
        }
        return {
            createdFolders: createdFolders
        };
    }

    function createAssetsFolders(categoriesObj) {
        for (var key in categoriesObj) {
            // Skip if the category is Comps, PreComps or Folders
            if (key == "Comps" || key == "PreComps" || key == "Folders") {
                continue;
            }
            // Skip if category is empty
            if (categoriesObj[key].length == 0) {
                continue;
            }
            // Skit folder creation if folder already exists
            if (findItemByName(key) != null) {
                continue;
            }
            // Create folders
            var newFolder = app.project.items.addFolder(key);
            newFolder.label = 0;
        }
    }

})();