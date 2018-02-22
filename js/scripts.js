function showInput() {
  document.getElementById("showName").innerHTML = document.getElementById("name").value;
  document.getElementById("showEmail").innerHTML = document.getElementById("email").value;
  document.getElementById("showMessage").innerHTML = document.getElementById("message-box").value;
}

// function confirm() {
//   var confirmation = document.createTextNode("Your message has been sent. Thank you!");
//   var p = document.createElement('p');
//   p.appendChild(userInput);
//   document.getElementById('userInput').appendChild(p);
// }

// $("btn-submit").click(function () {
//   var confirmation = document.createTextNode("Your message has been sent. Thank you!");
//   var p = document.createElement('p');
//   p.appendChild(userInput);
//   document.getElementById('userInput').appendChild(p);
// });

// function processUserData(){
//   var userName = document.getElementById("name").value;
//   var p = document.createElement('p');
//   var i = document.createTextNode(userName);
//   p.appendChild(i);
//   document.getElementById('userInput').appendChild(p);
//
//   var userEmail = document.getElementById("email").value;
//   var p = document.createElement('p');
//   var i = document.createTextNode(userEmail);
//   p.appendChild(i);
//   document.getElementById('userInput').appendChild(p);
//
//   var userMessage = document.getElementById("message-box").value;
//   var p = document.createElement('p');
//   var i = document.createTextNode(userMessage);
//   p.appendChild(i);
//   document.getElementById('userInput').appendChild(p);
// }
