// Initialize GlideJS Carousel
const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    gap: 10,
    breakpoints: {
      600: {
        perView: 1
      },
      1000: {
        perView: 2
      },
      1200: {
        perView: 3
      }
    }
  });
  
  glide.mount();
  