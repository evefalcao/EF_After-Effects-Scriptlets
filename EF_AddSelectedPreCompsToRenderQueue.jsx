/**========================================================================
 * ?                  EF_AddSelectedPreCompsToRenderQueue.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Add selected precomp (selected compositions layers inside an active composition) to the render queue. Skip any other layer that is not a composition.
 *========================================================================**/

(function addSelectedLayerToRQ{
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    for(var layer = 0; layer < layers.length; layer++){
        if(layers[layer].source instanceof CompItem){
            var layerSource = layers[layer].source;
            app.project.renderQueue.items.add(layerSource);
        }
    }
})();