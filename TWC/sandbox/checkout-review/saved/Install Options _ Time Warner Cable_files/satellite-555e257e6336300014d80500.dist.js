( function( a, b ) {
	if ( ( 'disabled' === 'enabled' ) && ( typeof define === 'function' ) && define.amd ) {
		define( [], b )
	} else {
		a.OOo = b()
	}
}( this, function() {
	window.OOo = {
		__detectBrowser: function( a ) {
			var b = Object.prototype.toString.call( window.opera ) === '[object Opera]',
				d /*@cc_on=parseFloat((/MSIE[\s]*([\d\.]+)/).exec(navigator.appVersion)[1])@*/ , c = {
					IE: !!d,
					Opera: b,
					WebKit: a.indexOf( 'AppleWebKit/' ) > -1,
					Chrome: a.indexOf( 'Chrome' ) > -1,
					Gecko: a.indexOf( 'Gecko' ) > -1 && a.indexOf( 'KHTML' ) === -1,
					MobileSafari: /Apple.*Mobile.*Safari/.test( a ),
					iOs: a.indexOf( 'iPad' ) > -1 || a.indexOf( 'iPhone' ) > -1 || a.indexOf( 'iPod' ) > -1,
					iOS67: a.search( /OS 6(.*)|7(.*) like Mac OS/i ) > -1,
					PalmPre: a.indexOf( 'Pre/' ) > -1,
					BlackBerry: a.indexOf( 'BlackBerry' ) > -1,
					Fennec: a.indexOf( 'Fennec' ) > -1,
					IEMobile: a.indexOf( 'IEMobile' ) > -1,
					OperaMobile: a.search( /Opera (?:Mobi|Mini)/ ) > -1,
					Kindle: a.search( /[ ](Kindle|Silk)/ ) > -1,
					isChromeIOS: /crios/i.test( navigator.userAgent ),
					ua: a
				},
				e = false;
			c.isMobile = ( c.MobileSafari || c.PalmPre || c.BlackBerry || c.Fennec || c.IEMobile || c.OperaMobile || c.Kindle );
			c.isMobileNonIOS = ( c.isMobile && ( !c.MobileSafari || a.search( 'Android' ) !== -1 ) );
			return c
		}
	};
	OOo.Browser = OOo.__detectBrowser( navigator.userAgent );
	OOo.Cache = {};
	OOo.instanceCount = 0;
	OOo.K = function() {};
	var E = E || OOo;
	( function() {
		function v( a ) {
			return document.getElementById( a )
		}

		function w( a, b ) {
			var d;
			for ( d in b ) {
				if ( b.hasOwnProperty( d ) ) {
					a[ d ] = b[ d ]
				}
			}
			return a
		}

		function x( a, b, d, c ) {
			if ( a.addEventListener ) {
				a.addEventListener( b, d, c )
			} else if ( a.attachEvent ) {
				a.attachEvent( 'on' + b, d )
			}
		}

		function u( a, b, d, c ) {
			if ( a.removeEventListener ) {
				a.removeEventListener( b, d, c )
			} else if ( a.detachEvent ) {
				a.detachEvent( 'on' + b, d )
			}
		}

		function D( a ) {
			var b = [],
				d;
			for ( d in a ) {
				if ( a.hasOwnProperty( d ) ) {
					b.push( d + '=' + ( encodeURIComponent( a[ d ] ) || '' ) )
				}
			}
			return b.join( '&' )
		}

		function y( a ) {
			var b = D( a.metrics ),
				d = a.tealeafId + '|' + a.clickTalePID + '/' + a.clickTaleUID + '/' + a.clickTaleSID;
			b += '&custom_var=' + OOo.createLegacyVars( a.legacyVariables, d );
			if ( a.metrics.type === 'OnPage' ) {
				b += '|iframe'
			}
			if ( a.asm ) {
				b += '&asm=2'
			}
			b += "&_" + 'rev=2';
			if ( a.customVariables ) {
				b += '&customVars=' + encodeURIComponent( OOo.serialize( a.customVariables ) )
			}
			return b
		}

		function A( a, b ) {
			var d = document,
				c = d.createElement( 'form' ),
				e = d.createElement( 'input' ),
				f = a.referrerRewrite;
			a.metrics.referer = location.href;
			if ( f ) {
				a.metrics.referer = OOo.referrerRewrite( f )
			}
			c.style.display = 'none';
			c.method = 'post';
			c.target = b || 'OnlineOpinion';
			c.action = a.onPageCard ? 'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r=' + location.href : 'https://secure.opinionlab.com/ccc01/comment_card_d.asp';
			if ( a.commentCardUrl ) {
				c.action = a.commentCardUrl;
				if ( a.onPageCard ) {
					c.action += '?r=' + location.href
				}
			}
			e.name = 'params';
			e.value = y( a );
			c.appendChild( e );
			d.body.appendChild( c );
			return c
		}

		function z() {
			return {
				width: screen.width,
				height: screen.height,
				referer: location.href,
				prev: document.referrer,
				time1: ( new Date() ).getTime(),
				time2: null,
				currentURL: location.href,
				ocodeVersion: '5.9.0'
			}
		}

		function C( a ) {
			var b = '';
			if ( a && a.search( '://' ) > -1 ) {
				var d = a.split( '/' );
				for ( var c = 3; c < d.length; c++ ) {
					b += "/";
					b += d[ c ]
				}
			}
			return b
		}

		function B( a, b ) {
			a = a || {};
			if ( typeof a === 'string' ) {
				return b + '|' + a
			}
			return a.override ? a.vars : b + ( a.vars ? '|' + a.vars : '' )
		}

		function F( a, b ) {
			if ( !b ) {
				b = location
			}
			if ( typeof a === "string" ) return a;
			return a.searchPattern ? b.href.replace( a.searchPattern, a.replacePattern ) : a.replacePattern
		}

		function N( a ) {
			'use strict';
			var b, d = false,
				c = document.getElementsByTagName( 'meta' );
			if ( c !== 'undefined' ) {
				for ( b = 0; b < c.length; b += 1 ) {
					if ( c[ b ].getAttribute( 'name' ) === a ) {
						d = true
					}
				}
			}
			return d
		}
		var G = ( function() {
			if ( navigator.appName === "Microsoft Internet Explorer" && navigator.userAgent.search( "MSIE 6" ) !== -1 ) {
				return true
			}
			var a = document.body,
				b, d;
			if ( document.createElement && a && a.appendChild && a.removeChild ) {
				b = document.createElement( 'iframe' );
				d = false;
				b.setAttribute( 'name', 'oo_test' );
				b.style.display = 'none';
				a.appendChild( b );
				d = !!!document.getElementsByName( 'oo_test' )[ 0 ];
				a.removeChild( b );
				return d
			} else {
				return null
			}
		}() );

		function H( a, b ) {
			var d = a || window.event;
			if ( d.preventDefault && d.stopPropagation ) {
				d.preventDefault();
				d.stopPropagation()
			} else {
				d.returnValue = false
			}
			var c = OOo.$( 'oo_waypoint_container' ),
				e = c.parentNode;
			e.removeChild( c );
			if ( b ) {
				b.focus()
			}
		}

		function I() {
			var a = OOo.$( 'oo_waypoint_prompt' );
			if ( a ) {
				var b = OOo.$( 'oo_waypoint_container' );
				this.showWaypoint( b );
				return
			}
			var d = window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject( "Microsoft.XMLHTTP" ),
				c = this,
				e = document.createElement( 'link' ),
				f;
			d.onreadystatechange = function() {
				if ( d.readyState !== 4 ) {
					return
				}
				c.showWaypoint( d.responseText )
			};
			d.open( "GET", this.options.pathToAssets + this.options.waypointMarkup, true );
			d.send( null )
		}

		function J( c ) {
			var e = document,
				f = 0,
				g = typeof c === 'string' ? e.createElement( 'div' ) : c,
				h = e.createElement( 'div' ),
				l, m, j, i, k = this.options,
				r = k.categories,
				n, o, p = e.activeElement;
			h.id = 'oo_waypoint_overlay';
			g.id = 'oo_waypoint_container';
			g.style.visibility = 'hidden';
			if ( typeof c === 'string' ) {
				g.innerHTML = c;
				e.body.appendChild( g )
			}
			g.appendChild( h );
			if ( k.companyLogo && k.companySlogan ) {
				l = new Image();
				l.src = k.companyLogo;
				l.alt = k.companySlogan;
				OOo.$( 'oo_company_logo' ).appendChild( l );
				OOo.$( 'oo_waypoint_prompt' ).setAttribute( 'aria-label', k.companySlogan )
			}
			j = new Image();
			j.src = k.pathToAssets + 'oo_opinionlab_logo.png';
			j.alt = 'powered by OpinionLab';
			OOo.$( 'ol_brand_logo' ).children[ 0 ].appendChild( j );
			n = OOo.$( 'oo_close_prompt' );
			for ( var s in r ) {
				if ( r.hasOwnProperty( s ) ) {
					var q = document.createElement( 'a' ),
						t = k.categories[ s ].icon;
					q.className = 'waypoint_icon';
					q.href = '#';
					q.innerHTML = String( s ).replace( /_/g, ' ' ) + '<span class="screen_reader">This will open a new window</span>';
					if ( t && e.addEventListener ) {
						q.style.backgroundImage = 'url(' + k.pathToAssets + t + ')';
						q.style.backgroundRepeat = 'no-repeat';
						q.style.backgroundPosition = 'left center';
						q.style.backgroundSize = '70px 50px';
						q.style.textAlign = 'left';
						q.style.paddingLeft = '90px'
					}
					if ( typeof k.categories[ s ].oCode === 'string' ) {
						OOo.addEventListener( q, 'click', ( function( d ) {
							return function( a ) {
								var b = a || window.event;
								window.open( k.categories[ d ].oCode, '_0', 'scrollbars=yes,location=yes,menubar=yes,resizable=yes' );
								OOo.hideWaypoint( b, p )
							}
						} )( s ), false );
						q.onkeyup = ( function( d ) {
							return function( a ) {
								var b = a || window.event;
								if ( b.keyCode !== 13 ) {
									return
								}
								window.open( k.categories[ d ].oCode, '_0', 'scrollbars=yes,location=yes,menubar=yes,resizable=yes' );
								OOo.hideWaypoint( b, p )
							}
						} )( s )
					} else {
						OOo.addEventListener( q, 'click', ( function( d ) {
							return function( a ) {
								var b = a || window.event;
								OOo.Waypoint[ d ].show( b );
								OOo.hideWaypoint( b, p )
							}
						} )( s ), false );
						q.onkeyup = ( function( d ) {
							return function( a ) {
								var b = a || window.event;
								if ( b.keyCode !== 13 ) {
									return
								}
								OOo.Waypoint[ d ].show( b );
								OOo.hideWaypoint( b, p )
							}
						} )( s )
					}
					f++;
					OOo.$( 'waypoint_icons' ).appendChild( q )
				}
			}
			OOo.addEventListener( n, 'click', function( a ) {
				var b = a || window.event;
				OOo.hideWaypoint( b, p )
			}, false );
			i = OOo.$( 'waypoint_icons' ).children;
			o = i[ 0 ];
			o.onkeydown = function( a ) {
				var b = a || window.event;
				if ( b.keyCode === 9 ) {
					if ( b.shiftKey ) {
						n.focus();
						return false
					}
				}
			};
			n.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				OOo.hideWaypoint( b, p )
			};
			n.onkeydown = function( a ) {
				var b = a || window.event;
				if ( b.keyCode === 9 ) {
					if ( !b.shiftKey ) {
						o.focus();
						return false
					}
				}
			};
			i[ f - 1 ].className = 'waypoint_icon last';
			g.style.visibility = 'visible';
			g.style.display = 'block';
			h.className = 'no_loading';
			o.focus()
		}

		function K( a, b ) {
			var d = a || window.event;
			if ( d.preventDefault && d.stopPropagation ) {
				d.preventDefault();
				d.stopPropagation()
			} else {
				d.returnValue = false
			}
			OOo.$( 'oo_container' ).style.display = 'none';
			if ( b ) {
				b.focus()
			}
		}

		function L() {
			var a = OOo.$( 'oo_invitation_prompt' );
			if ( a ) {
				var b = OOo.$( 'oo_container' );
				this.showPrompt( b );
				return
			}
			var d = window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject( "Microsoft.XMLHTTP" ),
				c = this,
				e = document.createElement( 'link' ),
				f;
			d.onreadystatechange = function() {
				if ( d.readyState !== 4 ) {
					return
				}
				c.showPrompt( d.responseText )
			};
			d.open( "GET", this.options.pathToAssets + this.options.promptMarkup, true );
			d.send( null )
		}

		function M( d, c ) {
			var e = document,
				f = typeof d === 'string' ? e.createElement( 'div' ) : d,
				g = e.createElement( 'div' ),
				h, l, m, j, i = this.options,
				k, r, n, o, p = e.activeElement;
			g.id = 'oo_invitation_overlay';
			f.id = 'oo_container';
			f.style.visibility = 'hidden';
			if ( typeof d === 'string' ) {
				f.innerHTML = d;
				e.body.appendChild( f )
			}
			f.appendChild( g );
			k = OOo.$( 'oo_launch_prompt' );
			r = OOo.$( 'oo_no_thanks' );
			n = OOo.$( 'oo_close_prompt' );
			o = OOo.$( 'oo_company_logo' );
			if ( i.companyLogo && i.companySlogan ) {
				h = new Image();
				h.src = i.companyLogo;
				h.alt = i.companySlogan;
				o.appendChild( h );
				OOo.$( 'oo_invitation_prompt' ).setAttribute( 'aria-label', i.companySlogan )
			}
			m = new Image();
			m.src = i.pathToAssets + 'oo_opinionlab_logo.png';
			m.alt = 'powered by OpinionLab';
			OOo.$( 'ol_brand_logo' ).children[ 0 ].appendChild( m );
			if ( i.callBacks ) {
				if ( typeof i.callBacks.prompt === 'function' ) {
					i.callBacks.prompt()
				}
				if ( typeof i.callBacks.yesClick === 'function' ) {
					OOo.addEventListener( k, 'click', function() {
						i.callBacks.yesClick()
					}, false )
				}
				if ( typeof i.callBacks.noClick === 'function' ) {
					OOo.addEventListener( r, 'click', function() {
						i.callBacks.noClick()
					}, false )
				}
				if ( typeof i.callBacks.closeClick === 'function' ) {
					OOo.addEventListener( n, 'click', function() {
						i.callBacks.closeClick()
					}, false )
				}
			}
			OOo.addEventListener( k, 'click', c.bind( this ), false );
			OOo.addEventListener( r, 'click', function( a ) {
				var b = a || window.event;
				OOo.hidePrompt( b, p )
			}, false );
			OOo.addEventListener( n, 'click', function( a ) {
				var b = a || window.event;
				OOo.hidePrompt( b, p )
			}, false );
			k.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				c.bind( this )
			}.bind( this );
			k.onkeydown = function( a ) {
				var b = a || window.event;
				if ( b.keyCode === 9 ) {
					if ( b.shiftKey ) {
						n.focus();
						return false
					}
				}
			};
			r.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				OOo.hidePrompt( b, p )
			};
			n.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				OOo.hidePrompt( b, p )
			};
			n.onkeydown = function( a ) {
				var b = a || window.event;
				if ( b.keyCode === 9 ) {
					if ( !b.shiftKey ) {
						k.focus();
						return false
					}
				}
			};
			f.style.visibility = 'visible';
			f.style.display = 'block';
			g.className = 'no_loading';
			p.blur();
			k.focus()
		}
		w( OOo, {
			extend: w,
			toQueryString: D,
			addEventListener: x,
			$: v,
			appendOOForm: A,
			removeEventListener: u,
			createMetrics: z,
			truncateMetric: C,
			createLegacyVars: B,
			DYNAMIC_FRAME_NAME_IS_BUGGY: G,
			getFormParams: y,
			referrerRewrite: F,
			hidePrompt: K,
			getPrompt: L,
			showPrompt: M,
			hideWaypoint: H,
			getWaypoint: I,
			showWaypoint: J
		} )
	}() );
	( function() {
		function f( a ) {
			if ( !a ) {
				return null
			}
			switch ( typeof a ) {
				case 'number':
				case 'boolean':
				case 'function':
					return a;
				case 'string':
					return '\'' + a + '\'';
				case 'object':
					var b, d, c, e;
					if ( a.constructor === Array || typeof a.callee !== 'undefined' ) {
						b = '[';
						c = a.length;
						for ( d = 0; d < c - 1; d += 1 ) {
							b += f( a[ d ] ) + ','
						}
						b += f( a[ d ] ) + ']'
					} else {
						b = '{';
						for ( e in a ) {
							if ( a.hasOwnProperty( e ) ) {
								b += e + ':' + f( a[ e ] ) + ','
							}
						}
						b = b.replace( /\,$/, '' ) + '}'
					}
					return b;
				default:
					return null
			}
		}
		OOo.extend( OOo, {
			serialize: f
		} )
	}() );
	( function() {
		function e( a, b, d ) {
			var c;
			if ( a.search( b[ 0 ] ) !== -1 ) {
				OOo.createCookie( d, 0 );
				return false
			} else if ( OOo.readCookie( d ) ) {
				c = parseInt( OOo.readCookie( d ), 10 );
				if ( ( a.search( b[ c + 1 ] ) !== -1 ) && ( c + 1 !== b.length - 1 ) ) {
					OOo.createCookie( d, c + 1 );
					return false
				} else if ( a.search( b[ c ] ) !== -1 ) {
					return false
				} else if ( c + 1 === b.length - 1 && a.search( b.pop() ) !== -1 ) {
					OOo.eraseCookie( d );
					return true
				} else {
					OOo.eraseCookie( d );
					return false
				}
			} else {
				return false
			}
		}
		OOo.extend( OOo, {
			checkTunnel: e
		} )
	}() );
	( function() {
		function p( a ) {
			var b = "",
				d;
			for ( d = 7; d >= 0; d -= 1 ) {
				b += '0123456789abcdef'.charAt( ( a >> ( d * 4 ) ) & 0x0F )
			}
			return b
		}

		function s( a ) {
			var b = ( ( a.length + 8 ) >> 6 ) + 1,
				d = new Array( b * 16 ),
				c;
			for ( c = 0; c < b * 16; c += 1 ) {
				d[ c ] = 0
			}
			for ( c = 0; c < a.length; c += 1 ) {
				d[ c >> 2 ] |= a.charCodeAt( c ) << ( 24 - ( c % 4 ) * 8 )
			}
			d[ c >> 2 ] |= 0x80 << ( 24 - ( c % 4 ) * 8 );
			d[ b * 16 - 1 ] = a.length * 8;
			return d
		}

		function q( a, b ) {
			var d = ( a & 0xFFFF ) + ( b & 0xFFFF ),
				c = ( a >> 16 ) + ( b >> 16 ) + ( d >> 16 );
			return ( c << 16 ) | ( d & 0xFFFF )
		}

		function t( a, b ) {
			return ( a << b ) | ( a >>> ( 32 - b ) )
		}

		function v( a, b, d, c ) {
			if ( a < 20 ) {
				return ( b & d ) | ( ( ~b ) & c )
			}
			if ( a < 40 ) {
				return b ^ d ^ c
			}
			if ( a < 60 ) {
				return ( b & d ) | ( b & c ) | ( d & c )
			}
			return b ^ d ^ c
		}

		function w( a ) {
			return ( a < 20 ) ? 1518500249 : ( a < 40 ) ? 1859775393 : ( a < 60 ) ? -1894007588 : -899497514
		}

		function x( a ) {
			var b = s( a ),
				d = new Array( 80 ),
				c = 1732584193,
				e = -271733879,
				f = -1732584194,
				g = 271733878,
				h = -1009589776,
				l, m, j, i, k, r, n, o;
			for ( n = 0; n < b.length; n += 16 ) {
				l = c;
				m = e;
				j = f;
				i = g;
				k = h;
				for ( o = 0; o < 80; o += 1 ) {
					if ( o < 16 ) {
						d[ o ] = b[ n + o ]
					} else {
						d[ o ] = t( d[ o - 3 ] ^ d[ o - 8 ] ^ d[ o - 14 ] ^ d[ o - 16 ], 1 )
					}
					r = q( q( t( c, 5 ), v( o, e, f, g ) ), q( q( h, d[ o ] ), w( o ) ) );
					h = g;
					g = f;
					f = t( e, 30 );
					e = c;
					c = r
				}
				c = q( c, l );
				e = q( e, m );
				f = q( f, j );
				g = q( g, i );
				h = q( h, k )
			}
			return p( c ) + p( e ) + p( f ) + p( g ) + p( h )
		}
		OOo.extend( OOo, {
			sha1: x
		} )
	}() );
	( function() {
		function h( a, b ) {
			if ( !b ) {
				b = location
			}
			var d = a.cookieName || 'oo_abandon',
				c = OOo.readCookie( d ),
				e = a.startPage,
				f = a.endPage,
				g = a.middle;
			if ( !c ) {
				if ( b.pathname.indexOf( e ) !== -1 ) {
					OOo.createCookie( d )
				}
				return false
			} else if ( b.pathname.indexOf( f ) !== -1 ) {
				OOo.eraseCookie( d );
				return false
			} else if ( b.pathname.search( g ) !== -1 ) {
				return false
			} else {
				OOo.eraseCookie( d );
				return true
			}
		}
		OOo.extend( OOo, {
			checkAbandonment: h
		} )
	}() );
	( function() {
		function c( a ) {
			var b, d;
			for ( b = a.length - 1; b >= 0; b -= 1 ) {
				if ( a[ b ].read ) {
					d = OOo.readCookie( a[ b ].name );
					if ( !!d && d === a[ b ].value ) {
						return true
					} else if ( typeof a[ b ].value === 'undefined' && !!OOo.readCookie( a[ b ].name ) ) {
						return true
					}
				}
			}
			return false
		}

		function e( a ) {
			var b;
			for ( b = a.length - 1; b >= 0; b -= 1 ) {
				if ( a[ b ].set ) {
					OOo.createCookie( a[ b ].name, a[ b ].value, a[ b ].expiration )
				}
			}
		}
		OOo.extend( OOo, {
			checkThirdPartyCookies: c,
			setThirdPartyCookies: e
		} )
	}() );
	OOo.extend( Function.prototype, ( function() {
		if ( typeof Function.prototype.bind !== "undefined" ) {
			return
		}
		var e = Array.prototype.slice;

		function f( a, b ) {
			var d = a.length,
				c = b.length;
			while ( c ) {
				c -= 1;
				a[ d + c ] = b[ c ]
			}
			return a
		}

		function g( a, b ) {
			a = e.call( a, 0 );
			return f( a, b )
		}

		function h( b ) {
			if ( arguments.length < 2 && typeof b === "undefined" ) {
				return this
			}
			var d = this,
				c = e.call( arguments, 1 );
			return function() {
				var a = g( c, arguments );
				return d.apply( b, a )
			}
		}
		return {
			bind: h
		}
	}() ) );
	( function() {
		function f( a ) {
			if ( !a ) {
				a = location
			}
			var b;
			if ( a.host.search( /\.[a-z]+/ ) !== -1 ) {
				b = a.host.split( '.' ).reverse();
				if ( b.length > 3 ) {
					return a.host
				}
				b = '.' + b[ 1 ] + '.' + b[ 0 ]
			} else {
				b = a.host
			}
			return b
		}

		function g( a, b, d ) {
			var c = '',
				e = '';
			if ( d ) {
				c = new Date();
				c.setTime( c.getTime() + ( d * 1000 ) );
				e = "; expires=" + c.toGMTString()
			}
			if ( location.host !== f() ) {
				document.cookie = a + "=" + b + e + "; path=/; domain=" + f() + ";"
			} else {
				document.cookie = a + "=" + b + e + "; path=/;"
			}
		}

		function h( a ) {
			var b = a + "=",
				d = document.cookie.split( ';' ),
				c, e;
			for ( e = 0; e < d.length; e += 1 ) {
				c = d[ e ];
				while ( c.charAt( 0 ) === ' ' ) {
					c = c.substring( 1, c.length )
				}
				if ( c.indexOf( b ) === 0 ) {
					return c.substring( b.length, c.length )
				}
			}
			return null
		}

		function l( a ) {
			g( a, "", -1 )
		}
		OOo.extend( OOo, {
			getCookieDomain: f,
			createCookie: g,
			readCookie: h,
			eraseCookie: l
		} )
	}() );
	OOo.Ocode = function( a ) {
		var b = OOo.Browser,
			d, c;
		if ( a.disableMobile && b.isMobile ) {
			return
		}
		if ( a.disableNoniOS && b.isMobileNonIOS ) {
			return
		}
		OOo.instanceCount += 1;
		this.options = {
			tealeafCookieName: 'TLTSID'
		};
		OOo.extend( this.options, a );
		d = this.options;
		d.metrics = OOo.createMetrics();
		this.frameName = d.onPageCard ? 'OnlineOpinion' + OOo.instanceCount : 'OnlineOpinion';
		if ( d.cookie && OOo.Ocode.matchUrl( d.cookie, location ) ) {
			return
		}
		if ( d.thirdPartyCookies && OOo.checkThirdPartyCookies( d.thirdPartyCookies ) ) {
			return
		}
		if ( d.abandonment && !OOo.checkAbandonment( d.abandonment ) ) {
			return
		}
		if ( d.tunnel && !OOo.checkTunnel( location.pathname, d.tunnel.path, d.tunnel.cookieName ) ) {
			return
		}
		if ( d.events && d.events.onSingleClick ) {
			this.singProbability = Math.random() < 1 - d.events.onSingleClick / 100
		}
		d.tealeafId = OOo.readCookie( d.tealeafCookieName ) || OOo.readCookie( d.sessionCookieName );
		if ( d.events ) {
			this.setupEvents();
			if ( d.events.disableLinks || d.events.disableFormElements ) {
				this.setupDisableElements()
			}
		}
		if ( d.floating ) {
			this.floating()
		} else if ( d.bar ) {
			this.bar()
		} else if ( d.tab ) {
			this.tab()
		}
	};
	OOo.Ocode.prototype = {
		show: function( a, b ) {
			var d = a || window.event;
			if ( b !== 'exit' && b !== 'entry' ) {
				if ( d.preventDefault && d.stopPropagation ) {
					d.preventDefault();
					d.stopPropagation()
				} else {
					d.returnValue = false
				}
			}
			if ( this.onPageCardVisible ) {
				return
			}
			var c = this.options,
				e;
			if ( c.events && c.events.prompt ) {
				if ( c.cookie ) OOo.eraseCookie( c.cookie.name || 'oo_r' );
				OOo.hidePrompt()
			}
			if ( this.interruptShow ) {
				return
			}
			if ( !this.floatingLogo && c.cookie && OOo.Ocode.matchUrl( c.cookie ) ) {
				return
			}
			if ( !c.floating && c.events && this.singProbability ) {
				return
			}
			if ( c.events && c.events.onSingleClick ) {
				this.singProbability = true
			}
			if ( c.cookie ) {
				OOo.Ocode.tagUrl( c.cookie )
			}
			if ( c.thirdPartyCookies ) {
				if ( OOo.checkThirdPartyCookies( c.thirdPartyCookies ) ) {
					return
				}
				OOo.setThirdPartyCookies( c.thirdPartyCookies )
			}
			if ( this.floatingLogo ) {
				this.floatingLogo.children[ 0 ].blur()
			}
			if ( this.floatingLogo && c.disappearOnClick ) {
				this.floatingLogo.style.display = 'none'
			}
			if ( c.clickTalePID && typeof window.ClickTale === 'function' ) {
				c.clickTaleUID = window.ClickTaleGetUID();
				c.clickTaleSID = window.ClickTaleGetSID()
			}
			if ( c.onPageCard && !OOo.Browser.isMobile ) {
				this.setupOnPageCC()
			} else {
				this.launchOOPopup()
			}
			e = c.floating || c.tab || c.bar;
			if ( e && typeof e.onClickCallback === 'function' ) {
				e.onClickCallback()
			}
		}
	};
	OOo.extend( OOo.Ocode, {
		tagUrl: function( a, b ) {
			if ( !b ) {
				b = location
			}
			var d = a.name || 'oo_r',
				c = a.type === 'page' ? b.href : b.hostname,
				e = OOo.readCookie( d ) || '';
			if ( OOo.Ocode.matchUrl( a, b ) ) {
				return
			}
			OOo.createCookie( d, e + OOo.sha1( c ), a.expiration )
		},
		matchUrl: function( a, b ) {
			if ( !b ) {
				b = location
			}
			var d = OOo.readCookie( a.name || 'oo_r' ),
				c;
			if ( !d ) {
				return false
			}
			c = a.type === 'page' ? b.href : b.hostname;
			return d.search( OOo.sha1( c ) ) !== -1
		}
	} );
	( function() {
		var l = 0;

		function m() {
			var a = this.options,
				b = a.newWindowSize || [ 545, 325 ],
				d = [ parseInt( ( a.metrics.height - b[ 1 ] ) / 2, 10 ), parseInt( ( a.metrics.width - b[ 0 ] ) / 2, 10 ) ],
				c, e, f = 'resizable=yes,location=no,status=no,scrollbars=1,width=' + b[ 0 ] + ',height=' + b[ 1 ] + ',top=' + d[ 0 ] + ',left=' + d[ 1 ],
				g = 'OnlineOpinion';
			if ( a.newWindow ) {
				g = g + ( l++ )
			}
			a.metrics.time2 = ( new Date() ).getTime();
			a.metrics.type = 'Popup';
			c = OOo.appendOOForm( a, g );
			var h = 'https://secure.opinionlab.com/ccc01/comment_card_d.asp?' + c.children[ 0 ].value;
			if ( a.commentCardUrl ) {
				h = a.commentCardUrl
			}
			if ( OOo.Browser.isChromeIOS ) {
				g = '_0'
			}
			if ( OOo.Browser.isMobile && OOo.Browser.ua.search( 'Android' ) !== -1 ) {
				c.submit()
			} else {
				e = window.open( h, g, f );
				if ( e && !OOo.Browser.isChromeIOS ) {
					c.submit()
				}
			}
		}
		OOo.extend( OOo.Ocode.prototype, {
			launchOOPopup: m
		} )
	}() );
	( function() {
		function i() {
			var d = this.options.events,
				c = [ false, false ],
				e = [ 'onExit', 'onEntry' ],
				f = 'beforeunload',
				g, h, l, m, j;
			if ( OOo.Browser.Opera ) {
				f = 'unload'
			}
			if ( OOo.Browser.iOs ) {
				f = 'pagehide'
			}
			if ( d.prompt ) {
				OOo.extend( this.options, {
					promptMarkup: d.prompt.promptMarkup || 'oo_event_prompt.html',
					neverShowAgainButton: false,
					pathToAssets: d.prompt.pathToAssets
				} )
			}
			for ( l = e.length - 1; l >= 0; l -= 1 ) {
				g = e[ l ];
				if ( d[ g ] instanceof Array ) {
					m = d[ g ];
					j = m.length;
					while ( j && !c[ l ] ) {
						j -= 1;
						if ( window.location.href.search( m[ j ].url ) !== -1 && Math.random() >= 1 - m[ j ].p / 100 ) {
							c[ l ] = true
						}
					}
				} else if ( d[ g ] && Math.random() >= 1 - d[ g ] / 100 ) {
					c[ l ] = true
				}
			}
			if ( c[ 0 ] ) {
				OOo.addEventListener( window, f, function( a ) {
					var b = a || window.event;
					this.show( b, 'exit' )
				}.bind( this ), false )
			}
			if ( c[ 1 ] ) {
				if ( d.delayEntry ) {
					window.setTimeout( function( a ) {
						var b = a || window.event;
						if ( d.prompt ) {
							this.getPrompt()
						} else {
							this.show( b, 'entry' )
						}
					}.bind( this ), d.delayEntry * 1000 )
				} else {
					if ( d.prompt ) {
						this.getPrompt()
					} else {
						( function( a ) {
							var b = a || window.event;
							this.show( b, 'entry' )
						} ).bind( this )()
					}
				}
			}
		}

		function k( a ) {
			var b = a || window.event,
				d = a.target || a.srcElement,
				c = this.options.events,
				e = d.parentNode,
				f = 5,
				g = 0;
			while ( e && ( d.nodeName !== 'A' || d.nodeName !== 'INPUT' ) && g !== f ) {
				if ( e.nodeName === 'A' ) {
					d = e
				}
				e = e.parentNode;
				g += 1
			}
			if ( c.disableFormElements && ( d.tagName === "INPUT" || d.tagName === "BUTTON" ) && ( d.type === 'submit' || d.type === 'image' || d.type === 'reset' || d.type === 'button' ) ) {
				this.interruptShow = true
			}
			if ( c.disableLinks && ( d.nodeName === 'A' || d.nodeName === 'AREA' ) && d.href.substr( 0, 4 ) === 'http' && d.href.search( c.disableLinks ) !== -1 ) {
				this.interruptShow = true
			}
		}

		function r( a ) {
			this.interruptShow = true
		}

		function n() {
			OOo.addEventListener( document.body, 'mousedown', k.bind( this ) );
			if ( !this.options.events.disableFormElements ) {
				return
			}
			var a = document.getElementsByTagName( 'form' ),
				b;
			for ( b = a.length - 1; b >= 0; b -= 1 ) {
				OOo.addEventListener( a[ b ], 'submit', r.bind( this ) )
			}
		}
		OOo.extend( OOo.Ocode.prototype, {
			setupEvents: i,
			setupDisableElements: n,
			getPrompt: function() {
				OOo.getPrompt.call( this )
			},
			showPrompt: function( a ) {
				if ( this.options.cookie ) {
					OOo.Ocode.tagUrl( this.options.cookie )
				}
				OOo.showPrompt.call( this, a, this.show )
			}
		} )
	}() );
	OOo.extend( OOo.Ocode.prototype, {
		floating: function() {
			var c = document,
				e = this.floatingLogo = document.createElement( 'div' ),
				f = c.createElement( 'div' ),
				g = c.createElement( 'div' ),
				h = c.createElement( 'div' ),
				l = c.createElement( 'span' ),
				m = this.options.floating,
				j = OOo.$( m.contentId ),
				i = '10px',
				k = m.id,
				r = c.createElement( 'span' ),
				n, o, p, s, q, t, v, w, x = 0;

			function u( a ) {
				return a.offsetLeft + a.offsetWidth
			}

			function D( a ) {
				s.style.left = u( j ) + 'px'
			}
			r.innerHTML = "Screen reader users: Please switch to forms mode for this link.";
			r.className = "screen_reader";
			if ( k ) {
				e.id = k
			}
			e.className = 'oo_feedback_float';
			g.className = 'oo_transparent';
			f.className = 'olUp';
			h.className = 'olOver';
			f.tabIndex = 0;
			f.onkeyup = function( a ) {
				n = a || window.event;
				if ( n.keyCode !== 13 ) {
					return
				}
				this.show( n )
			}.bind( this );
			f.innerHTML = m.caption || 'Feedback';
			e.appendChild( r );
			e.appendChild( f );
			l.innerHTML = m.hoverCaption || 'Click here to<br>rate this page';
			h.appendChild( l );
			e.appendChild( h );
			e.appendChild( g );

			function y( a ) {
				var b = c.documentElement.scrollTop || c.body.scrollTop,
					d = c.documentElement.clientHeight || document.body.clientHeight;
				e.style.top = ( b + d - ( v || 0 ) - 10 ) + 'px'
			}
			if ( OOo.Browser.MobileSafari ) {
				if ( OOo.Browser.ua.search( 'OS 4' ) !== -1 ) {
					o = window.innerHeight;
					e.style.bottom = null;
					e.style.top = ( window.pageYOffset + window.innerHeight - 60 ) + 'px';
					w = function( a ) {
						p = window.pageYOffset - ( o - window.innerHeight );
						e.style.webkitTransform = 'translateY(' + p + 'px)'
					};
					OOo.addEventListener( window, 'scroll', w, false );
					setTimeout( w, 100 )
				}
			}
			if ( m.position && m.position.search( /Content/ ) && j ) {
				s = this.spacer = c.createElement( 'div' );
				q = OOo.Browser.WebKit ? c.body : c.documentElement;
				s.id = 'oo_feedback_fl_spacer';
				s.style.left = u( j ) + 'px';
				c.body.appendChild( s );
				switch ( m.position ) {
					case 'rightOfContent':
						t = function( a ) {
							e.style.left = ( u( j ) - q.scrollLeft ) + 'px'
						};
						break;
					case 'fixedPreserveContent':
						t = function( a ) {
							var b = OOo.Browser.IE ? c.body.clientWidth : window.innerWidth,
								d = q.scrollLeft;
							if ( b <= u( j ) + e.offsetWidth + parseInt( i, 10 ) ) {
								e.style.left = ( u( j ) - d ) + 'px'
							} else {
								e.style.left = '';
								e.style.right = i
							}
						};
						break;
					case 'fixedContentMax':
						t = function( a ) {
							var b = OOo.Browser.IE ? c.body.clientWidth : window.innerWidth;
							if ( b <= u( j ) + e.offsetWidth + parseInt( i, 10 ) ) {
								e.style.left = '';
								e.style.right = i
							} else {
								e.style.left = ( u( j ) - q.scrollLeft ) + 'px';
								e.style.right = ''
							}
						};
						break
				}
				window.setTimeout( t, 0 );
				OOo.addEventListener( window, 'scroll', t, false );
				OOo.addEventListener( window, 'resize', t, false );
				OOo.addEventListener( window, 'resize', D, false )
			} else {
				e.style.right = i
			}
			var A = function( a ) {
				var b = a || window.event;
				if ( b.preventDefault && b.stopPropagation ) {
					b.preventDefault();
					b.stopPropagation()
				} else {
					b.returnValue = false
				}
				x++
			};
			var z = function( a ) {
				var b = a || window.event;
				if ( x >= 2 ) {
					this.show( b );
					x = 0
				}
			}.bind( this );
			if ( ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 ) ) {
				OOo.addEventListener( e, 'touchstart', A, false );
				OOo.addEventListener( e, 'touchend', z, false )
			} else {
				OOo.addEventListener( e, 'click', function( a ) {
					var b = a || window.event;
					this.show( b )
				}.bind( this ), false )
			}
			c.body.appendChild( e )
		},
		removeFloatingLogo: function() {
			document.body.removeChild( this.floatingLogo );
			if ( this.spacer ) {
				document.body.removeChild( this.spacer )
			}
		}
	} );
	OOo.extend( OOo.Ocode.prototype, {
		bar: function() {
			var c = document,
				e = this.floatingLogo = c.createElement( 'a' ),
				f, g, h, l = c.documentElement.scrollTop || c.body.scrollTop,
				m = c.createElement( 'span' ),
				j = this.options,
				i = 0,
				k = c.createElement( 'span' );

			function r( a ) {
				var b = 0,
					d = 0;
				if ( a.offsetParent ) {
					do {
						b += a.offsetLeft;
						d += a.offsetTop
					} while ( a == a.offsetParent );
					return [ b, d ]
				}
			}

			function n( a ) {
				var b = document.activeElement,
					d;
				if ( !b ) return;
				d = r( b );
				if ( !d ) return;
				if ( d[ 1 ] + b.clientHeight > ( window.innerHeight || document.body.clientHeight ) + ( window.pageYOffset || document.body.scrollTop ) - e.clientHeight ) {
					if ( navigator.appVersion.indexOf( "MSIE 7." ) !== -1 ) {
						window.scrollBy( 0, 0 )
					} else {
						window.scrollBy( 0, b.clientHeight + 20 )
					}
				}
			}
			m.innerHTML = 'Launches comment card in new window';
			m.className = 'screen_reader';
			k.className = 'icon';
			this.reflowBar = OOo.K;
			e.id = 'oo_bar';
			e.href = '#';
			e.innerHTML = j.bar.caption || 'Feedback';
			e.appendChild( m );
			e.appendChild( k );
			if ( typeof j.tabIndex === 'number' ) {
				e.tabIndex = j.tabIndex
			} else {
				e.tabIndex = 0
			}
			e.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				this.show( b )
			}.bind( this );
			var o = function( a ) {
				var b = a || window.event;
				if ( b.preventDefault && b.stopPropagation ) {
					b.preventDefault();
					b.stopPropagation()
				} else {
					b.returnValue = false
				}
				i++
			};
			var p = function( a ) {
				var b = a || window.event;
				if ( i >= 2 ) {
					this.show( b );
					i = 0
				}
			}.bind( this );
			if ( ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 ) ) {
				OOo.addEventListener( e, 'touchstart', o, false );
				OOo.addEventListener( e, 'touchend', p, false )
			} else {
				OOo.addEventListener( e, 'click', function( a ) {
					var b = a || window.event;
					this.show( b )
				}.bind( this ), false )
			}
			document.body.className += document.body.className < 1 ? 'oo_bar' : ' oo_bar';
			document.body.appendChild( e );
			if ( OOo.Browser.MobileSafari && OOo.Browser.ua.search( 'OS 4' ) !== -1 ) {
				g = window.innerHeight;
				e.style.bottom = null;
				e.style.top = ( window.pageYOffset + window.innerHeight - 37 ) + 'px';
				f = function( a ) {
					h = window.pageYOffset - ( g - window.innerHeight );
					e.style.webkitTransform = 'translateY(' + h + 'px)'
				};
				OOo.addEventListener( window, 'scroll', f, false );
				setTimeout( f, 100 )
			}
			OOo.addEventListener( document.body, 'keyup', n, false )
		}
	} );
	OOo.extend( OOo.Ocode.prototype, {
		tab: function() {
			var d = document,
				c = this.floatingLogo = d.createElement( 'div' ),
				e = d.createElement( 'div' ),
				f = d.createElement( 'div' ),
				g = d.createElement( 'span' ),
				h = this.options.tab,
				l = d.createElement( 'a' ),
				m = 'Feedback',
				j = h.tabType,
				i = 'right',
				k = 0;

			function r( a ) {
				c.style.top = pageYOffset + ( innerHeight / 2 - c.clientHeight / 2 ) + 'px';
				c.style.right = document.documentElement.clientWidth - window.innerWidth - window.pageXOffset - 15 + 'px'
			}
			switch ( j ) {
				case 1:
					var n = d.createElement( 'span' );
					c = this.floatingLogo = d.createElement( 'a' );
					e = d.createElement( 'span' );
					c.href = '#';
					c.id = 'oo_tab_' + j;
					if ( h.position ) {
						i = h.position
					}
					c.className = tabClass = 'oo_tab_' + i + '_' + j;
					e.className = 'screen_reader';
					n.className = 'icon';
					if ( typeof h.tabIndex === 'number' ) {
						c.tabIndex = h.tabIndex
					} else {
						c.tabIndex = 0
					}
					if ( h.verbiage ) {
						m = h.verbiage
					}
					c.innerHTML = m;
					e.innerHTML = 'Launches comment card in new window';
					c.appendChild( e );
					c.appendChild( n );
					setTimeout( function() {
						c.className += ' small'
					}, 2500 );
					break;
				default:
					c.id = 'oo_tab';
					c.className = 'oo_tab_' + ( h.position || i );
					if ( h.wcagBasePath ) {
						c.className += ' wcag'
					}
					if ( typeof h.tabIndex === 'number' ) {
						c.tabIndex = h.tabIndex
					} else if ( typeof h.tabIndex === 'undefined' ) {
						c.tabIndex = 0
					}
					f.appendChild( l );
					c.appendChild( f );
					f.appendChild( g );
					c.appendChild( f );
					if ( e ) {
						e.className = 'screen_reader';
						e.innerHTML = 'Activate to launch comment card';
						c.appendChild( e )
					}
					if ( OOo.Browser.MobileSafari && OOo.Browser.ua.search( 'OS 4' ) !== -1 ) {
						c.style.position = 'absolute';
						OOo.addEventListener( window, 'scroll', r, false );
						setTimeout( r, 100 )
					}
			}
			c.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				this.show( b )
			}.bind( this );
			var o = function( a ) {
				var b = a || window.event;
				if ( b.preventDefault && b.stopPropagation ) {
					b.preventDefault();
					b.stopPropagation()
				} else {
					b.returnValue = false
				}
				k++
			};
			var p = function( a ) {
				var b = a || window.event;
				if ( k >= 2 ) {
					this.show( b );
					k = 0
				}
			}.bind( this );
			if ( ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 ) ) {
				OOo.addEventListener( c, 'touchstart', o, false );
				OOo.addEventListener( c, 'touchend', p, false )
			} else {
				OOo.addEventListener( c, 'click', function( a ) {
					var b = a || window.event;
					this.show( b )
				}.bind( this ), false )
			}
			d.body.appendChild( c )
		}
	} );
	OOo.extend( OOo.Ocode.prototype, {
		setupOnPageCC: function() {
			var e = document,
				f = OOo.Cache.overlay || e.createElement( 'div' ),
				g = this.wrapper = e.createElement( 'div' ),
				h = e.createElement( 'a' ),
				l = e.createElement( 'div' ),
				m = e.createElement( 'span' ),
				j = this.frameName,
				i = e.createElement( OOo.DYNAMIC_FRAME_NAME_IS_BUGGY ? '<iframe name="' + j + '">' : 'iframe' ),
				k = e.createDocumentFragment(),
				r = this.options,
				n = r.onPageCard,
				o = 'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',
				p, s, q, t = false,
				v = this,
				w, x, u, D, y, A, z, C = e.createElement( 'span' );

			function B( a ) {
				if ( a && a.preventDefault ) {
					a.preventDefault()
				}
				document.body.focus();
				i.tabIndex = -1;
				i.title = "empty";
				i[ 'aria-hidden' ] = 'true';
				f.style.display = 'none';
				f.className = '';
				e.body.removeChild( g );
				if ( window.postMessage ) {
					OOo.removeEventListener( window, 'message', y )
				} else {
					window.clearInterval( s )
				}
				t = false;
				v.onPageCardVisible = false;
				return false
			}
			y = OOo.Ocode.postMessageHandler( function( a ) {
				var b = parseInt( a, 10 ),
					d, c;
				if ( b > 0 ) {
					if ( t ) {
						return
					}
					t = true;
					d = window.innerHeight || e.documentElement.clientHeight || e.body.clientHeight;
					c = b;
					z = g.offsetTop;
					if ( c + z > d ) {
						c = d - 40 - z
					}
					i.style.width = '555px';
					l.style.width = '555px';
					i.style.height = c + 'px';
					g.style.visibility = 'visible';
					if ( m.clientHeight < 20 ) {
						m.style.height = g.offsetHeight + 'px'
					}
					f.className = "no_loading";
					v.onPageCardVisible = true;
					p && e.body.removeChild( p )
				} else if ( a === 'submitted' ) {
					B()
				}
				if ( OOo.Browser.IE && e.compatMode === "BackCompat" ) {
					window.scrollTo( 0, 0 )
				}
			}, v.options.commentCardUrl );
			r.metrics.type = 'OnPage';
			OOo.Cache.overlay = f;
			f.id = 'oo_overlay';
			f.style.display = 'block';
			f.className = '';
			l.className = 'iwrapper';
			g.className = 'oo_cc_wrapper';
			g.setAttribute( 'role', 'alert' );
			g.setAttribute( 'aria-describedby', 'comment_card_description' );
			C.className = 'screen_reader';
			C.id = 'comment_card_description';
			C.innerHTML = 'Please leave your feedback in the comment card you just activated';
			g.appendChild( C );
			h.className = 'oo_cc_close';
			h.innerHTML = '<span class="screen_reader">Close dialog</span><span aria-hidden="true">&#10006;</span>';
			h.title = r.closeTitle ? r.closeTitle : 'Close dialog';
			if ( !e.addEventListener ) {
				l.style.outline = '1px solid #cdcdcd'
			}
			g.style.visibility = 'hidden';
			h.tabIndex = 0;
			h.onkeyup = function( a ) {
				var b = a || window.event;
				if ( b.keyCode !== 13 ) {
					return
				}
				B()
			};
			if ( OOo.Browser.IE ) {
				i.frameBorder = '0';
				if ( !window.XMLHttpRequest || e.compatMode === "BackCompat" ) {
					A = Math.max( e.documentElement.clientWidth, e.body.offsetWidth );
					f.style.position = 'absolute';
					f.style.width = e.compatMode === "BackCompat" ? ( A - 21 ) + 'px' : A + 'px';
					f.style.height = Math.max( e.documentElement.clientHeight, e.body.offsetHeight ) + 'px';
					g.style.position = 'absolute';
					OOo.addEventListener( window, 'scroll', function() {
						f.style.top = ( e.body.scrollTop + document.body.clientHeight - f.clientHeight ) + 'px';
						g.style.top = ( e.body.scrollTop + z + 25 ) + 'px'
					} )
				}
			}
			OOo.addEventListener( h, 'click', B );
			if ( n.closeWithOverlay && !OOo.Browser.isMobile ) {
				g.appendChild( m );
				m.onclick = B;
				f.onclick = B
			}
			i.src = ' ';
			i.name = j;
			i.title = 'Comment Card';
			l.appendChild( h );
			l.appendChild( i );
			g.appendChild( l );
			k.appendChild( g );
			k.appendChild( f );
			e.body.appendChild( k );
			if ( window.postMessage ) {
				OOo.addEventListener( window, "message", y )
			} else {
				s = setInterval( y, 500 )
			}
			r.metrics.time2 = ( new Date() ).getTime();
			p = OOo.appendOOForm( r, j );
			p.submit()
		}
	} );
	OOo.extend( OOo.Ocode, {
		postMessageHandler: function( c, e, f ) {
			return function( a ) {
				var b = 'https://secure.opinionlab.com',
					d;
				if ( !f ) {
					f = location
				}
				if ( ( a && !( a.origin === b || a.origin.indexOf( e ) !== 0 ) ) || ( !a && f.hash.search( 'OL=' ) === -1 ) ) {
					return false
				}
				d = a ? a.data : f.hash.split( '=' ).pop();
				if ( !a && location.hash ) {
					location.hash = ''
				}
				c( d );
				return d
			}
		}
	} );
	OOo.Invitation = function( a ) {
		this.options = {
			tunnelCookie: 'oo_inv_tunnel',
			repromptTime: 604800,
			responseRate: 50,
			repromptCookie: 'oo_inv_reprompt',
			promptMarkup: 'oo_inv_prompt.html',
			promptStyles: 'oo_inverstitial_style.css',
			percentageCookie: 'oo_inv_percent',
			pagesHitCookie: 'oo_inv_hit',
			popupType: 'popunder',
			promptDelay: 0,
			neverShowAgainButton: false,
			loadPopupInBackground: false,
			truncatePrevCurrentMetrics: false,
			disablePrevCurrentMetrics: false,
			tealeafCookieName: 'TLTSID',
			monitorWindow: 'oo_inv_monitor.html',
			companySlogan: 'We value your opinion',
			beforePrompt: OOo.K,
			callBacks: {
				prompt: '',
				yesClick: '',
				noClick: '',
				closeClick: ''
			}
		};
		this.popupShown = false;
		OOo.extend( this.options, a );
		var b = this.options,
			d = parseInt( OOo.readCookie( b.pagesHitCookie ), 10 ) || 0;
		OOo.Invitation.friendlyDomains = b.friendlyDomains || null;
		var c = {
			weight: Number( OOo.readCookie( 'oo_OODynamicRewrite_weight' ) ),
			searchPattern: OOo.readCookie( 'oo_OODynamicRewrite_searchPattern' ),
			replacePattern: OOo.readCookie( 'oo_OODynamicRewrite_replacePattern' )
		};
		OOo.eraseCookie( 'oo_OODynamicRewrite_weight' );
		OOo.eraseCookie( 'oo_OODynamicRewrite_searchPattern' );
		OOo.eraseCookie( 'oo_OODynamicRewrite_replacePattern' );
		if ( !window.OOoDynamicRewrite || window.OOoDynamicRewrite.weight < c.weight ) {
			window.OOoDynamicRewrite = c
		}
		if ( window.OOoDynamicRewrite && ( 'number' === typeof window.OOoDynamicRewrite.weight ) && !isNaN( window.OOoDynamicRewrite.weight ) ) {
			OOo.createCookie( 'oo_OODynamicRewrite_weight', window.OOoDynamicRewrite.weight );
			if ( window.OOoDynamicRewrite.searchPattern ) {
				OOo.createCookie( 'oo_OODynamicRewrite_searchPattern', window.OOoDynamicRewrite.searchPattern )
			}
			if ( window.OOoDynamicRewrite.replacePattern ) {
				OOo.createCookie( 'oo_OODynamicRewrite_replacePattern', window.OOoDynamicRewrite.replacePattern )
			}
		}
		if ( location.search.search( 'evs' ) !== -1 || OOo.readCookie( 'oo_evs_friendly' ) === 'yes' ) {
			OOo.eraseCookie( 'oo_evs_friendly' );
			b.loadPopupInBackground = true;
			this.launchPopup();
			OOo.createCookie( b.repromptCookie, 1, b.repromptTime === -1 ? 0 : b.repromptTime )
		}
		setTimeout( function() {
			if ( !window.oo_inv_monitor ) {
				return
			}
			if ( b.area && location.href.search( b.area ) === -1 ) {
				this.options.popupType = 'popup';
				this.launchPopup()
			} else if ( b.goal && location.href.search( b.goal ) !== -1 ) {
				window.oo_inv_monitor.close()
			}
		}.bind( this ), 1600 );
		if ( OOo.readCookie( b.repromptCookie ) ) {
			return
		}
		if ( b.thirdPartyCookies && OOo.checkThirdPartyCookies( b.thirdPartyCookies ) ) {
			return
		}
		if ( !OOo.readCookie( b.percentageCookie ) ) {
			OOo.createCookie( b.percentageCookie, ( Math.random() > 1 - ( b.responseRate / 100 ) ) ? "1" : "0" )
		}
		if ( typeof b.promptTrigger !== 'undefined' ) {
			if ( b.promptTrigger instanceof RegExp ) {
				if ( !window.location.href.match( b.promptTrigger ) ) {
					return
				}
			} else if ( b.promptTrigger instanceof Array ) {
				if ( !OOo.checkTunnel( location.pathname, b.promptTrigger, b.tunnelCookie ) ) {
					return
				}
			}
		}
		d += 1;
		OOo.createCookie( b.pagesHitCookie, d );
		if ( b.pagesHit && d < b.pagesHit ) {
			return
		}
		OOo.eraseCookie( b.tunnelCookie );
		if ( OOo.readCookie( b.percentageCookie ) === '1' ) {
			window.setTimeout( function() {
				OOo.createCookie( b.repromptCookie, 1, b.repromptTime );
				this.options.beforePrompt();
				this.getPrompt()
			}.bind( this ), b.promptDelay * 1000 )
		}
	};
	OOo.Invitation.notifyFriendlyLocationChange = function( a ) {
		if ( window.oo_inv_monitor ) {
			OOo.createCookie( 'oo_evs_friendly', 'yes' )
		}
	};
	OOo.Invitation.prototype = {
		getPrompt: function() {
			OOo.getPrompt.call( this )
		},
		showPrompt: function( a ) {
			OOo.showPrompt.call( this, a, this.launchPopup )
		},
		launchPopup: function( b ) {
			if ( this.popupShown ) {
				return
			}
			this.popupShown = true;
			var d = b || window.event;
			if ( d.preventDefault && d.stopPropagation ) {
				d.preventDefault();
				d.stopPropagation()
			} else {
				d.returnValue = false
			}
			var c = this.options,
				e = window.location.href,
				f = c.popupType === 'popup' ? 'https://secure.opinionlab.com/ccc01/comment_card.asp?' : c.pathToAssets + c.monitorWindow + '?time1=' + ( new Date() ).getTime() + '&',
				g, h = [],
				l = c.asm ? [ 555, 500 ] : ( OOo.Browser.Chrome ? [ 400, 400 ] : [ 400, 350 ] ),
				m, j = OOo.createMetrics(),
				i = OOo.readCookie( c.tealeafCookieName ),
				k;
			if ( c.clickTalePID && window.ClickTaleGetUID && window.ClickTaleGetSID ) {
				i += '|' + [ c.clickTalePID, window.ClickTaleGetUID(), window.ClickTaleGetSID() ].join( '/' )
			}
			l = c.newWindowSize || l;
			k = 'scrollbars=1,resizable=1,location=no,status=no,width=' + l[ 0 ] + ',height=' + l[ 1 ];
			if ( c.referrerRewrite ) {
				j.referer = OOo.referrerRewrite( c.referrerRewrite )
			}
			if ( c.truncatePrevCurrentMetrics ) {
				j.prev = OOo.truncateMetric( j.prev );
				j.currentURL = OOo.truncateMetric( j.currentURL )
			}
			if ( c.disablePrevCurrentMetrics ) {
				j.prev = '';
				j.currentURL = ''
			}
			if ( c.thirdPartyCookies ) {
				OOo.setThirdPartyCookies( c.thirdPartyCookies )
			}
			g = OOo.toQueryString( j ) + '&type=Invitation';
			if ( c.customVariables ) {
				g += '&customVars=' + encodeURIComponent( OOo.serialize( c.customVariables ) )
			}
			g += '&custom_var=' + OOo.createLegacyVars( c.legacyVariables, i );
			if ( c.asm ) {
				g += '&asm=2';
				k += ',scrollbars=1'
			}
			f += g;
			if ( f.match( /\?/g ).length === 2 ) f = f.replace( /\?([^?]*)$/, '&$1' );
			this.popup = m = window.open( f, 'OnlineOpinionInvitation', k );
			if ( !c.loadPopupInBackground && OOo.$( 'oo_container' ) ) {
				OOo.hidePrompt( d )
			}
			if ( c.chromeSurveyPrompt ) {
				setTimeout( function( a ) {
					m.postMessage( c.chromeSurveyPrompt, "*" )
				}, 500 )
			}
		},
		killPrompt: function( a ) {
			var b = a || window.event;
			if ( this.options.callBacks && typeof this.options.callBacks.noClick === 'function' ) {
				this.options.callBacks.noClick()
			}
			OOo.createCookie( this.options.repromptCookie, 1, 157680000 );
			OOo.hidePrompt( b )
		}
	};
	OOo.extend( OOo.Invitation, {
		navigateToFriendlyDomain: function( a ) {
			location.href = a
		}
	} );
	OOo.Waypoint = function( a ) {
		var b = OOo.Browser;
		if ( a.disableMobile && b.isMobile ) {
			return
		}
		if ( a.disableNoniOS && b.isMobileNonIOS ) {
			return
		}
		this.options = {
			pathToAssets: '/onlineopinionV5/',
			waypointMarkup: 'oo_waypoint.html',
			companySlogan: 'Give us feedback',
			companyLogo: 'waypoint_logo.png',
			categories: {
				website: {
					tealeafCookieName: 'TLTSID',
					waypointIcon: 'waypoint_icon.png'
				},
				store: {
					referrerRewrite: {
						searchPattern: /:\/\//,
						replacePattern: '://store.'
					},
					tealeafCookieName: 'TLTSID',
					waypointIcon: 'waypoint_icon.png'
				},
				product: {
					referrerRewrite: {
						searchPattern: /:\/\//,
						replacePattern: '://product.'
					},
					tealeafCookieName: 'TLTSID',
					waypointIcon: 'waypoint_icon.png'
				},
				other: {
					referrerRewrite: {
						searchPattern: /:\/\//,
						replacePattern: '://other.'
					},
					tealeafCookieName: 'TLTSID',
					waypointIcon: 'waypoint_icon.png'
				}
			}
		};
		OOo.extend( this.options, a );
		var d = this.options,
			c = d.categories;
		for ( var e in c ) {
			if ( c.hasOwnProperty( e ) ) {
				if ( typeof d.categories[ e ].oCode === 'object' ) {
					var f = {};
					f[ e ] = new OOo.Ocode( c[ e ].oCode );
					OOo.extend( OOo.Waypoint, f )
				}
			}
		}
		OOo.extend( OOo.Waypoint, {
			getWaypoint: function() {
				this.getWaypoint()
			}.bind( this )
		} )
	};
	OOo.Waypoint.prototype = {
		getWaypoint: function() {
			OOo.getWaypoint.call( this )
		},
		showWaypoint: function( a ) {
			OOo.showWaypoint.call( this, a )
		},
		killWaypoint: function( a ) {
			var b = a || window.event;
			OOo.hideWaypoint( b )
		}
	};
	OOo.extend( OOo, {
		appendWaypoint: function( d ) {
			var c = OOo.$( d );
			if ( !!c ) {
				OOo.addEventListener( c, 'click', function( a ) {
					var b = a || window.event;
					if ( b.preventDefault && b.stopPropagation ) {
						b.preventDefault();
						b.stopPropagation()
					} else {
						b.returnValue = false
					}
					OOo.Waypoint.getWaypoint()
				}, false );
				OOo.addEventListener( c, 'keydown', function( a ) {
					var b = a || window.event;
					if ( b.preventDefault && b.stopPropagation ) {
						b.preventDefault();
						b.stopPropagation()
					} else {
						b.returnValue = false
					}
					if ( b.keyCode !== 13 ) {
						return
					}
					OOo.Waypoint.getWaypoint()
				}, false )
			}
		}
	} );
	return OOo
} ) );

( function( w, o ) {

	if ( !Date.now ) {
		Date.now = function() {
			return new Date().getTime();
		};
	}

	var oo_userProfileData = jQuery.parseJSON( decodeURIComponent( o.readCookie( 'twc-user-profile' ) ) );
	oo_userProfileData = {
		"soaid": dataLayer[ 0 ].soaid,
		"city": dataLayer[ 0 ].city,
		"state": dataLayer[ 0 ].state,
		"postalCode": dataLayer[ 0 ].zip,
		'visitorType': dataLayer[ 0 ].bfVisitorType,
		"referrer": location.href,
		"sessionID": location.href.split( '/' )[ 6 ].split( '?' )[ 0 ],
		"region": dataLayer[ 0 ].region
	};

	oo_userProfileData.s_vi = o.readCookie( 's_vi' );
	oo_userProfileData.timestamp = o.readCookie( 's_vi' ) + Date.now();

	w.oo_feedback = new o.Ocode( {
		clickTalePID: 46,
		customVariables: oo_userProfileData
	} );


	w.receiveMessage = function( e ) {
		// Make sure message is received from OpinionLab Comment Card
		if ( e.origin === 'https://secure.opinionlab.com' ) {
			// Check that ClickTale object exists and that data message is not blank
			if ( typeof window.ClickTaleEvent === 'function' && e.data !== '' ) {
				var ctData = JSON.parse( e.data ),
					clickTaleEvent = window.ClickTaleEvent;
				// Loop through JSON data object and fire events for each key
				for ( var key in ctData ) {
					clickTaleEvent( key + ':' + ctData[ key ] );
				}
			}
		}
	};

	o.addEventListener( w, 'message', receiveMessage, false );

} )( window, OOo );

var
	pathToAssets = '/onlineopinionv5/',
	bar_gif = pathToAssets + 'oo_bar_icon.gif',
	float_gif = pathToAssets + 'oo_float_icon.gif',
	loading_gif = pathToAssets + 'oo_loading.gif',
	tab_1_gif = pathToAssets + 'oo_tab_icon_1.gif',
	tab_gif = pathToAssets + 'oo_tab_icon.gif',
	tab_png = pathToAssets + 'oo_tab.png';

var css = document.createElement( "style" );
css.setAttribute( 'type', 'text/css' );
document.getElementsByTagName( 'head' )[ 0 ].appendChild( css );


cssText = "#oo_company_logo img { max-height: 100%; max-width: 100%; height: auto; width: auto\9; /* ie8 */ }";

cssText += "\n#oo_feedback_fl_spacer { display: block; height: 1px; position: absolute; top: 0; width: 100px; }";

cssText += "\n.oo_feedback_float { width: 100px; height: 50px; overflow: hidden; font: 12px Tahoma, Arial, Helvetica, sans-serif; text-align: center; color: #252525; cursor: pointer; z-index: 999997; position: fixed; bottom: 5px; border: 1px solid #cccccc; border-radius: 9px; -moz-border-radius: 9px; -webkit-border-radius: 9px; right: 10px; -webkit-transition: -webkit-transform 0.3s ease; }";
cssText += "\n.oo_feedback_float .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n.oo_feedback_float .olUp { width: 100%; height: 100%; background: url(" + float_gif + ") center 10px no-repeat; text-align: center; padding: 31px 0 5px 0; position: relative; z-index: 2; filter: alpha(opacity=100); opacity: 1; transition: opacity .5s; -moz-transition: opacity .5s; -webkit-transition: opacity .5s; -o-transition: opacity .5s; }";
cssText += "\n.oo_feedback_float .olUp img { margin-bottom: 5px; }";
cssText += "\n.oo_feedback_float .oo_transparent { display: block; background: white; position: absolute; top: 0; left: 0; height: 100%; width: 100%; z-index: 1; opacity: 0.8; filter: alpha(opacity=80); border-radius: 8px; -moz-border-radius: 8px; -webkit-border-radius: 8px; }";
cssText += "\n.oo_feedback_float:hover .oo_transparent { opacity: 1.0; filter: alpha(opacity=100); }";
cssText += "\n.oo_feedback_float:hover .olUp { display: block; opacity: 0; filter: alpha(opacity=0); }";
cssText += "\n.oo_feedback_float .fbText { display: block; }";
cssText += "\n.oo_feedback_float .olOver { display: block; height: 100%; width: 100%; position: absolute; top: 0; left: 0; min-height: 50px; z-index: 2; opacity: 0; filter: alpha(opacity=0); transition: opacity .5s; -moz-transition: opacity .5s; -webkit-transition: opacity .5s; -o-transition: opacity .5s; }";
cssText += "\n.oo_feedback_float .olOver span { display: block; padding: 10px 5px; }";
cssText += "\n.oo_feedback_float:hover .olOver { opacity: 1.0; filter: alpha(opacity=100); top: 0; }";

cssText += "\n.oo_cc_wrapper { left: 0; padding: 0; position: fixed; text-align: center; top: 25px; width: 100%; z-index: 999999; }";
cssText += "\n.oo_cc_wrapper .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n.oo_cc_wrapper span { width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 1; }";
cssText += "\n.oo_cc_wrapper .iwrapper { background-color: white; margin: 0 auto; position: relative; width: 535px; z-index: 2; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); }";
cssText += "\n.oo_cc_wrapper iframe { position: relative; border: none; width: 100%; z-index: 4; }";
cssText += "\n.oo_cc_wrapper .oo_cc_close { position: absolute; display: block; right: 20px; top: 5px; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; text-align: center; z-index: 5; color: black; text-decoration: none; cursor: pointer; }";

cssText += "\n#oo_bar { padding: 10px 35px; cursor: pointer; color: #000; border-top: 1px solid white; background-color: #fff; bottom: 0; display: block; font: 16px 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; left: 0; text-decoration: none; line-height: 16px; position: fixed; text-align: left; width: 100%; z-index: 999997; box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; } ";
cssText += "\n#oo_bar span.icon { background-image: url(" + bar_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_bar .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_bar:focus { outline: 3px solid #51ace9; }";

cssText += "\n.oo_bar { padding-bottom: 37px; }";

cssText += "\n#oo_tab { background-color: #ffffff; border: 1px solid #cccccc; display: block; position: fixed; top: 40%; padding: 55px 0px 55px 0px; width: 35px; z-index: 999995; cursor: pointer; }";
cssText += "\n#oo_tab span { bottom: 15px; display: block; background: url(" + tab_gif + ") no-repeat; height: 9px; position: absolute; width: 9px; }";
cssText += "\n#oo_tab div { background-image: url(" + tab_png + "); background-repeat: no-repeat; position: absolute; display: block; height: 100%; left: 0; top: 0; width: 100%; }";
cssText += "\n#oo_tab.wcag a { background: url(" + tab_gif + ") no-repeat; background-repeat: no-repeat; background-position: center bottom; border: none; outline: none; position: absolute; display: block; bottom: 14px; left: -6px; top: 0; width: 100%; }";
cssText += "\n#oo_tab.wcag img { border: none; outline: none; display: block; position: absolute; left: -6px; top: -10px; }";
cssText += "\n#oo_tab .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

cssText += "\n.oo_tab_left { left: -13px; border-radius: 0px 9px 9px 0px; -moz-border-radius: 0px 9px 9px 0px; -webkit-border-radius: 0px 9px 9px 0px; transition: left .5s; -moz-transition: left .5s; -webkit-transition: left .5s; -o-transition: left .5s; background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, from(#eeeeee), to(#ffffff)); background-image: -webkit-linear-gradient(left, #eeeeee, #ffffff); background-image: -moz-linear-gradient(left, #eeeeee, #ffffff); background-image: -ms-linear-gradient(left, #eeeeee, #ffffff); background-image: -o-linear-gradient(left, #eeeeee, #ffffff); background-image: linear-gradient(left, #eeeeee, #ffffff); }";
cssText += "\n.oo_tab_left span { right: 6px; }";
cssText += "\n.oo_tab_left div { background-position: 6px -10px; }";
cssText += "\n.oo_tab_left:hover { left: -5px; }";

cssText += "\n.oo_tab_right { right: -13px; border-radius: 9px 0px 0px 9px; -moz-border-radius: 9px 0px 0px 9px; -webkit-border-radius: 9px 0px 0px 9px; transition: right .5s; -moz-transition: right .5s; -webkit-transition: right .5s; -o-transition: right .5s; background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, from(#ffffff), to(#eeeeee)); background-image: -webkit-linear-gradient(left, #ffffff, #eeeeee); background-image: -moz-linear-gradient(left, #ffffff, #eeeeee); background-image: -ms-linear-gradient(left, #ffffff, #eeeeee); background-image: -o-linear-gradient(left, #ffffff, #eeeeee); background-image: linear-gradient(left, #ffffff, #eeeeee); }";
cssText += "\n.oo_tab_right span { left: 7px; }";
cssText += "\n.oo_tab_right div { background-position: -6px -10px; }";
cssText += "\n.oo_tab_right:hover { right: -5px; }";

cssText += "\n#oo_tab_1 { background-color: black; border: 1px solid #ffffff; display: block; position: fixed; top: 40%; padding: 10px 0px 10px 0px; width: 124px; z-index: 999995; cursor: pointer; text-decoration: none; text-align: left; font-family: 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; line-height: 16px; font-size: 16px; color: #fff; }";
cssText += "\n#oo_tab_1:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_tab_1 span.screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_tab_1.oo_tab_right_1 { right: -9px; transition: right 1.5s; -moz-transition: right 1.5s; -webkit-transition: right 1.5s; padding: 10px 0px 10px 35px; box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; width: 89px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1 span.icon { background-image: url(" + tab_1_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1.small { right: -90px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1.small:hover { right: -9px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1 { left: -9px; transition: left 1.5s; -moz-transition: left 1.5s; -webkit-transition: left 1.5s; padding: 10px 0px 10px 15px; box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; width: 109px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1 span.icon { background-image: url(" + tab_1_gif + "); background-repeat: no-repeat; position: absolute; right: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1.small { left: -90px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1.small:hover { left: -9px; }";

cssText += "\n#oo_container { position: fixed; height: 100%; width: 100%; top: 0; left: 0; z-index: 999999; }";

cssText += "\n#oo_invitation_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_invitation_prompt #oo_company_logo { width: 100%; height: 120px; background: black; }";
cssText += "\n#oo_invitation_prompt #oo_company_logo img { height: 100%; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content { width: 80%; padding: 40px 10% 20px 10%; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content p { color: black; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content p.prompt_button a { text-align: center; color: white; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a { cursor: pointer; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a#oo_launch_prompt { background: #cb352d; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a#oo_no_thanks { background: #707070; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_brand_logo { text-align: center; border-top: 1px solid #ccc; line-height: 1.5em; margin: 20px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt { position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt:focus { outline: none; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_invitation_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_invitation_prompt { width: 90%; } #oo_invitation_prompt #oo_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; } #oo_invitation_prompt #oo_company_logo { height: 80px; } #oo_invitation_prompt #oo_invite_content { padding: 20px 10% 20px 10%; } #oo_invitation_prompt #oo_invite_content #ol_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt #oo_close_prompt { right: -70px; } }";


cssText += "\n#oo_waypoint_container { position: fixed; height: 100%; width: 100%; top: 0; left: 0; z-index: 999999; }";

cssText += "\n#oo_waypoint_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_waypoint_prompt #oo_company_logo { width: 100%; height: 120px; background: black; }";
cssText += "\n#oo_waypoint_prompt #oo_company_logo img { height: 100%; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content { width: 80%; padding: 30px 10% 20px 10%; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a { cursor: pointer; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content p { color: black; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; text-align: center; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content p#oo_waypoint_message { font-size: 1.2em; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon { cursor: pointer; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; color: white; margin-bottom: 20px; background-color: #cb352d; text-align: center; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon.last { margin-bottom: 0; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo { border-top: 1px solid #ccc; line-height: 1.5em; margin: 10px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_waypoint_prompt #oo_close_prompt { position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";
cssText += "\n#oo_waypoint_prompt #oo_close_prompt:focus { outline: none; }";
cssText += "\n#oo_waypoint_prompt #oo_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_waypoint_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_waypoint_prompt { width: 90%; } #oo_waypoint_prompt #oo_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_waypoint_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; } #oo_waypoint_prompt #oo_company_logo { height: 80px; } #oo_waypoint_prompt #oo_waypoint_content { padding: 20px 10% 20px 10%; } #oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_waypoint_prompt #oo_close_prompt { right: -70px; } }";
cssText += "\n#oo_overlay, #oo_invitation_overlay, #oo_waypoint_overlay { background: white url(" + loading_gif + ") 50% 80px no-repeat; display: block; height: 1000%; left: 0; position: fixed; top: 0; width: 100%; z-index: 999998; opacity: 0.5; filter: alpha(opacity=50); }";
cssText += "\n#oo_overlay.no_loading, #oo_invitation_overlay.no_loading, #oo_waypoint_overlay.no_loading { background: white; opacity: 0.5; filter: alpha(opacity=50); }";

cssText += "\n@media print { #oo_bar, .oo_feedback_float, #oo_tab { display: none; } }";

/* Detect if browser is IE */
if ( navigator.appName && navigator.appName == 'Microsoft Internet Explorer' ) {
	css.styleSheet.cssText = cssText;
} else {
	css.innerHTML = cssText;
}
//jQuery('.twc-base-text-tooltips.footer-text div a:last').after(' | <a href="#" onClick="oo_feedback.show(event)"><img src="//www.timewarnercable.com/etc/clientlibs/responsive/residential/libs/onlineOpinion/images/oo_bar_icon.gif" border="0" title="Feedback" /> Feedback</a>');
jQuery( '.twc-base-text-tooltips.footer-text a:first' ).before( '<a href="#" onclick="oo_feedback.show(event)" style="float:right;clear:both"><img src="//www.timewarnercable.com/etc/clientlibs/responsive/residential/libs/onlineOpinion/images/oo_bar_icon.gif" border="0" title="Feedback"> Site Feedback</a><span style="clear:both">&nbsp;</span><hr/>' )