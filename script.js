const quizData=[
    {
        question:'Who is Half-Blood Prince',
        a:'Harry Potter',
        b:'Voldemort',
        c:'Severs Snape',
        d:'Dumbledore',
        correct: 'c'
    },{
        question:'At the end of the series Elder-Wand belongs to...',
        a:'Harry Potter',
        b:'Voldemort',
        c:'Severs Snape',
        d:'Dumbledore',
        correct: 'a'

    },{
        question:'How many Horcruxes were made by Voldemort',
        a:'7',
        b:'8',
        c:'9',
        d:'6',
        corect:'b'
    },{
        question:'The wand chooses the wizard....is said by',
        a:'Dumbledore',
        b:'Bellatrix',
        c:'Ollivander',
        d:'Draco',
        correct:'c'
    },{
        question:'What position did Harry play in Gryffindor Quiddith team',
        a:'Seeker',
        b:'Chaser',
        c:'Beater',
        d:'Keeper',
        correct:'a'
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

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});