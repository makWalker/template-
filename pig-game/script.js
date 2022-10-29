'use strict';

//Set the scores to '0'
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
let name0El = document.querySelector('#name--0');
let name1El = document.getElementById('name--1');
let modal = document.querySelector('.modal');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
// name0El.textContent = prompt('Введите ваше имя: ', 'Красотка');
// name1El.textContent = prompt('Введите ваше имя: ', 'Красавчик');
// let player = true;

const checkActive = function (player) {
  return player.classList.contains('player--active');
};
const changeActive = function (player1, player2) {
  player1.classList.remove('player--active');
  player2.classList.add('player--active');
};

//Display winner congratulations
const displayWinner = function (player /*, score1, score2*/) {
  player.textContent = ' ПОБЕДA!!!';
  // modal.classList.remove('modal-hidden');
  // overlay.classList.add('overlay-hidden');
  // document.getElementById(
  //   'winner-name'
  // ).innerHTML = `${player.textContent} одержал победу со счетом ${score1} : ${score2}!!!`;
};

// Hide the image befor the play start
diceEl.classList.add('hidden');

//Hide the winner window
// modal.classList.add('modal-hidden');

//RollDice button event
const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', function () {
  //Generate random number
  let rollDiceNum = Math.floor(Math.random() * 6) + 1;
  //Display the dice pic according the number
  diceEl.setAttribute('src', 'dice-' + rollDiceNum + '.png');
  diceEl.classList.remove('hidden');

  //Checking the number 'Is it 1 or not?'
  if (rollDiceNum != 1) {
    if (checkActive(player0)) {
      current0El.textContent = Number(current0El.textContent) + rollDiceNum;
    } else {
      current1El.textContent = Number(current1El.textContent) + rollDiceNum;
    }
  } else {
    if (checkActive(player0)) {
      current0El.textContent = 0;
      changeActive(player0, player1);
    } else {
      current1El.textContent = 0;
      changeActive(player1, player0);
    }
  }
});

//Hold the result
const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', function () {
  //
  if (checkActive(player0)) {
    score0El.textContent =
      Number(score0El.textContent) + Number(current0El.textContent);
    current0El.textContent = 0;
    if (Number(score0El.textContent) > 100) {
      //Print the player win
      displayWinner(name0El /*, score0El.textContent, score1El.textContent*/);
    }
    changeActive(player0, player1);
  } else {
    score1El.textContent =
      Number(score1El.textContent) + Number(current1El.textContent);
    current1El.textContent = 0;
    if (Number(score1El.textContent) > 100) {
      //Print the player win
      displayWinner(name0El /*, score1El.textContent, score0El.textContent*/);
    }
    changeActive(player1, player0);
  }
});

//Hold the result
const btnNew = document.querySelector('.btn--new');
btnNew.addEventListener('click', function () {
  //
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  name0El.textContent = prompt('Введите ваше имя: ', 'Красотка');
  name1El.textContent = prompt('Введите ваше имя: ', 'Красавчик');
  diceEl.classList.add('hidden');
  if (checkActive(player1)) {
    changeActive(player1, player0);
  }
});
/*
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('modal-hidden');
});

overlay.addEventListener('click', function () {
  overlay.classList.add('modal-hidden');
  modal.classList.add('modal-hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('modal-hidden');
  }
});
*/
