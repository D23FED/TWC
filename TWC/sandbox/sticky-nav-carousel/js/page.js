/* ==========================================================================
		Learn Carousel -- Version: 1.1 - Updated: 6/28/2016
	 ========================================================================== */
// Container: .heroCarousel
// Slideshow container: heroWrapper
// Menu container: heroIconWrapper
// Previous button: heroCarouselPreview
// Next button: heroCarouselNext
/* Slides that the carousel menu selects: 'Hero'*/
if (document.documentElement) {
	var middleBreakPoint = 768,
		smallBreakPoint = 640,
		carouselSpeed = 6000,
		iconTransition = 'left 0.5s linear',
		heroStop = false,
		$heroElements = $('.heroWrapper, .carouselIcons'),
		heroTotalElements = $('.carouselIcons').length,
		iconSlideNumber = 3,
		heroTimer,
		element_block = 1;
	$(function() {
		// Initialize
		$(window).on('load', function() {
			// $('.heroCarousel').show();
			heroHeight();
			iconSize();
			// TWC-1098: Stop trigger on click, pause on hover
			$heroElements.hover(function(ev) {
				clearInterval(heroTimer);
			}, function(ev) {
				if (heroStop === false) {
					// heroTimer = setInterval(triggerCarousel, carouselSpeed);
				}
			});
			$heroElements.click(function(ev) {
				if (ev.originalEvent !== undefined) {
					clearInterval(heroTimer);
					heroStop = true;
				}
			});
			// heroTimer = setInterval(triggerCarousel, carouselSpeed);
		});
		// Resize
		$(window).resize(function() {
			heroHeight();
			iconSize();
		});
		$('[id^="heroCarouselIcon-"]').click(function() {
			sliderCarousel(this);
		});
		// Next/prev
		$('.heroCarousel .btn-prev').click(function() {
			carouselControl('prev');
		});
		$('.heroCarousel .btn-next').click(function() {
			carouselControl('next');
		});
		//swipe version for mobile
		$('.heroIconWrapper').on('swipeleft', function(e) {
			carouselControl('next');
		}).on('swiperight', function(e) {
			carouselControl('prev');
		});

		// Update active item
		function sliderCarousel(element) {
			var iconNumber = $(element).attr('id').match(/\d+/),
				iconActive = parseInt(iconNumber[0]) || 1;
			// clearInterval(heroTimer);
			// heroTimer = setInterval(triggerCarousel, carouselSpeed);
			$('[id^="heroCarouselIcon-"]').removeClass('active');
			$('#heroCarouselIcon-' + iconActive).addClass('active');
			// $('[id^=heroCarousel-]').removeClass('active');
			// $('#heroCarousel-' + iconActive).addClass('active');
		}

		function infiniteCarousel(cero) {
			var $elements = $('.carouselIcons').not('.clone'),
				elementsTotal = $($elements).length,
				elementsRotation = Math.ceil(elementsTotal / iconSlideNumber),
				elementsPrev,
				elementNext;
			if ($('.heroIcons .clone').length === 0 && heroTotalElements > iconSlideNumber) {
				for (i = 0; i < elementsRotation; i++) {
					var $elements_block = $($elements).slice(i * iconSlideNumber, (iconSlideNumber * (i + 1)));
					if ($($elements_block).length < iconSlideNumber) {
						var blanks = iconSlideNumber - $($elements_block).length,
							empty_element = '<div class="carouselIcons"></div>';
						for (w = 0; w < blanks; w++) {
							$(empty_element).appendTo('.iconWrapper').addClass('empty');
						}
					}
				}
				elementsPrev = $('.carouselIcons').not('.clone').slice(0, iconSlideNumber),
				elementNext = $('.carouselIcons').not('.clone').slice(iconSlideNumber * 2, iconSlideNumber * 3);
				elementsPrev.clone().appendTo('.iconWrapper').addClass('clone').removeAttr('id');
				elementNext.clone().prependTo('.iconWrapper').addClass('clone').removeAttr('id');
				$('.iconWrapper').css({
					transition: 'none',
					left: '-' + cero + 'px'
				});
			}
		}

		function iconSize() {
			var iconWidth = $('div.heroIcons').width(),
				$iconActive = $('.' + 'carouselIcons.active').attr('id'),
				iconNumber = $iconActive.match(/\d+/);
			if (heroTotalElements <= iconSlideNumber) {
				$('.heroCarousel .btn-prev, .heroCarousel .btn-next').css('display', 'none');
			}
			if ($(window).width() <= smallBreakPoint) {
				infiniteCarousel(iconWidth);
				$('div.carouselIcons').css('width', Math.floor(iconWidth / iconSlideNumber) + 'px');
				$('.heroCarousel .btn-prev').css('left', '3px');
				$('.heroCarousel .btn-next').css('right', '3px');
				if (heroTotalElements > iconSlideNumber) {
					if (iconNumber <= iconSlideNumber) {
						$('.iconWrapper').css({
							transition: 'none',
							left: '-' + iconWidth + 'px'
						});
					} else {
						$('.iconWrapper').css({
							transition: 'none',
							left: '-' + iconWidth * 2 + 'px'
						});
					}
				}
			} else {
				$('div.carouselIcons').css('width', '');
				$('.heroIcons .clone').remove();
			}
		}

		function heroHeight() {
			// var heroHeight = 0;
			// $('.heroCarouselSlide').each(function() {
			// 	if ($(this).height() > heroHeight) {
			// 		heroHeight = $(this).height();
			// 	}
			// });
			// $('.heroWrapper').height(heroHeight);
		}

		function triggerCarousel() {
			var $elements = $('.carouselIcons').not('.clone'),
				elementsTotal = $($elements).length,
				elementsRotation = Math.ceil(elementsTotal / iconSlideNumber),
				maxTriggering = $('.carouselIcons').not('.clone, .empty').length,
				iconWidth = $('div.heroIcons').width(),
				$iconActive = $('.carouselIcons.active').attr('id'),
				iconNumber = $iconActive.match(/\d+/),
				iconActive = parseInt(iconNumber[0]);
			if (iconActive >= maxTriggering) {
				iconActive = 0;
				element_block = 1;
			}
			sliderCarousel($('#heroCarouselIcon-' + (iconActive + 1)).not('clone'));
			if ($(window).width() <= smallBreakPoint && (heroTotalElements > iconSlideNumber)) {
				if (iconActive === iconSlideNumber * element_block) {
					element_block = element_block + 1;
					$('.iconWrapper').css({
						transition: iconTransition,
						left: '-' + iconWidth * element_block + 'px'
					});
				}
				if (iconActive === 0) {
					$('.iconWrapper').css({
						transition: iconTransition,
						left: '-' + iconWidth * 4 + 'px'
					});
					var detectChange = setInterval(function() {
						if ($('.iconWrapper').css('left') === '-' + iconWidth * 4 + 'px') {
							$('.iconWrapper').css({
								transition: 'none',
								'left': '-' + iconWidth + 'px'
							});
							clearInterval(detectChange);
						}
					}, 10);
				}
			}
		}

		function carouselControl(mode) {
			var next,
				$elements = $('.carouselIcons').not('.clone'),
				elementsTotal = $($elements).length,
				elementsRotation = Math.ceil(elementsTotal / iconSlideNumber),
				iconWidth = $('div.heroIcons').width(),
				$iconActive = $('.carouselIcons.active').attr('id'),
				iconNumber = $iconActive.match(/\d+/),
				active = parseInt(iconNumber[0]);
			clearInterval(heroTimer);
			// heroTimer = setInterval(triggerCarousel, carouselSpeed);
			if (active <= iconSlideNumber * element_block && element_block < 3) {
				next = iconSlideNumber * element_block + 1;
				if (mode === 'next') {
					element_block = element_block + 1;
					$('.iconWrapper').css({
						transition: iconTransition,
						'left': '-' + iconWidth * element_block + 'px'
					});
				} else {
					next = 1;
					element_block = element_block - 1;
					$('.iconWrapper').css({
						transition: iconTransition,
						'left': '-' + iconWidth * element_block + 'px'
					});
					if (element_block === 0) {
						next = 7;
						element_block = 3;
						var detectChange = setInterval(function() {
							if ($('.iconWrapper').css('left') === '0px') {
								$('.iconWrapper').css({
									transition: 'none',
									'left': '-' + iconWidth * 3 + 'px'
								});
								clearInterval(detectChange);
							}
						}, 10);
					}
					var detectChange = setInterval(function() {
						if ($('.iconWrapper').css('left') === '-' + iconWidth * element_block + 'px') {
							$('.iconWrapper').css({
								transition: 'none',
								'left': '-' + iconWidth * element_block + 'px'
							});
							clearInterval(detectChange);
						}
					}, 10);
				}
			} else {
				if (mode === 'next') {
					next = 1;
					element_block = 1;
					$('.iconWrapper').css({
						transition: iconTransition,
						'left': '-' + iconWidth * 4 + 'px'
					});
					var detectChange = setInterval(function() {
						if ($('.iconWrapper').css('left') === '-' + iconWidth * 4 + 'px') {
							$('.iconWrapper').css({
								transition: 'none',
								'left': '-' + iconWidth + 'px'
							});
							clearInterval(detectChange);
						}
					}, 10);
				} else {
					element_block = element_block - 1;
					next = iconSlideNumber * element_block - 2;
					$('.iconWrapper').css({
						transition: iconTransition,
						'left': '-' + iconWidth * element_block + 'px'
					});
					if (element_block === 0) {
						next = 7;
						// console.log(element_block);
						var detectChange = setInterval(function() {
							if ($('.iconWrapper').css('left') === '0px') {
								$('.iconWrapper').css({
									transition: 'none',
									'left': '-' + iconWidth * 3 + 'px'
								});
								clearInterval(detectChange);
							}
						}, 10);
					}
				}
			}
			sliderCarousel($('#heroCarouselIcon-' + next).not('clone'));
		}
	});
}

/* ==========================================================================
		Sticky Nav
	 ========================================================================== */

// Vars
var sticky = {
	wrapper: '.stickySubNavWrapper',
	menu: '.stickySubNav',
	el: '.stickyElement',
	offscreenClass: 'js-sticky-past',
	activeClass: 'js-sticky',
	closedClass: 'js-closed',
	spacer: '.stickySpacer',
	yes: 'no'
};

$(function() {

	// Get "scroll past" position from wrapping element, because actual menu's position will change when sticky
	sticky['top'] = $(sticky.wrapper).offset().top;
	sticky['spacing'] = $(sticky.menu).outerHeight();
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
	$('a[href*=#]').click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href'),
			hash = href.match(/(#.*)/)[0];
		if (hash !== '') {
			$('body').scrollTo('[id=' + hash.substring(1) + ']', {
				duration: 1000,
				offsetTop: '0'
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

// Current time function poached from underscore,  get the current timestamp as an integer.
var _now = Date.now || function() {
		return new Date().getTime();
	};