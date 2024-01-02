const context = document.getElementById("context_select");
const language = document.getElementById("language_select");
const background = document.getElementById("background_select");
const inputActions = document.getElementById("input_switch");
const apiKey = document.getElementById("api_key_input");

const setBackground = (val) => {
    let bgColor;
    let textColor;
    if (val === "blue") {
        bgColor = 'lightblue';
        textColor = 'midnightblue';
    }
    else if (val === "green") {
        bgColor = 'lightgreen';
        textColor = 'darkgreen';
    }
    else if (val === "yellow") {
        bgColor = 'bisque';
        textColor = 'darkgoldenrod';
    }
    else {
        bgColor = 'lightcoral';
        textColor = 'maroon';
    }
    document.documentElement.style.setProperty('--main-bg-color', bgColor);
    document.documentElement.style.setProperty('--main-text-color', textColor);
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {msg: "change_color", bgr: bgColor, text: textColor});
    });
};

const updateSettings = (isSaved) => {
    // API key
    if (isSaved && apiKey.value == "") {
        alert("Invalid API key: ChatGPT couldn't verify your API key");
        return;
    }
    // Hide input actions

    // Set background
    setBackground(document.getElementById("background_select").value);
    // Default language
    
    // Default context mode

}

document.addEventListener("DOMContentLoaded", () => {
    // Load saved values from storage and update UI
    chrome.storage.sync.get(
		[
			"defaultContextMode",
			"defaultLanguage",
			"backgroundColor",
			"hideInputButtons",
            "apiKey",
		],
		function (result) {
			context.value = result.defaultContextMode || "";
			language.value = result.defaultLanguage || "";
			background.value = result.backgroundColor || "";
			inputActions.checked = result.hideInputButtons || false;
            apiKey.value = result.apiKey || "";
            updateSettings(false);
        }
	);

	// Save values to storage when the Save button is clicked
	document.getElementById("save_button")
		.addEventListener("click", function () {
			let newContextMode = context.value;
			let newLanguage = language.value;
			let newBackgroundColor = background.value;
			let hideInputButtons = inputActions.checked;
            let apiKeyText = apiKey.value;

			// Save values to storage
			chrome.storage.sync.set(
				{
					defaultContextMode: newContextMode,
					defaultLanguage: newLanguage,
					backgroundColor: newBackgroundColor,
					hideInputButtons: hideInputButtons,
                    apiKey: apiKeyText, 
				},
				function () {
				}
			);
           
            updateSettings(true);
        });
    
    
});