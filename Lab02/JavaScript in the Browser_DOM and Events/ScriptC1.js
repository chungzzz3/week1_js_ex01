
    const header = document.getElementById('header');
    const againButton = document.getElementById('againButton');
    const submitButton = document.getElementById('submitButton');
    const inputNumber = document.getElementById('inputNumber');
    const displayText = document.getElementById('displayText');
    const displayScore = document.getElementById('displayScore');
    
    let secretNumber = Math.floor(Math.random() * 3) //random từ 0 -10
    

    let score = 5
    function submitGame() {
        submitButton.addEventListener('click', ()=>{
            if(parseInt(inputNumber.value) === secretNumber){
                score++
                updateScore()
                secretNumber = Math.floor(Math.random() * 3)
                displayText.textContent = 'Correct, continue...'
                if(score === 10)
                    alert('You are the Winner')
            }
            else{
                score--
                updateScore()
                displayText.textContent = 'Wrong, try again...'
                if(score < 1){
                    alert('You lose')
                    displayText.textContent = ''
                    inputNumber.value = ''
                    score = 5
                    updateScore()
                }    
            }
        })
    }
    function resetGame() {
        againButton.addEventListener('click', () => {
            displayText.textContent = ''
            inputNumber.value = ''
            score =5
            updateScore()
            secretNumber = Math.floor(Math.random() *10)
        })
    }
    function updateScore() {
        displayScore.textContent = `Score: ${score}`
    }

    submitGame()
    resetGame()
