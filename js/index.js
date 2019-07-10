$(document).ready(function(){
  $("h1").fadeOut(30).fadeIn(1000);

  $(".close, .hamburger").click(function(e) {
    $("nav ul").toggleClass("open-nav");
    e.preventDefault();
  })
});
