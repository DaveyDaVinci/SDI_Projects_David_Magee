var mainCharacter = { 
	name: "Soren",
	sex: "Male",
	certifications: [
		"R3 Pilot",
		"PPS Programming and documentation"
		],
	age: 23,
	race: "Human",
	cash: function (inPocket,
		prePurch) {
			return (inPocket - prePurch);
		}, 
	catchPhrase: function (){
		if (mainCharacter.sex === "Male"){
			console.log ("I'm the man of the Earth hour.");
		
		} else {
			console.log ("I'm the lady of the solar wind. ");
		} return 
	}
	
	
};

var yourCash = mainCharacter.cash(20,5);

// test for returned value: console.log( yourCash );

