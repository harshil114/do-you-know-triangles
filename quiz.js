const quizForm = document.querySelector('.form')
const submitBtn = document.querySelector('#btn')
const ouput = document.querySelector('#output')

const correctAnswers = ["90","3","180","Equal","Right-angled"];

submitBtn.addEventListener("click",calculateScore)

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
       if(value === correctAnswers[index]){
        score = score+1;
       }
       index = index+1;
    }
    output.innerText = "Final Score "+score;
}