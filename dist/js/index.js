const title = document.querySelector("#title");
let welcomeString = `Hey there! You Netizens,^Its Velan here :)`;

function displayText() {
	let i = 0;
	window.setInterval(function() {
		if (welcomeString.charAt(i) == "^") {
			title.innerHTML += "<br>";
			i++;
		}
		title.innerHTML += welcomeString.charAt(i);
		i++;
	}, 175);
}

displayText();
