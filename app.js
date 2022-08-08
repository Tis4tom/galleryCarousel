const slides = document.querySelectorAll('.nf-slide-wrapper img');
const tabGalleryWrapper = document.getElementById('tab-gallery-wrapper');
tabGalleryWrapper.innerHTML = `<img id="tab-gallery" src=\"${slides[0].src}\" />`;
tabGallery = document.getElementById('tab-gallery');
figCap = document.getElementById('fig-cap');
figCap.innerHTML = `<figcaption>${slides[0].alt}</figcaption>`;
 
for (let slide of slides) {
slide.addEventListener("click", function() {
  tabGallery.src = this.src;
  figCap.innerHTML = `<figcaption>${this.alt}</figcaption>`;
})
}
 