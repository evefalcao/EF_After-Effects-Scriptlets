/**========================================================================
 * ?                  EF_AddPosterizeTimeZero.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Add "PosterizeTime(0);" to the beginning of all the selected properties expressions.
 *========================================================================**/

function addPosterizeTimeZero(property){
    var propertyExpression = property.expression;
    // if the property has no keyframes or animation driven by expression, apply posterizeTime(0), else leave as is
    if(!property.numKeys){
        property.expression = "posterizeTime(0);" + "\n\n" + propertyExpression;
    }
}

(function mainScriptlet(){
    
    var scriptletName = "'Add Posterize Time Zero'";

    app.beginUndoGroup(scriptletName);

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    if(comp instanceof CompItem && comp != null) {
        var allProperties = comp.selectedProperties;
            if(allProperties.length > 0){
                for(var property = 0; property < allProperties.length; property++){
                    var selectedProperty = allProperties[property];
                    addPosterizeTimeZero(selectedProperty);
                }
            } else {
                alert("Select a property within a layer.");
            }
    } else {
        alert("Select your active Comp in the project panel or timeline.");
    }

    app.endUndoGroup();
})();