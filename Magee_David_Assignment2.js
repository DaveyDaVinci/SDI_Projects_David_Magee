//list variables up here;


// Boolean Function; 
var goodRead = function (payGold, gotFree, readTablet) {
	var didYouRead;
	if ((payGold || gotFree) && readTablet) {
		didYouRead = true; console.log ("You read the tablet, which ultimately tells you " + 
	"to board the next shuttle off the planet." );
	}
	else {
		didYouRead = false; console.log ("You feel restless, and convince yourself that " +
	"boarding a shuttle to take you off planet will help." );
	}
	return didYouRead;
};

var readConfirm = goodRead(true, false, true);

// End Boolean Function; use readConfirm as returned variable. 

// Array Function;
var peopleInLine = [
	"Steve",
	"Captain Renauld",
	"Susan",
	"Striker"
];

var waitingForShuttle = function (peopleInLine) {
	 for (var i = 0, p = peopleInLine.length; i < p; i++) {
		console.log ( peopleInLine[i] + " has entered the shuttle." );
};    
		console.log ("It's your turn to enter the shuttle.");

		return peopleInLine; 
};

var leftInLine = waitingForShuttle(peopleInLine)
// End Array Function;

// String Function 
var declareName = function (name, birthday) {
console.log ( "My name is " + name + ". My birthday is " + birthday + "." );
return declareName;
};

var introduction = declareName("Jules", "November 29th, 2047");

// End String Function;

// Number Function; 
var playGameOnTablet = function (yourCoins) { 
	var coinsPerGame = 2,
		numberOfGames; 
	while (yourCoins >= coinsPerGame) { 
		console.log ( "You enjoy a game of Rong on the tablet." ); yourCoins -=2;
	};
	console.log ( "You don't have enough coins to play a game." );
	return numberOfGames;
};

var enjoyGames = playGameOnTablet(6); 

// End Number Function 

// procedure 

var chooseDestination = function (destination) {
	if (destination = "Danoran") { 
		console.log ( "You get off at Danoran and enjoy the rest of your life " +
		"in peace. " );
	} else { 
		console.log ( "You decide to see how far the shuttle takes you. You're " + 
		"still riding to this day. " );
	};
};

var destinationChoice = chooseDestination("Danoran");

// end Prodedure 


