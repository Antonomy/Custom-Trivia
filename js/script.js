// Question Class
class Question {
    constructor(question, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
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

function openNavDirections() {
    console.log("openNavDirections")
    document.getElementById('directionsModal').style.display = 'block'
}
function pauseGame() {
    console.log("pauseGame")
    document.getElementById('pauseModal').style.display = 'block'

}
function restartGame() {
    console.log("restartGame")
    window.location.reload()
}
function closeGameStartModal() {
    console.log("closeGameStartModal")
    document.getElementById('gameStartModal').style.display = 'none'
}
function closeDirectionsModal() {
    console.log("closeDirectionsModal")
    document.getElementById('directionsModal').style.display = 'none'
}
function closePauseModal() {
    console.log("closePauseModal")
    document.getElementById('pauseModal').style.display = 'none'
}
function correctAnswerChosen() {
    console.log("correctAnswerChosen")
    document.getElementById('correctAnswerModal').style.display = 'block'
    updateScoreboard(true)
}
function wrongAnswerChosen() {
    console.log("wrongAnswerChosen")
    document.getElementById('wrongAnswerModal').style.display = 'block'
    updateScoreboard(false)
}
function openGameEndModal() {
    console.log("openGameEndModal")
    document.getElementById('gameEndModal').style.display = 'block'
}

function randomizeAnswers() {
    let possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    possibleAnswersArray.forEach(possibleAnswer => {
        document.getElementById('answersList').appendChild(possibleAnswersArray[Math.floor(Math.random() * (questionArray.length - 1))])
        possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    })
}

function generateQuestion() {
    let randomQuestionArrayIndex = Math.floor(Math.random() * questionArray.length)
    document.getElementById('question').textContent = questionArray[randomQuestionArrayIndex].question;
    document.getElementById('correctAnswer').textContent = questionArray[randomQuestionArrayIndex].correctAnswer;
    document.getElementById('wrongAnswer1').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer1;
    document.getElementById('wrongAnswer2').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer2;
    document.getElementById('wrongAnswer3').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer3;
    randomizeAnswers()
    questionArray.splice(randomQuestionArrayIndex, 1)
    // Removes Correct!/Wrong! modal
    document.getElementById('correctAnswerModal').style.display = 'none'
    document.getElementById('wrongAnswerModal').style.display = 'none'
}

class Team {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}
let team1 = new Team(
    "Team 1 Name",
)
let team2 = new Team(
    "Team 2 Name",
)

let teamArray = [team1,team2]

function updateScoreboard(correctOrWrong) {
    //If correct, award point
    if(correctOrWrong){
        teamArray[0].score++
        document.getElementById('team1Score').innerHTML = `Score: ${team1.score}`
        document.getElementById('team2Score').innerHTML = `Score:<br>${team2.score}`
    }
    //Move team to end of lineup
    // https://stackoverflow.com/questions/24909371/move-item-in-array-to-last-position
    teamArray.push(teamArray.splice(0, 1)[0]);
    //Check Game End - Out of questions
    if (questionArray.length === 0) {
        let winner = teamArray[0].name
        document.getElementById('winnerAnnouncement').textContent = `The winner is ${winner}!`
        openGameEndModal()
        document.getElementById('correctAnswerModal').style.display = 'none'
        document.getElementById('wrongAnswerModal').style.display = 'none'
    }
}

// Z-Index Map
// Level 0: Game
// Level 1: Correct/Incorrect
// Level 2: Directions, Pause
// Level 3: Game End