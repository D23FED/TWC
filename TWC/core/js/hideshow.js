/* ==========================================================================
    Hide / Show -- Version: 1.9.0.2 - Updated: 3/21/2014
    ========================================================================== */

(function($) {

	$.fn.hideshow = function() {
		$('.hideshow-link').click(function() {
			if ($(this).parent().prev('.hideshow-container').is(':hidden')) {
				$(this).parent().removeClass('icon-angle-down').addClass('icon-angle-up');
				$(this).parent().prev('.hideshow-container').show();
				htmlText = 'View less';
			} else {
				$(this).parent().prev('.hideshow-container').hide();
				$(this).parent().removeClass('icon-angle-up').addClass('icon-angle-down');
				htmlText = 'View more';
			}

			$(this).html('<a href=""><span>' + htmlText + '</span></a>');
			return false;
		});
	}

}(jQuery));

$('.hideshow').hideshow();