// Añadir animación de entrada a cada requisito
document.addEventListener('DOMContentLoaded', () => {
    const requisitos = document.querySelectorAll('.requisito');
    requisitos.forEach((req, index) => {
        req.style.opacity = '0';
        req.style.transform = 'translateY(20px)';
        setTimeout(() => {
            req.style.transition = 'all 0.6s ease';
            req.style.opacity = '1';
            req.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
}); 