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

### [Add Posterize Time Zero](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddPosterizeTimeZero.jsx)
   Adds `"posterizeTime(0);"` to the beginning of all selected properties' expressions, ensuring efficiency when using static expressions.

### [Add Selected PreComps To Render Queue](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddSelectedPreCompsToRenderQueue.jsx)
   Automatically adds selected precompositions within an active composition to the Render Queue.

### [Clean Property Keyframes](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CleanPropertyKeyframes.jsx)
   Removes all keyframes from selected properties across multiple layers.

### [Clean Render Queue](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CleanRenderQueue.jsx)
   Deletes all items in the Render Queue with a single click, keeping your project tidy.

### [Count Selected Items](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CountSelectedItems.jsx)
   Counts the number of selected items in the Project Panel and displays the result in the Info Panel, providing quick project insights.

### [Create Folder Structure](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateFolderStructure.jsx)
   Automatically creates a structured folder hierarchy in your project, including subfolders for inputs, precomps, and outputs.

### [Create Masks From Text](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateMasksFromText.jsx)
   Converts one or more selected text layers into Solids with Masks.

### [Create Shapes From Text](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateShapesFromText.jsx)
   Converts one or more selected Text layers into Shape layers.

### [Delete All Effects](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_DeleteAllEffects.jsx)
   Removes all applied effects from selected layers, helping you start fresh with clean layers.

### [Export Missing Footages Paths To File](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ExportMissingFootagesPathsToFile.jsx)
   Exports a list of all missing footage in your project to a text file, making it easier to track and replace missing assets.

### [Lock And Hide](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_LockAndHide.jsx)
   Locks, activates the "shy" mode, and hides all layers within selected compositions, helping protect complex projects from unwanted edits.

### [Remove Expressions From Layers](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveExpressionsFromLayers.jsx)
   Removes all expressions from selected layers, allowing you to bulk reset animations or values applied via expressions.

### [Remove Expressions From Property](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveExpressionsFromProperty.jsx)
   Clears expressions from selected properties only, without affecting entire layers.

### [Replace Missing Footage With Solid](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ReplaceMissingFootageWithSolid.jsx)
   Replaces all missing footage in your project with a white solid of the same size, helping you maintain project integrity even when assets are missing.

### [Reset Transform](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ResetTransform.jsx)
   Resets the Transformations (Anchor Point, Position, Scale, Rotation, Opacity) of the selected layers, restoring them to their default states.

### [Save Frame To PNG](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveFrameToPNG.jsx)
   Quickly saves the current frame of your composition as a PNG file, stored next to your project file, for easy reference or documentation.

### [Save Project Version Up](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveProjectVersionUp.jsx)
   Saves a new version of the current project file, incrementing the version suffix (e.g., from "_v001" to "_v002"), ensuring that your work is always saved incrementally.

### [Save Selected Comps As Projects](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveSelectedCompsAsProjects.jsx)
   Saves selected compositions in the Project Panel as individual project files, enabling modular project management and easier asset sharing.

### [Select Every Other Layer](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SelectEveryOtherLayer.jsx)
   Selects every other layer starting from the first selected layer, ignoring locked layers, which is useful for quickly modifying or shifting things around.

### [Show Layer Size And Position](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ShowLayerSizeAndPosition.jsx)
   Displays the size and position of the selected layer in the Info Panel, which is useful when developing templates.

### [Show Masked Layer Box Size](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ShowMaskedLayerBoxSize.jsx)
   Shows the bounding box size for a layer with one or more masks, helping you understand the true dimensions of masked content.

---

Feel free to explore the code, contribute, or use them in your projects! Do not sell.
