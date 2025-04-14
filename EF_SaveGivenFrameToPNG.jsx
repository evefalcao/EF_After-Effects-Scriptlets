/**========================================================================
 * ?                  EF_SaveGivenFrameToPNG.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Saves selected comps in the Project Panel as PNG. Asks the user to input the frame number.
 *========================================================================**/

(function saveFrameToPNG(){

  function currentTimeToFrames(currentTime, frameRate){
      return Math.round(currentTime * frameRate);
  }

  function framesToCurrentTime(frameNumber, frameRate) {
    return frameNumber / frameRate;
  }

  function padWithZeros(number, digits) {
      var str = number.toString()
      while (str.length < digits) {
          str = '0' + str;
      }
      return str;
  }

  var selection = app.project.selection;
  var frameToSave = prompt("Input the Frame Number:", "Eg: 1, 2, 3, ...");

  for (var item = 0; item < selection.length; item++) {
      var curComp = selection[item];
      var compName = curComp.name;

      if(curComp instanceof CompItem && curComp != null) {
          var targetFrame = framesToCurrentTime(frameToSave, curComp.frameRate);
          var frameRate = curComp.frameRate;
          var currentFrame = currentTimeToFrames(targetFrame, frameRate);
          var projectPath = app.project.file;
  
          if(projectPath != null){
              var stringProjPath = projectPath.toString().replace(".aep", "");
              curComp.saveFrameToPng(targetFrame, File(stringProjPath + "_" + compName + "_" + padWithZeros(currentFrame, 6) + ".png"));
          } else {
              alert("Save your project to continue.")
          }
          
      } else {
          alert("Select your active Comp in the project panel or timeline.");
      }
  }

})();