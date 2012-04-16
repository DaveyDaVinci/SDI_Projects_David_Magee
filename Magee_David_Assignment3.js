var mainCharacter = { 
	name: "Soren",
	certifications: [
		"R3 Pilot",
		"PPS Programming and documentation"
		],
	age: 23,
	race: "Human",
	cash: function (inPocket,
		prePurch) {
			return (inPocket - prePurch);
		}
	
};

var yourCash = mainCharacter.cash(20,5);

console.log( yourCash )