/**========================================================================
 * ?                  EF_PreComposeSelectedLayersIndividually.jsx
 * @author         :  Eveline Falcão (https://evelinefalcao.com)
 * @email          :  hello@evelinefalcao.com
 * @version        :  1.0.0
 * @createdFor     :  Adobe After Effects CC 2024 (Version 24.1.0 Build 78)
 * @description    :  Pre-compose each selected layer into its own composition while leaving all attributes in the source comp.
 *========================================================================**/

(function preComposeSelectedLayersIndividually(){

	function getPreCompName(layerName){
		return layerName.replace(/[\\\/:*?"<>|]/g, "_") + "_PreComp";
	}

	app.beginUndoGroup("'Pre-compose Selected Layers Individually'");

	var comp = app.project.activeItem;

	if(!(comp instanceof CompItem) || comp == null){
		alert("Select an active composition in the timeline.");
		app.endUndoGroup();
		return;
	}

	var selectedLayers = comp.selectedLayers;

	if(selectedLayers.length === 0){
		alert("Select one or more layers to pre-compose.");
		app.endUndoGroup();
		return;
	}

	var selectedLayerIndices = [];

	for(var layer = 0; layer < selectedLayers.length; layer++){
		selectedLayerIndices.push(selectedLayers[layer].index);
	}

	// Process from top index to bottom so index changes do not affect pending layers.
	selectedLayerIndices.sort(function(a, b){
		return b - a;
	});

	for(var index = 0; index < selectedLayerIndices.length; index++){
		var currentLayerIndex = selectedLayerIndices[index];
		var currentLayer = comp.layer(currentLayerIndex);
		var preCompName = getPreCompName(currentLayer.name);

		comp.layers.precompose([currentLayerIndex], preCompName, false);
	}

	app.endUndoGroup();

})();
