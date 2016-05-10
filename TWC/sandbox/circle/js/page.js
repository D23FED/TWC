$( window ).load( function() {
	$( function() {
		$( '.btn-rotate' ).on( 'click', function( e ) {
			e.preventDefault();
			var rotation = $( this ).text() + 'deg';
			$( '.mask.full' ).css( 'transform', 'rotate(' + rotation + ')' );
			$( '.fill' ).css( 'transform', 'rotate(' + rotation + ')' );
		} );

	} )
} )