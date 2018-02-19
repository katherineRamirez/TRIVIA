let objSerialized = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerialized);
selectionCalled = obj.selectionCall;

fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=' + selectionCalled)

  .then(function (response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function (data) {
    console.log(data);

    let opt1 = data.results[0].incorrect_answers[0];
    let opt2 = data.results[0].incorrect_answers[1];
    let opt3 = data.results[0].correct_answer;
    let opt4 = data.results[0].incorrect_answers[2];

    let arrIncorrect = [];
    

    for(let j = 0; j < data.results[0].incorrect_answers[0].length; j++){
      //console.log(data.results[0].incorrect_answers[j])
      let incorrectAnswers = data.results[0].incorrect_answers[j];
      //console.log(incorrectAnswers)
      arrIncorrect.push(incorrectAnswers);  
    }
    //console.log(arrIncorrect);

    for(let k = 0; k < arrIncorrect[0].length; k++){
      //console.log(data.results[0].incorrect_answers[j])
      let arr = arrIncorrect[k];
      //console.log(arr);

    }

    /*Creando container de preguntas de opción múltiple */
$('#containerQuestionsMultipleChoice').append('<div class="row"><div class="col s11 offset-s1"><h3 class="titleMultiple">'+data.results[0].question+'</h3></div></div><div class="row">'+
  '<div class="col s11 offset-s1 opt"><a id="opt1" href="#"><p class="options">'+data.results[0].incorrect_answers[0]+'</p></a></div></div><div class="row"><div class="col s11 offset-s1 opt">'+
  '<a id="opt2" href="#"><p class="options">'+data.results[0].incorrect_answers[1]+'</p></a></div></div><div class="row"><div class="col s11 offset-s1 opt"><a id="opt3" href="#"><p class="options">'+
  data.results[0].correct_answer+'</p></a></div></div><div class="row"><div class="col s11 offset-s1 opt"><a id="opt4" href="#"><p class="options">'+
  data.results[0].incorrect_answers[2]+'</p></a></div></div></div>')


});

  

  
  
  
  
  