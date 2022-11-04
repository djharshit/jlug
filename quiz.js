
const quizData = [
    {
        question: "Our college established on which date?",
        a: "7 June 1947",
        b: "17 June 1947",
        c: "7 July 1947",
        d: "17 July 1947",
        correct: "c",
    },
    {
        question: "What was the name of the college before JEC(jabalpur engineering college) ?",
        a: "Government College Jabalpur",
        b: "Central College Jabalpur",
        c: "Jabalpur Technical Institutes",
        d: "Jabalpur Government Universities",
        correct: "a",
    },
    {
        question: "Jec started its functioning from an existing building..the name of building was?",
        a: "Mechanical Engineering Institues",
        b: "Avahan",
        c: "Jashan",
        d: "Robertson College",
        correct: "d",
    },
    {
        question: "Electronics and telecommunication education was started by which college?",
        a: "SGSITS",
        b: "JEC",
        c: "DAVV",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "The most used programming languages?",
        a: "C++",
        b: "Python",
        c: "Java",
        d: "HTML",
        correct: "b",
    },
    {
        question: "Fullform of IOT?",
        a: "Internet Of Things",
        b: "Intranet Of Things",
        c: "Internet Of Technologies",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Name the alumni who is co founder of HCL?",
        a: "Ashwin Sharma",
        b: "Arvind Sharma",
        c: "Ajay Choudhary Sir",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Fullform Of HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markin Language",
        c: "Hypertext Markus Language",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Name of our current principal?",
        a: "A. K. Sharma",
        b: "P. K. Jhinge",
        c: "S. S. Thakur",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Alumini funded building in JEC?",
        a: "Physics Department",
        b: "Jashan Hall",
        c: "Library",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Founding principal of Jec?",
        a: "Dr. Arvind Chowdhary Sir",
        b: "Dr. Rakshat Shukla Sir",
        c: "Dr. S. P. Chakravarti",
        d: "Dr. Sandeep Kale",
        correct: "c",
    },
    {
        question: "Motto of JEC?",
        a: "Wings Of Fire",
        b: "In The Skies",
        c: "On Wings",
        d: "Onwards On Wings",
        correct: "d",
    },
    {
        question: "Campus size of Jec in hacters?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})