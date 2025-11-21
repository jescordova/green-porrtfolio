// Script: Make navigation menu fixed
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const main = document.querySelector('.yasta-code');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('expanded');
});

main.addEventListener('click', (event) => {
    if (navLinks.classList.contains('expanded') && event.target !== burger && !navLinks.contains(event.target)) {
        navLinks.classList.remove('expanded');
    }
});

// Script: Change active link color
const navLinksClick = document.querySelectorAll('.nav-links a');
navLinksClick.forEach(link => {
    link.addEventListener('click', () => {
        // Supprimer la classe "active" de tous les liens
        navLinksClick.forEach(link => link.classList.remove('active'));

        // Ajouter la classe "active" au lien cliqué
        link.classList.add('active');   

    });
});

// Pour une meilleure gestion des états et une meilleure performance,
// il est recommandé d'utiliser une bibliothèque comme jQuery.
// Voici un exemple avec jQuery :

$(document).ready(function(){
    $(".nav li").click(function(event){
        $(this).children(".submenu").slideToggle();
        $(this).find('i:first-child').toggleClass('fa-plus fa-minus');
        event.stopPropagation();
    });
});