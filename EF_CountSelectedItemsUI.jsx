/**========================================================================
 * ?                  EF_CountSelectedItemsUI.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       ScriptUI version of the CountSelectedItem scriptlet.
 *========================================================================**/

(function countSelectedProjectItemsUI(thisObj) {

    var resourceString =
        "group { \
            orientation: 'column', \
            alignment: ['left', 'top'], \
            textDisplay: StaticText { text: 'Selected items: 0', properties: { multiline: true, preferredSize: [-1, -1] } }, \
            countButton: Button { text: 'Count' }, \
        }";

    function createUserInterface(thisObj, userInterfaceString, scriptName) {

        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, undefined, { resizeable: true });
        if (myPanel == null) return myPanel;
        var UI = myPanel.add(userInterfaceString);

        myPanel.layout.layout(true);
        myPanel.layout.resize();
        myPanel.onResizing = myPanel.onResize = function () {
            this.layout.resize();
        }
        
        var countButton = UI.countButton;
        var textDisplay = UI.textDisplay;
        
        countButton.onClick = function() {
            var itemsCount = 0;
            var selectedItems = app.project.selection;
            var selectedItemsLen = selectedItems.length;
            
            if (selectedItemsLen > 0) {
                itemsCount = selectedItemsLen;
                textDisplay.text = "Selected items: " + itemsCount;
            } else {
                alert("Select the project items to count.");
                textDisplay.text = "Selected items: 0";
            }
        };
        
        if ((myPanel != null) && (myPanel instanceof Window)) {
            myPanel.center();
            myPanel.show();
        }

        return UI;
    }

    var scriptName = "Count Selected Items";
    var UI = createUserInterface(thisObj, resourceString, scriptName);

})(this);