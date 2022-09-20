// Global Variables
let customGameName = ''
let customTeam1Name = ''
let customTeam2Name = ''
let team1 = ''
let team2 = ''
let teamArray = []
let currentRound = 1
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
// Instantiate Questions
let r1question1 = new Question(
    "r1Question 1?",
    "r1Q1CorrectAnswer",
    "r1Q1Wrong Answer 1",
    "r1Q1Wrong Answer 2",
    "r1Q1Wrong Answer 3"
)
let r1question2 = new Question(
    "r1Question 2?",
    "r1Q2CorrectAnswer",
    "r1Q2Wrong Answer 1",
    "r1Q2Wrong Answer 2",
    "r1Q2Wrong Answer 3"
)
let r1question3 = new Question(
    "r1Question 3?",
    "r1Q3CorrectAnswer",
    "r1Q3Wrong Answer 1",
    "r1Q3Wrong Answer 2",
    "r1Q3Wrong Answer 3"
)
let r1question4 = new Question(
    "r1Question 4?",
    "r1Q4CorrectAnswer",
    "r1Q4Wrong Answer 1",
    "r1Q4Wrong Answer 2",
    "r1Q4Wrong Answer 3"
)
let r2question1 = new Question(
    "r2Question 1?",
    "r2Q1CorrectAnswer",
    "r2Q1Wrong Answer 1",
    "r2Q1Wrong Answer 2",
    "r2Q1Wrong Answer 3"
)
let r2question2 = new Question(
    "r2Question 2?",
    "r2Q2CorrectAnswer",
    "r2Q2Wrong Answer 1",
    "r2Q2Wrong Answer 2",
    "r2Q2Wrong Answer 3"
)
let r2question3 = new Question(
    "r2Question 3?",
    "r2Q3CorrectAnswer",
    "r2Q3Wrong Answer 1",
    "r2Q3Wrong Answer 2",
    "r2Q3Wrong Answer 3"
)
let r2question4 = new Question(
    "r2Question 4?",
    "r2Q4CorrectAnswer",
    "r2Q4Wrong Answer 1",
    "r2Q4Wrong Answer 2",
    "r2Q4Wrong Answer 3"
)
let r3question1 = new Question(
    "r3Question 1?",
    "r3Q1CorrectAnswer",
    "r3Q1Wrong Answer 1",
    "r3Q1Wrong Answer 2",
    "r3Q1Wrong Answer 3"
)
let r3question2 = new Question(
    "r3Question 2?",
    "r3Q2CorrectAnswer",
    "r3Q2Wrong Answer 1",
    "r3Q2Wrong Answer 2",
    "r3Q2Wrong Answer 3"
)
let r3question3 = new Question(
    "r3Question 3?",
    "r3Q3CorrectAnswer",
    "r3Q3Wrong Answer 1",
    "r3Q3Wrong Answer 2",
    "r3Q3Wrong Answer 3"
)
let r3question4 = new Question(
    "r3Question 4?",
    "r3Q4CorrectAnswer",
    "r3Q4Wrong Answer 1",
    "r3Q4Wrong Answer 2",
    "r3Q4Wrong Answer 3"
)
//Question List
let round1QuestionArray = [
    r1question1,
    r1question2,
    r1question3,
    r1question4
]

let round2questionArray = [
    r2question1,
    r2question2,
    r2question3,
    r2question4
]

let round3questionArray = [
    r3question1,
    r3question2,
    r3question3,
    r3question4
]

let roundsArray = [round1QuestionArray, round2questionArray, round3questionArray]

let questionArray = roundsArray[0]


//Teams Class
class Team {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

//Open Rules
function openNavRules() {
    document.getElementById('rulesModal').style.display = 'flex'
}
//Pause game - need to update to stop timer once timer is added
function pauseGame() {
    document.getElementById('pauseModal').style.display = 'flex'
    pauseCountdown()
}
//Refresh Page - Need to update to store info and clear scores
function restartGame() {
    window.location.reload()
}

function closeGameStartModal() {
    document.getElementById('gameStartModal').style.display = 'none'
    //Store Game Name
    customGameName = document.getElementById('customGameName').value
    //Update Game Name
    document.getElementById('gameName').textContent = `${customGameName}`
    //Store Team Name
    customTeam1Name = document.getElementById('customTeam1Name').value
    //Update Team Name
    document.getElementById('team1Name').textContent = `${customTeam1Name}: `
    //Store Team Name
    customTeam2Name = document.getElementById('customTeam2Name').value
    //Update Team Name
    document.getElementById('team2Name').textContent = `${customTeam2Name}: `
    //Store customCountdown
    customCountdown = document.getElementById('customCountdown').value
    team1 = new Team(customTeam1Name)
    team2 = new Team(customTeam2Name)
    teamArray.push(team1)
    teamArray.push(team2)
    generateQuestion()
}

//Modal Closing Buttons
function closeRulesModal() {
    document.getElementById('rulesModal').style.display = 'none'
}
function closePauseModal() {
    document.getElementById('pauseModal').style.display = 'none'
    startCountdown()
}
//Answer Grading
function correctAnswerChosen() {
    teamArray[0].score++
    document.getElementById('correctAnswerModal').style.display = 'flex'
    document.getElementById('nextQuestionButton').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('correctAnswerModal').style.display = 'none'
    }, 1000)
    updateScoreboard(true)
    revealAnswers()
    pauseCountdown()
    makeAnswersUnclickable()
}
function wrongAnswerChosen() {
    document.getElementById('wrongAnswerModal').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('wrongAnswerModal').style.display = 'none'
    }, 1000)
    document.getElementById('nextQuestionButton').style.display = 'flex'
    updateScoreboard(false)
    revealAnswers()
    pauseCountdown()
    makeAnswersUnclickable()
}

function makeAnswersUnclickable() {
    document.getElementById('correctAnswer').removeEventListener('click', correctAnswerChosen);
    document.getElementById('wrongAnswer1').removeEventListener('click', wrongAnswerChosen);
    document.getElementById('wrongAnswer2').removeEventListener('click', wrongAnswerChosen);
    document.getElementById('wrongAnswer3').removeEventListener('click', wrongAnswerChosen);
}
function makeAnswersClickable() {
    document.getElementById('correctAnswer').addEventListener('click', correctAnswerChosen);
    document.getElementById('wrongAnswer1').addEventListener('click', wrongAnswerChosen);
    document.getElementById('wrongAnswer2').addEventListener('click', wrongAnswerChosen);
    document.getElementById('wrongAnswer3').addEventListener('click', wrongAnswerChosen);
}
// Removes Correct!/Wrong! modal
function nextQuestion() {
    document.getElementById('nextQuestionButton').style.display = 'none'
    hideAnswers()
    generateQuestion()
    makeAnswersClickable()
    resetCountdown()
    startCountdown()
}
function closeNextRoundModal() {
    document.getElementById('nextRoundModal').style.display = 'none'
    hideAnswers()
    generateQuestion()
    makeAnswersClickable()
}
//Game End Modal
function openGameEndModal() {
    document.getElementById('gameEndModal').style.display = 'flex'
}

function revealAnswers() {
    document.getElementById('correctAnswer').classList.add('revealCorrectAnswer')
    document.getElementById('wrongAnswer1').classList.add('revealWrongAnswer')
    document.getElementById('wrongAnswer2').classList.add('revealWrongAnswer')
    document.getElementById('wrongAnswer3').classList.add('revealWrongAnswer')
}

function hideAnswers() {
    document.getElementById('correctAnswer').classList.remove('revealCorrectAnswer')
    document.getElementById('wrongAnswer1').classList.remove('revealWrongAnswer')
    document.getElementById('wrongAnswer2').classList.remove('revealWrongAnswer')
    document.getElementById('wrongAnswer3').classList.remove('revealWrongAnswer')
}

function randomizeAnswers() {
    let possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    possibleAnswersArray.forEach(possibleAnswer => {
        document.getElementById('answersList').appendChild(possibleAnswersArray[Math.floor(Math.random() * (possibleAnswersArray.length - 1))])
        possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    })
}

let currentCountdown = customCountdown
let timer

function startCountdown() {
    timer = setInterval(countDown, 1000)
}
function pauseCountdown() {
    clearInterval(timer)
}

function resetCountdown() {
    clearInterval(timer)
    currentCountdown = customCountdown
    document.getElementById('timer').textContent = currentCountdown
}

function countDown() {
    currentCountdown--
    document.getElementById('timer').textContent = currentCountdown
    if (currentCountdown === 0) {
        pauseCountdown()
        updateScoreboard(false)
        revealAnswers()
        makeAnswersUnclickable()
        document.getElementById('nextQuestionButton').style.display = 'flex'
        document.getElementById('timer').textContent = "You're out of time"
    }
}


function generateQuestion() {
    //Randomize Question Array
    let randomQuestionArrayIndex = Math.floor(Math.random() * questionArray.length)
    //Update displayed questions and answers
    document.getElementById('question').textContent = questionArray[randomQuestionArrayIndex].question;
    document.getElementById('correctAnswer').textContent = questionArray[randomQuestionArrayIndex].correctAnswer;
    document.getElementById('wrongAnswer1').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer1;
    document.getElementById('wrongAnswer2').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer2;
    document.getElementById('wrongAnswer3').textContent = questionArray[randomQuestionArrayIndex].wrongAnswer3;
    //Randomize Answers
    randomizeAnswers()
    //Remove Used Question
    questionArray.splice(randomQuestionArrayIndex, 1)
    resetCountdown()
    startCountdown()
}

function updateScoreboard(correct) {
    //If correct, award point
    if (correct) {
        document.getElementById('team1Score').textContent = `${team1.score}`
        document.getElementById('team2Score').textContent = `${team2.score}`
    }
    //Check Game End - Out of questions
    //If there are no more questions and there ARE more rounds
    if (questionArray.length === 0 && roundsArray.length !== 1) {
        roundsArray.splice(roundsArray[0], 1)
        currentRound++
        questionArray = roundsArray[0]
        document.getElementById('nextQuestionButton').style.display = 'none'
        document.getElementById('nextRoundModal').style.display = 'flex'
        document.getElementById('nextRoundAnnouncement').textContent = `Round ${currentRound} of 3.`
        //If there are no more questions and there no more rounds
    } else if (questionArray.length === 0 && roundsArray.length === 1) {
        // https://seanconnolly.dev/javascript-find-element-with-max-value
        // Find Highest Score
        const highestScore = teamArray.reduce(
            (prev, current) => {
                return prev.score > current.score ? prev.score : current.score
            }
        )
        // Find Team(s) with Highest Scores
        const winningTeams = teamArray.filter(team => team.score === highestScore)
        let winningTeamsString = ''
        winningTeams.map(teamObj => {
            if (winningTeamsString === '') {
                winningTeamsString += `${teamObj.name} `
            } else {
                winningTeamsString += `& ${teamObj.name}!`
            }
        })
        // Display winning team, don't show correct/incorrect modal
        document.getElementById('winnerAnnouncement').textContent = `The winner is ${winningTeamsString}!`
        openGameEndModal()
        document.getElementById('correctAnswerModal').style.display = 'none'
        document.getElementById('wrongAnswerModal').style.display = 'none'
        document.getElementById('nextQuestionButton').style.display = 'none'
    }
    //Move team to end of lineup | https://stackoverflow.com/questions/24909371/move-item-in-array-to-last-position
    teamArray.push(teamArray.splice(0, 1)[0]);
}

// Event Listeners
document.getElementById('navRulesButton').addEventListener('click', openNavRules);
document.getElementById('navPauseButton').addEventListener('click', pauseGame);
document.getElementById('navRestartButton').addEventListener('click', restartGame);
document.getElementById('closeGameStartModalButton').addEventListener('click', closeGameStartModal);
document.getElementById('closeRulesModalButton').addEventListener('click', closeRulesModal);
document.getElementById('closePauseModalButton').addEventListener('click', closePauseModal);
document.getElementById('nextRoundButton').addEventListener('click', closeNextRoundModal);
document.getElementById('gameEndRestartButton').addEventListener('click', restartGame);
document.getElementById('nextQuestionButton').addEventListener('click', nextQuestion);
document.getElementById('correctAnswer').addEventListener('click', correctAnswerChosen);
document.getElementById('wrongAnswer1').addEventListener('click', wrongAnswerChosen);
document.getElementById('wrongAnswer2').addEventListener('click', wrongAnswerChosen);
document.getElementById('wrongAnswer3').addEventListener('click', wrongAnswerChosen);


// Remaining Ideas
//Themed colors
//Correct/incorrect answer colors
//excel upload questions