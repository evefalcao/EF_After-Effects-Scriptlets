/**========================================================================
 * ?                  EF_RemoveUselessMasks.jsx
 * @author         :  Eveline Falcão <https://evelinefalcao.com>
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Remove all masks set in "NONE" mode from the selected layers. Requested by Tim Weiser. Thanks Nic Dean for the referral.
 *========================================================================**/

(function removeUselessMasks(){

  var comp = app.project.activeItem;
  var layers = comp.selectedLayers;

  app.beginUndoGroup("'Remove Useless Masks'");

  for (var layer = 0; layer < layers.length; layer++) {
      var curLayer = layers[layer];

      for (var maskTotal = curLayer.mask.numProperties; maskTotal >= 1; maskTotal--) {
        var curMask = curLayer.mask(maskTotal);
          if (curMask.maskMode === MaskMode.NONE) {
            curMask.remove();
          }
      }
  }

  app.endUndoGroup();

})();