let clockField = document.querySelector('.clockField');
clockField.innerHTML = `${getLocalDate()}`;

function getLocalDate() {
	let date = new Date();
	let time = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
	return time;
}

(function getTime() {
	let timerID = setTimeout(() => {
		clockField.innerHTML = `${getLocalDate()}`;
		getTime();
	}, 1000)
})();