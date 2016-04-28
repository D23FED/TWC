$( window ).resize( function() {
	if ( $( window ).width() > 768 ) {
		$( '.simpleNavItems' ).show();
	} else {}
} );

$( document ).ready( function() {
	var headerHeight = $( 'header.simply' ).outerHeight();
	$( '.headerSpacing' ).height( headerHeight );
} );


$( '.simpleNavToggle' ).click( function() {
	$( this ).toggleClass( 'js-active' );
	$( this ).siblings( '.simpleNavItems' ).toggleClass( 'js-active' );
} );

$( 'li.subNavHead > a' ).click( function() {
	$( this ).toggleClass( 'js-active' ).siblings( '.subNavListItems' ).toggleClass( 'js-active' ).parent( 'li.subNavHead' ).toggleClass( 'js-active' ).siblings( 'li.subNavHead' ).removeClass( 'js-active' ).children().removeClass( 'js-active' );
	return false;
} );

/* verticalCarousel Class*/
var verticalCarousel = {
	create: function( wrapper, slides, options ) {
		var containerSlides,
			containerPager,
			timer = null;

		BrowserType = this.widthPage() || 'desktop';
		CarouselSlides = slides;
		CarouselOptions = options;
		this.wrapper = wrapper;
		this.generate( BrowserType );
		/*DOM loaded events*/
		$( window ).bind( "load", function() {
			BrowserType = verticalCarousel.widthPage();
			verticalCarousel.heroHeight();
			if ( CarouselOptions.auto === true ) {
				clearInterval( timer );
				timer = setInterval( verticalCarousel.autoTrigger, CarouselOptions.speed || 5000 );
			}
		} );
		/* page ready events*/
		$( window ).ready( function() {
			verticalCarousel.heroHeight();
		} );
		/* page on resize events*/
		$( window ).resize( function() {
			if ( verticalCarousel.widthPage() != BrowserType ) {
				var $active = $( '.hero-slider-controls .active' ).attr( 'id' ),
					slideNo = $active.match( /\d+/ ) || 0;
				BrowserType = verticalCarousel.widthPage();
				verticalCarousel.destroy();
				verticalCarousel.generate( BrowserType );
				verticalCarousel.videoTrigger( slideNo );
			}
			BrowserType = verticalCarousel.widthPage();
			verticalCarousel.heroHeight();
			verticalCarousel.responsiveActiveBlock();
		} );
	},
	/*
	 * generate the markup of the slider
	 */
	generate: function( type ) {
		$.each( CarouselSlides, function( index, elem ) {
			// generate elements of slider
			if ( $( '.heroslider-' + index ).length == 0 ) {
				$( '.hero-image-slider' ).append( '<div class="huge-hero-image heroslider-' + index + '"></div>' );
			}
			if ( elem[ type ][ 'video' ] != null && elem[ type ][ 'video' ] != undefined ) {
				containerSlides = '<video loop muted preload="auto" class="marquee-video" poster="' + elem[ type ][ 'poster' ] + '">';
				for ( i = 0; i < elem[ type ][ 'video' ].length; i++ ) {
					containerSlides += '<source src="' + elem[ type ][ 'video' ][ i ] + '">';
				}
				containerSlides += '</video>';
				$( '.heroslider-' + index ).append( containerSlides );
			} else if ( elem[ type ][ 'image' ] != undefined ) {
				carouselImage = new Image();
				if ( elem[ type ][ 'image' ] != null ) {
					carouselImage.src = elem[ type ][ 'image' ];
				} else {
					carouselImage.src = elem[ 'desktop' ][ 'image' ];
				}
				$( '.heroslider-' + index + ' figure' ).append( carouselImage );

				$( carouselImage ).on( 'load', function() {
					verticalCarousel.heroHeight();
				} );
			}
			//generate elements of controls
			if ( $( '.hero-slider-controls #slide-' + index ).length == 0 ) {
				$( '.hero-slider-controls' ).append( '<div class="slide" id="slide-' + index + '"></div>' );
			}
			if ( typeof elem[ type ][ 'icon' ] == 'object' && elem[ type ][ 'icon' ] != false ) {
				var icons = '<figure>';
				for ( i = 0; i < elem[ type ][ 'icon' ].length; i++ ) {
					icons += '<img src="' + elem[ type ][ 'icon' ][ i ] + '" />';
				}
				icons += '</figure>';
				$( '#slide-' + index ).append( icons );
			}
		} );
		$( ".hero-slider-controls div" ).click( function( e ) {
			e.preventDefault();
			var $attId = $( this ).attr( 'id' ),
				slideNo = $attId.match( /\d+/ ) || 0;
			verticalCarousel.activeIcon( $( this ) );
			verticalCarousel.triggerCarousel( slideNo );
			verticalCarousel.videoTrigger( slideNo );
		} );
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
		$( ".hero-slider-controls div" ).removeClass( "active", 500 );
		$( element ).addClass( "active", 500 );
	},
	/*
	 * create carousel animation
	 */
	triggerCarousel: function( elem ) {
		var type = this.widthPage() || 'desktop';
		if ( type === 'desktop' ) {
			$( '.hero-wrapper' ).css( {
				transition: CarouselOptions.animation,
				'top': '-' + this.sliderPosition()[ elem ] + 'px'
			} );
		} else if ( type === 'mobile' ) {
			$( '.hero-wrapper' ).css( {
				transition: CarouselOptions.animation,
				'left': '-' + this.sliderPosition()[ elem ] + 'px'
			} );
		}
	},
	/*
	 * adjust position of active block on resize
	 */
	responsiveActiveBlock: function() {
		var $active = $( '.hero-slider-controls .active' ).attr( 'id' ),
			slideNo = $active.match( /\d+/ ) || 0;
		$( '.hero-wrapper' ).css( 'top', '0' ).css( 'left', '0' );
		if ( BrowserType === 'desktop' ) {
			$( '.hero-wrapper' ).css( 'top', '-' + this.sliderPosition()[ slideNo ] + 'px' );
		} else if ( BrowserType === 'mobile' ) {
			$( '.hero-wrapper' ).css( 'left', '-' + this.sliderPosition()[ slideNo ] + 'px' );
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
		var hero_height = 0,
			image_height = $( '.huge-hero-image figure img' ).first().height(),
			video_height = $( '.huge-hero-image video' ).innerHeight();
		if ( image_height > 0 ) {
			$( ".huge-hero" ).height( image_height );
			$( '.huge-hero-image video' ).height( image_height );
		} else if ( video_height > 0 ) {
			$( ".huge-hero" ).height( video_height );
		}
		$( '.huge-hero-image' ).width( $( window ).outerWidth( true ) + 4 );
	},
	/*
	 * calculate position of sliders on resize
	 */
	sliderPosition: function() {
		var elements = $( '.huge-hero-image' ),
			result = {},
			type = this.widthPage() || 'desktop';
		result[ 0 ] = 0;
		if ( type === 'desktop' ) {
			$( elements ).each( function( index, elem ) {
				result[ index + 1 ] = result[ index ] + $( elem ).height();
			} );
		}
		if ( type === 'mobile' ) {
			$( elements ).each( function( index, elem ) {
				result[ index + 1 ] = result[ index ] + $( elem ).width();
			} );
		}
		return result;
	},
	/*
	 * destroy carousel on breakpoints
	 */
	destroy: function() {
		$( '.hero-slider-controls .slide' ).html( '' );
		$( '.huge-hero-image figure' ).html( '' );
		$( '.huge-hero-image video' ).remove();
		$( ".hero-slider-controls div" ).unbind( "click" );
		$( '.hero-wrapper' ).css( 'top', '0' ).css( 'left', '0' );
	},
	/*
	 * create automatic trigger on continuous carousel
	 */
	autoTrigger: function() {
		var slides = $( '.hero-slider-controls div' ).length,
			$active = $( '.hero-slider-controls .active' ).attr( 'id' ),
			slideNo = parseInt( $active.match( /\d+/ ) ) || 0,
			next = 0;
		if ( slideNo + 1 >= slides ) {
			next = 0;
		} else {
			next = slideNo + 1;
		}
		$( '.hero-slider-controls #slide-' + next ).trigger( 'click' );
		return;
	}
};

$( document ).ready( function() {
	var slides = [ {
			'desktop': {
				'image': 'images/twc-tv-app-hero-desktop.jpg',
				'icon': [ 'images/digitalTV.png', 'images/digitalTV-active.png' ]
			},
			'mobile': {
				'image': 'images/twc-tv-app-hero-mobile.jpg',
				'icon': false
			}
		}, {
			'desktop': {
				'video': [
					'http://content.bitsontherun.com/videos/bkaovAYt-52qL9xLP.mp4',
					'http://content.bitsontherun.com/videos/bkaovAYt-27m5HpIu.webm'
				],
				'poster': 'http://content.bitsontherun.com/thumbs/bkaovAYt-320.jpg',
				'icon': [ 'images/internet.png', 'images/internet-active.png' ]
			},
			'mobile': {
				'video': [
					'http://content.bitsontherun.com/videos/bkaovAYt-52qL9xLP.mp4',
					'http://content.bitsontherun.com/videos/bkaovAYt-27m5HpIu.webm'
				],
				'poster': 'http://content.bitsontherun.com/thumbs/bkaovAYt-320.jpg',
				'icon': false
			}
		}, {
			'desktop': {
				'image': 'images/hd-channels-hero-desktop.jpg',
				'icon': [ 'images/phone.png', 'images/phone-active.png' ]
			},
			'mobile': {
				'image': 'images/hd-channels-hero-mobile.jpg',
				'icon': false
			}
		}, {
			'desktop': {
				'image': 'images/on-demand-hero-desktop.jpg',
				'icon': [ 'images/intelligenthome.png', 'images/intelligenthome-active.png' ]
			},
			'mobile': {
				'image': 'images/on-demand-hero-mobile.jpg',
				'icon': false
			}
		} ],
		slide_options = {
			speed: 10000,
			animation: '0.5s linear',
			auto: false,
			hover: true
		};

	verticalCarousel.create( '.huge-hero', slides, slide_options );

} );