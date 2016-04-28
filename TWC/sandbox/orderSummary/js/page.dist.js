$( '.verticalAccordionHeader' ).click( function() {
	if ( $( this ).siblings( '.verticalAccordionContent' ).is( ':hidden' ) ) {
		$( this ).children( '.icon-before' ).addClass( 'js-toggle' );
		$( this ).siblings( '.verticalAccordionContent' ).addClass( 'js-expanded' ).slideDown();
		console.log( 'hidden' );
	} else {
		$( this ).children( '.icon-before' ).removeClass( 'js-toggle' );
		$( this ).siblings( '.verticalAccordionContent' ).removeClass( 'js-expanded' ).slideUp();
		console.log( 'visible' );
	}
} );

$( '.submitOrder' ).click( function() {
	var findTerms = $( this ).parents( '.cta' ).siblings( '.termsConditions' ).find( '.terms' );
	var findCheckbox = $( findTerms ).find( '#termsAndConditions' );

	if ( $( findCheckbox ).is( ':checked' ) ) {
		console.log( 'checked' );
		$( findTerms ).removeClass( 'termsError' );
	} else {
		console.log( 'not checked' );
		$( findTerms ).addClass( 'termsError' );
	}
	return false;
} );