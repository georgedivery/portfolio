;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		//===========================================
		// test
		//===========================================
		
		$('.go_to').on('click', function (e) {
			e.preventDefault() 
			var target = $(this).attr('href')
			 $('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);
		})

	}); //jQuery end
})(jQuery, window, document); 

 