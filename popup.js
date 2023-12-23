let infoDisplay = document.getElementById("info");

const updatePopup = (result) => {
    if (!chrome.runtime.lastError) {
        infoDisplay.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is loaded!");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { files: ['content.js'] }
    )});
});