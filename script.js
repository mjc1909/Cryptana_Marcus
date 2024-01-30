const slide = document.querySelector('.slider-slide')
const btnNext = document.querySelector('.next')
const btnPrevious = document.querySelector('.previous')

let currentImageIndex = 0;

let images =[
    'img/slider01.jpg',
    'img/slider02.jpg',
    'img/slider03.jpg'
]

function setActiveSlide(index){
    slide.setAttribute('src', images [index])
}
setActiveSlide(currentImageIndex)

function next(){
    if(currentImageIndex >= images.length - 1){
    currentImageIndex = 0;
    }else{
        currentImageIndex += 1;
    }
    setActiveSlide(currentImageIndex)
}

btnNext.addEventListener('click', next);

function previous(){
    if(currentImageIndex == 0){
        currentImageIndex = images.length - 1;
    }else{
        currentImageIndex -= 1;
    }
    setActiveSlide(currentImageIndex)
}

btnPrevious.addEventListener('click', previous)


document.addEventListener('keydown', (event) =>{
    if (event.key == 'ArrowLeft') {
        previous()
    }
    if (event.key == 'ArrowRight'){
        next()
    }
})

setInterval (next, 2000)

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "block";
  }
}

hamburger.addEventListener("click", toggleMenu);

function myFunction(){
    alert("Your message has been sent :)");
  }

