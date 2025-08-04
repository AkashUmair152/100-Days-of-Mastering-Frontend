
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for scroll-based animations
let tl = gsap.timeline();

tl.from("#text h1",{
    opacity:0,
    y:50,
    duration:1,

});
tl.from("#text p",{
    opacity:0,
    y:50,
    duration:1,

});

let tl2 = gsap.timeline();

tl2.from("#page2 #Animation",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub:1,
        pin:true,
        // markers:true
    }
})
 let tl3 = gsap.timeline();
tl3.from("#page3 img",{
   opacity: 0,
    scale: 0,
   duration: 1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start: "top 90%",
        end:"top 10%",
        scrub:2,
        // markers:true
    }

})


  