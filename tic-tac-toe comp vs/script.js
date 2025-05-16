let gameOver = false;
let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let count = 0;
const winArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Turn Generator
const turnGen = () => {
    let num = Math.floor(Math.random() * 2);
    if(num == 0) {
        console.log("Computer moves first");
        compMove();
    }
    else {
        console.log("Player moves first");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    turnGen();
})

// Computer Move Generator
function moveDecider(arr, val) {
    for(let row of winArr) {
    let [i, j, k] = row;
    let a = btn[row[0]].innerText;
    let b = btn[row[1]].innerText;
    let c = btn[row[2]].innerText;
    if(a == b && a == val && arr.includes(k)) {
        return k;
    }
    if(a == c && a == val && arr.includes(j)) {
        return j;
    }
    if(b == c && b == val && arr.includes(i)) {
        return i;
    }
    }
    return null;
}

// Computer Move
const compMove = () => {
    if(gameOver || count >= 9) return;
    let arr = [];

    btn.forEach((ele,idx) => { 
        if(ele.innerHTML == ""){
            arr.push(idx);
        }
    })

    // To Win
    let num = moveDecider(arr, "O");
    // To Block
    if(num === null) num = moveDecider(arr, "X");
    // Take Center
    if(num === null) {
        if(arr.includes(4)) num = 4;
    }
    // Random
    if(num === null) num = arr[Math.floor(arr.length * Math.random())];

    btn[num].innerHTML = "O";
    btn[num].disabled = true;
    count++;
    checkWin();
}

// Element Adder
btn.forEach((ele) => {
    ele.addEventListener("click", () => {
        if(gameOver) return;
        ele.innerHTML = "X";
        ele.disabled = true;
        count++;
        checkWin();
        setTimeout(() => {
            compMove();
        }, 500);    
    })
})

// Refresh Button
resetBtn.addEventListener("click", () => {
    location.reload();
})

// Winner Calculator
function checkWin() {

    for(let row of winArr) {
    let a = btn[row[0]].innerText;
    let b = btn[row[1]].innerText;
    let c = btn[row[2]].innerText;
    

        if(a != "" && b != "" && c != "") {
            if(a == b && b == c) {
                if(a == "X") showWin();
                if(a == "O") showLoose();
                gameOver = true;
                break;
            }
         }
    }
    if(count == 9 && gameOver == false){
        showDraw();
    }
}

// Disable Boxes
function disableBtn() {
    for(let ele of btn){
    ele.disabled = true;
}
}

// Msg Generator
const msgGen = (text) => {
    let msg = document.querySelector(".msg");
    msg.innerHTML = `<span>${text}</span>`;
    msg.classList.remove("hide");
    resetBtn.innerText = "NEW GAME";
}

// Win Effect
function showWin () {
    disableBtn();
    msgGen(`Congratulations!! Player has Won`);
}

// Loose Effect
function showLoose () {
    disableBtn();
    msgGen(`Oh No!! Player has Lost`);
}

// Draw Effect
function showDraw() {
    msgGen(`Match was a Draw :)`);
}






