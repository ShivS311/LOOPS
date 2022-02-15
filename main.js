/* LOOPS EXERCISE */
'use strict';

function exercise1() {
    for (let i = 0; i < 500; i++) {
        console.log("I'm so happy!");
    }
}

function exercise2() {
    for (let i = 4; i <= 800; i += 4) {
        console.log(i);
    }
}

function exercise3() {
    for (let i = 55; i >= 11; i -= 2) {
        console.log(i);
    }
}

function exercise4() {
    let total = 0;
    for (let i = 5; i <= 50; i++) {
        total += i;
        console.log(total);
    }
}

function exercise5() {
    let total = 0;
    for (let i = 10; i <= 100; i += 10) {
        total += i;
        console.log(total);
    }
}



function showAnswer() {
    document.getElementById('answer').classList.toggle('hide');
}