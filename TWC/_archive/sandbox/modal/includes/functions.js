  $( function() {
  	$( '#modalToTop' ).click( function() {
  		$( '.modal-body' ).animate( {
  			'scrollTop': 0
  		}, 1000 );
  		return false;
  	} );
  } );