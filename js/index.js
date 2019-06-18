// Your code goes here
// click event
let navLinks = document.querySelector("nav");
navLinks.addEventListener('click', function(event){
    event.preventDefault();
    console.log("clicked nav link!");
    event.target.style.color = 'red';
    event.stopPropagation();
});

// mouseover event
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('mouseover', function(event) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
    console.log("moused over header logo!")
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 800);
  }, false);


  // wheel event
  let scale = 1;
  let img = document.querySelectorAll("img");
  img[1].addEventListener('wheel', function (event) {
    console.log("zoomed on img!");
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    img[1].style.transform = `scale(${scale})`;
  });


  // dblclick event
let text = document.querySelectorAll('p');
text[0].addEventListener('dblclick', function(event){
    console.log("clicked text!");
    event.target.style.fontSize = '4rem';
    event.stopPropagation();
});


// resize event
window.addEventListener('resize', function(){
    console.log("window resized!");
    img[3].style.display = 'none';
});


// load event
let body = document.querySelector('body');
window.addEventListener('load', function(event){
    this.console.log("window reloaded")
    body.style.background = "black";
    body.style.color = "white";
    setTimeout(function() {
        body.style.background = "";
        body.style.color = "";
      }, 1000);
    }, false);


// scroll event
window.addEventListener('scroll', function(){
    console.log("window resized!");
    text[2].style.color = 'red';
    setTimeout(function() {
        text[2].style.color = "";
      }, 500);
    }, false);


// keydown event
window.addEventListener('keydown', function(){
 img[0].style.opacity = '.05';
 setTimeout(function() {
    img[0].style.opacity = "";
  }, 200);
}, false);


// selectstart event
let noCopy = function(){
    let textList = Array.from(text);
    textList.forEach(function(element){
    element.textContent = "NO COPY!";
    });
};
window.onselectstart = noCopy;


// copy event
window.addEventListener('copy', function(){
    let textList = Array.from(text);
    textList.forEach(function(element){
    element.textContent = "RUDE!";
    });
})

