/**========================================================================
 * ?                  EF_BatchChangeFrameRate.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Batch changes the frame rate of all compositions in the project.
 *========================================================================**/

var newFrameRate = 30;

function setCompFrameRate(comp, frameRate) {
    comp.frameRate = frameRate;
}

app.beginUndoGroup("Batch Change Frame Rate");

for (var i = 1; i <= app.project.numItems; i++) {
    var item = app.project.item(i);
    if (item instanceof CompItem) {
        setCompFrameRate(item, newFrameRate);
    }
}

app.endUndoGroup();