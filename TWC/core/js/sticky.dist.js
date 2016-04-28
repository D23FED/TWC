/* ==========================================================================
    Sticky -- Version: 2.1 - Updated: 6/8/2015
   ========================================================================== */
if ( !!$( '.sticky' ).offset() ) {
	$( function() {
		var stickyTop = $( '.sticky' ).offset().top;

		var stickyNav = function() {
			var scrollTop = $( window ).scrollTop();

			if ( scrollTop > stickyTop ) {
				$( '.sticky' ).addClass( 'js-sticky' );
			} else {
				$( '.sticky' ).removeClass( 'js-sticky' );
			}
		};

		stickyNav();

		$( window ).scroll( function() {
			stickyNav();
		} );
	} );
}

// Un-stick sticky if you scroll past the stickyElement
if ( $( ".stickyElement" )[ 0 ] ) {
	$.fn.is_on_screen = function() {
		var win = $( window );
		var stickyHeight = $( ".sticky" ).height();
		var viewport = {
			top: win.scrollTop() + stickyHeight,
			left: win.scrollLeft()
		};
		var bounds = this.offset();
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
		viewport.height = win.height() - stickyHeight;
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();
		return ( !( viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom ) );
	};

	$( window ).scroll( function() { // bind window scroll event
		if ( $( '.sticky' ).length > 0 ) { // if target element exists in DOM
			if ( $( '.stickyElement' ).is_on_screen() ) { // if target element is visible on screen
				$( '.sticky' ).removeClass( 'js-sticky-past' ); // Stick
			} else {
				$( '.sticky' ).addClass( 'js-sticky-past' ); // Unstick
			}
		} else {}
	} );
}

// Set sticky width to width of stickeyElement at old tablet breakpoint
$( document ).ready( function() {
	var stickyWidth = $( ".stickyElement" ).width(); // Set stickyWidth to width of lower table
	if ( $( window ).width() < 1059 && $( window ).width() > 768 ) { // 1059 is where the css for twc-container breaks the layout. 768 is where the problem fixes itself through css
		$( ".sticky" ).css( {
			width: stickyWidth + "px"
		} );
	}
} );
$( window ).resize( function() {
	var resizeStickyWidth = $( '.sticky' ).next( ".stickyElement" ).width(); // Set stickyWidth to width of lower table
	if ( $( window ).width() < 1059 && $( window ).width() > 768 ) {
		$( ".sticky" ).css( {
			width: resizeStickyWidth + "px"
		} ); // 1059 is where the css for twc-container breaks the layout. 768 is where the problem fixes itself through css
	} else {
		$( ".sticky" ).css( {
			width: "100" + "%"
		} ); // Removes the width if you resize from tablet to mobile (user rotating phone from landscape to portrait)
	}
} );

// Set height of stickySpacing to height of sticky element to prevent content from jumping up below the sticky element
// must pair with css to hide/show stickySpacing when sticky is stuck
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