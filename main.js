import './css/main.css'

const BASE_URL = 'http://localhost:3000/'

const navBtn = document.querySelector('.btn-menu')
const homeBtn = document.createElement('a')

homeBtn.href = '/index.html'
homeBtn.innerHTML = '🏠 HomePage'
homeBtn.classList.add('home')

if (window.location.href !== BASE_URL + 'index.html') {
    document.body.appendChild(homeBtn)
} else {
    navBtn.addEventListener('click', () => {
        const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))

        navBtn.setAttribute('aria-expanded', !isExpanded)
    })
}

