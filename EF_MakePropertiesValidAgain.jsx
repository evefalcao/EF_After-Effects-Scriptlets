/**========================================================================
* ?                  EF_MakePropertiesValidAgain.jsx
* @author            Eveline Falcão <https://evelinefalcao.com>
* @email             hello@evelinefalcao.com
* @version           1.0.0
* @createdFor        Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
* @description       Create a reference object for the selected properties, allowing you to locate them after they become invalid due to added or removed effects.
*========================================================================**/

(function makePropertiesValidAgain() {
    var comp = app.project.activeItem;
    var selectedProps = comp.selectedProperties;

    if (selectedProps.length > 0) {
        // Make property references
        var propsToProcess = [];
        for (var i = 0; i < selectedProps.length; i++) {
            var currentProp = selectedProps[i];
            var reference = createNestedPropertyReference(currentProp);
            propsToProcess.push(reference);
        }
    
        // Get property from references
        for (var i = 0; i < propsToProcess.length; i++) {
            var reference = propsToProcess[i];
            var prop = getNestedPropertyFromReference(reference);
            
            // Do something to the property
            alert(prop.name);
        }
    }
    
    function createNestedPropertyReference(property) {
        var layer = property.propertyGroup(property.propertyDepth);
        var propIndices = [];
        
        for (var depth = property.propertyDepth; depth > 0; depth--) {
            propIndices.unshift(property.propertyIndex);
            property = property.propertyGroup();
        }
        
        // Save layer and indices
        return { layer: layer, propIndices: propIndices };
    }
    
    function getNestedPropertyFromReference(propertyReference) {
        var layer = propertyReference.layer;
        var propIndices = propertyReference.propIndices;
        var prop = layer;
    
        for (var j = 0; j < propIndices.length; j++) {
            prop = prop.property(propIndices[j]);
        }
    
        return prop;
    }
})();