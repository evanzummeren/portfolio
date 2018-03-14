(function($) {
	
	"use strict";
	
	function slide_show(slide_number) {
		$('#namro-slider .slide-img[data-current-slide='+ slide_number +']').addClass('active');
		$('#namro-slider .slide-item[data-current-slide='+ slide_number +']').addClass('active');
	}
	
	$(document).ready(function() {
		
		// initialize slick
		$('#namro-slider').slick({
            autoplay: false,
            autoplaySpeed: 9000,
            lazyLoad: 'ondemand',
            infinite: true,
            fade: false,
            slide: '.slide-item',
            slidesToShow: 2,
            slidesToScroll: 2,
            focusOnSelect: false,
            arrows: true,
			prevArrow: '<button class="slick-prev slick-arrow" type="button" data-role="none" role="button" aria-required="false"><span class="ion-ios-arrow-thin-left"></span></button>',
			nextArrow: '<button class="slick-next slick-arrow" type="button" data-role="none" role="button" aria-required="false"><span class="ion-ios-arrow-thin-right"></span></button>',
            dots: false,
            useTransform: false,
			responsive: [{
				breakpoint: 901,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
        });

        slide_show(0);
		
        $('#main-ccontent').fitVids();
        
        $('.slide-content').on( 'mouseenter', function() {

            var current_item = $(this).closest('.slide-item').data("slickIndex");

            $('#namro-slider .slide-img:not([data-current-slide=' + current_item + '])').removeClass('active');
            $('#namro-slider').find('.slide-img[data-current-slide=' + current_item + ']').addClass('active');

            $('#namro-slider .slide-item:not([data-current-slide=' + current_item + '])').removeClass('active');
            $('#namro-slider .slide-item[data-current-slide=' + current_item + ']').addClass('active');
        });
        
        $('#namro-slider').on('afterChange', function(event, slick, currentSlide) {
            $('#namro-slider .slide-img:not([data-current-slide=' + currentSlide + '])').removeClass('active');
            $('#namro-slider').find('.slide-img[data-current-slide=' + currentSlide + ']').addClass('active');

            $('#namro-slider .slide-item:not([data-current-slide=' + currentSlide + '])').removeClass('active');
            $('#namro-slider .slide-item[data-current-slide=' + currentSlide + ']').addClass('active');
        });	
		
		// sidebar toggle
		$('.sidebar-toggle, .sidebar-overlay').click(function(e) {
			$('body').toggleClass('sidebar-slide');
			e.preventDefault();
		});

	});

})(jQuery);