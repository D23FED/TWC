/* ==========================================================================
    Header -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
$( 'li.twc-drop-nav' ).mouseenter( function() {
	$( this ).addClass( 'js-persist' );
} );
$( 'a.twc-change' ).click( function() {
	$( 'li.twc-drop-nav' ).toggleClass( 'js-persist' );
} );