const myImages = document.querySelectorAll(".image")
let selectedElement = document.getElementsByClassName('active')?.item(0)


const handleShowImage = (image) => {
    selectedElement?.classList.remove('active')
    image.classList.add("active")
    selectedElement = image
}

myImages.forEach((image) => {
    image.addEventListener("mouseover", () => handleShowImage(image))
    image.addEventListener("click", () => handleShowImage(image))
})

