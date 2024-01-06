/*
* TEXT SELECTIONS
*/

chrome.contextMenus.create({
    id: "revise",
    title: "Revise",
    contexts: ["selection"], 
});
chrome.contextMenus.create({
    id: "translate",
    title: "Translate",
    contexts: ["selection"], 
});
chrome.contextMenus.create({
    id: "send_to_chat",
    title: "Send to AI-chat",
    contexts: ["selection"], 
});
chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize",
    contexts: ["selection"], 
});
isCreated = true;

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "revise") {
        console.log(info.selectionText.toUpperCase());
    }
    else if (info.menuItemId === "translate") {
        console.log(info.selectionText);
    }
    else if (info.menuItemId === "send_to_chat") {
        console.log(info.selectionText);
    }
    else if (info.menuItemId === "summarize") {
        console.log(info.selectionText);
    }
}); 