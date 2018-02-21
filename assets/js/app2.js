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
    let choice = [];


    let containerQuestionsMultipleChoice = document.querySelector('#containerQuestionsMultipleChoice');
    containerQuestionsMultipleChoice.addEventListener('click', function () {

      if (iQu < 9) {

        let objetivo = event.target.firstChild.textContent;
        console.log(typeof objetivo);
        console.log(data.results[iQu].correct_answer);
        if (objetivo === data.results[iQu].correct_answer) {
          console.log('correcta');
          window.location = "correct.html";

        } else {
          console.log('No es correcta');
          window.location = "incorrect.html";
        }
        choice.push(objetivo);

        iQu++;
        questionsAnswer(iQu);
      } else {
        solve();
      }
    })




  });