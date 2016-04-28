// Prevent content from jumping below sticky header when it sticks
// Must pair with CSS to hide/show .stickySpacing
$( document ).ready( function() {
	var stickySpacing = $( '.sticky' ).outerHeight();
	$( '.stickySpacing' ).height( stickySpacing );

	$( '.scrollTop' ).click( function() {
		$( "html, body" ).animate( {
			scrollTop: 0
		}, 600 );
		return false;
	} );
} );

$( '[id*="compare-package-"' ).click( function() {
	$( this ).parents( '.sbsCompare' ).find( '.sticky' ).slideToggle().toggleClass( 'js-active' );
	$( 'html, body' ).animate( {
		scrollTop: $( ".stickySpacing" ).offset().top
	}, 1000 );
	return false;
} );

// Start Quick Checkout
$( '.quickCheckoutBtn' ).click( function() {
	$( this ).toggleClass( 'icon-angle-down icon-angle-up' );
	$( this ).siblings( '.quickCheckoutContent' ).slideToggle().toggleClass( 'js-active' );
	return false;
} );