
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;





function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions =[
      {
        question: 'which one of tehse is a javascript framework?',
        answers: [
            { text: 'Python', correct: false},
            { text: 'React', correct: true},
            { text: 'Django', correct: false},
            { text: 'Eclips', correct: false},

        ]
      }
]

