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
	"Striker", 
];

var waitingForShuttle = function (peopleInLine) {
	 var boardedPassengers = [];
	 for (var i = 0, p = peopleInLine.length; i < p; i++) {
		console.log ( peopleInLine[i] + " has entered the shuttle." );
		boardedPassengers.push(peopleInLine[i])		
};    
		console.log ("It's your turn to enter the shuttle.");
		boardedPassengers.push( "you" );
		return boardedPassengers; 
};

var onBoard = waitingForShuttle(peopleInLine)
// End Array Function. Use onBoard as returned variable. 


// String Function 
var declareName = function (name, birthday) {
	var nameVariable ;
		console.log ( "My name is " + name + ". My birthday is " + birthday + "." );
		nameVariable = "passed";
return nameVariable
};

var passVerify = declareName("Jules", "November 29th, 2047");
// End String Function. use passVerify as the returned variable. 


// Number Function; 
var playGameOnTablet = function (yourCoins) { 
	var coinsPerGame = 2,
		numberOfGames = 0; 
	while (yourCoins >= coinsPerGame) { 
		console.log ( "You enjoy a game of Rong on the tablet." ); 
		yourCoins -= coinsPerGame;
		numberOfGames ++;
	};
	console.log ( "You don't have enough coins to play a game." );
	return numberOfGames;
};

var enjoyGames = playGameOnTablet(6); 
// use in final output console.log ( "You enjoy " + enjoyGames + "games while waiting for the " +
//	"shuttle to launch. use enjoyGames as returned variable." );
// End Number Function 


// procedure 
var chooseDestination = function (destination) {
	if (destination = "Danoran") { 
		console.log ( "You get off at Danoran and enjoy the rest of your life " +
		"in peace. " );
	} else { 
		console.log ( "You decide to see how far the shuttle takes you. You're " + 
		"still riding to this day. " );
	};   return;
};

var destinationChoice = chooseDestination("Danoran");
// end Prodedure 

//FinalOutput

console.log ( "Rumors that you reading confidential material are " + readConfirm 
	+ ". " + onBoard[0] + ", " +onBoard[4] + ", " + onBoard[1] + ", " 
	+ onBoard[2] + ", and " + onBoard[3] + 
	" were all on board to testify to that. ");

if (passVerify = "passed"){
	console.log ("Luckily you passed the security inspection and were able " +
	"to board the shuttle off planet. " );
} else {
	console.log ("Unfortunately, you failed the security inspection and had " +
	"to stow away in the cargo hold. " )
};

console.log ( "You enjoyed the " + enjoyGames + " games you played on your " + 
	"way to the destination. " );



