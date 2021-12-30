const quizData = [
    {
        question: "What is the first line of dialogue in Iron Man, the very first MCU film?",
        a: "I feel like you are driving me to a court-marshal.",
        b: "It is cool if I take a picture with you.",
        c: "I am Iron Man",
        d: "I love you 3000",
        correct: "a",
    
    },

    {
        question: "What video game is Thor addicted to in Avengers: Endgame?",
        a: "Rocket League",
        b: "World of warcraft",
        c: "Fortnite",
        d: "Call of duty",
        correct: "c",
    },
    {
        question: "In which film does Black Panther first appear?",
        a: "Black Panther",
        b: "Captain America: Civil war",
        c: "Captain America: The winter soldier",
        d: "The Avengers",
        correct: "b",
    },
    {
        question: "In a post-credit scene, what food do the Avengers eat after the Battle of New York?",
        a: "Burger",
        b: "Chinese",
        c: "Sushi",
        d: "Shawarma",
        correct: "d",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected(){
   let answer = undefined;
   
   answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
   });

   return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else
        {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>
            
            <button onclick = "location.reload()">Reload</button>
            `;
        }
    }
});
