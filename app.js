// array that holds the cards
const cardArray = [
  {
    name: 'blank',
    img: './images/blank.png',
  },

  {
    name: 'blank',
    img: './images/blank.png',
  },

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

  {
    name: 'white',
    img: './images/white.png',
  },

  {
    name: 'white',
    img: './images/white.png',
  },

];

// get the grid
const grid = document.getElementById('grid');
// create the game board function
function gameBoard() {
  for (i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', './images/blank.png');
    card.setAttribute('data-id', i);
    // card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

gameBoard();
