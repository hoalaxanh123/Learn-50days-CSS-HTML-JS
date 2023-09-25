const items = document.getElementsByClassName('item')
const backBtn = document.getElementById('back-btn')


let selectedIdx = null

const handleClick = ()=>{
    backBtn.style.opacity = "1";
    for (let i = 0; i < items.length; i++) {
        const item = items.item(i)
        if(i === selectedIdx){
            item.classList.add('active')
            item.style.width ="80%";
        }else{
            item.classList.remove('active')
            item.style.width ="20%";
        }
    }
}

for (let i = 0; i < items.length; i++) {
    const item = items.item(i)
    const h1Tags = item.getElementsByTagName("h1")

    h1Tags[0].addEventListener('click',()=>{
        selectedIdx = i;
        handleClick();
    })
}

backBtn.addEventListener('click',()=>{
    for (let i = 0; i < items.length; i++) {
        const item = items.item(i)
        item.classList.remove('active')
        item.style.width = "50%";
    }
    backBtn.style.opacity = "0";
})

