//Require the game.js file
var game = require('./game.js');
//Requires inquirer 
var inquirer = require('inquirer');
//Require the word.js file 
var word = require('./word.js');
//Require the letter.js file 
var letter = require('./letter.js')
//Variable
var choice; 

exports.letter; 
exports.wordGuess;
exports.lives = 0; 
exports.chosenWord = game.chooseWord();

//Function to request user input 
exports.requestInfo = function(){
    console.log("Guess the top movies of all times: ")
	if(exports.lives >= 10){
		console.log("You lost the game.");
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "whatDo",
		message: "What would you like to guess?\n You have used "+exports.lives+" out of 10. Be careful.",
		choices:[
		"letter",
		"word"
		]
	}
	];

	inquirer.prompt(questions).then(function(answers){
//If the user wants to guess a letter, inquirer can run again
		if(answers.whatDo == "letter"){
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "You have already chosen: "+word.letterArr+"\nCurrent Guess: "
			}
			];

			inquirer.prompt(letterQ).then(function(answers){
				exports.letter = answers.letter;
				word.checker();
			})
        }
        
//If the user wants to guess a word, inquirer can run again
		else if(answers.whatDo == "word"){
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "Which word do you think it is?"
			}
			];
			inquirer.prompt(wordQ).then(function(answers){
				exports.wordGuess = answers.word;
				word.wordCheck();
			})
        }
        
//User input is something other than word or letter
		else{
			console.log("Wrong answer. Please try again.");
			exports.requestInfo();
		}
	})
	}
	
};

//Reset the game function 
exports.playAgain = function(){
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "Would you like to play again?",
		choices:[
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer){
		if(answer.playAgain == "yes"){
			exports.lives = 0; 
			exports.chosenWord = game.chooseWord();
			letter.guessArr = [];
			letter.wordArr = [];
			word.letterArr = [];
			letter.initDisplay();
			letter.displayWord();
			exports.requestInfo();
		}
		else{
			console.log("Thanks for playing!");
		}
	});
}
//Functions starts game.  
letter.initDisplay();
letter.displayWord();
exports.requestInfo();