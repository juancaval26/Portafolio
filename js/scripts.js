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

document.addEventListener('keydown', function(event) {
    // F12
    if (event.code === 'F12') {
        event.preventDefault();
    }
    // Ctrl + Shift + I or Ctrl + Shift + C or Ctrl + Shift + J (Inspect, Console, Sources)
    if (event.ctrlKey && event.shiftKey && ['KeyI', 'KeyC', 'KeyJ'].includes(event.code)) {
        event.preventDefault();
    }
    // Ctrl + U (View Page Source)
    if (event.ctrlKey && event.code === 'KeyU') {
        event.preventDefault();
    }
});


// Deshabilitar clic derecho
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});


(function() {
    let devtoolsOpen = false;
    const threshold = 160;

    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                // Recargar la página al detectar las herramientas de desarrollo
                window.location.reload();
            }
        } else {
            devtoolsOpen = false;
        }
    }

    window.addEventListener('resize', detectDevTools);
    window.addEventListener('load', detectDevTools);
})();

// Detecta cuando se intenta imprimir desde las opciones del navegador
window.addEventListener('beforeprint', function (event) {
    location.reload(); // Recarga la página inmediatamente
});

// Bloquea las combinaciones de teclas Ctrl + P y Cmd + P
document.addEventListener('keydown', function (event) {
    // Para Windows/Linux (Ctrl + P)
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
    }

    // Para macOS (Cmd + P)
    if (event.metaKey && event.key === 'p') {
        event.preventDefault();
    }
});


const apiKey = '527bfe45867eab87385476958c93ca98';
const city = 'Medellín'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

// Elementos del DOM
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const body = document.body;

// Función para obtener datos del clima y aplicar efectos
function getWeather() {
    axios.get(apiUrl)
        .then(response => {
            const data = response.data;
            const weatherMain = data.weather[0].main; // Ej: Rain, Clear, Snow, etc.
            const description = data.weather[0].description;
            const temp = data.main.temp;

            cityName.textContent = data.name;
            weatherDescription.textContent = description.charAt(0).toUpperCase() + description.slice(1);
            temperature.textContent = `${temp}°C`;

        })
        .catch(error => {
            console.error('Error al obtener los datos del clima:', error);
            cityName.textContent = 'Error';
            weatherDescription.textContent = 'No se pudo obtener el clima';
            temperature.textContent = '';
        });
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', getWeather);

// Actualiza el clima cada 10 minutos
setInterval(getWeather, 600000); // 600,000 ms = 10 minutos
