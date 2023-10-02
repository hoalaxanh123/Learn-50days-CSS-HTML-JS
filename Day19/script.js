const switchModeBtn = document.querySelector('.switch_mode button')
const digitalClockEl = document.querySelector('.digital-clock')
const analogClockEl = document.querySelector('.clock')
const hourEl = analogClockEl.querySelector('.hour')
const minuteEl = analogClockEl.querySelector('.minute')
const secondEl = analogClockEl.querySelector('.second')
const dateEl = document.querySelector('.date')
switchModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

const convertDate = (dateTime) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[dateTime.getDay()]
    let hr = dateTime.getHours()
    let min = dateTime.getMinutes()
    if (min < 10) {
        min = "0" + min
    }
    let seconds = dateTime.getSeconds()
    let ampm = "AM"
    if (hr > 12) {
        hr -= 12
        ampm = "PM"
    }
    let date = dateTime.getDate()
    let month = months[dateTime.getMonth()]
    let year = dateTime.getFullYear()
    
    return {
        time: hr + ":" + min + ":" + seconds + " " + ampm, date: day + ', ' + date + " " + month + " " + year
    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(() => {
    const date = new Date()
    const converted = convertDate(date)
    const hours = date.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(date.getMinutes(), 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(date.getSeconds(), 0, 60, 0, 360)}deg)`;

    digitalClockEl.innerText = `${converted.time}`
    dateEl.innerText = `${converted.date}`
}, 1000)