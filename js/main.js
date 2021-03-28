(function($){
	'use strict';
  //Menu
  $('.menu-icon i').on('click', function(){
    $('.menu').slideToggle();
    $('.menu ul li ul').slideUp();
  })

  $('.menu ul li').on('click', function(){
    $('.menu ul li ul').slideUp();
    $(this).children('ul').slideDown();
  })

  $('.menu ul ul').parent('li').children('a').append(' <i class="fas fa-caret-down"></i>');
//Owl carousel home
  $('.header-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false, /*(<>) ei 2 ta niche ashbe na*/
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
//Owl carousel Team
    $('.team-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false, /*(<>) ei 2 ta niche ashbe na*/
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

  //isotop
  $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
    })

  $('.service-button button').on('click',function(){
     $('.service-button button').removeClass('current');
     $(this).addClass('current');
  })

})(jQuery);