"use strict";

// DATA
const quizData = [
	{
		question: "What is the human body’s biggest organ?",
		a: "Brain",
		b: "Skin",
		c: "Lungs",
		d: "Spleen",
		correct: "b",
	},

	{
		question: "The shape of DNA is known as?",
		a: "A triple helix",
		b: "A spiral curve",
		c: "A twisted ladder",
		d: "A double helix",
		correct: "d",
	},

	{
		question: "The outside layer of the human body's skin is called the?",
		a: "Epidermis",
		b: "Dermis",
		c: "Hypodermis",
		d: "Exodermis",
		correct: "a",
	},

	{
		question: "An adult human body has how many bones",
		a: "205",
		b: "206",
		c: "306",
		d: "305",
		correct: "b",
	},

	{
		question: "Babies are born with how many bones?",
		a: "300",
		b: "205",
		c: "306",
		d: "200",
		correct: "a",
	},

	{
		question: "The bones that make up your spine are called what?",
		a: "Ribs",
		b: "Maxilla",
		c: "Sphenoid",
		d: "Vertebrae",
		correct: "d",
	},

	{
		question: "Another name for your voice box is the?",
		a: "Thyroid",
		b: "Voice",
		c: "Larynx",
		d: "Pharynx",
		correct: "c",
	},

	{
		question: "What's the longest bone in the human body?",
		a: "Shin bone",
		b: "Femur",
		c: "Spine",
		d: "Collarbones",
		correct: "b",
	},

	{
		question: "Where in the body does digestion take place?",
		a: "Small intestine",
		b: "Large intestine",
		c: "Mouth",
		d: "Stomach",
		correct: "a",
	},

	{
		question: "Where is the smallest bone located",
		a: "Nose",
		b: "Fingers",
		c: "Eyes",
		d: "Ear",
		correct: "d",
	},
];

// ELEMENTS
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const timeLine = document.querySelector(".time-line");
const labelTime = document.querySelector(".time");
const number = document.querySelector(".number");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const next = document.getElementById("nextBtn");
const welcomeBtn = document.querySelector(".welcomeBtn");
const quizSection = document.querySelector(".quiz_section");
const resultSection = document.querySelector(".result_section");
let totalQuizPlayed = document.querySelector(".quizPlayed");
let totalScore = document.querySelector(".quizWon");
let totalScorePercentage = document.querySelector(".score");
let circularProgress = document.querySelector(".circle");
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



// start Quiz
const startQuiz = () => {
	welcomeBtn.addEventListener('click', function () {
		timeCountdown();
		showQuiz();
		quizStart.classList.add('hidden');
		quizGame.classList.remove('hidden');
		next.classList.remove('hidden');
		next.textContent = "Submit";
	});
};
startQuiz();


// Show the Quiz
function showQuiz() {
	deselectAnswers();
	const currentQuiz = quizData[currentQuizIndex];
	questionEl.innerText = currentQuiz.question;
	a_text.innerText = currentQuiz.a;
	b_text.innerText = currentQuiz.b;
	c_text.innerText = currentQuiz.c;
	d_text.innerText = currentQuiz.d;
}


// Quiz Countdown
const totalQuizCountdown = () => {
	let circleStyle = window.getComputedStyle(circle1);

	let strokeArray = circleStyle.getPropertyValue("stroke-dasharray");
	let strokeArrayNum = parseInt(strokeArray);

	let strokeOffset = circleStyle.getPropertyValue("stroke-dashoffset");
	let strokeOffsetNum = parseInt(strokeOffset);

	let strokeOffsetValue = strokeOffsetNum - strokeArrayNum / quizData.length;

	circle1.style.strokeDashoffset = `${strokeOffsetValue}`;

	number.textContent = `${quizData.length - currentQuizIndex}`;
};


// SCORE
const endGameScore = () => {
	const circularScoreProgress = setInterval(() => {
		scoreProgress.style.background = `conic-gradient(#ffeb03 ${
			scoreMov * 3.6
		}deg, #181659 0)`;

		totalScorePercentage.textContent = `${scoreMov}%`;
		if (scorePercentage === 0) {
			scoreMov = 0;
		} else {
			scoreMov++;
		}

		if (scoreMov === scorePercentage) {
			clearInterval(circularScoreProgress);
		}
	}, 20);

}



// 60 SECONDS TIMER
function timeCountdown() {

	const timedown = () => {
		const min = String(Math.trunc(time / 60)).padStart(2, 0);
		const sec = String(time % 60).padStart(2, 0);

		// In each call, print the remaining time to UI
		labelTime.textContent = `${min}:${sec}`;

		// When 0 seconds, stop timer and log out user
		if (time === 0) {
			clearInterval(timer);
			quizSection.classList.add('hidden');
			resultSection.classList.remove('hidden');
			timeLine.style.width = '85%';
			endGameScore();
			// endGame();
		}

		time--;
		widthIncrease+= 2.83;
		timeLine.style.width = `${widthIncrease}%`;
		
	}

	
	timedown();
	
	
	const timer = setInterval(timedown, 1000);
	return timer;
	
}


// PROGRESS BAR WIDTH
const ProgressWidth = () => {
	const timersWidth = window.getComputedStyle(timers, '::after');
	let mainWidth = timersWidth.getPropertyValue('width');
	mainWidth = parseInt(mainWidth);

	let width = 0;
	widthIncrease = mainWidth / 30; //original time duration
	widthIncrease = +widthIncrease.toFixed(2);

	return widthIncrease;
	
};

// Deselect the Already selected answers
function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Store selected Answer
function selectedAnswer() {
	let answer;
	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

// Check if the answer is correct or skipped
const checkAnswer = () => {
	const answer = selectedAnswer();

	if (answer) {
		if (answer === quizData[currentQuizIndex].correct) {
			score++;
		}
		quizPlayed++;
		scorePercentage = score * 10;
		currentQuizIndex++;
	} else {
		currentQuizIndex++;
		scorePercentage = score * 10;
	}
};


// END QUIZ COMMENTARY
const commentary = () => {
	if (time === 0) {
		endMessage.textContent = 'Time is Up!';
	} else {
		if (score > 2 && score < 5) {
			endMessage.textContent = 'You Tried!';
		} else if (score <= 2) {
			endMessage.textContent = 'You Failed😥';
		} else if (score >= 5 && score <= 7) {
			endMessage.textContent = 'You Passed!';
		} else {
			endMessage.textContent = 'You Excelled!';
		}
	};
	
};


// End the Game


const endGame = () => {
	if (currentQuizIndex < quizData.length) {
		showQuiz();
		scoreMov = 0;
	} else if (currentQuizIndex === quizData.length) {
		quizSection.classList.add("hidden");
		resultSection.classList.remove("hidden");
		scoreMov = 0;

		endGameScore();
		
	}

	commentary();
	
	
	totalQuizPlayed.textContent = `${quizPlayed}`;
	totalScore.textContent = `${score}`;
};



// Add Event Listerner to the Next Button
next.addEventListener("click", (e) => {
	e.preventDefault();
	// totalQuizCountdown();
	checkAnswer();
	endGame();
	console.log(currentQuizIndex, quizData.length);
});


