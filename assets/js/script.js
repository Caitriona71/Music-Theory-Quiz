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

if (q1 == "Treble Clef"){
    correct+2;
}

if (q1 == "Tenor Clef"){
    correct+2;
}

if (q1 == "Bass Clef"){
    correct+2;
}

if (q1 == "Alto Clef"){
    correct+2
}

document.getElementById("after_submit").style.visibility="visible";

document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
