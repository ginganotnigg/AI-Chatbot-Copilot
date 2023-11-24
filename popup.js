let infoDisplay = document.getElementById("info");

const updatePopup = (result) => {
    if (!chrome.runtime.lastError) {
        infoDisplay.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is loaded!");
    let getBtn = document.getElementById("btn");
    getBtn.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {from: "popup", subject: "get_input"}, updatePopup);
        });
    });
});