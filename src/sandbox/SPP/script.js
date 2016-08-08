/* v3 | Jul 26 */
// Match height of special offer price area
var check = function() {
	if ( !$('.price-wrap').length ) {
		setTimeout(check, 500);
	} else {
		priceMatchHeight();
	}
};

var priceMatchHeight = function() {
	var price = {
		'$wrap': $('.price-wrap'),
		'maxHeight': 0
	};
	if ( price.$wrap.length ) {
		price.$wrap.each(function() {
			var h = $(this).outerHeight();
			if (h > price.maxHeight) {
				price.maxHeight = h;
			}
		}).css('min-height', price.maxHeight);
	}
};
$(function() {
	check();
});
