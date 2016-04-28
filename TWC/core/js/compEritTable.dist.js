/* ==========================================================================
    CompEritTable -- Version: 1.9.0.4 - Updated: 3/3/2014
   ========================================================================== */

$( function() {
	adjustDIVS();
	adjustSize();

	$( window ).resize( function() {
		adjustSize();

		if ( $( window ).width() >= smallBreakPoint ) {
			$( '.compEritTable .package' ).find( 'span' ).hide();
			$( '.compEritTable .desc-details' ).hide();
			$( '.compEritTable .tempBadge' ).hide();
		} else {
			$( '.compEritTable .package' ).find( 'span' ).show();
			$( '.compEritTable .desc-details' ).show();
			$( '.compEritTable .tempBadge' ).show();
		}
	} );

	$( '.compEritTable .view-more' ).click( function() {
		$( this ).closest( '.compEritTable' ).toggleClass( 'js-active' );
		$( '.compEritTable .desc-details' ).hide();
		$( this ).closest( '.table' ).next( '.details-content' ).slideToggle();

		return false;
	} );

	$( '.compEritTable .viewDetail' ).click( function() {
		if ( $( window ).width() > smallBreakPoint ) {
			$( this ).closest( '.compEritTable' ).toggleClass( 'js-active' );
			$( '.compEritTable .desc-details' ).hide();
			$( this ).closest( '.table' ).next( '.details-content' ).slideToggle();
		}

		return false;
	} );
} );

function adjustDIVS() {
	$( '.compEritTable li.package' ).each( function( i ) {
		$( this ).addClass( 'package' + i );
	} );

	$( '.compEritTable ul.table' ).each( function() {
		$( '<span>' + $( this ).find( '.feature' ).text() + '</span>' ).appendTo( $( this ).find( '.package' ) );
		$( '<li class="desc-details h6">' + $( this ).find( '.desc' ).text() + '</li>' ).prependTo( $( this ).next( 'ul' ) );
		$( '<span class="tempBadge">' + $( this ).find( '.badge' ).html() + '</span>' ).prependTo( $( this ).next( 'ul' ) );
	} );
}

function adjustSize() {
	if ( $( window ).width() <= mediumBreakPoint ) {
		$( '.compEritTable li.package' ).each( function( i ) {
			$( this ).parent().find( '.feature' ).height( $( '.compEritTable .package' + i ).height() );
			$( this ).parent().find( '.order' ).height( $( '.compEritTable .pricing' ).height() );
			$( this ).parent().find( '.desc' ).height( $( '.compEritTable .package' + i ).height() );
		} );
	} else {
		$( '.compEritTable.five-column-compare .feature' ).attr( 'style', '' );
		$( '.compEritTable.five-column-compare .order' ).attr( 'style', '' );
		$( '.compEritTable.three-column-compare .desc' ).attr( 'style', '' );
	}
}