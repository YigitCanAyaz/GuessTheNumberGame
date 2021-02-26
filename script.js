const number = document.getElementById('number');
const checkMe = document.getElementById('check-me');
const restart = document.getElementById('restart');
const results = document.getElementById('results');
const history = document.getElementById('history');

let randomNumber;
let num;

window.onload = function () {
    number.focus();
    randomNumber = createRandomNumber();
};

checkMe.addEventListener('click', () => {
    num = number.value;
    guessResult();
});

restart.addEventListener('click', () => {

});

const createRandomNumber = () => {
    return Math.floor(Math.random() * 100);
};

const guessResult = () => {

    clearResult();

    if (num > randomNumber) {
        highGuess();
        addToHistoryWrongGuess();
    } else if (randomNumber > num) {
        lowGuess();
        addToHistoryWrongGuess();
    } else {
        correctGuess();
        addToHistoryCorrectGuess();
    }
};

const highGuess = () => {
    const highTag = document.createElement('div');
    highTag.classList.add('result');
    highTag.classList.add('wrong-guess');
    highTag.innerText = "Your guess is to high!";
    results.appendChild(highTag);
};

const lowGuess = () => {
    const lowTag = document.createElement('div');
    lowTag.classList.add('result');
    lowTag.classList.add('wrong-guess');
    lowTag.innerText = "Your guess is to low!";
    results.appendChild(lowTag);
};
const correctGuess = () => {
    let correctTag = document.createElement('div');
    correctTag.classList.add('result');
    correctTag.classList.add('correct-guess');
    correctTag.innerText = "Awesome job, you got it!";
    results.appendChild(correctTag);
};

const clearResult = () => {
    if (results.childNodes.length > 1) {
        results.childNodes[1].remove();
    }
};

const addToHistoryCorrectGuess = () => {
    let guess = document.createElement('div');
    guess.classList.add('guesses');
    guess.innerText = `You guessed ${num}`;
    guess.style.backgroundColor = '#D4EDDA';
    history.appendChild(guess);
}

const addToHistoryWrongGuess = () => {
    let guess = document.createElement('div');
    guess.classList.add('guesses');
    guess.innerText = `You guessed ${num}`;
    guess.style.backgroundColor = '#FFF3CD';
    history.appendChild(guess);
}

restart.addEventListener('click', () => {

    while (history.lastElementChild) {
        history.removeChild(history.lastElementChild);
    }

    results.removeChild(results.firstElementChild);

    randomNumber = createRandomNumber();

    number.value = "";
});