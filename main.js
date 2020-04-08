
/* navigation*/

/*equal to anonomous function*/
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  /*toggle nav - on click the nav */
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

  /*animate links delay between each link loading*/
    navLinks.forEach((link,index) => {
    if(link.querySelector.animation){
      link.style.animation = '';
    } else {
      link.getElementsByClassName.aniamtion= `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
    }
  
  });

  /* burger animation*/
  burger.classList.toggle('toggle');

  });


}

/*function*/
navSlide();




/* //typing animation for the title - https://codepen.io/LaithHaleem/pen/wzyrBd
let string = "Bethany Wilson";
let title = string.split("");
let el = document.getElementById('title');
(function animate() {
title.length > 0 ? el.innerHTML += title.shift() : clearTimeout(running); 
 let running = setTimeout(animate, 90);
})();

//skill bars - https://codepen.io/mannMadeCo/pen/BwMKpW
$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
    });

//https://codepen.io/derekshirk/pen/JKwdYj

/* let contactsubmit
function contactsubmit (){}
if(input.value === "") {
  alert("You must enter some value");
} */ 