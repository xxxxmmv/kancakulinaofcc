// =====================
// SMOOTH SCROLL BEHAVIOR
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =====================
// HEADER SCROLL EFFECT
// =====================
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.boxShadow = '0 4px 12px rgba(139, 90, 43, 0.15)';
    } else {
        // Scroll up
        header.style.boxShadow = '0 4px 12px rgba(139, 90, 43, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// =====================
// ANIMATION ON SCROLL
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards and detail cards
document.querySelectorAll('.product-card, .detail-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// =====================
// ADD ANIMATION KEYFRAMES
// =====================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// =====================
// EXTERNAL LINK HANDLING
// =====================
document.querySelectorAll('a[href^="https://"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// =====================
// FORM INTEGRATION (IF NEEDED)
// =====================
// You can add form submission handling here if needed in the future
console.log('Kanca Kulina website loaded successfully!');
