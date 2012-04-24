var myLib = function (){
	var setDeciPlace = function (number, deci){
		number.toFixed(deci);
		};
	//var findNumInArray = function (){
		
	};
	
	return {
		"setDeciPlace": setDeciPlace
	
	};
	

};


//calls and tests

myLib.setDeciPlace(5.331, 2); //setDeciPlace



console.log(myLib.setDeciPlace);
