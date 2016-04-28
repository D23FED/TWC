$( document ).ready( function() {

	var stickytimer,
		stickyscrolling = false,
		stickyContainer = '.scroll-arrow';

	$( '.scroll-arrow a' ).click( function( e ) {
		e.preventDefault();
		var elements_tops = $( '.scrollto-point' ).getTopPosition(),
			topWindow = parseInt( $( window ).scrollTop() ) + 1;
		next_elem = elements_tops[ 0 ],
			topFooter = parseInt( $( 'footer' ).position().top ),
			windowHeight = parseInt( $( window ).height() ),
			_break = false;
		for ( var i = 0; i < elements_tops.length; i++ ) {
			if ( elements_tops[ i ] >= topWindow && _break === false ) {
				next_elem = elements_tops[ i ];
				_break = true;
			}
		}
		$( 'body,html' ).animate( {
			scrollTop: next_elem
		}, 1000, 'swing' );

	} );

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
	$( window ).on( 'scroll', onScrollStart );

} );
$.fn.getTopPosition = function() {
	var tops = [];
	$( this ).each( function( index, elem ) {
		if ( typeof $( elem ).offset() == 'object' ) {
			tops.push( parseInt( $( elem ).offset().top ) );
		}
	} );
	return tops;
};