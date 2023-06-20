
  document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var mainMenu = document.querySelector(".mainmenu");

    hamburger.addEventListener("click", function () {
      mainMenu.classList.toggle("show");
      hamburger.classList.toggle("drop");
    });
  });





function openSignupForm() {
  window.open("signup.html", "signupForm", "width=500,height=500");
}
document.getElementById("signup").addEventListener("click", function() {
  document.getElementById("signup-form").style.display = "block";
});

function search() {
  
  var query = document.getElementById("searchbar").value.toLowerCase();
 
  var snacks = document.getElementsByClassName("snacks");
  for (var i = 0; i < snacks.length; i++) {
    var snacks = snacks[i];
    if (snacks.innerHTML.toLowerCase().indexOf(query) === -1) {
      snacks.style.display = "none";
    } else {
      snacks.style.display = "block";
    }
  }
  var dairy = document.getElementsByClassName("dairy");
  for (var i = 0; i < dairy.length; i++) {
    var dairy = dairy[i];
    if (dairy.innerHTML.toLowerCase().indexOf(query) === -1) {
      dairy.style.display = "none";
    } else {
      dairy.style.display = "block";
    }
  }
  var fruits = document.getElementsByClassName("fruits");
  for (var i = 0; i <fruits.length; i++) {
    var fruits = fruits[i];
    if (fruits.innerHTML.toLowerCase().indexOf(query) === -1) {
      fruits.style.display = "none";
    } else {
      fruits.style.display = "block";
    }
  }
  var vegetables = document.getElementsByClassName("vegetables");
  for (var i = 0; i <vegetables.length; i++) {
    var vegetables = vegetables[i];
    if (vegetables.innerHTML.toLowerCase().indexOf(query) === -1) {
      vegetables.style.display = "none";
    } else {
      vegetables.style.display = "block";
    }
  }
  
}
  // Get all the images in the boxes
  var images = document.getElementsByTagName("img");
  
  // Loop through the images and hide those that don't match the search query
  for (var i = 0; i < images.length; i++) {
    var alt = images[i].getAttribute("alt").toLowerCase();
    if (alt.indexOf(query) === -1) {
      images[i].style.display = "none";
    } else {
      images[i].style.display = "block";
    }
  }
  


