"use strict";

// Twitter follow button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook like buttom
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=535621223243648&autoLogAppEvents=1'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){ // Wait for DOM to load

  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // Modify script to include home button
  $('.gototop').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate( {
      scrollTop: 0}, 500);
  });

  // Tooltip script
  $(function () {
    $('.tooltip--link').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Style message-box red
  $(".form-control").css("background-color", "rgba(242, 250, 167, 0.5)");
  $(".form-control").css("opacity", "100%");

 // Show user input with event listener
  $("#btn-submit").on("click", function() {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message-box").val();
    $("#thankyou").html("Thank you for your message!");
    $("#showName").html("Name: " + name);
    $("#showEmail").html("Email: " + email);
    $("#showMessage").html("Message: " + message);
    $(".form").hide();
    return false;
  });

  // Show user input using html tag onclick(showInput;)
  // function showInput() {
  // document.getElementById("showName").innerHTML = document.getElementById("name").value;
  //   document.getElementById("showEmail").innerHTML = document.getElementById("email").value;
  //   document.getElementById("showMessage").innerHTML = document.getElementById("message-box").value;
  // }

  // Show user input using appendChild
  // function processUserData(){
  //   let userName = document.getElementById("name").value;
  //   let p = document.createElement('p');
  //   let i = document.createTextNode(userName);
  //   p.appendChild(i);
  //   document.getElementById('userInput').appendChild(p);
  // }

}); // End document.ready
