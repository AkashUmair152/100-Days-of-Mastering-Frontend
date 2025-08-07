
let menu = document.querySelector("#nav i");
let close = document.querySelector("#full i");

let Tl = gsap.timeline();

Tl.to("#full", {
    right: 0,
    duration:0.8,

})

Tl.from("#full h4", {
    opacity:0,
    x:150,
    stagger:0.25,
    duration:0.5
})

Tl.from("#full i", {
    opacity:0,
})

Tl.pause();
menu.addEventListener("click", function() {
    Tl.play();
})

close.addEventListener("click", function() {
    Tl.reverse()
})