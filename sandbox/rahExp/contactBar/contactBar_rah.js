// Raymond Heredia / 11-10-15
// This is the A/B switch for the contactBar to appear.
// It is triggered when the #nonStick hits the top of the screen.

$(function(){
	var nonStick = $('#nonStick').offset().top;
          
	$(window).scroll(function(){
	    if ($(window).scrollTop() > nonStick ) {
	        $('#cta').css({
	        	position: 'fixed',
	        	top: '0px',
	        	display: 'block'
	        });
	    } else {
            $('#cta').css({
            	position: 'static',
            	top: '0px',
            	display: 'none'
            });
	    }
	});
	
});