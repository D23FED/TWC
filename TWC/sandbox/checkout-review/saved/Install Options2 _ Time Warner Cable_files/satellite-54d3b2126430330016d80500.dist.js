console.log( 'DTM Build Date: ' + _satellite.buildDate );
//DTM Staging/*

if ( _satellite.getVar( 'testing' ) == "true" ) {
	if ( localStorage.getItem( 'sdsat_stagingLibrary' ) != "true" ) {
		localStorage.setItem( "sdsat_stagingLibrary", "true" );
		_satellite.setDebug( true );
		//location.reload(); 
	}

} else if ( _satellite.getVar( 'testing' ) == "false" || localStorage.getItem( 'sdsat_stagingLibrary' ) == null ) {
	if ( localStorage.getItem( 'sdsat_stagingLibrary' ) != "false" ) {
		localStorage.setItem( "sdsat_stagingLibrary", "false" );
		_satellite.setDebug( false );
		//location.reload(); 
	}
}

//DTM AAM Variables
function setAAMdtm( a ) {
	if ( typeof a.stuff !== 'undefined' ) {
		// the variable is defined

		if ( a.stuff.length > 3 ) {
			for ( var i = 0; i < a.stuff.length; i++ ) {

				if ( a.stuff[ i ].cn == "aam_tnt" ) {

					var aamVars = a.stuff[ i ].cv.split( ',' );

					for ( var v = 0; v < aamVars.length; v++ ) {

						if ( aamVars[ v ].indexOf( 'aamisp' ) > -1 ) {

							if ( aamVars[ v ].split( '=' )[ 1 ] == "onnetexist" ) {

								_satellite.setCookie( "twc_dtm_onnet", "true" );
								//_satellite.track('AAM Poll');
							}
						}
					}
				}
				if ( a.stuff[ i ].cn == "aam_aimedia_cb" ) {

					_satellite.setCookie( "twc_dtm_curcust", a.stuff[ i ].cv.split( "=" )[ 1 ] );

				}
			}
		}
	}

}
jQuery( document ).ready( function() {
	jQuery.getScript( "//twc.demdex.net/event?d_stuff=1&d_rtbd=json&d_cb=setAAMdtm" );
} );


//Marchex
switch ( _satellite.getVar( "Marchex Winner" ) ) {
	case 'display':
		vs_account_id = "CtjSZVRRgLgsMgBx";
		vs_ref_override = _satellite.getVar( "_vsrefdom" );
		_vskw = _satellite.getVar( "cid" );
		break;
	case 'email':
		vs_account_id = "CA6prFYWwqtKQQE_";
		vs_ref_override = _satellite.getVar( "_vsrefdom" );
		_vskw = _satellite.getVar( "cid" );
		break;
	case 'gclid':
		vs_account_id = "CtjSZ1Q0KccIcwC9";
		_vskw = _satellite.getVar( "gclid" );

		if ( _satellite.getVar( "IsMobile" ) == "true" ) {
			vs_ref_override = "twchpmobile";
		} else {
			vs_ref_override = "twchpdesktop";
		}
		if ( location.href.indexOf( 'en/specials' ) > -1 ) {
			vs_account_id = "CtjSZ1O8AtN5ygAO";

			if ( _satellite.getVar( "IsMobile" ) == 'true' ) {
				vs_ref_override = "mobile";
			} else {
				vs_ref_override = "desktop";
			}
		}
		if ( location.href.indexOf( 'residential/order' ) > -1 ) {
			vs_account_id = "CtjSZVP8stBEzgBh";

			if ( _satellite.getVar( "IsMobile" ) == "true" ) {
				vs_ref_override = "mobilebf";
			} else {
				vs_ref_override = "desktopbf";
			}
		}

		break;
}
if ( typeof vs_account_id != "undefined" ) {
	_satellite.track( "Marchex" );
}