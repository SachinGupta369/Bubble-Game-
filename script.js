let bubbly = "";
let secondss = 60;
let scoreVal = 0;
let getNewHitRn = 0;

// Make bubbles functions
function makebubbles() {
  for (let i = 0; i < 96; i++) {
    let count = Math.floor(Math.random() * 10);
    bubbly += `<div class="bubble">${count}</div>`;
  }
  document.querySelector(".btm").innerHTML = bubbly;
}

// Timer functions
function runTimer() {
  let clearTimer = setInterval(function () {
    if (secondss > 0) {
      secondss--;
      document.querySelector("#timeVal").textContent = secondss;
    } else {
      document.querySelector(".btm").innerHTML =
        `<h1> Game Over <h1/>` + `<h1> Score is ${scoreVal} <h1/>`;
    }
  }, 1000);
}

//Score functions
function score() {
  scoreVal += 10;
  document.querySelector("#scoreHtml").textContent = scoreVal;
}

//getNewHit functions
function getNewHit() {
  getNewHitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitHtml").textContent = getNewHitRn;
}

// Click Hits functions
document.querySelector(".btm").addEventListener("click", function (ccss) {
  let clickdata = Number(ccss.target.textContent);
  if (clickdata === getNewHitRn) {
    score();
    makebubbles();
    getNewHit();
  }
});

getNewHit();
//score()
runTimer();
makebubbles();
