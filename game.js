//Words to guess.
var words = ["coming\xa0to\xa0america", "scareface", "guardian\xa0of\xa0the\xa0galaxy", "lion\xa0king", "titanic", "ghostbuster", "the\xa0wizard\xa0of\xa0oz", "grease", "the\xa0godfather"];

//Sets up a function that chooses the word and returns it back. 
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}