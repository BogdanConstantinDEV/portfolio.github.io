const navToggle = document.querySelector('.nav-toggle');
const navLi = document.querySelectorAll('nav li');

const introTitle = document.querySelector('.intro h1')
const introSubtitle = document.querySelector('.intro p')
const introImg = document.querySelector('.intro img')

const services = document.querySelectorAll('.services > .service')




// nav toggle

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})
navLi.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})




// intro animation

const introOptions = {threshold: 1}
const introObserver = new IntersectionObserver((entries, introObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.style.animation = `${entry.target.dataset.name} 1000ms linear forwards`
        }
        introObserver.unobserve(entry.target)
    })
}, introOptions)
introObserver.observe(introTitle)
introObserver.observe(introSubtitle)
introObserver.observe(introImg)





// what i use animation

const serviceOptions = {rootMargin: '0px 0px -150px 0px', threshold: 1}
const serviceObserver = new IntersectionObserver ((entries, serviceObserver) =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.style.animation = `appear-services 500ms ${entry.target.dataset.delay} forwards linear`
        }
        serviceObserver.unobserve(entry.target)
    })
}, serviceOptions)
services.forEach(service => {
    serviceObserver.observe(service)
})