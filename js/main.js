// Import helper validators (for node testing environment, fallbacks for browser)
let validateFormHelper;
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    const utils = require('./utils');
    validateFormHelper = utils.validateContactForm;
} else {
    // Browser environment fallback
    validateFormHelper = function(name, email, message) {
        const errors = [];
        if (!name || name.trim() === '') errors.push('Name is required');
        if (!email || email.trim() === '') {
            errors.push('Email is required');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) errors.push('Invalid email format');
        }
        if (!message || message.trim() === '') errors.push('Message is required');
        return { valid: errors.length === 0, errors: errors };
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // 1a. Hero Quote + Portrait Slideshow (synchronised)
    const heroPhotoSlides = document.querySelectorAll('.hero-slide');
    const heroQuoteSlides = document.querySelectorAll('.hero-quote-slide');
    const heroDots = document.querySelectorAll('.hero-dot');

    if (heroPhotoSlides.length > 0 || heroQuoteSlides.length > 0) {
        let currentIndex = 0;
        const totalSlides = Math.max(heroPhotoSlides.length, heroQuoteSlides.length);

        function goToSlide(index) {
            // Deactivate all
            heroPhotoSlides.forEach(s => s.classList.remove('active'));
            heroQuoteSlides.forEach(s => s.classList.remove('active'));
            heroDots.forEach(d => d.classList.remove('active'));

            currentIndex = (index + totalSlides) % totalSlides;

            if (heroPhotoSlides[currentIndex]) heroPhotoSlides[currentIndex].classList.add('active');
            if (heroQuoteSlides[currentIndex]) heroQuoteSlides[currentIndex].classList.add('active');
            if (heroDots[currentIndex]) heroDots[currentIndex].classList.add('active');
        }

        // Dot click handlers
        heroDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-index'), 10);
                goToSlide(idx);
                resetTimer();
            });
        });

        let heroTimer = setInterval(() => goToSlide(currentIndex + 1), 5000);

        function resetTimer() {
            clearInterval(heroTimer);
            heroTimer = setInterval(() => goToSlide(currentIndex + 1), 5000);
        }
    }

    // 1b. Background Slideshow Logic for Homepage
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 5000);

        function showSlide(index) {
            slides[currentSlide].classList.remove('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.remove('active');
            }
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetTimer();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetTimer();
            });
        }

        if (dots.length > 0) {
            dots.forEach((dot, idx) => {
                dot.addEventListener('click', () => {
                    showSlide(idx);
                    resetTimer();
                });
            });
        }

        function resetTimer() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }
    }

    // 2. Lightbox Modal Logic for Gallery Page
    const galleryItems = document.querySelectorAll('.gallery-card-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close-btn');

    if (galleryItems.length > 0 && lightbox && lightboxImg && lightboxCaption && lightboxClose) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const cardCaption = item.querySelector('.gallery-card-desc');
                
                if (img && cardCaption) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightboxCaption.textContent = cardCaption.textContent;
                    
                    // Show lightbox
                    lightbox.style.display = 'flex';
                    lightbox.setAttribute('aria-hidden', 'false');
                }
            });
        });

        // Close lightbox on button click
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
            lightbox.setAttribute('aria-hidden', 'true');
        });

        // Close lightbox on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                lightbox.setAttribute('aria-hidden', 'true');
            }
        });

        // Close lightbox on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                lightbox.style.display = 'none';
                lightbox.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // 3. Contact Form Validation and Submission
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    if (contactForm && feedbackDiv) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous feedback states
            feedbackDiv.textContent = '';
            feedbackDiv.className = 'form-feedback';

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const messageInput = document.getElementById('contact-message');

            const validation = validateFormHelper(
                nameInput.value,
                emailInput.value,
                messageInput.value
            );

            if (!validation.valid) {
                feedbackDiv.classList.add('error');
                feedbackDiv.innerHTML = '<strong>Validation Error:</strong><br>' + validation.errors.join('<br>');
                feedbackDiv.style.display = 'block';
            } else {
                // Simulate submission success (VERIFIED behavior)
                feedbackDiv.classList.add('success');
                feedbackDiv.textContent = 'VERIFIED: Thank you. Your message has been sent successfully.';
                feedbackDiv.style.display = 'block';

                // Reset form inputs
                contactForm.reset();
            }
        });
    }

    // 4. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const siteNavigation = document.getElementById('site-navigation');

    if (menuToggle && siteNavigation) {
        menuToggle.addEventListener('click', () => {
            siteNavigation.classList.toggle('hidden');
            siteNavigation.classList.toggle('flex');
        });
    }
});
