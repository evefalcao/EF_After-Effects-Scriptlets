/**========================================================================
 * ?                  EF_RemoveExpressionsFromProperty.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Removes all expressions from the selected properties.
 *========================================================================**/

(function removePropertiesExpressions(){
    app.beginUndoGroup("'Remove properties expressions'")

    var comp = app.project.activeItem;
    if(comp instanceof CompItem && comp != null) {
        var allProperties = comp.selectedProperties;

            if(allProperties.length > 0){
                for(var property = 0; property < allProperties.length; property++){
                    var selectedProperty = allProperties[property];
                    selectedProperty.expression = "";
                }
            } else {
                alert("Select a property within a layer.");
            }

    } else {
        alert("Select your active Comp in the project panel or timeline.");
    }

    app.endUndoGroup();
})();