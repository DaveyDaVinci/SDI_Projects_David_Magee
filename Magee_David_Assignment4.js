var myLib = function (){
	var setDeciPlace = function (number, deci){
		return lib.deciPlace = number.toFixed(deci)
	};
	var phoneNum = function (digits){
		if (digits  === /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/){ //or /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
			return lib.phoneValid = true 
		} else {
			return lib.phoneValid = false
		};
	};
	var addArray = function (array){
		 for(var i = 0; i < array.length; i++) {
          	v = (array[i]);
          	if (!isNaN(v)) lib.sum += v; 
          };
          	return lib.sum;
	};
	var validEmail = function (email){
		var atsym = email.indexOf("@");
		var dot = email.lastIndexOf(".");
		if (atsym<1 || dot<atsym+2 || dot+2>=email.length){
  			console.log("Sorry, not a valid e-mail address.");
  			return lib.email = false;
		} else {
			console.log("THank you for the address!");
			return lib.email = true;
		};
	};
	var dayMath = function (d1, d2){
		var ms = d2 - d1;
		var s = ms / 1000;
		var m = s / 60;
		var h = m / 60;
		var d = h / 24;
		return lib.dayDiff = d;
	};
	var upperCase = function (string){
		var stringApart = string.replace(/\w\S*/g, function(txt){
			return txt.charAt(0).toUpperCase() 
			+ txt.substr(1).toLowerCase();
			});
   		return lib.ucString = stringApart;
}
	

	return {
		"setDeciPlace": setDeciPlace,
		"phoneNum": phoneNum,
		"sum": 0,
		"validEmail": validEmail, 
		"addArray": addArray,
		"dayMath": dayMath,
		"upperCase": upperCase
		
		
	};
	

};


//calls and tests

var lib = myLib();

lib.setDeciPlace(5.331, 2); //setDeciPlace

lib.phoneNum(432-278-2765); //set phone number

lib.validEmail("herpderp@yerp.com");

lib.addArray([5, "derp", "lol", 7]);

lib.dayMath(new Date(1989, 04, 28), new Date(2012, 04, 28));

lib.upperCase("Hello, newman");

console.log(lib);




//herp = function(stringy){
	//var bah = stringy.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() 
	//+ txt.substr(1).toLowerCase();});
   // return bah;
//}

//var berp = herp("Hello newman");
//console.log(berp);


/* var dayMath = function (d1, d2){
		var ms = d2 - d1;
		var s = ms / 1000;
		var m = s / 60;
		var h = m / 60;
		var d = h / 24;
		return blip = d;
		
	};

var blah = dayMath(new Date(1989, 04, 28), new Date(2012, 04, 28));
console.log(blah);

var addArray = function (array){
		 for(var i = 0; i < array.length; i++) {
          sum = 0,
          v = (array[i]);
          if (!isNaN(v)) sum += v; 
          };
          return sum;
};
       	
var blah = addArray([5, true, "lol", 7]);

console.log(blah);


var validEmail = function (email){
		var atsym = email.indexOf("@");
		var dot = email.lastIndexOf(".");
		if (atsym<1 || dot<atsym+2 || dot+2>=email.length){
  			console.log("Sorry, not a valid e-mail address.");
  			return false;
		} else {
			console.log("THank you for the address!");
			return true;
	};
};

var bloop = validEmail("afeasf@dafs.com");
console.log(bloop);


*/