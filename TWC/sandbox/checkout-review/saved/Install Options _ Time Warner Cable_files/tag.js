window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag._tagv = "2.23.0";
! function( a, b ) {
	function c( a, c, d ) {
		b._logcnt = b._logcnt || 0;
		"undefined" != typeof lpMTagDebug && "function" == typeof lpMTagDebug.Display && lpMTagDebug.Display( a, c, d, b._logcnt );
		if ( "undefined" != typeof lpTaglogListeners )
			for ( var e = 0; e < lpTaglogListeners.length; e++ ) try {
				lpTaglogListeners[ e ]( a, c, d, b._logcnt )
			} catch ( f ) {
				"undefined" != typeof lpMTagDebug && "function" == typeof lpMTagDebug.Display && lpMTagDebug.Display( "Exception=" + f.message + " msg=" + a, c, d, b._logcnt )
			}
		b._logcnt++
	}

	function d( a ) {
		for ( var b = 0; b < a.length; b++ ) N[ a[ b ].service ] = a[ b ].baseURI
	}

	function e( a ) {
		var b = N[ a ],
			c = "ALL";
		return b ? b : N[ c ]
	}

	function f() {
		return N
	}

	function g() {
		var a = new b.Events,
			c = a.trigger,
			d = !1;
		a.trigger = function( a, e, f ) {
			var g = a;
			"string" == typeof a && ( g = {
				eventName: e,
				appName: a,
				data: f
			} );
			if ( "LPT" === g.appName && "DOM_READY" === g.eventName ) {
				if ( d ) return;
				d = !0
			}
			"undefined" != typeof b._deferExecuted ? c( g ) : b.defer( function() {
				c( g )
			}, 1 )
		};
		return a
	}

	function h( a ) {
		P.taglets = P.taglets || {};
		v( a );
		x( a, P.taglets );
		A( a, P.taglets );
		z( P );
		B();
		S.trigger( "LPTAG", "ON_READY" );
		D( a, P.taglets );
		S.trigger( "LPTAG", "ON_STARTED" )
	}

	function i( a ) {
		v( a );
		A( a, {}, !0 );
		D( a, {}, !0 )
	}

	function j() {
		return da
	}

	function k() {
		return ea
	}

	function l() {
		return W[ ea ]
	}

	function m() {
		return U[ da ]
	}

	function n() {
		if ( !b.started ) {
			b.started = !0;
			J()
		}
	}

	function o( a, c ) {
		if ( !a ) return !1;
		b.url = a;
		c = c || {};
		c.taglets = c.taglets || {};
		b.section = c.section || b.section;
		P = c;
		w( c.taglets );
		Q = !0;
		J();
		return !0
	}

	function p( a ) {
		var c, d, e;
		a = a || {};
		if ( b.taglets && b.taglets.jsonp && a.name ) {
			c = I( O );
			d = b.protocol + "//" + ( b.ovr && b.ovr.tagjs ? b.ovr.tagjs : "tags.liveperson.net" ) + "/lptag/api/account/" + b.site + "/configuration/applications/taglets/" + a.name + "/.jsonp?df=" + b.device.family() + ( b.section ? "&s=" + b.section : "" ) + ( b.debug ? "&lpDebug=" + b.debug : "" ) + ( c.length ? "&ct=" + encodeURIComponent( c.join( "," ) ) : "" );
			e = {
				url: d,
				success: s( a ),
				error: t( a )
			};
			b.taglets.jsonp.issueCall( e )
		}
	}

	function q() {
		if ( a.location && a.location.search ) {
			var c = a.location.search.match( /lpDebug=(?=(\d))/ );
			c && c[ 1 ] && ( b.debug = c[ 1 ] )
		}
		if ( !b.isDom && ( "interactive" === document.readyState || "complete" === document.readyState ) ) {
			b.isDom = !0;
			S.trigger( "LPT", "DOM_READY" )
		}
		"undefined" != typeof a._lptTagStop || "undefined" != typeof b.autoStart && !b.autoStart || n()
	}

	function r( a ) {
		try {
			var e = M.retry;
			if ( a.retry ) K( e, a.retry, !0, J );
			else if ( !b.loaded || Q ) {
				Q = !1;
				b.loaded = !0;
				e.count = 0;
				b.site = a.site || b.site;
				d( a.serviceMap );
				b.debug ? setTimeout( function() {
					h( a.taglets )
				}, 0 ) : h( a.taglets )
			}
		} catch ( f ) {
			c( "callback has failed " + f.message, "ERROR", "LPTAG" )
		}
	}

	function s( a ) {
		return function( c ) {
			var d = M.retry;
			if ( c.retry ) K( d, c.retry, !1, function() {
				p( a )
			} );
			else if ( c.taglets ) {
				d.count = 0;
				c.taglets.constructor !== Array && ( c.taglets = [ c.taglets ] );
				if ( b.debug ) setTimeout( function() {
					i( c.taglets );
					u( a.success, a.context )
				}, 0 );
				else {
					i( c.taglets );
					u( a.success, a.context )
				}
			}
		}
	}

	function t( a ) {
		return function( b ) {
			u( a.error, a.context, b )
		}
	}

	function u( b, d ) {
		d = d || a;
		if ( "function" == typeof b ) {
			var e = Array.prototype.slice.call( arguments, 2 );
			try {
				return b.apply( d, e )
			} catch ( f ) {
				c( "Failed to execute callback exc= " + f.message, "ERROR", "LPTAG" )
			}
		}
	}

	function v( a ) {
		for ( var b = 0; b < a.length; b++ ) try {
			c( "Processing taglet: " + a[ b ].name, "DEBUG", "LPTAG" );
			eval( a[ b ].code )
		} catch ( d ) {
			c( "Error creating taglet:" + a[ b ].name + "  ex=" + d.message, "ERROR", "LPTAG" )
		}
	}

	function w( a ) {
		for ( var d in O )
			if ( O.hasOwnProperty( d ) && O[ d ] !== R.STOPPED ) {
				var e = b.taglets[ d ];
				try {
					if ( "function" == typeof e.onBeforeNavigation ) {
						c( "onBeforeNavigation taglet: " + d, "DEBUG", "LPTAG" );
						e.onBeforeNavigation( a[ d ] )
					}
				} catch ( f ) {
					c( "Error onBeforeNavigation taglet :" + d + "ex= " + f.message, "ERROR", "LPTAG" )
				}
			}
	}

	function x( a, d ) {
		for ( var e in O )
			if ( O.hasOwnProperty( e ) && O[ e ] !== R.STOPPED && y( a, e ) ) {
				var f = b.taglets[ e ];
				try {
					if ( "function" == typeof f.stop ) {
						c( "Stop taglet: " + e, "DEBUG", "LPTAG" );
						f.stop( d[ e ] )
					}
					O[ e ] = R.STOPPED;
					S.trigger( "LPTAG", "TAGLET_STOPPED", {
						name: e
					} )
				} catch ( g ) {
					c( "Error stop taglet :" + e + "ex= " + g.message, "ERROR", "LPTAG" )
				}
			}
	}

	function y( a, b ) {
		for ( var c = !0, d = 0; d < a.length; d++ )
			if ( a[ d ].name === b ) {
				c = !1;
				break
			}
		return c
	}

	function z( a ) {
		a.sdes && a.sdes.length && b.sdes.push( a.sdes )
	}

	function A( a, d, e ) {
		for ( var f = 0; f < a.length; f++ ) {
			var g = b.taglets[ a[ f ].name ];
			if ( O[ a[ f ].name ] ) {
				if ( !e ) try {
					if ( "function" == typeof g.reinit ) {
						c( "Reinit taglet: " + a[ f ].name, "DEBUG", "LPTAG" );
						g.reinit( a[ f ].parameters, d[ a[ f ].name ] );
						S.trigger( "LPTAG", "TAGLET_REINITIALIZED", {
							name: a[ f ].name
						} )
					}
				} catch ( h ) {
					c( "Error reinit taglet :" + a[ f ].name + "ex= " + h.message, "ERROR", "LPTAG" )
				}
			} else try {
				c( "Init taglet: " + a[ f ].name, "DEBUG", "LPTAG" );
				g.init( a[ f ].parameters );
				S.trigger( "LPTAG", "TAGLET_INITIALIZED", {
					name: a[ f ].name
				} )
			} catch ( h ) {
				c( "Error init taglet:" + a[ f ].name + "  ex=" + h.message, "ERROR", "LPTAG" )
			}
		}
	}

	function B() {
		b._deferExecuted = !0;
		b.defer = function( a ) {
			try {
				a()
			} catch ( b ) {
				c( "Error executing defer fn:" + b.message, "ERROR", "LPTAG" )
			}
		};
		C( b._defB );
		C( b._defT );
		C( b._defL )
	}

	function C( a ) {
		if ( "undefined" != typeof a ) {
			for ( var b = 0; b < a.length; b++ ) try {
				a[ b ]()
			} catch ( d ) {
				c( "Error executing defer fn:" + d.message, "ERROR", "LPTAG" )
			}
			a.length = 0
		}
	}

	function D( a, d, e ) {
		for ( var f = 0; f < a.length; f++ ) {
			var g = b.taglets[ a[ f ].name ];
			if ( O[ a[ f ].name ] ) {
				if ( !e ) try {
					if ( "function" == typeof g.restart ) {
						c( "Restart taglet: " + a[ f ].name, "DEBUG", "LPTAG" );
						g.restart( d[ a[ f ].name ] )
					}
					S.trigger( "LPTAG", "TAGLET_RESTARTED", {
						name: a[ f ].name
					} )
				} catch ( h ) {
					c( "Error restart taglet :" + a[ f ].name + "ex= " + h.message, "ERROR", "LPTAG" )
				}
			} else try {
				if ( "function" == typeof g.start ) {
					c( "Start taglet: " + a[ f ].name, "DEBUG", "LPTAG" );
					g.start()
				}
				S.trigger( "LPTAG", "TAGLET_STARTED", {
					name: a[ f ].name
				} )
			} catch ( h ) {
				c( "Error start taglet :" + a[ f ].name + "ex= " + h.message, "ERROR", "LPTAG" )
			}
			O[ a[ f ].name ] = R.STARTED
		}
	}

	function E() {
		var a = T.desktop;
		Y && !Z ? a = T.mobile : !Z && !ca || G() ? Z && G() && $ && ( a = T.tablet ) : a = T.tablet;
		return a
	}

	function F() {
		var a = V.windows;
		_ && !Y ? a = V.mac : ca ? a = V.android : ba ? a = V.iOS : aa && ( a = V.linux );
		return a
	}

	function G() {
		var a, b = !1,
			c = document.documentMode;
		a = /*@cc_on!@*/ b;
		if ( !a ) {
			try {
				document.documentMode = ""
			} catch ( d ) {}
			a = "number" == typeof document.documentMode;
			try {
				document.documentMode = c
			} catch ( d ) {}
		}!a && navigator && navigator.userAgent && ( a = "Netscape" === navigator.appName && /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.test( navigator.userAgent ) );
		return a
	}

	function H( a ) {
		var b = {};
		for ( var c in a ) b[ c ] = a[ c ];
		return b
	}

	function I( a ) {
		var b = [];
		for ( var c in a ) a.hasOwnProperty( c ) && b.push( c );
		return b
	}

	function J() {
		var a = I( O );
		b.load( b.protocol + "//" + ( b.ovr && b.ovr.tagjs ? b.ovr.tagjs : "tags.liveperson.net" ) + "/lptag/api/account/" + b.site + "/configuration/applications/taglets/.jsonp?df=" + b.device.family() + ( b.section ? "&s=" + b.section : "" ) + ( b.debug ? "&lpDebug=" + b.debug : "" ) + ( a.length ? "&ct=" + encodeURIComponent( a.join( "," ) ) : "" ), "UTF-8", M.scriptPrefix + M.count );
		M.count++
	}

	function K( a, b, d, e ) {
		if ( d ) {
			var f = M.count - 1;
			L( M.scriptPrefix + f )
		}
		isNaN( b.maxRetries ) || ( a.max = parseInt( b.maxRetries, 10 ) );
		isNaN( b.timeout ) || ( a.timeout = parseInt( b.timeout, 10 ) );
		if ( a.count < a.max ) {
			c( "retrying count=" + a.count + " max=" + a.max, "DEBUG", "LPTAG" );
			a.count++;
			setTimeout( function() {
				e()
			}, a.timeout )
		} else c( "exceeded max retries: " + a.max + ", stopping", "ERROR", "LPTAG" )
	}

	function L( a ) {
		var b = document.getElementById( a );
		if ( b ) try {
			b.parentNode.removeChild( b );
			for ( var d in b ) b.hasOwnProperty( d ) && delete b[ d ]
		} catch ( e ) {
			c( "error removing script: " + a, "ERROR", "LPTAG" )
		}
	}
	var M = {
			retry: {
				count: 0,
				max: 3,
				timeout: 1e3
			},
			scriptPrefix: "_lpTagScriptId_",
			count: 0
		},
		N = [],
		O = {},
		P = {},
		Q = !1,
		R = {
			STARTED: 1,
			STOPPED: 2
		},
		S, T = {
			desktop: 0,
			tablet: 1,
			mobile: 2
		},
		U = [ "Desktop", "Tablet", "Mobile" ],
		V = {
			windows: 0,
			mac: 1,
			linux: 2,
			iOS: 3,
			android: 4
		},
		W = [ "Windows", "Mac OSX", "Linux", "iOS", "Android" ],
		X = navigator.userAgent,
		Y = !!X.match( /(Windows Phone|iPhone|iPod|mobile|Mobile|IEMobile)/g ),
		Z = !!X.match( /(Tablet PC|iPad|Tablet|tablet)/g ),
		$ = !!X.match( /(Touch)/g ),
		_ = !!X.match( /(Mac OS)/g ),
		aa = !!X.match( /(Linux)/g ),
		ba = !!X.match( /(iPhone|iPod|iPad)/g ),
		ca = !!X.match( /(android|Android)/g ),
		da = E(),
		ea = F();
	! function( a, b ) {
		"use strict";
		if ( "object" == typeof exports ) b( a, exports );
		else {
			a.Chronos = a.Chronos || {};
			b( a, a.Chronos )
		}
	}( "undefined" == typeof a.lpTag ? this : a.lpTag, function( a, b ) {
		"use strict";

		function c( a, b, c ) {
			var d = [];
			if ( a[ b ] && a[ b ].length )
				for ( var e = 0; e < a[ b ].length; e++ ) c && "*" !== a[ b ][ e ].appName && a[ b ][ e ].appName !== c || d.push( a[ b ][ e ] );
			if ( a[ "*" ] )
				for ( var f = 0; f < a[ "*" ].length; f++ ) c && "*" !== a[ "*" ][ f ].appName && a[ "*" ][ f ].appName !== c || d.push( a[ "*" ][ f ] );
			return d
		}

		function d( b, c, d ) {
			a && "function" == typeof a.log && a.log( b, c, d )
		}

		function e( a ) {
			var b, c = a.unbindObj[ a.attrName ],
				e = !1;
			if ( !a.unbindObj ) {
				d( "CMD listen id not spec for unbind", "ERROR", a.loggerName );
				return null
			}
			if ( "string" == typeof a.unbindObj ) return i( a.lstnrs, a.unbindObj );
			if ( !a.unbindObj.func && !a.unbindObj.context && !a.unbindObj.appName ) return !1;
			var f = a.lstnrs;
			if ( c ) {
				f = {};
				f[ c ] = a.lstnrs[ c ]
			}
			for ( var g in f )
				if ( f.hasOwnProperty( g ) && f[ g ] && f[ g ].length ) {
					b = j( f[ g ], a.unbindObj.func, a.unbindObj.context, a.unbindObj.appName );
					if ( b.length !== f[ g ].length ) {
						a.lstnrs[ g ] = b;
						e = !0
					}
				}
			return e
		}

		function f( a ) {
			var b = {};
			if ( a.constructor === Object )
				for ( var c in a ) a.hasOwnProperty( c ) && null !== a[ c ] && void 0 !== a[ c ] && ( "object" == typeof a[ c ] && a[ c ].constructor !== Array ? b[ c ] = f( a[ c ] ) : a[ c ].constructor === Array ? b[ c ] = a[ c ].slice( 0 ) || [] : "function" != typeof a[ c ] && ( b[ c ] = null !== a[ c ] && void 0 !== a[ c ] ? a[ c ] : "" ) );
			else a.constructor === Array ? b = a.slice( 0 ) || [] : "function" != typeof a && ( b = a );
			return b
		}

		function g( a, b, c ) {
			if ( ( "undefined" == typeof c || "*" === c ) && "*" === b ) return a;
			for ( var d = [], e = 0; e < a.length; e++ ) a[ e ].eventName !== c && "*" !== c || ( b && b === a[ e ].appName || !a[ e ].appName || "*" === a[ e ].appName || "*" === b ) && d.push( a[ e ] );
			return d
		}

		function h( a ) {
			if ( 0 === a.eventBufferLimit || a.triggerData.data && a.triggerData.data.doNotStore ) a = null;
			else {
				var b = {
					eventName: a.triggerData[ a.attrName ],
					appName: a.triggerData.appName
				};
				b.data = a.triggerData.passDataByRef ? a.triggerData.data : f( a.triggerData.data );
				if ( a.eventBufferLimit > 0 ) {
					a.index >= a.eventBufferLimit && ( a.index = 0 );
					a.fired[ a.index ] = b;
					a.index++
				} else a.fired.push( b );
				a = null
			}
		}

		function i( a, b ) {
			var c = !1;
			if ( !b ) {
				d( "Ev listen id not spec for unregister", "ERROR", "Events" );
				return null
			}
			for ( var e in a )
				if ( a.hasOwnProperty( e ) )
					for ( var f = 0; f < a[ e ].length; f++ )
						if ( a[ e ][ f ].id == b ) {
							a[ e ].splice( f, 1 );
							d( "Ev listen=" + b + " and name=" + e + " unregister", "DEBUG", "Events" );
							c = !0;
							break
						}
			c || d( "Ev listen not found " + b + " unregister", "DEBUG", "Events" );
			return c
		}

		function j( a, b, c, e ) {
			var f = [];
			if ( a && a.length )
				for ( var g = 0; g < a.length; g++ ) try {
					var h = !c && a[ g ].func === b,
						i = !b && c && a[ g ].context === c,
						j = b && c && a[ g ].func === b && a[ g ].context === c,
						k = e && e === a[ g ].appName,
						l = "*" === a[ g ].appName;
					if ( h || i || j ) {
						if ( k || l ) continue;
						if ( i ) continue
					} else if ( !b && !c && k ) continue;
					f.push( a[ g ] )
				} catch ( m ) {
					d( "Error in unbind e=" + m.message, "ERROR", "Events" )
				}
			return f
		}
		b.EventsUtil = b.EventsUtil || {
			getListeners: c,
			log: d,
			unbind: e,
			hasFired: g,
			cloneEventData: f,
			storeEventData: h
		}
	} );
	! function( a, b ) {
		"use strict";
		if ( "object" == typeof exports ) b( a, exports, require( "util/EventsUtil" ) );
		else {
			a.Chronos = a.Chronos || {};
			b( a, a.Chronos, a.Chronos.EventsUtil )
		}
	}( "undefined" == typeof a.lpTag ? this : a.lpTag, function( a, b, c ) {
		"use strict";

		function d( a ) {
			function b( a ) {
				if ( a ) {
					a.triggerOnce = !0;
					return d( a )
				}
				return null
			}

			function d( a, b, e ) {
				var f = a;
				"string" == typeof a && ( f = {
					appName: a,
					eventName: b,
					func: e
				} );
				if ( !f.eventName || !f.func || "function" != typeof f.func && f.func.constructor !== Array ) {
					c.log( "Ev listen has invalid params: evName=[" + f.eventName + "]", "ERROR", "Events" );
					return null
				}
				if ( f.func.constructor === Array ) {
					for ( var g, h, i = [], j = 0; j < f.func.length; j++ ) {
						g = c.cloneEventData( f );
						g.func = f.func[ j ];
						h = d( g );
						i.push( h )
					}
					return i
				}
				var k = q + n++,
					l = {
						id: k,
						func: f.func,
						context: f.context || null,
						aSync: !!f.aSync,
						appName: f.appName || "*",
						triggerOnce: f.triggerOnce || !1
					};
				o[ f.eventName ] = o[ f.eventName ] || [];
				o[ f.eventName ].push( l );
				c.log( "Ev listen rgstr: evName=[" + f.eventName + "] aSync=" + l.aSync + " appName=" + l.name, "DEBUG", "Events" );
				f = null;
				a = null;
				return k
			}

			function e( a ) {
				return c.unbind( {
					unbindObj: a,
					attrName: m,
					loggerName: l,
					lstnrs: o
				} )
			}

			function f( a, b ) {
				return c.hasFired( p, a, b )
			}

			function g( a, b, d ) {
				var e = a;
				"string" == typeof a && ( e = {
					eventName: b,
					appName: a,
					data: d
				} );
				if ( !e || "undefined" == typeof e.eventName ) {
					c.log( "Ev name not spec for publish", "ERROR", "Events" );
					e = null;
					return null
				}
				e.passDataByRef = e.passDataByRef || !j;
				i( e );
				var f = c.getListeners( o, e.eventName, e.appName );
				if ( f.length > 0 )
					for ( var g = 0; g < f.length; g++ ) {
						var k = e.passDataByRef ? e.data : c.cloneEventData( e.data ),
							l = {
								appName: e.appName,
								eventName: e.eventName
							},
							m = f[ g ];
						m.aSync || k && k.aSync ? setTimeout( h( m, k, l ), 0 ) : h( m, k, l )()
					}
				e = null;
				return f.length > 0
			}

			function h( a, b, d ) {
				return function() {
					try {
						a.func.call( a.context, b, d );
						b = null;
						a.triggerOnce && e( a );
						a = null
					} catch ( f ) {
						c.log( "Error executing " + d.eventName + " eventId: " + a.id + "e=" + f.message, "ERROR", "Events" )
					}
				}
			}

			function i( a ) {
				c.storeEventData( {
					triggerData: a,
					eventBufferLimit: k,
					attrName: m,
					fired: p,
					index: r
				} )
			}
			var j, k, l = "Events",
				m = "eventName",
				n = 0,
				o = {},
				p = [],
				q = "evId_",
				r = 0;
			j = a && "boolean" == typeof a.cloneEventData ? a.cloneEventData : !1;
			k = a && !isNaN( a.eventBufferLimit ) ? a.eventBufferLimit : -1;
			this.once = b;
			this.hasFired = f;
			this.trigger = g;
			this.publish = g;
			this.bind = d;
			this.register = d;
			this.unbind = e;
			this.unregister = e
		}
		b.Events = b.Events || d
	} );
	b.Events = b.Events || b.Chronos.Events;
	a.lpTag = a.lpTag || {};
	b.storageMethods = b.storageMethods || function() {
		"use strict";

		function a() {
			return l && m
		}

		function b() {
			return l
		}

		function c() {
			return m
		}

		function d( a, c ) {
			if ( b() ) {
				sessionStorage.setItem( a, c );
				return !0
			}
		}

		function e( a ) {
			return b() ? sessionStorage.getItem( a ) || "" : void 0
		}

		function f( a ) {
			if ( b() && e( a ) ) {
				sessionStorage.removeItem( a );
				return !0
			}
			return !1
		}

		function g( a, b ) {
			if ( c() ) {
				localStorage.setItem( a, b );
				return !0
			}
		}

		function h( a ) {
			return c() ? localStorage.getItem( a ) || "" : void 0
		}

		function i( a ) {
			if ( c() && h( a ) ) {
				localStorage.removeItem( a );
				return !0
			}
			return !1
		}

		function j() {
			l = k( sessionStorage );
			m = k( localStorage )
		}

		function k( a ) {
			var b = !1,
				c = "lpTestCase";
			try {
				if ( "undefined" != typeof Storage ) {
					a.setItem( c, "1" );
					a.removeItem( c );
					b = !0
				}
			} catch ( d ) {}
			return b
		}
		var l, m;
		j();
		return {
			isStorageEnabled: a,
			isSessionStorageEnabled: b,
			isLocalStorageEnabled: c,
			setSessionData: d,
			getSessionData: e,
			removeSessionData: f,
			setPersistentData: g,
			getPersistentData: h,
			removePersistentData: i
		}
	}();
	a.lpTag = a.lpTag || {};
	b.cookieMethods = b.cookieMethods || function() {
		"use strict";

		function a() {
			var a = "lpTestCookie" + ( new Date ).getTime(),
				b = "testValue";
			e( a, b );
			g = b === c( a );
			f( a );
			h = !1;
			return g
		}

		function b() {
			return g
		}

		function c( a ) {
			var b, c, d = "; ",
				e = "";
			if ( h || g ) {
				if ( "string" != typeof a ) return "";
				a = encodeURIComponent( a );
				c = d + document.cookie;
				b = c.split( d + a + "=" );
				e = 1 == b.length ? "" : decodeURIComponent( b[ 1 ].split( ";" )[ 0 ] )
			}
			return e
		}

		function d( a, b, c ) {
			var d = !1;
			if ( h || g ) {
				c = "number" == typeof c ? c : 2592e3;
				d = e( a, b, c )
			}
			return d
		}

		function e( a, b, c, d, e ) {
			var f, i, j = !1;
			if ( h || g ) {
				if ( "string" != typeof a || "" === a ) return !1;
				null !== b && "undefined" != typeof b || ( c = -1 );
				if ( "number" == typeof c ) {
					i = ( new Date ).getTime();
					f = new Date( i + 1e3 * c )
				}
				b = b ? encodeURIComponent( b ) : "";
				document.cookie = [ encodeURIComponent( a ), "=", b, f ? "; expires=" + f.toUTCString() : "", d ? "; path=" + d : "", e ? "; domain=" + e : "" ].join( "" );
				j = !0
			}
			return j
		}

		function f( a, b, c ) {
			return e( a, void 0, void 0, b, c )
		}
		var g = !1,
			h = !0;
		a();
		return {
			clearCookie: f,
			writeSessionCookie: e,
			writePersistentCookie: d,
			readCookie: c,
			isCookieEnabled: b
		}
	}();
	b.cfg = M;
	b.log = c;
	b.csds = {
		getDomain: e,
		setDomains: d,
		getCSDSMap: f
	};
	b.getDomain = e;
	b.eventsFactory = g;
	b.tglMng = {
		run: h,
		runtTaglet: i
	};
	b.device = {
		os: k,
		osEnum: H( V ),
		osName: l,
		family: j,
		familyEnum: H( T ),
		familyName: m
	};
	b.start = n;
	b._reload = J;
	b.newPage = o;
	b.loadTaglet = p;
	b.callback = r;
	b.run = q;
	S = g();
	b.events = S;
	q()
}( window, lpTag );