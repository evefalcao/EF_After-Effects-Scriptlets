/**========================================================================
 * ?                  EF_FadeAudioInOut.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Fades audio in and out in the selected layers.
 *========================================================================**/

(function FadeAudioInOut() {

  var myComp = app.project.activeItem;
  var layers = myComp.selectedLayers;
  var fadeDuration = 0.5;

  function fadeAudioInOut(layer, duration) {
      var audioLevels = layer.property("Audio").property("Audio Levels");
      var inPoint = layer.inPoint;
      var outPoint = layer.outPoint;

      // Fade In
      audioLevels.setValueAtTime(inPoint, [-48, -48]);
      audioLevels.setValueAtTime(inPoint + duration, [0, 0]);

      // Fade Out
      audioLevels.setValueAtTime(outPoint - duration, [0, 0]);
      audioLevels.setValueAtTime(outPoint, [-48, -48]);
  }

  app.beginUndoGroup("Fade Audio In and Out");

  for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      if (layer.hasAudio) {
          fadeAudioInOut(layer, fadeDuration);
      }
  }

  app.endUndoGroup();

})();