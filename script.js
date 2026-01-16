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
    clip = `M 0,15 A 15,15,0,0,1 15,0 L ${artSec.width - firstd.width-15},0 A 15,15,0,0,1 ${artSec.width - firstd.width},15 L ${artSec.width - firstd.width},${firstd.height - 15} A 15,15,0,0,0 ${artSec.width - firstd.width+15},${firstd.height} L ${artSec.width -15},${firstd.height} A 15,15,0,0,1 ${artSec.width},${firstd.height+ 15} L  ${artSec.width},${artSec.height} L 0,${artSec.height} 0,${artSec.height-15} Z`
    document.querySelector(".firstmain article > img").src = "image/download (19) 1.svg"
}else{
clip = `M 0,30 A 30,30,0,0,1 30,0 L ${artSec.width - maxes.width},0   L ${(artSec.width - maxes.width) + 100},${maxes.height} L ${artSec.width - 30},${maxes.height} A 30,30,0,0,1 ${artSec.width},100 L ${artSec.width},${artSec.height-30} A 30,30,0,0,1 ${artSec.width - 30},${artSec.height} L ${maxes.width},${artSec.height} L ${(maxes.width) - 100},${artSec.height - maxes.height} L 30,${artSec.height - maxes.height} A 30,30,0,0,1 0,${artSec.height - maxes.height - 30}  Z`
}
article.style.clipPath = `path("${clip}")`
    
}

heroBg(mq)