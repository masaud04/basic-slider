const sliderTrack = document.querySelector(".slider-track")
const slides = document.querySelectorAll(".slide")

console.log(slides.length);


let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")

let currentIndex = 0
let totalSLides = slides.length

function functionForSlides() {

    sliderTrack.style.transition = 'transform 0.4s ease-in-out'
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`

}

nextBtn.addEventListener("click", () => {
    prevBtn.style.display = "block"


    if(currentIndex >= totalSLides - 3){
        currentIndex++
        nextBtn.style.display = "none"
        console.log("jrtfgadrlogholgh");
    }
    else if(currentIndex < totalSLides - 2){
        currentIndex++
    }
    functionForSlides()
})

prevBtn.addEventListener("click", () => {
    nextBtn.style.display = "block"
    
    if(currentIndex == 1){
        // currentIndex = totalSLides - 2
        currentIndex--
        prevBtn.style.display = "none"
    }
    else if(currentIndex > 1){
        currentIndex--
    }
    functionForSlides()
})



