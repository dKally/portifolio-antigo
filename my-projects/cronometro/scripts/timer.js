let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let timer = "";

let startBtn = document.querySelector("#start1");
startBtn.addEventListener("click", ()=>start());

   
function start(){
    pause();
    timer = setInterval(()=>{startTimer();}, 10);
}

let pauseBtn = document.querySelector("#pause");
pauseBtn.addEventListener("click", ()=> pause());

function pause(){
    clearInterval(timer);
}

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", ()=> reset());

function reset(){
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.querySelector("#hours").innerText = '00'
    document.querySelector("#minutes").innerText = '00'
    document.querySelector("#seconds").innerText = '00'
    document.querySelector("#milliseconds").innerText = '00'
}

function startTimer(){
    if ((millisecond += 1) == 100){
        millisecond = 0;
        second++;
    }
    if(second == 60){
        second = 0;
        minute++;
    }
    if(minute == 60){
        minute = 0;
        hour++;
    }

    document.querySelector("#hours").innerText = returnData(hour);
    document.querySelector("#minutes").innerText = returnData(minute);
    document.querySelector("#seconds").innerText = returnData(second);
    document.querySelector("#milliseconds").innerText = returnData(millisecond);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }