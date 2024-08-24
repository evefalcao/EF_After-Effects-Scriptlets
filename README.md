# EF After Effects Scriptlets

A collection of useful Adobe After Effects scriptlets designed to streamline your workflow. Each scriptlet can be run directly in After Effects or added to a script launcher like [KBar](https://aescripts.com/kbar/) for easy access.

## Installation Instructions

### Direct Installation
1. Download the `.jsx` file from this repository.
2. Place the file in the After Effects `Scripts` folder (usually located at `C:\Program Files\Adobe\Adobe After Effects <version>\Support Files\Scripts` on Windows or `/Applications/Adobe After Effects <version>/Scripts` on macOS).
3. To run the script, go to `File > Scripts > Run Script File` in After Effects and select the `.jsx` file.

### Adding to KBar
#### Method 1
1. Download the `.jsx` file from this repository.
2. Open the `KBar Settings` in After Effects.
3. Choose your preferred Toolbar and click `Add Button`.
4. Click `Run JSX/JSXBIN File` and select the scriptlet location.
5. Add a `Description` and click `OK`.
#### Method 2
1. Open the `KBar Settings` in After Effects.
2. Choose your preferred Toolbar and click `Add Button`.
3. Copy the content of the `.jsx` file from its GitHub page.
4. Back in KBar, click `Run Scriptlet` and paste the text in `Scriptlet`.
5. Add a `Description` and hit `OK`.

## Scriptlets

### 1. [EF_AddPosterizeTimeZero.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddPosterizeTimeZero.jsx)
   Adds `"posterizeTime(0);"` to the beginning of all selected properties' expressions, ensuring efficiency when using static expressions.

### 2. [EF_AddSelectedPreCompsToRenderQueue.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddSelectedPreCompsToRenderQueue.jsx)
   Automatically adds selected precompositions within an active composition to the Render Queue.

### 3. [EF_CleanPropertyKeyframes.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CleanPropertyKeyframes.jsx)
   Removes all keyframes from selected properties across multiple layers.

### 4. [EF_CleanRenderQueue.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CleanRenderQueue.jsx)
   Deletes all items in the Render Queue with a single click, keeping your project tidy.

### 5. [EF_CountSelectedItems.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CountSelectedItems.jsx)
   Counts the number of selected items in the Project Panel and displays the result in the Info Panel, providing quick project insights.

### 6. [EF_CreateFolderStructure.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateFolderStructure.jsx)
   Automatically creates a structured folder hierarchy in your project, including subfolders for inputs, precomps, and outputs.

### 7. [EF_CreateMasksFromText.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateMasksFromText.jsx)
   Converts one or more selected text layers into Solids with Masks.

### 8. [EF_CreateShapesFromMasks.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateShapesFromMasks.jsx)
   Converts one or more selected masks into Shape layers.

### 9. [EF_DeleteAllEffects.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_DeleteAllEffects.jsx)
   Removes all applied effects from selected layers, helping you start fresh with clean layers.

### 10. [EF_ExportMissingFootagesPathsToFile.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ExportMissingFootagesPathsToFile.jsx)
   Exports a list of all missing footage in your project to a text file, making it easier to track and replace missing assets.

### 11. [EF_LockAndHide.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_LockAndHide.jsx)
   Locks, activates the "shy" mode, and hides all layers within selected compositions, helping protect complex projects from unwanted edits.

### 12. [EF_RemoveExpressionsFromLayers.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveExpressionsFromLayers.jsx)
   Removes all expressions from selected layers, allowing you to bulk reset animations or values applied via expressions.

### 13. [EF_RemoveExpressionsFromProperty.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveExpressionsFromProperty.jsx)
   Clears expressions from selected properties only, without affecting entire layers.

### 14. [EF_ReplaceMissingFootageWithSolid.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ReplaceMissingFootageWithSolid.jsx)
   Replaces all missing footage in your project with a white solid of the same size, helping you maintain project integrity even when assets are missing.

### 15. [EF_ResetTransform.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ResetTransform.jsx)
   Resets the Transformations (Anchor Point, Position, Scale, Rotation, Opacity) of the selected layers, restoring them to their default states.

### 16. [EF_SaveFrameToPNG.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveFrameToPNG.jsx)
   Quickly saves the current frame of your composition as a PNG file, stored next to your project file, for easy reference or documentation.

### 17. [EF_SaveProjectVersionUp.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveProjectVersionUp.jsx)
   Saves a new version of the current project file, incrementing the version suffix (e.g., from "_v001" to "_v002"), ensuring that your work is always saved incrementally.

### 18. [EF_SaveSelectedCompsAsProjects.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveSelectedCompsAsProjects.jsx)
   Saves selected compositions in the Project Panel as individual project files, enabling modular project management and easier asset sharing.

### 19. [EF_SelectEveryOtherLayer.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SelectEveryOtherLayer.jsx)
   Selects every other layer starting from the first selected layer, ignoring locked layers, which is useful for quickly modifying or shifting things around.

### 20. [EF_ShowLayerSizeAndPosition.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ShowLayerSizeAndPosition.jsx)
   Displays the size and position of the selected layer in the Info Panel, which is useful when developing templates.

### 21. [EF_ShowMaskedLayerBoxSize.jsx](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ShowMaskedLayerBoxSize.jsx)
   Shows the bounding box size for a layer with one or more masks, helping you understand the true dimensions of masked content.

---

Feel free to explore the code, contribute, or use them in your projects! Do not sell.
