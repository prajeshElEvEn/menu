menu = document.getElementById('menu');
menuBar = document.getElementById('menu-bar')
empty = document.getElementById('empty');

menu.addEventListener('click', () => {
    if(menuBar.style.display == 'block') {
        menuBar.style.display = 'none';
        menu.classList.remove('menu-after')
        empty.classList.remove('empty-after')
        
    } else {
        menuBar.style.display = 'block'
        menu.classList.add('menu-after')
        empty.classList.add('empty-after')
    }
})

year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();