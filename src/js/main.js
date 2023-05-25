const button = document.querySelector('#navbar-button')
const navbar = document.querySelector('#navbar-buttons-container')
const overlay = document.querySelector('#overlay')

button.addEventListener('click', e => {
    const btn = e.target
    let buttonPressed = btn.getAttribute('aria-pressed')
    if(buttonPressed === 'false') {
        navbar.setAttribute('data-visible', 'true')
        btn.setAttribute('aria-pressed', 'true')
        btn.setAttribute('aria-expanded', 'true')
        overlay.classList.toggle('overlay-dark')
    } else {
        navbar.setAttribute('data-visible', 'false')
        btn.setAttribute('aria-pressed', 'false')
        btn.setAttribute('aria-expanded', 'false')
        overlay.classList.toggle('overlay-dark')
    }
})