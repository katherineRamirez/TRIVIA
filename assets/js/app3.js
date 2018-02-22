let objSerializedCI = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerializedCI);
// console.log(obj.arrayCorrects);
// console.log(obj.arrayIncorrects);
// console.log(obj.questionCorrect);
// console.log(obj.questionIncorrect);



for (let i = 0; i < obj.questionCorrect.length; i++) {
    let textquestionCorrect = obj.questionCorrect[i];
    let parser = new DOMParser();
    let valueReady = parser.parseFromString(textquestionCorrect, "text/html");
    let tQ = document.createTextNode(valueReady.firstElementChild.lastChild.firstChild.textContent);
    console.log(textquestionCorrect)
    let textanswerCorrect = obj.arrayCorrects[i];
    let valueReadyy = parser.parseFromString(textanswerCorrect, "text/html");

    let tA = document.createTextNode(valueReadyy.firstElementChild.lastChild.firstChild.textContent);

    let pqContainer = document.createElement('p');
    let paContainer = document.createElement('p');
    pqContainer.appendChild(tQ);
    paContainer.appendChild(tA);
    let divCorrect = document.createElement('div');
    divCorrect.className = 'divCorrect';
    divCorrect.appendChild(pqContainer);
    divCorrect.appendChild(paContainer);
    let results = document.querySelector('.results');
    results.appendChild(divCorrect);
}

for (let i = 0; i < obj.questionIncorrect.length; i++) {
    let textquestionIncorrect = obj.questionIncorrect[i];
    let parser = new DOMParser();

    let valueReady = parser.parseFromString(textquestionIncorrect, "text/html");

    let tQ = document.createTextNode(valueReady.firstElementChild.lastChild.firstChild.textContent);
    let textanswerIncorrect = obj.arrayIncorrects[i];
    let valueReadyy = parser.parseFromString(textanswerIncorrect, "text/html");

    let tA = document.createTextNode(valueReadyy.firstElementChild.lastChild.firstChild.textContent);
    let pqContainer = document.createElement('p');
    let paContainer = document.createElement('p');
    pqContainer.appendChild(tQ);
    paContainer.appendChild(tA);
    let divIncorrect = document.createElement('div');
    divIncorrect.className = 'divIncorrect';
    divIncorrect.appendChild(pqContainer);
    divIncorrect.appendChild(paContainer);
    let results = document.querySelector('.results');
    results.appendChild(divIncorrect);
}

let puntaje = document.querySelector('.puntaje');
let cont = obj.questionCorrect.length;
let textCont = document.createTextNode(cont);
puntaje.appendChild(textCont);