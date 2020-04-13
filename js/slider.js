


var currentSlide = 0;
var slideArray  = [
{
  image: "images/2.jpg",
},
{
  image: "icon.png",
},
{
  image: "images/caro1.jpg",
},
{
  image: "images/caro2.jpg",
},

{
  image: "images/caro3.jpg",
},

{
  image: "images/caro4.jpg",
},



];

var slider = document.getElementById('slider');
var display = document.getElementById('display');
// console.log(slideArray);


function showSlides(slide) {
  var q = slideArray[currentSlide];
slider.style.backgroundImage= "url(" + q.image + ")";
// display.textContent = q.text;
}

showSlides(currentSlide);
function nextSlide(){
     currentSlide++;
                 if (currentSlide >= slideArray.length) 
                 	{ currentSlide = 0;}
                 var q = slideArray[currentSlide];
                 showSlides();

}
 
slider.addEventListener("click", function(){
	nextSlide();
});

setInterval(function(){
	nextSlide();
},5000);

//   var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// setInterval(function(){
//   slideIndex += 1;
//   showSlides(slideIndex);
// }, 5000)