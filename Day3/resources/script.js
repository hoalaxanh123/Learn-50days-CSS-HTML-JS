const container = document.getElementById('container')
const toggleRotateMenu = document.getElementById('rotation-menu-contain')


let isOpenMenu = false
toggleRotateMenu.addEventListener('click', () => {
    if (isOpenMenu) {
        toggleRotateMenu.classList.remove('active')
        container.classList.remove('open-menu')
    } else {
        toggleRotateMenu.classList.add('active')
        container.classList.add('open-menu')
    }
    isOpenMenu = !isOpenMenu
})