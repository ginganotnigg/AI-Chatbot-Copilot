/**
 * HTML SNIPPETS
 *
 * @format
 */

var sideIconHTML;
if (typeof sideIconHTML == "undefined") {
	sideIconHTML = `<div class="icon_btn">
    <div class="icon"></div>
    </div>`;
}

var sideWindowHTML;
if (typeof sideWindowHTML == "undefined") {
	sideWindowHTML = `<div class="side_window">
    <div class="header">
    <h2 class="title">BBOND</h2>
    <button class="hide">Hide</button>
    </div>
    <div class="chat">
    <div class="content_show"></div>
    </div>
    <div class="footer">
    <textarea rows="1" class="text_chat" placeholder="Type your message..."></textarea>
    <button class="send_button">Send</button>
    </div>
    </div>`;
}

var svgIconHTML;
if (typeof svgIconHTML == "undefined") {
	svgIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}</style><linearGradient id="linear-gradient" x1="12.02" y1="23.18" x2="11.98" y2="0.13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bb68aa"/><stop offset="1" stop-color="#71cac6"/></linearGradient></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z"/><path class="cls-2" d="M8.16,12A3.84,3.84,0,1,1,12,15.84,3.84,3.84,0,0,1,8.16,12Z"/><path class="cls-2" d="M13.67,6.41c-.16-.1-.32-.2-.49-.29a9.8,9.8,0,0,0-2.61-1,7.66,7.66,0,0,0-2-.22,8,8,0,0,0-2.76.59,9.85,9.85,0,0,0-2.09,1.2.09.09,0,0,1-.06,0l.19-.36a8.45,8.45,0,0,1,1-1.43A8.66,8.66,0,0,1,6.71,3.3l.06,0a8.8,8.8,0,0,1,1.15,0,9.43,9.43,0,0,1,1.91.33,7.58,7.58,0,0,1,2.06,1,6.69,6.69,0,0,1,1.41,1.3A4,4,0,0,1,13.67,6.41Z"/><path class="cls-2" d="M2.56,14.46a6.66,6.66,0,0,1-.25-1,8.86,8.86,0,0,1-.17-1.15,8.37,8.37,0,0,1,0-1.12,9.47,9.47,0,0,1,.19-1.39.1.1,0,0,1,0,0A9.4,9.4,0,0,1,5.26,7.64,6.71,6.71,0,0,1,6.92,7.1,6.17,6.17,0,0,1,8.58,7c.27,0,.55.06.82.11l.07,0-.29.08A10.05,10.05,0,0,0,5.92,8.65a7.64,7.64,0,0,0-2.43,2.77,8.78,8.78,0,0,0-.81,2.34C2.63,14,2.6,14.22,2.56,14.46Z"/><path class="cls-2" d="M7.12,14.54c0,.13.07.26.1.39a10.2,10.2,0,0,0,1.43,3.15,7.47,7.47,0,0,0,1,1.2,7.82,7.82,0,0,0,2.42,1.55,9.34,9.34,0,0,0,1.69.5,5.4,5.4,0,0,0,.58.09l.07,0c-.19.07-.38.12-.56.17a8.94,8.94,0,0,1-1.15.21,8.36,8.36,0,0,1-1.5.05,11.08,11.08,0,0,1-1.39-.2.1.1,0,0,1,0,0,9.35,9.35,0,0,1-2.17-2.9A7.09,7.09,0,0,1,7.09,17,7.21,7.21,0,0,1,7,15.5a7.06,7.06,0,0,1,.11-.91.09.09,0,0,0,0-.05Z"/><path class="cls-2" d="M21.44,9.55a7.75,7.75,0,0,1,.29,1.15,7.81,7.81,0,0,1,.15,1.67,8.76,8.76,0,0,1-.08,1c0,.25-.08.5-.13.74a.16.16,0,0,1,0,.07,9.39,9.39,0,0,1-2.91,2.17,7,7,0,0,1-1.77.56,7.16,7.16,0,0,1-1.46.08,7,7,0,0,1-1-.13l.3-.07a11.16,11.16,0,0,0,2.37-.91,8.19,8.19,0,0,0,2.08-1.57,7.9,7.9,0,0,0,1.6-2.51,10.33,10.33,0,0,0,.47-1.62c0-.19.07-.38.09-.57A.24.24,0,0,1,21.44,9.55Z"/><path class="cls-2" d="M17.3,3.64a8.16,8.16,0,0,1,1.35.83,9.07,9.07,0,0,1,1.41,1.36,8.72,8.72,0,0,1,.63.87.13.13,0,0,1,0,.08c0,.35,0,.7,0,1a10.71,10.71,0,0,1-.18,1.37,8.16,8.16,0,0,1-.71,2,7,7,0,0,1-1.06,1.48,7.25,7.25,0,0,1-1.16,1l.14-.25A10.58,10.58,0,0,0,18.79,11a8.34,8.34,0,0,0,.27-1.3,7.66,7.66,0,0,0,.07-1.17,7.94,7.94,0,0,0-.64-2.88,9.56,9.56,0,0,0-1.15-2A.21.21,0,0,1,17.3,3.64Z"/><path class="cls-2" d="M10.32,17.59l.36.21a10.7,10.7,0,0,0,2.49,1.05,9.31,9.31,0,0,0,1.28.24,9.08,9.08,0,0,0,1.38,0,8.25,8.25,0,0,0,1.39-.24,8,8,0,0,0,2-.83,10.7,10.7,0,0,0,1.06-.69l.07-.05a.15.15,0,0,1,0,.07,8.49,8.49,0,0,1-3,3.31.17.17,0,0,1-.12,0c-.34,0-.68,0-1,0A10,10,0,0,1,15,20.55a8,8,0,0,1-1.89-.6,6.74,6.74,0,0,1-1.38-.85,7.09,7.09,0,0,1-1.34-1.45l0,0Z"/><path class="cls-2" d="M16.88,9.48c0-.16-.08-.3-.12-.44a11,11,0,0,0-.59-1.67,9.19,9.19,0,0,0-.94-1.6,7.43,7.43,0,0,0-2.35-2.11,8.49,8.49,0,0,0-2.44-.93c-.29-.07-.59-.12-.91-.17l.36-.11A8.54,8.54,0,0,1,11,2.21a8.79,8.79,0,0,1,1.54-.08,9.25,9.25,0,0,1,1.56.2l.07,0a9.39,9.39,0,0,1,2.17,2.91A7.09,7.09,0,0,1,16.91,7,6.64,6.64,0,0,1,17,8.51,5.47,5.47,0,0,1,16.88,9.48Z"/><path class="cls-2" d="M6.7,20.37c-.19-.09-.37-.19-.54-.29a9,9,0,0,1-1.92-1.56,8.37,8.37,0,0,1-.93-1.22.13.13,0,0,1,0-.08c0-.35,0-.7,0-1a8.81,8.81,0,0,1,.68-3,6.39,6.39,0,0,1,1.09-1.73,7,7,0,0,1,1.29-1.14l0,0s0,.05,0,.07a11,11,0,0,0-1.11,2.39,8.87,8.87,0,0,0-.33,1.53,7.53,7.53,0,0,0,.49,3.8A9.43,9.43,0,0,0,6.66,20.3.43.43,0,0,1,6.7,20.37Z"/></g></g></svg>`;
}

/*
 * SIDE WINDOW
 */

var iconBtn;
var hideBtn;
var sideWindow;
var svgIcon;
let textColor;

const addSideWindow = () => {
	if (document.querySelector("#side_window_container") != null) {
		sideWindow.style.display = "flex";
	} else {
		let sideWindowCont = document.createElement("div");
		sideWindowCont.setAttribute("id", "side_window_container");
		sideWindowCont.innerHTML = sideWindowHTML;
		sideWindow = sideWindowCont.querySelector(".side_window");
		hideBtn = sideWindowCont.querySelector(".hide");
		document.body.appendChild(sideWindowCont);
	}
};

// const parentContainer = document.createElement("div");
// parentContainer.setAttribute("id", "parent_container");

if (typeof initSideIcon == "undefined") {
	const initSideIcon = () => {
		iconBtn = document.createElement("div");
		iconBtn.setAttribute("id", "side_icon_container");
		iconBtn.innerHTML = sideIconHTML;
		svgIcon = iconBtn.querySelector(".icon");
		svgIcon.innerHTML = svgIconHTML;
		document.body.appendChild(iconBtn);
	};
	initSideIcon();
}

// const target = document.activeElement;
// if (isInput(target)) {
// 	initInputIcon(target);
// 	parentContainer.appendChild(_iconBtn);
// }
// document.body.appendChild(parentContainer);

if (iconBtn != null) {
	chrome.runtime.sendMessage({ msg: "get_color" }, (response) => {
		if (response) {
			document.documentElement.style.setProperty(
				"--main-bg-color",
				response.bgr
			);
			document.documentElement.style.setProperty(
				"--main-text-color",
				response.text
			);
			textColor = response.text;
		}
	});
	iconBtn.addEventListener("click", () => {
		addSideWindow();
		iconBtn.style.display = "none";
		handleSideWindow();
	});
}

chrome.storage.sync.get(["key"], function (result) {
	console.log("Value retrieved from storage:", result.key);
});

const addMessageToChat = (message) => {
	const contentShow = document.querySelector(".content_show");
	const chatLine = document.createElement("div");
	const textMsg = document.createElement("p");
	chatLine.classList.add("chat_line", "user");
	textMsg.innerHTML = message;
	chatLine.appendChild(textMsg);
	contentShow.appendChild(chatLine);
	contentShow.scrollTo(0, contentShow.scrollHeight);
	setTimeout(() => {
		responseFromAI();
	}, 500);
};

const responseFromAI = () => {
	const contentShow = document.querySelector(".content_show");
	const chatLine = document.createElement("div");
	const textMsg = document.createElement("p");
	const icon = document.createElement("div");
	chatLine.classList.add("chat_line", "AI");
	icon.classList.add("icon");
	icon.innerHTML = svgIconHTML;
	textMsg.appendChild(icon);
	chatLine.appendChild(textMsg);
	setTimeout(() => {
		textMsg.removeChild(icon);
		textMsg.textContent = "Sorry, I can't answer your questions!";
	}, 5000);
	contentShow.appendChild(chatLine);
	contentShow.scrollTo(0, contentShow.scrollHeight);
};

const sendMessage = () => {
	const textInput = document.querySelector(".text_chat");

	if (textInput.value.trim() !== "") {
		addMessageToChat(textInput.value.trim().replace(/\n/g, "<br>"));
		textInput.value = "";
	}

	// Respond from AI chat
};

const handleSideWindow = () => {
	if (hideBtn != null) {
		hideBtn.addEventListener("click", () => {
			sideWindow.classList.add("hide");
			setTimeout(() => {
				sideWindow.style.display = "none";
				sideWindow.classList.remove("hide");
				iconBtn.style.display = "block";
			}, 500);
		});
	}
	const textInput = sideWindow.querySelector(".text_chat");
	const sendButton = sideWindow.querySelector(".send_button");

	if (sendButton != null) {
		sendButton.addEventListener("click", () => {
			sendMessage();
		});
	}

	if (textInput && sendButton) {
		textInput.addEventListener("keypress", (event) => {
			if (event.key === "Enter" && event.shiftKey) {
				// Prevent create a new line from Enter
				textInput.focus();
				textInput.selectionEnd = textInput.value.length;
			} else if (event.key === "Enter") {
				// Prevent create a new line from Enter
				event.preventDefault();
				sendMessage();
			}
		});
	}
};

/*
 * INPUT ACTIONS
 */

let _iconBtn;
let _svgIcon;

const initInputIcon = (target) => {
	_iconBtn = document.createElement("div");
	_iconBtn.setAttribute("id", "input_icon_container");
	_iconBtn.innerHTML = `<div class="icon"></div>`;
	_svgIcon = _iconBtn.querySelector(".icon");
	_svgIcon.innerHTML = svgIconHTML;
	_svgIcon.style.top = `${getComputedStyle(target).offsetHeight / 2 - 12}px`;
	_svgIcon.style.right = "5px";
	target.parentNode.appendChild(_iconBtn);
};

const isInput = (target) => {
	return target.matches("input") || target.matches("textarea");
};

if (typeof addIconToInput == "undefined") {
	const addIconToInput = () => {
		let target = document.activeElement;
		if (isInput(target)) {
			initInputIcon(target);
		}
	};
	addIconToInput();
}

/*
 * CONNECTION REQUEST
 */

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.msg == "change_color") {
		document.documentElement.style.setProperty(
			"--main-bg-color",
			request.bgr
		);
		document.documentElement.style.setProperty(
			"--main-text-color",
			request.text
		);
		textColor = response.text;
	}
	if (request.action === "update_icon_visibility") {
		const isInputActionsChecked = request.data.isInputActionsChecked;
		if (isInputActionsChecked) {
			_iconBtn.style.display = "none";
		} else {
			_iconBtn.style.display = "block";
		}
	}
});
