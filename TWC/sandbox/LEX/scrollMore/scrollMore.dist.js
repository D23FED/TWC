$( document ).ready( function() {
	var stickytimer,
		stickyscrolling = false,
		stickyContainer = '.scroll-arrow';

	function onScrollStart() {
		clearTimeout( stickytimer );
		stickytimer = setTimeout( onScrollStop, 500 );
		if ( stickyscrolling === false ) {
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
	}
	$( window ).on( 'scroll touchmove', onScrollStart );
} );