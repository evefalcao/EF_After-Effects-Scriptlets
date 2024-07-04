/**========================================================================
 * ?                  EF_ShowLayerSizeAndPosition.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Shows layer size and position in the Info Panel. The position shown is relative to parent and the position in the comp.
 *========================================================================**/

(function showLayerSizeAndPosition(){

    function getBoundingBox(layer, currentTime){
        var layerObj = {};
        var sourceRect = layer.sourceRectAtTime(currentTime, true);

        layerObj.top = sourceRect.top;
        layerObj.left = sourceRect.left;
        layerObj.width = sourceRect.width;
        layerObj.height = sourceRect.height;

        return layerObj;
    }

    function fixPositionDecimals(propertyValue, digits){
        var posObj = {};

        posObj.x = propertyValue[0].toFixed(digits);
        posObj.y = propertyValue[1].toFixed(digits);
        posObj.z = propertyValue[2].toFixed(digits);

        return posObj;
    }

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    if(layers.length > 0){
        var currentLayer = layers[0];
        var currentTime = comp.time;

        var boundingBox = getBoundingBox(currentLayer, currentTime);
        var positionProp = currentLayer.property("ADBE Transform Group").property("ADBE Position");
        var position = currentLayer.property("ADBE Transform Group").property("ADBE Position").value;
        var anchorProp = currentLayer.property("ADBE Transform Group").property("ADBE Anchor Point");
        var width = boundingBox.width.toFixed(1);
        var height = boundingBox.height.toFixed(1);
        var posFixed = fixPositionDecimals(position, 1);

        positionProp.expression = "";
        positionProp.expression =
            "l = thisLayer;\rtry {\r" +
            "   l.toComp(l.anchorPoint);\r" +
            "}\r" +
            "catch(e) {\r" +
            "  l.toComp(l.anchorPoint);\r" +
            "}";
        positionProp.expressionEnabled = false;
        positionProp.expressionEnabled = true;
        var newPositionValue = positionProp.valueAtTime(currentTime, false);
        var newPosFixed = fixPositionDecimals(newPositionValue, 1);
        positionProp.expression = "";
        
        writeLn(currentLayer.name);
        writeLn("Size: " + "[" + width + ", " + height + "]");
        writeLn("Position: [" + posFixed.x + ", " + posFixed.y + ", " + posFixed.z + "]");
        if(currentLayer.parent) {
            writeLn("Comp Pos: [" + newPosFixed.x + ", " + newPosFixed.y + ", " + newPosFixed.z + "]");
        }
        
    } else {
        alert("Select one layer to continue.")
    }

})();