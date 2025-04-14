(function saveFrameToPSD() {

    function framesToCurrentTime(frameNumber, frameRate) {
      return frameNumber / frameRate;
    }

    function saveFrameToPsd(comp, filePath) {

        var renderQueueItem = app.project.renderQueue.items.add(comp);
        var outputModule = renderQueueItem.outputModule(1);
        outputModule.file = filePath;
        outputModule.applyTemplate("Photoshop");

        app.project.renderQueue.render();

        renderQueueItem.remove();
        comp.workAreaStart = 0;
        comp.workAreaDuration = comp.duration;
    };
  
    var selection = app.project.selection;
    var frameToSave = parseInt(prompt("Input the Frame Number:", "Eg: 1, 2, 3, ..."), 10);
  
    for (var item = 0; item < selection.length; item++) {
        var curComp = selection[item];
        var compName = curComp.name;
  
        if (curComp instanceof CompItem && curComp != null) {
            var targetFrame = framesToCurrentTime(frameToSave, curComp.frameRate);

            curComp.time = targetFrame;
            curComp.workAreaStart = targetFrame;
            curComp.workAreaDuration = 1 / curComp.frameRate;

            var projectPath = app.project.file;
  
            if (projectPath != null) {
                var stringProjPath = projectPath.toString().replace(".aep", "");
                var filePath = File(stringProjPath + "_" + compName + ".psd");

                saveFrameToPsd(curComp, filePath);

            } else {
                alert("Save your project to continue.");
            }
            
        } else {
            alert("Select your active Comp in the project panel or timeline.");
        }
    }
  
  })();