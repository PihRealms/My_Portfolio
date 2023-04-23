var img = document.getElementById("slideimg");
var slides = ["Slider1.png","Slider2.png","Slider3.png"]
var currentSlide = 0;
var slidingInteval = 3000;
var pause = false;


slideChange(setInterval(slideChange,slidingInteval))


function pause_(){
   pause = true;
   console.log(pause)
}

function resume_(){
   pause = false;
   console.log(pause)
}


function slideChange(){
   
   //console.log (slides[currentSlide]);
   

   if(currentSlide< slides.length-1){
      if (pause== false){
       currentSlide += 1;
      }
      
   }
   else {
      currentSlide =0;
   }
   console.log(slides[currentSlide]);
   img.src = slides[currentSlide];
   //<img id= "slideimg" src="Slider1.png" alt="">
}

