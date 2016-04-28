/* verticalCarousel Class*/
var verticalCarousel = {
	create: function( wrapper, slides, options ) {
		var containerSlides,
			containerPager;
		Herotimer = null;
		BrowserType = this.widthPage() || 'desktop';
		CarouselSlides = slides;
		CarouselOptions = options;
		this.wrapper = wrapper;
		this.generate( BrowserType );

		$( window ).error( function( e ) {
			e.preventDefault();
		} );
		$( window ).ready( function() {
			try {
				BrowserType = verticalCarousel.widthPage();
				verticalCarousel.heroHeight();
				if ( CarouselOptions.auto === true ) {
					clearInterval( Herotimer );
					Herotimer = setInterval( verticalCarousel.autoTrigger, CarouselOptions.speed || 5000 );
					if ( CarouselOptions.hover === true ) {
						$( '.hero-slider-controls .slide' ).click( function( ev ) {
							if ( ev.originalEvent !== undefined ) {
								clearInterval( Herotimer );
								CarouselOptions.slideTimeout = true;
							}
						} );
					}
				}
			} catch ( error ) {}
		} );
		/* page ready events*/
		$( window ).ready( function() {
			try {
				verticalCarousel.heroHeight();
			} catch ( error ) {}
		} );
		/* page on resize events*/
		$( window ).resize( function() {
			try {
				if ( verticalCarousel.widthPage() !== BrowserType ) {
					var $active = verticalCarousel.getSlideClick( '.hero-slider-controls .active' ),
						slideNo = $active.match( /\d+/ ) || 0;
					BrowserType = verticalCarousel.widthPage();
					verticalCarousel.destroy();
					verticalCarousel.generate( BrowserType );
					verticalCarousel.videoTrigger( slideNo );
				}
				BrowserType = verticalCarousel.widthPage();
				verticalCarousel.heroHeight();
				verticalCarousel.responsiveActiveBlock();
			} catch ( error ) {}
		} );
	},
	/*
	 * generate the mark-up of the slider
	 */
	generate: function( type ) {
		var slide_type = CarouselOptions.slideType[ type ] == 'horizontal' ? 'left' : 'top';
		$.each( CarouselSlides, function( index, elem ) {

			var image = document.createElement( "IMG" );
			image.src = elem[ type ].image;
			$( '#hidden_hero_images' ).append( image );



			if ( $( '.heroslider-' + index ).length == 0 ) {
				$( '.hero-image-slider' ).append( '<div class="huge-hero-image heroslider-' + index + '"></div>' );
			}
			if ( elem[ type ].video !== null && elem[ type ].video != undefined ) {
				containerSlides = '<video class="marquee-video" poster="' + elem[ type ].poster + '" ' + elem[ type ].options + '>';
				for ( i = 0; i < elem[ type ][ 'video' ].length; i++ ) {
					containerSlides += '<source src="' + elem[ type ][ 'video' ][ i ] + '">';
				}
				containerSlides += '</video>';
				$( '.heroslider-' + index ).append( containerSlides );
			} else if ( elem[ type ].image !== undefined ) {
				var focus = elem[ type ].focus || '50% center';
				$( '.heroslider-' + index ).css( 'background-image', 'url("' + elem[ type ].image + '")' );
				$( '.heroslider-' + index ).css( 'background-position', focus );
			}
			//generate elements of controls
			if ( $( '.hero-slider-controls .slide-' + index ).length == 0 ) {
				$( '.hero-slider-controls' ).append( '<div class="slide slide-' + index + '"></div>' );
			}
			if ( typeof elem[ type ].icon == 'object' && elem[ type ].icon != false ) {
				var icons = '<figure>';
				for ( i = 0; i < elem[ type ][ 'icon' ].length; i++ ) {
					icons += '<img src="' + elem[ type ][ 'icon' ][ i ] + '" />';
				}
				icons += '</figure>';
				$( '.slide-' + index ).append( icons );
			}
		} );

		if ( type == 'desktop' ) {
			$( '.hero-wrapper' ).removeClass( CarouselOptions.slideType.mobile );
		} else {
			$( '.hero-wrapper' ).removeClass( CarouselOptions.slideType.desktop );
		}
		$( '.hero-wrapper' ).addClass( CarouselOptions.slideType[ type ] );

		if ( CarouselOptions.controlClone === true ) {
			$( '.hero-slider-controls' ).clone().appendTo( '.hero-slider-progress-clone' );
			$( '.hero-slider-progress-clone .hero-slider-controls div figure' ).remove();
		}

		if ( CarouselOptions.infiniteLoop === true ) {
			verticalCarousel.slideCloner();
			var positions = this.sliderPosition();
			$( '.hero-wrapper' ).css( slide_type, '-' + positions[ 1 ] + 'px' );
		}

		$( ".hero-slider-controls .slide" ).click( function( e ) {
			e.preventDefault();
			var $attId = verticalCarousel.getSlideClick( this ),
				slideNo = parseInt( $attId.match( /\d+/ ) ) || 0;
			if ( e.originalEvent !== undefined ) {
				CarouselOptions.slideTimeout = true;
			}
			verticalCarousel.activeIcon( $( this ) );
			verticalCarousel.triggerCarousel( slideNo );
			verticalCarousel.videoTrigger( slideNo );
		} );
		$( ".huge-hero .arrow-left" ).click( function( e ) {
			e.preventDefault();
			clearInterval( Herotimer );
			verticalCarousel.arrowControl( -1 );

		} );
		$( ".huge-hero .arrow-right" ).click( function( e ) {
			e.preventDefault();
			clearInterval( Herotimer );
			verticalCarousel.arrowControl( 1 );

		} );
	},
	/*
	 * Trigger the slide control clicking on the arrows
	 * positions -1 for previous, 1 for next
	 */
	arrowControl: function( position ) {
		try {
			var iconActive = $( ".hero-slider-controls .active" ).attr( 'class' ).split( ' ' )[ 1 ],
				iconNumber = parseInt( iconActive.match( /\d+/ ) ) || 0,
				elementsTotal = $( '.hero-slider-controls .slide' ).length,
				next = iconNumber + position;
			if ( next > 0 && next < elementsTotal ) {
				verticalCarousel.activeIcon( $( '.hero-slider-controls .slide-' + next ) );
				verticalCarousel.triggerCarousel( next );
			} else if ( next < 0 ) {
				verticalCarousel.activeIcon( $( '.hero-slider-controls .slide-' + ( elementsTotal - 1 ) ) );
				verticalCarousel.triggerCarousel( -1, false );
			} else if ( next == 0 ) {
				CarouselOptions.slideTimeout = true;
				verticalCarousel.activeIcon( $( '.hero-slider-controls .slide-' + next ) );
				verticalCarousel.triggerCarousel( next );
			} else {
				CarouselOptions.slideTimeout = true;
				verticalCarousel.activeIcon( $( '.hero-slider-controls .slide-0' ) );
				verticalCarousel.triggerCarousel( 0, false );
			}
		} catch ( err ) {}
	},
	/*
	 * activate video autoplay trigger when the video is active
	 */
	videoTrigger: function( slide ) {
		var video = $( '.heroslider-' + slide + ' video' );
		$( '.huge-hero-image video' ).trigger( 'pause' );
		if ( typeof video == 'object' && $( video ).length > 0 ) {
			$( video ).trigger( 'play' );
		}
	},
	/*
	 * activate icon related to actual slide
	 */
	activeIcon: function( element ) {
		$( ".hero-slider-controls .slide" ).removeClass( "active", 500 );
		$( element ).addClass( "active", 500 );
		if ( CarouselOptions.controlClone === true ) {
			var slideId = verticalCarousel.getSlideClick( element );
			$( '.hero-slider-controls .' + slideId ).addClass( "active", 500 );
		}
	},
	/*
	 * create carousel animation
	 */
	triggerCarousel: function( elem, manual ) {
		try {
			var type = this.widthPage() || 'desktop',
				positions = this.sliderPosition(),
				infiniteTrigger = false,
				slide_type = CarouselOptions.slideType[ type ] == 'horizontal' ? 'left' : 'top',
				jump = false,
				obj_transition = {
					transition: CarouselOptions.animation
				};
			if ( CarouselOptions.infiniteLoop === true && elem >= 0 ) {
				positions[ elem ] = positions[ elem ] + positions[ 1 ];
				if ( ( CarouselOptions.slideTimeout === false && elem == 0 ) || manual === false ) {
					elem = CarouselSlides.length + 1;
					infiniteTrigger = true;
				}
			}
			if ( manual === false && elem < 0 ) {
				elem = 0;
				positions[ 0 ] = 0;
				infiniteTrigger = true;
				jump = true;
			}
			obj_transition[ slide_type ] = '-' + positions[ elem ] + 'px';
			$( '.hero-wrapper' ).css( obj_transition );
			if ( infiniteTrigger === true ) {
				var detectChange = setInterval( function() {
					if ( parseInt( $( '.hero-wrapper' ).css( 'left' ), 10 ) == -1 * positions[ elem ] ) {
						obj_transition.transition = 'none';
						if ( manual === false && jump === true ) {
							obj_transition[ slide_type ] = '-' + positions[ CarouselSlides.length ] + 'px';
						} else {
							obj_transition[ slide_type ] = '-' + positions[ 1 ] + 'px';
						}
						$( '.hero-wrapper' ).css( obj_transition );
						clearInterval( detectChange );
					}
				}, 20 );
			}

			$( ".hero-wrapper" ).bind( "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
				console.log( 'end' );

			} );

		} catch ( error ) {}
	},
	/*
	 * adjust position of active block on resize
	 */
	responsiveActiveBlock: function() {
		var $active = verticalCarousel.getSlideClick( '.hero-slider-controls .active' ),
			slideNo = parseInt( $active.match( /\d+/ ) ) || 0,
			type = this.widthPage() || 'desktop',
			slide_type = CarouselOptions.slideType[ type ] == 'horizontal' ? 'left' : 'top';
		if ( CarouselOptions.infiniteLoop === true ) {
			slideNo = slideNo + 1;
		}
		$( '.hero-wrapper' ).css( 'top', '0' ).css( 'left', '0' );
		if ( BrowserType === 'desktop' ) {
			$( '.hero-wrapper' ).css( slide_type, '-' + this.sliderPosition()[ slideNo ] + 'px' );
		} else if ( BrowserType === 'mobile' ) {
			$( '.hero-wrapper' ).css( slide_type, '-' + this.sliderPosition()[ slideNo ] + 'px' );
		}
	},
	/*
	 * returns the kind of device according the breakpoints definitions
	 */
	widthPage: function() {
		var mediumBreakPoint = 768,
			smallBreakPoint = 640,
			width = $( window ).width();
		if ( width <= smallBreakPoint ) {
			return 'mobile';
		} else if ( width <= mediumBreakPoint ) {
			//return 'tablet'; TODO: tablet version is not required for now.
			return 'mobile';
		} else {
			return 'desktop';
		}
	},
	/*
	 * adjust the height of the hero carousel to keep the aspect ratio
	 */
	heroHeight: function() {
		var hero_height = $( '.huge-hero' ).css( 'max-height' ),
			type = this.widthPage() || 'desktop';

		var slideHeight = $( '.huge-hero .huge-hero-image' ).not( '.clone' ).first().css( 'background' );
		console.log( slideHeight );
		$( ".huge-hero" ).height( hero_height );
		$( '.huge-hero-image' ).width( $( window ).outerWidth( true ) + 1 );
	},
	/*
	 * calculate position of sliders on resize
	 */
	sliderPosition: function() {
		var elements = $( '.huge-hero-image' ),
			result = {},
			type = this.widthPage() || 'desktop',
			slide_type = CarouselOptions.slideType[ type ] == 'horizontal' ? 'left' : 'top';
		result[ 0 ] = 0;
		if ( CarouselOptions.slideType[ type ] == 'horizontal' ) {
			$( elements ).each( function( index, elem ) {
				result[ index + 1 ] = result[ index ] + $( window ).width() + 5;
			} );
		} else {
			$( elements ).each( function( index, elem ) {
				result[ index + 1 ] = result[ index ] + $( elem ).height();
			} );
		}
		return result;
	},
	/*
	 * destroy carousel on breakpoints
	 */
	destroy: function() {
		try {
			$( '.hero-slider-controls .slide' ).html( '' );
			if ( CarouselOptions.controlClone === true ) {
				$( '.hero-slider-progress-clone' ).html( '' );
			}
			$( '.hero-image-slider div.clone' ).remove();
			$( '.huge-hero-image figure' ).html( '' );
			$( '.huge-hero-image video' ).remove();
			$( ".hero-slider-controls div" ).unbind( "click" );
			$( '.hero-wrapper' ).css( 'top', '0' ).css( 'left', '0' );
		} catch ( error ) {}
	},
	/*
	 * common function to get clicked slide
	 */
	getSlideClick: function( elem ) {
		try {
			var theClass = $( elem ).attr( "class" ).match( /slide\-[\w-]*\b/ );
			return theClass[ 0 ];
		} catch ( error ) {}
	},
	/*
	 * create automatic trigger on continuous carousel
	 */
	autoTrigger: function() {
		try {
			var slides = $( '.hero-slider-controls .slide' ).length,
				$active = verticalCarousel.getSlideClick( '.hero-slider-controls .active' ),
				slideNo = parseInt( $active.match( /\d+/ ) ) || 0,
				next = 0;
			if ( slideNo + 1 >= slides ) {
				next = 0;
			} else {
				next = slideNo + 1;
			}
			$( '.hero-slider-controls .slide-' + next ).trigger( 'click' );
			return;
		} catch ( error ) {}
	},
	/*
	 * create clones on continuous carousel
	 */
	slideCloner: function() {
		var first_element = $( '.huge-hero-image' ).not( '.clone' ).first(),
			last_element = $( '.huge-hero-image' ).not( '.clone' ).last();
		$( '.huge-hero-image .clone' ).remove();
		first_element.clone().appendTo( '.hero-image-slider' ).addClass( 'clone' ).removeClass( 'active' );
		last_element.clone().prependTo( '.hero-image-slider' ).addClass( 'clone' ).removeClass( 'active' );
	}
};

$( document ).ready( function() {
	/* Slides parameters
	 * Object:
	 * desktop = Object | definitions for desktop version
	 * mobile = Object | definitions for mobile version
	 * desktop.image = String | carousel image
	 * desktop.video = Array | carousel video definitions
	 * desktop.poster = String | carousel video poster
	 * desktop.icon = Array | carousel icons for desktop
	 */
	var slides = [ {
				'desktop': {
					'image': 'images/hp-prolex-bg1.jpg',
					'icon': false,
					'focus': '50% center'
				},
				'mobile': {
					'image': 'images/hp-prolex-bg1.jpg',
					'icon': false,
					'focus': '75% center'
				}
			}, {
				'desktop': {
					'image': 'images/hero-bg-2-internet.jpg',
					'icon': false,
					'focus': '50% center'
				},
				'mobile': {
					'image': 'images/hero-bg-2-internet.jpg',
					'icon': false,
					'focus': 'left center'
				}
			}

		],
		/* Carousel options
		 * Object:
		 * slideType: type of slider on each device | horizontal/vertical
		 * speed: speed for auto scroll in ms
		 * animation: animation used on slide transition
		 * auto: auto scroll | enable/disable
		 * hover: mouse hover pause on auto scroll | true/false
		 * controlClone: include the double controller in desktop version
		 * infiniteLoop: create animation for infinite loop
		 * slideTimeout: internal use only, default value false
		 */
		slide_options = {
			slideType: {
				desktop: 'horizontal',
				mobile: 'horizontal'
			},
			speed: 8000,
			animation: 'all 1000ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
			auto: true,
			hover: true,
			controlClone: false,
			infiniteLoop: true,
			slideTimeout: false
		};
	try {
		verticalCarousel.create( '.huge-hero', slides, slide_options );
	} catch ( error ) {}
} );




$( document ).ready( function() {
	var stickyHerotimer,
		stickyscrolling = false,
		stickyContainer = '.scroll-arrow';

	function onScrollStart( e ) {
		console.log( e );
		if ( stickyscrolling === false ) {
			clearTimeout( stickyHerotimer );
			stickyHerotimer = setTimeout( onScrollStop, 500 );
			console.log( stickyHerotimer );
			stickyscrolling = true;
			$( stickyContainer ).animate( {
				'opacity': 0.25
			}, 500 );
		}
	}

	function onScrollStop() {
		var topWindow = parseInt( $( window ).scrollTop() ),
			topFooter = parseInt( $( 'footer' ).position().top ),
			windowHeight = parseInt( $( window ).height() ),
			stickybar = parseInt( $( stickyContainer ).height() );
		if ( ( topWindow + windowHeight < topFooter + stickybar ) ) {
			$( stickyContainer ).animate( {
				'opacity': 1
			}, 500 );
			stickyscrolling = false;
		}
		if ( ( topWindow + windowHeight >= topFooter + stickybar ) ) {
			$( stickyContainer ).animate( {
				'opacity': 0
			}, 200 );
		}
		stickyHerotimer = 0;
	}
	$( window ).on( 'scroll touchmove', onScrollStart );
} );