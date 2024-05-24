window.addEventListener('scroll', (e) => {
    if (window.scrollY > 50) {
        document.getElementsByClassName("header_style_01")[0].classList.add("fixed-menu");
    } else {
        document.getElementsByClassName("header_style_01")[0].classList.remove("fixed-menu");
    }
});


$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });