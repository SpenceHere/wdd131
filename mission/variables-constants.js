let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-white.png')
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-blue.webp')
    }
} 