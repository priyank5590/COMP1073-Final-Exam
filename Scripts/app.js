(function () {
		
		//create finction
		function DiceRoll() {
		console.log("roll the dice");
		
		var dice1,
			dice2,
			dice3,
			dice4,
			dice5,
			dice6;
			
	dice1 = document.getElementById("dice1");
	dice1.innerHTML = "images/dice1.png";
	
	dice2 = document.getElementById("dice2");
	dice2.innerHTML = "images/dice2.png";
	
	dice3 = document.getElementById("dice3");
	dice3.innerHTML = "images/dice3.png";
	
	dice4 = document.getElementById("dice4");
	dice4.innerHTML = "images/dice4.png";
	
	dice5 = document.getElementById("dice5");
	dice5.innerHTML = "images/dice5.png";
	
	dice6 = document.getElementById("dice6");
	dice5.innerHTML = "images/dice6.png";
		
}
		
		rollButton.addEventListener("click", function(){
			console.log("dice");
		
		});

})();