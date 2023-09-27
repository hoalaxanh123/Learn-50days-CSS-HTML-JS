const body = document.body
const info = document.getElementById('info')
const disk = document.getElementById('dj-desk-img')
const selector = document.getElementById('selector')

const titleEl = document.createElement('p')
titleEl.innerText = "Have a nice day !"
info.append(titleEl)

const durationEl = document.createElement('p')
durationEl.innerText = "^_^"
info.append(durationEl)

let audio = null
for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("p")
    btn.innerText = `Sound ${i}`
    btn.addEventListener('click', () => {
        handleStopAudio()
        audio = new Audio(`sounds/sound_${i}.mp3`)
        audio.preload = 'metadata'

        audio.onloadedmetadata = () => {
            durationEl.innerText = `${Math.round(audio.currentTime || 0)} : ${Math.round(audio.duration)}`
        }

        audio.ontimeupdate = () => {
            durationEl.innerText = `${Math.round(audio.currentTime || 0)} : ${Math.round(audio.duration)}`
        }

        disk.classList.add("play")
        titleEl.innerText = `Playing: Sound_${i}.mp3`

        audio?.play();


        audio.onended = function () {
            handleStopAudio()
        };

    })

    selector.append(btn)
}

const handleStopAudio = () => {
    if (audio) {
        audio.pause();
        audio.currentTime = 0
        disk.classList.remove("play")

        titleEl.innerText = "Have a nice day !"
        durationEl.innerText = "^_^"
    }
}