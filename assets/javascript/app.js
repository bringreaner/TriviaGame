// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {
//         seconds = parseInt(timer % 60, 10);

//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = "Time Left: "  + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
//     if (timer == 0) {
//         clearTimeout(timer);

// };
// }

// window.onload = function () {
//     var thirtySec = 30000,
//         display = document.querySelector('#timer');
//     startTimer(thirtySec, display);
//     function countdown() {
        
// }}



function check() {

    var question1 = document.quiz.Q1.value;
    var question2 = document.quiz.Q2.value;
    var question3 = document.quiz.Q3.value;
    var question4 = document.quiz.Q4.value;
    var question5 = document.quiz.Q5.value;
    var question6 = document.quiz.Q6.value;
    var question7 = document.quiz.Q7.value;
    var question8 = document.quiz.BonusQ.value;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    console.log(question1);
    if (question1 == "The Balrog") {
        correct++;
    } 
    else {
        incorrect++;
    }


if (question2 == "Sting") {
    correct++;
}
else {
    incorrect++;
}

if (question3 == "111th") {
    correct++;
}
else {
    incorrect++;
}

if (question4 == "Hurons") {
    correct++;
}
else {
    incorrect++;
}
if (question5 == "Mellon") {
    correct++;
}
else {
    incorrect++;
}
if (question6 == "Gandalf") {
    correct++;
}
else {
    incorrect++;
}
if (question7 == "Blue") {
    correct++;
}
else {
    incorrect++;
}
if (question8 == "September 22nd") {
    correct++;
}
else {
    incorrect++;
}

alert("You got " + correct + " correct. You got " + incorrect + " incorrect.")


$("#numCorrect").html = "You got " + correct + " correct.";
$("#numIncorrect").html = "You got " + incorrect + " incorrect.";
// $("#numUnanswered").html = "You left " + incorrect + " unanswered.";

console.log(correct);
console.log(incorrect);


// $("afterSubmit").css("display", "block");

}










// var quizContainer = $("quiz");
// var resultsContainer = $("results");
// var submitButton = $("submit");

// var myQuestions = [
//     {
//         question: "Q1. What was the name of the monster that pulled Gandalf down into the depths of the Mines of Moria?",
//         answers: {
//             a: "The Nazgul",
//             b: "The Cave Troll",
//             c: "The Warg",
//             d: "The Balrog"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Q2. What weapon does Sam use to fight Shelob?",
//         answers: {
//             a: "Sting",
//             b: "Anduril",
//             c: "Glamdring",
//             d: "Orcrist"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Q3. What birthday is Bilbo celebrating at the beginning of Fellowship of the Ring?",
//         answers: {
//             a: "1,000th",
//             b: "21st",
//             c: "111th",
//             d: "346th"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Q4. What are the ancient, moving trees called?",
//         answers: {
//             a: "Ents",
//             b: "Barrow Wights",
//             c: "Uruk Hai",
//             d: "Hurons"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Q5. What is the password for the Mines of Moria, that means 'friend' in Elvish?",
//         answers: {
//             a: "Mellon",
//             b: "Kiwi",
//             c: "Apple",
//             d: "Mango"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Q6. There are 3 elven rings (duh). Elrond has one and Galadriel has one. Who has the 3rd one?",
//         answers: {
//             a: "Thranduil",
//             b: "Gandalf",
//             c: "Aragorn",
//             d: "The Mouth of Sauron"
//         },
//         correctAnswer: "b"
//     },

//     {
//         question: "Q7. What color is Tom Bombadil's jacket?",
//         answers: {
//             a: "Blue",
//             b: "Green",
//             c: "Yellow",
//             d: "Red"
//         },
//         correctAnswer: "a"
//     },

//     {
//         question: "Bonus question - What day of the year is Hobbit Day?",
//         answers: {
//             a: "January 21st",
//             b: "September 22nd",
//             c: "July 29th",
//             d: "January 3rd"
//         },
//         correctAnswer: "b"
//     }
// ];


// //create array of questions with correct answer
//     //create start function that pushes them to the html as radio buttons

//     function startGame() {
//         for (var i = 0; i < myQuestions.length; i++) {
//             $("<div>").html("<h4>" + i + "<h4>");

//     }
// }
//once submit is clicked, check to see if answers are selected
    //count up correct answers
    //incorrect answers
    //unanswered
    //display















// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		    // we'll need a place to store the output and the answer choices
//             var output = [];
//             var answers;

//             // for each question...
//             for (var i = 0; i < questions.length; i++) {

//                 // first reset the list of answers
//                 answers = [];

//                 // for each available answer to this question...
//                 for (letter in questions[i].answers) {

//                     // ...add an html radio button
//                     answers.push(
//                         '<label>'
//                         + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                         + letter + ': '
//                         + questions[i].answers[letter]
//                         + '</label>'
//                     );
//                 }

//                 // add this question and its answers to the output
//                 output.push(
//                     '<div class="question">' + questions[i].question + '</div>'
//                     + '<div class="answers">' + answers.join('') + '</div>'
//                 );
//             }

//             // finally combine our output list into one string of html and put it on the page
//             quizContainer.innerHTML = output.join('');
//         }
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
//         // code will go here

//             // gather answer containers from our quiz
//             var answerContainers = quizContainer.querySelectorAll('.answers');

//             // keep track of user's answers
//             var userAnswer = '';
//             var numCorrect = 0;

//             // for each question...
//             for (var i = 0; i < questions.length; i++) {

//                 // find selected answer
//                 userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

//                 // if answer is correct
//                 if (userAnswer === questions[i].correctAnswer) {
//                     // add to the number of correct answers
//                     numCorrect++;

//                     // color the answers green
//                     answerContainers[i].style.color = 'lightgreen';
//                 }
//                 // if answer is wrong or blank
//                 else {
//                     // color the answers red
//                     answerContainers[i].style.color = 'red';
//                 }
//             }

//             // show number of correct answers out of total
//             resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//         }

//         showQuestions(questions, quizContainer);

//     // on submit, show results
// submitButton.onclick = function () {
//     showResults(questions, quizContainer, resultsContainer);
// }





// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);







// Questions

// Q1. What was the name of the monster that pulled Gandalf down into the depths of the Mines of Moria?
    // a1 The Nazgul
    // a2 the Cave Troll
    // a3 the Warg
    // a4 the Balrog

// Q2. What weapon does Sam use to fight Shelob?
    // a1 Sting
    // a2 Anduril
    // a3 Glamdring
    // a4 Orcrist

// Q3. What birthday is Bilbo celebrating at the beginning of Fellowship of the Ring?
    // a1 1,000th
    // a2 21st
    // a3 111th
    // a4 346th

// Q4. What are the ancient, moving trees called?
    // a1 Ents
    // a2 Barrow Wights
    // a3 Uruk Hai
    // a4 Hurons

// Q5. What is the password for the Mines of Moria, that means "friend" in Elvish?
    // a1 Mellon
    // a2 Kiwi
    // a3 Apple
    // a4 Mango

// Q6. There are 3 elven rings (duh). Elrond has one and Galadriel has one. Who has the 3rd one?
    // a1 Thranduil
    // a2 Gandalf
    // a3 Aragorn
    // a4 The Mouth of Sauron

// Q7. What color is Tom Bombadil's jacket?
    // a1 Blue
    // a2 Green
    // a3 Yellow
    // a4 Red

//Bonus question - What day of the year is Hobbit Day?
    // a1 January 21st
    // a2 September 22nd
    // a3 July 29th
    // a4 January 3rd