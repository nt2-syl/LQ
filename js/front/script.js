jQuery(document).ready(function($) {
	"use strict";
	
	//Counter
	if ($('.counter-wraper').length > 0) {
		$('.counter-wraper').each(function(index) {
			var $this = $(this);
			var waypoint = $this.waypoint({
				handler: function(direction) {
					$this.find('.counter-digit:not(.counted)').countTo().addClass('counted');
				},
				offset: "90%"
			});
		});
	}
	
	//Gallery Slider
	var gallery_slider = new MasterSlider();
		gallery_slider.control('arrows');
		gallery_slider.setup('gallery-slider' , {
			width:1170,
			height:662,
			space:0,
			loop:true,
			view:'wave',
			layout:'partialview'
		});
		
	var gallery_slider_2 = new MasterSlider();
		// slider controls
		gallery_slider_2.control('arrows'     ,{ autohide:true, overVideo:true  });
		// slider setup
		gallery_slider_2.setup("gallery-slider-2", {
			width           : 1170,
			height          : 500,
			minHeight       : 0,
			space           : 0,
			start           : 1,
			grabCursor      : true,
			swipe           : true,
			mouse           : true,
			keyboard        : false,
			layout          : "partialview",
			wheel           : false,
			autoplay        : false,
			instantStartLayers:false,
			loop            : true,
			shuffle         : false,
			preload         : 0,
			heightLimit     : true,
			autoHeight      : false,
			smoothHeight    : true,
			endPause        : false,
			overPause       : true,
			fillMode        : "fill",
			centerControls  : false,
			startOnAppear   : false,
			layersMode      : "center",
			autofillTarget  : "",
			hideLayers      : false,
			fullscreenMargin: 0,
			speed           : 20,
			dir             : "h",
			parallaxMode    : 'swipe',
			view            : "flow"
		});

		
		window.masterslider_instances = window.masterslider_instances || [];
		window.masterslider_instances.push( gallery_slider_2 );
		
	//Testimonial Slider
	var testimonial_slider = new MasterSlider();
	testimonial_slider.control("bullets", {autohide:false});
	testimonial_slider.setup("masterslider-testimonial", {
		height:10,
		centerControls:false,
		space:5,
		layout:"fillwidth",
		autoHeight:true,
		loop:true
	});
	
	//Team Slider
	var team_slider = new MasterSlider();
		team_slider.setup('team-slider' , {
			loop:true,
			width:500,
			height:500,
			speed:10,
			view:'focus',
			preload:'all',
			space:60,
			autoplay:true,
			autoHeight:true,
		});
		
	//Team Slider 2
	if($('.detail-character-container').length > 0) {
		var chswiper = new Swiper('.detail-character-container', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 4,
			paginationClickable: true,
			spaceBetween: 30,
			loop: true,
			speed:1000,
			//autoplay:true,
			parallax:true,
			breakpoints: {
				480: {
				  slidesPerView: 1,
				  spaceBetweenSlides: 20
				},
				767: {
				  slidesPerView: 2,
				  spaceBetweenSlides: 30
				}
			}
		});
	}
		
	if($('.section-fullscreen').length > 0) {
		introHeight();
		$(window).bind('resize', function() {
			//Update slider height on resize
			introHeight();
		});
	}
	
	//Timeline
	if($("#timeline").length > 0) {
		$("#timeline").timelinr({
			orientation: 	'vertical',
			issuesSpeed: 	300,
			datesSpeed: 	100,
			arrowKeys: 		'false',
			startAt:		1
		})
	}
	
	if ($(window).width() > 767) {
		$(".tab_content:first").show();
		$(".tabs .tab").click(function() {
			$(".tabs .tab").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
		});
	}
	
	//Magnific Popup
	if ($(".gallery-item").length > 0) {
		$('.gallery-item').magnificPopup({
			gallery: {
				enabled: true
			}
		});
	}
	
	if($('.region-header .menu-transparent').length > 0) {
		$('.region-header').addClass('header-transparent');
	}
	
	$('.show-hide').on('click', function (e) {
		$(this).toggleClass('show-map');
		
		if($(this).hasClass('show-map')) {
			$(this).html('Show Map <i class="fa fa-map-marker"></i>');
			$(".contact-info-wrapper").fadeIn();
		} else {
			$(this).html('Show Info <i class="fa fa-paper-plane"></i>');
			$(".contact-info-wrapper").fadeOut();
		}
	});
	
	$('.toggle-nav').on('click', function (e) {
		$('ul.active-menu-default').toggleClass('show');
		$('.menu-olay').toggleClass('show');
		$('.close-menu').toggleClass('show');
	});
	
	$('.menu-olay, .close-menu').on('click', function (e) {
		$('ul.active-menu-default').removeClass('show');
		$('.close-menu').removeClass('show');
		$('.menu-olay').removeClass('show');
	});
	
	function introHeight() {
		var wh = $(window).height();
		$('.section-fullscreen').css({ height: wh });
	}
});