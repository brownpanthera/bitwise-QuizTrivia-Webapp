console.log("start");

const question =  document.querySelector(".question");
const op1 = document.querySelector(".op1");
const op2 = document.querySelector(".op2");
const op3 = document.querySelector(".op3");
const op4 = document.querySelector(".op14");

//CALLING API
function quizData(){
fetch("https://the-trivia-api.com/api/questions?limit=10&region=IN&difficulty=easy")
.then(res => res.json())
.then(data => console.log(data))
}

quizData()