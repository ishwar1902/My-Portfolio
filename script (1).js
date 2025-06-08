function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
/* ==================== ACTIVE LINK ON SCROLL ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // 58px is approx header height
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


/* ==================== SMOOTH SCROLL FOR NAV LINKS ==================== */
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // 1. Prevent default behavior
        e.preventDefault();

        // 2. Get the href
        const id = this.getAttribute('href');
        
        // 3. Select the element and scroll to it
        const targetElement = document.querySelector(id);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
console.log("Welcome to Ishwar Meshram's Portfolio");
