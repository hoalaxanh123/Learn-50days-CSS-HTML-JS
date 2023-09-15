const cover = document.getElementById('cover')
const percent = document.getElementById('percent')

let percentNumber = 0
const intervalId = setInterval(()=>{
    percentNumber +=1;
    percent.innerText = percentNumber + '%'
    const newOpacity =rescale(percentNumber, 0,99,1,0)
    percent.style.opacity = newOpacity.toString()
    cover.style.filter = `blur(${rescale(percentNumber, 30,99,10,0)}px)`
    if(percentNumber>=100){
        clearInterval(intervalId)
    }
}, 50)


const rescale = (val, oMin, oMax, min, max)=>(val - oMin) * (max - min) / (oMax - oMin) + min;
