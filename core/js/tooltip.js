$(function(){
	if($(window).width() <= mediumBreakPoint){
		$('.tooltip-text').css("display","none");
	}

	$('.tooltip').click(function(){
		if($(window).width() <= mediumBreakPoint){
			if($(this).find('.tooltip-text').is(":hidden")){
				$('.tooltip-text').hide();
				$(this).find('.tooltip-text').show();
				setTimeout(function(){
				  $('.tooltip-text').hide();
				},3000);
			} else {
				$(this).find('.tooltip-text').hide();
			}
		}
		
		return false;
	});
});