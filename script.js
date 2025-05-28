const slides = document.getElementById("slides");
    const counter = document.getElementById("counter");
    const totalSlides = slides.children.length;
    let index = 0;

    function showSlide(i) {
      index = (i + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${index * 350}px)`;
      updateCounter();
    }

    function next() {
      showSlide(index + 1);
    }

    function prev() {
      showSlide(index - 1);
    }

    function updateCounter() {
      counter.textContent = `Imagem ${index + 1} de ${totalSlides}`;
    }

    updateCounter();