// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// Generated on: 4/10/2016 7:09:46 AM (UTC 4/10/2016 12:09:46 PM)

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || ( function() {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function( percentage ) {
			return recordingThreshold <= percentage;
		}
	}
} )();


// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 46
// WR destination: www04
// WR version: 15.4
// Recording ratio: 0.0125
// Generated on: 4/10/2016 7:09:46 AM (UTC 4/10/2016 12:09:46 PM)
( function() {
	var dependencyCallback;
	var scriptSyncTokens = [ "wr" ];
	var dependencies = scriptSyncTokens.slice( 0 );

	function isValidToken( token ) {
		if ( scriptSyncTokens.indexOf( token ) > -1 ) {
			var index = dependencies.indexOf( token );

			if ( index > -1 ) {
				dependencies.splice( index, 1 );
				return true;
			}
		}

		return false;
	}
	window.ClickTaleGlobal = window.ClickTaleGlobal || {};
	ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
	ClickTaleGlobal.scripts.dependencies = {
		setDependencies: function( deps ) {
			scriptSyncTokens = deps;
		},
		onDependencyResolved: function( callback ) {
			dependencyCallback = callback;
		},
		notifyScriptLoaded: function( token ) {
			if ( isValidToken( token ) ) {
				if ( dependencies.length === 0 && typeof dependencyCallback === "function" ) {
					dependencyCallback();
				}
			}
		}
	};
} )();



function ClickTaleCDNHTTPSRewrite( u ) {
	try {
		var scripts = document.getElementsByTagName( 'script' );
		if ( scripts.length ) {
			var script = scripts[ scripts.length - 1 ],
				s = 'https://clicktalecdn.sslcs.cdngc.net/';
			if ( script.src && script.src.substr( 0, s.length ) == s )
				return u.replace( 'https://cdnssl.clicktale.net/', s );
		}
	} catch ( e ) {}
	return u;
}

var ClickTaleIsXHTMLCompliant = true;
if ( typeof( ClickTaleCreateDOMElement ) != "function" ) {
	ClickTaleCreateDOMElement = function( tagName ) {
		if ( document.createElementNS ) {
			return document.createElementNS( 'http://www.w3.org/1999/xhtml', tagName );
		}
		return document.createElement( tagName );
	}
}

if ( typeof( ClickTaleAppendInHead ) != "function" ) {
	ClickTaleAppendInHead = function( element ) {
		var parent = document.getElementsByTagName( 'head' ).item( 0 ) || document.documentElement;
		parent.appendChild( element );
	}
}

if ( typeof( ClickTaleXHTMLCompliantScriptTagCreate ) != "function" ) {
	ClickTaleXHTMLCompliantScriptTagCreate = function( code ) {
		var script = ClickTaleCreateDOMElement( 'script' );
		script.setAttribute( "type", "text/javascript" );
		script.text = code;
		return script;
	}
}

var pccScriptElement = ClickTaleCreateDOMElement( 'script' );
pccScriptElement.type = "text/javascript";
pccScriptElement.src = ( document.location.protocol == 'https:' ?
	ClickTaleCDNHTTPSRewrite( 'https://cdnssl.clicktale.net/www04/pcc/8f411afc-b269-41aa-a062-0be7f6d04815.js?DeploymentConfigName=Release_10042016&Version=5' ) :
	'http://cdn.clicktale.net/www04/pcc/8f411afc-b269-41aa-a062-0be7f6d04815.js?DeploymentConfigName=Release_10042016&Version=5' );
document.body.appendChild( pccScriptElement );

var ClickTalePrevOnReady;
if ( typeof ClickTaleOnReady == 'function' ) {
	ClickTalePrevOnReady = ClickTaleOnReady;
	ClickTaleOnReady = undefined;
}

if ( typeof window.ClickTaleScriptSource == 'undefined' ) {
	window.ClickTaleScriptSource = ( document.location.protocol == 'https:' ? ClickTaleCDNHTTPSRewrite( 'https://cdnssl.clicktale.net/www/' ) : 'http://cdn.clicktale.net/www/' );
}


// Start of user-defined pre WR code (PreLoad)b
//PTC Code Version 4

window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleIncludedOnWindowLoad = true;
window.ClickTaleIncludedOnDOMReady = true;
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UseTransport = true;

window.ClickTaleSettings.CheckAgentSupport = function( f, v ) {
	if ( v.t == v.IE && v.v <= 8 ) {
		return false;
	} else {
		if ( !( v.t == v.IE && v.v <= 10 ) ) {
			window.ClickTaleSettings.PTC.ChangeMonitorCheck();
			window.ClickTaleSettings.PTC.ConfigChangeMonitor();
		}
		return f( v );
	}
};

window.ClickTaleSettings.PTC.ChangeMonitorCheck = function() {

	var ct_path = document.location.href.toLowerCase();
	var ChangeMonitor_URL_Map = new Object();

	ChangeMonitor_URL_Map[ 'www.timewarnercable.com/en/plans-packages/cable-internet.html' ] = false;
	ChangeMonitor_URL_Map[ 'www.timewarnercable.com/en/plans-packages/tv/digital-cable-tv-plans.html' ] = false;
	ChangeMonitor_URL_Map[ 'www.timewarnercable.com/en/plans-packages/internet/internet-service-plans.html' ] = false;
	ChangeMonitor_URL_Map[ 'www.timewarnercable.com/en/plans-packages/phone/domestic-international-calling-plans.html' ] = false;
	ChangeMonitor_URL_Map[ 'www.timewarnercable.com/en/support/internet/topics/buy-your-modem.html' ] = false;
	ChangeMonitor_URL_Map[ '' ] = true;

	for ( var URL_Key in ChangeMonitor_URL_Map ) {
		if ( ct_path.indexOf( URL_Key.toLowerCase() ) > -1 ) {
			window.ClickTaleSettings.PTC.EnableChangeMonitor = ChangeMonitor_URL_Map[ URL_Key ];
			break;
		}
	}
};

( function() {
	var hostname = document.location.hostname.toLowerCase();
	if ( hostname.indexOf( 'twcable.com' ) != -1 ) {
		window.ClickTaleCookieDomain = 'twcable.com';
	} else if ( hostname.indexOf( 'timewarnercable.com' ) != -1 ) {
		window.ClickTaleCookieDomain = 'timewarnercable.com';
	}
} )();

window.ClickTaleSettings.PTC.RulesObj = [ {
	selector: "input[type=\"text\"], input[type=\"tel\"], input[type=\"email\"]",
	changeMon: {
		Attributes: [ 'value' ],
		Text: false
	},
	rewriteApi: {
		Attributes: [ 'value' ],
		Text: false
	}
}, {
	selector: "#addrList option, div.service-address > p.location, div.installationAddressHeader ~ p, div.installationAddressHeader ~ p *, div.paymentDetails div.payment div.col, div.paymentDetails div.payment div.col p, div.orderDetails > p:not(.last)",
	changeMon: {
		Attributes: false,
		Text: true
	},
	rewriteApi: {
		Attributes: false,
		Text: true
	}
} ]

window.ClickTaleSettings.PTC.RulesObjRemoveEls = [ {
	changeMon: 'iframe, .last input[type=radio][name=select]',
	rewriteApiRemove: '',
	rewriteApiReplace: '',
	location: ''
} ]

window.ClickTaleSettings.PTC.cloneNodeIE9 = function( node ) {
	var clone = node.nodeType === 3 ? document.createTextNode( node.nodeValue ) : node.cloneNode( false );

	var child = node.firstChild;
	while ( child ) {
		if ( child.nodeName !== 'SCRIPT' ) {
			clone.appendChild( window.ClickTaleSettings.PTC.cloneNodeIE9( child ) );
		} else {
			var script = document.createElement( 'script' );
			clone.appendChild( script );
		}
		child = child.nextSibling;
	}

	return clone;
};

window.ClickTaleSettings.PTC.ConfigChangeMonitor = function() {

	if ( window.ClickTaleSettings.PTC.EnableChangeMonitor ) {
		window.ClickTaleSettings.XHRWrapper = {
			Enable: false
		};

		var script = document.createElement( "SCRIPT" );
		script.src = ( document.location.protocol === "https:" ? "https://cdnssl." : "http://cdn." ) + "clicktale.net/www/ChangeMonitor-latest.js";
		document.body.appendChild( script );

		window.ClickTaleSettings.ChangeMonitor = {
			Enable: true,
			AddressingMode: "id",
			OnReadyHandler: function( changeMonitor ) {
				changeMonitor.observe();

				var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
				if ( CMRemrule ) {
					for ( var i = 0; i < CMRemrule.length; i++ ) {
						var CMlocation = CMRemrule[ i ][ 'location' ];
						if ( ( !CMlocation || ( CMlocation && document.location[ CMlocation[ 'prop' ] ].toLowerCase().search( CMlocation.search ) === -1 ) ) && CMRemrule[ i ].changeMon ) {
							changeMonitor.exclude( CMRemrule[ i ].changeMon );
						}
					}
				}
			},
			OnBeforeReadyHandler: function( settings ) {
				settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;
				return settings;
			},
			Filters: {
				MaxBufferSize: 50000000,
				MaxElementCount: 30000
			},
			PII: {
				Text: [],
				Attributes: []
			}
		}
		var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
		if ( RulesObj ) {
			for ( var i = 0; i < RulesObj.length; i++ ) {
				var CMrule = RulesObj[ i ][ 'changeMon' ];
				var CMlocation = RulesObj[ i ][ 'location' ];
				if ( !CMrule || ( CMlocation && document.location[ CMlocation[ 'prop' ] ].toLowerCase().search( CMlocation.search ) === -1 ) ) {
					continue;
				}
				var selector = RulesObj[ i ][ 'selector' ];
				var attributesArr = CMrule.Attributes;
				if ( attributesArr instanceof Array ) {
					for ( var u = 0; u < attributesArr.length; u++ ) {
						var attr = attributesArr[ u ];
						window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push( {
							selector: selector,
							transform: function( el ) {
								var attrs = el.attributes;
								var attrsToReturn = {}
								for ( var i = 0; i < attrs.length; i++ ) {
									var name = attrs[ i ].nodeName;
									attrsToReturn[ name ] = attrs[ i ].nodeValue;
								}
								attrsToReturn[ attr ] = el[ attr ].replace( /\w/g, '-' );
								return attrsToReturn;
							}
						} );
					}
				}
				if ( CMrule.Text ) {
					window.ClickTaleSettings.ChangeMonitor.PII.Text.push( {
						selector: selector,
						transform: function( el ) {
							return el.textContent.replace( /\w/g, '-' );
						}
					} );
				}
			}
		}
	}
};

window.ClickTaleSettings.Compression = {
	Method: function() {
		return "deflate";
	}
};

window.ClickTaleSettings.Transport = {
	Legacy: false,
	MaxConcurrentRequests: 5
};

window.ClickTaleSettings.RewriteRules = {
	OnBeforeRewrite: function( rewriteApi ) {
		var bodyClone = ( ( document.documentMode && document.documentMode <= 9 ) ? ClickTaleSettings.PTC.cloneNodeIE9( document.body ) : document.body.cloneNode( true ) );

		if ( window.ClickTaleSettings.PTC.RulesObj ) {
			rewriteApi.add( function( buffer ) {

				var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
				for ( var i = 0; i < RulesObj.length; i++ ) {
					var rewriteApirule = RulesObj[ i ][ 'rewriteApi' ];
					var rewriteApilocation = RulesObj[ i ][ 'location' ];
					if ( !rewriteApirule || ( rewriteApilocation && document.location[ rewriteApilocation[ 'prop' ] ].toLowerCase().search( rewriteApilocation.search ) === -1 ) ) {
						continue;
					}
					var selector = RulesObj[ i ][ 'selector' ];
					var elements = bodyClone.querySelectorAll( selector );

					Array.prototype.forEach.call( elements, function( el, ind ) {
						var attributesArr = rewriteApirule.Attributes;
						if ( attributesArr instanceof Array ) {

							for ( var u = 0; u < attributesArr.length; u++ ) {
								var attr = attributesArr[ u ];
								el.setAttribute( attr, el[ attr ].replace( /\w/g, '-' ) );
							}

						}
						if ( rewriteApirule.Text ) {
							var children = el.childNodes;
							Array.prototype.forEach.call( children, function( child ) {
								if ( child && child.nodeType === 3 ) {
									child.textContent = child.textContent.replace( /\w/g, '-' );
								}
							} );
						}
					} );
				}

				//work on body
				var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
				if ( RulesObjRemoveEls ) {
					for ( var i = 0; i < RulesObjRemoveEls.length; i++ ) {
						if ( RulesObjRemoveEls[ i ].rewriteApi ) {
							var elementsToRemove = bodyClone.querySelectorAll( RulesObjRemoveEls[ i ].rewriteApi );
							Array.prototype.forEach.call( elementsToRemove, function( el, ind ) {
								if ( el.parentNode ) {
									el.parentNode.removeChild( el );
								}
							} );
						}
						if ( RulesObjRemoveEls[ i ].rewriteApiReplace ) {
							var elementsToReplace = bodyClone.querySelectorAll( RulesObjRemoveEls[ i ].rewriteApiReplace );
							Array.prototype.forEach.call( elementsToReplace, function( el, ind ) {
								if ( el.parentNode ) {
									var comment = document.createComment( el.outerHTML );
									el.parentNode.replaceChild( comment, el );
								}
							} );
						}
					}
				}

				buffer = buffer.replace( /(<body[^>]*>)[\s\S]*?<\/body>$/gi, function( m, g1 ) {
					if ( g1 ) {
						return g1 + bodyClone.innerHTML.replace( /<script\b([^>]*)>([\s\S]*?)<\/script>/gi, '<script><\/script>' ).replace( /(<div id="?ClickTaleDiv"?[^>]+>)\s*<script[^>]+><\/script>\s*(<\/div>)/i, '$1$2' ) + '<\/body>';
					}
					return m;
				} );

				return buffer;
			} );
		}

		rewriteApi.add( {
			pattern: /(<head[^>]*>)/i,
			replace: '$1<script>ClickTaleContext.dontAutoAggregate();<\/script><script type=\"text\/javascript\" class=\"cm-ignore\" src=\"http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js\"><\/script>'
		} );
	}
};
// End of user-defined pre WR code


var ClickTaleOnReady = function() {
	var PID = 46,
		Ratio = 0.0125,
		PartitionPrefix = "www04";

	if ( window.navigator && window.navigator.loadPurpose === "preview" ) {
		return; //in preview
	};


	// Start of user-defined header code (PreInitialize)
	if ( typeof ClickTaleSetAllSensitive === "function" ) {
		ClickTaleSetAllSensitive();
	};

	if ( typeof ClickTaleEvent == 'function' && ( window.testversion ) ) {
		ClickTaleEvent( window.testversion );
	}

	if ( typeof ClickTaleUploadPage === 'function' && window.ClickTaleSettings.PTC.UseTransport ) {
		if ( window.ClickTaleSettings.PTC.EnableChangeMonitor ) {
			if ( typeof ClickTaleEvent === "function" ) {
				ClickTaleEvent( "CM" );
			}
		}

		var up_Counter = 0;

		// TWCF-164 - 100% recordings
		if ( document.cookie.indexOf( 'WRUIDBuyFlow' ) != -1 ) {
			window.ClickTaleUIDCookieName = 'WRUIDC';
		} else {
			var RecordURL = [ "www.timewarnercable.com/en/residential.html", "www.timewarnercable.com/residential/order", "www.timewarnercable.com/en/support/contact-us.html", "www.timewarnercable.com/en/support/faqs/faqs-account-and-billing/paymentopt/what-are-my-bill-payment-optio.html", "www.timewarnercable.com/en/plans-packages/cable-internet.html", "www.timewarnercable.com/en/plans-packages/internet/internet-service-plans.html", "www.timewarnercable.com/en/tv/channels-lineup.html", "www.timewarnercable.com/en/internet/features/security-privacy.html" ];
			for ( var i = 0, len = RecordURL.length; i < len; i++ ) {
				if ( window.location.href.toLowerCase().indexOf( RecordURL[ i ] ) > -1 && ( typeof ClickTaleGetUID === 'function' && ( ClickTaleGetUID() === '0' || ClickTaleGetUID() === null ) ) ) {
					window.ClickTaleUIDCookieName = 'WRUIDC';
					Ratio = 0.25;
				}

			}
		}
		// end of TWCF-164

		setTimeout( function() {
			if ( typeof window[ "FSR" ] != 'undefined' && typeof ClickTaleGetUID === 'function' && ClickTaleGetUID() != null ) {
				var integrationToken = "b1eb9522c6132984902cb6c7e3bfe6272e98acba";
				window.clickTaleLink = 'http://subs.app.clicktale.com/IntegrationEntry.ashx?Type=Playback&PID=46&UID=' + ClickTaleGetUID() + '&IntegrationToken=' + integrationToken;
				FSR.CPPS.set( 'ClickTaleURL', window.clickTaleLink );
				FSR.CPPS.set( 'ClickTaleVisitorID', ClickTaleGetUID() );
			}
		}, 5000 ); //TWCF-137

		function doUpload() {
			ClickTaleUploadPage();
			window.ClickTaleSSL = 1;
			ClickTale( PID, Ratio, PartitionPrefix );
			if ( ( typeof ClickTalePrevOnReady == 'function' ) && ( ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString() ) ) {
				ClickTalePrevOnReady();
			}
		}

		function doUploadTimeUp() { // TWCF-202
			if ( typeof ClickTaleEvent === "function" ) {
				ClickTaleEvent( "PTC_202_TU" );
			}
			doUpload();
		}

		function isReadyToRecord() {
			// TWCF-202 always check for top menu
			var topMenuLoaded = !!document.querySelectorAll( '#_content_twc_en_global-elements_ge-residential-main_jcr_content_header_teaser .twc-first .smartLink a span.link-label' )[ 1 ];


			if ( topMenuLoaded ) {
				if ( typeof ClickTaleEvent === "function" ) {
					ClickTaleEvent( "top menu loaded" );
				}
				// only if menu was loaded, continue to check other conditions:
				if ( document.location.pathname.toLowerCase() == "/en/residential.html" ) {
					var condition1 = !document.querySelector( '#_content_twc_en_residential_jcr_content_alerts_twc_container_manual_id_wrapper_wrapper-parsys_teaser:empty' );
					var condition2 = document.querySelector( '#twc-spotlight .megamenu' );
					return ( condition1 && condition2 );
				} else if ( /plans-packages\/cable-internet.html/i.test( location.pathname ) ) {
					return ( document.querySelectorAll( '.tab.js-active .packageSelect:not(.hidden)' ).length > 0 );
				}
				return true;
			} else {
				return false;
			}
		}
	}



	function doOnlyWhen( toDoHandler, toCheckHandler, interval, times, failHandler ) {
		if ( ( !toDoHandler ) || ( !toCheckHandler ) ) return;
		if ( typeof interval == "undefined" ) interval = 1000;
		if ( typeof times == "undefined" ) times = 20;

		if ( --times < 0 ) {
			if ( typeof failHandler === 'function' ) {
				failHandler();
			}
			return;
		}
		if ( toCheckHandler() ) {
			toDoHandler();
			return;
		}

		setTimeout( function() {
			doOnlyWhen( toDoHandler, toCheckHandler, interval, times, failHandler );
		}, interval );
	};


	doOnlyWhen( doUpload, isReadyToRecord, 500, 20, doUploadTimeUp );
	return;

	// End of user-defined header code (PreInitialize)


	window.ClickTaleIncludedOnDOMReady = true;

	ClickTale( PID, Ratio, PartitionPrefix );

	if ( ( typeof ClickTalePrevOnReady == 'function' ) && ( ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString() ) ) {
		ClickTalePrevOnReady();
	}


	// Start of user-defined footer code

	// End of user-defined footer code

};


( function() {
	var div = ClickTaleCreateDOMElement( "div" );
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild( div );



	var externalWrScript = ClickTaleCreateDOMElement( "script" );
	var wrSrc = ( document.location.protocol == 'https:' ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/' ) + 'tc/WRf4.js';
	externalWrScript.src = ( window.ClickTaleCDNHTTPSRewrite ? ClickTaleCDNHTTPSRewrite( wrSrc ) : wrSrc );
	externalWrScript.type = 'text/javascript';
	document.body.appendChild( externalWrScript );
} )();





! function() {
	function t() {
		window.addEventListener && addEventListener( "message", e, !1 )
	}

	function e( t ) {
		var e, n = new RegExp( "(clicktale.com|ct.test)($|:)" ),
			i = new RegExp( "ct.test" ),
			c = !1,
			l = t.origin;
		try {
			e = JSON.parse( t.data )
		} catch ( d ) {
			return
		}
		n.test( t.origin ) !== !1 && ( i.test( t.origin ) === !0 && ( c = !0 ), "CTload_ve" === e[ "function" ] && "function" == typeof ClickTaleGetPID && null !== ClickTaleGetPID() && o( l, c ) )
	}

	function n( t ) {
		return document.createElementNS ? document.createElementNS( "http://www.w3.org/1999/xhtml", t ) : document.createElement( t )
	}

	function o( t, e ) {
		var o = n( "script" );
		o.setAttribute( "type", "text/javascript" ), o.setAttribute( "id", "ctVisualEditorClientModule" );
		var i;
		i = e ? document.location.protocol + "//ct.test/VisualEditor/Client/dist/veClientModule.js" : document.location.protocol + "//" + t.match( /subs\d*/ )[ 0 ] + ".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js", o.src = i, document.getElementById( "ctVisualEditorClientModule" ) || document.body.appendChild( o )
	}
	try {
		var i = window.chrome,
			c = window.navigator && window.navigator.vendor;
		null !== i && void 0 !== i && "Google Inc." === c && window.self !== window.top && t()
	} catch ( l ) {}
}();