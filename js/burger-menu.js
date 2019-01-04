'use strict';

window.addEventListener("load", function() {
  var burger_menu_logo = document.getElementById("menu");
  var burger_menu = document.getElementById("burger-menu");
  burger_menu.style.left = "-150px";

  //alert("This website is optimized for Google Chrome only. Please switch your browser for a better viewing experience.");

  burger_menu_logo.addEventListener("click", function() {
    if (burger_menu.style.left === "-150px") {
      burger_menu.style.left = "0px";
    }
    else {
      burger_menu.style.left = "-150px";
    }
  });
});
