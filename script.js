// Menu Mobile Toggle
const menuIcon = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
    // Alternar ícone entre barras e X
    const icon = menuIcon.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuIcon.querySelector('i').classList.remove('fa-times');
        menuIcon.querySelector('i').classList.add('fa-bars');
    });
});

// Animação de Scroll (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Aplicar animação a todos os cards e textos
const hiddenElements = document.querySelectorAll('.service-card, .about-text, .founder-text');
hiddenElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});