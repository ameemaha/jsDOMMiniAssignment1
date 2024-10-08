let count = 0;

let incrementBtn = document.getElementById("increment");

incrementBtn.addEventListener("click", function () {
    count++;
    document.getElementById("count").innerText = count;
});

let decrementBtn = document.getElementById("decrement");

decrementBtn.addEventListener("click", function () {
    count--;
    document.getElementById("count").innerText = count;
});

let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function () {
    count=0;
    document.getElementById("count").innerText = count;
});

let isWhite = true;

let colorBtn = document.querySelector("#colorBtn");

colorBtn.addEventListener("click", function (){
    if (isWhite) {
        document.body.style.backgroundColor = "red";
        colorBtn.textContent = "Change to White";
        document.getElementById("headerText").style.color = "white";
        document.getElementById("countText").style.color = "white";
      } else {
        document.body.style.backgroundColor = "white";
        colorBtn.textContent = "Change to Red";
        document.getElementById("headerText").style.color = "black";
        document.getElementById("countText").style.color = "black";
      }
    
      isWhite = !isWhite;
});