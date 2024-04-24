function flipCoin() {
    const resultElement = document.getElementById('result');
    const coinImg = document.getElementById('coin-img');

    // Generate random number (0 or 1)
    const randomNumber = Math.floor(Math.random() * 2);

    // Update coin image based on random number
    if (randomNumber === 0) {
        coinImg.src = "./image/head.jpg";
        resultElement.textContent = "You Win";
    } else {
        coinImg.src = "./image/tails.jpg";
        resultElement.textContent = "You Lose";
    }
}

function tossCoin() {
    const resultElement = document.getElementById('result');
    const coinImg = document.getElementById('coin-img');

    // Generate random number (0 or 1)
    const randomNumber = Math.floor(Math.random() * 2);

    // Update coin image based on random number
    if (randomNumber === 1) {
        coinImg.src = "./image/tails.jpg";
        resultElement.textContent = "You Win";
    } else {
        coinImg.src = "./image/head.jpg";
        resultElement.textContent = "You Lose";
    }
}