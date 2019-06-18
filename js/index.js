// Your code goes here
let navLinks = document.querySelector("nav");
navLinks.addEventListener('click', function(event){
    console.log("clicked nav link!");
    event.target.style.color = 'red';
});

