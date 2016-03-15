// $(function(){
// 	resizeAccordion();

// 	$(document).on('click', '.icon-camera', function() {
// 		if($(this).hasClass('hide-all')){
// 			$(this).removeClass('hide-all');
// 			$('figure').show();
// 			htmlText = 'Hide';
// 		} else {
// 			$(this).addClass('hide-all');
// 			$('figure').hide();
// 			htmlText = 'Show';
// 		}

// 		$(this).html('<a analyticsname="test" href="#"><span>'+htmlText+' All</span></a>');
// 		return false;
// 	});

// 	$(window).resize(function(){
// 		resizeAccordion();
// 	});

// 	function resizeAccordion(){
// 		if($(window).width() >= mediumBreakPoint){
// 			categoryText = $('li.js-active').find('li.js-active').find('a').text();
// 			$('.title').text(categoryText);

// 			$('.activeContent').hide();
// 			$('.rightContent').show();
// 			$('.activeContent').clone().removeClass('activeContent').show().appendTo('.rightContent');
// 			$('.sbs-content').show();
// 			$('.sbs-clone').show();

// 			$('figure').hide();
// 		} else {
// 			$('.sbs-content').hide();
// 			$('.sbs-clone').hide();
// 			$('.activeContent').show();
// 		}
// 	}
// });