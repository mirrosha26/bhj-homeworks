document.addEventListener('DOMContentLoaded', function() {
    function startTimer(duration, display) {
        let timer = duration, hours, minutes, seconds;
        const countdown = setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(countdown);
                alert('Вы победили в конкурсе!');
            }
        }, 1000);
    }

    const display = document.querySelector('#timer');
    const initialSeconds = parseInt(display.textContent, 10);
    startTimer(initialSeconds, display);
});
