window.addEventListener('load',init);
let time = 7;
let score = 0;
let isPlaying;

const wordinput = document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timedisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
 'Candy',
 'Aggresive',
 'Buddy',
 'Futuristic',
 'Cocktail',
 'Diverse',
 'Platinize',
 'Imagine',
 'Batman',
 'Fraudulent',
 'Revolution',
 'Produce',
 'Conclusion'
];

document.addEventListener('keypress', function(e) {
	if (e.keyCode == 65,66,67,68,69,70,71,72,73,74,75,76,77,78,7,80,81,82,83,84,85,86,87,88,89,90) {
	  document.getElementById('audio').play();
	}
  });

function init(){
	showWords(words);
	wordinput.addEventListener('input',startmatch);
	setInterval(countdown,1000);
	setInterval(checkstatus,50)
}
function startmatch() {
  if (matchwords()) {
   isPlaying = true;
   time = 6;
   showWords(words);
   wordinput.value = '';
   score++;
  }
  if(score === -1){
      scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;	
  }
}

function matchwords(){
if (wordinput.value === currentword.innerHTML){
	message.style.color = 'green';
	message.innerHTML = `It's Correct!`;
	return true;
}else {
	message.innerHTML = '';
	return false; 
}
}

function showWords(words){
	const randIndex = Math.floor(Math.random() * words.length);
	currentword.innerHTML = words[randIndex];
}
function countdown() {
	if(time > 0){
		time--;
	}else if (time === 0) {
		isPlaying = false;
	}
   timedisplay.innerHTML = time;	
}
function checkstatus(){
	if(!isPlaying && time === 0){
		message.style.color = 'red';
		message.innerHTML ='Game over <br> Please reload the page to play again!';
		score = -1;
	}
}
