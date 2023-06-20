
var result = document.getElementById("result")
var mySlider = document.getElementById("slider")


mySlider.oninput = showSliderValue

function showSliderValue(){
    result.innerText = this.value
}
    