$( '.flyoutCTA' ).on( 'click', function() {
	if ( $( this ).hasClass( 'icon-angle-up' ) ) {
		$( '.flyoutContent-down' ).remove( 'style' );
	} else {
		$( '.flyoutContent-down' ).css( 'display', 'none' );
		$( '.flyoutCTA' ).removeClass( 'icon-angle-up' );
		$( '.flyoutCTA' ).addClass( 'icon-angle-down' );
	}
} );
$( 'html' ).on( 'click', function() {
	$( '.flyoutContent-down' ).each( function() {
		if ( $( this ).css( 'display' ) == 'block' ) {
			$( '.flyoutCTA' ).removeClass( 'icon-angle-up' );
			$( '.flyoutCTA' ).addClass( 'icon-angle-down' );
		}
	} );
} );

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
	$( window ).on( 'scroll', onScrollStart );
} );






/*$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($('.scroll-arrow').css('display') != 'none') {
            $('.scroll-arrow').fadeOut("slow");
        }
    });
});*/