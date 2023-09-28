const SPEED = 10 // millisecond
const STEP = 100

const counterEls = document.getElementsByClassName('counter')


const handleIncrement = (counterEl, number) => {
    let val = 0

    setTimeout(() => {
        const intervalId = setInterval(() => {
            val += getRandomInt(10) * 10

            if (val >= number) {
                val = number
                clearInterval(intervalId);
            }

            counterEl.innerHTML = val
        }, SPEED + getRandomInt(10) * 100)
    }, 100)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


for (const counterEl of counterEls) {
    handleIncrement(counterEl, getRandomInt(200000))
}




