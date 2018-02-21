(() => {
console.log('Hangman Script Loaded');

const words = ["javascript", "foundation", "bootstrap", "developer", "responsive"];

// storing the random word in a variable.
let currentWord = null;

//Function to Initialize the Game. At start do this:
function init() {
  //Generate a random number and grab the corresponded word in the word array.
  var random = Math.random();
  debugger;
}

init();

})();

// (() => {
//   // designing a hangman game!
//   var words = ["hangman", "javascript", "pancake", "vampire", "avengers"];
//
//   let guessBox = document.querySelector('#selectedLetter'),
//       wordHint = document.querySelector('.currentWord'),
//       replay = document.querySelector('.startOver button'),
//       wrongLetterList = document.querySelector('.wrongLetters'),
//       resetScreen = document.querySelector('.startOver'),
//       wrongAnswers = 0,
//       correctAnswers = 0,
//       displayHints = null,
//       wrongLetterArray = [];
//
//   function showResetScreen(message) {
//     resetScreen.querySelector('h3').textContent = message;
//
//     setTimeout(function() {
//       resetScreen.classList.add('letterUnderline');
//     }, 500);
//   }
//
//   function resetGame() {
//     // reset everything if the user loses
//     let gamePieces = Array.from(document.querySelector("#man").children); // another array method to cast is as an array instead of a nodeList
//     gamePieces.forEach(piece => piece.classList.remove('letterUnderline'));
//     resetScreen.classList.remove('letterUnderline');
//     wrongLetterList.textContent = "";
//     wrongLetterArray = [];
//     guessBox.value = "";
//     wrongAnswers = 0;
//     correctAnswers = 0;
//
//     init();
//   }
//
//   function makeAGuess() {
//     // get the current letter, make sure it's not an empty string
//     if (this.value.length < 1 || this.value === "") { return } // have to explain the double pipe here...
//
//     let currentGuess = this.value;
//
//     // handle an incorrect guess first - this is the "if"
//     if (currentWord.indexOf(currentGuess) < 0) {
//       // select the hangman piece => whatever the curent wrong answer number is
//       document.querySelector(`.wrong${wrongAnswers}`).classList.add('letterUnderline');
//       wrongLetterArray.push(this.value);
//
//       // track the wrong guesses
//       wrongLetterList.textContent = wrongLetterArray.join(" ");
//
//       if (wrongAnswers >= 5) {
//         showResetScreen("Game over! You ran out of guesses!");
//       } else {
//         wrongAnswers++;
//       }
//     } else { // handle a valid letter -> matches line 44 above (the "if")
//       let matchAgainst = currentWord.split("");
//       //find the index(es) of the letter, split the textcontent of the hint string and then replace the letters at those indexes. Join it again and replace the textcontent on the screen
//       let hintString = wordHint.textContent.split(" "); // split on the letterspacing - not each char - b/c we have double underscores (should probably make these em-dashes instead)
//
//       // check each letter; if it exists, put it in the hints text
//       matchAgainst.forEach((letter, index) => {
//         if(letter === currentGuess) {
//           // replace the underscores with the letter
//           hintString[index] = currentGuess;
//           correctAnswers++; // track the correct guesses so we can compare to the word  (this seems to be a bit buggy)
//         }
//       });
//
//       // replace the hint with the new string, including the guessed letter
//       wordHint.textContent = "";
//       wordHint.textContent = hintString.join(" ");
//
//       if (correctAnswers == currentWord.length) {
//         showResetScreen("You Win!");
//       }
//       return true; // make sure the keystroke shows the letter in the input field
//     }
//   }
//
//   // event handling
//   guessBox.addEventListener('keyup', makeAGuess);
//   replay.addEventListener('click', resetGame);
//
//   //show underscores for each letter in our word -> array methods make life a bit easier
//   function init() {
//     currentWord = words[Math.floor(Math.random()*words.length)];
//     wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");
//
//     console.log(`guess this word: ${currentWord}`);
//   }
//
//   init(); // start the insanity!
// })();
