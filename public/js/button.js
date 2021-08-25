const open = document.querySelector('#open');
const navBar = document.querySelector('#nav-bar');

open.addEventListener('click', (e) => {
    navBar.classList.toggle('active');
    open.classList.toggle('fa-times')
})



