
const username = document.querySelector('#username')
// const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
// var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
// var updatePassword;
// var stringName='MYRATGELDIYEW_APP_SCORE';

const highScores = JSON.parse(localStorage.getItem('highScores')) || []



finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

 
// let btnSaveScore = document.getElementById('saveScoreBtn')
// btnSaveScore.addEventListener('click',storeInfo)








// var updatePassword;
// var stringName='MYRATGELDIYEW_APP_SCORE';
// var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
// updatePassword = Math.random
// let sp = new URLSearchParams()
// sp.append = ('f', 'READ')
// sp.append = ('n', 'MYRATGELDIYEW_APP_SCORE')
// // sp.append = ('p', updatePassword)

// fetch(ajaxHandlerScript, {method:'POST', body: sp})
// .then(response => {
//     response.json()
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error =>{
//     console.log(error)
// })
