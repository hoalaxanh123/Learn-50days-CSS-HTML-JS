const inputEl = document.querySelector('.input')
const statusEl = document.querySelector('.status')

inputEl?.focus()

const tagContainerEl = document.querySelector('.tag-container')
const handleTagRandom = () => {
    statusEl.classList.add('active')
    const tags = document.getElementsByClassName('tag')
    let shuffledArray = _.shuffle(tags)
    const random = _.random(0, shuffledArray.length - 1)
    
    shuffledArray.forEach((el)=>{
       el.classList.remove('active')
    })

    for (let i = 1; i <= shuffledArray.length; i++) {

        setTimeout(() => {
            shuffledArray[i - 1].classList.add('active')
            setTimeout(() => {
                shuffledArray[i - 1].classList.remove('active')
            }, 900 + i * 400)
        }, 500 + i * 400)

    }

    setTimeout(() => {
        shuffledArray[random].classList.add('active')
        statusEl.classList.remove('active')
    }, 450 + shuffledArray.length * 100 + (900 + shuffledArray.length * 800))
}

const KEY_CODE = {
    ENTER: 13, COMMA: 44
}

inputEl.addEventListener('keyup', (e) => {
    if (e.keyCode === KEY_CODE.ENTER) {
        handleTagRandom()
        return
    }
    
    tagContainerEl.innerHTML=''

    const tags = inputEl.value.split(',').filter((x) => x.trim() !== '').map((x) => x.trim())
    tags.forEach((val)=>{
        const divTag = document.createElement('div')
        divTag.classList.add('tag')
        divTag.innerText = val
        tagContainerEl.appendChild(divTag)
    })
  
})

