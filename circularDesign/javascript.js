

let circularProgress = document.querySelector('.circular-progress')

let progressValue = document.querySelector('.progress-value')

let progressStartValue = 0;
let progressEndValue = 85;
let speed = 200;

let progress = setInterval( () => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue === progressEndValue) {
        clearInterval(progress);
    }
}, speed)