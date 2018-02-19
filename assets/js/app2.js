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

    let opt1 = document.getElementById('opt1');
    let opt2 = document.getElementById('opt2');
    let opt3 = document.getElementById('opt3');
    let opt4 = document.getElementById('opt4');

    for(let j = 0; j < data.results[0].incorrect_answers[0].length; j++){
      //console.log(data.results[0].incorrect_answers[j])
      let incorrectAnswers = data.results[0].incorrect_answers[j];
  
    }

    /*Creando container de preguntas de opción múltiple */
$('#containerQuestionsMultipleChoice').append('<div class="row"><div class="col s11 offset-s1"><h3 class="titleMultiple">'+data.results[0].question+'</h3></div></div><div class="row">'+
  '<div class="col s11 offset-s1 opt"><p class="options"><a id="opt1" href="#">'+data.results[0].incorrect_answers[0]+'</a></p></div></div><div class="row"><div class="col s11 offset-s1 opt">'+
  '<p class="options"><a id="opt2" href="#">'+data.results[0].incorrect_answers[1]+'</a></p></div></div><div class="row"><div class="col s11 offset-s1 opt"><p class="options"><a id="opt3" href="#">'+
  data.results[0].correct_answer+'</a></p></div></div><div class="row"><div class="col s11 offset-s1 opt"><p class="options"><a id="opt4" href="#">'+
  data.results[0].incorrect_answers[2]+'</a></p></div></div></div>')


});

  

  
  
  
  
  