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
    "CorrectAnswer",
    "Wrong Answer 1",
    "Wrong Answer 2",
    "Wrong Answer 3"
)
let question2 = new Question(
    "Question 2?",
    "CorrectAnswer",
    "Wrong Answer 1",
    "Wrong Answer 2",
    "Wrong Answer 3"
)
let question3 = new Question(
    "Question 3?",
    "CorrectAnswer",
    "Wrong Answer 1",
    "Wrong Answer 2",
    "Wrong Answer 3"
)
let question4 = new Question(
    "Question 4?",
    "CorrectAnswer",
    "Wrong Answer 1",
    "Wrong Answer 2",
    "Wrong Answer 3"
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

function openNavDirections(){
    console.log("openNavDirections")

}
function pauseGame(){
    console.log("pauseGame")

}
function restartGame(){
    console.log("restartGame")

}
function closeGameStartModal(){
    console.log("closeGameStartModal")

}
function closeDirectionsModal(){
    console.log("closeDirectionsModal")

}
function closePauseModal(){
    console.log("closePauseModal")

}
function correctAnswerChosen(){
    console.log("correctAnswerChosen")

}
function wrongAnswerChosen(){
    console.log("wrongAnswerChosen")

}

function generateQuestion() {
    document.getElementById('question').textContent = questionArray[0].question;
    document.getElementById('correctAnswer').textContent = questionArray[0].correctAnswer;
    document.getElementById('wrongAnswer1').textContent = questionArray[0].wrongAnswer1;
    document.getElementById('wrongAnswer2').textContent = questionArray[0].wrongAnswer2;
    document.getElementById('wrongAnswer3').textContent = questionArray[0].wrongAnswer3;
}