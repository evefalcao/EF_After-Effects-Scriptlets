/**========================================================================
 * ?                  EF_SaveSelectedCompsToPNG.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Quickly saves the current frame of the selected Comps to PNG next to the project file.
 *========================================================================**/

(function saveFrameToPNG(){

    function currentTimeToFrames(currentTime, frameRate){
        return Math.round(currentTime * frameRate);
    }

    function padWithZeros(number, digits) {
        var str = number.toString()
        while (str.length < digits) {
            str = '0' + str;
        }
        return str;
    }

    var selection = app.project.selection;

    for (var item = 0; item < selection.length; item++) {
        var curComp = selection[item];
        var compName = curComp.name;

        if(curComp instanceof CompItem && curComp != null) {
            var currentTime = curComp.time;
            var frameRate = curComp.frameRate;
            var currentFrame = currentTimeToFrames(currentTime, frameRate);
            var projectPath = app.project.file;
    
            if(projectPath != null){
                var stringProjPath = projectPath.toString().replace(".aep", "");
                curComp.saveFrameToPng(currentTime, File(stringProjPath + "_" + compName + "_" + padWithZeros(currentFrame, 6) + ".png"));
            } else {
                alert("Save your project to continue.")
            }
            
        } else {
            alert("Select your active Comp in the project panel or timeline.");
        }
    }

})();