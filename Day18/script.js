const URL_PREFIX = 'https://images.unsplash.com/photo-'
const IMAGE_URLS = ["1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", "1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80", "1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", "1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80", "1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",]


let currentIdx = 0
let intervalID
let timeSliderWidth = 0

const renderImage = () => {
    const imageMetaLink = IMAGE_URLS[currentIdx]
    const imageURL = `${URL_PREFIX}${imageMetaLink}`
    document.body.style.backgroundImage = `url('${imageURL}')`
    const slide = document.querySelector('.slide')
    slide.style.backgroundImage = `url('${imageURL}')`
}

renderImage(0)

const prevBtn = document.querySelector('.prev_btn')
const nextBtn = document.querySelector('.next_btn')
const autoBtn = document.querySelector('.auto_btn')

prevBtn.addEventListener('click', () => {
    currentIdx = currentIdx === 0 ? IMAGE_URLS.length - 1 : currentIdx - 1
    renderImage()
})

nextBtn.addEventListener('click', () => {
    currentIdx = currentIdx === IMAGE_URLS.length - 1 ? 0 : currentIdx + 1
    renderImage()
})

autoBtn.addEventListener('click', () => {
    if (intervalID) {
        clearInterval(intervalID)
    } else {
        intervalID = setInterval(() => {
            currentIdx = currentIdx === IMAGE_URLS.length - 1 ? 0 : currentIdx + 1
            renderImage()
        }, 3000)
    }

    currentIdx = currentIdx === IMAGE_URLS.length - 1 ? 0 : currentIdx + 1
    renderImage()
})