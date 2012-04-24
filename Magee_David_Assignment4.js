var myLib = function (){
	var setDeciPlace = function (number, deci){
		number.toFixed(deci)
	};
	var phoneNum = function (digits){
		if (digits  === /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/){
			phoneNum = true 
		} else {
			phoneNum = false
		};
	};
		
	
	
	return {
		"setDeciPlace": setDeciPlace,
		"phoneNum": phoneNum
	};
	

};


//calls and tests

var lib = myLib();

lib.setDeciPlace(5.331, 2); //setDeciPlace

lib.phoneNum(432-278-2765); //set phone number


console.log(lib);


