/* ==========================================================================
    Hide / Show -- Version: 1.9.0.2 - Updated: 3/21/2014
    ========================================================================== */

( function( $ ) {

	$.fn.hideshow = function() {
		$( '.hideshow-link' ).click( function() {
			if ( $( this ).prev( '.hideshow-container' ).is( ':hidden' ) ) {
				$( this ).prev( '.hideshow-container' ).show();
				htmlText = 'View less';
			} else {
				$( this ).prev( '.hideshow-container' ).hide();
				htmlText = 'View more';
			}

			$( this ).html( '<a href=""><span>' + htmlText + '</span></a>' );
			return false;
		} );
	}

}( jQuery ) );

$( '.hideshow' ).hideshow();