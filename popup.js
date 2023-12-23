/** @format */

let infoDisplay = document.getElementById("info");

const updatePopup = (result) => {
	if (!chrome.runtime.lastError) {
		infoDisplay.innerHTML = result;
	}
};

document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM is loaded!");
	let getBtn = document.getElementById("btn");
	getBtn.addEventListener("click", () => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(
				tabs[0].id,
				{ from: "popup", subject: "get_input" },
				updatePopup
			);
			chrome.tabs.sendMessage(tabs[0].id, {
				from: "extension",
				subject: "transform_input",
			});
		});
		let extensionIcon = document.createElement("span");
		extensionIcon.innerHTML =
			'<img src="path/to/your/icon.png" alt="Extension Icon" id="extension-icon">';
		document.body.appendChild(extensionIcon);

		// Bắt sự kiện click trên icon
		let iconElement = document.getElementById("extension-icon");
		iconElement.addEventListener("click", () => {
			// Thực hiện các hành động khi icon được nhấp
			// Ví dụ: Gửi tin nhắn tới background script hoặc content script
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				chrome.tabs.sendMessage(tabs[0].id, {
					from: "popup",
					subject: "icon_click",
				});
			});
		});
	});
});
