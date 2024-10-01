// Tu objeto JSON con las traducciones
const traducciones = {
    "Cizaro mayo 2024 septiembre 2024": "Cizaro May 2024 September 2024",
    "INTEGRAL V6 Julio 2023-Febrero 2024": "INTEGRAL V6 July 2023-February 2024",
    "S.P.I soluciones Julio 2022 - Mayo 2023": "S.P.I soluciones July 2022 - May 2023",
    "CENSA Septiembre 2019 - Marzo 2020": "CENSA September 2019 - March 2020",
    "Sistema POS 2024": "POS System 2024",
    "Experiencia": "Experience",
    "Tecnologias": "Technologies",
    "Sistema Web de Bitacoras": "Educational Web Logbook System",
    "Proyectos": "Projects",
    "Servicios": "Services",
    "Conocimientos": "Knowledge",
    "Habilidades": "Skills",
    "Contacto": "Contact",
    "Analista y Desarrollador": "Analyst and Developer",
    "Desarrollador con experiencia en el analisis y desarrollo de soluciones tecnologicas Poseo habilidades destacadas en el trabajo en equipo demostrando colaboracion efectiva Soy una persona autodidacta con facilidad de aprendizaje continuo":
    "Developer with 2 years of experience in the analysis and development of technological solutions. I possess outstanding skills in teamwork, demonstrating effective collaboration. I am a self-taught person with an ease of continuous learning.",
    "Descripción": "Description",
    "Temperatura": "Temperature",
    "Detalles": "Details",
    "Visitar Sitio": "Visit Site",
    "Proyectos": "Projects",
    "Mantenimiento Computadoras": "Computer Maintenance",
    "Mantenimiento Software": " Software Maintenance",
    "Formateo": "Formatting",
    "Instalacion Programas": "Program Installation",
    "Respaldos": "Backups",
    "Recuperacion Datos": "Data Recovery",
    "Configuracion Equipos": "Equipment Configuration",
    "Conocimientos": "Knowledge",
    "Facturacion electronica": "Electronic Billing",
    "Prototipos de Interfacez de usuario": "User Interface Prototypes",
    "Habilidades Tecnicas": "Technical Skills",
    "Bases de Datos": "Databases",
    "Sistema": "System",
    "Juego de cartas en tiempo real": "Real-Time Card Game",
    "Calzado Web 2024": "web Footwear 2024",
    "Soporte Tecnico en Sitio": "On-Site Technical Support",
    "Asesoria Funcional del Sistema": "Functional System Consulting",
    "Mantenimiento y Optimización de Equipos": "Maintenance and Optimization of Equipment",
    "Documentacion y Gestion de Activos": "Documentation and Asset Management",
    "Desarrollador web en .NET": "Web Developer in .NET",
    "Realizar ajustes en reportes usando DevExpress": "Make adjustments to reports using DevExpress",
    "Traduccion y Localizacion usando la API de ChatGPT": "Translation and Localization using the ChatGPT API",
    "Desarrollo y mantenimiento de Aplicaciones Web": "Development and maintenance of Web Applications",
    "Gestion de Bases de Datos": "Database Management",
    "Control de Versiones y Gestion de Proyectos": "Version Control and Project Management",
    "Reportes y Analisis de Datos": "Reports and Data Analysis",
    "Cargas Masivas y Manejo de Datos": "Bulk Loads and Data Handling",
    "Resolucion de Bugs y Mejoras Continuas": "Bug Resolution and Continuous Improvement",
    "Documentacion Tecnica": "Technical Documentation",
    "Gestion y resolucion de incidentes": "Incident Management and Resolution",
    "Generacion de informes de datos": "Data Report Generation",
    "Analizar y dar solución a inconvenientes reportados": "Analyze and resolve reported issues",
    "Manejo de tickets de soporte": "Support Ticket Management",
    "Escalamiento de incidentes criticos": "Escalation of Critical Incidents",
    "consultas constantes a la bases de datos": "Constant Queries to the Databases",
    "Ciclo de Vida del Software": "Software Development Life Cycle",
    "Implementacion": "Implementation",
    "Cargas Masivas y Manejo de Datos": "Bulk Loads and Data Handling",
    "Control de Versiones y Colaboracion": "Version Control and Collaboration",
    "Interfaz de Usuario y Prototipado": "User Interface and Prototyping",
    "Interfaz Responsive": "Responsive Interface",
    "Documentación Tecnica": "Technical Documentation"

};

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
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});


(function () {
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
const iconData = document.getElementById('icon');

const body = document.body;

// Función para obtener datos del clima y aplicar efectos
function getWeather() {
    axios.get(apiUrl)
        .then(response => {
            const data = response.data;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const temp = data.main.temp;

            cityName.textContent = data.name;
            weatherDescription.textContent = description.charAt(0).toUpperCase() + description.slice(1);
            temperature.textContent = `${temp}°C`;
            iconData.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        })
        .catch(error => {
            console.error('Error al obtener los datos del clima:', error);
            cityName.textContent = 'Error';
            weatherDescription.textContent = 'No se pudo obtener el clima';
            temperature.textContent = '';
            icon.textContent = `No se pudo obtener el icono`;

        });
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', getWeather);

// Actualiza el clima cada 10 minutos
setInterval(getWeather, 600000); // 600,000 ms = 10 minutos


// Seleccionar todos los elementos que podrían contener texto a traducir
const elementosATraducir = document.querySelectorAll('.traducir p, .traducir h1, .traducir h2, .traducir h3, .traducir h4, .traducir button, .traducir label, .traducir .nav-link, .traducir .exp > li');

// Función para eliminar los saltos de línea, etiquetas <br> y normalizar los caracteres latinos
function limpiarTexto(texto) {
    return texto.replace(/<br\s*\/?>/gi, ' ') // Reemplaza <br> por un espacio
                .normalize("NFD") // Normaliza para que las tildes sean tratadas de forma uniforme
                .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos diacríticos
                .trim(); // Elimina espacios en blanco al inicio y final
}

// Event listener para el botón de traducción
document.getElementById('traductor').addEventListener('click', () => {
    const botonTraductor = document.getElementById('traductor');

    // Verificar el texto actual del botón
    if (botonTraductor.textContent === 'Traducir ingles') {
        // Traducir a inglés
        elementosATraducir.forEach(elemento => {
            // Obtener el texto del elemento, reemplazando las etiquetas <br> y normalizando los caracteres
            let textoOriginal = limpiarTexto(elemento.innerHTML);

            // Normalizar tanto el texto original como la clave de traducción
            let textoOriginalNormalizado = textoOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            // Verificar si el texto original está en las traducciones
            if (traducciones[textoOriginalNormalizado]) {
                console.log(`${textoOriginal}: ${traducciones[textoOriginalNormalizado]}`); // Imprime la traducción
                elemento.innerHTML = traducciones[textoOriginalNormalizado].replace(/(?:\r\n|\r|\n)/g, '<br>'); // Actualiza el texto del elemento
            } else {
                console.log(`${textoOriginal}: No hay traducción disponible`); // Si no hay traducción
            }
        });
        botonTraductor.textContent = 'Traducir español'; // Cambia el texto del botón
    } else {
        // Refrescar la página para volver al español
        location.reload(); // Refresca la página
    }
});
