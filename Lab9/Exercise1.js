var initialTime = new Date();

function stopTime() {
  var currentTime = new Date();
  console.log(initialTime.getTime());
  console.log(currentTime.getTime());

  var timeDifference = (currentTime - initialTime)/1000;
  console.log(timeDifference);

  alert("You have been on the page for: " + timeDifference + " seconds");
}
