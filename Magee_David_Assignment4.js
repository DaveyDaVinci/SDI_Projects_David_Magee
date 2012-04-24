var myLib = function (){
	var setDeciPlace = function (number, deci){
		number.toFixed(deci);
		};
	
	return {
		"setDeciPlace": setDeciPlace
	
	};
	

};


setDeciPlace(5.332, 2);

console.log(myLib.setDeciPlace);

