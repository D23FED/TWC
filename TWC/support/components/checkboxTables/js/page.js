// $(function(){
// 	var windowTimer = null;
// 	$('<table class="tableCopy" style="max-width:980px; width:100%; left: 100%;"></table>').insertAfter('table');

// 	adjustContent('normal');

// 	$(window).bind("load", function(){
// 		$('table thead').each(function(index){
// 			$(this).clone().appendTo('.tableCopy');
// 		});

// 		$('table tbody').each(function(index){
// 			$(this).clone().insertAfter('.tableCopy thead');
// 			adjustClasses();
// 		});
// 	});

	//var tdLen = ($('tbody tr td').length / $('tbody tr').length);

	// 7 columns
	// alert($('thead tr th').length);

	// individual column width
	// alert($('th').width());

// 	$(window).resize(function(){
// 		if (windowTimer) clearTimeout(windowTimer);
// 		windowTimer = setTimeout(''+adjustContent('normal')+'', 150);
// 	});

// 	$('.slideRight').click(function(){
// 		$(".tableOriginal").hide();
// 		$(".tableCopy").show();
// 		adjustContent('reverse');

// 		return false;
// 	});

// 	$('.slideLeft').click(function(){
// 		$(".tableOriginal").show();
// 		$(".tableCopy").hide();
// 		adjustContent('normal');

// 		return false;
// 	});

// 	function adjustClasses(){
// 		$('.tableCopy').find('td[class^="td_"]').attr('class', function(i,cls) {
// 			copyClass = cls.replace(/td_/g,'tdc_');
// 			$('.tableCopy .'+cls).removeClass().addClass(copyClass);
// 		});
// 	}

// 	function adjustContent(whichway) {
// 		if(whichway == 'normal'){
// 			var tdLen = $('.tableOriginal th').width()+25;
// 		} else {
// 			var tdLen = $('.tableCopy th').width()+25;
// 		}

// 		var toShow = Math.floor($(window).width() / tdLen);

// 		if($(window).width() >= 768){
// 			$('.table-slide-controls').hide();
// 			showHide(toShow,whichway);
// 		} else if($(window).width() <= 768 && $(window).width() >= 640){
// 			$('.table-slide-controls').show();
// 			showHide(toShow,whichway);
// 		} else if($(window).width() <= 640){
// 			$('.table-slide-controls').show();
// 			showHide(toShow,whichway);
// 		}
// 	}

// 	function showHide(toShow,whichway) {
// 		if(whichway == 'normal'){
// 			for (var i = 1; i <= $('.tableOriginal thead tr th').length; i++) {
// 				if(i <= toShow){
// 					$('.td_'+i).show();
// 				} else {
// 					$('.td_'+i).hide();
// 				}
// 			}
// 		} else if(whichway == 'reverse'){
// 			for (var i = 1; i <= $('.tableCopy thead tr th').length; i++) {
// 				if(i <= toShow){
// 					$('.tdc_'+i).hide();
// 				} else {
// 					$('.tdc_'+i).show();
// 				}
// 			}
// 		}
// 	}
// });