// Vars
var sticky = {
	wrapper: '#sticky-subnav-wrapper',
	menu: '#sticky-subnav',
	el: '.stickyElement',
	offscreenClass: 'js-sticky-past',
	activeClass: 'js-sticky',
	closedClass: 'js-closed',
	spacer: '#sticky-spacer'
};

$(function() {
	if ($(sticky.wrapper).length === 0) {
		sticky.wrapper = '#sticky-carousel-subnav-wrapper';
	}
	// Get "scroll past" position from wrapping element, because actual menu's position will change when sticky
	$(window).on('load', function() {
		sticky['top'] = $(sticky.wrapper).offset().top;
		// console.log('Header:',$('#site-header').outerHeight() );
	});
	// console.log('Header:', $('#site-header').outerHeight());

	// Get menu height
	sticky['menuHeight'] = $(sticky.menu).outerHeight();

	// Set size of invisible spacer
	sticky['spacing'] = sticky.menuHeight;
	// console.log('Spacing:',sticky.spacing);
	setSpacerHeight(sticky.spacing);
	// $(sticky.spacer).height(sticky.spacing);
	// console.log($(sticky.spacer), sticky.spacing);

	// Sticky Sub Nav -- Version: 1.2 - Updated: 6/20/2016
	if ($(sticky.menu).offset()) {
		$(function() {
			sticky.top = $(sticky.wrapper).offset().top;
			var stickyNav = function(topOfMenu) {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > topOfMenu) {
					$(sticky.menu).addClass(sticky.activeClass);
					$(sticky.spacer).show();
				} else {
					$(sticky.menu).removeClass(sticky.activeClass);
					$(sticky.spacer).hide();
				}
			};
			stickyNav(sticky.top);
			$(window).scroll(function() {
				_debounce(stickyNav(sticky.top), 250);
				// console.log('Window:',$(window).scrollTop(),'Menu:',sticky.top, 'Menu live:',$(sticky.menu).offset().top)
			});
		});
	}

	// Un-stick sticky if you scroll past the stickyElement
	if ($(sticky.el)[0]) {
		$.fn.is_on_screen = function() {
			var win = $(window);
			var stickyHeight = $(sticky.menu).height();
			var viewport = {
				top: win.scrollTop() + stickyHeight,
				left: win.scrollLeft()
			};
			var bounds = this.offset();
			viewport.right = viewport.left + win.width();
			viewport.bottom = viewport.top + win.height();
			viewport.height = win.height() - stickyHeight;
			bounds.right = bounds.left + this.outerWidth();
			bounds.bottom = bounds.top + this.outerHeight();
			return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		};
		$(window).scroll(function() { // bind window scroll event
			if ($(sticky.menu).length > 0) { // if target element exists in DOM
				if ($(sticky.el).is_on_screen()) { // if target element is visible on screen
					$(sticky.menu).removeClass(sticky.offscreenClass); // Stick
				} else {
					$(sticky.menu).addClass(sticky.offscreenClass); // Unstick
				}
			}
		});
	}

	// Set sticky width to width of stickyElement at old tablet breakpoint
	var stickyWidth = $(sticky.el).width(); // Set stickyWidth to width of lower table
	if ($(window).width() < 1059 && $(window).width() > 768) { // 1059 is where the css for twc-container breaks the layout. 768 is where the problem fixes itself through css
		$(sticky.menu).css({
			width: stickyWidth + 'px'
		});
	}

	// Anchor link scrollTo handler
	$(sticky.menu + ' ' + 'a[href*=#]').click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href'),
			hash = href.match(/(#.*)/)[0];
		if (hash !== '') {
			$('body').scrollTo('[id=' + hash.substring(1) + ']', {
				duration: 1000,
				offsetTop: sticky.menuHeight
			});
		}
	});

	// Adjust width on resize
	$(window).resize(function() {
		_debounce(onResize(), 250);
	});

}); //end doc.ready

var onResize = function() {
	var resizeStickyWidth = $(sticky.menu).next(sticky.el).width(); // Set stickyWidth to width of lower table
	if ($(window).width() < 1059 && $(window).width() > 768) {
		$(sticky.menu).css({
			width: resizeStickyWidth + 'px'
		}); // 1059 is where the css for twc-container breaks the layout. 768 is where the problem fixes itself through css
	} else {
		$(sticky.menu).css({
			width: '100' + '%'
		}); // Removes the width if you resize from tablet to mobile (user rotating phone from landscape to portrait)
	}

	// Get location of menu wrapper, which shifts when pages resizes
	sticky.top = $(sticky.wrapper).offset().top;
	// Set the height of the spacer to adjust for shift in menu size
	setSpacerHeight($(sticky.menu).outerHeight());

	// console.log('onResize', sticky.top);
};

// Set height of spacer that replace menu when it becomes sticky
var setSpacerHeight = function(spacerHeight) {
	$(sticky.spacer).height(spacerHeight);
};

// Scroll to top button
// $('.scrollTop').click(function() {
// 	$('html, body').animate({
// 		scrollTop: 0
// 	}, 600);
// 	return false;
// });

// Close button
// $('.closeSticky').click(function() {
// 	$(this).parents(sticky.menu).addClass(sticky.closedClass);
// 	// console.log('close');
// });

// External libraries and plugins

// ScrollTo plugin
$.fn.scrollTo = function(target, options, callback) {
	if (typeof options == 'function' && arguments.length === 2) {
		callback = options;
		options = target;
	}
	var settings = $.extend({
		scrollTarget: target,
		offsetTop: -100,
		duration: 500,
		easing: 'swing'
	}, options);
	return this.each(function() {
		var parent_top = 0,
			scrollTarget = (typeof settings.scrollTarget == 'number') ? settings.scrollTarget : $(settings.scrollTarget),
			scrollY;
		$(this).parents().each(function(index, parent) {
			parent_top += parseInt($(parent).position().top);
		});
		scrollY = (typeof scrollTarget == 'number') ? scrollTarget : scrollTarget.offset().top + parent_top - parseInt(settings.offsetTop);
		$('html, body').animate({
			scrollTop: scrollY
		}, parseInt(settings.duration), settings.easing, function() {
			if (typeof callback == 'function') {
				callback.call(this);
			}
		});
	});
};

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

// Current time function poached from underscore,  get the current timestamp as an integer
var _now = Date.now || function() {
	return new Date().getTime();
};
