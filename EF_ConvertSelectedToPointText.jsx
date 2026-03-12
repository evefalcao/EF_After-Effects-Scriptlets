/**========================================================================
 * ?                  EF_ConvertSelectedToPointText.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Batch converts selected text layers to point text.
 *========================================================================**/

(function ConvertSelectedToPointText() {
  var selectedLayers = app.project.activeItem.selectedLayers;
  var cmdID = app.findMenuCommandId('Convert to Point Text');

  app.beginUndoGroup("'Convert Selected to Point Text'");

  for (var i = 0; i < selectedLayers.length; i++) {
    var layer = selectedLayers[i];
    if (layer instanceof TextLayer) {
      app.executeCommand(cmdID);
    }
  }

  app.endUndoGroup();

})();