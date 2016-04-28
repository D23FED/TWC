$( '#cart' ).click( function() {
	$( this ).children( '.imageWrapper' ).toggleClass( 'empty full' );
	return false;
} );