/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const palabraFija = "Desarrollador Full Stack";
let palabraDinamica = "";
let index = 0;

function escribirPalabraFija() {
  if (index < palabraFija.length) {
    const letra = palabraFija.charAt(index);
    palabraDinamica += letra;
    document.getElementById("output").textContent = palabraDinamica;
    index++;
    setTimeout(escribirPalabraFija, 100);
  } else {
    setTimeout(borrarPalabraDinamica, 1000);
  }
}

function borrarPalabraDinamica() {
  const borrarInterval = setInterval(() => {
    palabraDinamica = palabraDinamica.slice(0, -1);
    document.getElementById("output").textContent = palabraDinamica;

    if (palabraDinamica === "") {
      clearInterval(borrarInterval);
      escribirPalabraDinamica();
    }
  }, 100);
}

// dinamica
function escribirPalabraDinamica() {
  const palabraCompleta = " Desarrollador Full Stack";
  let j = 0;

  const escribirInterval = setInterval(() => {
    const letra = palabraCompleta.charAt(j);
    palabraDinamica += letra;
    document.getElementById("output").textContent = palabraDinamica;

    j++;

    if (j >= palabraCompleta.length) {
      clearInterval(escribirInterval);
    }
  }, 100);
}

escribirPalabraFija();
