const navToggle = document.querySelector('.nav-toggle');
const navLi = document.querySelectorAll('nav li');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLi.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})