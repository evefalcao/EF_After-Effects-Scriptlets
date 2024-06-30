/**========================================================================
 * ?                  EF_ResetTransform.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Reset the transformations (Anchor Point, Position, Scale, Rotation, Opacity) of the selected layers.
 *========================================================================**/

(function resetTransform(){
    app.beginUndoGroup("'Reset Transform'");

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    function getBoundingBox(layer, currentTime){
        var layerObj = {};
        var sourceRect = layer.sourceRectAtTime(currentTime, true);

        layerObj.top = sourceRect.top;
        layerObj.left = sourceRect.left;
        layerObj.width = sourceRect.width;
        layerObj.height = sourceRect.height;

        return layerObj;
    }

    function getCompSize(comp){
        var compObj = {};

        compObj.width = comp.width;
        compObj.height = comp.height;

        return compObj;
    }

    function setPropertyValue(comp, property, value){
        // Function inspired by zl_CreatePivotalNull_setKeys
        var currentTime = comp.time;
        if(property.isTimeVarying == true){
            var nearestKeyframeIndex = property.nearestKeyIndex(currentTime);
            property.setValueAtKey(nearestKeyframeIndex, value);
        } else {
            property.setValue(value);
        }
    }

    if(layers.length != 0){
        for(var layer = 0; layer < layers.length; layer++){
            var currentTime = comp.time;
            var currentLayer = layers[layer];
            var layerSourceRect = getBoundingBox(currentLayer, currentTime);
            var compSize = getCompSize(comp);

            var anchorPoint = currentLayer.property("ADBE Transform Group").property("ADBE Anchor Point");
            var position = currentLayer.property("ADBE Transform Group").property("ADBE Position");
            var scale = currentLayer.property("ADBE Transform Group").property("ADBE Scale");
            if(currentLayer.threeDLayer){
                var orientation = currentLayer.property("ADBE Transform Group").property("ADBE Orientation");
                var rotationX = currentLayer.property("ADBE Transform Group").property("ADBE Rotate X");
                var rotationY = currentLayer.property("ADBE Transform Group").property("ADBE Rotate Y");
            }
            var rotationZ = currentLayer.property("ADBE Transform Group").property("ADBE Rotate Z");
            var opacity = currentLayer.property("ADBE Transform Group").property("ADBE Opacity");

            anchorPointNew = [layerSourceRect.width/2, layerSourceRect.height/2, 0];
            positionNew = [compSize.width/2, compSize.height/2, 0];
            scaleNew = [100, 100, 100];
            orientationNew = [0, 0, 0];
            rotationX_new = 0;
            rotationY_new = 0;
            rotationZ_new = 0;
            opacityNew = 100;
            
            setPropertyValue(comp, anchorPoint, anchorPointNew);
            setPropertyValue(comp, position, positionNew);
            setPropertyValue(comp, scale, scaleNew);
            if(currentLayer.threeDLayer){
                setPropertyValue(comp, orientation, orientationNew);
                setPropertyValue(comp, rotationX, rotationX_new);
                setPropertyValue(comp, rotationY, rotationY_new);
            }
            setPropertyValue(comp, rotationZ, rotationZ_new);
            setPropertyValue(comp, opacity, opacityNew);
        }
    } else {
        alert("Select some layers to continue.")
    }

    app.endUndoGroup();

})()