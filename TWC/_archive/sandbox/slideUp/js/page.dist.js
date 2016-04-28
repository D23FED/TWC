$( document ).ready( function() {
	$( '.slideUpContainer' ).addClass( 'js-inactive' );
} );

$( '.slideToggle' ).click( function() {
	$( this ).parents( '.expandUp' ).siblings( '.expandUp' ).children( '.slideUpContainer' ).removeClass( 'js-active' ).addClass( 'js-inactive' ).slideUp();
	if ( $( this ).siblings( '.slideUpContainer' ).hasClass( 'js-inactive' ) ) {
		$( this ).siblings( '.slideUpContainer' ).removeClass( 'js-inactive' ).addClass( 'js-active' ).slideDown();
	} else {
		$( this ).siblings( '.slideUpContainer' ).removeClass( 'js-active' ).addClass( 'js-inactive' ).slideUp();;
	}
	return false;
} );