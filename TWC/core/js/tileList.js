/* ==========================================================================
    Tile List -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
if ($(window).width() < 1099) {
	$('.tileList li').addClass('js-mobile');
} else {
	$('.tileList li').hover(function() {
		$(this).next().toggleClass('js-nextHover');
	});
}