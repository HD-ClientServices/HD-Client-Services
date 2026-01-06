document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real scenario, you would use fetch() to send the data to a backend endpoint.
            // For now, we show a success message as a placeholder.
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form submission received:', data);
            
            const originalButtonText = contactForm.querySelector('button').textContent;
            contactForm.querySelector('button').textContent = 'Sending...';
            contactForm.querySelector('button').disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message. We have received your inquiry and will get back to you shortly.');
                contactForm.reset();
                contactForm.querySelector('button').textContent = originalButtonText;
                contactForm.querySelector('button').disabled = false;
            }, 1000);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
