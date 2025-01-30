document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
const navDireita = document.querySelector('.nav__direita');
const navLinks = document.querySelectorAll('.nav__direita a');

// Toggle do menu (abrir/fechar)
menuToggle.addEventListener('click', () => {
    navDireita.classList.toggle('active');
});

// Fechar o menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navDireita.classList.remove('active'); // Fecha o menu
    });
});

});