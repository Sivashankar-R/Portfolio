window.addEventListener("scroll",function(){
    var nav =document.querySelector("#page1 nav");
    nav.classList.toggle("sticky",window.scrollY > 100)
})




var a=gsap.timeline();

a.from(".logo ,ul li",{
   y:-100,
   stagger:0.2,
   duration:1,


})



// a.to(".logo",{
//     scale:1.4,
//     x:10,
//     repeat:1,
//     delay:2,
//     duration:2,
//     yoyo:true,
// })

a.from(".name",{
    y:10,
    stagger:1,
    opacity:0,

})

a.to(".bubble",{
    top:"80vh",
    left:"80vh",

    repeat:-1,
    yoyo:true,
    duration:2,
    opacity:1

})
a.to(".bubble1",{
    
    right:"80vh",
    bottom:"80vh",
    repeat:-1,
    yoyo:true,
    duration:2,
    opacity:1


})
// page 2

a.from(".about-me h1,.details",{
    opacity:0,
    x:80,
    duration:5,

    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",

        start:"top 80%",
        end:"top 100%",
        scrub:4,
      

    },

})

// page-3

a.from(".projectcont #done ",{
    stagger:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:false,
        start:"top 80%",
        end:"top 50%",
        duration:2,
        scrub:2.5,

    },
    opacity:0,
    y:100,
    delay:"2s",
    stagger:0.5,


    
})


a.from("#page4 form",{
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:false,
        start:"top 100%",
        end:"top 50%",
        duration:2,
        scrub:2.5,
    },
    x:-100,
    stagger:1,
    opacity:0,

})

const navslider=()=>{
    const icon=document.querySelector(".icon");
    const navbar=document.querySelector("ul")
    const navlinks=document.querySelector("ul li")

    icon.addEventListener("click",()=>{
        navbar.classList.toggle('nav-active')

        navlinks.forEach((link)=>{
            if(link.style.animation){
                link.style.animation=`navlinkfade 0.5s ease forwards`

            }
        

        });
    icon.classList.toggle('toggle');

    })

}

navslider();