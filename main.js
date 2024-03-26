

const carosel=document.querySelector("#carosel");
console.log(carosel);
const firstImg=carosel.querySelectorAll("div")[0];
console.log(firstImg);
arrowIcons=document.querySelectorAll("#crove img")
let firstImgwidth=firstImg.clientWidth +750;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carosel.scrollLeft +=icon.id=="left" ? -firstImgwidth:firstImgwidth;
     })
})

const carosel1=document.querySelector("#carosel1");
console.log(carosel1);
const firstImg1=carosel1.querySelectorAll("div")[0];
console.log(firstImg1);
arrowIcons=document.querySelectorAll("#divtaghands button")
let firstImgwidth1=firstImg1.clientWidth +100;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carosel1.scrollLeft +=icon.id=="btn2" ? -firstImgwidth:firstImgwidth;
     })
})

const carosel11=document.querySelector("#carosel11");
console.log(carosel11);
const firstImg11=carosel11.querySelectorAll("div")[0];
console.log(firstImg11);
arrowIcons=document.querySelectorAll("#divtagsk button")
let firstImgwidth11=firstImg11.clientWidth +1000;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carosel11.scrollLeft +=icon.id=="btnn2" ? -firstImgwidth:firstImgwidth;
     })
})



let button3=document.getElementById("button3");
console.log(button3);
let logindivtag=document.getElementById("logindivtag");
console.log(logindivtag);
let mnisahha=document.getElementById("mnisahha");
console.log(mnisahha);
button3.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=button3.classList.toggle("true");
    if(res){
        logindivtag.style.display="block";
        
        button3.style.backgroundColor="blue";
        button3.style.color="white";
        button3.style.border="1px solid blue"
    }
    else{
        logindivtag.style.display="none"
     
        button3.style.backgroundColor="white";
        button3.style.color="color";
        button3.style.border="white"

    }


})
button3.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=button3.classList.toggle("true");
    if(res){
        logindivtag.style.display="block";
     
        button3.style.backgroundColor="blue";
        button3.style.color="white";
        button3.style.border="1px solid blue"
    }
    else{
        logindivtag.style.display="none";
     
        button3.style.backgroundColor="white";
        button3.style.color="color";
        button3.style.border="white"

    }


})
let dotsone=document.getElementById("dotsone");
console.log(dotsone);
let dispalysdd=document.getElementById("dispalysdd");
console.log(dispalysdd);
dotsone.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=dotsone.classList.toggle("true");
     if(res){
        dispalysdd.style.display="block";
     }
     else{

        dispalysdd.style.display="none";
     }
})
dotsone.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=dotsone.classList.toggle("true");
     if(res){
        dispalysdd.style.display="block";
     }
     else{

        dispalysdd.style.display="none";
     }
})
// const sportsdisplay=document.querySelector("#sportsdisplay");
// console.log(sportsdisplay);
// const firstImg2=sportsdisplay.document.querySelectorAll("#divtagka");
// console.log(firstImg2);
// arrowIcons=document.querySelectorAll("#imagesges button")
// let firstImgwidth2=firstImg2.clientWidth +200;
// arrowIcons.forEach(icon=>{
//     icon.addEventListener("click",()=>{
//         sportsdisplay.scrollLeft +=icon.id=="btnimg1" ? -firstImgwidth:firstImgwidth;
//      })
// })

const sportsdisplay=document.querySelector("#sportsdisplay");
console.log(sportsdisplay);
const firstImg12=sportsdisplay.querySelectorAll("div")[0];
console.log(firstImg12);
arrowIcons=document.querySelectorAll("imagesges img")
let firstImgwidth2=firstImg12.clientWidth +750;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        sportsdisplay.scrollLeft +=icon.id=="btnimg1" ? -firstImgwidth:firstImgwidth;
     })
})
// ----------------------
const beautiggood=document.querySelector("#beautiggood");
console.log(beautiggood);
const firstImg13=beautiggood.querySelectorAll("div")[0];
console.log(firstImg13);
arrowIcons=document.querySelectorAll("divbtnimg button")
let firstImgwidth3=firstImg13.clientWidth +500;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        beautiggood.scrollLeft +=icon.id=="leftsssss" ? -firstImgwidth:firstImgwidth;
     })
})
let fashiondisplayfan=document.getElementById("fashiondisplayfan");
console.log(fashiondisplayfan);
let fashiondiv=document.getElementById("fashiondiv");
console.log(fashiondiv);
fashiondisplayfan.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=fashiondisplayfan.classList.toggle("true");
    if(res){
        fashiondiv.style.display="block";
    }
    else{
        fashiondiv.style.display="none";
    }


},false)
fashiondisplayfan.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=fashiondisplayfan.classList.toggle("true");
    if(res){
        fashiondiv.style.display="block";
        
    }
    else{
        fashiondiv.style.display="none";
    }


},false)