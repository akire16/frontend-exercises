let secretNumber = Math.floor (Math.random() * 10 + 1);

function checkNumber() {
    let playerNumber = Number(document.getElementById('playerNumber').value);
    let message = document.getElementById('message');

    if (playerNumber === secretNumber) {
        message.textContent = "!Congratulations, you guessed the secret number";
        message.style.backgroundColor = '#8bcb8b'
    } else if (playerNumber < secretNumber) {
        message.textContent = "The number is too low, please try again.";
        message.style.backgroundColor = '#ffb4b4'
    } else {
        message.textContent = "The number is too high, please try again.";
        message.style.backgroundColor = '#ffb4b4'
    }
}

function resetGame() {
    secretNumber = Math.floor (Math.random() * 10 + 1);
}