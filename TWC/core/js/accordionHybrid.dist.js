/* ==========================================================================
    Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$( '.accordionHybrid .expandableHybrid ul li' ).each( function() {
	if ( $( this ).has( 'ul' ).length ) {
		$( this ).addClass( 'js-expandableHybrid' );
	} else if ( $( this ).next().hasClass( 'activeContent' ) ) {
		$( this ).addClass( 'js-expandableHybridSub' );
	} else {
		$( this ).addClass( 'js-notexpandableHybrid' );
	}
	//check for expand cookie and slideDown() active
	if ( $.cookie( 'js-expandHybrid' ) && $( this ).find( '.js-expandableHybrid h6' ).text() === $.cookie( 'js-expandHybrid' ) ) {
		if ( $( window ).width() < 768 ) {
			$( '.js-expandableHybrid .activeContent' ).show();
		} else {
			$( '.js-expandableHybrid .activeContent' ).hide();
		}
		$( this ).find( 'ul' ).slideDown();
	}
} );

//open first nav item if no cookie exists
if ( !$.cookie( 'js-expandHybrid' ) ) {
	$( '.accordionHybrid .expandableHybrid ul .js-expandableHybrid' ).first().addClass( 'js-active' ).find( 'ul' ).slideDown();
} else {
	$( '.accordionHybrid .js-active' ).find( 'ul' ).slideDown( function() {} );
}

$( '.accordionHybrid li.js-expandableHybrid h6' ).click( function() {
	var categoryText = $( this ).text();
	$( '.accordionHybrid .activeContent' ).hide();
	$( this ).parent().addClass( 'js-active' ).find( 'ul' ).slideToggle( function() {
		$.cookie( 'js-expandHybrid', categoryText );
		if ( $( this ).is( ':hidden' ) ) {
			$( this ).parent().removeClass( 'js-active' );
			$.cookie( 'js-expandHybrid', null );
		}
	} );
} );

$( '.accordionHybrid li.js-expandableHybridSub' ).click( function() {
	if ( $( window ).width() < 768 ) {
		var categoryText = $( this ).text();
		$( this ).next( '.activeContent' ).slideToggle( function() {
			if ( $( this ).is( ":hidden" ) ) {
				$( '.accordionHybrid .activeContent' ).hide();
			} else {
				$( '.accordionHybrid .activeContent' ).show();
			}
		} );
	}

	return false;
} );