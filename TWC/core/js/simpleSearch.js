$(function() {
	$(window).bind("load", function() {
		$('.filters').show();
	});

	if ($(window).width() > mediumBreakPoint) {
		$('.simpleSearch .filter-list').slideDown();
	} else {
		$(".searchInput").insertBefore('.left-rail-content');
		$(".searchInput").clone().addClass('desktop-hidden').insertAfter('.left-content');
	}

	$('.filter-list ul li').click(function() {
		if (!$(this).hasClass('icon-remove-sign')) {
			$('.filter-applied').show();
			$('.filter-list ul li').hide();
			$(this).addClass('twc-icon-before').addClass('icon-remove-sign').show();
		} else {
			$('.filter-applied').hide();
			$(this).removeClass('twc-icon-before').removeClass('icon-remove-sign');
			$('.filter-list ul li').show();
		}
		return false;
	});

	$('.remove-filter').click(function() {
		$('.filter-applied').hide();
		$('.filter-list ul li').removeClass('twc-icon-before').removeClass('icon-remove-sign').show();

		return false;
	});

	$('.filter-toggle').click(function() {
		$('body').find('.filter-list').slideToggle(function() {
			if ($(this).is(":hidden")) {
				$('.filter-toggle').removeClass('icon-angle-up').addClass('icon-angle-down');
			} else {
				$('.filter-toggle').removeClass('icon-angle-down').addClass('icon-angle-up');
			}
		});
		return false;
	});
});