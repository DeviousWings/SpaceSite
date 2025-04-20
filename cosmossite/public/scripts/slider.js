document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const next = document.getElementById("nextSlide");
    const prev = document.getElementById("prevSlide");
  
    if (!next || !prev || slides.length === 0) return;
  
    let current = 0;
  
    next.addEventListener("click", () => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    });
  
    prev.addEventListener("click", () => {
      slides[current].classList.remove("active");
      current = (current - 1 + slides.length) % slides.length;
      slides[current].classList.add("active");
    });
  });
  