// Selectors
const title = document.querySelector('#title');
const strikeText = document.querySelector('.strike-text');
const newText = document.querySelector('#newText');

let speed = 80;

// Primary Text
function displayText() {
	let welcomeString = `Hey there!^ You People on the Internet,^Its Velan here :)`,
		i = 0;
	window.setInterval(function() {
		if (welcomeString.charAt(i) == '^') {
			title.innerHTML += '<br>';
			i++;
		}
		if (welcomeString.length == i) {
			doneShowing();
		}
		title.innerHTML += welcomeString.charAt(i);
		i++;
	}, speed);
}

// Callback text
function doneShowing() {
	let string = 'things',
		i = 0;
	strikeText.setAttribute('style', 'text-decoration:line-through');
	window.setInterval(function() {
		newText.innerHTML += string.charAt(i);
		i++;
	}, speed);
}

displayText();
