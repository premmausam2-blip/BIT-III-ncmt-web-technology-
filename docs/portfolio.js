// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
    requestAnimationFrame(animateRing);
}

animateRing();

// Cursor effect on links and buttons
const interactiveElements = document.querySelectorAll('a, button, .project-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
        cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(1.5)`;
    });
    
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
        cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(1)`;
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.style.background = '#10b981';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        contactForm.reset();
    }, 3000);
    
    // In a real application, you would send this data to a server
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
});

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Typing effect for hero title (optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 500);
}

// Add pulse animation to contact button
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(btn => {
    setInterval(() => {
        btn.style.animation = 'pulse 1s';
        setTimeout(() => {
            btn.style.animation = '';
        }, 1000);
    }, 5000);
});

// Console welcome message
console.log('%c👋 Hello! Thanks for checking out the source code!', 'font-size: 16px; font-weight: bold; color: #2563eb;');
console.log('%cPortfolio built by Prem Subedi', 'font-size: 12px; color: #6b7280;');