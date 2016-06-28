/* ==========================================================================
    Channel Line Up -- Version: 1.0.0.0 - Updated: 2/16/2015
   ========================================================================== */
$(function() {
	$('.clu .viewMore').click(function() {
		if ($(this).html() == "<span>See More Channels</span>") {
			$(this).html("<span>See Less Channels</span>");
			$('.clu table tbody').css({
				'max-height': '100%'
			});
		} else {
			$(this).html("<span>See More Channels</span>");
			$('.clu table tbody').css({
				'max-height': '350px'
			});
			$('html, body').animate({
				scrollTop: $("#cluSearchArea").offset().top
			}, 500);
		}

		return false;
	});
});