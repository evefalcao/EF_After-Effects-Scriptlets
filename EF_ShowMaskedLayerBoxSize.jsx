/**========================================================================
 * ?                 EF_ShowMaskedLayerBoxSize.jsx
 * @author           Eveline Falcão (https://evelinefalcao.com)
 * @email            hello@evelinefalcao.com
 * @version          1.0.0
 * @createdFor       Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description      Shows the bounding box size for a layer with one or more masks.
 * @thankyou         Based on Charles Bordenave (https://www.nabscripts.com) BoundingBox solution for the RepositionAnchorPoint (version: 3.9) script.
 *========================================================================**/

function showMaskedLayerBox(layer) {
    var comp = layer.containingComp;
    var curTime = comp.time;
    var maskGroup = layer.Masks;

    var top = Infinity, bottom = -Infinity, left = Infinity, right = -Infinity;

    var numMasks = maskGroup.numProperties;
    for (var mask = 1; mask <= numMasks; mask++) {
        var maskShape = maskGroup.property(mask).maskShape;
        var shape = maskShape.valueAtTime(curTime, false);
        var verts = shape.vertices;
        var inTangents = shape.inTangents;
        var outTangents = shape.outTangents;

        for (var i = 0; i < verts.length; i++) {

            var vx = verts[i][0];
            var vy = verts[i][1];
            var inX = vx + inTangents[i][0];
            var inY = vy + inTangents[i][1];
            var outX = vx + outTangents[i][0];
            var outY = vy + outTangents[i][1];

            left = Math.min(left, vx, inX, outX);
            right = Math.max(right, vx, inX, outX);
            top = Math.min(top, vy, inY, outY);
            bottom = Math.max(bottom, vy, inY, outY);
        }
    }

    return {
        width: right - left,
        height: bottom - top,
        left: left,
        top: top
    };
}

// Test
var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var layer = layers[0];
var boundingBox = showMaskedLayerBox(layer);
alert("Width: " + Math.abs(boundingBox.width) + "\nHeight: " + Math.abs(boundingBox.height) + "\nLeft: " + Math.abs(boundingBox.left) + "\nTop: " + Math.abs(boundingBox.top));
