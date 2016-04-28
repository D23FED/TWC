$( '.clu-filter-label' ).click( function() {
	$( this ).parent().siblings( '.clu-filter' ).removeClass( 'js-active' );
	$( this ).parent().toggleClass( 'js-active' );
} );

$( '.clu-filter-close' ).click( function() {
	$( this ).parents( '.clu-filter' ).toggleClass( 'js-active' );
	return false;
} );

$( '.clu-filter-clear' ).click( function() {
	$( this ).parents( '.clu-filter-footer' ).siblings( '.clu-filters' ).find( ':checkbox' ).removeAttr( 'checked' );
	return false;
} );

// Fix Sticky header width when twc-container media query at 66.15em kicks in
if ( $( window ).width() > 768 && $( window ).width() < 1059 ) {
	var onLoadTableWidth = $( 'tbody.search-table' ).outerWidth();
	$( 'thead.sticky' ).css( {
		"max-width": onLoadTableWidth
	} );
}

$( window ).resize( function() {
	if ( $( window ).width() > 768 && $( window ).width() < 1059 ) {
		var tableWidth = $( 'tbody.search-table' ).outerWidth();
		$( 'thead.sticky' ).css( {
			"max-width": tableWidth
		} );
	} else {
		$( 'thead.sticky' ).css( {
			"max-width": "980px"
		} );
	}
} );