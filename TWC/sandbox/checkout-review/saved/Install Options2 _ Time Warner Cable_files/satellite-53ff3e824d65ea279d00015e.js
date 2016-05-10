( function( win, doc ) {

	var scriptElement, scrSrc;

	if ( typeof( win.ClickTaleCreateDOMElement ) != "function" ) {
		win.ClickTaleCreateDOMElement = function( tagName ) {
			if ( doc.createElementNS ) {
				return doc.createElementNS( 'http://www.w3.org/1999/xhtml', tagName );
			}
			return doc.createElement( tagName );
		}
	}

	win.WRInitTime = ( new Date() ).getTime();

	scriptElement = ClickTaleCreateDOMElement( 'script' );
	scriptElement.type = "text/javascript";

	scrSrc = doc.location.protocol == 'https:' ? 'https://cdnssl.clicktale.net/' : 'http://cdn.clicktale.net/';

	scrSrc += 'www04/ptc/8f411afc-b269-41aa-a062-0be7f6d04815.js';

	scriptElement.src = scrSrc;

	doc.getElementsByTagName( 'body' )[ 0 ].appendChild( scriptElement );
} )( window, document );