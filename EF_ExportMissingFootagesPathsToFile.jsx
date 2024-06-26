/**========================================================================
 * ?                  EF_ExportMissingFootagesPathsToFile.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Saves a list of all the missing footages in a project to a text file.
 *========================================================================**/

(function ExportMissingFootagesPathsToFile(){
    var projectItems = app.project.items;
    var missingItems = [];
    var projectPath = app.project.file;

    // Pushes every missing footage to the missingItems Array
    for(var item = 1; item < projectItems.length; item++){
    if(projectItems[item].footageMissing){
        var footagePath = projectItems[item].mainSource.missingFootagePath;
        missingItems.push(footagePath);
        }
    }  

    // If project is saved
    if(projectPath != null){
        var filePath = projectPath.toString().replace(".aep", "");
    } else {
        alert("Save your project to continue.")
    }

    // Separates each item with a line break
    var missingItemsString = missingItems.join("\n");

    // Prompt to save the file
    var file = new File(filePath + "_MissingFiles.txt").saveDlg("Select the file destination.", "*.txt");

    // Write the file
    if (file != null) {
        file.open("w");
        file.writeln(missingItemsString);
        file.close();
    }

    // alert(typeof missingItemsString === "string")
})()