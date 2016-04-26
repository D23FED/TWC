/* ==========================================================================
    Flyout -- Version: 1.9.0.0 - Updated: 1/31/2014
   ========================================================================== */
$( function() {
	$( '.flyoutCTA' ).each( function( index ) {
		$( this ).attr( 'id', 'flyoutCTA' + index );
	} );

	$( '[id^="flyoutCTA"]' ).click( function() {
		$( this ).next().addClass( 'js-openWindow' ).toggle();
		$( this ).toggleClass( 'icon-angle-down' ).toggleClass( 'icon-angle-up' );
		return false;
	} );
} );