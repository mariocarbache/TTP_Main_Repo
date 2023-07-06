const timeRemaining = document.querySelector('#timer');
const message = document.querySelectorAll('#message');

let count = parseInt(timeRemaining.innerHTML)*60;



function decrease() {
    count--;
    let minute = Math.floor(count / 60)
    let seconds = count - minute * 60;

    if (count > 0 ){
        timeRemaining.textContent = `${minute}:${seconds}`;
    } else if (count <= 0) {
        message.textContent = "lift off!"
    }

    
}

setInterval(decrease, 1000);
let timer_end = setInterval(decrease, 1000);
clearInterval(timer_end);