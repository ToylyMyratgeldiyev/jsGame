'use strict';

var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var url = 'http://fe.it-academy.by/Sites/0039909/test.json';

var questions = void 0;
//создаю ассинхронную функцию для получение вопросов с сервера, но это функция срабатывает после функции getNewQuestion
async function asyncFETCH() {
    try {
        var response = await fetch(url);
        var data = await response.json();
        console.log(data);
        questions = data;
        return questions;
    } catch (e) {
        console.error(e);
    }
}

asyncFETCH();

// =============================================================
var SCORE_POINTS = 100;
var MAX_QUESTIONS = 10;

startGame = function startGame() {
    questionCounter = 0;
    score = 0;
    // availableQuestions = [...questions]
    getNewQuestion();
};

getNewQuestion = function getNewQuestion() {
    if (questions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = 'Question ' + questionCounter + ' of ' + MAX_QUESTIONS;
    progressBarFull.style.width = questionCounter / MAX_QUESTIONS * 100 + '%';

    var questionsIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    questions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(function (choice) {
    choice.addEventListener('click', function (e) {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(function () {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
};

startGame();
console.log('конец страницы');