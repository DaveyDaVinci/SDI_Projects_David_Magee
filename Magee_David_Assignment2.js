//list variables up here;


// Boolean Function; 
var goodRead = function (payGold, gotFree, readTablet) {
	var didYouRead;
	if ((payGold || gotFree) && readTablet) {
		didYouRead = true;
	}
	else {
		didYouRead = false;
	}
	return didYouRead;
};

var readConfirm = goodRead(true, false, true);

if (readConfirm = true){ 
	console.log ("You read the tablet, which ultimately tells you " + 
	"to board the next shuttle off the planet." );
} else { 
	console.log ("You feel restless, and convince yourself that " +
	"boarding a shuttle to take you off planet will help." );
}; 
// End Boolean Function; 

// Array Function;
var peopleInLine = [
	"Steve",
	"Captain Renauld",
	"Susan",
	"Striker"
];

var waitingForShuttle = function (peopleInLine) {
	 	var waiting; 
	 	for (var i = 0, p = peopleInLine.length; i < p; i++) {
		console.log ( peopleInLine[i] + " has entered the shuttle." );
};      console.log ("It's your turn to enter the shuttle.");
		return waiting;
};

var leftInLine = waitingForShuttle(peopleInLine)
// End Array Function;



