$( window ).load( function() {
	$( function() {
		$( '.btn-rotate' ).on( 'click', function( e ) {
			e.preventDefault();
			var rotation = $( this ).text();
			var fillRotation = rotation + 'deg';
			var fixRotation = ( rotation * 2 ) + 'deg';
			$( '.fill, .mask.full' ).css( 'transform', 'rotate(' + fillRotation + ')' );
			$( '.fill.fix' ).css( 'transform', 'rotate(' + fixRotation + ')' );
		} );
	} )
} )

// Small offset = long line
// Large offset = small line

// Scenario: Go from short line to longer
// Offset is larger than target
// line is at 25%, animate to 75%
// Start offest at 300, move to 100, goTo is 100
// Make offset smaller to make line bigger
var circleSelector = '.circle-08 .semicircle',
	$target = $( circleSelector ),
	$controls = $( '.circle-08 .controls' ),
	totalLength = $target[ 0 ].getTotalLength(),
	offset = totalLength,
	stepSize = 3,
	direction = 'lengthen';

$target.css( 'stroke-dashoffset', totalLength );
$target.css( 'stroke-dasharray', totalLength );

function animateCircle( args ) {
	if ( args.goTo ) {
		goTo = ( 100 - args.goTo ) * totalLength * .01;
		if ( offset > goTo ) {
			direction = 'lengthen';
			modifier = stepSize * -1;
		} else {
			direction = 'shorten';
			modifier = stepSize;
		}
	} else {
		goTo = 0;
	}

	var step = function() {
		var t = document.querySelector( circleSelector );
		t.style.strokeDashoffset = offset;
		offset += modifier;
		if ( ( direction === 'lengthen' && offset < goTo ) || ( direction === 'shorten' && offset > goTo ) ) {
			$( 'div.offset .raw' ).text( Math.floor( offset ) );
			$( 'div.offset .percent' ).text( ( 100 - ( Math.floor( 100 * ( offset / totalLength ) ) ) ) - 1 );
			// console.log('[fin]','offset: ' + offset,'goTo: ' + goTo)
			return;
		}
		requestAnimationFrame( step );
	};
	step();
}


// Append controls
for ( var i = 1; i < 5; i++ ) {
	$controls.append( '<a href="#">' + i * 25 + "</a>" );
}

// Controls
$controls.find( 'a' ).on( 'click', function( e ) {
	var text = $( this ).text();
	animateCircle( {
		goTo: parseInt( text )
	} )
} );

// Initial Call
animateCircle( {
	goTo: 25
} );

var
	fillColor = '#00549f',
	fillColor02 = '#02a9e0',
	canvasH = 300,
	canvasW = 300,
	x = canvasW / 2,
	y = canvasH / 2,
	increment = 5,
	interval = 30,
	strokeWidth = 15,
	strokeWidth02 = 5;
// Canvas
window.onload = function() {
	canvasApp();
}

function angleToRadians( angle ) {
	return ( Math.PI / 180 ) * angle;
}

function canvasApp() {
	var theCanvas = document.getElementById( "canvas-01" );
	// var theCanvas02 = document.getElementById("canvas-02");
	var ctx = theCanvas.getContext( "2d" );
	// var ctx02 = theCanvas02.getContext("2d");
	var angle = 60;
	var angleIncrement = increment;

	console.log( Math.PI / 180 );
	console.log( ( Math.PI / 180 ) * 1 )

	function drawArcStroke( x, y, r, start, end, dir ) {
		ctx.beginPath();
		ctx.arc( x, y, r, start, end, dir );
		ctx.stroke();
		ctx.closePath();
	}

	function clear() {
		ctx.fillStyle = '#ffffff';
		ctx.fillRect( 0, 0, canvasW, canvasW );
	}


	function drawScreen() {
		var radians = angleToRadians( angle );
		var start = angleToRadians( 60 );
		clear();

		// Circle 1
		ctx.strokeStyle = fillColor;
		ctx.lineWidth = strokeWidth;
		drawArcStroke( x, y, 100, start, radians, false );
		console.log( 'drawing from ', start, radians );

		// Circle 2
		ctx.strokeStyle = fillColor02;
		ctx.lineWidth = strokeWidth02;
		drawArcStroke( x, y, 80, start, radians, false );
		// angle = angle + angleIncrement;
		console.log( angle, radians );
		angle = angle + angleIncrement;
		if ( angle > 360 ) {
			clearInterval( circle );
		}
	}
	//
	circle = setInterval(
		drawScreen, interval
	);
	//drawScreen();
}