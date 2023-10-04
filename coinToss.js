let coinImg = document.querySelector('.coin-img');
const buttons = document.querySelector('.buttons');
let results = document.querySelector('.results');
const images = ['./CoinTossImages/heads.jpg', './CoinTossImages/tails.jpg'];
const choice = ['heads', 'tails'];
const winLoss = [ 0, 0 ];


const updateUI = (e, rNumber) => {
    const toss = choice[rNumber];

    const outcome = toss === e.target.id ? 'You guessed wisely' : 'You guessed wrong';

    coinImg.setAttribute('src', images[rNumber]);

    updateHTML = `
    <p>You Chose ${e.target.id}</p>
    <p>The toss is ${toss}</p>
    <p>${outcome}</p>
    <p>Wins = ${winLoss[0]} Losses = ${winLoss[1]}</p>
    `;

    results.innerHTML = updateHTML;
}

buttons.addEventListener('click', e  => {
    e.stopPropagation();

    if(choice.includes(e.target.id)){
        const rNumber = Math.floor(Math.random() * 2);

        if(choice[rNumber] === e.target.id){
            winLoss[0] ++;
        } else {
            winLoss[1] ++;
        }
        
        updateUI(e, rNumber);
    }
})