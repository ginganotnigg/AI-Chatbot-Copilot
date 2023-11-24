console.log("I am content script!");

chrome.runtime.sendMessage({
    from: "content",
    subject: "show_page_action"
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.from == "popup"&& msg.subject === "get_input"){
        const inputFields = document.getElementsByTagName("textarea");
        let result = "Amount: " + inputFields.length;
        console.log(inputFields);
        result += "<br />Values: ";
        for (const inputField of inputFields) {
            if (inputField.value !== "") {
                result += inputField.value + ", ";
            }
        }
        result = result.slice(0, -2);
        sendResponse(result);
    }
});