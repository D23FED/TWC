/* ==========================================================================
    Wrapping Columns -- Version: 1.9.0.1 - Updated: 2/12/2014
   ========================================================================== */

$(function() {
	adjustContent();

	$(window).resize(function() {
		adjustContent();
	});

	$(document).on("click", ".mobile", function() {
		$(this).toggleClass('expanded');
		$(this).parent().children('ul').slideToggle();
	});

	function adjustContent() {
		if ($(window).width() <= smallBreakPoint) {
			$('li.heading h5').addClass('mobile').addClass('expanded');
			$('.content').hide();
		} else {
			$('.content').show();
			$('li.heading h5').removeClass('mobile').removeClass('expanded');
		}
	}
});