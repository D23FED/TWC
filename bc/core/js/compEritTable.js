/* ==========================================================================
    CompEritTable -- Version: 1.9.0.4 - Updated: 3/3/2014
   ========================================================================== */

$(function(){
	$(window).bind("load", function(){
		adjustSize();
		adjustSettings();
	});

	$(window).resize(function(){
		adjustSize();

		if($(window).width() >= smallBreakPoint){
			$('.compEritTable .package').find('span').hide();
			$('.compEritTable .desc-details').hide();
			$('.compEritTable .tempBadge').hide();
		} else {
			$('.compEritTable .package').find('span').show();
			$('.compEritTable .desc-details').show();
			$('.compEritTable .tempBadge').show();
		}
	});

	$('.compEritTable .viewDetail').click(function(){
		$(this).closest('.compEritTable').toggleClass('js-active');

		if($(window).width() <= smallBreakPoint){
			$('.compEritTable .desc-details').show();
			$(this).closest('.table').next('.details-content').slideToggle();
		} else {
			$('.compEritTable .desc-details').hide();
			$(this).closest('.table').next('.details-content').slideToggle();
		}
		return false;
	});
});

function adjustSettings(){
	$('.compEritTable ul.table').each(function(){
		$('<span>'+$(this).find('.feature').text()+'</span>').appendTo($(this).find('.package'));
		$('<li class="desc-details h6">'+$(this).find('.desc').text()+'</li>').prependTo($(this).next('ul'));
		$('<span class="tempBadge">'+$(this).find('.badge').html()+'</span>').prependTo($(this).next('ul'));
	});
}

function adjustSize(){
	if($(window).width() <= mediumBreakPoint){
		$('.compEritTable.five-column-compare .feature').height($('.compEritTable.five-column-compare .package').height());
		$('.compEritTable.five-column-compare .order').height($('.compEritTable.five-column-compare .pricing').height());
		$('.compEritTable.three-column-compare .desc').height($('.compEritTable.three-column-compare .package').height());
	} else {
		$('.compEritTable.five-column-compare .feature').attr('style','');
		$('.compEritTable.five-column-compare .order').attr('style','');
		$('.compEritTable.three-column-compare .desc').attr('style','');
	}
}