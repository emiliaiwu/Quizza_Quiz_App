'use strict';

// DATA
const quizData = [
	{
		question: 'What is the human body’s biggest organ?',
		a: 'Brain',
		b: 'Skin',
		c: 'Lungs',
		d: 'Spleen',
		correct: 'b',
	},

	{
		question: 'The shape of DNA is known as?',
		a: 'A triple helix',
		b: 'A spiral curve',
		c: 'A twisted ladder',
		d: 'A double helix',
		correct: 'd',
	},

	{
		question: "The outside layer of the human body's skin is called the?",
		a: 'Epidermis',
		b: 'Dermis',
		c: 'Hypodermis',
		d: 'Exodermis',
		correct: 'a',
	},

	{
		question: 'An adult human body has how many bones',
		a: '205',
		b: '206',
		c: '306',
		d: '305',
		correct: 'b',
	},

	{
		question: 'Babies are born with how many bones?',
		a: '300',
		b: '205',
		c: '306',
		d: '200',
		correct: 'a',
	},

	{
		question: 'The bones that make up your spine are called what?',
		a: 'Ribs',
		b: 'Maxilla',
		c: 'Sphenoid',
		d: 'Vertebrae',
		correct: 'd',
	},

	{
		question: 'Another name for your voice box is the?',
		a: 'Thyroid',
		b: 'Voice',
		c: 'Larynx',
		d: 'Pharynx',
		correct: 'c',
	},

	{
		question: "What's the longest bone in the human body?",
		a: 'Shin bone',
		b: 'Femur',
		c: 'Spine',
		d: 'Collarbones',
		correct: 'b',
	},

	{
		question: 'Where in the body does digestion take place?',
		a: 'Small intestine',
		b: 'Large intestine',
		c: 'Mouth',
		d: 'Stomach',
		correct: 'a',
	},

	{
		question: 'Where is the smallest bone located',
		a: 'Nose',
		b: 'Fingers',
		c: 'Eyes',
		d: 'Ear',
		correct: 'd',
	},
];

// ELEMENTS
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const timeLine = document.querySelector('.time-line');
const labelTime = document.querySelector('.time');
const number = document.querySelector('.number');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const next = document.getElementById('nextBtn');
const welcomeBtn = document.querySelector('.welcomeBtn');
const quizSection = document.querySelector('.quiz_section');
const resultSection = document.querySelector('.result_section');
let totalQuizPlayed = document.querySelector('.quizPlayed');
let totalScore = document.querySelector('.quizWon');
let totalScorePercentage = document.querySelector('.score');
let circularProgress = document.querySelector('.circle');
let scoreProgress = document.querySelector('.circle2');
let circle1 = document.getElementById('circle');
const endMessage = document.querySelector('.gameOver');
const quizStart = document.querySelector('.start-quiz');
const quizGame = document.querySelector('.quiz-game');
const timers = document.querySelector('.timers');
const reset = document.querySelector('.reset');


let currentQuizIndex = 0;
let score = 0;
let quizPlayed = 0;
let scorePercentage = 0;
let quizNumber = 0;
let time = 30;
let widthIncrease = 0;
let scoreMov = 0;


const startQuiz = () => {
	welcomeBtn.addEventListener('click', function () {
		timeCountdown();
		showQuiz();
		quizStart.classList.add('hidden');
		quizGame.classList.remove('hidden');
		next.classList.remove('hidden');
		next.textContent = 'Submit';
	});
};
startQuiz();


function showQuiz() {
	deselectAnswers();
	const currentQuiz = quizData[currentQuizIndex];
	questionEl.innerText = currentQuiz.question;
	a_text.innerText = currentQuiz.a;
	b_text.innerText = currentQuiz.b;
	c_text.innerText = currentQuiz.c;
	d_text.innerText = currentQuiz.d;
}


next.addEventListener('click', (e) => {
	e.preventDefault();
	// totalQuizCountdown();
	// checkAnswer();
	// endGame();
    currentQuizIndex++;
    number.textContent = `${currentQuizIndex}`;
	console.log(currentQuizIndex, quizData.length);
});