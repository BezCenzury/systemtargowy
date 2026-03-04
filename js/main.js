// js/main.js
// Skrypty do interakcji (np. rozwijane FAQ, płynne scrollowanie)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gładkie scrollowanie do sekcji
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Akordeon FAQ - automatyczne zamykanie otwartych detali
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            detailsElements.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });
});
