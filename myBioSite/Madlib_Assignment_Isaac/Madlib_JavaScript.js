// JavaScript Document
function write(){

console.log("WHAT HAVE I DONE!!!");

var userName = document.getElementById('name').value;
console.log(userName);

var userName2 = document.getElementById('name2').value;
console.log(userName2)
	
var foods = document.querySelector('input[name="foods"]:checked').value;
console.log(foods);
	
var games = document.querySelector('input[name="games"]:checked').value;
console.log(games);
	
var place = document.getElementById('place').value;
console.log(place);
	
var place2 = document.getElementById('place2').value;
console.log(place2);
	
var noun = document.getElementById('noun').value;
console.log(noun);
	
var object = document.getElementById('object').value;
console.log(object)
	
var emotion = document.getElementById('emotion').value;
console.log(emotion);
	
var typeoflocation = document.getElementById('typeoflocation').value;
console.log(typeoflocation);
	
var typeoflocation2 = document.getElementById('typeoflocation2').value;
console.log(typeoflocation2);
	
var job = document.getElementById('job').value;
console.log(job);
	
var number = document.getElementById('number').value;
console.log(number);
	
document.getElementById('output').innerHTML = "<img class='img-fluid' src='Images/Well Done.jpg' alt='YOU DID IT'>";
	
document.getElementById('output').innerHTML += "<p>	T'was an ordinary day in the county of "+place+", everyone was going about there business as usual except for one "+noun+" named "+userName+". "+userName+" was just getting back from "+place2+" after taking part in the great "+object+" race, they unfortunately didn't win, but they felt too "+emotion+" to care. "+userName+" took a taxi from the airport to their "+typeoflocation+", but the "+noun+" knew that they would have to go back to their normal, boring job as a "+job+" the next day. When they got back to their "+typeoflocation+", they looked at their phone and saw that "+userName2+" had been trying to call them for "+number+" hours, so they called "+userName2+" back to make sure everything was ok.</p> <p>"+userName2+", my friend, how are you, sorry I couldn't answer your calls, said "+userName+".</p> <p>It's no problem, I just wanted to see how you were after the "+object+" race, said "+userName2+".</p> <p>"+userName+" felt embarrassed to admit that they lost the race to their friend, but they wabted to be honest with "+userName2+", so "+userName+" told them truthfully how it went and how they felt about it. "+userName2+" felt bad for "+userName+" and wanted to make them feel better, so they did something that always made "+userName+" feel good.</p> <p>I have an idea, come down to my "+typeoflocation2+" whenever you can, said "+userName2+". This made "+userName+" feel curious, so they drove down to "+userName2+"'s "+typeoflocation2+", and what happened next made "+userName+" forget about the "+object+" race completely. "+userName+" and "+userName2+" ordered a large "+foods+" and spent the night playing "+games+". "+userName+" was feeling much better, and they had a great day at work the next morning.</p>";
	
var foodsMessage;

if(foods=="Pizza"){
	foodsMessage = "You better not have meant pizza with pinapple.";
}else if(foods=="Salad"){
	foodsMessage = "With or without croutons?";
}else if(foods=="Burger"){
	foodsMessage = "I want McDonald's now, so thanks for that.";
}else if(foods=="Peanutbutter &amp; Jelly Sandwich"){
	foodsMessage = "Hope you arent allergic to peanuts.";
}else if(foods=="Ice cream"){
	foodsMessage = "What's your favourite flavour? Mine's vanilla.";
}
	
document.getElementById('output').innerHTML += "P.S, "+foodsMessage;
	
console.log(foodsMessage);
	

	
	
	
}