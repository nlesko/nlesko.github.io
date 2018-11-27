function updateTimer(deadline) {
    let time = deadline - new Date();
    return {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60),
        seconds: Math.floor((time / 1000) % 60),
        total: time
    }
}

function animateClock(span) {
    // Adding flash class
    span.className = "flash";
    setTimeout(function () {
        span.className = "";
    }, 700);
}

// startTImer Function is called in snow-bg.js to prevent double window.onload methods
function startTimer(id, deadline) {
    let timeInterval = setInterval(function () {
        let clock = document.getElementById(id);
        let heading = document.getElementById('main-heading');
        let timer = updateTimer(deadline);

        clock.innerHTML = `<span> ${timer.days}</span> <span> ${timer.hours}</span> <span> ${timer.minutes}</span> <span> ${timer.seconds}</span>`;

        // animations

        let span = clock.getElementsByTagName('span');
        animateClock(span[3]);
        if (timer.seconds === 59) animateClock(span[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(span[1]);
        if (timer.hours == 23 && timer.minues == 59 && timer.seconds == 59) animateClock(span[0]);

        // check for end of timer
        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML = `<span> 0 </span> <span> 0 </span> <span> 0 </span> <span> 0 </span>`;
            heading.textContent = 'Merry Christmas';
        }
    }, 1000);
}