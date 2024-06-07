/**========================================================================
 * ?                  EF_CleanRenderQueue.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Deletes all items in the Render Queue.
 *========================================================================**/

(function cleanRenderQueue(){
    var rq = app.project.renderQueue;

    for(var item = rq.numItems; item != 0; item--){
        rq.item(item).remove();
    }

})();