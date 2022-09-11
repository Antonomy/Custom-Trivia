// Question Class
class Question {
    constructor(question, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3){
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
        this.wrongAnswer3 = wrongAnswer3;
    }
}

// Default questions

let question1 = new Question(
    "Question 1?",
    "Q1CorrectAnswer",
    "Q1Wrong Answer 1",
    "Q1Wrong Answer 2",
    "Q1Wrong Answer 3"
)
let question2 = new Question(
    "Question 2?",
    "Q2CorrectAnswer",
    "Q2Wrong Answer 1",
    "Q2Wrong Answer 2",
    "Q2Wrong Answer 3"
)
let question3 = new Question(
    "Question 3?",
    "Q3CorrectAnswer",
    "Q3Wrong Answer 1",
    "Q3Wrong Answer 2",
    "Q3Wrong Answer 3"
)
let question4 = new Question(
    "Question 4?",
    "Q4CorrectAnswer",
    "Q4Wrong Answer 1",
    "Q4Wrong Answer 2",
    "Q4Wrong Answer 3"
)

let questionArray = [
    question1,
    question2,
    question3,
    question4
]

// Event Listeners
document.getElementById('navDirectionsButton').addEventListener('click', openNavDirections);
document.getElementById('navPauseButton').addEventListener('click', pauseGame);
document.getElementById('navRestartButton').addEventListener('click', restartGame);
document.getElementById('closeGameStartModalButton').addEventListener('click', closeGameStartModal);
document.getElementById('closeDirectionsModalButton').addEventListener('click', closeDirectionsModal);
document.getElementById('closePauseModalButton').addEventListener('click', closePauseModal);
document.getElementById('gameEndRestartButton').addEventListener('click', restartGame);
document.getElementById('correctNextQuestionButton').addEventListener('click', generateQuestion);
document.getElementById('wrongNextQuestionButton').addEventListener('click', generateQuestion);
document.getElementById('correctAnswer').addEventListener('click', correctAnswerChosen);
document.getElementById('wrongAnswer1').addEventListener('click', wrongAnswerChosen);
document.getElementById('wrongAnswer2').addEventListener('click', wrongAnswerChosen);
document.getElementById('wrongAnswer3').addEventListener('click', wrongAnswerChosen);

// For testing
generateQuestion()

function openNavDirections(){
    console.log("openNavDirections")
    document.getElementById('directionsModal').style.display = 'block'
}
function pauseGame(){
    console.log("pauseGame")
    document.getElementById('pauseModal').style.display = 'block'

}
function restartGame(){
    console.log("restartGame")
    window.location.reload()
}
function closeGameStartModal(){
    console.log("closeGameStartModal")
    document.getElementById('gameStartModal').style.display = 'none'
}
function closeDirectionsModal(){
    console.log("closeDirectionsModal")
    document.getElementById('directionsModal').style.display = 'none'
}
function closePauseModal(){
    console.log("closePauseModal")
    document.getElementById('pauseModal').style.display = 'none'
}
function correctAnswerChosen(){
    console.log("correctAnswerChosen")
    document.getElementById('correctAnswerModal').style.display = 'block'
    checkGameEnd()
}
function wrongAnswerChosen(){
    console.log("wrongAnswerChosen")
    document.getElementById('wrongAnswerModal').style.display = 'block'
    checkGameEnd()
}
function openGameEndModal(){
    console.log("openGameEndModal")
    document.getElementById('gameEndModal').style.display = 'block'
}



function randomizeAnswers(){
    let possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    possibleAnswersArray.forEach(possibleAnswer => {
        document.getElementById('answersList').appendChild(possibleAnswersArray[Math.floor(Math.random()*(questionArray.length-1))])
        possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    })
}

function generateQuestion() {
    let randomQuestionArrayIndex = Math.floor(Math.random()*questionArray.length)
    document.getElementById('question').textContent = questionArray[randomQuestionArrayIndex].question;
    document.getElementById('correctAnswer').textContent = questionArray[randomQuestionArrayIndex].correctAnswer;
    document.getElementById('wrongAnswer1').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer1;
    document.getElementById('wrongAnswer2').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer2;
    document.getElementById('wrongAnswer3').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer3;   
    randomizeAnswers()
    questionArray.splice(randomQuestionArrayIndex,1)
    // Removes Correct!/Wrong! modal
    document.getElementById('correctAnswerModal').style.display = 'none'
    document.getElementById('wrongAnswerModal').style.display = 'none'
}

function checkGameEnd(){
    if(questionArray.length===0){
        openGameEndModal()
    }
}

// Z-Index Map
// Level 0: Game
// Level 1: Correct/Incorrect
// Level 2: Directions, Pause
// Level 3: Game End