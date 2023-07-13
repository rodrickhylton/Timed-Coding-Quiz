//constants Global variables//
var startButton = document.getElementById("beginGame");
var rules = document.getElementById("rules");
var secondsLeft = 55;
var questionTitle = document.querySelector("#questions");
var timer = document.getElementById("timer");
var currentQuestionIndex = 0;
var uChoices = document.getElementById("userChoices")

//This is me displaying the questions//
var questions = [
    {
        question: "What is a string?",
        options: ["numbers" , "words", "nothing"],
        answer: "words"
    },
    {
        question: "Can an number be a string?",
        options: ["yes", "no", "sometimes"],
        answer: "no"

    },
    {
        question: "Do data types need to match when using the (===) operator?",
        options: ["yes", "no", "sometimes"],
        answer: "yes"

    }
    
]

function startGame() {
//This is the startGame function calling the setTime function and the showQuestions, etc//
    setTime()
    showQuestions()
    console.log("startGame");
     //Use to check if working
}

function setTime() {
    var timerInterval = setInterval(function() {
        //going downwards on time//

        if(secondsLeft > 0) {

        
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining"; 
        //console.log to check function is working//
        //console.log("countdown");
        }else {
            alert("Your out of time")
            clearInterval(timerInterval);
        }
}, 1000);
}

function showQuestions() {
    for (let i = 0; i < questions.length; i++) {
        let q = questions[i];
        console.log(q);
        questionTitle.innerHTML = q.question;
        displayOption(q.options)
    }

    function displayOption(options) {
        for (let i = 0; i < options.length; i++) {
            uChoices.innerHTML = options;
            var buttonChoice = document.createElement("button");
        buttonChoice.setAttribute("value", options);
            //console.log(options, "bdo")
        }
    }


    // var currentQuestion = questions.question[i];

    // for (var i = 0; i < currentQuestion.options.length; i++){
    //     var option = currentQuestion.options[i];
    //     var buttonChoice = document.createElement("button");
    //     buttonChoice.setAttribute("value", option);
    // }
    // console.log(questions)


}

function nextQuestion() {

}


//need end game function as well as click on 
function endGame() {

}



//This is hiding the options after the Start button is clicked//
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    //tRules.style.display= "none";
    rules.style.display= "none";
    highScores.style.display= "none";
    //This going to start the game after the "click" is heard.//
    startButton.addEventListener("click", startGame())
});


