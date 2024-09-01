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

    var assetsObj = {
        "Video": [],
        "Still": [],
        "Audio": [],
        "Project": [],
        "Data": [],
        "Library": [],
        "3D": [],
        "Solids": [],
    };
    var compsList = [];
    var preCompsList = [];
    var foldersList = [];

    (function main() {
        var projectItems = app.project.items;

        app.beginUndoGroup("'Organize Project'");

        // Categorize all items
        for (var i = 1; i <= projectItems.length; i++) {
            var item = projectItems[i];
            addItemToCategory(item);
        }

        // Create Folders
        var mainFolders = createMainFolders(assetsObj);
        createAssetsFolders(assetsObj, mainFolders["Assets"]);

        // Move comp items
        moveItemsToFolder(compsList, mainFolders["Comps"].name)
        // Move preComp items
        moveItemsToFolder(preCompsList, mainFolders["PreComps"].name)
        // Move assets items
        for (var assetType in assetsObj) {
            var assetList = assetsObj[assetType];
            moveItemsToFolder(assetList, assetType)
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

    function removeEmptyFolder(folderItem) {
        if (folderItem.numItems == 0) {
            folderItem.remove();
        }
    }

    function addItemToCategory(item) {
        if (item instanceof CompItem && (item.usedIn.length == 0)) {
            compsList.push(item);
        } else if (item instanceof CompItem && (item.usedIn.length > 0)) {
            preCompsList.push(item);
        } else if (item instanceof FolderItem) {
            foldersList.push(item);
        } else if (item.mainSource instanceof SolidSource) {
            assetsObj["Solids"].push(item);
        } else {
            var itemName = item.name;
            var itemFileExtension = itemName.substring(itemName.lastIndexOf(".")).toLowerCase();

            for (var key in fileTypesObj) {
                var fileType = fileTypesObj[key]; // Eg.: fileTypesObj["Video"]
                for (var j = 0; j < fileType.length; j++) {
                    var fileExtension = fileType[j];
                    if (itemFileExtension == fileExtension) {
                        assetsObj[key].push(item);
                        return;
                    }
                }
            }
        }
    }

    function getOrCreateFolder(name, parent) {
        // Create folder
        var folder = findItemByName(name);
        if (folder == null) {
            folder = app.project.items.addFolder(name);
        }
        // Parent new folder
        if (parent) {
            folder.parentFolder = parent;
        }
        folder.label = 0;

        return folder;
    }

    function createMainFolders(categoriesObj) {
        var folderCounter = 1;
        var createdFolders = {};

        if (compsList.length > 0) {
            var newFolder = getOrCreateFolder(folderCounter + "_Comps");
            createdFolders["Comps"] = newFolder;
            folderCounter++;
        }
        if (preCompsList.length > 0) {
            var newFolder = getOrCreateFolder(folderCounter + "_PreComps");
            createdFolders["PreComps"] = newFolder;
            folderCounter++;
        }
        for (var key in assetsObj) {
            if (assetsObj[key].length > 0) {
                var newFolder = getOrCreateFolder(folderCounter + "_Assets");
                createdFolders["Assets"] = newFolder;
                folderCounter++;
                break;
            }
        }

        return createdFolders;
    }

    function createAssetsFolders(categoriesObj, parent) {
        for (var key in categoriesObj) {
            // Create folder if category is not empty
            if (categoriesObj[key].length > 0) {
                getOrCreateFolder(key, parent);
            }
        }
    }

})();