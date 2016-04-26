/* ==========================================================================
    Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$('.accordion .expandable ul li').each(function() {
	if ($(this).has('ul').length) {
		$(this).addClass('js-expandable');
	} else {
		$(this).addClass('js-notexpandable');
	}
	//check for expand cookie and slideDown() active
	if ($.cookie('js-expand') && $(this).find('.expandable h6').text() === $.cookie('js-expand')) {
		$(this).find('ul').slideDown();
	}
});
//open first nav item if no cookie exists
if (!$.cookie('js-expand')) {
	$('.accordion .expandable ul .js-expandable').first().addClass('js-active').find('ul').slideDown();
}
$('.accordion .expandable h6').click(function() {
	var categoryText = $(this).text();
	$(this).parent().addClass('js-active').find('ul').slideToggle(function() {
		$.cookie('js-expand', categoryText);
		if ($(this).is(':hidden')) {
			$(this).parent().removeClass('js-active');
			$.cookie('js-expand', null);
		}
	});
});