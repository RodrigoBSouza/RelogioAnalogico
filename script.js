let digitalClock = document.getElementById('digital-clock')
let clockSecond = document.getElementById('data-second');
let clockMinute = document.getElementById('data-minute');
let clockHour = document.getElementById('data-hour');

function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let secondDeg = (360 /60) * seconds;
    let minuteDeg = (360 / 60) * minutes;
    let hourDeg = (360 / 12) * hours;

    digitalClock.innerHTML = `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
   

    clockSecond.style.transform = `rotate(${secondDeg}deg)`
    clockMinute.style.transform = `rotate(${minuteDeg}deg)`
    clockHour.style.transform = `rotate(${hourDeg}deg)`
}

function zero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();