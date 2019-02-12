jQuery(document).ready(function($) {
	"use strict";

	$('.masonry-grid-post').each(function() {
		var $this = $(this);
		var $filter = $this.parent().find('.grid-filter');
		$this.imagesLoaded(function() {
			$this.isotope({
				itemSelector: '.masonry-item'
			});
		});

		$filter.find('a').on("click", function(e) {
			e.preventDefault();
			$filter.find("a").removeClass('active');
			$(this).addClass('active');
			var data_filter = $(this).data('filter');
			$this.isotope({
				filter: data_filter
			});
		});
	});

  $('.masonry-grid-galerie').each(function() {
    var $this = $(this);
    $this.imagesLoaded(function() {
      $this.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          gutterWidth: '.gutter-sizer',
          columnWidth: '.grid-sizer'
        }
      });
    });
  });

});
