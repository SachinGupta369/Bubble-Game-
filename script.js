let bubbly = ""
let secondss=3
let scoreVal = 0

// Make bubbles functions
function makebubbles(){

    for(let i=0;i<96;i++){
        let count = Math.floor(Math.random()*10);
        bubbly +=`<div class="bubble">${count}</div>`;
    }
    
    document.querySelector(".btm").innerHTML=bubbly;
}

// Timer functions 
function runTimer(){
      let clearTimer= setInterval(function(){
        if(secondss>0){
            secondss--
            document.querySelector("#timeVal").textContent = secondss;
        }else{
            clearInterval(clearTimer)
        }
        }
        ,1000) 

 
}

//Score functions
function score(){
    scoreVal =+ 10;
    document.querySelector("#scoreHtml").textContent=scoreVal
}

//getNewHit functions
function getNewHit(){
   let rn = Math.floor(Math.random()*10)
    document.querySelector("#hitHtml").textContent= rn
}

// Click Hits functions
function clickHit(){
    document.querySelector(".btm").addEventListener("click",function(ccss){
       (Number(ccss.target.textContent)  
    
 });
}

clickHit()

getNewHit()
score()
runTimer()
makebubbles()

