/* ==========================================================================
    Footer(mobile) Toggle -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
$('div[class*="twc-col3_333333-c"]').each(function() {
	var dropdown = $(this);
	$('h3.label', dropdown).click(function() {
		var label = $(this);
		$(label).toggleClass('js-current');
		$('h3.label').not(label).removeClass('js-current');
		var menu = $('ul', dropdown);
		$('ul').not(menu).removeClass('js-mobile');
		menu.toggleClass('js-mobile');
	});
});