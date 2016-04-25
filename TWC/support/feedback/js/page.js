/* ==========================================================================
   jQuery code for Feedback
   
   Author: Max Quattromani
   Version: 1.0.1 - Updated: 12/26/13
   ========================================================================== */
   
$(function() {
	
	$('#submit').click(function() {
		$('.feedback-container').hide();
		$('.feedback-response').fadeIn();
		
		return false;
	});
	
});