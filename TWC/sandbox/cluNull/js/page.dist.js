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