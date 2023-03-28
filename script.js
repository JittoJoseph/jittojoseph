// Set the date and time to count down to
var countDownDate = new Date("March 30, 2023 11:15:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

	// Get the current date and time
	var now = new Date().getTime();

	// Calculate the time remaining
	var timeRemaining = countDownDate - now;

	// Calculate the days, hours, minutes, and seconds remaining
	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	/* Display the countdown in the "countdown" element
	document.getElementById("countdown").innerHTML = `
    Heading the 4385th Day<br><br>
		<span>${days}</span> Days <br>
		<span>${hours}</span> Hours <br>
		<span>${minutes}</span> Minutes <br>
		<span>${seconds}</span> Seconds
	`;
*/
	document.getElementById("countdown").innerHTML = `
    Heading the Last Day in School<br> <br>
		<span>${days}</span> :
		<span>${hours}</span> :
		<span>${minutes}</span> :
		<span>${seconds}</span>
	`;

	// If the countdown is finished, display a message
	if (timeRemaining < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "The New Chapter";
	}
}, 1000);
