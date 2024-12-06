// script.js
function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Afficher la section sélectionnée
    document.getElementById(sectionId).classList.add('active');
}

// Afficher par défaut la première section
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.section').classList.add('active');
});
