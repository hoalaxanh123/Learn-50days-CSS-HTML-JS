const labels = document.getElementsByTagName('label');

let selectedIdx = null;
for (let i = 0; i < labels.length; i++) {
    const label = labels.item(i);
    const text = label.textContent;
    const characters = text.split('');

    label.textContent = '';

    characters.forEach((character, index) => {
        const span = document.createElement('span');
        span.innerHTML = character !== " " ? character : '&nbsp;';
        span.style.transitionDelay = `${(index) * 0.05}s`;
        label.appendChild(span);
    });

    label.addEventListener('click', () => {
        selectedIdx = i;

        for (let i = 0; i < labels.length; i++) {
            const label = labels.item(i);
            if ( i === selectedIdx) {
                label.classList.add('active')
            }
            // else {
            //     label.classList.remove('active')
            // }
        }
    })
}


