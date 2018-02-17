fetch('https://opentdb.com/api.php?amount=10&category=27')
  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })

  .then(function(data) {
    console.log(data);

    let containerQuestions = document.getElementById('containerQuestions');
    let category = document.createElement('p');
    category.setAttribute('class','text');
    let textCategory = document.createTextNode('Category: Animals');
    category.appendChild(textCategory);
    let difficulty = document.createElement('p');
    difficulty.setAttribute('class','text');
    let textDifficulty = document.createTextNode('Difficulty: Medium');
    difficulty.appendChild(textDifficulty);
    containerQuestions.appendChild(category);
    containerQuestions.appendChild(difficulty);
      
  });
