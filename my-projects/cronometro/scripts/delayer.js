let time = "";

let inputHour = "";
let inputMinute = "";
let inputSecond = "";

let hours = "";
let minutes = "";
let seconds = "";

let btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", ()=>startDelayer());
let btnPause = document.querySelector("#btnPause");
btnPause.addEventListener("click", ()=>pauseDelayer())
let btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", ()=>resetDelayer())

function startDelayer(){
    pauseDelayer()
    inputHour = document.querySelector('#hourValue').value;
    inputMinute = document.querySelector('#minuteValue').value;
    inputSecond = document.querySelector('#secondValue').value;

    time = inputHour * 3600 + inputMinute * 60 + inputSecond;

    if(inputHour + inputMinute + inputSecond <= 0){
        alert("Erro")
        return;
    }else{
        timer = setInterval(()=>{ time-- 
        hours = Math.floor((time / 60 / 60))
        minutes = Math.floor((time / 60) % 60)
        seconds = Math.floor((time) % 60)

        document.querySelector('#hourValue').value = hours;
        document.querySelector('#minuteValue').value = minutes;
        document.querySelector('#secondValue').value = seconds;

        if(time <= 0){
            alert("O tempo acabou!")
            pauseDelayer();
            return;}
    },1000)}
}

function pauseDelayer(){
    clearInterval(timer)
}

function resetDelayer(){
    pauseDelayer()
    time = "";
    hours = "";
    minutes = "";
    seconds = "";

    inputHour = "";
    inputMinute = "";
    inputSecond = "";

    document.querySelector('#hourValue').value = "";
    document.querySelector('#minuteValue').value = "";
    document.querySelector('#secondValue').value = "";
}   