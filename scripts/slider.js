const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});

$(".product__slider--arrow--direction--prev").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})

$(".product__slider--arrow--direction--next").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})
