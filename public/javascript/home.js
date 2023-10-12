const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
//const imageBlocks = document.querySelectorAll('.image-block');
//imageBlocks.forEach((block) => {
  //block.addEventListener('click', function() {
    //this.classList.toggle('zoomed');
  //});
//});
const reelElement = document.querySelector('.reel');
const images = document.querySelectorAll('.reel img');
const imageCount = images.length;

// Set the width of the reel to accommodate all the images
reelElement.style.width = `${100 * imageCount}%`;

// Calculate the width of each image in percentage
const imageWidth = 100 / imageCount;

// Set the width of each image
images.forEach(image => {
  image.style.width = `${imageWidth}%`;
});


