let objSerialized = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerialized);
selectionCalled = obj.selectionCall;
let iQu = 0;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=' + selectionCalled)

  .then(function (response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    let questionCorrect = [];
    let questionIncorrect = [];

    let choiceCorrects = [];
    let choiceIncorrects = [];

    function questionsAnswer(index) {
      //Constructor de preguntas
      let questions = document.querySelector('.questions');
      questions.innerHTML = '';
      let parser = new DOMParser();
      let value = data.results[index].question;
      // console.log(value);
      let valueReady = parser.parseFromString(value, "text/html");
      // console.log('aaaaaaaaaaaaaaaa', valueReady.firstElementChild.lastChild.firstChild.textContent);
      let textQuestion = document.createTextNode(valueReady.firstElementChild.lastChild.firstChild.textContent);
      // console.log(textQuestion.textContent);
      let pQuestion = document.createElement('p');
      let divQuestion = document.createElement('div');
      pQuestion.appendChild(textQuestion);
      divQuestion.appendChild(pQuestion);
      questions.appendChild(divQuestion);
      let options = document.querySelector('.options');
      options.innerHTML = '';
      let arrayData = [];
      arrayData.push(data.results[index].correct_answer);
      for (let i = 0; i < data.results[index].incorrect_answers.length; i++) {
        arrayData.push(data.results[index].incorrect_answers[i]);
      }
      shuffle(arrayData);
      for (let j = 0; j < arrayData.length; j++) {
        let textAns = arrayData[j];
        let valanswerReady = parser.parseFromString(textAns, "text/html");
        let textAnswer = document.createTextNode(valanswerReady.firstElementChild.lastChild.firstChild.textContent);
        let pAnswer = document.createElement('p');
        let divAnswer = document.createElement('div');
        pAnswer.appendChild(textAnswer);
        divAnswer.appendChild(pAnswer);
        divAnswer.className = 'divAnswer';
        options.appendChild(divAnswer);
      }
    }

    questionsAnswer(0);


    let containerQuestionsMultipleChoice = document.querySelector('#containerQuestionsMultipleChoice');
    containerQuestionsMultipleChoice.addEventListener('click', function () {

      if (iQu < data.results.length) {

        let objetivo = event.target.firstChild.textContent;
        console.log(typeof objetivo);
        console.log(data.results[iQu].correct_answer);
        if (objetivo === data.results[iQu].correct_answer) {
          console.log('correcta');
          choiceCorrects.push(data.results[iQu].correct_answer);
          questionCorrect.push(data.results[iQu].question);
          console.log(choiceCorrects);
          console.log(questionCorrect);

          // window.location = "correct.html";

        } else {
          console.log('No es correcta');
          choiceIncorrects.push(data.results[iQu].correct_answer);
          questionIncorrect.push(data.results[iQu].question);
          console.log(choiceIncorrects);
          console.log(questionIncorrect);

          // window.location = "incorrect.html";
        }

        iQu++;
        if (iQu < data.results.length) {
          questionsAnswer(iQu);
        }

      } else {
        console.log(choiceCorrects);
        console.log(choiceIncorrects);

        let arrayCorrects = choiceCorrects;
        let arrayIncorrects = choiceIncorrects;

        objeto_datos = new Object();
        objeto_datos.arrayCorrects = arrayCorrects;
        objeto_datos.arrayIncorrects = arrayIncorrects;
        objeto_datos.questionCorrect = questionCorrect;
        objeto_datos.questionIncorrect = questionIncorrect;

        let objeto_serializadoCI = JSON.stringify(objeto_datos);
        window.localStorage.setItem('objdatos', objeto_serializadoCI);

        window.location = "resuls.html";
      }
    })
  });