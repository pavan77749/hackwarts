document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".row");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Once animated, stop observing
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    rows.forEach((row) => {
      observer.observe(row);
    });
  });
  