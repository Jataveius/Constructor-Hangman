//Requires the game.js file so that we can import the word we want the user to guess. 
var main = require("./main.js");
var letter = require("./letter.js");
exports.letterArr = [];
//Function to check if a letter is present in the word.
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	exports.letterArr.push(main.letter);
	var detected = 0; 
	for(var i = 0; i < wordToCheck.length; i++){
		if(wordToCheck.charAt(i) == main.letter){
			letter.editArray(i, main.letter);
			detected++;
		}
	}
	letter.displayWord();
	if(detected == 0){
		main.lives++; 
	}
	main.requestInfo();

}; 

//Function to check if the word guessed is correct. 
exports.wordCheck = function(){
	var guess = main.wordGuess;
	var word = main.chosenWord;
    var isNotEqual; 
    
//Compare each character in the word and the guessed
	for(var k = 0; k<word.length; k++){
		if(guess[k] != word[k]){
			isNotEqual = false; 
		}
		else{
			isNotEqual = true; 
		}
	}

	if(isNotEqual == true){
		console.log("You guessed it!");
		main.playAgain();
	}
	else{
		console.log("Sorry, incorrect.");
		main.lives++;
		main.requestInfo();
	}
};

