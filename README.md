# Matt's Final JS Project Revised

## Tabbed Coin Toss and Guessing Game! 

**How to Play!**
+ Select between *Coin Toss* or *Guessing Game*
  1. Coin Toss
    + Click heads or tails. It will randomly generate and see if your guess matches. No limit
  2. Guessing Game
    + Guess a number between 1 and 100
    + You have 10 guesses. Good Luck!

Here is some of the code for the Coin Toss

```javascript
    if(guess == randomNumber) {
         feedback.textContent = "You got it!! Play again?";
         feedback.classList.add("justRight");
         feedback.classList.remove("tooSmall", "tooBig");
         gameOver();
        }  else if(guessCounter == 10) {
            feedback.textContent = "You ran out of guesses. Play again?";
            feedback.classList.add("tooMany");
            feedback.classList.remove("tooSmall", "tooBig");
            gameOver();
        } else {
            if(guess < randomNumber) {
                guessCounter++
                feedback.textContent = "Your guess is too low.";
                feedback.classList.add('tooSmall');
                feedback.classList.remove('tooBig')
            } else if(guess > randomNumber) {
                guessCounter++
                feedback.textContent = "Your guess is too high.";
                feedback.classList.add("tooBig");
                feedback.classList.remove("tooSmall")
            }
            console.log(guess);
            
        }}
```

I have learned this through Davis Tech. Click to visit! [Davis Tech](https://www.davistech.edu)

![DTC Logo](https://www.davistech.edu/media/tlmaw4xt/png-logo-horizontal_60.png "DTC Logo")