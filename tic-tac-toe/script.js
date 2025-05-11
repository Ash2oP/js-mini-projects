let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let bool = true;

// Element Adder
btn.forEach(ele => {
    ele.addEventListener("click", () => {
        if(bool) {
            ele.innerHTML = "X";
            bool = false;
        }
        else {
            ele.innerHTML = "O";
            bool = true;
        }
    })
});

// Refresh Button
resetBtn.addEventListener("click", () => {
    location.reload();
})