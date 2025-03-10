/**========================================================================
 * ?                  EF_SequentialMaskToggle.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Sets the Mask Mode to "Add" on the mask corresponding to the layer index. Requested by Tim Weiser.
 *========================================================================**/


(function sequentialMaskToggle(){

  var comp = app.project.activeItem;
  var layers = comp.selectedLayers;

  function findIndexInArray(item) {
    for (var i = 0; i < layers.length; i++) {
        if (layers[i] === item) {
            return i;
        }
    }
    return -1;
  }

  app.beginUndoGroup("'Sequential Mask Toggle'");

  for (var layer = 0; layer < layers.length; layer++) {

    var curLayer = layers[layer];
    var curLayerIndexInSelection = findIndexInArray(layers[layer]);
    var maskTotal = curLayer.mask.numProperties;

    for (var maskIndex = 1; maskIndex <= maskTotal; maskIndex++) {
      var curMask = curLayer.mask(maskIndex);

      if (curMask.propertyIndex === curLayerIndexInSelection + 1) {
        curMask.maskMode = MaskMode.ADD;
      } else {
        curMask.maskMode = MaskMode.NONE;
      }
    }
  }

  app.endUndoGroup();

})();