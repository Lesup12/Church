// Menú responsive
// Esperar a que todo el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  
  // Seleccionar botón del menú y nav dentro del header
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('header nav');

  // Verificar que existan los elementos
  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active'); // activa/desactiva la clase active
    });
  }

});
  
//mision animacion//

  // Intersection Observer para detectar cuando las tarjetas entran en la vista
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observar todas las tarjetas
        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });


//vision animacion//

// IntersectionObserver para activar animación desde la derecha
const observerVision = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observar la tarjeta principal de visión
document.querySelectorAll('.card-vision').forEach(el => observerVision.observe(el));

// Observar el cuadro de cita
document.querySelectorAll('.quote-box-vision').forEach(el => observerVision.observe(el));


        

// Marca de agua animación
function setAnimation(type){
  document.body.className=type;
}

// Animaciones fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');

function checkFaders() {
  const screenHeight = window.innerHeight;
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < screenHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFaders);
window.addEventListener('load', checkFaders);
checkFaders();


//la oracion pagina//




