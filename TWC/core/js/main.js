/* ==========================================================================
    Main -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function() {
	// Add classes to first and last of each list
	$('li:first-child').addClass('js-first');
	$('li:last-child').addClass('js-last');
	// set #custLoc checkbox :checked
	$('input#custLoc').data('checked', true);
	// Get current year
	//$('#year').text(('+new Date+').getFullYear());
	// Placeholder Support
	$('input[placeholder]').placeholder();

	$('.history_back').click(function(){
		window.history.back();
	});
});