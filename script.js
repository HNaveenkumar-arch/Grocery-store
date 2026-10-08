window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        AOS.init({ duration: 800, once: true });
    }, 2000);
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const closeTopBar = document.getElementById('close-top-bar');
const topBar = document.getElementById('top-bar');
const searchBtn = document.getElementById('footer-search-btn');
const searchInput = document.getElementById('footer-search-input');
const footerMessage = document.getElementById('footer-message');

closeTopBar.addEventListener('click', () => {
    topBar.style.display = 'none';
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

searchBtn.addEventListener('click', () => {
    const inputValue = searchInput.value.trim();

    if (inputValue === "") {
        footerMessage.textContent = "Please enter an item to search.";
        footerMessage.className = "footer-message error";


        setTimeout(() => {
            footerMessage.textContent = "";
            footerMessage.className = "footer-message";
        }, 3000);

    } else {
        footerMessage.textContent = "Success! '" + inputValue + "' ordered.";
        footerMessage.className = "footer-message success";


        setTimeout(() => {
            window.location.href = '404page.html';
            searchInput.value = "";
            footerMessage.textContent = "";
            footerMessage.className = "footer-message";
        }, 1500); 
    }
});