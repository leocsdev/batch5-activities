// Using an array data structure, create a standard deck of cards(52) represented by strings:  (e.g. '♠A', '♡2', '♢Q', '♣K')
// Print the content of the cards whenever there is a change in the deck after the following tasks:
// 1) Create a function that accepts the array of cards and returns the shuffled cards
// 2) Create a function that accepts the array of cards and returns arranged by suit
// 3) Create a function that accepts the array of cards and returns arranged by face or value in ascending / descending order (e.g. Ace, 2.. 10, Jack, Queen, King)
// 4) Create a function that deals a card (printed name should be like 'Ace of Spades', 'Two of Diamonds')

// const cardSuits = ["Club", "Spades", "Heart", "Diamonds"];
const cardSuitSymbols = ["♣", "♠", "♡", "♢"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deck = [];

// create deck of cards
for (let i = 0; i < cardSuitSymbols.length; i++) {
  for (let j = 0; j < cardValues.length; j++) {
    let card = cardSuitSymbols[i] + cardValues[j];
    deck.push(card);
  }
}

// shuffle cards 
function shuffleCards(cards) {
  return cards.sort(() => Math.random() - 0.5);
}

// arrange by suit
function arrangeBySuit(cards) {
  return cards.sort();
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
    case "♣":
      cardSuit = "Club";
      break;
    case "♠": 
      cardSuit = "Spades";
      break;
    case "♡": 
      cardSuit = "Heart";
      break;
    case "♢":
      cardSuit = "Diamond";
      break;
  }

  switch (cardSplit[1]) {
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

  return `${card} - ${cardValue} of ${cardSuit}`;
}

let deckCopy  = [...deck];

console.log("\n");
console.log(`Shuffle cards: ${shuffleCards(deckCopy)}`);
console.log("\n");
console.log(`Arrange cards by suit after shuffle: ${arrangeBySuit(deckCopy)}`)
console.log("\n");
console.log(`Arrange cards by face or value asc: ${deck}`);
console.log("\n");
console.log(`Deal card: ${dealCard()}`);