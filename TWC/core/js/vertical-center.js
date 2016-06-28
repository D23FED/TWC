$(function() {
	if ($(window).width() > mediumBreakPoint) {
		$('.columnControl').each(function(index) {
			if ($(this).has('vertical-center')) {
				var columnHeight = $(this).height();
				$(this).find('.vertical-center-wrapper').css({
					'height': columnHeight + 'px'
				});
			}
		});
	}

	$(window).resize(function() {
		$('.columnControl').each(function(index) {
			if ($(window).width() > mediumBreakPoint) {
				var columnHeight = $(this).height();
				$(this).find('.vertical-center-wrapper').css({
					'height': columnHeight + 'px'
				});
			} else {
				$(this).find('.vertical-center-wrapper').css({
					'height': 'auto'
				});
			}
		});
	});
});