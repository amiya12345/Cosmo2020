



$(document).ready(function() {
  			$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('nav_class');
    } else {
      $('nav').removeClass('nav_class');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('nav').addClass('nav_class');
  }
    


            
});
//justified Gallery
$(window).on("load",function(e){
  $("#gallery").justifiedGallery({
    rowHeight:200,
    lastRow: "nojustify",
    margins:10
  });
   
})
new WOW().init();






