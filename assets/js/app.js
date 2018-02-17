fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium')
  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function(data) {
    console.log(data);
    let btnStart = document.getElementById('btnStart');

    btnStart.addEventListener('click', function() {

    });

  });