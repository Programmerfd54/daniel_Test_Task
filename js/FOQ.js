document.getElementById('toggleButton').addEventListener('click', function() {
    var questionContainer = document.getElementById('question1');
    var paragraph = questionContainer.querySelector('p');
    var button = document.getElementById('toggleButton');
    var image = document.getElementById('toggleImage');

    questionContainer.classList.toggle('expanded');

    image.classList.add('image-transition');

    if (image.src.includes('plus.svg')) {
        image.src = 'img/minus.svg';
    } else {
        image.src = 'img/plus.svg';
    }

    setTimeout(function() {
        image.classList.remove('image-transition');
    }, 600);
});

document.getElementById('toggleButtons').addEventListener('click', function() {
    var questionContainer = document.getElementById('question2');
    var paragraph = questionContainer.querySelector('p');
    var button = document.getElementById('toggleButtons');
    var image = document.getElementById('toggleImages');

    questionContainer.classList.toggle('expanded');

    image.classList.add('image-transition');

    if (image.src.includes('plus.svg')) {
        image.src = 'img/minus.svg';
    } else {
        image.src = 'img/plus.svg';
    }

    setTimeout(function() {
        image.classList.remove('image-transition');
    }, 600);
});


document.getElementById('toggleButtonss').addEventListener('click', function() {
    var questionContainer = document.getElementById('question3');
    var paragraph = questionContainer.querySelector('p');
    var button = document.getElementById('toggleButtonss');
    var image = document.getElementById('toggleImagess');

    questionContainer.classList.toggle('expanded');

    image.classList.add('image-transition');

    if (image.src.includes('plus.svg')) {
        image.src = 'img/minus.svg';
    } else {
        image.src = 'img/plus.svg';
    }

    setTimeout(function() {
        image.classList.remove('image-transition');
    }, 600);
});

/*
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Копирование запрещено!');
  });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
      alert('Копирование запрещено!');
    }
  });*/