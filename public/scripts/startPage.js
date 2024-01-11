
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Index Page Ready");
	const startButton = document.querySelector("#startButton")

	startButton.onclick = (param) => {
		document.location = 'level select.html';
	}
};

rhit.main();
