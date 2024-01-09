chrome.runtime.onInstalled.addListener(async () => {
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
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (["revise", "translate", "send_to_chat", "summarize"].includes(info.menuItemId)) {
        var currTab = tab;
        var isEditable = info.editable || false;
        chrome.tabs.sendMessage(currTab.id, { action: info.menuItemId, selectionText: info.selectionText, isEditable: isEditable });
    }
});
