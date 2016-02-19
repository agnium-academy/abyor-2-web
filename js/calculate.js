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
if(resultBmi <= 20.7 && age > 0 ){
document.formBmiValue.result.value = "You are Underweight."
}
else if(resultBmi <= 19.1 && age > 0 ){
document.formBmiValue.result.value = "You are Underweight."
}
else if(resultBmi > 20.7 && resultBmi <= 26.4 && age > 0){
document.formBmiValue.result.value = "You are in normal range."
}
else if(resultBmi > 19.1 && resultBmi <= 25.8 && age > 0){
document.formBmiValue.result.value = "You are in normal range."
}
else if(resultBmi > 26.4 && resultBmi <= 27.8 && age > 0){
document.formBmiValue.result.value = "You are Marginally Overweight."
}
else if(resultBmi > 25.8 && resultBmi <= 27.3 && age > 0){
document.formBmiValue.result.value = "You are Marginally Overweight."
}
else if(resultBmi > 27.8 && resultBmi <= 31.1 && age > 0){
document.formBmiValue.result.value = "You are Overweight."
}
else if(resultBmi > 27.3 && resultBmi <= 32.3 && age > 0){
document.formBmiValue.result.value = "You are Overweight."
}
else if(resultBmi > 31.1 && age == 0){
document.formBmiValue.result.value = "You are obesity."
}
else if(resultBmi > 32.3 && age == 0){
document.formBmiValue.result.value = "You are obesity."
}
}
else{
alert("Please input everything correctly!")
}
}
