/** @format */

document.addEventListener("DOMContentLoaded", function () {
	// Load saved values from storage and update UI
	chrome.storage.sync.get(
		[
			"defaultContextMode",
			"defaultLanguage",
			"backgroundColor",
			"hideInputButtons",
		],
		function (result) {
			document.getElementById("context_select").value =
				result.defaultContextMode || "";
			document.getElementById("language_select").value =
				result.defaultLanguage || "";
			document.getElementById("background_select").value =
				result.backgroundColor || "";
			document.getElementById("input_switch").checked =
				result.hideInputButtons || false;
		}
	);

	// Save values to storage when the Save button is clicked
	document
		.getElementById("saveButton")
		.addEventListener("click", function () {
			let newContextMode =
				document.getElementById("context_select").value;
			let newLanguage = document.getElementById("language_select").value;
			let newBackgroundColor =
				document.getElementById("background_select").value;
			let hideInputButtons =
				document.getElementById("input_switch").checked;

			// Save values to storage
			chrome.storage.sync.set(
				{
					defaultContextMode: newContextMode,
					defaultLanguage: newLanguage,
					backgroundColor: newBackgroundColor,
					hideInputButtons: hideInputButtons,
				},
				function () {
					console.log("Settings saved");
				}
			);
		});
});
