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

var questions = [{
    question: 'Где дети ищут подарки утром 1 января?',
    choice1: 'под ёлкой',
    choice2: 'под палкой',
    choice3: 'под скалкой',
    choice4: 'под мухой',
    answer: 1
}, {
    question: 'Что из перечисленного пирог?',
    choice1: 'кусака',
    choice2: 'закаляка',
    choice3: 'забияка',
    choice4: 'кулебяка',
    answer: 4
}, {
    question: 'Провожают, как известно, по уму, а как встречают?',
    choice1: 'по одёжке',
    choice2: 'по сберкнижке',
    choice3: 'по прописке',
    choice4: 'по рекомендации',
    answer: 1
}, {
    question: 'Как называют мелководный бассейн, предназначенный для детей?',
    choice1: 'утятник',
    choice2: 'лягушатник',
    choice3: 'селёдочник',
    choice4: 'тюленник',
    answer: 2
}, {
    question: 'Что, по словам кота Бегемота, он делал, когда его пришли арестовывать?',
    choice1: 'починял примус',
    choice2: 'чистил обувь',
    choice3: 'варил кашу',
    choice4: 'играл в шахматы',
    answer: 1
}, {
    question: 'Бочонок с каким числом в русском лото принято называть «топориками»?',
    choice1: '11',
    choice2: '69',
    choice3: '77',
    choice4: '88',
    answer: 3
}, {
    question: 'Что из перечисленного название концертного зала, а не стадиона?',
    choice1: '«Камп Ноу»',
    choice2: '«Альберт-холл»',
    choice3: '«Сан-Сиро»',
    choice4: '«Энфилд»',
    answer: 2
}, {
    question: 'В каком фильме Бен Аффлек был не только исполнителем главной роли, но и режиссёром?',
    choice1: '«Операция «Арго»',
    choice2: '«Операция «Трест»',
    choice3: '«Операция «Святой Януарий»',
    choice4: '«Операция «Ы» …»',
    answer: 1
}, {
    question: 'Как не называется ни одна из глав романа Лермонтова «Герой нашего времени»?',
    choice1: '«Княжна Мэри»',
    choice2: '«Бэла»',
    choice3: '«Княгиня Лиговская»',
    choice4: '«Максим Максимыч»',
    answer: 3
}, {
    question: 'Что норвежцы дарят на Новый год в качестве символа тепла и счастья?',
    choice1: 'дрова',
    choice2: 'свечи',
    choice3: 'спички',
    choice4: 'пледы',
    answer: 3
}, {
    question: 'Где впервые была произнесена фраза «Не в силе Бог, а в правде», ставшей впоследствии крылатой?',
    choice1: 'в Новгороде',
    choice2: 'в фильме «Брат 2»',
    choice3: 'в Белом Море',
    choice4: 'в соборе Парижской Богоматери',
    answer: 1
}, {
    question: 'Как называется психологический эффект, который несколько лет назад открыли американские ученые?',
    choice1: 'оконной рамы',
    choice2: 'закрытой фрамуги',
    choice3: 'дверного проёма',
    choice4: 'туалетного крючка',
    answer: 3
}, {
    question: ' Какой предмет стал причиной смерти французского композитора Жан-Батиста Люлли?',
    choice1: 'дирижёрская трость',
    choice2: 'струна рояля',
    choice3: 'гусиное перо',
    choice4: 'смычок скрипки',
    answer: 1
}, {
    question: 'Что не умеют делать ящерицы гекконы?',
    choice1: 'ловить рыбу',
    choice2: 'ходить по потолку',
    choice3: 'менять цвет',
    choice4: 'петь',
    answer: 1
}];

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 10;

startGame = function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [].concat(questions);
    getNewQuestion();
};

getNewQuestion = function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = 'Question ' + questionCounter + ' of ' + MAX_QUESTIONS;
    progressBarFull.style.width = questionCounter / MAX_QUESTIONS * 100 + '%';

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

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