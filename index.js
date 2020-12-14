
let txt = `Hello I am Kingsley`;
let getEl = document.getElementById("memo");
i = 0;

window.onload = () => {
  let typeWr = setInterval(() => {
    getEl.textContent += txt[i];
    i = i + 1;
    if(i > txt.length - 1){
      clearInterval(typeWr);
    }
  }, 150) 
}


(function() {

    'use strict';
    // define variables
    var items = document.querySelectorAll(".timeline li");
    
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
    
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    
  })();

  $(function(){
    $('.homepage').hide();
    $('.box').hide().slideDown(500);
    
    
    $('button').click(function(){
      $('.intro').slideUp(400);
      $('.box').slideUp(200);
      $('.homepage').delay(500).slideDown(300);
    });
    
    
  });
  // When the page is loaded
  // 1. check the width of the device.
// 2. if the screen is desktop screen
// 3. 



let windowSize  = window.innerWidth

if (windowSize > 767) {
  $('.intro').slideUp(400);
  $('.box').slideUp(200);
 $('.homepage').delay(500).slideDown(300);
} else {
  document.querySelector('.inro').style.display = 'block'
}