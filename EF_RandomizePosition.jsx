/**========================================================================
 * ?                  EF_RandomizePosition.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Randomizes the selected layers' position by a given number.
 *========================================================================**/

(function randomizePosition(){

    var myComp = app.project.activeItem;
    var layers = myComp.selectedLayers;

    var xPosInput = prompt("Randomize X Position up to:", "10");
    if (xPosInput) {
        var xPosIncrement = xPosInput;
    }
    var yPosInput = prompt("Randomize Y Position up to:", "10");
    if (yPosInput) {
        var yPosIncrement = yPosInput;
    }

    if (myComp) {
        if (layers.length != 0) {
            app.beginUndoGroup("'Randomize Position'");
            for (var i = 0; i < layers.length; i++) {
                var currentLayer = layers[i];
                var positionProp = currentLayer.property("Position");
        
                if (positionProp && positionProp.canSetExpression) {
                    var currentPosition = positionProp.value;
                    
                    var randomX = (Math.random() - 0.5) * 2 * xPosIncrement;
                    var randomY = (Math.random() - 0.5) * 2 * yPosIncrement;
        
                    var newPosition = [
                        currentPosition[0] + randomX,
                        currentPosition[1] + randomY
                    ];
                    positionProp.setValue(newPosition);
                }
            }
            app.endUndoGroup();
        }
    }
})();
