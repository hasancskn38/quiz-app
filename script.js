// JSON Array
let questions =  [
    {
        "question":"Wer hat HTML erfunden ?",
        "answer-1":"Robbie Williams",
        "answer-2":"Lady Gaga",
        "answer-3":"Tim Berners Lee",
        "answer-4":"Hasan Coskun",
        "right-answer": 3
    },

    {
        "question":"Wer hat CSS erfunden ?",
        "answer-1":"Hasan Coskun",
        "answer-2":"Sinem Coskun",
        "answer-3":"Can Coskun",
        "answer-4":"Tim Berners Lee",
        "right-answer": 3
    },

    {
        "question":"Wer hat JS erfunden ?",
        "answer-1":"Hasan Coskun",
        "answer-2":"Sinem Coskun",
        "answer-3":"Can Coskun",
        "answer-4":"Tim Berners Lee",
        "right-answer": 3
    },

    {
        "question":"Wer hat Angular erfunden ?",
        "answer-1":"Hasan Coskun",
        "answer-2":"Sinem Coskun",
        "answer-3":"Can Coskun",
        "answer-4":"Tim Berners Lee",
        "right-answer": 3
    }
];

// Init Function
function init() {
    document.getElementById("all-question").innerHTML == questions.length - 1;
    // Run the showQuestion Function bc otherwise we would no see changes
    showQuestion();
}


let currentQuestion = 0;
let nextQuestionBtn = document.getElementById('next-btn');
let rightQuestion = 0;


// showQuestion Function
function showQuestion() {
    if(currentQuestion >= questions.length) {
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display:none';
        document.getElementById('solved-question').innerHTML = rightQuestion;
        document.getElementById('questions-amount').innerHTML = questions.length;
        document.getElementById('quiz-image').style = 'display:none';

    } else {

    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100;
    console.log(percent);
    let progressBar = document.getElementById('progress-bar');
    progressBar.innerHTML = `${percent} %`;
    progressBar.style = `width:${percent}%;`;

    // the var question should be equal to the first item of the questions JSON Array
    let question = questions[currentQuestion];
    // the innerHTML of the Elements should be equal to the values of the 0 JSON Array
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer-1'];
    document.getElementById('answer-2').innerHTML = question['answer-2'];
    document.getElementById('answer-3').innerHTML = question['answer-3'];
    document.getElementById('answer-4').innerHTML = question['answer-4'];
    }   
}


/* with the function parameter selection we go trough all on click answers, so that we
can seperate where we clicked on */
function answer(selection) {
    // the var question should be equal to the first item of the questions JSON Array
    let question = questions[currentQuestion];
    /* now it should console.log the answer where we click on, bc the selection is the function parameter where we go
    through all possible answers */
    console.log('Selectest answer is', selection);
    // with the string.slice syntax we have the possibilitiy to slice an certain part of an string, in this case the last digit
    let selectedQuestionNumber = selection.slice(-1);
    // Now we just console.log the number of the answer we just selected
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    /* here we want to console.log the right answer, by going to question, what in this case is our
    first question block of our JSON Array */
    console.log('Current answer is', question['right-answer']);
    // selects the right answer from the JSON Array
    let idOfRightAnswer = `answer-${question['right-answer']}`;
    /*if the last digit of the answer we clicked on is equal to the number of the right answer we want
    to show that the answer is right*/
    if(selectedQuestionNumber == question['right-answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestion++
        nextQuestionBtn.removeAttribute('disabled');
        selection.addAttribute('disabled');
    }
    // if not it should display something else 
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        /*the removeAttribute Syntax allows us to remove an Attribute from the element*/
        nextQuestionBtn.removeAttribute('disabled');
        selection.addAttribute('disabled');
    }
}


// nextQuestion Function
function nextQuestion() {
    /* due the fact that we want to display the next question block,and the value of currentQuestion
    is zero, we need to add 1 to get the next question block and then run the showQuestion Function
    to display the new functions*/
    currentQuestion++;
    document.getElementById("all-question").innerHTML++;
    /* with the setAttribute Syntax, we want to replace the disabled attribute which we added
    in the answer function with the abled attribute*/
    nextQuestionBtn.setAttribute('disabled', 'abled');
    resetAnswerButtons();
    showQuestion();
}


// resetAnswerButtons Function
function resetAnswerButtons() {
    document.getElementById('answer-1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-1').parentNode.classList.remove('bg-success');
    document.getElementById('answer-2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-2').parentNode.classList.remove('bg-success');
    document.getElementById('answer-3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-3').parentNode.classList.remove('bg-success');
    document.getElementById('answer-4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-4').parentNode.classList.remove('bg-success');
}


// Restart Function
function restartGame() {
    document.getElementById('quiz-image').style = "display:block;"
    document.getElementById('end-screen').style = 'display:none;'
    document.getElementById('question-body').style = 'display:block;'
    document.getElementById("all-question").innerHTML = 1;
    rightQuestion = 0;
    currentQuestion = 0;
    init();
}