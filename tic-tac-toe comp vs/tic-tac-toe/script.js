let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let bool = true;
let count = 0;
const winArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Element Adder
btn.forEach((ele, idx) => {
    ele.addEventListener("click", () => {
        if(bool) {
            ele.innerHTML = "X";
            bool = false;
        }
        else {
            ele.innerHTML = "O";
            bool = true;
        }
        ele.disabled = true;
        count++;
        checkWin();
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
    let bool1 = true;

    if(posVal1 != "" && posVal2 != "" && posVal3 != "") {
        if(posVal1 == posVal2 && posVal2 == posVal3) {
            showWin(posVal1);
            bool1 = false;
        }
    }
    if(count == 9 && bool1 == true){
        showDraw();
    }
    }
}

// Disable Boxes
function disableBtn() {
    for(let ele of btn){
    ele.disabled = true;
}
}

// Win Effect
function showWin (winner) {
    disableBtn();
    let msg = document.querySelector(".msg");
    msg.innerHTML = `<span>Player ${winner} has Won</span>`;
    msg.classList.remove("hide");
    resetBtn.innerText = "NEW GAME";
}

// Draw Effect
function showDraw() {
    let msg = document.querySelector(".msg");
    msg.innerHTML = `<span>No Player has Won</span>`;
    msg.classList.remove("hide");
    resetBtn.innerText = "NEW GAME";
}






