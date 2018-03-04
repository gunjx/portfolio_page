"use strict";

// Twitter follow button
!function(d,s,id) {var js, fjs=d.getElementsByTagName(s)[0], p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook like buttom
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=535621223243648&autoLogAppEvents=1'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));

// Google Maps
var map;
function initMap() {
  var myLatLng = {lat: 50.770, lng: 6.106};
  map = new google.maps.Map(document.getElementById('map'), {
  center: myLatLng,
  zoom: 9
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Visit me!'
  });
}

// Wait for DOM to load
$(document).ready(function() {

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
  $('.gototop').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate ({
      scrollTop: 0}, 500);
  });

  // Tooltip script
  $(function() {
    $('.tooltip--link').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Dynamic work section
  for (let i = 0; i < works.length; i++) {
    $(".row", $("#work")).append("\
      <div class='col col-sm-3 col-xs-6'>\
        <a href='#work' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <div class='backgr-transp'>\
            <span class='info'><p class ='proj-title'>Title: </p>'" + works[i].title + "'</span>\
          </div>\
        </a>\
      </div>\
    ");
    let images = $("#work .col");
    if (i % 2 === 0) {
      $(images[i]).css("border", "2px solid #9CA738");
    } else {
      $(images[i]).css("border", "2px solid #C180AD");
    }
  };

  // Show work project titles on hover
  $(".work-img").mouseenter(function() {
    $(".backgr-transp", this).show(),
    $(".info", this).show();
  }).mouseleave(function() {
    $(".backgr-transp", this).hide(),
    $(".info", this).hide();
  });

  // Style form with javascript
  $(".form-control").css("background-color", "rgba(242, 250, 167, 0.5)");

  // Show user input with event listener
  // Mark text fields when required fields are empty
  // Hide text fields after submitting
  $("#btn-submit").on("click", function() {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message-box").val();
    // Check functionality
    console.log(message);
    if (name === "" || email === "" || message === "") {
      $(".form-control").css("border", "2px solid red");
    } else {
      $("#thankyou").html("Thank you for your message!");
      $("#showName").html("Name: " + name);
      $("#showEmail").html("Email: " + email);
      $("#showMessage").html("Message: " + message);
      $(".form").hide();
      return false;
    }
  });

  // Running character count on message listbox
  $("#message-box").on("keyup", function() {
    let charCount = $("#message-box").val().length;
    console.log(charCount); // Check functionality
    $("#char-count").html(charCount);
    if (charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "#3D6485");
    }
  });

// End document.ready
});
