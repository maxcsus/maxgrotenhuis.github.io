function biggerClicked() {
	document.getElementById("userText").style.fontSize = "24pt";
}

function styleChanged() {
	let textArea = document.getElementById("userText");

	if (document.getElementById("fancyShmancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.textDecoration = "underline";
		textArea.style.color = "blue";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.textDecoration = "none";
		textArea.style.color = ""; // empty string removes our inline color, restoring the default
	}
}

function mooClicked() {
	let textArea = document.getElementById("userText");

	let text = textArea.value.toUpperCase();

	let sentences = text.split(".");

	textArea.value = sentences.join("-Moo.");
}