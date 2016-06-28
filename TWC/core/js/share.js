/* ==========================================================================
    Share -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

//$(function(){
//adjustContent();

$('.cta#email').click(function() {
	$('.email-module').toggle();
	return false;
});

$('.email-module .close').click(function() {
	$('.email-module').toggle();
});

/*
	$(window).resize(function(){
		adjustContent();
	});

	function adjustContent(){
		if($(window).width() <= smallBreakPoint){
			$('.share-emailPrint').each(function(index){
				//$(this).find('.text').text('');
			});*
		}
	}
	/
});*/