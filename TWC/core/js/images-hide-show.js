/* ==========================================================================
    Images - Hide/Show -- Version: 1.9.0.0 - Updated: 3/5/2014
   ========================================================================== */

$(function() {
	$('.icon-camera').click(function() {
		if ($(this).parent().next().is(':hidden')) {
			$(this).parent().next().show();
			htmlText = 'Hide';
		} else {
			$(this).parent().next().hide();
			htmlText = 'Show';
		}

		$(this).html('<a analyticsname="test" href="#"><span>' + htmlText + ' All</span></a>');
		return false;
	});
});