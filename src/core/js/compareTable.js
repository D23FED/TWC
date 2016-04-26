$(function(){
	adjustSettings();

	$('.compareTable .viewDetail').click(function(){
		if($(window).width() <= smallBreakPoint){
			$('.compareTable .desc-details').show();
			$(this).closest('.table').next('.details-content').slideToggle();
		} else {
			$('.compareTable .desc-details').hide();
			$(this).closest('.table').next('.details-content').slideToggle();
		}

		$(this).toggleClass('active');

		return false;
	});

	$('.compareTable .viewMore').click(function() {
		$(this).find('div.desc-details').slideToggle(function() {
			if ($(this).is(':hidden')) {
				$(this).parent().removeClass('js-active');
			} else {
				$(this).parent().addClass('js-active');
			}
		});
	});

	$(window).resize(function(){
		if($(window).width() >= smallBreakPoint){
			$('.compareTable .package').find('span').hide();
			$('.compareTable .desc-details').hide();
			$('.compareTable .tempBadge').hide();
		} else {
			$('.compareTable .package').find('span').show();
			$('.compareTable .desc-details').show();
			$('.compareTable .tempBadge').show();
		}
	});
});

function adjustSettings(){
	$('.compareTable ul.table').each(function(){
		$('<span>'+$(this).find('.feature').text()+'</span>').appendTo($(this).find('.package')).hide();
		$('<li class="desc-details h6">'+$(this).find('.desc').text()+'</li>').prependTo($(this).next('ul')).hide();
		$('<span class="tempBadge">'+$(this).find('.badge').html()+'</span>').prependTo($(this).next('ul')).hide();
	});
}