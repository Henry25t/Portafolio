document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    const carouselImages = carousel.querySelector(".proyecto-imagenes");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevButton = carousel.querySelector(".carousel-button.prev");
    const nextButton = carousel.querySelector(".carousel-button.next");
    const indicatorsContainer = carousel.querySelector(".carousel-indicators");

    let currentIndex = 0;
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement("span");
      indicator.addEventListener("click", () => {
        goToSlide(i);
      });
      indicatorsContainer.appendChild(indicator);
    }

    const indicators = indicatorsContainer.querySelectorAll("span");

    function updateCarousel() {
      carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);

    updateCarousel();
  });
});
