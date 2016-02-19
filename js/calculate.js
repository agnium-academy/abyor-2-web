<!--
function calculateBmi() {
var age = document.formBmi.age.value
var weight = document.formBmi.weight.value
var height = document.formBmi.height.value
var sex = document.formBmi.sex.value
if(weight > 0 && height > 0){
var resultBmi = weight/(height/100*height/100)
// NHANES II Definitions form BMI
document.formBmiValue.bmi.value = resultBmi
if(resultBmi <= 19.1){
document.formBmiValue.result.value = "You are Underweight."
}
else if(resultBmi > 19.1 && resultBmi <= 26.4){
document.formBmiValue.result.value = "You are in normal range."
}
else if(resultBmi > 26.4 && resultBmi <= 27.8){
document.formBmiValue.result.value = "You are Marginally Overweight."
}
else if(resultBmi > 27.8 && resultBmi <= 32.3){
document.formBmiValue.result.value = "You are Overweight."
}
else if(resultBmi > 32.3){
document.formBmiValue.result.value = "You are obesity."
}
}
else{
alert("Please input everything correctly!")
}
}
