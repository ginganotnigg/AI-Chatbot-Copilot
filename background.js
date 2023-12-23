/** @format */

console.log("I am background!");

chrome.runtime.onMessage.addListener((msg, sender) => {
	// First, validate the message's structure.
	if (msg.from === "content" && msg.subject === "show_page_action") {
		console.log(sender.tab.id);
	}
});
