/*var q1 = document.musictheoryquiz.q1.value;
var q2 = document.musictheoryquiz.q2.value;
var q3 = document.musictheoryquiz.q3.value;
var q4 = document.musictheoryquiz.q4.value;
var q5 = document.musictheoryquiz.q5.value;
var q6 = document.musictheoryquiz.q6.value;
var q7 = document.musictheoryquiz.q7.value;
var q8 = document.musictheoryquiz.q8.value;
var q9 = document.musictheoryquiz.q9.value;

function check (){
 
}
var correct = 0;

if (q1 == "Alto Clef") {
    correct++;
}

if (q2 == "Crotchet Rest"){
    correct++;
}

if (q3 == "D Major"){
    correct++;
}

if (q4 == "Timpani"){
    correct++;
}

if (q5 == "Quaver Rest"){
    correct++;
}

if (q6 == "Four crotchet beats in a bar"){
    correct++;
}

if (q7 == "G Major"){
    correct++;
}

if (q8 == "Middle C"){
    correct++;
}

if (q9 == "Woodwind"){
    correct++;
}

document.getElementById("after_submit").style.visibility="visible";

document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

function myFunction() {
    location.reload();
}
*/

// track score
let score = 0;

// holds all the answers
const answers = {
	q1: "Alto Clef",
	q2: "Crotchet Rest",
    q3: "D Major",
    q4: "Timpani",
    q5: "Quaver Rest",
    q6: "Four crotchet beats in a bar",
    q7: "G Major",
    q8: "Middle C",
    q9: "Woodwind"
};


// select the form
const form = document.getElementById("musictheoryquiz")

// set up event listener
form.addEventListener("submit", function(event) {
	// prevent the page from reloading
	event.preventDefault()

	// send the form to the check function
	checkAnswers(event.target)
})

// function to handle checking form values
function checkAnswers(form) {
	// check answer and increase score if correct
	if (answers.q1 == form.q1.value) score++;
    if (answers.q2 == form.q2.value) score++;
    if (answers.q3 == form.q3.value) score++;
    if (answers.q4 == form.q4.value) score++;
    if (answers.q5 == form.q5.value) score++;
    if (answers.q6 == form.q6.value) score++;
    if (answers.q7 == form.q7.value) score++;
    if (answers.q8 == form.q8.value) score++;
    if (answers.q9 == form.q9.value) score++;

    displayResults()
};

function displayResults() {
    document.getElementById("after_submit").style.visibility="visible";

    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}





function check() {
    var c=0;
    var q1=document.musicquiz.question1.value;
    var q2=document.musicquiz.question2.value;
    var q3=document.musicquiz.question3.value;
    var q4=document.musicquiz.question4.value;
    var q5=document.musicquiz.question5.value;
    var q6=document.musicquiz.question6.value;
    var q7=document.musicquiz.question7.value;
    var q8=document.musicquiz.question8.value;
    var q9=document.musicquiz.question9.value;
    var q10=document.musicquiz.question10.value;
    if (q1=="Treble Clef") {c++}
    if (q2=="Crotchet Rest") {c++}
    if (q3=="D Major") {c++}
    if (q4=="Timpani") {c++}
    if (q5=="Quaver Rest") {c++}
    if (q6=="4 crotchet beats in a bar") {c++}
    if (q7=="G Major") {c++}
    if (q8=="Middle C") {c++}
    if (q9=="Woodwind") {c++}
    if (q10=="Demisemiquaver Rest") {c++}

    document.write(c);
}
