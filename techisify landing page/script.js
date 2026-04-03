// Sticky Navbar Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Logic (Simple version)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // You could expand this to show a full-screen mobile overlay
    alert("Mobile menu clicked. In a full production build, this would toggle a sidebar.");
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button');
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.innerHTML = "Success! We'll get back to you shortly.";
            formStatus.style.color = "#2ecc71";
            contactForm.reset();
        } else {
            formStatus.innerHTML = "Oops! There was a problem submitting your form.";
            formStatus.style.color = "#e74c3c";
        }
    } catch (error) {
        formStatus.innerHTML = "Error: Could not reach the server.";
        formStatus.style.color = "#e74c3c";
    } finally {
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
    }
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});