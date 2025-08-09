

window.addEventListener("wheel", function(e) {
    
    if (e.deltaY > 0) {
        // Scroll down - move marquee
        marqueeTween = gsap.to(".marquee", {
            x: "-200%",  // Use x instead of transform for better performance
            duration: 4,
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
            duration: 4,
            repeat: -1,
            ease: "none"
        });
        
        imageTween = gsap.to(".marquee img", {
            rotate: 0,  // Reset rotation
            duration: 0.5
        });
    }
});