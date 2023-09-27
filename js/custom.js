/* -----| script |-------*

 * 01. Mobile call

 * 02. Mobile Filter

 * 03. Km. Select Dropdown

 ** 3.1 Mobile view Km select jQuery Ui destroy 

 * 04. Search Auto Suggess

 * 05. Location Search Auto Suggess

 * 06. Home Main Slider

 * 07. Category Add Banner Slider

 * 08. Masonry Category List

 * 09. Scroll back to top

 * 10. FAQ Accordions 

 */





$(document).ready(function() {  


/* Mobile menu */  

$('.menuIcon').click(function() {

        $(this).toggleClass('menu-close');

        $('.navigationBar').toggleClass('slideMenu');

        $('body').addClass('bodyFixed');

    });


$('.sidebar-overlay, .closeMenu').click(function() {

        $('.menuIcon').removeClass('menu-close');

        $('.navigationBar').removeClass('slideMenu');

        $('body').removeClass('bodyFixed');


  });



$('.menuMain li:has(ul)').prepend('<span class="arrow"></span>'); 

$('.arrow').click(function() {  

  $(this).siblings('ul').slideToggle('slow'); 

  $(this).toggleClass('minus'); 

});

$('.mob_filter').click(function(){
  $('.sidebarDiv').addClass('openFilter');
  $('body').addClass('bodyFixed');   
});

$('.sidebarTitle').click(function(){
  if($('.sidebarDiv').hasClass('openFilter')){
    $('.sidebarDiv').removeClass('openFilter');
    $('body').removeClass('bodyFixed');   
  }   
});

$('.homeSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  fade: true
});

$(".latestnews_slider").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,        
        centerPadding: '29.0rem',        
        responsive: [                        
            {
                breakpoint: 1025,
                settings: {
                    centerPadding: '155px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 350,
                settings: {
                    centerPadding: '0px',
                }
            }
        ]
    });

//companylogo
    $('.logo_slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        //appendArrows: '.tesslideArrows',
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1                    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1                    
                }
            }
        ]
    });


$('.testimonial_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  speed: 1500  
});

$(document).on("click", ".qtyplus", (function(s) {
        s.preventDefault();
        var i = parseInt($(this).siblings(".qty").val());
        isNaN(i) ? $(this).siblings(".qty").val(1) : $(this).siblings(".qty").val(i + 1)
    }))
$(document).on("click", ".qtyminus", (function(s) {
        s.preventDefault();
        var i = parseInt($(this).siblings(".qty").val());
        !isNaN(i) && i > 1 ? $(this).siblings(".qty").val(i - 1) : $(this).siblings(".qty").val(1)
    }))


/* Range slider code */

$( "#diet_slider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 400,
      slide: function( event, ui ) {
        $( "#diet_slider_total" ).text("$" +  ui.value );
      }
    });
    $( "#diet_slider_total" ).text( $( "#diet_slider" ).slider( "value" ) );

$( "#energy_slider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 500,
      slide: function( event, ui ) {
        $( "#energy_slider_total" ).text("$" +  ui.value );
      }
    });
    $( "#energy_slider_total" ).text( $( "#energy_slider" ).slider( "value" ) );

$( "#driving_slider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 500,
      slide: function( event, ui ) {
        $( "#driving_slider_total" ).text("$" +  ui.value );
      }
    });
    $( "#driving_slider_total" ).text( $( "#driving_slider" ).slider( "value" ) );


$( "#waste_slider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 500,
      slide: function( event, ui ) {
        $( "#waste_slider_total" ).text("$" +  ui.value );
      }
    });
    $( "#waste_slider_total" ).text( $( "#waste_slider" ).slider( "value" ) );


/*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/

$('.scrollTop').click(function() {

    $('html, body').animate({scrollTop: 0}, 800);

    return false;

});



$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

        $('.scrollTop').fadeIn();

        $('.headerMain').addClass('has_sticky');
        $('body').addClass('sticky_header');

    } else {

        $('.scrollTop').fadeOut();

        $('.headerMain').removeClass('has_sticky'); 
        $('body').removeClass('sticky_header');

    }

}); 


/* ------| A. Svg Rendering In Browser |--------- */



function svgConvert(svgClass) {

    $(svgClass).each(function() {        

        var $img = $(this);

        var imgID = $img.attr('id');

        var imgClass = $img.attr('class');

        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {

          /* Get the SVG tag, ignore the rest */

          var $svg = $(data).find('svg');

          /* Add replaced image's ID to the new SVG */

          if (typeof imgID !== 'undefined') {

              $svg = $svg.attr('id', imgID);

          }

          /* Add replaced image's classes to the new SVG */

          if (typeof imgClass !== 'undefined') {

              $svg = $svg.attr('class', imgClass + ' svgIcon');

          }

          $svg = $svg.attr('fill', 'currentColor');

          /* Remove any invalid XML tags as per http://validator.w3.org */

          $svg = $svg.removeAttr('xmlns:a');

          /* Replace image with new SVG*/

          $img.replaceWith($svg);

      }, 'xml');

    });

}

});