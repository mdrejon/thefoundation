
(function ($) {
  "use strict";
  $(document).ready(function () {

 
// Report.......................................... start
        $('.hero-slider').owlCarousel({
              items: 1,
              margin: 20,
              loop: true,
              autoplay: true,
              animateOut: 'fadeOut',
              autoplayTimeout: 8000,
              dots: false,
              nav: true,
              //lazyLoad: true,
              // autoplayTimeout: 3000,
              //  autoplaySpeed: 3000, 
          });
          
        $('.image-gellary').owlCarousel({
                       items: 4,
                        margin: 20,
                        loop: true,
                        autoplay: true,
                        animateOut: 'fadeOut',
                        autoplayTimeout: 5000,
                        dots: false,
                        nav: true,
                        //lazyLoad: true,
                        // autoplayTimeout: 3000,
                        //  autoplaySpeed: 3000,
                        responsive: {
                        0: {
                            items: 1,
                            nav: false
                        },
                        600: {
                            items: 2,
                            nav: false
                        },
                        1000: {
                            items: 4,
                            nav: true,
                            loop: true, 
                        }
                    }
          });

        $('.testi-slider').owlCarousel({
                       items: 1,
                        margin: 20,
                        loop: true,
                        autoplay: true,
                        // animateOut: 'fadeOut',
                        autoplayTimeout: 5000,
                        dots: false,
                        nav: true,
                        //lazyLoad: true,
                        // autoplayTimeout: 3000,
                        //  autoplaySpeed: 3000, 
          });
// Report.......................................... end
// menu Hover.......................................... start
$(".dropdown").hover(

  function () {
    $(this).parent().addClass('active');
  }, 
  function () {
    $(this).parent().removeClass("active");
  }
)
$(".dropdown-2").hover(

  function () {
    $(this).parent().addClass('active');
  }, 
  function () {
    $(this).parent().removeClass("active");
  }
);
// menu hover.......................................... end

// Data Table.......................................... start
      $('#example').DataTable();
// Data Table.......................................... end
});

// Mobile-menu Trigger hover.......................................... start
  $(".close-menue").on('click', function(){
        $(".left-menu").removeClass("active");
        // $(".mobile_nav").removeClass("hide");
    }); 
  $(".mobile-menu").on('click', function(){
        $(".left-menu").addClass("active");
        // $(".mobile_nav").addClass("hide");

  });
// Mobile-menu Trigger hover.......................................... end


}(jQuery));

