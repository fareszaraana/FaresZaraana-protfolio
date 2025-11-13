// Navigation toggle for mobile - Enhanced for all pages including project-detail
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

// Check if elements exist (for pages that don't have mobile nav initially)
if (navToggle && navigation) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navigation.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';
    });

    // Close navigation when clicking on a link
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (!navigation.contains(e.target) && !navToggle.contains(e.target)) {
            navigation.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close navigation on window resize above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navigation.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Enhanced functionality for project-detail page
function initProjectDetailMobile() {
    // Add mobile-specific styles for project detail page
    if (window.location.pathname.includes('project-detail.html')) {
        const header = document.querySelector('header');
        const projectShowcase = document.querySelector('.project-detail-showcase');
        
        if (window.innerWidth <= 768) {
            // Add padding-top to account for fixed header
            if (projectShowcase) {
                projectShowcase.style.paddingTop = '100px';
            }
            
            // Ensure header is fixed with proper z-index
            if (header) {
                header.style.position = 'fixed';
                header.style.top = '0';
                header.style.left = '0';
                header.style.width = '100%';
                header.style.zIndex = '1000';
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjectDetailMobile);

// Re-initialize on window resize
window.addEventListener('resize', initProjectDetailMobile);