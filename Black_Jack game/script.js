
let player ={
    name:"lishan",
    chips: 123
};

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message;
let messageId = document.getElementById("message");
let cardsId = document.getElementById("cards");
let sumId = document.getElementById("sum");
let playerId = document.getElementById("player");

playerId.textContent = player.name+": $"+ player.chips;                 
function getRandom() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();

}

function renderGame() {
    cardsId.textContent = "Cards : ";
    sumId.textContent = "Sum: " + " " + sum
    for (let index = 0; index < cards.length; index++) {
        cardsId.textContent += cards[index] + " ";

    }
    if (sum <= 20) {
        message = `Do you want to Draw a new Card?`;

    }
    else if (sum === 21) {
        message = `Boyahhh! you have got 
             BlackJack `
        hasBlackJack = true;
    }
    else {
        message = `You are out of Game `
        isAlive = false;
    }
    messageId.textContent = message;
}

function newCArd() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandom();
        sum += card;
        cards.push(card);

        renderGame();
    }

}