// ============================================
// EMAIL CONFIGURATION - EMAILJS
// ============================================
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'
};

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
})();

// ============================================
// PORTFOLIO DATA
// ============================================
const portfolioAcademicProjects = [
    {
        id: 1,
        title: 'Bee Space',
        category: 'Design',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulacademic/1.jpg',
        images: ['academicimages/academicprojectbeespace1.png', 'academicimages/academicprojectbeespace2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 2,
        title: 'Sunhap',
        category: 'Design Landscape',
        description: 'Sustainable landscape architecture that harmonizes natural elements with modern design principles. This project demonstrates environmental sensitivity while creating functional outdoor spaces that enhance community well-being.',
        thumbnail: 'sampulacademic/2.jpg',
        images: ['academicimages/academicprojectsunhap3.png', 'academicimages/academicprojectsunhap4.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 3,
        title: 'Sport Hall',
        category: 'Design Construction',
        description: 'Multi-functional sports facility designed with advanced structural systems and sustainable construction methods. This project showcases technical excellence in creating large-span spaces that support diverse athletic activities.',
        thumbnail: 'sampulacademic/3.jpg',
        images: ['academicimages/academicprojectsporthall5.png', 'academicimages/academicprojectsporthall6.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 4,
        title: 'Betang Global Academy',
        category: 'Design Vernacular',
        description: 'Educational facility that reinterprets traditional Dayak Betang architecture through contemporary lens. This project celebrates cultural heritage while meeting modern educational requirements, creating a bridge between past and present.',
        thumbnail: 'sampulacademic/4.jpg',
        images: ['academicimages/academicprojectbetangglobalacademy7.png', 'academicimages/academicprojectbetangglobalacademy8.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 5,
        title: 'Yukata Hotel',
        category: 'Design Sustainable',
        description: 'Eco-friendly hospitality design incorporating passive cooling strategies and renewable energy systems. This project demonstrates how luxury and sustainability can coexist, creating comfortable spaces with minimal environmental impact.',
        thumbnail: 'sampulacademic/5.jpg',
        images: ['academicimages/academicprojectyukatahotel9.png', 'academicimages/academicprojectyukatahotel10.png', 'academicimages/academicprojectyukatahotel11.png', 'academicimages/academicprojectyukatahotel12.png'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 6,
        title: 'Golden Serenity',
        category: 'Design Sustainable',
        description: 'Luxury residential development that prioritizes environmental responsibility without compromising on elegance. Features include green roofs, rainwater harvesting, and natural ventilation systems that reduce energy consumption.',
        thumbnail: 'sampulacademic/6.jpg',
        images: ['academicimages/academicprojectgoldenserenity13.png', 'academicimages/academicprojectgoldenserenity14.png', 'academicimages/academicprojectgoldenserenity15.png', 'academicimages/academicprojectgoldenserenity16.png'],
        location: 'Jakarta, Indonesia',
        year: '2025'
    }
];

const portfolioIndependentProjects = [
    {
        id: 1,
        title: 'Maintenance Rumah Tinggal',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'projectsimages/MAINTENANCERUMAHTINGGAL1.png',
        images: ['projectsimages/MAINTENANCERUMAHTINGGAL1.png', 'projectsimages/MAINTENANCERUMAHTINGGAL2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 2,
        title: 'Rehabilitas Plafon',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'projectsimages/REHABILITASPLAFON1.png',
        images: ['projectsimages/REHABILITASPLAFON1.png', 'projectsimages/REHABILITASPLAFON2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 3,
        title: 'Revive With Melamic',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'projectsimages/REVIVEMELAMIC1.png',
        images: ['projectsimages/REVIVEMELAMIC1.png', 'projectsimages/REVIVEMELAMIC2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 4,
        title: 'Up House',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'projectsimages/UPHOUSE1.png',
        images: ['projectsimages/UPHOUSE1.png', 'projectsimages/UPHOUSE2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 5,
        title: 'Kubika Classic House',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'projectsimages/KUBIKACLASSICHOUSE1.png',
        images: ['projectsimages/KUBIKACLASSICHOUSE1.png', 'projectsimages/KUBIKACLASSICHOUSE2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 6,
        title: 'Design Interior',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'projectsimages/DESIGNINTERIOR1.png',
        images: ['projectsimages/DESIGNINTERIOR1.png', 'projectsimages/DESIGNINTERIOR2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
];

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentPortfolioType = 'academic';
let currentProjectIndex = 0;
let currentImageIndex = 0;
let ticking = false;

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
    preloader: document.getElementById('preloader'),
    navbar: document.getElementById('navbar'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    projectDetailPanel: document.getElementById('projectDetailPanel'),
    panelClose: document.getElementById('panelClose'),
    panelMainImage: document.getElementById('panelMainImage'),
    panelTitle: document.getElementById('panelTitle'),
    panelCategory: document.getElementById('panelCategory'),
    panelMeta: document.getElementById('panelMeta'),
    panelDescription: document.getElementById('panelDescription'),
    panelThumbnails: document.getElementById('panelThumbnails'),
    panelPrev: document.getElementById('panelPrev'),
    panelNext: document.getElementById('panelNext'),
    contactForm: document.getElementById('contactForm'),
    formStatus: document.getElementById('formStatus'),
    backToTop: document.getElementById('backToTop')
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const getCategoryIcon = (category) => {
    const icons = {
        'Design': '🎨',
        'Design Landscape': '🌿',
        'Design Construction': '🏗️',
        'Design Vernacular': '🏛️',
        'Design Sustainable': '♻️',
        'Independent Work': '🗂️'
    };
    return icons[category] || '🏗️';
};

// ============================================
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        elements.preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 1500);
});

// ============================================
// NAVIGATION
// ============================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Navbar scroll effect
    if (currentScroll > 100) {
        elements.navbar.classList.add('scrolled');
    } else {
        elements.navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (currentScroll > 500) {
        elements.backToTop.classList.add('visible');
    } else {
        elements.backToTop.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
elements.menuToggle.addEventListener('click', () => {
    elements.navMenu.classList.toggle('active');
    
    const spans = elements.menuToggle.querySelectorAll('span');
    if (elements.navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking nav link
elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu
        elements.navMenu.classList.remove('active');
        const spans = elements.menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        
        // Smooth scroll
        if (targetSection) {
            const navbarHeight = elements.navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!elements.navMenu.contains(e.target) && !elements.menuToggle.contains(e.target) && elements.navMenu.classList.contains('active')) {
        elements.navMenu.classList.remove('active');
        const spans = elements.menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll('[data-animate]');
animateElements.forEach(el => observer.observe(el));

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < window.innerHeight) {
                const shapes = document.querySelectorAll('.shape');
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.2);
                    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${45 + scrolled * 0.05}deg)`;
                });
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// ============================================
// PORTFOLIO HORIZONTAL GALLERY
// ============================================
function generatePortfolioHorizontal(projects, gridId, portfolioType) {
    const portfolioGrid = document.getElementById(gridId);
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, projectIndex) => {
        const portfolioCard = document.createElement('div');
        portfolioCard.className = 'portfolio-horizontal-card';
        portfolioCard.setAttribute('data-animate', '');
        
        portfolioCard.innerHTML = `
            <div class="portfolio-horizontal-image">
                <div class="portfolio-horizontal-overlay">
                    <div class="portfolio-horizontal-overlay-text">View Details</div>
                </div>
                <img src="${project.thumbnail}" alt="${project.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="portfolio-horizontal-image-placeholder" style="display: none;">
                    <div class="horizontal-placeholder-icon">${getCategoryIcon(project.category)}</div>
                </div>
            </div>
            <div class="portfolio-horizontal-info">
                <div class="portfolio-horizontal-category">${project.category}</div>
                <h3 class="portfolio-horizontal-title">${project.title}</h3>
                <p class="portfolio-horizontal-count">${project.images.length} ${project.images.length > 1 ? 'Images' : 'Image'}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioCard);
        
        // Add click event to open detail panel
        portfolioCard.addEventListener('click', () => {
            openProjectPanel(portfolioType, projectIndex);
        });
    });
    
    // Re-observe new elements
    const newAnimateElements = portfolioGrid.querySelectorAll('[data-animate]');
    newAnimateElements.forEach(el => observer.observe(el));
}

// ============================================
// PROJECT DETAIL PANEL FUNCTIONALITY
// ============================================
function getCurrentProjects() {
    return currentPortfolioType === 'academic' ? portfolioAcademicProjects : portfolioIndependentProjects;
}

function openProjectPanel(portfolioType, projectIndex) {
    currentPortfolioType = portfolioType;
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;
    
    const backdrop = document.getElementById('projectDetailBackdrop');
    
    updatePanelContent();
    elements.projectDetailPanel.classList.add('active');
    backdrop.classList.add('active');  // ✅ Tampilkan backdrop
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    const backdrop = document.getElementById('projectDetailBackdrop');
    
    elements.projectDetailPanel.classList.remove('active');
    backdrop.classList.remove('active');  // ✅ Sembunyikan backdrop
    document.body.style.overflow = 'visible';
}

function updatePanelContent() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    
    // Update main image
    elements.panelMainImage.src = project.images[currentImageIndex];
    elements.panelMainImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
    
    // Update project info
    elements.panelCategory.textContent = project.category;
    elements.panelTitle.textContent = project.title;
    elements.panelMeta.innerHTML = `
        <span>📍 ${project.location}</span>
        <span>📅 ${project.year}</span>
        <span>🖼️ ${project.images.length} Images</span>
    `;
    elements.panelDescription.textContent = project.description;
    
    // Update thumbnails
    elements.panelThumbnails.innerHTML = '';
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `panel-thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${project.title} ${index + 1}">`;
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updatePanelContent();
        });
        elements.panelThumbnails.appendChild(thumbnail);
    });
}

function showPrevImage() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updatePanelContent();
}

function showNextImage() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updatePanelContent();
}

// Panel event listeners
if (elements.panelClose) {
    elements.panelClose.addEventListener('click', closePanel);
}

if (elements.panelPrev) {
    elements.panelPrev.addEventListener('click', showPrevImage);
}

if (elements.panelNext) {
    elements.panelNext.addEventListener('click', showNextImage);
}

// Close panel when clicking outside
if (elements.projectDetailPanel) {
    elements.projectDetailPanel.addEventListener('click', (e) => {
        if (e.target === elements.projectDetailPanel) {
            closePanel();
        }
    });
}

// Close panel when clicking backdrop
const projectBackdrop = document.getElementById('projectDetailBackdrop');
if (projectBackdrop) {
    projectBackdrop.addEventListener('click', closePanel);
}

// Keyboard navigation for panel
document.addEventListener('keydown', (e) => {
    if (!elements.projectDetailPanel.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closePanel();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// ============================================
// CONTACT FORM - EMAILJS
// ============================================
if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.btn-primary');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';
        elements.formStatus.style.display = 'none';
        
        // Check if EmailJS is configured
        if (typeof emailjs === 'undefined' || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
            elements.formStatus.textContent = '⚠️ Email service is not configured. Please configure EmailJS in script.js or contact us directly.';
            elements.formStatus.className = 'form-status error';
            elements.formStatus.style.display = 'block';
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            return;
        }
        
        // Send email using EmailJS
        emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, this)
            .then(function(response) {
                elements.formStatus.textContent = '✓ Thank you! Your message has been sent successfully. We will get back to you within 24 hours.';
                elements.formStatus.className = 'form-status success';
                elements.formStatus.style.display = 'block';
                elements.contactForm.reset();
                
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                    elements.formStatus.style.display = 'none';
                }, 5000);
            }, function(error) {
                elements.formStatus.textContent = '✗ Oops! Something went wrong. Please try again or contact us directly via email.';
                elements.formStatus.className = 'form-status error';
                elements.formStatus.style.display = 'block';
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                
                setTimeout(() => {
                    elements.formStatus.style.display = 'none';
                }, 5000);
            });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
elements.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// SMOOTH SCROLL FOR ALL INTERNAL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#!') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = elements.navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ============================================
// NEWSLETTER FORM
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const newsletterButton = newsletterForm.querySelector('button');
    const newsletterInput = newsletterForm.querySelector('input');
    
    newsletterButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        
        if (email && email.includes('@') && email.includes('.')) {
            newsletterButton.textContent = '✓';
            newsletterButton.style.background = '#4caf50';
            newsletterInput.value = '';
            
            setTimeout(() => {
                newsletterButton.textContent = '→';
                newsletterButton.style.background = '';
            }, 2500);
        } else {
            newsletterButton.textContent = '✗';
            newsletterButton.style.background = '#f44336';
            
            setTimeout(() => {
                newsletterButton.textContent = '→';
                newsletterButton.style.background = '';
            }, 2500);
        }
    });
    
    newsletterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            newsletterButton.click();
        }
    });
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.navMenu.classList.contains('active')) {
        elements.navMenu.classList.remove('active');
        const spans = elements.menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Generate portfolio horizontal grids
    generatePortfolioHorizontal(portfolioAcademicProjects, 'portfolioAcademicGrid', 'academic');
    generatePortfolioHorizontal(portfolioIndependentProjects, 'portfolioIndependentGrid', 'independent');
    
    // Log initialization
    console.log('%c SEGARIZ ARCH ', 'background: #d4af37; color: #000; font-size: 20px; padding: 10px; font-weight: bold;');
    console.log('%c Crafted with Excellence ', 'background: #1a1a1a; color: #d4af37; font-size: 12px; padding: 5px;');
    console.log('✓ Website initialized successfully');
    console.log('✓ Academic projects loaded:', portfolioAcademicProjects.length);
    console.log('✓ Independent projects loaded:', portfolioIndependentProjects.length);
    
    const totalAcademicImages = portfolioAcademicProjects.reduce((sum, project) => sum + project.images.length, 0);
    const totalIndependentImages = portfolioIndependentProjects.reduce((sum, project) => sum + project.images.length, 0);
    console.log('✓ Total images:', totalAcademicImages + totalIndependentImages);
    
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('⚠️ EmailJS is not configured. Please add your credentials in script.js');
    }
});

// ========================================
// SERVICES SECTION
// ========================================

let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.service-card');
        const dotsContainer = document.getElementById('dots');
        
        // Responsive card count
        function getCardsPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1200) return 2;
            return 3;
        }
        
        const totalCards = cards.length;
        let cardsPerView = getCardsPerView();
        let maxIndex = cardsPerView === 1 ? totalCards - 1 : Math.ceil(totalCards / cardsPerView) - 1;
        
        // Create dots
        function createDots() {
            dotsContainer.innerHTML = '';
            for (let i = 0; i <= maxIndex; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }
        
        function updateCarousel() {
            if (cardsPerView === 1) {
                // Mobile: slide one card at a time with proper spacing
                const cardWidth = cards[0].offsetWidth;
                const cardMargin = 40;
                const moveDistance = cardWidth + (cardMargin * 2);
                const offset = -(currentIndex * moveDistance);
                carousel.style.transform = `translateX(${offset}px)`;
            } else {
                // Desktop/Tablet: normal calculation
                const cardWidth = cards[0].offsetWidth;
                const gap = 24;
                const offset = -(currentIndex * cardsPerView * (cardWidth + gap));
                carousel.style.transform = `translateX(${offset}px)`;
            }
            
            // Update dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function moveCarousel(direction) {
            currentIndex += direction;
            if (currentIndex < 0) currentIndex = maxIndex;
            if (currentIndex > maxIndex) currentIndex = 0;
            updateCarousel();
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        // Handle resize
        window.addEventListener('resize', () => {
            const oldCardsPerView = cardsPerView;
            cardsPerView = getCardsPerView();
            maxIndex = cardsPerView === 1 ? totalCards - 1 : Math.ceil(totalCards / cardsPerView) - 1;
            
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            
            // Reset to first slide when switching between mobile and desktop
            if ((oldCardsPerView === 1 && cardsPerView > 1) || (oldCardsPerView > 1 && cardsPerView === 1)) {
                currentIndex = 0;
            }
            
            createDots();
            updateCarousel();
        });
        
        // Touch/Swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchStartX - touchEndX > 50) moveCarousel(1);
            if (touchEndX - touchStartX > 50) moveCarousel(-1);
        }
        
        // Initialize
        createDots();
        updateCarousel();