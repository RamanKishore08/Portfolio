const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const footer = document.querySelector('footer');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (top > offset && top < offset + height) {
            section.classList.add('start-animation');
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
    
    // Hide header and footer on scroll
    if (window.scrollY > 100) {
        header.classList.add('hide');
        footer.classList.add('hide');
    } else {
        header.classList.remove('hide');
        footer.classList.remove('hide');
    }
}


