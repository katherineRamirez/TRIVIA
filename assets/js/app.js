let objSerialized = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerialized);
selectionCalled = obj.selectionCall;

let btnStart = document.getElementById('btnStart');
if (selectionCalled === 'boolean') {
  if (btnStart) {
    btnStart.addEventListener('click', function () {
      btnStart.setAttribute('href', 'questions.html');
    });
  }
} else {
  btnStart.addEventListener('click', function () {
    btnStart.setAttribute('href', 'booleanQuestions.html');
  });
}
fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=' + selectionCalled)

  .then(function (response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function (data) {
    console.log(data);

    let type = data.results[0].type;
    //console.log(type)

    let btnTrue = document.getElementById('true'); // botón verdadero
    let btnFalse = document.getElementById('false'); // botón falso
    let correctAnswer = data.results[0].correct_answer;
    console.log(correctAnswer)
    let incorrectAnswer = data.results[0].incorrect_answer;

    /* Creando container de preguntas de verdadero y falso */
    $('#containerQuestionsTrueFalse').append('<div class="container contQuestion"><div class="row"><p><div class="col s10 push-s1 pull-s1 textQuestion">' +
      data.results[0].question + '</p></div></div></div>' +
      '<div class="container contQuestion"><div class="row"><div class="col s6"><a href="#" id="true" class="waves-effect waves-light btn">Verdadero</a></div>' +
      '<div class="col s6"><a href="#" id="false" class="waves-effect waves-light btn">Falso</a></div></div></div>')

    $('#true').click(function () {
      if (data.results[0].correct_answer == 'True') {
        $('#true').attr('href', 'correct.html');
      } else if (data.results[0].correct_answer == 'False') {
        $('#true').attr('href', 'incorrect.html');
      }
    })

    $('#false').click(function () {
      if (data.results[0].correct_answer == 'False') {
        $('#false').attr('href', 'correct.html');
      } else if (data.results[0].correct_answer == 'True') {
        $('#false').attr('href', 'incorrect.html');
      }
    })

  });

/* Creando container de preguntas de opción múltiple 
$('#containerQuestionsMultipleChoice').append('<div class="container contQuestionMultiple"><div class="row"><div class="col s12">'+
  data.results[0].question + '</div></div><div class="row"><div class="col s12><p>'+
  data.results[0].incorrect_answer[0]+'</p></div></div><div class="row"></div><div class="col s12">'+
  '</div><p>'+ data.results[0].incorrect_answer[1]+'</p></div></div><div class="row"></div><div class="col s12">'+
  '</div><p>'+ data.results[0].correct_answer+'</p></div></div><div class="row"></div><div class="col s12">'+
  '</div><p>'+ data.results[0].incorrect_answer[2]+'</p></div>')*/