/* ==========================================================================
    Button Checkbox -- Version: 1.9.0.1 - Updated: 2/4/2014
   ========================================================================== */
$(function() {
	// Determine if input is already 'checked' on page load/reload
	$('label').filter(function() {
		return $(this).find('input').is(':checked');
	}).addClass('js-checked');
	$('input').click(function() {
		$('input:not(:checked)').parent('label').removeClass("js-checked");
		$('input:checked').parent('label').addClass("js-checked");
	});
});