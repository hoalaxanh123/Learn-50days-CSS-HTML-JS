const items = document.querySelectorAll('.item')

let selectedIdx = 0
for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const eventTypes = ['dragstart', 'dragenter', 'dragover', 'dragleave', 'drop', 'dragend']
    item.addEventListener('dragstart', (e) => {
        if (!e.target.classList.contains('selected')) {
            event.preventDefault();
        }
    })
    item.addEventListener('dragover', (e) => {
        event.preventDefault();
        e.target.classList.add('hover')
        e.target.setAttribute('draggable', true)
        if (e.target.classList.contains('not-allow')) {
            e.target.style.cursor = 'not-allowed';
            e.target.style.setProperty('cursor', 'not-allowed', 'important');
            console.log('1')
        }
    })
    item.addEventListener('dragleave', (e) => {
        event.preventDefault();
        e.target.classList.remove('hover')
        e.target.setAttribute('draggable', 'false')
    })
    item.addEventListener('drop', (e) => {
        if (e.target.classList.contains('not-allow')) {
            event.preventDefault()
            return
        } 
        selectedIdx = i
        render()
    })


}

const render = () => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (i === selectedIdx) {
            item.classList.add('selected')
            item.classList.remove('hover')
            item.setAttribute('draggable', 'true')
            
        } else {
            item.classList.remove('selected')
            item.setAttribute('draggable', 'false')
        }
    }
}

render()




