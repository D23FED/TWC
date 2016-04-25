/*
$(function(){
	//on load
	adjustDisplay();

	$(window).resize(function(){
		adjustDisplay();
	});

	$(document).on('click', '.aSwap', function () {
		$('.aSwap').removeClass('here').next('ul').hide();
		$.cookie('expand',$(this).text());

		if($(this).next('ul').length){
			$(this).addClass('here').next('ul').show();
		} else {
			//relocate or do alt function

		}
	});
});

function adjustDisplay(){
	if($(window).width() > 500){
		$('#toSwap').removeClass('expandable').addClass('tabbedContent').show();
		$('.tabbedContent ul').first().attr('class','globalnav');


		$('h6').each(function(i){
			// test this later, GV 1:20pm change on monday
			if($(this).text() == $.cookie('expand')){
				$(this).replaceWith('<a href="#" class="aSwap here">'+$(this).text()+'</a>');
			} else {
				$(this).replaceWith('<a href="#" class="aSwap">'+$(this).text()+'</a>');
			}
		});
	} else {
		loopExpands();

		$('#toSwap').removeClass('tabbedContent').addClass('expandable').show();
		$('ul').removeAttr('id');

		$('.aSwap').each(function(){
			if($(this).text() == $.cookie('expand')){
				$(this).next('ul').css({'display':'block'});
			} else {
				$(this).next('ul').css({'display':'none'});
			}

			$(this).replaceWith('<h6>'+$(this).text()+'</h6>');
		});
	}
}
*/



    $('.tabbedAccordion ul').children('li').first().children('a').addClass('js-active')
        .next().addClass('js-open').show();

    $('.tabbedAccordion ul').on('click', 'li > a', function() {

      if (!$(this).hasClass('js-active')) {

        $('.tabbedAccordion ul .js-open').removeClass('js-open').hide();
        $(this).next().toggleClass('js-open').toggle();

        $('.tabbedAccordion ul').find('.js-active').removeClass('js-active');
        $(this).addClass('js-active');
      } else {
        $('.tabbedAccordion ul .js-open').removeClass('js-open').hide();
        $(this).removeClass('js-active');
      }
   });
