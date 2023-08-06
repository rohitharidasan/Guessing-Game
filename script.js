'use strict';

let numberOfTriesAllowed = 15;

let secretNumber = Math.trunc(Math.random()*30)+1;
let score = numberOfTriesAllowed;
let highscore =0;
const modal = document.querySelector('.modal');
const blurOverlay = document.querySelector('.blur-overlay');
const btnCloseModal = document.querySelector('.close-modal');
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};
const closeModal = function(){
  modal.classList.add('hidden');
  blurOverlay.classList.add('hidden');
};


btnCloseModal.addEventListener('click', closeModal);
blurOverlay.addEventListener('click', closeModal);

document.querySelector('.modal-limitation').textContent = "1 and 30."; 
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function(){
  let guess = Number(document.querySelector('.guess').value);


  if(!guess){
    displayMessage("⛔ No Input!");
  }
  else if(guess === secretNumber){
    displayMessage("🎉 Correct Number!");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;}
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 You lost the game!');
      document.querySelector('body').style.backgroundColor = '#e25752';
      document.querySelector('.score').textContent = 0;
    }
  
}});

document.querySelector('.reset').addEventListener('click', function () {
  score = numberOfTriesAllowed;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#45dfae';
  document.querySelector('.number').style.width = '15rem';
});





