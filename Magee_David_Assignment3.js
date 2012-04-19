var mainCharacter = { // object
	name: "Soren",
	sex: "Male",
	certifications: [
		"R3 Pilot",
		"PPS Programming and documentation"
		],
	age: 23,
	race: "Human",
	cash: function (inPocket, // method: function
		prePurch) {
			return (inPocket - prePurch); // number return
		}, 
	catchPhrase: function (){ // method: procedure
		if (mainCharacter.sex === "Male"){
			console.log ("I'm the man of the Earth hour.");
		
		} else {
			console.log ("I'm the lady of the solar wind. ");
			} return 
		},
	addCertification: function (training){ 
		return mainCharacter.certifications.push(training); // array return
	}
	
	
	
};

mainCharacter.catchPhrase(mainCharacter.sex);

var yourCash = mainCharacter.cash(20,5);

var certAdd = mainCharacter.addCertification("Squad Leadership Training");


var mainShip = { // object
	ownShip: true, 
	baseModel: "Viper R3",
	addOns: {
		boosters: true,
		stealthField: true,
		ai: true, 
		vi: true,
	}, 
	crewMembers: [ 
		"Steven",
		"Lenne",
		"Carta",
		"AnDuk"
	],
	addCrew: function (crewMembers) { // method: function
		var addMember;
			for (var i = 4, p = crewMembers.length; i < 5; i++) { // for loop
				mainShip.crewMembers.push("Arthur");
			}
			return addMember; // return array
	},
	getAddons: function (vi){
		while (vi === true){
			mainShip.addOns.intInhib = true;
				while (mainShip.addOns.intInhib = true){
					mainShip.addOns.orgOver = true;
					return;
				};
			}
	},
	doYouOwn: function (){
		return mainShip.ownShip;
		
	}
	
	
};

mainShip.addCrew(mainShip.crewMembers);

mainShip.getAddons(mainShip.addOns.vi);





/*
var hiThere = true;

var taco = function (hiThere){
	while (hiThere === true){
		console.log ("faceHere");
		hiThere = false;
	} 
};

taco(hiThere)
*/
// test for returned value: console.log( yourCash );

// test for returned value: console.log (mainCharacter.certifications);

// test for returned value: console.log(mainShip.crewMembers);