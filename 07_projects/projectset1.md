#Projects related to DOM:-

## projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## Project 1
```javascript
console.log("Yashodeep")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); //when we click on object then it will give the accurate target . so usee ".trget"
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```



## Project 2 solution
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // it stores values till operstion is not perfromed
  const height = parseInt(document.querySelector('#height').value); //stores height in int
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result:
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `${bmi} this BMI is under weight`;
    } else if (18.6 < bmi < 24.9) {
      result.innerHTML = `${bmi} this BMI is in normal range`;
    } else {
      result.innerHTML = `${bmi} this BMI is overweight`;
    }
  }
});


```

## Project 3 solution code:
```javascript
const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());   uncomment this add see the output while clock.innerHTML should be commented.
  // clock.innerHTML = date.toLocaleTimeString(); uncomment to start project.
}, 1000); // 1000 is milesec

```


## Project 4 solution code:
``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Raandom number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOOO high');
  }
}
function displayGuess(guess) {
  userInput.value = ''; // it clears the input area empty.
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  reamining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  p.style.backgroundColor = 'yellow';
  p.style.color = 'black';
  startover.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    reamining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);

    playGame = true;
  });
}

```


