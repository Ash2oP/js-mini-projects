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
const moveDecider = (arr) => {
    for(let row of winArr) {
    let [pos1, pos2, pos3] = row;
    let posVal1 = btn[row[0]].innerText;
    let posVal2 = btn[row[1]].innerText;
    let posVal3 = btn[row[2]].innerText;
    if(posVal1 == posVal2 && posVal1 != "" && arr.includes(pos3)) {
        return pos3;
    }
    if(posVal1 == posVal3 && posVal1 != "" && arr.includes(pos2)) {
        return pos2;
    }
    if(posVal2 == posVal3 && posVal2 != "" && arr.includes(pos1)) {
        return pos1;
    }
    }

    let num = Math.floor(arr.length * Math.random());
    return arr[num];
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

    let num = moveDecider(arr);

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
    let posVal1 = btn[row[0]].innerText;
    let posVal2 = btn[row[1]].innerText;
    let posVal3 = btn[row[2]].innerText;
    

        if(posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if(posVal1 == posVal2 && posVal2 == posVal3) {
                if(posVal1 == "X") showWin();
                if(posVal1 == "O") showLoose();
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






