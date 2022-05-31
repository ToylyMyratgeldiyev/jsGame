'use strict';

var btn = document.querySelector('.btn-popup');
var modalOverlay = document.querySelector('.modal-overlay ');
var modal = document.querySelector('.modal');

btn.addEventListener('click', function (e) {
    var path = e.currentTarget.getAttribute('data-path');
    modal.classList.remove('modal--visible');
    btn.classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
});

modalOverlay.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modal.classList.remove('modal--visible');
    }
});

var randomNumber = function randomNumber(max) {
    var min = 1;
    var res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;
};

var quotes = ['На земле нет ничего, более достойного уважения, чем ум.', 'Не тот умен, кто умеет отличить добро от зла, а тот, кто из двух зол умеет выбирать меньшее.', 'Два основных достояния человеческой природы — Это ум и рассуждения.', 'Разумный гонится не за тем, что приятно, а за тем, что избавляет от неприятностей.', 'Самое великое, заключающееся в самом малом, есть вдравый ум в теле человека.', 'Умный многому сумеет научиться у врага.', 'Ум — это духовное оружие человека. ', 'У ума, как у проселочной дороги, есть своя про­торенная колея.'];

var randomQuotes = randomNumber(quotes.length);
var text = document.querySelector('.textQuote');
text.textContent = quotes[randomQuotes];
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

text.addEventListener('mouseover', function (e) {
    if (e.target.tagName != 'SPAN') return;
    e.target.classList.add('active');
});

text.addEventListener('touchstart', function (e) {
    if (e.target.tagName != 'SPAN') return;
    e.target.classList.add('active');
});
// let imgLogo = document.querySelector('.mainLogo')
// imgLogo.addEventListener('mouseover', (e)=>{
//     if(e.target.tagName != 'SPAN') return
//     e.target.classList.add('active')
// })

var chekVolume = true;
var audio = document.querySelector('audio');
var muteImg = document.querySelector('.muteImg');
var muteAndVolumeBTN = document.querySelector('.mute');
muteAndVolumeBTN.addEventListener('click', function (e) {
    if (chekVolume == true) {
        chekVolume = false;
        muteImg.src = './img/volume.svg';
        audio.volume = 0;
    } else if (chekVolume == false) {
        chekVolume = true;
        muteImg.src = './img/mute.svg';
        audio.volume = 1;
    }
});