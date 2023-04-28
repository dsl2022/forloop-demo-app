const loopOutput = document.getElementById('loop-output');
const loopButton = document.getElementById('loop-button');
const numCirclesInput = document.getElementById('num-circles');

function createCircle(size){
    const circle = document.createElement('div');
	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
    // Append the new circle to the loop output div
    loopOutput.appendChild(circle);
}

// Add a click event listener to the loop button
loopButton.addEventListener('click', function() {
	// Clear the loop output div
	loopOutput.innerHTML = '';
    const numCircles = numCirclesInput.value;
	// Create a for loop that counts from 1 to 10
	for (let i = 1; i <= numCircles; i++) {
		// Generate a random size for the circle (between 10 and 100 pixels)
		const size = Math.floor(Math.random() * 90) + 10;
		// Create a new circle element and set its size and border
		createCircle(size)		
	}
});
