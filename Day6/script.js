const items = document.getElementsByClassName('item')

for (let i = 0; i < 200; i++) {
    document.body.innerHTML += '<div class="item">Content</div>'
}
const handleScroll = () => {
    const firstItemBound = items[0].getBoundingClientRect()
    const boxHeight = firstItemBound.bottom - firstItemBound.top -8
    for (const item of items) {
        const bounding = item.getBoundingClientRect()
        const checkpoint = window.innerHeight - boxHeight
        if (bounding.top < checkpoint) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    }
}

handleScroll()

window.addEventListener('scroll', handleScroll)