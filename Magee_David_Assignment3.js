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

var yourCash = mainCharacter.cash(20000,500);

var certAdd = mainCharacter.addCertification("Squad Leadership Training");


var mainShip = { // object
	ownShip: true, 
	wantNew: true,
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
	getAddons: function (vi){ // mutator
		while (vi === true){ // while loop
			mainShip.addOns.intInhib = true;
				while (mainShip.addOns.intInhib = true){//nested loop
					mainShip.addOns.orgOver = true;
					return;
				};
			}
	},
	doYouOwn: function (){
		return mainShip.ownShip;
	},
	buyNew: function (want,cash){
		if (want = true){
			if (cash >= 15000){
				console.log("You just purchased the Eaglor.");// Nested conditional and returned boolean
				mainShip.ownNew = true;
			} else { 
				console.log("You don't have enough to purchase the Eaglor.");
				mainShip.ownNew = false;
			}
		} else {
			console.log("No new ship for you."); 
			mainShip.ownNew = false;
		}
	}
	
	
};

mainShip.addCrew(mainShip.crewMembers);

mainShip.getAddons(mainShip.addOns.vi);

mainShip.buyNew(mainShip.wantNew, yourCash);








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