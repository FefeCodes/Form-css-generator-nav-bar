const menuIcon = document.getElementById("menu-icon")
const mobileMenu = document.getElementById("mobile-menu")
const closeIcon = document.getElementById("close-icon")

menuIcon.addEventListener("click", function(){
  mobileMenu.style.display = "flex"
})


closeIcon.addEventListener("click", function(){
   mobileMenu.style.display = "none"
})