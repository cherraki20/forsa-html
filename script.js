        // Mobile Navigation Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavClose = document.querySelector('.mobile-nav-close');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
        });
        
        mobileNavClose.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
        
        // Animation on scroll
        document.addEventListener('DOMContentLoaded', () => {
            // Animation for stats cards
            const statsCards = document.querySelectorAll('.stat-card');
            statsCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, 200 * index);
            });
            
            // Animation for section title
            const sectionTitle = document.querySelector('.section-title');
            setTimeout(() => {
                sectionTitle.classList.add('animate');
            }, 300);
            
            // Animation for feature cards
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, 200 * index);
            });
            
            // Animation for CTA card
            const ctaCard = document.querySelector('.cta-card');
            setTimeout(() => {
                ctaCard.classList.add('animate');
            }, 300);
            
            // Counter animation for stats
            const counters = document.querySelectorAll('.stat-card h3');
            const speed = 200;
            
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.innerText.replace('+', '');
                    const count = +counter.innerText.replace('+', '');
                    const increment = target / speed;
                    
                    if(count < target) {
                        counter.innerText = Math.ceil(count + increment) + '+';
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                
                setTimeout(updateCount, 1000);
            });
        });
        
        // Parallax effect for wave background
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const waves = document.querySelectorAll('.wave');
            
            waves.forEach((wave, index) => {
                const speed = (index + 1) * 0.5;
                wave.style.transform = `translateX(${-scrollY * speed / 20}px)`;
            });
        });
