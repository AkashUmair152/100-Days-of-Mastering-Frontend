// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline();

tl.from("nav h1, nav a", {
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.1, // This creates the stagger effect
});

tl.to("nav button", {

  opacity: 1,
  duration:2

})

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

window.addEventListener("wheel", function(e) {
    
    if (e.deltaY > 0) {
        // Scroll down - move marquee
        marqueeTween = gsap.to(".marquee", {
            x: "-200%",  // Use x instead of transform for better performance
            duration: 10,
            repeat: -1,
            ease: "none"
        });
        
        imageTween = gsap.to(".marquee img", {
            rotate: 180,
            duration: 0.5
        });
    } else {
        // Scroll up - reset marquee
        marqueeTween = gsap.to(".marquee", {
            x: "0%",  // Use x instead of transform
            duration: 10,
            repeat: -1,
            ease: "none"
        });
        
        imageTween = gsap.to(".marquee img", {
            rotate: 0,  // Reset rotation
            duration: 0.5
        });
    }
});


gsap.from(".service-card", {
  x: (index) => index % 2 === 0 ? -100 : 100,
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.25,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#card-container",
    start: "top 60%",
    end: "top -40%",
    scrub: 1,
  }
});