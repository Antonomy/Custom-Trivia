// Global Variables
let customGameName = ''
let customTeam1Name = ''
let customTeam2Name = ''
let team1 = ''
let team2 = ''
let teamArray = []

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
//Question List
let questionArray = [
    question1,
    question2,
    question3,
    question4
]
//Teams Class
class Team {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

//Open Rules
function openNavRules() {
    document.getElementById('rulesModal').style.display = 'block'
}
//Pause game - need to update to stop timer once timer is added
function pauseGame() {
    document.getElementById('pauseModal').style.display = 'block'
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
}
//Answer Grading
function correctAnswerChosen() {
    document.getElementById('correctAnswerModal').style.display = 'block'
    updateScoreboard(true)
}
function wrongAnswerChosen() {
    document.getElementById('wrongAnswerModal').style.display = 'block'
    updateScoreboard(false)
}

// Removes Correct!/Wrong! modal
function closeCorrectAnswerChosen() {
    document.getElementById('correctAnswerModal').style.display = 'none'
    generateQuestion()
}
function closeWrongAnswerChosen() {
    document.getElementById('wrongAnswerModal').style.display = 'none'
    generateQuestion()
}
//Game End Modal
function openGameEndModal() {
    document.getElementById('gameEndModal').style.display = 'block'
}

function randomizeAnswers() {
    let possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    possibleAnswersArray.forEach(possibleAnswer => {
        document.getElementById('answersList').appendChild(possibleAnswersArray[Math.floor(Math.random() * (possibleAnswersArray.length - 1))])
        possibleAnswersArray = document.querySelectorAll('.possibleAnswer')
    })
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
}

function updateScoreboard(correct) {
    //If correct, award point
    if (correct) {
        teamArray[0].score++
        document.getElementById('team1Score').textContent = `Score: ${team1.score}`
        document.getElementById('team2Score').textContent = `Score: ${team2.score}`
    }
    //Check Game End - Out of questions
    if (questionArray.length === 0) {
        // Find winning team
        // https://seanconnolly.dev/javascript-find-element-with-max-value
        // const winningTeam = teamArray.reduce(
        //     (prev, current) => {
        //         return prev.score > current.score ? prev.name : current.name
        //     }
        // )
        //Still need to figure out ties  - filter()

        //NEED TO CLEAN UP
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

        document.getElementById('winnerAnnouncement').textContent = `The winner is ${winningTeamsString}!`
        openGameEndModal()
        document.getElementById('correctAnswerModal').style.display = 'none'
        document.getElementById('wrongAnswerModal').style.display = 'none'
    } else {
        //Move team to end of lineup | https://stackoverflow.com/questions/24909371/move-item-in-array-to-last-position
        teamArray.push(teamArray.splice(0, 1)[0]);
    }
}

// Event Listeners
document.getElementById('navRulesButton').addEventListener('click', openNavRules);
document.getElementById('navPauseButton').addEventListener('click', pauseGame);
document.getElementById('navRestartButton').addEventListener('click', restartGame);
document.getElementById('closeGameStartModalButton').addEventListener('click', closeGameStartModal);
document.getElementById('closeRulesModalButton').addEventListener('click', closeRulesModal);
document.getElementById('closePauseModalButton').addEventListener('click', closePauseModal);
document.getElementById('gameEndRestartButton').addEventListener('click', restartGame);
document.getElementById('correctNextQuestionButton').addEventListener('click', closeCorrectAnswerChosen);
document.getElementById('wrongNextQuestionButton').addEventListener('click', closeWrongAnswerChosen);
document.getElementById('correctAnswer').addEventListener('click', correctAnswerChosen);
document.getElementById('wrongAnswer1').addEventListener('click', wrongAnswerChosen);
document.getElementById('wrongAnswer2').addEventListener('click', wrongAnswerChosen);
document.getElementById('wrongAnswer3').addEventListener('click', wrongAnswerChosen);


// Remaining Ideas
//Themed colors
//Correct/incorrect answer colors
//excel upload questions