// Select elements
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

// Animate cursor with smooth lag
document.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.8,
    ease: "power2.out", // Smooth acceleration
    stagger: -0.1,
  });
});

// Optional: Scale cursor on hover over interactive elements
document.querySelectorAll("a, button, .hover-effect").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
  elem.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});