/* ==========================================================================
    Sticky -- Version: 1.9.0.1 - Updated: 1/6/2014
   ========================================================================== */
if (!!$('.sticky').offset()) {
	$(function(){
		var stickyTop = $('.sticky').offset().top;

		var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyTop){
			$('.sticky').addClass('js-fixed');
			$('.spacer').css({'height':$('.sticky').height()+'px'});
		} else {
			$('.sticky').removeClass('js-fixed');
			$('.spacer').css({'height':'0px'});
		}
	};

	stickyNav();

		$(window).scroll(function(){
			stickyNav();
		});
	});
}