(function () {
  const slide = [
    `<div class=".item_slode">
       <img src="img/nelton.jpg" alt="nelton" />
     </div>`,
    `<div class=".item_slode">
       <img src="img/lusi.jpg" alt="lusi" />
     </div>`,
    `<div class=".item_slode">
       <img src="img/roza.jpg" alt="roza" />
     </div>`,
  ];

  let currentSlideIdx = 0;

  function renderCarousel() {
    const slideContainer = document.querySelector(".item-carousel__slides");
    slideContainer.innerHTML = slide[currentSlideIdx];
  }

  function next() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
    renderCarousel();
  }

  function prev() {
    currentSlideIdx =
      currentSlideIdx - 1 <= 0 ? slide.length - 1 : currentSlideIdx - 1;
    renderCarousel();
  }

  const nextButton = document.querySelector(".item-carousel__btn-next");
  nextButton.addEventListener("click", next);
  const prevButton = document.querySelector(".item-carousel__btn-prev");
  prevButton.addEventListener("click", prev);

  renderCarousel();
})();
