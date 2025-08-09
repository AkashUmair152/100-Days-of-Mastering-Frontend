// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate #left (text)
  gsap.from("#left", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Animate #right (image)
  gsap.from("#right", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});