<!--
function calculateBmi() {
var age = document.formBmi.age.value
var weight = document.formBmi.weight.value
var height = document.formBmi.height.value
var sex = document.formBmi.sex.value
if(weight > 0 && height > 0){
var resultBmi = weight/(height/100*height/100)
document.formBmi.bmi.value = resultBmi
if(resultBmi <= 17.0 && age > 0 && sex == male ){
document.formBmi.result.value = "You are too thin."
}
else if(resultBmi <= 24.0 && age > 0 && sex == female ){
document.formBmi.result.value = "You are too thin."
}
if(resultBmi > 18.5 && resultBmi < 25 && age > 0 && sex == male){
document.formBmi.result.value = "You are in normal range."
}
else if(resultBmi <= 24.0 && age > 0 && sex == female ){
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
