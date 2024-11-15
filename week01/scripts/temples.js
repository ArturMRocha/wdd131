document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');

    // Define o ano atual
    yearSpan.textContent = new Date().getFullYear();

    // Define a data de última modificação
    lastModifiedSpan.textContent = document.lastModified;

    // Alterna o menu de navegação
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('visible');
        hamburger.textContent = nav.classList.contains('visible') ? 'X' : '☰';
    });
});
