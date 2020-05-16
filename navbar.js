var navbutton = document.getElementById("navbutton");
// Icon Menu gloal for displayChecker() and Navbutton function
var iconMenu = document.getElementById("iconMenu");
var styl3 = window.getComputedStyle(iconMenu);
var displayMenu = styl3.getPropertyValue('display');

navbutton.onclick= function(){
  var ul = document.getElementsByTagName("ul")[0];
  var style = window.getComputedStyle(ul);
  var displayUl = style.getPropertyValue('display');
  if (displayUl && displayMenu == "none"){
    ul.style.display = "block";
    iconMenu.style.display = "block";
  }
  else if (displayUl && displayMenu =="block"){
    ul.style.display = "none";
    iconMenu.style.display = "none";
  }
}

function displayChecker(){
  var oldheightMenu;
  var heightMenu = styl3.getPropertyValue('height');
  if (displayMenu == "none"){
     heightMenu = oldheightMenu;
     iconMenu.styl3.height = "0";
  }
}