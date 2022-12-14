// JavaScript Document
var character={head:"", eyes:"", brows:"", nose:"", mouth:"", hair:"", glass:"", hats:""};

function setHead(changling){
	character.head=changling;
	console.log(character.head);
	//run the body builder function
	bodyBuilder();
	
}
	
function setEyes(changling){
	character.eyes=changling;
	console.log(character.eyes);
	//run the body builder function
	bodyBuilder();

}
	
function setBrow(changling){
	character.brows=changling;
	console.log(character.brows);
	//run the body builder function
	bodyBuilder();

}

function setNose(changling){
	character.nose=changling;
	console.log(character.nose);
	//run the body builder function
	bodyBuilder();

}

function setMouth(changling){
	character.mouth=changling;
	console.log(character.mouth);
	//run the body builder function
	bodyBuilder();

}

function setHair(changling){
	character.hair=changling;
	console.log(character.hair);
	//run the body builder function
	bodyBuilder();
	
}

function setGlass(changling){
	character.glass=changling;
	console.log(character.glass);
	//run the body builder function
	bodyBuilder();
	
}	
function setCap(changling){
	character.hats=changling;
	console.log(character.hats);
	//run the body builder function
	bodyBuilder();
	
}
	function bodyBuilder(){
		
	if(character.head!=""){
		document.getElementById('head').innerHTML="<img class='img-fluid' src='images/"+character.head+"' alt='head'>";
	}
		
	if(character.eyes!=""){
		document.getElementById('eyes').innerHTML="<img class='img-fluid' src='images/"+character.eyes+"' alt='eyes'>";
	}
		
	if(character.brows!=""){
		document.getElementById('brows').innerHTML="<img class='img-fluid' src='images/"+character.brows+"' alt='brows'>";
	}
		
	if(character.nose!=""){
		document.getElementById('nose').innerHTML="<img class='img-fluid' src='images/"+character.nose+"' alt='nose'>";
	}
		
	if(character.mouth!=""){
		document.getElementById('mouth').innerHTML="<img class='img-fluid' src='images/"+character.mouth+"' alt='mouth'>";
	}
		
	if(character.hair!=""){
		document.getElementById('hair').innerHTML="<img class='img-fluid' src='images/"+character.hair+"' alt='hair'>";
	}
		
	if(character.glass!=""){
		document.getElementById('glasses').innerHTML="<img class='img-fluid' src='images/"+character.glass+"' alt='glasses'>";
	}
	
	if(character.hats!=""){
		document.getElementById('hats').innerHTML="<img class='img-fluid' src='images/"+character.hats+"' alt='hats'>";
	}
}