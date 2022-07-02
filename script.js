let seconds = 00
let minutes = 00
let tens = 00
const getTens = document.querySelector(".tens")

const getMinutes = document.querySelector(".minutes")

const getSeconds = document.querySelector(".seconds")

const getreset = document.querySelector(".btn-reset")

const getstart = document.querySelector(".btn-start")

const getstop = document.querySelector(".btn-stop")

let interval;


 getstart.addEventListener("click", ()=>{

   interval = setInterval(startTimer, 10)
   
 })


 function startTimer() {
    tens++
    if(tens <= 9){
        getTens.innerText = "0" + tens

    }
    if(tens > 9){
        getTens.innerText = tens
    }
    if (tens > 99){
        seconds++
        getSeconds.innerText = "0" + seconds
        tens = 0
        getTens.innerText = "0" + 0
    }
    if(seconds > 9){
        getSeconds.innerText = seconds
    }
    if(seconds > 59){
        minutes++
        getMinutes.innerText = "0" + minutes
        seconds = 0
        getSeconds.innerText = "0" + 0

    }
    if (minutes > 9){
        getMinutes.innerText = minutes
    }
 }


 getstop.addEventListener("click", () =>{
    clearInterval(interval)

 })

 getreset.addEventListener("click", () =>{
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    getTens.innerText = tens
    getSeconds.innerText = seconds
    minutes = "00"
    getMinutes.innerText = minutes


 })

