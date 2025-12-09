function openModal(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', e => {
    e.stopPropagation();
    openModal(img.src);
  });
});
let images = [];
let index = 0;

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', e => {
    e.stopPropagation();
    const parent = img.closest('.cards');
    images = Array.from(parent.querySelectorAll('img')).map(i => i.src);
    index = images.indexOf(img.src);
    openModal(img.src);
  });
});

function nextImage() {
  index = (index + 1) % images.length;
  modalImg.src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  modalImg.src = images[index];
}
