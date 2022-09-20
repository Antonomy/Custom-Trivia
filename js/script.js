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
    "What is the only food that cannot go bad?",
    "Honey",
    "Peanut Butter",
    "Canned Tuna",
    "Dark Chocolate"
)
let r1question2 = new Question(
    "What 90s boy band member bought Myspace in 2011?",
    "Justin Timberlake",
    "Nick Lachey",
    "AJ McLean",
    "Shawn Stockman"
)
let r1question3 = new Question(
    "What is the most visited tourist attraction in the world?",
    "Eiffel Tower",
    "Statue of Liberty",
    "Great Wall of China",
    "Colosseum"
)
let r1question4 = new Question(
    "What is the heaviest organ in the human body?",
    "Liver",
    "Brain",
    "Skin",
    "Heart"
)
let r1question5 = new Question(
    "Where is recognized as the location of the hottest temperature ever recorded on Earth?",
    "Death Valley, California",
    "Mitribah, Kuwait",
    "Yuma, Arizona",
    "Key West, Florida"
)
let r1question6 = new Question(
    "What type of food holds the world record for being the most stolen around the globe?",
    "Cheese",
    "Coffee",
    "Chocolate",
    "Wagyu beef"
)
let r1question7 = new Question(
    "What element does the chemical symbol Au stand for?",
    "Gold",
    "Silver",
    "Magnesium",
    "Salt"
)
let r1question8 = new Question(
    "What is the highest-grossing Broadway show of all time?",
    "The Lion King",
    "Wicked",
    "Hamilton",
    "Rent"
)
let r1question9 = new Question(
    "On average, how many seeds are located on the outside of a strawberry?",
    "200",
    "100",
    "400",
    "500"
)
let r1question10 = new Question(
    "Which fast food restaurant has the largest number of retail locations in the world?",
    "Subway",
    "Chipotle",
    "McDonalds",
    "Jack in the Box"
)
let r2question1 = new Question(
    "Who made the third most 3-pointers in the Playoffs in NBA history?",
    "Lebron James",
    "Kevin Durant",
    "Kyle Korver",
    "Kobe Bryant"
)
let r2question2 = new Question(
    "Which US city is the sunniest major city and sees more than 320 sunny days each year?",
    "Phoenix",
    "Miami",
    "San Francisco",
    "Austin"
)
let r2question3 = new Question(
    "What is the oldest soft drink in the United States?",
    "Dr. Pepper",
    "Coca Cola",
    "Pepsi",
    "Canada Dry Ginger Ale"
)
let r2question4 = new Question(
    "In what country do more than half of people believe in elves?",
    "Iceland",
    "Holland",
    "Russia",
    "Norway"
)
let r2question5 = new Question(
    "What is the name of the coffee shop in the sitcom Friends?",
    "Central Perk",
    "Java Park",
    "Central Park Coffee",
    "Central Park Roastery"
)
let r2question6 = new Question(
    "Which pop star burnt down her home gym with candles?",
    "Britney Spears",
    "Zendaya",
    "Lady Gaga",
    "Kim Kardashian"
)
let r2question7 = new Question(
    "What is the highest-grossing video game franchise to date?",
    "Pokemon",
    "Mario",
    "Call of Duty",
    "Street Fighter"
)
let r2question8 = new Question(
    "“Cirque du Soleil” started in what country?",
    "Canada",
    "USA",
    "France",
    "Russia"
)
let r2question9 = new Question(
    "Which country’s national animal is a unicorn?",
    "Scotland",
    "Denmark",
    "New Zealand",
    "France"
)
let r2question10 = new Question(
    "What is the main ingredient in a falafel?",
    "Chickpea",
    "Lentil",
    "Broccoli",
    "Split pea"
)
let r3question1 = new Question(
    "What is yellowtail fish called in Japanese??",
    "Hamachi",
    "Ahi",
    "Ikura",
    "Maguro"
)
let r3question2 = new Question(
    "What sport has been played on the moon?",
    "Golf",
    "Frisbee",
    "Soccer",
    "Bocce ball"
)
let r3question3 = new Question(
    "What was the first cash crop in America?",
    "Tobacco",
    "Corn",
    "Sugar Cane",
    "Grapes"
)
let r3question4 = new Question(
    "Mycology is the scientific study of what?",
    "Fungi",
    "Flowers",
    "Cancer",
    "Blood"
)
let r3question5 = new Question(
    "What animal is the closest living relative of a human?",
    "Bonobos",
    "Gorillas",
    "Monkeys",
    "Homo sapiens"
)
let r3question6 = new Question(
    "What does the meaning of the word “zodiac” in Ancient Greek?",
    "Circle of animals",
    "Circle of personalities",
    "Circle of stars",
    "Circle of futures"
)
let r3question7 = new Question(
    "The first vaccine was for which disease?",
    "Smallpox",
    "Chickenpox",
    "Polio",
    "Measles"
)
let r3question8 = new Question(
    "Which cereal grain is the most commonly used in beer?",
    "Barley",
    "Hops",
    "Wheat",
    "Rice"
)
let r3question9 = new Question(
    "What country are the Galapagos Islands located in?",
    "Ecuador",
    "Brazil",
    "Belize",
    "Colombia"
)
let r3question10 = new Question(
    "Pupusas are from what country?",
    "El Salvador",
    "Mexico",
    "Brazil",
    "Poland"
)
//Question List
let round1QuestionArray = [
    r1question1,
    r1question2,
    r1question3,
    r1question4,
    r1question5,
    r1question6,
    r1question7,
    r1question8,
    r1question9,
    r1question10
]

let round2questionArray = [
    r2question1,
    r2question2,
    r2question3,
    r2question4,
    r2question5,
    r2question6,
    r2question7,
    r2question8,
    r2question9,
    r2question10
]

let round3questionArray = [
    r3question1,
    r3question2,
    r3question3,
    r3question4,
    r3question5,
    r3question6,
    r3question7,
    r3question8,
    r3question9,
    r3question10
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
    //Update Rules countdown information
    document.getElementById('rulesCountdown').textContent = `${customCountdown}`
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
    }, 900)
    updateScoreboard(true)
    revealAnswers()
    pauseCountdown()
    makeAnswersUnclickable()
}
function wrongAnswerChosen() {
    document.getElementById('wrongAnswerModal').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('wrongAnswerModal').style.display = 'none'
    }, 900)
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
    document.getElementById('correctAnswer').classList.remove('highlight')
    document.getElementById('wrongAnswer1').classList.remove('highlight')
    document.getElementById('wrongAnswer2').classList.remove('highlight')
    document.getElementById('wrongAnswer3').classList.remove('highlight')
}

function hideAnswers() {
    document.getElementById('correctAnswer').classList.remove('revealCorrectAnswer')
    document.getElementById('wrongAnswer1').classList.remove('revealWrongAnswer')
    document.getElementById('wrongAnswer2').classList.remove('revealWrongAnswer')
    document.getElementById('wrongAnswer3').classList.remove('revealWrongAnswer')
    document.getElementById('correctAnswer').classList.add('highlight')
    document.getElementById('wrongAnswer1').classList.add('highlight')
    document.getElementById('wrongAnswer2').classList.add('highlight')
    document.getElementById('wrongAnswer3').classList.add('highlight')
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