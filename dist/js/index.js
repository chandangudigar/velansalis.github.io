const title = document.querySelector("#title");
let welcomeString = `Hey there! You Internet People,^Its Velan here :)`;

function displayText() {
	let i = 0;
	window.setInterval(function() {
		if (welcomeString.charAt(i) == "^") {
			title.innerHTML += "<br>";
			i++;
		}
		title.innerHTML += welcomeString.charAt(i);
		i++;
	}, 200);
}

displayText();
