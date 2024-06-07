/**========================================================================
 * ?                  EF_CountSelectedItems.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Counts the selected items in the Project Panel and outputs the result to the Info Panel.
 *========================================================================**/

(function countSelectedProjectItems(){

    var selectedItems = app.project.selection;
    
    clearOutput();

    if(selectedItems.length != 0){
        writeLn("Selected items: " + selectedItems.length);
    } else {
        alert("Select some project items to count.")
    }
})();