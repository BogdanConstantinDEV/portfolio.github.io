const navToggle = document.querySelector('.nav-toggle');
const navLi = document.querySelectorAll('nav li');

const services = document.querySelectorAll('.services > .service')



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLi.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})




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