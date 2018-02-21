let objSerialized = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerialized);
selectionCalled = obj.selectionCall;
let iQu = 0;

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
      let textQuestion = document.createTextNode(data.results[index].question);
      let pQuestion = document.createElement('p');
      let divQuestion = document.createElement('div');
      pQuestion.appendChild(textQuestion);
      divQuestion.appendChild(pQuestion);
      questions.appendChild(divQuestion);
      let options = document.querySelector('.options');
      options.innerHTML = '';
      let arrayData = [];
      arrayData.push(data.results[index].correct_answer);
      for (let i = 0; i < data.results[i].incorrect_answers.length; i++) {
        arrayData.push(data.results[i].incorrect_answers[i]);
      }
      for (let j = 0; j < arrayData.length; j++) {
        let textAnswer = document.createTextNode(arrayData[j]);
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
      iQu++;
      if (iQu<10) {
        questionsAnswer(iQu);
        let objetivo = event.target.firstChild;
        console.log(objetivo);
        if (objetivo === data.results[iQu].correct_answer) {
          console.log('correcta');
          window.location = "correct.html";

        }else{
          console.log('No es correcta');
          window.location = "incorrect.html";

        }
      }
    })




  });