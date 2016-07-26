/* v3 | Jul 26 */
var i = 1;
// Match height of special offer price area
var check = function() {
	if (!$('.price-wrap').length) {
		i++;
		console.log(i, 'Waiting for pricing to load', $('.price-wrap').length);
		setTimeout(
			check, 500); // give everything some time to render
	} else {
		console.log('Pricing loaded')
		priceMatchHeight();
	}
}

var checkRaf = function() {
	if (!$('.price-wrap').length) {
		i++;
		console.log(i, 'Waiting for pricing to load', $('.price-wrap').length);
		_debounce(window.requestAnimationFrame(checkRaf), 1000);
	} else {
		console.log('Pricing loaded')
		priceMatchHeight();
	}
};

var priceMatchHeight = function() {
	console.log('priceMatchHeight() init');
	var price = {
		'$wrap': $('.price-wrap'),
		'maxHeight': 0
	};

	if ($('.price-wrap').length) {
		price.$wrap.each(function() {
			var h = $(this).outerHeight();
			if (h > price.maxHeight) {
				price.maxHeight = h;
			}
		}).css('min-height', price.maxHeight);
		console.log('Modifying pricing to ', price.maxHeight);
	} else {
		console.log('Pricing not loaded', price.$wrap.length);
	}
}
// document.addEventListener('load', priceMatchHeight());

// Debounce function poached from underscore
var _debounce = function(func, wait, immediate) {
	var timeout, args, context, timestamp, result;
	var later = function() {
		var last = _now - timestamp;
		if (last < wait && last >= 0) {
			timeout = setTimeout(later, wait - last);
		} else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			}
		}
	};
	return function() {
		context = this;
		args = arguments;
		timestamp = _now;
		var callNow = immediate && !timeout;
		if (!timeout) timeout = setTimeout(later, wait);
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
};

// Current time function poached from underscore,  get the current timestamp as an integer.
var _now = Date.now || function() {
		return new Date().getTime();
	};

$(function() {
	check();
});