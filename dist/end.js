'use strict';

var username = document.querySelector('#username');
var saveScoreBtn = document.querySelector('#saveScoreBtn');
var finalScore = document.querySelector('#finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName = 'MYRATGELDIYEV_JS_APP';

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', function () {
    saveScoreBtn.disabled = !username.value;
});

saveScoreBtn.addEventListener('click', saveHighScore);

var chekSave = false;

function saveHighScore(e) {
    e.preventDefault();
    chekSave = true;
    var score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

    // updatePassword=Math.random();
    // $.ajax( {
    //         url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
    //         data : { f : 'LOCKGET', n : stringName, p : updatePassword },
    //         success : lockGetReady, error : errorHandler
    //     }
    // );
    // function lockGetReady(){
    //     if ( callresult.error!=undefined )
    //         alert(callresult.error);
    //     else {
    //         // нам всё равно, что было прочитано -
    //         // всё равно перезаписываем
    //         const scoreAJAX = {
    //             score: mostRecentScore,
    //             name: username.value
    //         }
    //         $.ajax( {
    //                 url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
    //                 data : { f : 'UPDATE', n : stringName, v : JSON.stringify(scoreAJAX), p : updatePassword },
    //                 success : res =>console.log(res), error : errorHandler
    //             }
    //         );
    //     }
    // }
    //
    // function errorHandler(error) {
    //     console.log(error)
    // }
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    var message = 'Вы не сохранили свои достижение!';
    if (chekSave === false) {
        (e || window.event).returnValue = message;
    }
    return message;
}, false);

//
// const btnCheckAJAXbtn = document.querySelector('.checkAJAX')
// btnCheckAJAXbtn.addEventListener('click',restoreInfo)
//
//
//
// function restoreInfo() {
//     $.ajax(
//         {
//             url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
//             data : { f : 'READ', n : stringName },
//             success : (callresult)=>{
//                 if ( callresult.error!=undefined )
//                     alert(callresult.error);
//                 else if ( callresult.result!="" ) {
//                     var scores=JSON.parse(callresult.result);
//                     console.log(scores.name)
//                     console.log(scores.score)
//                     console.log('bbb')
//                 }
//             }, error : errorHandler
//         }
//     );
//
//
// }
//
//
//
// function errorHandler(jqXHR,statusStr,errorStr) {
//     alert(statusStr+' '+errorStr);
// }
//
//
//

///AJAX