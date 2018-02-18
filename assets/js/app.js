let objSerialized = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerialized);
selectionCalled = obj.selectionCall;


fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=' + selectionCalled)

  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function(data) {
    //console.log(data);
  let correctAnswer = data.results[0].correct_answer; // rescatando respuesta correcta
  //console.log(correctAnswer);
  let btnTrue = document.getElementById('true'); // botón verdadero
  let btnFalse = document.getElementById('false'); // botón falso

/* Creando container de preguntas de verdadero y falso */
  $('#containerQuestions').append('<div class="container contQuestion"><div class="row"><p><div class="col s10 push-s1 pull-s1 textQuestion">'
  	+ data.results[0].question + '</p></div></div></div>'+
  	'<div class="container contQuestion"><div class="row"><div class="col s6"><a id="true" class="waves-effect waves-light btn">Verdadero</a></div>'+
  	'<div class="col s6"><a id="false" class="waves-effect waves-light btn">Falso</a></div></div></div>')
  });

/* Comparamos si la respuesta correcta es true al hacer click en true se dirigirá a correct.html
  de lo contrario me dirigirá a incorrect.html */
   if(data.results[0].correct_answer === 'true'){
  	btnTrue.setAttribute('href','correct.html');
  }else{
  	btnFalse.setAttribute('href','incorrect.html');
  }

  