# EF After Effects Scriptlets

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M212BC7C)

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

### [Add Items To Various Comps Sizes](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddItemsToVariousCompsSizes.jsx)
   Creates 1920x1080, 1080x1080, and 1080x1920 compositions for each selected footage item and fits the footage inside them.

### [Add Posterize Time Zero](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddPosterizeTimeZero.jsx)
   Adds `"posterizeTime(0);"` to the beginning of all selected properties' expressions, ensuring efficiency when using static expressions.

### [Add Selected PreComps To Render Queue](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_AddSelectedPreCompsToRenderQueue.jsx)
   Automatically adds selected precompositions within an active composition to the Render Queue.

### [Batch Change Frame Rate](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_BatchChangeFrameRate.jsx)
   Batch changes the frame rate of all compositions in the project.

### [Batch Edit Effect Prop](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_BatchEditEffectProp.jsx)
   Batch edit properties of effects across one or more compositions selected in the project panel.

### [Change Fonts In Project](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ChangeFontsInProject.jsx)
   Changes the font of text layers throughout the project, including nested compositions.

### [Clean Property Keyframes](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CleanPropertyKeyframes.jsx)
   Removes all keyframes from selected properties across multiple layers.

### [Clean Render Queue](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CleanRenderQueue.jsx)
   Deletes all items in the Render Queue with a single click, keeping your project tidy.

### [Convert Selected To Point Text](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ConvertSelectedToPointText.jsx)
   Batch converts selected text layers to point text.

### [Count Selected Items](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CountSelectedItems.jsx)
   Counts the number of selected items in the Project Panel and displays the result in the Info Panel, providing quick project insights.

### [Count Selected Items UI](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CountSelectedItemsUI.jsx)
   A dockable UI to count the selected items in the project panel.

### [Create Folder Structure](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateFolderStructure.jsx)
   Automatically creates a structured folder hierarchy in your project, including subfolders for inputs, precomps, and outputs.

### [Create Masks From Text](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateMasksFromText.jsx)
   Converts one or more selected text layers into Solids with Masks.

### [Create Shapes From Text](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_CreateShapesFromText.jsx)
   Converts one or more selected Text layers into Shape layers.

### [Deactivate Effects On Comps](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_DeactivateEffectsOnComps.jsx)
   Disable a given effect in the selected compositions.

### [Delete All Effects](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_DeleteAllEffects.jsx)
   Removes all applied effects from selected layers, helping you start fresh with clean layers.

### [Export Active Comp Expressions To File](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ExportActiveCompExpressionsToFile.jsx)
   Exports the expressions of the active composition to a `.jsx` file.

### [Export All Expressions To File](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ExportAllExpressionsToFile.jsx)
   Quickly exports all expressions in the project to files based on the composition.

### [Export Missing Footages Paths To File](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ExportMissingFootagesPathsToFile.jsx)
   Exports a list of all missing footage in your project to a text file, making it easier to track and replace missing assets.

### [Export Selected Comps Expressions To File](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ExportSelectedCompsExpressions.jsx)
   Exports the expressions of all selected compositions.

### [Fade Audio In Out](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_FadeAudioInOut.jsx)
   Adds fade-in and fade-out keyframes to the audio levels of selected layers.

### [Find And Replace Layer](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_FindAndReplaceLayer.jsx)
   Search for a layer by layer name and replace it with another item across compositions.

### [Lock And Hide](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_LockAndHide.jsx)
   Locks, activates the "shy" mode, and hides all layers within selected compositions, helping protect complex projects from unwanted edits.

### [Make Properties Valid Again](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_MakePropertiesValidAgain.jsx)
   Added or removed an effect and your property objects became invaid? This scriptlet will help you create references to find your lost properties.

### [Organize Project](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_OrganizeProject.jsx)
   Sorts project items, tidying up your project based on the item type.

### [PreCompose Selected Layers Individually](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_PreComposeSelectedLayersIndividually.jsx)
   Pre-composes each selected layer into its own composition, creating one precomp per selected layer while leaving all attributes in the original comp.

### [Randomize Position](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RandomizePosition.jsx)
   Randomize the position of selected layers within a specified range.

### [Remove Empty Folders](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveEmptyFolders.jsx)
   Removes unused folders in your project panel.

### [Remove Expressions From Layers](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveExpressionsFromLayers.jsx)
   Removes all expressions from selected layers, allowing you to bulk reset animations or values applied via expressions.

### [Remove Expressions From Property](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveExpressionsFromProperty.jsx)
   Clears expressions from selected properties only, without affecting entire layers.

### [Remove Useless Masks](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_RemoveUselessMasks.jsx)
   Removes masks set to `None` mode from the selected layers.

### [Replace Missing Footage With Solid](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ReplaceMissingFootageWithSolid.jsx)
   Replaces all missing footage in your project with a white solid of the same size, helping you maintain project integrity even when assets are missing.

### [Replace Selected Items With Solids](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ReplaceSelectedItemsWithSolids.jsx)
   Replaces selected footage items in the Project Panel with white solids of matching size.

### [Reset Transform](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ResetTransform.jsx)
   Resets the Transformations (Anchor Point, Position, Scale, Rotation, Opacity) of the selected layers, restoring them to their default states.

### [Save Frame To PNG](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveFrameToPNG.jsx)
   Quickly saves the current frame of your composition as a PNG file, stored next to your project file, for easy reference or documentation.

### [Save Given Frame To PNG](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveGivenFrameToPNG.jsx)
   Exports a user-specified frame from selected compositions as PNG files.

### [Save Given Frame To PSD](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveGivenFrameToPSD.jsx)
   Exports a user-specified frame from selected compositions as PSD files.

### [Save Project Version Up](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveProjectVersionUp.jsx)
   Saves a new version of the current project file, incrementing the version suffix (e.g., from "_v001" to "_v002"), ensuring that your work is always saved incrementally.

### [Save Selected Comps As Projects](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveSelectedCompsAsProjects.jsx)
   Saves selected compositions in the Project Panel as individual project files, enabling modular project management and easier asset sharing.

### [Save Selected Comps To PNG](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveSelectedCompsToPNG.jsx)
   Export selected compositions as PNG files for quick previews.

### [Save To PNG And PSD](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SaveToPNGAndPSD.jsx)
   Exports a user-specified frame from selected compositions as both PNG and PSD files.

### [Select Every Other Layer](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SelectEveryOtherLayer.jsx)
   Selects every other layer starting from the first selected layer, ignoring locked layers, which is useful for quickly modifying or shifting things around.

### [Sequential Mask Toggle](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_SequentialMaskToggle.jsx)
   Sets one mask per selected layer to `Add` based on selection order and disables the others.

### [Show Layer Size And Position](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ShowLayerSizeAndPosition.jsx)
   Displays the size and position of the selected layer in the Info Panel, which is useful when developing templates.

### [Show Masked Layer Box Size](https://github.com/evefalcao/EF_After-Effects-Scriptlets/blob/main/EF_ShowMaskedLayerBoxSize.jsx)
   Shows the bounding box size for a layer with one or more masks, helping you understand the true dimensions of masked content.

---

Feel free to explore the code, contribute, or use them in your projects! Do not sell.
