const quiz = [
{
    question: "Q1: HTTP stands for?",
    a:"Hyper Text Transfer Protocol",
    b:"Hiper Test Transfer Protocol",
    c:"Hyper text transfer prootocol",
    d:"hyper toss text protocol",
    ans:"ans1",
},
{
    question:"Q2: What is the full form of ECMA?",
    a:"European computer manufacture Association",
    b:"European computer manufacturers Association",
    c:"Europian computer manufactured Association",
    d:"European computer manufacturing Association",
    ans:"ans2",
},
{
    question:"Q3: Arrow Function(=>) is related to?",
    a:"ES6",
    b:"ES5",
    c:"ES3",
    d:"ES5.1",
    ans:"ans1",
},
{
    question:"Q4: What is the ful form of API?",
    a:"Applied Programming Interface",
    b:"Application Programming Interface",
    c:"Application Programmers Interface",
    d:"Application Programming Interfauce",
    ans:"ans2",
}
]

const question = document.querySelector('.questions');
const opt1 = document.querySelector('#optn1');
const opt2 = document.querySelector('#optn2');
const opt3 = document.querySelector('#optn3');
const opt4 = document.querySelector('#optn4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

let count=0;
let score=0;
const loading=()=>{
    question.innerHTML= quiz[count].question;
    
    opt1.innerHTML= quiz[count].a;
    opt2.innerHTML= quiz[count].b;
    opt3.innerHTML= quiz[count].c;
    opt4.innerHTML= quiz[count].d;
    
}
loading();

let getAnswerCheck=()=>{
    let ans;
    answers.forEach((c)=>{
        if(c.checked){
            ans=c.id
        }
    })
    return ans;
}
let deselect=()=>{
    answers.forEach((c)=>c.checked=false);
}

submit.addEventListener('click',()=>{
    const answerCheck = getAnswerCheck();
    console.log(answerCheck);

    if(answerCheck===quiz[count].ans) {
        score++;
    }
    count++;

    deselect();

    if (count<quiz.length){
        loading();
    }
    else{
        showScore.innerHTML = `
        <h2> Your Scored ${score}/${quiz.length}</h2>
        <button class="btn" onclick="location.reload()"> Try Again </button>`;

        showScore.classList.remove('scoreArea');
    }
});