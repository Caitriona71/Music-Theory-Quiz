function check (){
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
}
var correct = 0;

if (q1 == "Treble Clef") {
    correct++;
}

if (q1 == "Tenor Clef"){
    correct++;
}

if (q1 == "Bass Clef"){
    correct++;
}

if (q1 == "Alto Clef"){
    correct++
}

if (q2 == "Crotchet Rest"){
    correct++;
}

if (q2 == "Semi-Quaver Rest"){
    correct++;
}

if (q2 == "Minim Rest"){
    correct++;
}

if (q2 == "Quaver Rest"){
    correct++
}

if (q3 == "A Minor"){
    correct++;
}

if (q3 == "E Major"){
    correct++;
}

if (q3 == "D Major"){
    correct++
}

if (q3 == "C Minor"){
    correct++;
}

if (q4 == "Cymbals"){
    correct++;
}

if (q4 == "Xylophone"){
    correct++;
}

if (q4 == "Side Drum"){
    correct++;
}

if (q4 == "Timpani"){
    correct++
}

if (q5 == "Quaver Rest"){
    correct++;
}

if (q5 == "Semibreve Rest"){
    correct++;
}

if (q5 == "Semi-Quaver Rest"){
    correct++;
}

if (q5 == "Minim Rest"){
    correct++
}

if (q6 == "Two minim beats in a bar"){
    correct++;
}

if (q6 == "Four quaver beats in a bar"){
    correct++;
}

if (q6 == "Four minim beats in a bar"){
    correct++;
}

if (q6 == "Four crotchet beats in a bar"){
    correct++
}

if (q7 == "G Minor"){
    correct++;
}

if (q7 == "C Major"){
    correct++;
}

if (q7 == "F# Minor"){
    correct++;
}

if (q7 == "G Major"){
    correct++
}

if (q8 == "F"){
    correct++;
}

if (q8 == "A"){
    correct++;
}

if (q8 == "Middle C"){
    correct++;
}

if (q8 == "E"){
    correct++
}

if (q9 == "Percussion"){
    correct++;
}

if (q9 == "Brass"){
    correct++;
}

if (q9 == "Strings"){
    correct++;
}

if (q9 == "Woodwind"){
    correct++
}


document.getElementById("after_submit").style.visibility="visible";

document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";

function myFunction() {
    location.reload();
}