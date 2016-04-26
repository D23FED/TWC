/* ==========================================================================
    Adjust Topic Height -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
function adjustTopicHeight() {
	var topicHeight = $( '#topics-container' ).height();
	$( '#topics' ).css( {
		'height': topicHeight
	} );
}
var windowTimer = null;
if ( $( window ).width() >= mediumBreakPoint ) {
	adjustTopicHeight();
}
$( window ).bind( 'resize', function() {
	if ( $( window ).width() >= mediumBreakPoint ) {
		if ( windowTimer ) clearTimeout( windowTimer );
		windowTimer = setTimeout( adjustTopicHeight, 150 );
	} else {
		$( '#topics' ).css( {
			'height': 'auto'
		} );
	}
} );