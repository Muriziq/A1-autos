const mq = window.matchMedia("(max-width:768px)")
gsap.registerPlugin(ScrollTrigger);


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

}

function hotDeals(mq){
    let bigScreenImage
    if(mq.matches){
        bigScreenImage = [
            {src:"download__27_-removebg-preview 1.svg",heading:"2024 BMW M4 (G82)",price:"$71,800",paragraph:"A high-performance coupe featuring a full Vorsteiner carbon aero package with a vented hood, rear wing, and forged wheels. Powered by BMW’s 3.0L TwinPower Turbo engine, it delivers aggressive style with everyday usability."},
            {src:"2015_Ford_Mustang_5_0__red__front_low__lights_on-removebg-preview 1.svg",heading:"2015 Ford Mustang",price:"$45,000",paragraph:"The 2015 Ford Mustang 5.0 is a classic muscle car with a powerful V8 engine, offering an exhilarating driving experience and timeless design."},
            {src:"Accord_2012-removebg-preview 1.svg",heading:"Honda Accord 2012",price:"$517,770",paragraph:"A midsize sedan known for its reliability, comfort, and smooth ride. It offers a spacious interior, good fuel economy, and a choice of efficient 4-cylinder or more powerful V6 engines—making it a practical and dependable daily driver"}
        ]
    }else{
            bigScreenImage = [
            {src:"BMW-removebg-preview 1.svg",heading:"2024 BMW M4 (G82)",price:"$71,800",paragraph:"A high-performance coupe featuring a full Vorsteiner carbon aero package with a vented hood, rear wing, and forged wheels. Powered by BMW’s 3.0L TwinPower Turbo engine, it delivers aggressive style with everyday usability."},
            {src:"2017_MCLAREN_570S-removebg-preview 1.svg",heading:"2017 McLaren 570S",price:"$85,000",paragraph:"The 2017 570S is ideal for enthusiasts who want real supercar performance and handling without entering hypercar price territory. It shines on spirited drives and track days while still being livable on the road."},
            {src:"Buggati_Chiron-removebg-preview 1.svg",heading:"Bugatti Chiron",price:"$500,000",paragraph:"The Bugatti Chiron is a hand-built French hypercar from Bugatti Automobiles, designed to push the boundaries of speed, engineering and luxury. It sits at the pinnacle of automotive performance and exclusivity."}
        ]
    }
    const mainImage = document.querySelector(".hotdeals2 img")
    const price = document.querySelector(".hotdeals3 h3")
    const paragraph = document.querySelector(".hotdeals1 p")
    const heading = document.querySelector(".hotdeals1 h3")
    let hotDealsx = 0
    setInterval(()=>{
        hotDealsx = (hotDealsx+1) % bigScreenImage.length
        console.log(hotDealsx,bigScreenImage.length,bigScreenImage)
        mainImage.src = `image/${bigScreenImage[hotDealsx].src}`
        price.textContent = bigScreenImage[hotDealsx].price
        paragraph.textContent = bigScreenImage[hotDealsx].paragraph
        heading.textContent = bigScreenImage[hotDealsx].heading
        gsap.fromTo(mainImage,{x:"-50vw",opacity:0},{x:0,opacity:1,duration:0.5,ease:"power1.inOut"})
        gsap.fromTo(".hotdeals1",{y:100,opacity:0},{y:0,opacity:1,duration:0.5,ease:"power1.inOut"})
        gsap.fromTo(".hotdeals3 h3",{y:100,opacity:0},{y:0,opacity:1,duration:0.5,ease:"power1.inOut"})
        setTimeout(()=>{
        gsap.fromTo(mainImage,{x:0,opacity:1},{x:"50vw",opacity:0,duration:0.5,ease:"power1.inOut"})
        },2500)
    },3000)
}
function gsapAnimations(mq){
        const herotl = gsap.timeline()
if(mq.matches){
    herotl.fromTo(".firstmain article > img",{opacity:0},{opacity:1,duration:1})
    herotl.fromTo(".firstd",{opacity:0,x:80},{opacity:1,x:0,duration:0.7},"-=0.5")
        herotl.fromTo(".f1",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
            herotl.fromTo(".f2",{opacity:0,x:80},{opacity:1,x:0,duration:0.7},"-=0.5")
                    herotl.fromTo(".second1",{opacity:0,y:80},{opacity:1,y:0,duration:0.7},"-=0.5")
}else{
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

 document.querySelectorAll(".choose > section > div").forEach(div=>{
    const divtl = gsap.timeline({scrollTrigger:{trigger: div, start:"top 90%", end:"bottom 60%", scrub:true}})
    divtl.fromTo(div,{opacity:0,y:150},{opacity:1,y:0,duration:0.7})
    const divChild = div.children
    divtl.fromTo(divChild,{opacity:0,y:60},{opacity:1,y:0,stagger:0.2})
 })
    
const fleettl = gsap.timeline({scrollTrigger:{trigger: ".fleet", start:"top 80%", end:"bottom 60%"}})
fleettl.fromTo(".fleet > div",{opacity:0,y:150},{opacity:1,y:0,duration:0.7})
fleettl.fromTo(".fleet1",{opacity:0,y:100},{opacity:1,y:0,duration:0.7},"-=0.5")
gsap.utils.toArray(".worksec > div").forEach(div=>{
    gsap.fromTo(div,{y:150,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:div, start:"top 80%", end:"bottom 60%",scrub:true}})
})
const formstl = gsap.timeline({scrollTrigger:{trigger: ".forms", start:"top 80%", end:"bottom 60%"}})
formstl.fromTo(".forms > h2",{opacity:0,y:150},{opacity:1,y:0,duration:0.7})
formstl.fromTo(".forms > p",{opacity:0,y:100},{opacity:1,y:0,duration:0.7},"-=0.5")
formstl.fromTo(".forms > section > div",{opacity:0,y:150},{opacity:1,y:0,duration:0.7,stagger:0.2})

  const formt = gsap.timeline({
    scrollTrigger: {
      trigger: ".forms",
      start: "top top",
      end: "bottom top",
      scrub:true
    }
  });
  formt.fromTo(".forms", {y:0, opacity:1}, {y:-150, opacity:0});
  gsap.fromTo(".footimg",{y:200,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:"footer",start:"top bottom", end:"top 50%", scrub:true}})


}
window.addEventListener("DOMContentLoaded",()=>{
    heroBg(mq)
    hotDeals(mq)
gsapAnimations(mq)



})
window.addEventListener("resize",()=>{
      heroBg(mq)
})

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
