const btn = document.querySelector('.btn-popup');
const modalOverlay = document.querySelector('.modal-overlay ');
const modal = document.querySelector('.modal');

btn.addEventListener('click', (e) => {
	let path = e.currentTarget.getAttribute('data-path');
    modal.classList.remove('modal--visible');
    btn.classList.add('modal--visible');
	modalOverlay.classList.add('modal-overlay--visible');
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);
    if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modal.classList.remove('modal--visible');
	}
});

let randomNumber = (max) =>{
    let min = 1;
    let res = Math.floor(Math.random() * (max - min + 1) + min)
    return res
}

let quotes = [
    'На земле нет ничего, более достойного уважения, чем ум.',
    'Не тот умен, кто умеет отличить добро от зла, а тот, кто из двух зол умеет выбирать меньшее.',
    'Два основных достояния человеческой природы — Это ум и рассуждения.',
    'Разумный гонится не за тем, что приятно, а за тем, что избавляет от неприятностей.',
    'Самое великое, заключающееся в самом малом, есть вдравый ум в теле человека.',
    'Умный многому сумеет научиться у врага.',
    'Ум — это духовное оружие человека. ',
    'У ума, как у проселочной дороги, есть своя про­торенная колея.'
]

let randomQuotes = randomNumber(quotes.length)
const text = document.querySelector('.textQuote')
text.textContent = quotes[randomQuotes]
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')

text.addEventListener('mouseover', (e)=>{
    if(e.target.tagName != 'SPAN') return
    e.target.classList.add('active')
})


text.addEventListener('touchstart', (e)=>{
    if(e.target.tagName != 'SPAN') return
    e.target.classList.add('active')
})
// let imgLogo = document.querySelector('.mainLogo')
// imgLogo.addEventListener('mouseover', (e)=>{
//     if(e.target.tagName != 'SPAN') return
//     e.target.classList.add('active')
// })

let chekVolume = true
let audio = document.querySelector('audio')
let muteImg = document.querySelector('.muteImg')
let muteAndVolumeBTN = document.querySelector('.mute')
muteAndVolumeBTN.addEventListener('click',(e)=>{
    if(chekVolume == true){
        chekVolume = false;
        muteImg.src = '/volume.svg'
        audio.volume = 0;
    }else if(chekVolume == false){
        chekVolume = true;
        muteImg.src = '/mute.svg'
        audio.volume = 1;
    }
})