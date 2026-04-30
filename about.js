document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION
    // Detects when sections enter the screen to trigger CSS animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // 2. STICKY NAVIGATION & ACTIVE LINKS
    const header = document.querySelector('.header-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
        }
    });

    // 3. FAQ ACCORDION LOGIC
    // Makes the FAQ items expand and collapse smoothly
    const faqItems = document.querySelectorAll('#faq .flex-item');
    faqItems.forEach(item => {
        item.style.cursor = 'pointer';
        const answer = item.querySelector('p');
        answer.style.display = 'none'; // Hide by default

        item.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';
            // Close others (Optional)
            faqItems.forEach(i => i.querySelector('p').style.display = 'none');
            // Toggle current
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // 4. CONTACT FORM VALIDATION
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input, textarea');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '1px solid #ddd';
                }
            });

            if (valid) {
                alert('Thank you! Your message has been sent to YAPS Academy.');
                contactForm.reset();
            }
        });
    }

    // 5. SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});