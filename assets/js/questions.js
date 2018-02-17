$(document).ready(function () {
  let selecValue;
  $('select').material_select();

  $('select').on('change', function () {
    selecValue = this.value;
    window.location="index.html";
    fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=' + selecValue)
      .then(function (response) {
        // Turns the the JSON into a JS object
        return response.json();
      })

      .then(function(data) {
        console.log(data);

        let btnStart = document.getElementById('btnStart');

        

      });
  });
});