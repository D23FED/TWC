	$('.gallery-viewMore .icon-camera').click(function(){
		if($(this).hasClass('hide-all')){
			$(this).removeClass('hide-all');
			$('figure').show();
			htmlText = 'Hide';
		} else {
			$(this).addClass('hide-all');
			$('figure').hide();
			htmlText = 'Show';
		}

		$(this).html('<a analyticsname="test" href="#"><span>'+htmlText+' All</span></a>');
		return false;
	});

	var contentLen = $('.gallery-viewMore .25-25-25-25').length;

	if(contentLen < 2){
		$('.gallery-viewMore .viewMore').hide();
	}

	$('.gallery-viewMore .25-25-25-25').each(function(i){
		if(i > 2){
			$(this).css({'display':'none'});
		}
	});

	$('.gallery-viewMore .viewMore').click(function(){
		$('.gallery-viewMore .25-25-25-25').each(function(i){
			if(i > 1){
				$(this).slideToggle(function(){
					if($(this).is(':hidden')){
						$('.gallery-viewMore .viewMore').first().text('View More');
						$('.gallery-viewMore .viewMore span').removeClass('expanded').removeClass('icon-angle-up').addClass('icon-angle-down');
					} else {
						$('.gallery-viewMore .viewMore').first().text('View Less');
						$('.gallery-viewMore .viewMore span').addClass('expanded').removeClass('icon-angle-down').addClass('icon-angle-up');
					}
				});
			}
		});
		return false;
	});
