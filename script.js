const quizData = [
    {
    question: "정은이의 성은?",
    a: '임',
    b: '김',
    c: '이',
    d: '조',
    correct: 'a'
    },
    {
    question: "지혜의 학번은?",
    a: '19학번',
    b: '18학번',
    c: '21학번',
    d: '20학번',
    correct: 'd'
    }, 
    {
    question: "정은이가 좋아하는 밴드는?",
    a: '데이쓰리',
    b: '데이식스',
    c: '데이파이브',
    d: '데이포',
    correct: 'b'
    },
    {
    question: '우리 조의 이름은?',
    a: "WEB KING",
    b: "GAME KING",
    c: "TEAM KING",
    d: "KING",
    correct: 'a'
    },
    {
    question: '정은이의 혈액형은?',
    a: 'A',
    b: 'B',
    c: 'O',
    d: 'AB',
    correct: 'd'
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
    //선택한 답
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            //답이 체크됐다면?
            answer = answerEl.id;
            //엔설에 넣기.
        }
    });

    return answer;
}

//선택해제
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // 답을 체크한걸 보이게 함
    const answer = getSelected();
//퀴즈답과 내가 선택한 답이 똑같은지 찾기
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>당신은 ${score}/${quizData.length} 개를 맞췄습니다!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
