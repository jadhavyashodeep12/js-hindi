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