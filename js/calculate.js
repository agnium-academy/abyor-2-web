<!--
function calculateBmi() {
var weight = document.formBmi.weight.value
var height = document.formBmi.height.value
if(weight > 0 && height > 0){
var resultBmi = weight/(height/100*height/100)
document.formBmi.bmi.value = resultBmi
if(resultBmi < 18.5){
document.formBmi.result.value = "You are too thin."
}
if(resultBmi > 18.5 && resultBmi < 25){
document.formBmi.result.value = "You are in normal range."
}
if(resultBmi > 25 && resultBmi < 30){
document.formBmi.result.value = "You are overweight."
}
if(resultBmi > 30){
document.formBmi.result.value = "You are obesity."
}
}
else{
alert("Please input everything correctly!")
}
}
