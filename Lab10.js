function addition() {
  var num1 = Number(document.getElementById("textInput1").value);
  console.log(num1);
  var num2 = Number(document.getElementById("textInput2").value);
  console.log(num2);
  var total = Number(num1 + num2);
  console.log(total);
  document.getElementById("output").innerHTML = total;
}

function subtraction() {
  var num1 = Number(document.getElementById("textInput1").value);
  console.log(num1);
  var num2 = Number(document.getElementById("textInput2").value);
  console.log(num2);
  var total = Number(num1 - num2);
  console.log(total);
  document.getElementById("output").innerHTML = total;}

function multiplication() {
  var num1 = Number(document.getElementById("textInput1").value);
  console.log(num1);
  var num2 = Number(document.getElementById("textInput2").value);
  console.log(num2);
  var total = Number(num1 * num2);
  console.log(total);
  document.getElementById("output").innerHTML = total;}

function division() {
  var num1 = Number(document.getElementById("textInput1").value);
  console.log(num1);
  var num2 = Number(document.getElementById("textInput2").value);
  console.log(num2);
  var total = Number(num1 / num2);
  console.log(total);
  document.getElementById("output").innerHTML = total;}
