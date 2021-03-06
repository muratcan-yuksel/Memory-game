// array that holds the cards
const cardArray = [

  {
    name: 'cheeseburger',
    img: './images/cheeseburger.png',
  },

  {
    name: 'cheeseburger',
    img: './images/cheeseburger.png',
  },

  {
    name: 'fries',
    img: './images/fries.png',
  },

  {
    name: 'fries',
    img: './images/fries.png',
  },

  {
    name: 'hotdog',
    img: './images/hotdog.png',
  },

  {
    name: 'hotdog',
    img: './images/hotdog.png',
  },

  {
    name: 'ice-cream',
    img: './images/ice-cream.png',
  },

  {
    name: 'ice-cream',
    img: './images/ice-cream.png',
  },

  {
    name: 'milkshake',
    img: './images/milkshake.png',
  },

  {
    name: 'milkshake',
    img: './images/milkshake.png',
  },

  {
    name: 'pizza',
    img: './images/pizza.png',
  },

  {
    name: 'pizza',
    img: './images/pizza.png',
  },

];

// get the grid
const grid = document.getElementById('grid');
// get results section
const results = document.getElementById('results');
// create the game board function
function gameBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', './images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

// create some empty arrays to be used
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function flipCard() {
  const cardId = this.getAttribute('data-id');
  // the following takes the data-id (which is an integer assigned in gameBoard function),
  // which in turn translated sth like this => cardArray[2].name,
  // so the name of the 3rd item in the cardArray array of objects
  //--------
  // it pushes the chosen card into the cardsChosen array
  cardsChosen.push(cardArray[cardId].name);
  console.log(cardArray[cardId].name);
  // this one pushes a number
  cardsChosenId.push(cardId);
  // the following is genius,
  // it rewrites the "src" attribute to that of the integer's image (which is in cardArray array of objects)
  this.setAttribute('src', cardArray[cardId].img);
  console.log(cardsChosen);
  console.log(cardsChosenId);
  //each time 2 cards are clicked,
  //check if they're a match
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// function to check for matches
function checkMatch() {
  const cards = document.querySelectorAll('img');
  //the following are integers
  const firstCard = cardsChosenId[0];
  const secondCard = cardsChosenId[1];
  //the following are names, strings
  if (cardsChosen[0] === cardsChosen[1]) {
      //if it's a match,
      //find where the image is located by means of their integers, and turn them white
    cards[firstCard].setAttribute('src', './images/white.png');
    cards[secondCard].setAttribute('src', './images/white.png');
    cardsWon.push(cardsChosenId);
  } else {
    cards[firstCard].setAttribute('src', './images/blank.png');
    cards[secondCard].setAttribute('src', './images/blank.png');
  }
  //when the setTimeOut checks if the cards are a match,
  //empty the arrays to that you can start afresh
  cardsChosen = [];
  cardsChosenId = [];
  results.textContent = cardsWon.length;
  //if the winning cards equal to 6 (bcs we have 2 of each one of them)
  if (cardsWon.length === cardArray.length / 2) {
    results.textContent = 'Congrats!';
  }
}
//this randomizes the images
//array sort really sorts items alphabetically
//in numbers: However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
cardArray.sort(() => 0.5 - Math.random());

gameBoard();
