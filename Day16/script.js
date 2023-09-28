const LITTER = 100 / 8 // 100 percent, 8 glasses

const glassEls = document.getElementsByClassName('glass')
const resultEl = document.querySelector('.result')

const render = (val) => {
    for (const glassEl of glassEls) {
        const crVal = parseInt(glassEl.getAttribute('value'))
        if (val < crVal) {
            glassEl.classList.remove('drank')
        } else {
            glassEl.classList.add('drank')
        }
    }
    const percent = val * LITTER
    console.log(percent)

    const remainedContainer = resultEl.querySelector('.remained')
    const remainedValue = resultEl.querySelector('.remained-lit__value')
    const remainedText = resultEl.querySelector('.remained-lit__text')
    const drankValue = resultEl.querySelector('.drank__value')
    const drankContainer = resultEl.querySelector('.drank')

    if (percent >= 80) {
        // remainedValue.style.display = 'none'
        remainedText.style.display = 'none'
    } else {
        remainedValue.style.display = 'block'
        remainedText.style.display = 'block'
    }

    const drank = 2 / 8 * val
    remainedValue.innerText = `${2 - drank}L`
    drankValue.innerHTML = `${percent.toString()}%`
    remainedContainer.style.height = `${100 - percent.toString()}%`
    drankContainer.style.height = `${percent.toString()}%`
}

for (const glassEl of glassEls) {
    glassEl.addEventListener('click', () => {
        const val = parseInt(glassEl.getAttribute('value'))
        render(val)
    })
}
render(0)



