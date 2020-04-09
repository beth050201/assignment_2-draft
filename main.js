
/* navigation*/

/*equal to anonomous function*/
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
 //Toggle Nav
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });


  // Fixed an issue here from foreach to forEach.
    navLinks.forEach((link,index) =>{
       if(link.style.animation) {
           link.style.animation=''
        } else {
          //Here there was a small mistake of using normal quotes '' and not back ticks ``.
          //Thats it!
            link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
        }
        console.log(index / 7);
    });
}

/* function*/
navSlide();




/* //typing animation for the title - https://codepen.io/LaithHaleem/pen/wzyrBd
let string = "Bethany Wilson";
let title = string.split("");
let el = document.getElementById('title');
(function animate() {
title.length > 0 ? el.innerHTML += title.shift() : clearTimeout(running); 
 let running = setTimeout(animate, 90);
})();


//https://codepen.io/derekshirk/pen/JKwdYj

/* let contactsubmit
function contactsubmit (){}
if(input.value === "") {
  alert("You must enter some value");
} */ 