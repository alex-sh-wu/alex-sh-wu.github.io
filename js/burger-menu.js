'use strict';

window.addEventListener("load", function() {
  var burger_menu_logo = document.getElementById("menu");
  var burger_menu = document.getElementById("burger-menu");
  burger_menu.style.left = "-150px";

  //alert("This website is optimized for Google Chrome only. Please switch your browser for a better viewing experience.");

  var burger_menu_items = document.getElementsByClassName("options")[0].children;
  if (window.location.host !== "") {
    var me = document.getElementsByClassName("person-name");
    me[0].href = '/';
    me[1].href = '/';
    burger_menu_items[0].children[0].href = '/';
  }
  for (var i = 0; i < burger_menu_items.length; i++) {
    if (burger_menu_items[i].children[0].href === window.location.pathname) {
      burger_menu_items[i].classList.add("active");
      burger_menu_items[i].children[0].href = "#"
      break;
    }
  };

  burger_menu_logo.addEventListener("click", function() {
    if (burger_menu.style.left === "-150px") {
      burger_menu.style.left = "0px";
    }
    else {
      burger_menu.style.left = "-150px";
    }
  });
});
