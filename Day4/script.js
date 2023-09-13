const searchLabels = document.getElementsByClassName('search__label')


for (const searchLabel of searchLabels) {
    searchLabel.addEventListener("click", () => {
        const parentEl = searchLabel.parentElement
        const inputEl = parentEl.getElementsByTagName("input").item(0)

        parentEl.classList.toggle('active')
        const activeSearchContainer = parentEl.classList.contains('active')
        if (activeSearchContainer) {
            inputEl.focus()
        } else {
            inputEl.blur()
        }
    })
}
