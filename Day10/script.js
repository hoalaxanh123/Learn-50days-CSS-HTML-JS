const content = document.querySelector('.content')
const getNewJokeBtn = document.querySelector('.get-new-joke-btn')
const loading = document.querySelector('.lds-dual-ring')

let loadingFlag = false
getNewJokeBtn.addEventListener('click', () => {
    if (!loadingFlag) {
        loadingFlag = true
        loading.style.display = "inline-block"
        getNewJokeBtn.classList.add('disabled')
        getNewJobApi()
    }
})

const getNewJobApi = () => {
    const myHeaders = new Headers()
    myHeaders.append("Accept", "application/json")

    const requestOptions = {
        method: 'GET', headers: myHeaders, redirect: 'follow'
    }
    fetch("https://icanhazdadjoke.com/", requestOptions).then(response => response.json())
        .then(result => {
            content.innerText = result.joke
            handleAPIDone()
        })
        .catch(error => {
            alert("Can't get a new joke!")
            console.log('error', error)
            handleAPIDone()
        });
}

const handleAPIDone=()=>{
    loading.style.display ="none";
    loadingFlag=false
    getNewJokeBtn.classList.remove('disabled')
}