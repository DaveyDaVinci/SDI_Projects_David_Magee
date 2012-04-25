var myLib = function (){
	var setDeciPlace = function (number, deci){
		return lib.deciPlace = number.toFixed(deci)
	};
	var addArray = function (array){
		 for(var i = 0; i < array.length; i++) {
          	v = (array[i]);
          	if (!isNaN(v)) lib.sum += v; 
          };
          	return lib.sum;
	};
	var validUrl = function (url, re){
		return lib.urlValid = re.test(url)
	};
	var validEmail = function (email){
		var atsym = email.indexOf("@");
		var dot = email.lastIndexOf(".");
		if (atsym<1 || dot<atsym+2 || dot+2>=email.length){
  			return lib.email = false;
		} else {
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
		"sum": 0,
		"validEmail": validEmail, 
		"addArray": addArray,
		"dayMath": dayMath,
		"upperCase": upperCase,
		"validUrl": validUrl
		
		
	};
	

};


//calls and tests

var lib = myLib();

lib.setDeciPlace(5.331, 2); //setDeciPlace

lib.validEmail("herpderp@yerp.com"); //set email

lib.addArray([5, "derp", "lol", 7]); // set array

lib.dayMath(new Date(1989, 04, 28), new Date(2012, 04, 28)); // set dates

lib.upperCase("Hello, newman"); // set string

lib.validUrl("http://www.lol.com", /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);

console.log(lib);
