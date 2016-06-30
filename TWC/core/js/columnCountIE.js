// Page Specific JS Functions

$(function() {
	if (isIE(8) || isIE(9)) {
		$(window).bind("load", function() {
			$('[class^=column-count]').each(function(event, i) {
				var splitClasses = $(this).attr('class').split(" ")[0];
				var sliceClass = splitClasses.slice(-1);
				var modulusNum = splitClasses.slice(-1) - 1;

				// now remove all but the * number of .columnbreak
				$('.columnbreak').each(function(index) {
					if (index != modulusNum) {
						$(this).removeClass('columnbreak');
					} else {
						modulusNum = index + 4;
					}
				});

				$(this).columnize({
					columns: splitClasses.slice(-1)
				}).show();
			});

			$('.no-csscolumns').css({
				'visibility': 'visible'
			});
		});
	}
});

function isIE(version, comparison) {
	var $div = $('<div style="display:none;"/>').appendTo($('body'));
	$div.html('<!--[if ' + (comparison || '') + ' IE ' + (version || '') + ']><a>&nbsp;</a><![endif]-->');
	var ieTest = $div.find('a').length;
	$div.remove();
	return ieTest;
}