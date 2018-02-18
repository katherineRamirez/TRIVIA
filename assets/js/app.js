let objSerialized = window.localStorage.getItem('objdatos');

obj = JSON.parse(objSerialized);
selectionCalled = obj.selectionCall;


fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=' + selectionCalled)

  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function(data) {
    console.log(data);
  });