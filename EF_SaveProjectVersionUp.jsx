/**========================================================================
 * ?                  EF_SaveProjectVersionUp.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Quickly saves a new version of the current project file versioning up the suffix, ex.: from "_v001" to "_v002".
 *========================================================================**/


(function saveProjectVersionUp(){

    function padWithZeros(number, digits) {
        var str = number.toString()
        while (str.length < digits) {
            str = '0' + str;
        }
        return str;
    }

    function findCurrentVersionNumber(pattern, projectString){
        var matchVersion = projectString.match(pattern);
        var currentVersion;

        if(!matchVersion){
            currentVersion = 1;
        } else {
            currentVersion = parseInt(matchVersion[1], 10);
        }

        return currentVersion;
    }
    
    function processProjectName(projectPath){
        var projectName = projectString.replace(pattern, "").replace(".aep", "");
        
        return projectName;
    }

    var project = app.project;
    var projectPath = project.file;

    if(!projectPath){
        project.saveWithDialog();
    }
    var pattern = /_v(\d+)/;
    var projectString = projectPath.toString();
    var currentVersionInt = findCurrentVersionNumber(pattern, projectString); // identifies current version
    var newProjString = processProjectName(projectString);
    var newVersionNumber = currentVersionInt + 1;

    var fileObject = new File(newProjString + "_v" + padWithZeros(newVersionNumber, 3) + ".aep");
    project.save(fileObject);

})();