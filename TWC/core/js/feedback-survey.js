/* ==========================================================================
    Feedback Survey -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$(function() {
	$("#feedback-survey-feedback").click(function() {
		if ($('#feedback-yes').is(':checked')) {
			$('.initiate-feedback').hide();
			$('.feedback-survey-yes-response').show();
		} else {
			$('.improve-feedback').show();
			$('#feedback-survey-feedback:first').hide();
		}
		return false;
	});
	$('input[name="YesNo"]').click(function() {
		$('#feedback-survey-feedback').removeClass('disabled').addClass('js-omega');
	});
	$('#improve-feedback-survey-feedback').click(function() {
		$('.initiate-feedback').hide(); /* Honeypot validation */
		if ($('#fillit input').val() === '') {
			$('.improve-feedback').hide();
			$('.feedback-survey-no-response').show();
		} else {}
		return false;
	});
});