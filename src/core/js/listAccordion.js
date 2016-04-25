/* ==========================================================================
    List Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$(function(){
	$('.listAccordion .listAccordionItem-title').click(function() {
		$(this).parent().find('div.details').slideToggle(function() {
			if ($(this).is(':hidden')) {
				$(this).parent().children('.listAccordionItem-title').removeClass('js-active');
			} else {
				$(this).parent().children('.listAccordionItem-title').addClass('js-active');
			}
		});

		return false;
	});
	// Prevent button click from toggling details
	$('.listAccordion .listAccordionItem .cta').click(function(event) {
		event.stopPropagation();
	});
});