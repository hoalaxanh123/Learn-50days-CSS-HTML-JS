const btnPrev = document.getElementById('main__btn-group__btn-prev')
const btnNext = document.getElementById('main__btn-group__btn-next')
const steps = document.querySelectorAll('.main__stepper__step')
const contentTexts = document.querySelectorAll('.main_content-text')

let currentStep = 1


steps.forEach((step, idx) => {
    step.addEventListener('click', () => {
        currentStep = idx + 1
        updateUi()
    })

})
btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep -= 1;
    }
    updateUi()
})

btnNext.addEventListener('click', () => {

    if (currentStep < steps.length) {
        currentStep += 1;
    }
    updateUi()
})

const updateUi = () => {
    btnPrev.disabled = currentStep === 1
    btnNext.disabled = currentStep === steps.length

    steps.forEach((step, idx) => {
        if (idx < currentStep) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    contentTexts.forEach((content, idx) => {
        if (idx + 1 === currentStep) {
            content.style.display = 'block'
        } else {
            content.style.display = 'none'
        }
    })

    const progressbarPercentWidth = (currentStep - 1) / (steps.length - 1) * 100
    document.documentElement.style.setProperty("--progressbar-percent-width", `${progressbarPercentWidth}%`);
}

updateUi()
