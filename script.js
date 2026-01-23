const mq = window.matchMedia("(max-width:576px)")


function heroBg(mq){
    const article = document.querySelector(".firstmain article")


const firstd = document.querySelector(".firstd").getBoundingClientRect()
const second1 = document.querySelector(".second1").getBoundingClientRect()
const maxes = {width:Math.max(second1.width,firstd.width),height:Math.max(second1.height,firstd.height)}
let clip
article.style.paddingBottom = `${second1.height + 50}px` 
article.style.paddingTop = `${firstd.height + 25}px`
const artSec = article.getBoundingClientRect()

if(mq.matches){
    clip = `M 0,15 A 15,15,0,0,1 15,0 L ${artSec.width - firstd.width-15},0 A 15,15,0,0,1 ${artSec.width - firstd.width},15 L ${artSec.width - firstd.width},${firstd.height - 15} A 15,15,0,0,0 ${artSec.width - firstd.width+15},${firstd.height} L ${artSec.width -15},${firstd.height} A 15,15,0,0,1 ${artSec.width},${firstd.height+ 15} L ${artSec.width},${artSec.height - 15} A 15,15,0,0,1  ${artSec.width -15},${artSec.height} L 15,${artSec.height} A 15,15,0,0,1 0,${artSec.height-15} Z`
    document.querySelector(".firstmain article > img").src = "image/download (19) 1.svg"
}else{
clip = `M 0,30 A 30,30,0,0,1 30,0 L ${artSec.width - maxes.width},0   L ${(artSec.width - maxes.width) + 100},${maxes.height} L ${artSec.width - 30},${maxes.height} A 30,30,0,0,1 ${artSec.width},100 L ${artSec.width},${artSec.height-30} A 30,30,0,0,1 ${artSec.width - 30},${artSec.height} L ${maxes.width},${artSec.height} L ${(maxes.width) - 100},${artSec.height - maxes.height} L 30,${artSec.height - maxes.height} A 30,30,0,0,1 0,${artSec.height - maxes.height - 30}  Z`
}
article.style.clipPath = `path("${clip}")`
        const herotl = gsap.timeline()
if(mq.matches){
    herotl.fromTo(".firstmain article > img",{opacity:0},{opacity:1,duration:1})
    herotl.fromTo(".firstd",{opacity:0,x:80},{opacity:1,x:0,duration:0.7},"-=0.5")
        herotl.fromTo(".f1",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
            herotl.fromTo(".f2",{opacity:0,x:80},{opacity:1,x:0,duration:0.7},"-=0.5")
                    herotl.fromTo(".second1",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
}else{
        const herotl = gsap.timeline()
    herotl.fromTo(".firstmain article > img",{opacity:0},{opacity:1,duration:1})
        herotl.fromTo(".second1",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
    herotl.fromTo(".firstd",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
        herotl.fromTo(".f1",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
            herotl.fromTo(".f2",{opacity:0,x:80},{opacity:1,x:0,duration:0.7},"-=0.5")
        }
        herotl.fromTo(".choose > div",{opacity:0,y:80},{opacity:1,y:0})
  const herotl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".firstmain",
      start: `top top`,
      end: "bottom top",
      scrub: true
    }
  });
  herotl2.fromTo(".firstmain article > img", {y:0, opacity:1}, {y:-100, opacity:0});
  herotl2.fromTo(".firstd", {y:0, opacity:1}, {y:-150, opacity:0},"<");
  herotl2.fromTo(".second1", {y:0, opacity:1}, {y:-100, opacity:0},"<");
  herotl2.fromTo(".f1", {y:0, opacity:1}, {y:-150, opacity:0},"<");
  herotl2.fromTo(".f2", {y:0, opacity:1}, {y:-150, opacity:0},"<");

}

function hotDeals(mq){
    let bigScreenImage
    if(mq.matches){
        bigScreenImage = [
            {src:"image/download__27_-removebg-preview 1.svg",heading:"2024 BMW M4 (G82)",price:"$71,800",paragraph:"A high-performance coupe featuring a full Vorsteiner carbon aero package with a vented hood, rear wing, and forged wheels. Powered by BMW’s 3.0L TwinPower Turbo engine, it delivers aggressive style with everyday usability."},
        ]
    }else{
                bigScreenImage = [
            {src:"image/BMW-removebg-preview 1.svg",heading:"2024 BMW M4 (G82)",price:"$71,800",paragraph:"A high-performance coupe featuring a full Vorsteiner carbon aero package with a vented hood, rear wing, and forged wheels. Powered by BMW’s 3.0L TwinPower Turbo engine, it delivers aggressive style with everyday usability."},
        ]
    }
    const mainImage = document.querySelector(".hotdeals2 img")
    const price = document.querySelector(".hotdeals3 h3")
    const paragraph = document.querySelector(".hotdeals1 p")
    const heading = document.querySelector(".hotdeals1 h3")
    mainImage.src = bigScreenImage[0].src
    setInterval(()=>{
        gsap.fromTo(mainImage,{x:"-50vw",opacity:0},{x:0,opacity:1,duration:0.5,ease:"power1.inOut"})
        gsap.fromTo(".hotdeals1",{y:100,opacity:0},{y:0,opacity:1,duration:0.5,ease:"power1.inOut"})
        gsap.fromTo(".hotdeals3 h3",{y:100,opacity:0},{y:0,opacity:1,duration:0.5,ease:"power1.inOut"})
        setTimeout(()=>{
        gsap.fromTo(mainImage,{x:0,opacity:1},{x:"50vw",opacity:0,duration:0.5,ease:"power1.inOut"})

        },2500)
    },3000)
}
function gsapAnimations(){
 console.log("yes")
    


}
window.addEventListener("DOMContentLoaded",()=>{
    heroBg(mq)
    hotDeals(mq)
gsapAnimations()



})
window.addEventListener("resize",()=>{
      heroBg(mq)
})