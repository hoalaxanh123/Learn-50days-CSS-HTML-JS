const collapses = document.getElementsByClassName('collapsable')

for (const collapsable of collapses) {
    const toggleBtn = collapsable.querySelector('.toggle-btn')
    const activator = collapsable.querySelector('.activator')
    for (const el of [toggleBtn, activator]) {
        el.addEventListener('click', () => {
            toggleCollapse(collapsable)
        })
    }
}

const toggleCollapse = (collapsable) => {

    if (collapsable.classList.contains('collapsed')) {
        collapsable.classList.remove('collapsed')
        collapsable.classList.add('expanded')
    } else {
        collapsable.classList.remove('expanded')
        collapsable.classList.add('collapsed')
    }

}