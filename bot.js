// var inputbox = document.getElementById('input');
// var output = document.getElementById('result');
// inputbox.addEventListener("keypress",function (e) {

// 	var key = e.which || e.keycode;
// 	if (key===13) {
// 		document.getElementById('user').innerHTML= inputbox.value;
// 	}
// });

function start(invar,outvar){
	var x = /\w*/;
	if (invar=="") {
		outvar("Please write something")
	}
	 else if (invar=="how are you") {
		outvar("i am fine..")
	}  else if(invar=="what is your name") {
         outvar("hi i am bot")
	}
	else if(invar=="hi"){
		outvar("hey")
	}
	
	
	else if (invar=="my name is "+ x) {
		outvar("hi"+x) 
	}

	else {outvar("i don't know")}

	}


 


