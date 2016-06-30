$(function() {
	$('.rolloverCaptions figure').click(function() {
		if ($(window).width() <= mediumBreakPoint && isTouch == true) {
			$('.rolloverCaptions').addClass('touch');

			if ($(this).children('figcaption').is(':hidden')) {
				$('.rolloverCaptions figure figcaption').hide();
				$(this).children('figcaption').show();
			} else {
				$(this).children('figcaption').hide();
			}
		}
	});
});

//detect for touch
if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
	isTouch = true;
} else {
	isTouch = false;
}