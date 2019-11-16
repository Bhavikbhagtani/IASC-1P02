function buttonClick() {
  var num1 = document.getElementById("textInput1").value;
  console.log(num1);
  var num2 = document.getElementById("textInput2").value;
  console.log(num2);
  document.getElementById("output").innerHTML = num1 + num2;
}
