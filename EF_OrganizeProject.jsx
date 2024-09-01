/**========================================================================
* ?                  EF_OrganizeProject.jsx
* @author            Eveline Falcão (https://evelinefalcao.com)
* @email             hello@evelinefalcao.com
* @version           1.0.0
* @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
* @description       Creates folders and organizes the project items by type into a Comps, Precomps and Assets folders.
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
        "threeD": [".c4d", ".obj", ".glb", ".gltf", ".ma"],
    };

    var categoriesObj = {
        "Video": [],
        "Still": [],
        "Audio": [],
        "Project": [],
        "Data": [],
        "Library": [],
        "threeD": [],
        "Comps": [],
        "Solids": [],
        "Folders": [],
    };

    var folders = ["Comps", "PreComps", "Assets"];
    var assetFolders = ["Video", "Still", "Audio", "Project", "Data", "Libraries", "3D", "Solids"];

    (function main() {
        var projectItems = app.project.items;

        app.beginUndoGroup("'Organize Project'");

        for (var i = 1; i <= projectItems.length; i++) {
            var item = projectItems[i];
            addItemToCategory(item, fileTypesObj, categoriesObj);
        }
        var mainFolders = createMainFolders(categoriesObj, folders);
        createAssetsFolders(categoriesObj, assetFolders);
        parentSubFolders(assetFolders, mainFolders.createdFolders["Assets"].name);

        // Move items
        for (var key in categoriesObj) {
            if (key != "Folders") {
                var targetFolderName = (key == "threeD" ? "3D" : key);
                moveItemsToFolder(categoriesObj[key], key);
            }
        }
        alert(categoriesObj.Still)
        // for (var i = 0; i < categoriesObj)

        // // Remove Empty Folders
        // for (var item = projectItems.length; item > 0; item--) {
        //     var folderItem = projectItems[item];
        //     if (folderItem instanceof FolderItem) {
        //         removeEmptyFolder(folderItem);
        //     }
        // }

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
            var item = findItemByName(items[i]);
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
        var categories = ["Video", "Still", "Audio", "Project", "Data", "Library", "threeD", "Comps", "Solids", "Folders"];
        var itemName = item.name;
        var itemFormat = itemName.substring(itemName.lastIndexOf(".")).toLowerCase();

        if (item instanceof CompItem) {
            categoriesObj["Comps"].push(itemName);
        } else if (item instanceof FolderItem) {
            categoriesObj["Folders"].push(itemName);
        } else if (item.mainSource instanceof SolidSource) {
            categoriesObj["Solids"].push(itemName);
        } else {
            for (var i = 0; i < categories.length; i++) {
                var type = categories[i];
                var fileType = fileTypesObj[type]; // Eg.: fileTypesObj["Video"]

                for (var j = 0; j < fileType.length; j++) {
                    var format = fileType[j];

                    if (itemFormat == format) {
                        categoriesObj[type].push(itemName);
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

        if (categoriesObj.Video.length != 0 ||categoriesObj.Still.length != 0 ||
        categoriesObj.Audio.length != 0 || categoriesObj.Project.length != 0 ||
        categoriesObj.Data.length != 0 || categoriesObj.Library.length != 0 ||
        categoriesObj.threeD.length != 0 || categoriesObj.Solids.length != 0) createAssets = true;
        
        for (var i = 0; i < categoriesObj.Comps.length; i++) {
            var comp = findItemByName(categoriesObj.Comps[i]);
            if (comp && comp.usedIn.length > 0) {
                createPreComp = true;
            }
        }

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

    function createAssetsFolders(categoriesObj, assetFolders) {
        var createVideo = false;
        var createStill = false;
        var createAudio = false;
        var createProject = false;
        var createData = false;
        var createLibrary = false;
        var create3D = false;
        var createSolids = false;

        if (categoriesObj.Video.length != 0) createVideo = true;
        if (categoriesObj.Still.length != 0) createStill = true;
        if (categoriesObj.Audio.length != 0) createAudio = true;
        if (categoriesObj.Project.length != 0) createProject = true;
        if (categoriesObj.Data.length != 0) createData = true;
        if (categoriesObj.Library.length != 0) createLibrary = true;
        if (categoriesObj.threeD.length != 0) create3D = true;
        if (categoriesObj.Solids.length != 0) createSolids = true;

        var existingFolders = categoriesObj.Folders;
        var folders = assetFolders;

        for (var i = 0; i < folders.length; i++) {
        var folderExists = false;
        
            for (var j = 0; j < existingFolders.length; j++) {
                if (folders[i] === existingFolders[j]) {
                    folderExists = true;
                    break;
                }
            }

            if (!folderExists) {
                switch (folders[i]) {
                    case "Video":
                        if (createVideo) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "Still":
                        if (createStill) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "Audio":
                        if (createAudio) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "Project":
                        if (createProject) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "Data":
                        if (createData) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "Library":
                        if (createLibrary) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "3D":
                        if (create3D) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                    case "Solids":
                        if (createSolids) {
                            var newFolder = app.project.items.addFolder(folders[i]);
                            newFolder.label = 0;
                        }
                        break;
                }
            }
        }
    }

})();