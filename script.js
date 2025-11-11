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




// Marca de agua animación
function setAnimation(type){
  document.body.className=type;
}

// Slider galería
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i){
  if(i<0) index=images.length-1;
  else if(i>=images.length) index=0;
  else index=i;
  slides.style.transform=`translateX(-${index*100}%)`;
}

prev.addEventListener('click',()=>{ showSlide(index-1); });
next.addEventListener('click',()=>{ showSlide(index+1); });

// Animaciones fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll',()=>{
  faders.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(top < screenHeight - 50){ el.classList.add('show'); }
  });
});

