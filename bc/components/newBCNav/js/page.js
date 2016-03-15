$(function(){
	// Click Device JS
	$('.closeDropdown').click(function(){
		theClick = $(this).attr('data-id');
		$('.'+theClick).slideToggle();
		return false;
	});

	$('.hiddenCheckboxLabel').click(function(){
		theClick = $(this).attr('data-id');
		$('.hiddenCheckboxDropdown').not('.'+theClick).slideUp();
		if($('.'+theClick).is(':visible')){
			$('.'+theClick).slideToggle();
		} else {
			$('.'+theClick).slideToggle();
		}

		return false;
	});

	// Touch Device JS
	$('.closeDropdown').on({ 'touchstart' : function(){
		theClick = $(this).attr('data-id');
		$('.'+theClick).slideToggle();
		return false;
	}
	});

	$('.hiddenCheckboxLabel').on({ 'touchstart' : function(){
		theClick = $(this).attr('data-id');
		$('.hiddenCheckboxDropdown').not('.'+theClick).slideUp();
		if($('.'+theClick).is(':visible')){
			$('.'+theClick).slideToggle();
		} else {
			$('.'+theClick).slideToggle();
		}

		return false;
		}
	});



	// Removed body tap close for click devices - 9/18/14
	// $(document).click(function(event){
	// 	if(typeof $(event.target).attr('data-id') == 'undefined'
	// 		&& !$(event.target).closest('.hiddenCheckboxDropdown').length
	// 		&& !$(event.target).closest('.twc-new-nav').length){
	// 		$('.hiddenCheckboxDropdown').hide();
	// 		return false;
	// 	}
	// });

	// Removed body tap close for touch devices - 9/18/14
	// $(document).on({ 'touchstart' : function(event){
	// 	theClick = $(event.target).attr('data-id');
	// 	if(typeof $(event.target).attr('data-id') == 'undefined'
	// 		&& !$(event.target).closest('.hiddenCheckboxDropdown').length
	// 		&& !$(event.target).closest('.twc-new-nav').length){
	// 		$('.hiddenCheckboxDropdown').hide();
	// 		return false;
	// 	}
	// 	}
	// });
});