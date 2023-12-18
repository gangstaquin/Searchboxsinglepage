const container = document.querySelector('.container');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

window.onmousemove = function(e) {

    let x = e.clientX / 5;
    let y = e.clientY / 5;

    container.style.backgroundPositionX = x + "px";
    container.style.backgroundPositionY = y + "px";

}

btn.addEventListener('click', () => {
        search.classList.toggle('active');
    });