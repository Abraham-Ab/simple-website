// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add smooth scrolling to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add CSS for active nav link
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #3498db;
            border-bottom: 2px solid #3498db;
        }
    `;
    document.head.appendChild(style);
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to show course information
function showCourseInfo(courseName) {
    const courseDetails = {
        'Math': {
            title: 'Mathematics Program',
            description: 'Our comprehensive mathematics program covers algebra, geometry, trigonometry, and calculus. Students develop problem-solving skills and logical thinking.',
            duration: '4 years',
            prerequisites: 'Basic arithmetic skills'
        },
        'Science': {
            title: 'Science Program',
            description: 'Hands-on science education covering physics, chemistry, and biology with fully equipped laboratories for practical experiments.',
            duration: '4 years',
            prerequisites: 'Interest in scientific inquiry'
        },
        'Literature': {
            title: 'Literature Program',
            description: 'Study of classic and contemporary literature, creative writing, and communication skills development.',
            duration: '4 years',
            prerequisites: 'Basic reading and writing skills'
        },
        'History': {
            title: 'History Program',
            description: 'Comprehensive study of world history, social studies, and critical analysis of historical events.',
            duration: '4 years',
            prerequisites: 'Interest in social sciences'
        }
    };

    const course = courseDetails[courseName];
    if (course) {
        alert(`${course.title}\n\n${course.description}\n\nDuration: ${course.duration}\nPrerequisites: ${course.prerequisites}`);
    }
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you, ${name}! Your message has been sent successfully. We will get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Add scroll-to-top functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#2980b9';
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#3498db';
        this.style.transform = 'scale(1)';
    });
});

// Add loading animation for course cards
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe course cards and faculty cards
    const cards = document.querySelectorAll('.course-card, .faculty-card, .event-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add typing effect to hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
});

// Add interactive statistics counter
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat-item h3');
    
    const animateStats = function() {
        stats.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 50;
            
            const updateStat = function() {
                if (currentValue < finalValue) {
                    currentValue += increment;
                    stat.textContent = Math.ceil(currentValue) + '+';
                    setTimeout(updateStat, 30);
                } else {
                    stat.textContent = finalValue + '+';
                }
            };
            
            updateStat();
        });
    };
    
    // Trigger animation when stats section is visible
    const statsSection = document.querySelector('.about-section');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});
