/* v1 */
// Match height of offers
var offerSelector = '[id="boxed-grey-border"]';
var check = function() {
	if (!$(offerSelector).length) {
		setTimeout(check, 500);
	} else {
		containerMatchHeight();
	}
};

var containerMatchHeight = function() {
	var container = {
		'$el': $(offerSelector),
		'maxHeight': 0
	};
	if (container.$el.length) {
		container.$el.each(function() {
			var h = $(this).outerHeight();
			if (h > container.maxHeight) {
				container.maxHeight = h;
			}
		}).css('min-height', container.maxHeight);
	}
};

$(function() {
	check();
});
