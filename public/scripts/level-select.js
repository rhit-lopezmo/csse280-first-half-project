var rhit = rhit || {};

rhit.main = function () {
	console.log("Level Select Ready");

	// get all the level buttons
	const levelButtons = document.querySelectorAll(".level-button")

	console.log(levelButtons);

	// create listener for buttons
	for (const level of levelButtons) {
		level.onclick = () => {
			document.location = './gameplay.html';
		}
	}
};

rhit.main();
