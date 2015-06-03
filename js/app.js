 $(document).ready(function(){
		
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Variables ---*/
	var CompRandomNum; // Container use to store the value of the gen random number between 1 and 100
	var guess;         // Guess
	var guessCount;    // Counts how many times the user guess
	var feedback;      // Feedback how hot or cold is the guess 

    /*--- Functions ---*/
    // Function to start a new game: 	
	function newGame() {
		randomGenSecNum();
		guessCount = 0;
		clearGuess();
		clearInput();
		log_feedback();
	}
	// Function to generate a random secret number between 1 and 100 using the random() method:
	function randomGenSecNum() {	
		CompRandomNum = Math.floor((Math.random() * 100) + 1);
		console.log(CompRandomNum);
	}
	// Function for the user's guess number:
	function userInput() {
		guess = $("#userGuess").val();
		guess = parseInt(guess);
		console.log(guess);
	}
	// Function to clear the guess number:
	function clearGuess() {
		$("ul#guessList").children().remove(); // The jQuery remove() method removes the selected element(s) and its child elements
		$("#count").text(0); // The jQuery text() method sets or returns the text content of the selected elements
	}
	// Function to clear the input number:
	function clearInput() {
		$("#userGuess").val('');
	}
	// Function to set or return the content of the selected elements using html() method:
	function log_feedback(message) {
		$('#feedback').html(message);
	}
 	// Function to evaluate the guess number using if...else statements.:
	function evaluateGuess() {

		var diff = Math.abs(guess - CompRandomNum); // The abs() method returns the absolute value of a number

		if ( guess === CompRandomNum ) {

			if ( guessCount === 1 ) {

				log_feedback("You're correct!<br> It only took you " + guessCount + " guess.");
			} 

			else { log_feedback("You're correct!<br> It took you " + guessCount + " guesses.");
			}
		}

		else if  ( diff < 5 ) {
			log_feedback("You're very hot");
		} else if  ( diff < 10 ) {
			log_feedback("You're hot");
		} else if  ( diff < 15 ) {
			log_feedback("You're warm");
		} else if  ( diff < 25 ) {
			log_feedback("You're lukewarm");
		} else if  ( diff < 30 ) {
			log_feedback("You're cold");
		} else if  ( diff < 40) {
			log_feedback("You're freezing");
		} else if  ( diff < 100) {
			log_feedback("You're really freezing!");
		} else {
  			alert("Enter a number between 1 and 100");
  		}
	}	
  

	$("form").submit(function(event){
		event.preventDefault();

		userInput();
		var printGuess = $("ul#guessList").append("<li>" + guess +"</li>");
		guessCount += 1;
		var printGuessCounter = $("#count").text(guessCount);
		clearInput();
		evaluateGuess();

	});

	/*--- Invoking the new game ---*/
	newGame();

	//Click on "+ NEW GAME" button to start a new game:
	$(".new").on('click', function() {
		newGame();
	});

});


 