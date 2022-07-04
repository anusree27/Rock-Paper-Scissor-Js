'use strict';

const comp = document.querySelector('#computer-choice');
const user = document.querySelector('#user-choice');
const result = document.querySelector('#result');
const score = document.querySelector('#score')

const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

let newGame = false;
let userMark = 0;
let compMark = 0;
let playing = true;

const list = ['rock', 'paper', 'scissor'];

let randList = list[Math.floor(Math.random() * list.length)];

document.querySelector('#rock').addEventListener('click', function() {
    while (playing === true) {
        randList = list[Math.floor(Math.random() * list.length)];
        console.log(randList)
        if (randList === 'rock') {
            document.querySelector('#user-choice').textContent = 'Rock';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "Its draw"
            playing = false;
        } else if (randList === 'paper') {
            document.querySelector('#user-choice').textContent = 'Rock';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "Computer gets a point"
            compMark++;
            document.querySelector('#comp-score').textContent = compMark;
            playing = false;
        } else if (randList === 'scissor') {
            document.querySelector('#user-choice').textContent = 'Rock';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "You get a point";
            userMark++;
            document.querySelector('#user-score').textContent = userMark;
            playing = false;
        }
        if (userMark === 10) {
            document.querySelector('body').style.backgroundColor = '#d9ffcc';
            document.querySelector('#winner').textContent = 'you are the Winner!!!';
            playing = false;
        }
        if (compMark === 10) {
            document.querySelector('body').style.backgroundColor = '#ff9999';
            document.querySelector('#winner').textContent = 'Computer won, Better luck next time';
            playing = false;
        }

    }
})

document.querySelector('#paper').addEventListener('click', function() {
    while (playing) {
        randList = list[Math.floor(Math.random() * list.length)];
        if (randList === 'paper') {
            document.querySelector('#user-choice').textContent = 'paper';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "Its draw"
            playing = false;
        } else if (randList === 'scissor') {
            document.querySelector('#user-choice').textContent = 'paper';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "Computer gets a point"
            compMark++;
            document.querySelector('#comp-score').textContent = compMark;
            playing = false;
        } else if (randList === 'rock') {
            document.querySelector('#user-choice').textContent = 'paper';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "You get a point";
            userMark++;
            document.querySelector('#user-score').textContent = userMark;
            playing = false;
        }
        if (userMark === 10) {
            document.querySelector('body').style.backgroundColor = '#d9ffcc';
            document.querySelector('#winner').textContent = 'you are the Winner!!!';
            playing = false;
        }
        if (compMark === 10) {
            document.querySelector('body').style.backgroundColor = '#ff9999';
            document.querySelector('#winner').textContent = 'Computer won, Better luck next time';
            playing = false;
        }

    }
})

document.querySelector('#scissor').addEventListener('click', function() {
    while (playing) {
        randList = list[Math.floor(Math.random() * list.length)];
        if (randList === 'scissor') {
            document.querySelector('#user-choice').textContent = 'scissor';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "Its draw"
            playing = false;
        } else if (randList === 'rock') {
            document.querySelector('#user-choice').textContent = 'Scissor';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "Computer gets a point"
            compMark++;
            document.querySelector('#comp-score').textContent = compMark;
            playing = false;
        } else if (randList === 'paper') {
            document.querySelector('#user-choice').textContent = 'Scissor';
            document.querySelector('#computer-choice').textContent = randList;
            document.querySelector('#result').textContent = "You get a point";
            userMark++;
            document.querySelector('#user-score').textContent = userMark;
            playing = false;
        }
        if (userMark === 10) {
            document.querySelector('body').style.backgroundColor = '#d9ffcc';
            document.querySelector('#winner').textContent = 'you are the Winner!!!';
            playing = false;
        }
        if (compMark === 10) {
            document.querySelector('body').style.backgroundColor = '#ff9999';
            document.querySelector('#winner').textContent = 'Computer won, Better luck next time';
            playing = false;
        }

    }
})


document.querySelector('#replay').addEventListener('click', function() {
    if (compMark == 10 || userMark == 10) {
        playing = false;
    } else {
        playing = true;
        document.querySelector('#user-choice').textContent = '';
        document.querySelector('#computer-choice').textContent = '';
        document.querySelector('#result').textContent = '';

    }
})

document.querySelector('#new-game').addEventListener('click', function() {
    playing = true;
    document.querySelector('#user-choice').textContent = '';
    document.querySelector('#computer-choice').textContent = '';
    document.querySelector('#winner').textContent = '';
    document.querySelector('body').style.backgroundColor = '';
    newGame = true;
    document.querySelector('#user-score').textContent = '';
    document.querySelector('#comp-score').textContent = '';
    compMark = 0;
    userMark = 0;
})
