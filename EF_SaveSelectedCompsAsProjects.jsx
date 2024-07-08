/**========================================================================
 * ?                  EF_SaveSelectedCompsAsProjects.jsx
 * @author            Eveline Falcão <https://evelinefalcao.com>
 * @email             hello@evelinefalcao.com
 * @version           1.0.0
 * @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description       Saves selected comps in the Project Panel as a project.
 *========================================================================**/

(function saveSelectedCompsAsProjects() {

    function getProjectItem(name) {
        for (var i = 1; i <= app.project.items.length; i++) {
            var item = app.project.items[i];
            if (item.name == name) {
                return item;
            }
        }
        return null;
    }

    function getSelectedItemsNames(selectedItems){
        var itemsList = [];
        for(var i = 0; i < selectedItems.length; i++){
            var curItemName = selectedItems[i].name;
            itemsList.push(curItemName);
        }
        return itemsList;
    }

    var project = app.project;
    var selectedItems = project.selection;
    var projectPath = project.file;

    if(!projectPath){
        project.saveWithDialog();
    }
    var folderPath = projectPath.toString().replace(/[^\\\/]+$/, "");

    // Saves selectedItems names
    var itemsNames = getSelectedItemsNames(selectedItems);

    for(var item = itemsNames.length - 1; item >= 0; item--){
        var currentItem = getProjectItem(itemsNames[item]); // Find item by name

        if(currentItem instanceof CompItem){
            var curCompName = currentItem.name;
            alert(curCompName)

            // Reduce comp
            try {
                project.reduceProject(currentItem);
            } catch (e) {
                alert("Error reducing project for " + curCompName + ": " + e.message);
                continue;
            }

            // Save comp
            var fileObject = new File(folderPath + curCompName + ".aep");
            project.save(fileObject);

            // Reopen original project
            var mainProject = new File(projectPath);
            app.open(mainProject);

            // Reinitialize the project
            project = app.project;
        }
        itemsNames.splice(item, 1);
    }
})()