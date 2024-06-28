//html👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Number Guessing Game</title>
  </head>
  <body>
    <h1>Number Guessing Game</h1>
    <p>Pick a number between 1 and 10</p>
    <label>Enter a guess:</label>
    <input id="guessField" type="number" />
    <input type="submit" id="submitButton" />
    <script src="script.js"></script>
  </body>
</html>




//JS👇🏼
const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById("submitButton").onclick = function() {
  let guess = parseInt(document.getElementById("guessField").value);
  guesses += 1;

  if (guess === answer) {
    alert(`${answer} is the correct number. It took you ${guesses} guesses.`);
  } else if (guess < answer) {
    alert("Too small!");
  } else {
    alert("Too large!");
  }
};
