$( function() {
	$( '.scrollTo' ).click( function() {
		var divPosition = $( '#' + $( this ).attr( 'data-attribute' ) ).offset();
		$( 'html, body' ).animate( {
			scrollTop: divPosition.top
		}, "slow" );
		return false;
	} );

	$( '#scrollToTop' ).click( function() {
		$( 'html, body' ).animate( {
			'scrollTop': 0
		}, 1000 );
		return false;
	} );

	$( '#modalToTop' ).click( function() {
		$( '.modal-body' ).animate( {
			'scrollTop': 0
		}, 1000 );
		return false;
	} );
} );