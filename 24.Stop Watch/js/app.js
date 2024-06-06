let [seconds, minutes, hours] = [0, 0, 0];//array destructured
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

let displayTime = document.getElementById('heading');
displayTime.style.color="#fff";
let timer = null;

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    // Update the display time
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = `${h}:${m}:${s}`;
    // displayTime.innerHTML=h+":"+m+":"+s;

}
//The clearInterval function is used to stop a timer that was previously created by setInterval
function startwatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(updateTime, 1000);
}

function stopwatch() {
    clearInterval(timer);
}

function resetwatch() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}
