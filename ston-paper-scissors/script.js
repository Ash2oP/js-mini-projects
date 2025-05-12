let usrScore = document.querySelector(".score-usr");
let compScore = document.querySelector(".score-comp");
let scoreStaus = document.querySelector(".score-status")
let btn = document.querySelectorAll(".container button");
let arr = ["Rock", "Paper", "Scissors"];
let usrCount = 0;
let compCount = 0;

// Random Number Generator
function randNum() {
    let num = Math.ceil(3 * Math.random());
    return num - 1;
}

//Win Calculator

// Rock
btn[0].addEventListener("click",() => {
    let num = randNum();
    // win
    if(num === 2){
        usrCount++;
        usrScore.innerText = `${usrCount}`;
        winEff(num,0);
    }
    // lose
    if(num === 1){
        compCount++;
        compScore.innerText = `${compCount}`;
        loseEff(num,0);
    }
    // Draw
    if(num === 0){
            draw(num);
    }
})
// Paper
btn[1].addEventListener("click",() => {
    let num = randNum();
    // win
    if(num === 0){
        usrCount++;
        usrScore.innerText = `${usrCount}`;
        winEff(num,1);
    }
    // lose
    if(num === 2){
        compCount++;
        compScore.innerText = `${compCount}`;
        loseEff(num,1);
    }
    // draw
    if(num === 1){
            draw(num);
    }
})
// Scissors
btn[2].addEventListener("click",() => {
    let num = randNum();
    // win
    if(num === 1){
        usrCount++;
        usrScore.innerText = `${usrCount}`;
        winEff(num,2);
    }
    // lose
    if(num === 0){
        compCount++;
        compScore.innerText = `${compCount}`;
        loseEff(num,2);
    }
    // draw
    if(num === 2){
            draw(num);
    }
})

// Draw Eff
function draw(num) {
    scoreStaus.innerHTML = `Draw :) ${arr[num]} && ${arr[num]}`;
    scoreStaus.style.color = "white";
}

// Win Eff
function winEff(num, idx) {
    scoreStaus.innerHTML = `You Win! ${arr[idx]} beats ${arr[num]}`;
    scoreStaus.style.color = "green";
}

// Lose Eff
function loseEff(num, idx) {
    scoreStaus.innerHTML = `You Loose! ${arr[idx]} loses to ${arr[num]}`;
    scoreStaus.style.color = "red";
}