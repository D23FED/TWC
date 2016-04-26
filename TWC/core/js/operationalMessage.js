/* ==========================================================================
    Operational Message -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
// if more than 1 marquee message, show left/right nav
if ( $( '.marquee-messages ul li' ).length > 1 ) {
	$( '.controls' ).show();
}
$( '.marquee-messages ul li' ).first().addClass( 'js-selected' ).show();
$( '.marquee-messages ul li:gt(0)' ).addClass( 'js-opMessages' );
$( '#marquee-right' ).click( function() {
	if ( $( '.js-selected' ).next().index() === -1 ) {
		$( '.marquee-messages ul li' ).removeClass( 'js-selected' ).hide().first().addClass( 'js-selected' ).fadeIn();
	} else {
		$( '.marquee-messages ul li' ).hide();
		$( '.js-selected' ).removeClass( 'js-selected' ).next().addClass( 'js-selected' ).fadeIn();
	}
} );
$( '#marquee-left' ).click( function() {
	if ( $( '.js-selected' ).prev().index() === -1 ) {
		$( '.marquee-messages ul li' ).removeClass( 'js-selected' ).hide().last().addClass( 'js-selected' ).fadeIn();
	} else {
		$( '.marquee-messages ul li' ).hide();
		$( '.js-selected' ).removeClass( 'js-selected' ).prev().addClass( 'js-selected' ).fadeIn();
	}
} );