/* ==========================================================================
    Left Rail List to Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function() {
	$('.sideAccordion .expandableHybrid ul li').each(function() {
		if ($(this).has('ul').length) {
			$(this).addClass('js-expandable');
		} else {
			$(this).addClass('js-notexpandable');
		}
	});

	if ($(window).width() > mediumBreakPoint) {
		$('.leftRail-list .leftRail-topics ul li:first').addClass('js-active').addClass('js-expanded');
		$('.leftRail-list .topics-content-container').css({
			'display': 'block'
		});
		$('.leftRail-list .leftRail-topics ul li:first').find('ul').clone().appendTo('#topic-content');
	} else {
		$('.leftRail-list .leftRail-topics ul li:first').addClass('js-active').addClass('js-expanded').next().slideDown();
	}

	$('.leftRail-list li.topic:has(ul li.topic)').children('h5').addClass('arrow').parent().addClass('multi');
	//$('.multi').find('li:not(.topic)').addClass('subNav');

	$('.leftRail-list .topic').mouseover(function() {
		$('.leftRail-list .topic').removeClass('onTopic');
		$(this).addClass('onTopic');
		if ($(window).width() > mediumBreakPoint) {
			$('.leftRail-list .topic').removeClass('js-expanded').removeClass('js-active');
			$(this).addClass('js-active');

			if (!$(this).hasClass('multi')) {
				$('.leftRail-list #topic-content').html('').css({
					'display': 'block'
				});
				$(this).find('ul:first').clone().show().appendTo('#topic-content');
			} else {
				//$(this).find('ul').clone().hide('.topic').show('.subNav').appendTo('#topic-content');
			}
		}
	});

	$('.leftRail-list .leftRail-topics ul li h5').click(function() {
		$('.leftRail-list .leftRail-topics li.js-active').removeClass('js-active');

		$(this).parent('li').addClass('js-active');
		$(this).parent('li').toggleClass('js-expanded');
		$(this).next('ul').slideToggle();

		if ($(window).width() <= mediumBreakPoint) {
			$(this).parent().siblings().removeClass('js-expanded').children().next().slideUp();

			if (!$(this).parent().hasClass('js-expanded')) {
				$(this).siblings('ul').children('li.topic.js-expanded').children('ul').slideUp();
			}
		}

		return false;
	});

	$(window).resize(function() {
		adjustContent();
	});
});

function adjustContent() {
	if ($(window).width() > mediumBreakPoint) {
		$('.leftRail-list #topic-content').html('');
		$('.leftRail-list li.onTopic').find('ul').clone().appendTo('#topic-content');
	} else {
		$('.leftRail-list li.topic').find('ul').hide();
		$('.leftRail-list .js-active').find('ul').show();
	}
}