/* ============================================
   Healthcare Website - JavaScript
   Interactive Features & Functionality
   ============================================ */

// ===== Mobile Navbar Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
});

// ===== Testimonials Slider =====
class TestimonialSlider {
    constructor(container) {
        this.container = container;
        this.testimonials = container.querySelectorAll('.testimonial-card');
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        if (this.testimonials.length === 0) return;
        
        // Show first testimonial
        this.showTestimonial(0);
        
        // Add navigation buttons if they exist
        const prevBtn = this.container.parentElement.querySelector('.slider-btn.prev');
        const nextBtn = this.container.parentElement.querySelector('.slider-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }
        
        // Auto-play slider
        this.autoPlay();
    }
    
    showTestimonial(index) {
        this.testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        this.currentIndex = index;
    }
    
    next() {
        const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.showTestimonial(nextIndex);
    }
    
    prev() {
        const prevIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.showTestimonial(prevIndex);
    }
    
    autoPlay() {
        setInterval(() => {
            this.next();
        }, 5000); // Change testimonial every 5 seconds
    }
}

// Initialize testimonial slider
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.testimonial-slider');
    if (sliderContainer) {
        new TestimonialSlider(sliderContainer);
    }
});

// ===== Form Validation =====
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) return;
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name || field.id;
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (fieldName.includes('email') && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (fieldName.includes('phone') && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Date validation (not in the past)
        if (field.type === 'date' && value) {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                isValid = false;
                errorMessage = 'Please select a future date';
            }
        }
        
        // Update field styling
        if (isValid) {
            field.classList.remove('error');
            const errorElement = field.parentElement.querySelector('.form-error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        } else {
            field.classList.add('error');
            let errorElement = field.parentElement.querySelector('.form-error');
            if (!errorElement) {
                errorElement = document.createElement('span');
                errorElement.className = 'form-error';
                field.parentElement.appendChild(errorElement);
            }
            errorElement.textContent = errorMessage;
        }
        
        return isValid;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const inputs = this.form.querySelectorAll('input, textarea, select');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            this.showSuccessMessage();
            // In a real application, you would submit the form data to a server here
            // For now, we'll just show a success message
        } else {
            this.showErrorMessage('Please fix the errors in the form');
        }
    }
    
    showSuccessMessage() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-success show';
        messageDiv.textContent = 'Form submitted successfully! We will contact you soon.';
        
        this.form.insertBefore(messageDiv, this.form.firstChild);
        
        // Scroll to top to show message
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.form.reset();
            messageDiv.remove();
        }, 5000);
    }
    
    showErrorMessage(message) {
        const existingMessage = this.form.querySelector('.message-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-error show';
        messageDiv.textContent = message;
        
        this.form.insertBefore(messageDiv, this.form.firstChild);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize form validators
document.addEventListener('DOMContentLoaded', function() {
    // Appointment form
    if (document.getElementById('appointment-form')) {
        new FormValidator('appointment-form');
    }
    
    // Contact form
    if (document.getElementById('contact-form')) {
        new FormValidator('contact-form');
    }
    
    // Login form
    if (document.getElementById('login-form')) {
        new FormValidator('login-form');
    }
});

// ===== Login Validation =====
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (in real app, this would check against a database)
            if (email && password) {
                // Simulate successful login
                showMessage('Login successful! Redirecting...', 'success');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                showMessage('Please enter both email and password', 'error');
            }
        });
    }
});

// ===== Doctor Search & Filter =====
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('doctor-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const doctorCards = document.querySelectorAll('.doctor-card');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterDoctors(searchTerm, getActiveFilter());
        });
    }
    
    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            filterDoctors(searchTerm, this.dataset.filter || 'all');
        });
    });
    
    function getActiveFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        return activeBtn ? activeBtn.dataset.filter : 'all';
    }
    
    function filterDoctors(searchTerm, filter) {
        doctorCards.forEach(card => {
            const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const specialty = card.querySelector('.doctor-specialty')?.textContent.toLowerCase() || '';
            const cardText = (name + ' ' + specialty).toLowerCase();
            
            const matchesSearch = !searchTerm || cardText.includes(searchTerm);
            const matchesFilter = filter === 'all' || specialty.includes(filter);
            
            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// ===== Utility Functions =====
function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type} show`;
    messageDiv.textContent = text;
    
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(messageDiv, container.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ===== Smooth Scroll for Anchor Links =====
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===== Active Navigation Link Highlighting =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ===== Dashboard Sidebar Active State =====
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    const currentHash = window.location.hash || '#appointments';
    
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function(e) {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

