(() => {
  //Variables always fo at the top of the file
var words = ["javascript", "foundation", "bootstrap", "developer", "responsive", "Design", "Illustrator", "Photoshop"];

let currentWord = words[Math.floor(Math.random()*words.length)],
  wordHint = document.querySelector('.currentWord');
  guessBox = document.querySelector('.selectedLetter')
  wrongGuesses = 0;

  wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

//functions goes in the middle (logic, etc)
function makeGuess() {
  console.log(this.value);

  if (this.value == "" || this.value.length < 1) {
    return;

  }

  if (currentWord.indexOf(this.value < 0)) {
    //person chose a wrong letter, track the wrong answer
    //index of less than 0 means the letter isn't in the word
    document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

    //increment the wrong guess count, show a piece of hangman
    wrongGuesses++; //this should be last step in wrong guess path
  } else {
    //person chose a letter that matches, guess again
  }
}

// event handling goes at the bottom.
guessBox.addEventListener('keyup', makeGuess);


//Function to Initialize the Game. At start do this:
function init() {
  //Generate a random number and grab the corresponded word in the word array.
  var random = Math.random();
}

init();

})();
