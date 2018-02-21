(() => {
  //Variables always fo at the top of the file
var words = ["javascript", "foundation", "bootstrap", "developer", "responsive", "Design", "Illustrator", "Photoshop"];

let currentWord = words[Math.floor(Math.random()*words.length)],
  wordHint = document.querySelector('.currentWord');
  guessBox = document.querySelector('.selectedLetter')

  wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

//functions goes in the middle (logic, etc)
function makeGuess() {
  console.log(this.value);
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
