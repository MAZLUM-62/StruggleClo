const navSlide = () => {
    const mbar = document.querySelector('.mnavbar');
    const nav = document.querySelector('.navbar-links');
    const navbarLink = document.querySelectorAll('.navbar-links li');    
    
        
    mbar.addEventListener('click', () => {
        // Toggle NAV
        nav.classList.toggle('nav-active');
    
        // Animate Links
        navbarLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }else {
                link.style.animation = `navbarLinkFade 0.5s ease forwards ${index /7 + 0.4}s`;
            }
        });
        // Burger Animation
        mbar.classList.toggle('toggle')
    });
}



//* problem lösen? wie aktivere Ich mein Code? durch const app=?


navSlide();