const menuBtn = document.querySelector('.menu-btn')
const navEl = document.querySelector('.nav')
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active')
    navEl.classList.toggle('active')
})



