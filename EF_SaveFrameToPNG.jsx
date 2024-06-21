/**========================================================================
 * ?                  EF_SaveFrameToPNG.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Quickly saves the current frame to PNG next to the project file.
 *========================================================================**/

(function saveFrameToPNG(){

    function currentTimeToFrames(currentTime, frameRate){
        return Math.round(currentTime * frameRate);
    }

    var comp = app.project.activeItem;
    var projectPath = app.project.file.toString().replace(".aep", "");
    var currentTime = comp.time;
    var frameDuration = comp.frameDuration;
    var formattedTime = currentTime.toString();
    var frameRate = comp.frameRate;
    var currentFrame = currentTimeToFrames(currentTime, frameRate).toFixed();

    comp.saveFrameToPng(currentTime, File(projectPath + "_00" + currentFrame + ".png"));

})();
