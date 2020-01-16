let cards = [
    {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
    },
    {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
    },
    {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
    },
    {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
    }
];
let cardsInPlay = [];
function checkForMatch(){
    if (cardsInPlay.length === 2){
	if (cardsInPlay[0] == cardsInPlay[1])
	    console.log("You found a match!");
	else
	    console.log("Sorry, try again");
    }
}
function flipCard(){
    let cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
}

function createBoard(){
    for (let i = 0; i < 4; i++){
    //for (let i = 0; i < cardsInPlay.length; i++){
	let cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.querySelector('#game-board').appendChild(cardElement);
    }
}
function resetBoard(){
    let cardElementList = document.querySelector('#game-board').childNodes;
    for (let i = 0; i < 4; i++){
	cardsInPlay.pop();
	cardElementList[i].setAttribute('src', "images/back.png");
    }
}
document.querySelector('.resetButton').addEventListener('click', resetBoard);
createBoard();
