/* ==========================================================================
    Nav(mobile) -- Version: 2.0.0.0 - Updated: 8/18/2014
   ========================================================================== */
$(function(){
	$('.twc-mobile-navigation ul li').each(function(index){
		if($(this).find('ul').length){
			$(this).addClass('js-expandable');
		}
	});

	$('.twc-mobile-navigation .js-expandable .smartLink').click(function(){
		if(!$(this).parent().hasClass('js-active')){
			$('.twc-mobile-navigation ul li .js-expandable').removeClass('js-active');
			$('.mobile-megamenu').slideUp();
			$(this).parent().find('ul').slideDown();
			$(this).parent().addClass('js-active');
		} else {
			$('.mobile-megamenu').slideUp();
			$(this).parent().removeClass('js-active');
		}

		return false;
	});
	$('input[name=navradio]').click(function(e) {
		var radChecked = $(this).data('checked') || false;
		$('input[name=navradio]').data('checked', false);
		if (radChecked) {
				this.checked = false;
				$(this).data('checked', false);
		} else {
			 this.checked = true;
			 $(this).data('checked', true);
		}
	});

  $(document).on({ 'touchstart' : function(event){
    if(!$(event.target).closest('.twc-new-nav').length){
      $('.twc-new-nav .desktop-hidden').not(this).prop('checked', false);
    }}
  });

  $(document).click(function(event){
    if(!$(event.target).closest('.twc-new-nav').length){
      $('.twc-new-nav .desktop-hidden').not(this).prop('checked', false);
    }
  });

  $('.twc-new-nav .mobile-nav').on('change', function() {
    $('.twc-new-nav .mobile-nav').not(this).prop('checked', false);
  });

// Desktop display for menu items
  $(window).resize(function(){
    if($(window).width() > 768){
      $('.twc-new-nav .labelList .label').next('ul').show();
    } else {
      $('.twc-new-nav .labelList .label').next('ul').hide();
      $('.js-active').next('ul').show();
    }
  });

// Mobile accordion for menu items
  $('.twc-new-nav .labelList .label').click(function(){
    if($(window).width() <= 768){
      if($(this).hasClass('js-active')){
        $('.twc-new-navigation .labelList .label').removeClass('js-active').next('ul').slideUp();
      } else {
        $('.twc-new-navigation .labelList .label').removeClass('js-active').next('ul').slideUp();
        $(this).addClass('js-active').next('ul').slideToggle();
      }
    }
    return false;
  });

// Close all menus on orientation change
  $(window).resize(function(){
    $('[id^="mobile-menu-"]').prop('checked', false);
    // alert("Test");
  });
});

// New Header JS

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
});