

let Path ="M 10 100 Q 250 100 1150 100";
let finalPath = "M 10 100 Q 250 100 1150 100";

let string = document.querySelector("#string");

string.addEventListener("mousemove", (dets)=>{

    path = `M 10 100 Q ${dets.x} ${dets.y} 1150 100` 
    gsap.to("svg path", {
  attr: { d: path }, // ✅ 'attr' should be lowercase
  duration: 0.2,
  ease: "power3.out"
});


})

string.addEventListener("mouseleave", (dets)=>{
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})
