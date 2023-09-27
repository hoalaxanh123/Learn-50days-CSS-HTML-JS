const keyEl = document.querySelector('.key p')
const keyCodeEl = document.querySelector('.key-code p')
const codeEl = document.querySelector('.code p')
const body = document.body

body.addEventListener('keydown', (e) => {
    console.log(e)
    if (e) {
        const {keyCode, code, key} = e
        keyEl.innerText = key === " " ? code : key
        keyCodeEl.innerText = keyCode
        codeEl.innerText = code
    }
})

