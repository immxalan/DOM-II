// Your code goes here

//Event changes nav background -> turquoise when hovering over, and back -> white when leaving (2))
let navSelector = document.querySelector(".nav-container");
    navSelector.addEventListener("mouseover", () => {navSelector.style.background = "turquoise";
    })
    navSelector.addEventListener("mouseout", () => {navSelector.style.background = "white"});

//Event increases bus image when double clicked
let busImage = document.querySelector(".intro img")
    busImage.addEventListener("dblclick", () => {
        busImage.style.transform = "scale(1.2)";
        busImage.style.transition = "transform 0.3s";
      })
//Event changes text color -> pink when "d" key is pressed
document.addEventListener('keydown',  (event) => {
    if (event.key === 'd') {
      document.body.style = "color: pink";
    }
      });
//Event changes text color -> turquoise when "d" key is released
    document.addEventListener('keyup',  (event) => {
    if (event.key === 'd') {
        document.body.style = "color: turquoise";
        }
          });
//Event changes text color -> random when "r" is pressed - can press once or continually
document.addEventListener('keypress',  (event) => {
    if (event.key === 'r') {
    let random = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      document.body.style = "color: #"+random;
    }
      });


//Event changes bottom image when window is resized
let corgi = document.querySelector(".content-destination img")
window.addEventListener("resize", () => {corgi.src="img/corgi.jpg"})

//Event changes text color back to black when scrolling
window.addEventListener("scroll", () => {document.body.style = "color: black"})

//Event changes "Let's Go" image to food when clicking once
let adventureImg = document.querySelector(".img-content img")
adventureImg.addEventListener("click", () => {adventureImg.src = "img/food.jpeg"})


//Event changes boat image to a randomly selected image generated from an array
let boatImg = document.querySelectorAll(".img-content img")[1]
boatImg.addEventListener("mousemove", () => 
{   boatArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/9.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/10.jpg",]
    random = Math.floor(Math.random()*boatArray.length)
    boatImg.src = boatArray[random]})