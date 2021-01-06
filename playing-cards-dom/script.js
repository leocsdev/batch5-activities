// alert('Hello from script.js!');

// 
const displayCard = document.getElementById('displayCard');
const displayDealedCard = document.getElementById('displayDealedCard');

const btnDealCard = document.getElementById('btnDealCard');
const btnShuffleCard = document.getElementById('btnShuffleCard');

const cardSuitSymbols = ["♣", "♠", "♡", "♢"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deck = [];

// create deck of cards
for (let i = 0; i < cardSuitSymbols.length; i++) {
  for (let j = 0; j < cardValues.length; j++) {
    let card = cardValues[j] + cardSuitSymbols[i];
    deck.push(card);
  }
}

// display initial deck
displayCard.innerHTML = deck;

btnShuffleCard.addEventListener('click', shuffleCard);

btnDealCard.addEventListener('click', dealCard);

function shuffleCard() {
  deck.sort(() => Math.random() - 0.5);
  displayCard.innerHTML = deck;
}

// deal card
function dealCard() {
  // create a random number from deck.length 0 to 51
  const randomNum = Math.floor(Math.random() * deck.length);
  let card = deck[randomNum];

  // split card and convert to array
  let cardSplit = card.split('');
  
  let cardSuit = "";
  let cardValue = "";

  switch (cardSplit[0]) {
    case "A":
      cardValue = "Ace";
      break;
    case "2":
      cardValue = "Two";
      break;
    case "3":
      cardValue = "Three";
      break;
    case "4":
      cardValue = "Four";
      break;
    case "5":
      cardValue = "Five";
      break;
    case "6":
      cardValue = "Six";
      break;
    case "7":
      cardValue = "Seven";
      break;
    case "8":
      cardValue = "Eight";
      break;
    case "9":
      cardValue = "Nine";
      break;
    case "1":
      cardValue = "Ten";
      break;
    case "J":
      cardValue = "Jack";
      break;
    case "Q":
      cardValue = "Queen";
      break;
    case "K":
      cardValue = "King";
      break;
  }

  switch (cardSplit[cardSplit.length - 1]) {
    case "♣":
      cardSuit = "Clubs";
      break;
    case "♠": 
      cardSuit = "Spades";
      break;
    case "♡": 
      cardSuit = "Hearts";
      break;
    case "♢":
      cardSuit = "Diamonds";
      break;
  }

  // return `${card} - ${cardValue} of ${cardSuit}`;
  let dealedCard = `${card} - ${cardValue} of ${cardSuit}`;
  displayDealedCard.textContent = dealedCard;
}