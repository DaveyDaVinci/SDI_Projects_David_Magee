var payGold = true,	
	gotFree = false,
	readTablet = true
;

var goodRead = Function ( ) {
	if (( payGold || gotFree ) && readTablet ) { 
		console.log( "You read the tablet, which ultimately tells you " + 
		"to board the next shuttle off the planet." );
	} else { 
		console.log( "You feel restless, and convince yourself that " + 
		"boarding a shuttle to take you off planet will help." );
	}
