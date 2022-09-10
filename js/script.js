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
document.getElementById('navDirectionsButton').addEventListener('click', testFunction);
document.getElementById('navPauseButton').addEventListener('click', testFunction);
document.getElementById('navRestartButton').addEventListener('click', testFunction);
document.getElementById('closeGameStartModalButton').addEventListener('click', testFunction);
document.getElementById('closeDirectionsModalButton').addEventListener('click', testFunction);
document.getElementById('gameEndRestartButton').addEventListener('click', testFunction);
document.getElementById('correctNextQuestionButton').addEventListener('click', testFunction);
document.getElementById('wrongNextQuestionButton').addEventListener('click', testFunction);
document.getElementById('correctAnswer').addEventListener('click', testFunction);
document.getElementById('wrongAnswer1').addEventListener('click', testFunction);
document.getElementById('wrongAnswer2').addEventListener('click', testFunction);
document.getElementById('wrongAnswer3').addEventListener('click', testFunction);

function testFunction() {
    console.log("Works")
}
