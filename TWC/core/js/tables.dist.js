/* ==========================================================================
    Tables -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$( window ).bind( "load", function() {
	$( '.checkboxTables' ).addClass( 'desktop' );

	var table = $( '<table class="checkboxTables mobile"></table>' );
	var tbody = $( '<tbody></tbody>' ).appendTo( table );

	$( '.desktop tbody tr' ).each( function( a ) {
		a = a + 1;
		$( this ).children( 'td' ).each( function( i ) {
			if ( !$( this ).hasClass( 'row-title' ) ) {
				var i = i + 1;
				$( this ).addClass( 'td_' + a + '-' + i );
			} else {
				$( this ).addClass( 'rt_' + a );
			}
		} );
	} );

	$( '.desktop thead tr th span.h5' ).each( function( index ) {
		var index = index + 2;
		$( this ).attr( 'id', 'th_' + index );
	} );

	for ( i = 2; i <= 7; i++ ) {
		var row = $( '<tr class="column-title"><td colspan="2"><span class="h5">' + $( '#th_' + i ).html() + '</span></td></tr>' ).appendTo( tbody );

		for ( a = 1; a <= 5; a++ ) {
			var row = $( '<tr class="row-title"></tr>' ).appendTo( tbody );
			var rowTitle = $( '<td>' + $( '.rt_' + a ).html() + '</td>' ).appendTo( row );
			$( '<td>' + $( '.td_' + a + '-' + i ).html() + '</td>' ).appendTo( row );
		}

		table.append( row );
	}

	$( table ).hide().insertAfter( '.desktop' );
	$( '.desktop thead tr th' ).find( 'div' ).first().clone().hide().addClass( 'cloned-button' ).appendTo( '.column-title td' );

	resizeTable();

	$( window ).bind( 'resize', function() {
		resizeTable();
	} );

	function resizeTable() {
		$( '.checkboxTables' ).show();

		if ( $( window ).width() <= smallBreakPoint ) {
			$( '.cloned-button' ).show();
			$( '.desktop' ).hide();
			$( '.mobile' ).show();
		} else {
			$( '.cloned-button' ).hide();
			$( '.desktop' ).show();
			$( '.mobile' ).hide();
		}
	}
} );