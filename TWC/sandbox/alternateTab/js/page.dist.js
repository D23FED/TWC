$( document ).ready( function() {
	var urlParam = window.location.href;
	var tabNumber = urlParam.substr( urlParam.indexOf( "#" ) + 1 );
	if ( window.location.hash ) {
		$( 'body' ).find( '[id*="tab"]' ).removeClass( 'js-active' );
		$( 'body' ).find( '#' + tabNumber ).addClass( 'js-active' );
		console.log( urlParam );
		console.log( tabNumber );
	}
} );