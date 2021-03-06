/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.5.2
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor( e, t ) {
	if ( !e ) throw "Visitor requires Adobe Marketing Cloud Org ID";
	var n = this;
	n.version = "1.5.2";
	var i = window,
		a = i.Visitor;
	i.s_c_in || ( i.s_c_il = [], i.s_c_in = 0 ), n._c = "Visitor", n._il = i.s_c_il, n._in = i.s_c_in, n._il[ n._in ] = n, i.s_c_in++;
	var r = i.document,
		o = a.Ka;
	o || ( o = null );
	var s = a.La;
	s || ( s = void 0 );
	var c = a.ja;
	c || ( c = !0 );
	var u = a.Ja;
	u || ( u = !1 ), n.S = function( e ) {
		var t, n, i = 0;
		if ( e )
			for ( t = 0; t < e.length; t++ ) n = e.charCodeAt( t ), i = ( i << 5 ) - i + n, i &= i;
		return i
	}, n.q = function( e ) {
		var t, n = "0123456789",
			i = "",
			a = "",
			r = 8,
			o = 10,
			s = 10;
		if ( 1 == e ) {
			for ( n += "ABCDEF", e = 0; 16 > e; e++ ) t = Math.floor( Math.random() * r ), i += n.substring( t, t + 1 ), t = Math.floor( Math.random() * r ), a += n.substring( t, t + 1 ), r = 16;
			return i + "-" + a
		}
		for ( e = 0; 19 > e; e++ ) t = Math.floor( Math.random() * o ), i += n.substring( t, t + 1 ), 0 == e && 9 == t ? o = 3 : ( 1 == e || 2 == e ) && 10 != o && 2 > t ? o = 10 : e > 2 && ( o = 10 ), t = Math.floor( Math.random() * s ), a += n.substring( t, t + 1 ), 0 == e && 9 == t ? s = 3 : ( 1 == e || 2 == e ) && 10 != s && 2 > t ? s = 10 : e > 2 && ( s = 10 );
		return i + a
	}, n.ma = function() {
		var e;
		if ( !e && i.location && ( e = i.location.hostname ), e )
			if ( /^[0-9.]+$/.test( e ) ) e = "";
			else {
				var t = e.split( "." ),
					n = t.length - 1,
					a = n - 1;
				if ( n > 1 && 2 >= t[ n ].length && ( 2 == t[ n - 1 ].length || 0 > ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf( "," + t[ n ] + "," ) ) && a--, a > 0 )
					for ( e = ""; n >= a; ) e = t[ n ] + ( e ? "." : "" ) + e, n--
			}
		return e
	}, n.cookieRead = function( e ) {
		var e = encodeURIComponent( e ),
			t = ( ";" + r.cookie ).split( " " ).join( ";" ),
			n = t.indexOf( ";" + e + "=" ),
			i = 0 > n ? n : t.indexOf( ";", n + 1 );
		return 0 > n ? "" : decodeURIComponent( t.substring( n + 2 + e.length, 0 > i ? t.length : i ) )
	}, n.cookieWrite = function( e, t, i ) {
		var a, o = n.cookieLifetime,
			t = "" + t,
			o = o ? ( "" + o ).toUpperCase() : "";
		return i && "SESSION" != o && "NONE" != o ? ( a = "" != t ? parseInt( o ? o : 0, 10 ) : -60 ) ? ( i = new Date, i.setTime( i.getTime() + 1e3 * a ) ) : 1 == i && ( i = new Date, a = i.getYear(), i.setYear( a + 2 + ( 1900 > a ? 1900 : 0 ) ) ) : i = 0, e && "NONE" != o ? ( r.cookie = encodeURIComponent( e ) + "=" + encodeURIComponent( t ) + "; path=/;" + ( i ? " expires=" + i.toGMTString() + ";" : "" ) + ( n.cookieDomain ? " domain=" + n.cookieDomain + ";" : "" ), n.cookieRead( e ) == t ) : 0
	}, n.g = o, n.O = function( e, t ) {
		try {
			"function" == typeof e ? e.apply( i, t ) : e[ 1 ].apply( e[ 0 ], t )
		} catch ( n ) {}
	}, n.qa = function( e, t ) {
		t && ( n.g == o && ( n.g = {} ), n.g[ e ] == s && ( n.g[ e ] = [] ), n.g[ e ].push( t ) )
	}, n.o = function( e, t ) {
		if ( n.g != o ) {
			var i = n.g[ e ];
			if ( i )
				for ( ; 0 < i.length; ) n.O( i.shift(), t )
		}
	}, n.j = o, n.oa = function( e, t, i ) {
		var a, s = 0,
			c = 0;
		if ( t && r ) {
			for ( a = 0; !s && 2 > a; ) {
				try {
					s = ( s = r.getElementsByTagName( a > 0 ? "HEAD" : "head" ) ) && 0 < s.length ? s[ 0 ] : 0
				} catch ( u ) {
					s = 0
				}
				a++
			}
			if ( !s ) try {
				r.body && ( s = r.body )
			} catch ( l ) {
				s = 0
			}
			if ( s )
				for ( a = 0; !c && 2 > a; ) {
					try {
						c = r.createElement( a > 0 ? "SCRIPT" : "script" )
					} catch ( d ) {
						c = 0
					}
					a++
				}
		}
		t && s && c ? ( c.type = "text/javascript", c.setAttribute( "async", "async" ), c.src = t, s.firstChild ? s.insertBefore( c, s.firstChild ) : s.appendChild( c ), i && ( n.j == o && ( n.j = {} ), n.j[ e ] = setTimeout( i, n.loadTimeout ) ) ) : i && i()
	}, n.ka = function( e ) {
		n.j != o && n.j[ e ] && ( clearTimeout( n.j[ e ] ), n.j[ e ] = 0 )
	}, n.T = u, n.U = u, n.isAllowed = function() {
		return !n.T && ( n.T = c, n.cookieRead( n.cookieName ) || n.cookieWrite( n.cookieName, "T", 1 ) ) && ( n.U = c ), n.U
	}, n.a = o, n.d = o;
	var l = a.Ya;
	l || ( l = "MC" );
	var d = a.bb;
	d || ( d = "MCMID" );
	var f = a.Za;
	f || ( f = "MCCIDH" );
	var p = a.ab;
	p || ( p = "MCSYNCS" );
	var h = a.$a;
	h || ( h = "MCIDTS" );
	var g = a.Wa;
	g || ( g = "A" );
	var m = a.Ta;
	m || ( m = "MCAID" );
	var v = a.Xa;
	v || ( v = "AAM" );
	var b = a.Va;
	b || ( b = "MCAAMLH" );
	var y = a.Ua;
	y || ( y = "MCAAMB" );
	var x = a.cb;
	x || ( x = "NONE" ), n.B = 0, n.R = function() {
		if ( !n.B ) {
			var e = n.version;
			n.audienceManagerServer && ( e += "|" + n.audienceManagerServer ), n.audienceManagerServerSecure && ( e += "|" + n.audienceManagerServerSecure ), n.B = n.S( e )
		}
		return n.B
	}, n.V = u, n.f = function() {
		if ( !n.V ) {
			n.V = c;
			var e, t, i, a = n.R(),
				r = u,
				s = n.cookieRead( n.cookieName ),
				l = new Date;
			if ( n.a == o && ( n.a = {} ), s && "T" != s )
				for ( s = s.split( "|" ), s[ 0 ].match( /^[\-0-9]+$/ ) && ( parseInt( s[ 0 ], 10 ) != a && ( r = c ), s.shift() ), 1 == s.length % 2 && s.pop(), a = 0; a < s.length; a += 2 ) e = s[ a ].split( "-" ), t = e[ 0 ], i = s[ a + 1 ], e = 1 < e.length ? parseInt( e[ 1 ], 10 ) : 0, r && ( t == f && ( i = "" ), e > 0 && ( e = l.getTime() / 1e3 - 60 ) ), t && i && ( n.c( t, i, 1 ), e > 0 && ( n.a[ "expire" + t ] = e, l.getTime() >= 1e3 * e && ( n.d || ( n.d = {} ), n.d[ t ] = c ) ) );
			!n.b( m ) && ( s = n.cookieRead( "s_vi" ) ) && ( s = s.split( "|" ), 1 < s.length && 0 <= s[ 0 ].indexOf( "v1" ) && ( i = s[ 1 ], a = i.indexOf( "[" ), a >= 0 && ( i = i.substring( 0, a ) ), i && i.match( /^[0-9a-fA-F\-]+$/ ) && n.c( m, i ) ) )
		}
	}, n.sa = function() {
		var e, t, i = n.R();
		for ( e in n.a ) !Object.prototype[ e ] && n.a[ e ] && "expire" != e.substring( 0, 6 ) && ( t = n.a[ e ], i += ( i ? "|" : "" ) + e + ( n.a[ "expire" + e ] ? "-" + n.a[ "expire" + e ] : "" ) + "|" + t );
		n.cookieWrite( n.cookieName, i, 1 )
	}, n.b = function( e, t ) {
		return n.a == o || !t && n.d && n.d[ e ] ? o : n.a[ e ]
	}, n.c = function( e, t, i ) {
		n.a == o && ( n.a = {} ), n.a[ e ] = t, i || n.sa()
	}, n.na = function( e, t ) {
		var i = n.b( e, t );
		return i ? i.split( "*" ) : o
	}, n.ra = function( e, t, i ) {
		n.c( e, t ? t.join( "*" ) : "", i )
	}, n.Qa = function( e, t ) {
		var i = n.na( e, t );
		if ( i ) {
			var a, r = {};
			for ( a = 0; a < i.length; a += 2 ) r[ i[ a ] ] = i[ a + 1 ];
			return r
		}
		return o
	}, n.Sa = function( e, t, i ) {
		var a, r = o;
		if ( t )
			for ( a in r = [], t ) Object.prototype[ a ] || ( r.push( a ), r.push( t[ a ] ) );
		n.ra( e, r, i )
	}, n.l = function( e, t ) {
		var i = new Date;
		i.setTime( i.getTime() + 1e3 * t ), n.a == o && ( n.a = {} ), n.a[ "expire" + e ] = Math.floor( i.getTime() / 1e3 ), 0 > t ? ( n.d || ( n.d = {} ), n.d[ e ] = c ) : n.d && ( n.d[ e ] = u )
	}, n.Q = function( e ) {
		return e && ( "object" == typeof e && ( e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e ), e && ( e = e.toUpperCase(), "NOTARGET" == e && ( e = x ) ), !e || e != x && !e.match( /^[0-9a-fA-F\-]+$/ ) ) && ( e = "" ), e
	}, n.i = function( e, t ) {
		if ( n.ka( e ), n.h != o && ( n.h[ e ] = u ), e == l ) {
			var i = n.b( d );
			if ( !i ) {
				if ( i = "object" == typeof t && t.mid ? t.mid : n.Q( t ), !i ) {
					if ( n.u ) return void n.getAnalyticsVisitorID( o, u, c );
					i = n.q()
				}
				n.c( d, i )
			}
			i && i != x || ( i = "" ), "object" == typeof t && ( ( t.d_region || t.dcs_region || t.d_blob || t.blob ) && n.i( v, t ), n.u && t.mid && n.i( g, {
				id: t.id
			} ) ), n.o( d, [ i ] )
		}
		if ( e == v && "object" == typeof t ) {
			i = 604800, t.id_sync_ttl != s && t.id_sync_ttl && ( i = parseInt( t.id_sync_ttl, 10 ) );
			var a = n.b( b );
			a || ( ( a = t.d_region ) || ( a = t.dcs_region ), a && ( n.l( b, i ), n.c( b, a ) ) ), a || ( a = "" ), n.o( b, [ a ] ), a = n.b( y ), ( t.d_blob || t.blob ) && ( ( a = t.d_blob ) || ( a = t.blob ), n.l( y, i ), n.c( y, a ) ), a || ( a = "" ), n.o( y, [ a ] ), !t.error_msg && n.s && n.c( f, n.s ), n.idSyncDisableSyncs ? k.ba = c : ( k.ba = u, i = {}, i.ibs = t.ibs, i.subdomain = t.subdomain, k.Ha( i ) )
		}
		e == g && ( i = n.b( m ), i || ( ( i = n.Q( t ) ) ? n.l( y, -1 ) : i = x, n.c( m, i ) ), i && i != x || ( i = "" ), n.o( m, [ i ] ) )
	}, n.h = o, n.r = function( e, t, i, a ) {
		var r, s = "";
		return n.isAllowed() && ( n.f(), s = n.b( e ), !s && ( e == d ? r = l : e == b || e == y ? r = v : e == m && ( r = g ), r ) ) ? ( !t || n.h != o && n.h[ r ] || ( n.h == o && ( n.h = {} ), n.h[ r ] = c, n.oa( r, t, function() {
			if ( !n.b( e ) ) {
				var t = "";
				e == d ? t = n.q() : r == v && ( t = {
					error_msg: "timeout"
				} ), n.i( r, t )
			}
		} ) ), n.qa( e, i ), t || n.i( r, {
			id: x
		} ), "" ) : ( e != d && e != m || s != x || ( s = "", a = c ), i && a && n.O( i, [ s ] ), s )
	}, n._setMarketingCloudFields = function( e ) {
		n.f(), n.i( l, e )
	}, n.setMarketingCloudVisitorID = function( e ) {
		n._setMarketingCloudFields( e )
	}, n.u = u, n.getMarketingCloudVisitorID = function( e, t ) {
		if ( n.isAllowed() ) {
			n.marketingCloudServer && 0 > n.marketingCloudServer.indexOf( ".demdex.net" ) && ( n.u = c );
			var i = n.A( "_setMarketingCloudFields" );
			return n.r( d, i, e, t )
		}
		return ""
	}, n.pa = function() {
		n.getAudienceManagerBlob()
	}, a.AuthState = {
		UNKNOWN: 0,
		AUTHENTICATED: 1,
		LOGGED_OUT: 2
	}, n.p = {}, n.P = u, n.s = "", n.setCustomerIDs = function( e ) {
		if ( n.isAllowed() && e ) {
			n.f();
			var t, i;
			for ( t in e )
				if ( !Object.prototype[ t ] && ( i = e[ t ] ) )
					if ( "object" == typeof i ) {
						var a = {};
						i.id && ( a.id = i.id ), i.authState != s && ( a.authState = i.authState ), n.p[ t ] = a
					} else n.p[ t ] = {
						id: i
					};
			var e = n.getCustomerIDs(),
				a = n.b( f ),
				r = "";
			a || ( a = 0 );
			for ( t in e ) Object.prototype[ t ] || ( i = e[ t ], r += ( r ? "|" : "" ) + t + "|" + ( i.id ? i.id : "" ) + ( i.authState ? i.authState : "" ) );
			n.s = n.S( r ), n.s != a && ( n.P = c, n.pa() )
		}
	}, n.getCustomerIDs = function() {
		n.f();
		var e, t, i = {};
		for ( e in n.p ) Object.prototype[ e ] || ( t = n.p[ e ], i[ e ] || ( i[ e ] = {} ), t.id && ( i[ e ].id = t.id ), i[ e ].authState = t.authState != s ? t.authState : a.AuthState.UNKNOWN );
		return i
	}, n._setAnalyticsFields = function( e ) {
		n.f(), n.i( g, e )
	}, n.setAnalyticsVisitorID = function( e ) {
		n._setAnalyticsFields( e )
	}, n.getAnalyticsVisitorID = function( e, t, i ) {
		if ( n.isAllowed() ) {
			var a = "";
			if ( i || ( a = n.getMarketingCloudVisitorID( function() {
					n.getAnalyticsVisitorID( e, c )
				} ) ), a || i ) {
				var r = i ? n.marketingCloudServer : n.trackingServer,
					o = "";
				return n.loadSSL && ( i ? n.marketingCloudServerSecure && ( r = n.marketingCloudServerSecure ) : n.trackingServerSecure && ( r = n.trackingServerSecure ) ), r && ( o = "http" + ( n.loadSSL ? "s" : "" ) + "://" + r + "/id?d_visid_ver=" + n.version + "&callback=s_c_il%5B" + n._in + "%5D._set" + ( i ? "MarketingCloud" : "Analytics" ) + "Fields&mcorgid=" + encodeURIComponent( n.marketingCloudOrgID ) + ( a ? "&mid=" + a : "" ) ), n.r( i ? d : m, o, e, t )
			}
		}
		return ""
	}, n._setAudienceManagerFields = function( e ) {
		n.f(), n.i( v, e )
	}, n.A = function( e ) {
		var t = n.audienceManagerServer,
			i = "",
			a = n.b( d ),
			r = n.b( y, c ),
			o = n.b( m ),
			o = o && o != x ? "&d_cid_ic=AVID%01" + encodeURIComponent( o ) : "";
		if ( n.loadSSL && n.audienceManagerServerSecure && ( t = n.audienceManagerServerSecure ), t ) {
			var s, u, i = n.getCustomerIDs();
			if ( i )
				for ( s in i ) Object.prototype[ s ] || ( u = i[ s ], o += "&d_cid_ic=" + encodeURIComponent( s ) + "%01" + encodeURIComponent( u.id ? u.id : "" ) + ( u.authState ? "%01" + u.authState : "" ) );
			e || ( e = "_setAudienceManagerFields" ), i = "http" + ( n.loadSSL ? "s" : "" ) + "://" + t + "/id?d_visid_ver=" + n.version + "&d_rtbd=json&d_ver=2" + ( !a && n.u ? "&d_verify=1" : "" ) + "&d_orgid=" + encodeURIComponent( n.marketingCloudOrgID ) + "&d_nsid=" + ( n.idSyncContainerID || 0 ) + ( a ? "&d_mid=" + a : "" ) + ( r ? "&d_blob=" + encodeURIComponent( r ) : "" ) + o + "&d_cb=s_c_il%5B" + n._in + "%5D." + e
		}
		return i
	}, n.getAudienceManagerLocationHint = function( e, t ) {
		if ( n.isAllowed() && n.getMarketingCloudVisitorID( function() {
				n.getAudienceManagerLocationHint( e, c )
			} ) ) {
			var i = n.b( m );
			if ( i || ( i = n.getAnalyticsVisitorID( function() {
					n.getAudienceManagerLocationHint( e, c )
				} ) ), i ) return i = n.A(), n.r( b, i, e, t )
		}
		return ""
	}, n.getAudienceManagerBlob = function( e, t ) {
		if ( n.isAllowed() && n.getMarketingCloudVisitorID( function() {
				n.getAudienceManagerBlob( e, c )
			} ) ) {
			var i = n.b( m );
			if ( i || ( i = n.getAnalyticsVisitorID( function() {
					n.getAudienceManagerBlob( e, c )
				} ) ), i ) return i = n.A(), n.P && n.l( y, -1 ), n.r( y, i, e, t )
		}
		return ""
	}, n.m = "", n.t = {}, n.C = "", n.D = {}, n.getSupplementalDataID = function( e, t ) {
		!n.m && !t && ( n.m = n.q( 1 ) );
		var i = n.m;
		return n.C && !n.D[ e ] ? ( i = n.C, n.D[ e ] = c ) : i && ( n.t[ e ] && ( n.C = n.m, n.D = n.t, n.m = i = t ? "" : n.q( 1 ), n.t = {} ), i && ( n.t[ e ] = c ) ), i
	};
	var _ = {
		k: !!i.postMessage,
		ha: 1,
		N: 864e5
	};
	n.Ma = _, n.X = {
		postMessage: function( e, t, n ) {
			var i = 1;
			t && ( _.k ? n.postMessage( e, t.replace( /([^:]+:\/\/[^\/]+).*/, "$1" ) ) : t && ( n.location = t.replace( /#.*$/, "" ) + "#" + +new Date + i++ + "&" + e ) )
		},
		J: function( e, t ) {
			var n;
			try {
				_.k && ( e && ( n = function( n ) {
					return "string" == typeof t && n.origin !== t || "[object Function]" === Object.prototype.toString.call( t ) && !1 === t( n.origin ) ? !1 : void e( n )
				} ), window.addEventListener ? window[ e ? "addEventListener" : "removeEventListener" ]( "message", n, !1 ) : window[ e ? "attachEvent" : "detachEvent" ]( "onmessage", n ) )
			} catch ( i ) {}
		}
	};
	var w = {
		Y: function() {
			return r.addEventListener ? function( e, t, n ) {
				e.addEventListener( t, function( e ) {
					"function" == typeof n && n( e )
				}, u )
			} : r.attachEvent ? function( e, t, n ) {
				e.attachEvent( "on" + t, function( e ) {
					"function" == typeof n && n( e )
				} )
			} : void 0
		}(),
		map: function( e, t ) {
			if ( Array.prototype.map ) return e.map( t );
			if ( void 0 === e || e === o ) throw new TypeError;
			var n = Object( e ),
				i = n.length >>> 0;
			if ( "function" != typeof t ) throw new TypeError;
			for ( var a = Array( i ), r = 0; i > r; r++ ) r in n && ( a[ r ] = t.call( t, n[ r ], r, n ) );
			return a
		},
		ya: function( e, t ) {
			return this.map( e, function( e ) {
				return encodeURIComponent( e )
			} ).join( t )
		}
	};
	n.Ra = w;
	var k = {
		ia: 3e4,
		M: 649,
		fa: u,
		id: o,
		H: o,
		aa: function( e ) {
			return "string" == typeof e ? ( e = e.split( "/" ), e[ 0 ] + "//" + e[ 2 ] ) : void 0
		},
		e: o,
		url: o,
		za: function() {
			var e = "http://fast.",
				t = "?d_nsid=" + n.idSyncContainerID + "#" + encodeURIComponent( r.location.href );
			return this.e || ( this.e = "nosubdomainreturned" ), n.loadSSL && ( e = n.idSyncSSLUseAkamai ? "https://fast." : "https://" ), e = e + this.e + ".demdex.net/dest5.html" + t, this.H = this.aa( e ), this.id = "destination_publishing_iframe_" + this.e + "_" + n.idSyncContainerID, e
		},
		ua: function() {
			var e = "?d_nsid=" + n.idSyncContainerID + "#" + encodeURIComponent( r.location.href );
			"string" == typeof n.z && n.z.length && ( this.id = "destination_publishing_iframe_" + ( new Date ).getTime() + "_" + n.idSyncContainerID, this.H = this.aa( n.z ), this.url = n.z + e )
		},
		ba: o,
		G: u,
		L: u,
		v: o,
		eb: o,
		Fa: o,
		fb: o,
		K: u,
		w: [],
		Da: [],
		Ea: [],
		ca: _.k ? 15 : 100,
		I: [],
		Ba: [],
		$: c,
		da: u,
		Z: function() {
			function e() {
				i = document.createElement( "iframe" ), i.id = n.id, i.style.cssText = "display: none; width: 0; height: 0;", i.src = n.url, n.Fa = c, t(), document.body.appendChild( i )
			}

			function t() {
				w.Y( i, "load", function() {
					i.className = "aamIframeLoaded", n.v = c, n.n()
				} )
			}
			this.L = c;
			var n = this,
				i = document.getElementById( this.id );
			i ? "IFRAME" !== i.nodeName ? ( this.id += "_2", e() ) : "aamIframeLoaded" !== i.className ? t() : ( this.v = c, this.n() ) : e(), this.Aa = i
		},
		n: function( e ) {
			var t = this;
			e === Object( e ) && this.I.push( e ), ( this.da || !_.k || this.v ) && this.I.length && ( this.Ga( this.I.shift() ), this.n() ), !n.idSyncDisableSyncs && this.v && this.w.length && !this.K && ( this.fa || ( this.fa = c, setTimeout( function() {
				t.ca = _.k ? 15 : 150
			}, this.ia ) ), this.K = c, this.ea() )
		},
		Ga: function( e ) {
			var t, n, i, a, r, o = encodeURIComponent;
			if ( ( t = e.ibs ) && t instanceof Array && ( n = t.length ) )
				for ( i = 0; n > i; i++ ) a = t[ i ], r = [ o( "ibs" ), o( a.id || "" ), o( a.tag || "" ), w.ya( a.url || [], "," ), o( a.ttl || "" ), "", "", a.fireURLSync ? "true" : "false" ], this.$ ? this.F( r.join( "|" ) ) : a.fireURLSync && this.va( a, r.join( "|" ) );
			this.Ba.push( e )
		},
		va: function( e, t ) {
			n.f();
			var i = n.b( p ),
				a = u,
				r = u,
				o = Math.ceil( ( new Date ).getTime() / _.N );
			i ? ( i = i.split( "*" ), r = this.Ia( i, e.id, o ), a = r.wa, r = r.xa, a && r || ( this.F( t ), i.push( e.id + "-" + ( o + Math.ceil( e.ttl / 60 / 24 ) ) ), this.Ca( i ), n.c( p, i.join( "*" ) ) ) ) : ( this.F( t ), n.c( p, e.id + "-" + ( o + Math.ceil( e.ttl / 60 / 24 ) ) ) )
		},
		Ia: function( e, t, n ) {
			var i, a, r, o = u,
				s = u;
			for ( a = 0; a < e.length; a++ ) i = e[ a ], r = parseInt( i.split( "-" )[ 1 ], 10 ), i.match( "^" + t + "-" ) ? ( o = c, r > n ? s = c : ( e.splice( a, 1 ), a-- ) ) : n >= r && ( e.splice( a, 1 ), a-- );
			return {
				wa: o,
				xa: s
			}
		},
		Ca: function( e ) {
			if ( e.join( "*" ).length > this.M )
				for ( e.sort( function( e, t ) {
						return parseInt( e.split( "-" )[ 1 ], 10 ) - parseInt( t.split( "-" )[ 1 ], 10 )
					} ); e.join( "*" ).length > this.M; ) e.shift()
		},
		F: function( e ) {
			var t = encodeURIComponent;
			this.w.push( t( n.Oa ? "---destpub-debug---" : "---destpub---" ) + e )
		},
		ea: function() {
			var e, t = this;
			this.w.length ? ( e = this.w.shift(), n.X.postMessage( e, this.url, this.Aa.contentWindow ), this.Da.push( e ), setTimeout( function() {
				t.ea()
			}, this.ca ) ) : this.K = u
		},
		J: function( e ) {
			var t = /^---destpub-to-parent---/;
			"string" == typeof e && t.test( e ) && ( t = e.replace( t, "" ).split( "|" ), "canSetThirdPartyCookies" === t[ 0 ] && ( this.$ = "true" === t[ 1 ] ? c : u, this.da = c, this.n() ), this.Ea.push( e ) )
		},
		Ha: function( e ) {
			this.url === o && ( this.e = "string" == typeof n.W && n.W.length ? n.W : e.subdomain || "", this.url = this.za() ), e.ibs instanceof Array && e.ibs.length && ( this.G = c ), ( this.G || n.la ) && this.e && "nosubdomainreturned" !== this.e && !this.L && ( a.ga || "complete" === r.readyState || "loaded" === r.readyState ) && this.Z(), "function" == typeof n.idSyncIDCallResult ? n.idSyncIDCallResult( e ) : this.n( e ), "function" == typeof n.idSyncAfterIDCallResult && n.idSyncAfterIDCallResult( e )
		},
		ta: function( e, t ) {
			return n.Pa || !e || t - e > _.ha
		}
	};
	if ( n.Na = k, 0 > e.indexOf( "@" ) && ( e += "@AdobeOrg" ), n.marketingCloudOrgID = e, n.cookieName = "AMCV_" + e, n.cookieDomain = n.ma(), n.cookieDomain == i.location.hostname && ( n.cookieDomain = "" ), n.loadSSL = 0 <= i.location.protocol.toLowerCase().indexOf( "https" ), n.loadTimeout = 500, n.marketingCloudServer = n.audienceManagerServer = "dpm.demdex.net", t && "object" == typeof t ) {
		for ( var S in t ) !Object.prototype[ S ] && ( n[ S ] = t[ S ] );
		n.idSyncContainerID = n.idSyncContainerID || 0, n.f(), S = n.b( h );
		var C = Math.ceil( ( new Date ).getTime() / _.N );
		!n.idSyncDisableSyncs && k.ta( S, C ) && ( n.l( y, -1 ), n.c( h, C ) ), n.getMarketingCloudVisitorID(), n.getAudienceManagerLocationHint(), n.getAudienceManagerBlob()
	}
	if ( !n.idSyncDisableSyncs ) {
		k.ua(), w.Y( window, "load", function() {
			var e = k;
			a.ga = c, ( e.G || n.la ) && e.e && "nosubdomainreturned" !== e.e && e.url && !e.L && e.Z()
		} );
		try {
			n.X.J( function( e ) {
				k.J( e.data )
			}, k.H )
		} catch ( T ) {}
	}
}
Visitor.getInstance = function( e, t ) {
		var n, i, a = window.s_c_il;
		if ( 0 > e.indexOf( "@" ) && ( e += "@AdobeOrg" ), a )
			for ( i = 0; i < a.length; i++ )
				if ( ( n = a[ i ] ) && "Visitor" == n._c && n.marketingCloudOrgID == e ) return n;
		return new Visitor( e, t )
	},
	function() {
		function e() {
			t.ga = n
		}
		var t = window.Visitor,
			n = t.ja;
		n || ( n = !0 ), window.addEventListener ? window.addEventListener( "load", e ) : window.attachEvent && window.attachEvent( "onload", e )
	}(),
	// All code and conventions are protected by copyright
	function( e, t, n ) {
		function a() {
			this.rules = S.filter( S.rules, function( e ) {
				return "elementexists" === e.event
			} )
		}

		function r( e ) {
			this.delay = 250, this.FB = e, S.domReady( S.bind( function() {
				S.poll( S.bind( this.initialize, this ), this.delay, 8 )
			}, this ) )
		}

		function o() {
			var e = this.eventRegex = /^hover\(([0-9]+)\)$/,
				t = this.rules = [];
			S.each( S.rules, function( n ) {
				var i = n.event.match( e );
				i && t.push( [ Number( n.event.match( e )[ 1 ] ), n.selector ] )
			} )
		}

		function s( t ) {
			t = t || S.rules, this.rules = S.filter( t, function( e ) {
				return "inview" === e.event
			} ), this.elements = [], this.eventHandler = S.bind( this.track, this ), S.addEventHandler( e, "scroll", this.eventHandler ), S.addEventHandler( e, "load", this.eventHandler )
		}

		function c() {
			S.getToolsByType( "nielsen" ).length > 0 && S.domReady( S.bind( this.initialize, this ) )
		}

		function u() {
			this.lastURL = S.URL(), this._fireIfURIChanged = S.bind( this.fireIfURIChanged, this ), this._onPopState = S.bind( this.onPopState, this ), this._onHashChange = S.bind( this.onHashChange, this ), this._pushState = S.bind( this.pushState, this ), this._replaceState = S.bind( this.replaceState, this ), this.initialize()
		}

		function l() {
			S.addEventHandler( e, "orientationchange", l.orientationChange )
		}

		function d( t ) {
			S.domReady( S.bind( function() {
				this.twttr = t || e.twttr, this.initialize()
			}, this ) )
		}

		function f() {
			this.rules = S.filter( S.rules, function( e ) {
				return "videoplayed" === e.event.substring( 0, 11 )
			} ), this.eventHandler = S.bind( this.onUpdateTime, this )
		}

		function p() {
			this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority( !1 ) : this.attachDetachOlderEventListeners( !0, t, "focusout" );
			S.bindEvent( "aftertoolinit", function() {
				S.fireEvent( S.visibility.isHidden() ? "tabblur" : "tabfocus" )
			} )
		}

		function h( e ) {
			S.BaseTool.call( this, e ), this.name = e.name || "Basic"
		}

		function g() {
			S.BaseTool.call( this ), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = []
		}

		function m( e ) {
			S.BaseTool.call( this, e )
		}

		function v( e ) {
			S.BaseTool.call( this, e )
		}

		function b( e ) {
			S.BaseTool.call( this, e ), this.defineListeners(), this.beaconMethod = "plainBeacon", this.adapt = new b.DataAdapters, this.dataProvider = new b.DataProvider.Aggregate
		}

		function y( e ) {
			S.BaseTool.call( this, e ), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = []
		}

		function x( e ) {
			S.BaseTool.call( this, e ), this.styleElements = {}, this.targetPageParamsStore = {}
		}

		function _( e ) {
			S.BaseTool.call( this, e ), this.name = e.name || "VisitorID", this.initialize()
		}
		var w = Object.prototype.toString,
			k = e._satellite && e._satellite.override,
			S = {
				initialized: !1,
				$data: function( e, t, i ) {
					if ( e ) {
						var a = "__satellite__",
							r = S.dataCache,
							o = e[ a ];
						o || ( o = e[ a ] = S.uuid++ );
						var s = r[ o ];
						return s || ( s = r[ o ] = {} ), i === n ? s[ t ] : void( s[ t ] = i )
					}
				},
				uuid: 1,
				dataCache: {},
				keys: function( e ) {
					var t = [];
					for ( var n in e ) e.hasOwnProperty( n ) && t.push( n );
					return t
				},
				values: function( e ) {
					var t = [];
					for ( var n in e ) e.hasOwnProperty( n ) && t.push( e[ n ] );
					return t
				},
				isArray: Array.isArray || function( e ) {
					return "[object Array]" === w.apply( e )
				},
				isObject: function( e ) {
					return null != e && !S.isArray( e ) && "object" == typeof e
				},
				isString: function( e ) {
					return "string" == typeof e
				},
				isNumber: function( e ) {
					return "[object Number]" === w.apply( e ) && !S.isNaN( e )
				},
				isNaN: function( e ) {
					return e !== e
				},
				isRegex: function( e ) {
					return e instanceof RegExp
				},
				isLinkTag: function( e ) {
					return !( !e || !e.nodeName || "a" !== e.nodeName.toLowerCase() )
				},
				each: function( e, t, n ) {
					for ( var i = 0, a = e.length; a > i; i++ ) t.call( n, e[ i ], i, e )
				},
				map: function( e, t, n ) {
					for ( var i = [], a = 0, r = e.length; r > a; a++ ) i.push( t.call( n, e[ a ], a, e ) );
					return i
				},
				filter: function( e, t, n ) {
					for ( var i = [], a = 0, r = e.length; r > a; a++ ) {
						var o = e[ a ];
						t.call( n, o, a, e ) && i.push( o )
					}
					return i
				},
				any: function( e, t, n ) {
					for ( var i = 0, a = e.length; a > i; i++ ) {
						var r = e[ i ];
						if ( t.call( n, r, i, e ) ) return !0
					}
					return !1
				},
				every: function( e, t, n ) {
					for ( var i = !0, a = 0, r = e.length; r > a; a++ ) {
						var o = e[ a ];
						i = i && t.call( n, o, a, e )
					}
					return i
				},
				contains: function( e, t ) {
					return -1 !== S.indexOf( e, t )
				},
				indexOf: function( e, t ) {
					if ( e.indexOf ) return e.indexOf( t );
					for ( var n = e.length; n--; )
						if ( t === e[ n ] ) return n;
					return -1
				},
				find: function( e, t, n ) {
					if ( !e ) return null;
					for ( var i = 0, a = e.length; a > i; i++ ) {
						var r = e[ i ];
						if ( t.call( n, r, i, e ) ) return r
					}
					return null
				},
				textMatch: function( e, t ) {
					if ( null == t ) throw new Error( "Illegal Argument: Pattern is not present" );
					return null == e ? !1 : "string" == typeof t ? e === t : t instanceof RegExp ? t.test( e ) : !1
				},
				stringify: function( e, t ) {
					if ( t = t || [], S.isObject( e ) ) {
						if ( S.contains( t, e ) ) return "<Cycle>";
						t.push( e )
					}
					if ( S.isArray( e ) ) return "[" + S.map( e, function( e ) {
						return S.stringify( e, t )
					} ).join( "," ) + "]";
					if ( S.isString( e ) ) return '"' + String( e ) + '"';
					if ( S.isObject( e ) ) {
						var n = [];
						for ( var i in e ) e.hasOwnProperty( i ) && n.push( i + ": " + S.stringify( e[ i ], t ) );
						return "{" + n.join( ", " ) + "}"
					}
					return String( e )
				},
				trim: function( e ) {
					return null == e ? null : e.trim ? e.trim() : e.replace( /^ */, "" ).replace( / *$/, "" )
				},
				bind: function( e, t ) {
					return function() {
						return e.apply( t, arguments )
					}
				},
				throttle: function( e, t ) {
					var n = null;
					return function() {
						var i = this,
							a = arguments;
						clearTimeout( n ), n = setTimeout( function() {
							e.apply( i, a )
						}, t )
					}
				},
				domReady: function( e ) {
					function n( e ) {
						for ( f = 1; e = a.shift(); ) e()
					}
					var i, a = [],
						r = !1,
						o = t,
						s = o.documentElement,
						c = s.doScroll,
						u = "DOMContentLoaded",
						l = "addEventListener",
						d = "onreadystatechange",
						f = /^loade|^c/.test( o.readyState );
					return o[ l ] && o[ l ]( u, i = function() {
						o.removeEventListener( u, i, r ), n()
					}, r ), c && o.attachEvent( d, i = function() {
						/^c/.test( o.readyState ) && ( o.detachEvent( d, i ), n() )
					} ), e = c ? function( t ) {
						self != top ? f ? t() : a.push( t ) : function() {
							try {
								s.doScroll( "left" )
							} catch ( n ) {
								return setTimeout( function() {
									e( t )
								}, 50 )
							}
							t()
						}()
					} : function( e ) {
						f ? e() : a.push( e )
					}
				}(),
				loadScript: function( e, n ) {
					var i = t.createElement( "script" );
					S.scriptOnLoad( e, i, n ), i.src = e, t.getElementsByTagName( "head" )[ 0 ].appendChild( i )
				},
				scriptOnLoad: function( e, t, n ) {
					function i( e ) {
						e && S.logError( e ), n && n( e )
					}
					"onload" in t ? ( t.onload = function() {
						i()
					}, t.onerror = function() {
						i( new Error( "Failed to load script " + e ) )
					} ) : "readyState" in t && ( t.onreadystatechange = function() {
						var e = t.readyState;
						( "loaded" === e || "complete" === e ) && ( t.onreadystatechange = null, i() )
					} )
				},
				loadScriptOnce: function( e, t ) {
					S.loadedScriptRegistry[ e ] || S.loadScript( e, function( n ) {
						n || ( S.loadedScriptRegistry[ e ] = !0 ), t && t( n )
					} )
				},
				loadedScriptRegistry: {},
				loadScriptSync: function( e ) {
					return t.write ? S.domReadyFired ? void S.notify( 'Cannot load sync the "' + e + '" script after DOM Ready.', 1 ) : ( e.indexOf( '"' ) > -1 && ( e = encodeURI( e ) ), void t.write( '<script src="' + e + '"></script>' ) ) : void S.notify( 'Cannot load sync the "' + e + '" script because "document.write" is not available', 1 )
				},
				pushAsyncScript: function( e ) {
					S.tools[ "default" ].pushAsyncScript( e )
				},
				pushBlockingScript: function( e ) {
					S.tools[ "default" ].pushBlockingScript( e )
				},
				addEventHandler: e.addEventListener ? function( e, t, n ) {
					e.addEventListener( t, n, !1 )
				} : function( e, t, n ) {
					e.attachEvent( "on" + t, n )
				},
				removeEventHandler: e.removeEventListener ? function( e, t, n ) {
					e.removeEventListener( t, n, !1 )
				} : function( e, t, n ) {
					e.detachEvent( "on" + t, n )
				},
				preventDefault: e.addEventListener ? function( e ) {
					e.preventDefault()
				} : function( e ) {
					e.returnValue = !1
				},
				stopPropagation: function( e ) {
					e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
				},
				containsElement: function( e, t ) {
					return e.contains ? e.contains( t ) : !!( 16 & e.compareDocumentPosition( t ) )
				},
				matchesCss: function( n ) {
					function i( e, t ) {
						var n = t.tagName;
						return n ? e.toLowerCase() === n.toLowerCase() : !1
					}
					var a = n.matchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector || n.msMatchesSelector;
					return a ? function( n, i ) {
						if ( i === t || i === e ) return !1;
						try {
							return a.call( i, n )
						} catch ( r ) {
							return !1
						}
					} : n.querySelectorAll ? function( e, t ) {
						var n = t.parentNode;
						if ( !n ) return !1;
						if ( e.match( /^[a-z]+$/i ) ) return i( e, t );
						try {
							for ( var a = t.parentNode.querySelectorAll( e ), r = a.length; r--; )
								if ( a[ r ] === t ) return !0
						} catch ( o ) {}
						return !1
					} : function( e, t ) {
						if ( e.match( /^[a-z]+$/i ) ) return i( e, t );
						try {
							return S.Sizzle.matches( e, [ t ] ).length > 0
						} catch ( n ) {
							return !1
						}
					}
				}( t.documentElement ),
				cssQuery: function( e ) {
					return e.querySelectorAll ? function( t, n ) {
						var i;
						try {
							i = e.querySelectorAll( t )
						} catch ( a ) {
							i = []
						}
						n( i )
					} : function( e, t ) {
						if ( S.Sizzle ) {
							var n;
							try {
								n = S.Sizzle( e )
							} catch ( i ) {
								n = []
							}
							t( n )
						} else S.sizzleQueue.push( [ e, t ] )
					}
				}( t ),
				hasAttr: function( e, t ) {
					return e.hasAttribute ? e.hasAttribute( t ) : e[ t ] !== n
				},
				inherit: function( e, t ) {
					var n = function() {};
					n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
				},
				extend: function( e, t ) {
					for ( var n in t ) t.hasOwnProperty( n ) && ( e[ n ] = t[ n ] )
				},
				toArray: function() {
					try {
						var e = Array.prototype.slice;
						return e.call( t.documentElement.childNodes, 0 )[ 0 ].nodeType,
							function( t ) {
								return e.call( t, 0 )
							}
					} catch ( n ) {
						return function( e ) {
							for ( var t = [], n = 0, i = e.length; i > n; n++ ) t.push( e[ n ] );
							return t
						}
					}
				}(),
				equalsIgnoreCase: function( e, t ) {
					return null == e ? null == t : null == t ? !1 : String( e ).toLowerCase() === String( t ).toLowerCase()
				},
				poll: function( e, t, n ) {
					function i() {
						S.isNumber( n ) && a++ >= n || e() || setTimeout( i, t )
					}
					var a = 0;
					t = t || 1e3, i()
				},
				escapeForHtml: function( e ) {
					return e ? String( e ).replace( /\&/g, "&amp;" ).replace( /\</g, "&lt;" ).replace( /\>/g, "&gt;" ).replace( /\"/g, "&quot;" ).replace( /\'/g, "&#x27;" ).replace( /\//g, "&#x2F;" ) : e
				}
			};
		S.availableTools = {}, S.availableEventEmitters = [], S.fireOnceEvents = [ "condition", "elementexists" ], S.initEventEmitters = function() {
			S.eventEmitters = S.map( S.availableEventEmitters, function( e ) {
				return new e
			} )
		}, S.eventEmitterBackgroundTasks = function() {
			S.each( S.eventEmitters, function( e ) {
				"backgroundTasks" in e && e.backgroundTasks()
			} )
		}, S.initTools = function( e ) {
			var t = {
					"default": new g
				},
				n = S.settings.euCookieName || "sat_track";
			for ( var i in e )
				if ( e.hasOwnProperty( i ) ) {
					var a, r, o;
					if ( a = e[ i ], a.euCookie ) {
						var s = "true" !== S.readCookie( n );
						if ( s ) continue
					}
					if ( r = S.availableTools[ a.engine ], !r ) {
						var c = [];
						for ( var u in S.availableTools ) S.availableTools.hasOwnProperty( u ) && c.push( u );
						throw new Error( "No tool engine named " + a.engine + ", available: " + c.join( "," ) + "." )
					}
					o = new r( a ), o.id = i, t[ i ] = o
				}
			return t
		}, S.preprocessArguments = function( e, t, n, i, a ) {
			function r( e ) {
				return i && S.isString( e ) ? e.toLowerCase() : e
			}

			function o( e ) {
				var c = {};
				for ( var u in e )
					if ( e.hasOwnProperty( u ) ) {
						var l = e[ u ];
						S.isObject( l ) ? c[ u ] = o( l ) : S.isArray( l ) ? c[ u ] = s( l, i ) : c[ u ] = r( S.replace( l, t, n, a ) )
					}
				return c
			}

			function s( e, i ) {
				for ( var a = [], s = 0, c = e.length; c > s; s++ ) {
					var u = e[ s ];
					S.isString( u ) ? u = r( S.replace( u, t, n ) ) : u && u.constructor === Object && ( u = o( u ) ), a.push( u )
				}
				return a
			}
			return e ? s( e, i ) : e
		}, S.execute = function( e, t, n, i ) {
			function a( a ) {
				var r = i[ a || "default" ];
				if ( r ) try {
					r.triggerCommand( e, t, n )
				} catch ( o ) {
					S.logError( o )
				}
			}
			if ( !_satellite.settings.hideActivity )
				if ( i = i || S.tools, e.engine ) {
					var r = e.engine;
					for ( var o in i )
						if ( i.hasOwnProperty( o ) ) {
							var s = i[ o ];
							s.settings && s.settings.engine === r && a( o )
						}
				} else e.tool instanceof Array ? S.each( e.tool, function( e ) {
					a( e )
				} ) : a( e.tool )
		}, S.Logger = {
			outputEnabled: !1,
			messages: [],
			keepLimit: 100,
			flushed: !1,
			LEVELS: [ null, null, "log", "info", "warn", "error" ],
			message: function( e, t ) {
				var n = this.LEVELS[ t ] || "log";
				this.messages.push( [ n, e ] ), this.messages.length > this.keepLimit && this.messages.shift(), this.outputEnabled && this.echo( n, e )
			},
			getHistory: function() {
				return this.messages
			},
			clearHistory: function() {
				this.messages = []
			},
			setOutputState: function( e ) {
				this.outputEnabled != e && ( this.outputEnabled = e, e ? this.flush() : this.flushed = !1 )
			},
			echo: function( t, n ) {
				e.console && e.console[ t ]( "SATELLITE: " + n )
			},
			flush: function() {
				this.flushed || ( S.each( this.messages, function( e ) {
					e[ 2 ] !== !0 && ( this.echo( e[ 0 ], e[ 1 ] ), e[ 2 ] = !0 )
				}, this ), this.flushed = !0 )
			}
		}, S.notify = S.bind( S.Logger.message, S.Logger ), S.cleanText = function( e ) {
			return null == e ? null : S.trim( e ).replace( /\s+/g, " " )
		}, S.cleanText.legacy = function( e ) {
			return null == e ? null : S.trim( e ).replace( /\s{2,}/g, " " ).replace( /[^\000-\177]*/g, "" )
		}, S.text = function( e ) {
			return e.textContent || e.innerText
		}, S.specialProperties = {
			text: S.text,
			cleanText: function( e ) {
				return S.cleanText( S.text( e ) )
			}
		}, S.getObjectProperty = function( e, t, i ) {
			for ( var a, r = t.split( "." ), o = e, s = S.specialProperties, c = 0, u = r.length; u > c; c++ ) {
				if ( null == o ) return n;
				var l = r[ c ];
				if ( i && "@" === l.charAt( 0 ) ) {
					var d = l.slice( 1 );
					o = s[ d ]( o )
				} else if ( o.getAttribute && ( a = l.match( /^getAttribute\((.+)\)$/ ) ) ) {
					var f = a[ 1 ];
					o = o.getAttribute( f )
				} else o = o[ l ]
			}
			return o
		}, S.getToolsByType = function( e ) {
			if ( !e ) throw new Error( "Tool type is missing" );
			var t = [];
			for ( var n in S.tools )
				if ( S.tools.hasOwnProperty( n ) ) {
					var i = S.tools[ n ];
					i.settings && i.settings.engine === e && t.push( i )
				}
			return t
		}, S.setVar = function() {
			var e = S.data.customVars;
			if ( null == e && ( S.data.customVars = {}, e = S.data.customVars ), "string" == typeof arguments[ 0 ] ) {
				var t = arguments[ 0 ];
				e[ t ] = arguments[ 1 ]
			} else if ( arguments[ 0 ] ) {
				var n = arguments[ 0 ];
				for ( var i in n ) n.hasOwnProperty( i ) && ( e[ i ] = n[ i ] )
			}
		}, S.dataElementSafe = function( e, t ) {
			if ( arguments.length > 2 ) {
				var n = arguments[ 2 ];
				"pageview" === t ? S.dataElementSafe.pageviewCache[ e ] = n : "session" === t ? S.setCookie( "_sdsat_" + e, n ) : "visitor" === t && S.setCookie( "_sdsat_" + e, n, 730 )
			} else {
				if ( "pageview" === t ) return S.dataElementSafe.pageviewCache[ e ];
				if ( "session" === t || "visitor" === t ) return S.readCookie( "_sdsat_" + e )
			}
		}, S.dataElementSafe.pageviewCache = {}, S.realGetDataElement = function( t ) {
			var n;
			return t.selector ? S.hasSelector && S.cssQuery( t.selector, function( e ) {
				if ( e.length > 0 ) {
					var i = e[ 0 ];
					"text" === t.property ? n = i.innerText || i.textContent : t.property in i ? n = i[ t.property ] : S.hasAttr( i, t.property ) && ( n = i.getAttribute( t.property ) )
				}
			} ) : t.queryParam ? n = t.ignoreCase ? S.getQueryParamCaseInsensitive( t.queryParam ) : S.getQueryParam( t.queryParam ) : t.cookie ? n = S.readCookie( t.cookie ) : t.jsVariable ? n = S.getObjectProperty( e, t.jsVariable ) : t.customJS && ( n = t.customJS() ), S.isString( n ) && t.cleanText && ( n = S.cleanText( n ) ), n
		}, S.getDataElement = function( e, t, i ) {
			if ( i = i || S.dataElements[ e ], null == i ) return S.settings.undefinedVarsReturnEmpty ? "" : null;
			var a = S.realGetDataElement( i );
			return a === n && i.storeLength ? a = S.dataElementSafe( e, i.storeLength ) : a !== n && i.storeLength && S.dataElementSafe( e, i.storeLength, a ), a || t || ( a = i[ "default" ] || "" ), S.isString( a ) && i.forceLowerCase && ( a = a.toLowerCase() ), a
		}, S.getVar = function( i, a, r ) {
			var o, s, c = S.data.customVars,
				u = r ? r.target || r.srcElement : null,
				l = {
					uri: S.URI(),
					protocol: t.location.protocol,
					hostname: t.location.hostname
				};
			if ( S.dataElements && i in S.dataElements ) return S.getDataElement( i );
			if ( s = l[ i.toLowerCase() ], s === n )
				if ( "this." === i.substring( 0, 5 ) ) i = i.slice( 5 ), s = S.getObjectProperty( a, i, !0 );
				else if ( "event." === i.substring( 0, 6 ) ) i = i.slice( 6 ), s = S.getObjectProperty( r, i );
			else if ( "target." === i.substring( 0, 7 ) ) i = i.slice( 7 ), s = S.getObjectProperty( u, i );
			else if ( "window." === i.substring( 0, 7 ) ) i = i.slice( 7 ), s = S.getObjectProperty( e, i );
			else if ( "param." === i.substring( 0, 6 ) ) i = i.slice( 6 ), s = S.getQueryParam( i );
			else if ( o = i.match( /^rand([0-9]+)$/ ) ) {
				var d = Number( o[ 1 ] ),
					f = ( Math.random() * ( Math.pow( 10, d ) - 1 ) ).toFixed( 0 );
				s = Array( d - f.length + 1 ).join( "0" ) + f
			} else s = S.getObjectProperty( c, i );
			return s
		}, S.getVars = function( e, t, n ) {
			var i = {};
			return S.each( e, function( e ) {
				i[ e ] = S.getVar( e, t, n )
			} ), i
		}, S.replace = function( e, t, n, i ) {
			return "string" != typeof e ? e : e.replace( /%(.*?)%/g, function( e, a ) {
				var r = S.getVar( a, t, n );
				return null == r ? S.settings.undefinedVarsReturnEmpty ? "" : e : i ? S.escapeForHtml( r ) : r
			} )
		}, S.escapeHtmlParams = function( e ) {
			return e.escapeHtml = !0, e
		}, S.searchVariables = function( e, t, n ) {
			if ( !e || 0 === e.length ) return "";
			for ( var i = [], a = 0, r = e.length; r > a; a++ ) {
				var o = e[ a ],
					s = S.getVar( o, t, n );
				i.push( o + "=" + escape( s ) )
			}
			return "?" + i.join( "&" )
		}, S.fireRule = function( e, t, n ) {
			var i = e.trigger;
			if ( i ) {
				for ( var a = 0, r = i.length; r > a; a++ ) {
					var o = i[ a ];
					S.execute( o, t, n )
				}
				S.contains( S.fireOnceEvents, e.event ) && ( e.expired = !0 )
			}
		}, S.isLinked = function( e ) {
			for ( var t = e; t; t = t.parentNode )
				if ( S.isLinkTag( t ) ) return !0;
			return !1
		}, S.firePageLoadEvent = function( e ) {
			for ( var n = t.location, i = {
					type: e,
					target: n
				}, a = S.pageLoadRules, r = S.evtHandlers[ i.type ], o = a.length; o--; ) {
				var s = a[ o ];
				S.ruleMatches( s, i, n ) && ( S.notify( 'Rule "' + s.name + '" fired.', 1 ), S.fireRule( s, n, i ) )
			}
			for ( var c in S.tools )
				if ( S.tools.hasOwnProperty( c ) ) {
					var u = S.tools[ c ];
					u.endPLPhase && u.endPLPhase( e )
				}
			r && S.each( r, function( e ) {
				e( i )
			} )
		}, S.track = function( e ) {
			e = e.replace( /^\s*/, "" ).replace( /\s*$/, "" );
			for ( var t = 0; t < S.directCallRules.length; t++ ) {
				var n = S.directCallRules[ t ];
				if ( n.name === e ) return S.notify( 'Direct call Rule "' + e + '" fired.', 1 ), void S.fireRule( n, location, {
					type: e
				} )
			}
			S.notify( 'Direct call Rule "' + e + '" not found.', 1 )
		}, S.basePath = function() {
			return S.data.host ? ( "https:" === t.location.protocol ? "https://" + S.data.host.https : "http://" + S.data.host.http ) + "/" : this.settings.basePath
		}, S.setLocation = function( t ) {
			e.location = t
		}, S.parseQueryParams = function( e ) {
			var t = function( e ) {
				var t = e;
				try {
					t = decodeURIComponent( e )
				} catch ( n ) {}
				return t
			};
			if ( "" === e || S.isString( e ) === !1 ) return {};
			0 === e.indexOf( "?" ) && ( e = e.substring( 1 ) );
			var n = {},
				i = e.split( "&" );
			return S.each( i, function( e ) {
				e = e.split( "=" ), e[ 1 ] && ( n[ t( e[ 0 ] ) ] = t( e[ 1 ] ) )
			} ), n
		}, S.getCaseSensitivityQueryParamsMap = function( e ) {
			var t = S.parseQueryParams( e ),
				n = {};
			for ( var i in t ) t.hasOwnProperty( i ) && ( n[ i.toLowerCase() ] = t[ i ] );
			return {
				normal: t,
				caseInsensitive: n
			}
		}, S.updateQueryParams = function() {
			S.QueryParams = S.getCaseSensitivityQueryParamsMap( e.location.search )
		}, S.updateQueryParams(), S.getQueryParam = function( e ) {
			return S.QueryParams.normal[ e ]
		}, S.getQueryParamCaseInsensitive = function( e ) {
			return S.QueryParams.caseInsensitive[ e.toLowerCase() ]
		}, S.encodeObjectToURI = function( e ) {
			if ( S.isObject( e ) === !1 ) return "";
			var t = [];
			for ( var n in e ) e.hasOwnProperty( n ) && t.push( encodeURIComponent( n ) + "=" + encodeURIComponent( e[ n ] ) );
			return t.join( "&" )
		}, S.readCookie = function( e ) {
			for ( var i = e + "=", a = t.cookie.split( ";" ), r = 0; r < a.length; r++ ) {
				for ( var o = a[ r ];
					" " == o.charAt( 0 ); ) o = o.substring( 1, o.length );
				if ( 0 === o.indexOf( i ) ) return o.substring( i.length, o.length )
			}
			return n
		}, S.setCookie = function( e, n, i ) {
			var a;
			if ( i ) {
				var r = new Date;
				r.setTime( r.getTime() + 24 * i * 60 * 60 * 1e3 ), a = "; expires=" + r.toGMTString()
			} else a = "";
			t.cookie = e + "=" + n + a + "; path=/"
		}, S.removeCookie = function( e ) {
			S.setCookie( e, "", -1 )
		}, S.getElementProperty = function( e, t ) {
			if ( "@" === t.charAt( 0 ) ) {
				var i = S.specialProperties[ t.substring( 1 ) ];
				if ( i ) return i( e )
			}
			return "innerText" === t ? S.text( e ) : t in e ? e[ t ] : e.getAttribute ? e.getAttribute( t ) : n
		}, S.propertiesMatch = function( e, t ) {
			if ( e )
				for ( var n in e )
					if ( e.hasOwnProperty( n ) ) {
						var i = e[ n ],
							a = S.getElementProperty( t, n );
						if ( "string" == typeof i && i !== a ) return !1;
						if ( i instanceof RegExp && !i.test( a ) ) return !1
					}
			return !0
		}, S.isRightClick = function( e ) {
			var t;
			return e.which ? t = 3 == e.which : e.button && ( t = 2 == e.button ), t
		}, S.ruleMatches = function( e, t, n, i ) {
			var a = e.condition,
				r = e.conditions,
				o = e.property,
				s = t.type,
				c = e.value,
				u = t.target || t.srcElement,
				l = n === u;
			if ( e.event !== s && ( "custom" !== e.event || e.customEvent !== s ) ) return !1;
			if ( !S.ruleInScope( e ) ) return !1;
			if ( "click" === e.event && S.isRightClick( t ) ) return !1;
			if ( e.isDefault && i > 0 ) return !1;
			if ( e.expired ) return !1;
			if ( "inview" === s && t.inviewDelay !== e.inviewDelay ) return !1;
			if ( !l && ( e.bubbleFireIfParent === !1 || 0 !== i && e.bubbleFireIfChildFired === !1 ) ) return !1;
			if ( e.selector && !S.matchesCss( e.selector, n ) ) return !1;
			if ( !S.propertiesMatch( o, n ) ) return !1;
			if ( null != c )
				if ( "string" == typeof c ) {
					if ( c !== n.value ) return !1
				} else if ( !c.test( n.value ) ) return !1;
			if ( a ) try {
				if ( !a.call( n, t, u ) ) return S.notify( 'Condition for rule "' + e.name + '" not met.', 1 ), !1
			} catch ( d ) {
				return S.notify( 'Condition for rule "' + e.name + '" not met. Error: ' + d.message, 1 ), !1
			}
			if ( r ) {
				var f = S.find( r, function( i ) {
					try {
						return !i.call( n, t, u )
					} catch ( a ) {
						return S.notify( 'Condition for rule "' + e.name + '" not met. Error: ' + a.message, 1 ), !0
					}
				} );
				if ( f ) return S.notify( "Condition " + f.toString() + ' for rule "' + e.name + '" not met.', 1 ), !1
			}
			return !0
		}, S.evtHandlers = {}, S.bindEvent = function( e, t ) {
			var n = S.evtHandlers;
			n[ e ] || ( n[ e ] = [] ), n[ e ].push( t )
		}, S.whenEvent = S.bindEvent, S.unbindEvent = function( e, t ) {
			var n = S.evtHandlers;
			if ( n[ e ] ) {
				var i = S.indexOf( n[ e ], t );
				n[ e ].splice( i, 1 )
			}
		}, S.bindEventOnce = function( e, t ) {
			var n = function() {
				S.unbindEvent( e, n ), t.apply( null, arguments )
			};
			S.bindEvent( e, n )
		}, S.isVMLPoisoned = function( e ) {
			if ( !e ) return !1;
			try {
				e.nodeName
			} catch ( t ) {
				if ( "Attribute only valid on v:image" === t.message ) return !0
			}
			return !1
		}, S.handleEvent = function( e ) {
			if ( !S.$data( e, "eventProcessed" ) ) {
				var t = e.type.toLowerCase(),
					n = e.target || e.srcElement,
					i = 0,
					a = S.rules,
					r = ( S.tools, S.evtHandlers[ e.type ] );
				if ( S.isVMLPoisoned( n ) ) return void S.notify( "detected " + t + " on poisoned VML element, skipping.", 1 );
				r && S.each( r, function( t ) {
					t( e )
				} );
				var o = n && n.nodeName;
				o ? S.notify( "detected " + t + " on " + n.nodeName, 1 ) : S.notify( "detected " + t, 1 );
				for ( var s = n; s; s = s.parentNode ) {
					var c = !1;
					if ( S.each( a, function( t ) {
							S.ruleMatches( t, e, s, i ) && ( S.notify( 'Rule "' + t.name + '" fired.', 1 ), S.fireRule( t, s, e ), i++, t.bubbleStop && ( c = !0 ) )
						} ), c ) break
				}
				S.$data( e, "eventProcessed", !0 )
			}
		}, S.onEvent = t.querySelectorAll ? function( e ) {
			S.handleEvent( e )
		} : function() {
			var e = [],
				t = function( t ) {
					t.selector ? e.push( t ) : S.handleEvent( t )
				};
			return t.pendingEvents = e, t
		}(), S.fireEvent = function( e, t ) {
			S.onEvent( {
				type: e,
				target: t
			} )
		}, S.registerEvents = function( e, t ) {
			for ( var n = t.length - 1; n >= 0; n-- ) {
				var i = t[ n ];
				S.$data( e, i + ".tracked" ) || ( S.addEventHandler( e, i, S.onEvent ), S.$data( e, i + ".tracked", !0 ) )
			}
		}, S.registerEventsForTags = function( e, n ) {
			for ( var i = e.length - 1; i >= 0; i-- )
				for ( var a = e[ i ], r = t.getElementsByTagName( a ), o = r.length - 1; o >= 0; o-- ) S.registerEvents( r[ o ], n )
		}, S.setListeners = function() {
			var e = [ "click", "submit" ];
			S.each( S.rules, function( t ) {
				"custom" === t.event && t.hasOwnProperty( "customEvent" ) && !S.contains( e, t.customEvent ) && e.push( t.customEvent )
			} ), S.registerEvents( t, e )
		}, S.getUniqueRuleEvents = function() {
			return S._uniqueRuleEvents || ( S._uniqueRuleEvents = [], S.each( S.rules, function( e ) {
				-1 === S.indexOf( S._uniqueRuleEvents, e.event ) && S._uniqueRuleEvents.push( e.event )
			} ) ), S._uniqueRuleEvents
		}, S.setFormListeners = function() {
			if ( !S._relevantFormEvents ) {
				var e = [ "change", "focus", "blur", "keypress" ];
				S._relevantFormEvents = S.filter( S.getUniqueRuleEvents(), function( t ) {
					return -1 !== S.indexOf( e, t )
				} )
			}
			S._relevantFormEvents.length && S.registerEventsForTags( [ "input", "select", "textarea", "button" ], S._relevantFormEvents )
		}, S.setVideoListeners = function() {
			if ( !S._relevantVideoEvents ) {
				var e = [ "play", "pause", "ended", "volumechange", "stalled", "loadeddata" ];
				S._relevantVideoEvents = S.filter( S.getUniqueRuleEvents(), function( t ) {
					return -1 !== S.indexOf( e, t )
				} )
			}
			S._relevantVideoEvents.length && S.registerEventsForTags( [ "video" ], S._relevantVideoEvents )
		}, S.readStoredSetting = function( t ) {
			try {
				return t = "sdsat_" + t, e.localStorage.getItem( t )
			} catch ( n ) {
				return S.notify( "Cannot read stored setting from localStorage: " + n.message, 2 ), null
			}
		}, S.loadStoredSettings = function() {
			var e = S.readStoredSetting( "debug" ),
				t = S.readStoredSetting( "hide_activity" );
			e && ( S.settings.notifications = "true" === e ), t && ( S.settings.hideActivity = "true" === t )
		}, S.isRuleActive = function( e, t ) {
			function n( e, t ) {
				return t = a( t, {
					hour: e[ p ](),
					minute: e[ h ]()
				} ), Math.floor( Math.abs( ( e.getTime() - t.getTime() ) / 864e5 ) )
			}

			function i( e, t ) {
				function n( e ) {
					return 12 * e[ d ]() + e[ f ]()
				}
				return Math.abs( n( e ) - n( t ) )
			}

			function a( e, t ) {
				var n = new Date( e.getTime() );
				for ( var i in t )
					if ( t.hasOwnProperty( i ) ) {
						var a = t[ i ];
						switch ( i ) {
							case "hour":
								n[ g ]( a );
								break;
							case "minute":
								n[ m ]( a );
								break;
							case "date":
								n[ v ]( a )
						}
					}
				return n
			}

			function r( e, t ) {
				var n = e[ p ](),
					i = e[ h ](),
					a = t[ p ](),
					r = t[ h ]();
				return 60 * n + i > 60 * a + r
			}

			function o( e, t ) {
				var n = e[ p ](),
					i = e[ h ](),
					a = t[ p ](),
					r = t[ h ]();
				return 60 * a + r > 60 * n + i
			}
			var s = e.schedule;
			if ( !s ) return !0;
			var c = s.utc,
				u = c ? "getUTCDate" : "getDate",
				l = c ? "getUTCDay" : "getDay",
				d = c ? "getUTCFullYear" : "getFullYear",
				f = c ? "getUTCMonth" : "getMonth",
				p = c ? "getUTCHours" : "getHours",
				h = c ? "getUTCMinutes" : "getMinutes",
				g = c ? "setUTCHours" : "setHours",
				m = c ? "setUTCMinutes" : "setMinutes",
				v = c ? "setUTCDate" : "setDate";
			if ( t = t || new Date, s.repeat ) {
				if ( r( s.start, t ) ) return !1;
				if ( o( s.end, t ) ) return !1;
				if ( t < s.start ) return !1;
				if ( s.endRepeat && t >= s.endRepeat ) return !1;
				if ( "daily" === s.repeat ) {
					if ( s.repeatEvery ) {
						var b = n( s.start, t );
						if ( b % s.repeatEvery !== 0 ) return !1
					}
				} else if ( "weekly" === s.repeat ) {
					if ( s.days ) {
						if ( !S.contains( s.days, t[ l ]() ) ) return !1
					} else if ( s.start[ l ]() !== t[ l ]() ) return !1;
					if ( s.repeatEvery ) {
						var y = n( s.start, t );
						if ( y % ( 7 * s.repeatEvery ) !== 0 ) return !1
					}
				} else if ( "monthly" === s.repeat ) {
					if ( s.repeatEvery ) {
						var x = i( s.start, t );
						if ( x % s.repeatEvery !== 0 ) return !1
					}
					if ( s.nthWeek && s.mthDay ) {
						if ( s.mthDay !== t[ l ]() ) return !1;
						var _ = Math.floor( ( t[ u ]() - t[ l ]() + 1 ) / 7 );
						if ( s.nthWeek !== _ ) return !1
					} else if ( s.start[ u ]() !== t[ u ]() ) return !1
				} else if ( "yearly" === s.repeat ) {
					if ( s.start[ f ]() !== t[ f ]() ) return !1;
					if ( s.start[ u ]() !== t[ u ]() ) return !1;
					if ( s.repeatEvery ) {
						var y = Math.abs( s.start[ d ]() - t[ d ]() );
						if ( y % s.repeatEvery !== 0 ) return !1
					}
				}
			} else {
				if ( s.start > t ) return !1;
				if ( s.end < t ) return !1
			}
			return !0
		}, S.isOutboundLink = function( e ) {
			if ( !e.getAttribute( "href" ) ) return !1;
			var t = e.hostname,
				n = ( e.href, e.protocol );
			if ( "http:" !== n && "https:" !== n ) return !1;
			var i = S.any( S.settings.domainList, function( e ) {
				return S.isSubdomainOf( t, e )
			} );
			return i ? !1 : t !== location.hostname
		}, S.isLinkerLink = function( e ) {
			return e.getAttribute && e.getAttribute( "href" ) ? S.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match( /^javascript/i ) && !S.isOutboundLink( e ) : !1
		}, S.isSubdomainOf = function( e, t ) {
			if ( e === t ) return !0;
			var n = e.length - t.length;
			return n > 0 ? S.equalsIgnoreCase( e.substring( n ), t ) : !1
		}, S.getVisitorId = function() {
			var e = S.getToolsByType( "visitor_id" );
			return 0 === e.length ? null : e[ 0 ].getInstance()
		}, S.URI = function() {
			var e = t.location.pathname + t.location.search;
			return S.settings.forceLowerCase && ( e = e.toLowerCase() ), e
		}, S.URL = function() {
			var e = t.location.href;
			return S.settings.forceLowerCase && ( e = e.toLowerCase() ), e
		}, S.filterRules = function() {
			function e( e ) {
				return S.isRuleActive( e ) ? !0 : !1
			}
			S.rules = S.filter( S.rules, e ), S.pageLoadRules = S.filter( S.pageLoadRules, e )
		}, S.ruleInScope = function( e, n ) {
			function i( e, t ) {
				function n( e ) {
					return t.match( e )
				}
				var i = e.include,
					r = e.exclude;
				if ( i && a( i, t ) ) return !0;
				if ( r ) {
					if ( S.isString( r ) && r === t ) return !0;
					if ( S.isArray( r ) && S.any( r, n ) ) return !0;
					if ( S.isRegex( r ) && n( r ) ) return !0
				}
				return !1
			}

			function a( e, t ) {
				function n( e ) {
					return t.match( e )
				}
				return S.isString( e ) && e !== t ? !0 : S.isArray( e ) && !S.any( e, n ) ? !0 : S.isRegex( e ) && !n( e ) ? !0 : !1
			}
			n = n || t.location;
			var r = e.scope;
			if ( !r ) return !0;
			var o = r.URI,
				s = r.subdomains,
				c = r.domains,
				u = r.protocols,
				l = r.hashes;
			return o && i( o, n.pathname + n.search ) ? !1 : s && i( s, n.hostname ) ? !1 : c && a( c, n.hostname ) ? !1 : u && a( u, n.protocol ) ? !1 : l && i( l, n.hash ) ? !1 : !0
		}, S.backgroundTasks = function() {
			+new Date;
			S.setFormListeners(), S.setVideoListeners(), S.loadStoredSettings(), S.registerNewElementsForDynamicRules(), S.eventEmitterBackgroundTasks(); + new Date
		}, S.registerNewElementsForDynamicRules = function() {
			function e( t, n ) {
				var i = e.cache[ t ];
				return i ? n( i ) : void S.cssQuery( t, function( i ) {
					e.cache[ t ] = i, n( i )
				} )
			}
			e.cache = {}, S.each( S.dynamicRules, function( t ) {
				e( t.selector, function( e ) {
					S.each( e, function( e ) {
						var n = "custom" === t.event ? t.customEvent : t.event;
						S.$data( e, "dynamicRules.seen." + n ) || ( S.$data( e, "dynamicRules.seen." + n, !0 ), S.propertiesMatch( t.property, e ) && S.registerEvents( e, [ n ] ) )
					} )
				} )
			} )
		}, S.ensureCSSSelector = function() {
			return t.querySelectorAll ? void( S.hasSelector = !0 ) : ( S.loadingSizzle = !0, S.sizzleQueue = [], void S.loadScript( S.basePath() + "selector.js", function() {
				if ( !S.Sizzle ) return void S.logError( new Error( "Failed to load selector.js" ) );
				var e = S.onEvent.pendingEvents;
				S.each( e, function( e ) {
					S.handleEvent( e )
				}, this ), S.onEvent = S.handleEvent, S.hasSelector = !0, delete S.loadingSizzle, S.each( S.sizzleQueue, function( e ) {
					S.cssQuery( e[ 0 ], e[ 1 ] )
				} ), delete S.sizzleQueue
			} ) )
		}, S.errors = [], S.logError = function( e ) {
			S.errors.push( e ), S.notify( e.name + " - " + e.message, 5 )
		}, S.pageBottom = function() {
			S.initialized && ( S.pageBottomFired = !0, S.firePageLoadEvent( "pagebottom" ) )
		}, S.stagingLibraryOverride = function() {
			var e = "true" === S.readStoredSetting( "stagingLibrary" );
			if ( e ) {
				for ( var n, i, a, r = t.getElementsByTagName( "script" ), o = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, s = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, c = 0, u = r.length; u > c && ( a = r[ c ].getAttribute( "src" ), !a || ( n || ( n = a.match( o ) ), i || ( i = a.match( s ) ), !i ) ); c++ );
				if ( n && !i ) {
					var l = n[ 1 ] + "satelliteLib-" + n[ 2 ] + "-staging.js";
					if ( t.write ) t.write( '<script src="' + l + '"></script>' );
					else {
						var d = t.createElement( "script" );
						d.src = l, t.head.appendChild( d )
					}
					return !0
				}
			}
			return !1
		}, S.checkAsyncInclude = function() {
			e.satellite_asyncLoad && S.notify( 'You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5 )
		}, S.hasMultipleDomains = function() {
			return !!S.settings.domainList && S.settings.domainList.length > 1
		}, S.handleOverrides = function() {
			if ( k )
				for ( var e in k ) k.hasOwnProperty( e ) && ( S.data[ e ] = k[ e ] )
		}, S.privacyManagerParams = function() {
			var e = {};
			S.extend( e, S.settings.privacyManagement );
			var t = [];
			for ( var n in S.tools )
				if ( S.tools.hasOwnProperty( n ) ) {
					var i = S.tools[ n ],
						a = i.settings;
					if ( !a ) continue;
					"sc" === a.engine && t.push( i )
				}
			var r = S.filter( S.map( t, function( e ) {
				return e.getTrackingServer()
			} ), function( e ) {
				return null != e
			} );
			e.adobeAnalyticsTrackingServers = r;
			for ( var o = [ "bannerText", "headline", "introductoryText", "customCSS" ], s = 0; s < o.length; s++ ) {
				var c = o[ s ],
					u = e[ c ];
				if ( u )
					if ( "text" === u.type ) e[ c ] = u.value;
					else {
						if ( "data" !== u.type ) throw new Error( "Invalid type: " + u.type );
						e[ c ] = S.getVar( u.value )
					}
			}
			return e
		}, S.prepareLoadPrivacyManager = function() {
			function t( e ) {
				function t() {
					r++, r === a.length && ( n(), clearTimeout( o ), e() )
				}

				function n() {
					S.each( a, function( e ) {
						S.unbindEvent( e.id + ".load", t )
					} )
				}

				function i() {
					n(), e()
				}
				var a = S.filter( S.values( S.tools ), function( e ) {
					return e.settings && "sc" === e.settings.engine
				} );
				if ( 0 === a.length ) return e();
				var r = 0;
				S.each( a, function( e ) {
					S.bindEvent( e.id + ".load", t )
				} );
				var o = setTimeout( i, 5e3 )
			}
			S.addEventHandler( e, "load", function() {
				t( S.loadPrivacyManager )
			} )
		}, S.loadPrivacyManager = function() {
			var e = S.basePath() + "privacy_manager.js";
			S.loadScript( e, function() {
				var e = S.privacyManager;
				e.configure( S.privacyManagerParams() ), e.openIfRequired()
			} )
		}, S.init = function( t ) {
			if ( !S.stagingLibraryOverride() ) {
				S.configurationSettings = t;
				var i = t.tools;
				delete t.tools;
				for ( var a in t ) t.hasOwnProperty( a ) && ( S[ a ] = t[ a ] );
				S.data.customVars === n && ( S.data.customVars = {} ), S.data.queryParams = S.QueryParams.normal, S.handleOverrides(), S.detectBrowserInfo(), S.trackVisitorInfo && S.trackVisitorInfo(), S.loadStoredSettings(), S.Logger.setOutputState( S.settings.notifications ), S.checkAsyncInclude(), S.ensureCSSSelector(), S.filterRules(), S.dynamicRules = S.filter( S.rules, function( e ) {
					return e.eventHandlerOnElement
				} ), S.tools = S.initTools( i ), S.initEventEmitters(), S.firePageLoadEvent( "aftertoolinit" ), S.settings.privacyManagement && S.prepareLoadPrivacyManager(), S.hasSelector && S.domReady( S.eventEmitterBackgroundTasks ), S.setListeners(), S.domReady( function() {
					S.poll( function() {
						S.backgroundTasks()
					}, S.settings.recheckEvery || 3e3 )
				} ), S.domReady( function() {
					S.domReadyFired = !0, S.pageBottomFired || S.pageBottom(), S.firePageLoadEvent( "domready" )
				} ), S.addEventHandler( e, "load", function() {
					S.firePageLoadEvent( "windowload" )
				} ), S.firePageLoadEvent( "pagetop" ), S.initialized = !0
			}
		}, S.pageLoadPhases = [ "aftertoolinit", "pagetop", "pagebottom", "domready", "windowload" ], S.loadEventBefore = function( e, t ) {
			return S.indexOf( S.pageLoadPhases, e ) <= S.indexOf( S.pageLoadPhases, t )
		}, S.flushPendingCalls = function( e ) {
			e.pending && ( S.each( e.pending, function( t ) {
				var n = t[ 0 ],
					i = t[ 1 ],
					a = t[ 2 ],
					r = t[ 3 ];
				n in e ? e[ n ].apply( e, [ i, a ].concat( r ) ) : e.emit ? e.emit( n, i, a, r ) : S.notify( "Failed to trigger " + n + " for tool " + e.id, 1 )
			} ), delete e.pending )
		}, S.setDebug = function( t ) {
			try {
				e.localStorage.setItem( "sdsat_debug", t )
			} catch ( n ) {
				S.notify( "Cannot set debug mode: " + n.message, 2 )
			}
		}, S.getUserAgent = function() {
			return navigator.userAgent
		}, S.detectBrowserInfo = function() {
			function e( e ) {
				return function( t ) {
					for ( var n in e )
						if ( e.hasOwnProperty( n ) ) {
							var i = e[ n ],
								a = i.test( t );
							if ( a ) return n
						}
					return "Unknown"
				}
			}
			var t = e( {
					OmniWeb: /OmniWeb/,
					"Opera Mini": /Opera Mini/,
					"Opera Mobile": /Opera Mobi/,
					Opera: /Opera/,
					Chrome: /Chrome|CriOS|CrMo/,
					Firefox: /Firefox|FxiOS/,
					"IE Mobile": /IEMobile/,
					IE: /MSIE|Trident/,
					"Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
					Safari: /Safari/
				} ),
				n = e( {
					Blackberry: /BlackBerry|BB10/,
					"Symbian OS": /Symbian|SymbOS/,
					Maemo: /Maemo/,
					Android: /Android/,
					Linux: / Linux /,
					Unix: /FreeBSD|OpenBSD|CrOS/,
					Windows: /[\( ]Windows /,
					iOS: /iPhone|iPad|iPod/,
					MacOS: /Macintosh;/
				} ),
				i = e( {
					Nokia: /Symbian|SymbOS|Maemo/,
					"Windows Phone": /Windows Phone/,
					Blackberry: /BlackBerry|BB10/,
					Android: /Android/,
					iPad: /iPad/,
					iPod: /iPod/,
					iPhone: /iPhone/,
					Desktop: /.*/
				} ),
				a = S.getUserAgent();
			S.browserInfo = {
				browser: t( a ),
				os: n( a ),
				deviceType: i( a )
			}
		}, S.isHttps = function() {
			return "https:" == t.location.protocol
		}, S.BaseTool = function( e ) {
			this.settings = e || {}, this.forceLowerCase = S.settings.forceLowerCase, "forceLowerCase" in this.settings && ( this.forceLowerCase = this.settings.forceLowerCase )
		}, S.BaseTool.prototype = {
			triggerCommand: function( e, t, n ) {
				var i = this.settings || {};
				if ( this.initialize && this.isQueueAvailable() && this.isQueueable( e ) && n && S.loadEventBefore( n.type, i.loadOn ) ) return void this.queueCommand( e, t, n );
				var a = e.command,
					r = this[ "$" + a ],
					o = r ? r.escapeHtml : !1,
					s = S.preprocessArguments( e.arguments, t, n, this.forceLowerCase, o );
				r ? r.apply( this, [ t, n ].concat( s ) ) : this.$missing$ ? this.$missing$( a, t, n, s ) : S.notify( "Failed to trigger " + a + " for tool " + this.id, 1 )
			},
			endPLPhase: function( e ) {},
			isQueueable: function( e ) {
				return "cancelToolInit" !== e.command
			},
			isQueueAvailable: function() {
				return !this.initialized && !this.initializing
			},
			flushQueue: function() {
				this.pending && ( S.each( this.pending, function( e ) {
					this.triggerCommand.apply( this, e )
				}, this ), this.pending = [] )
			},
			queueCommand: function( e, t, n ) {
				this.pending || ( this.pending = [] ), this.pending.push( [ e, t, n ] )
			},
			$cancelToolInit: function() {
				this._cancelToolInit = !0
			}
		}, e._satellite = S, a.prototype.backgroundTasks = function() {
			S.each( this.rules, function( e ) {
				S.cssQuery( e.selector, function( e ) {
					if ( e.length > 0 ) {
						var t = e[ 0 ];
						if ( S.$data( t, "elementexists.seen" ) ) return;
						S.$data( t, "elementexists.seen", !0 ), S.onEvent( {
							type: "elementexists",
							target: t
						} )
					}
				} )
			} )
		}, S.availableEventEmitters.push( a ), r.prototype = {
			initialize: function() {
				return this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe ? ( this.bind(), !0 ) : void 0
			},
			bind: function() {
				this.FB.Event.subscribe( "edge.create", function() {
					S.notify( "tracking a facebook like", 1 ), S.onEvent( {
						type: "facebook.like",
						target: t
					} )
				} ), this.FB.Event.subscribe( "edge.remove", function() {
					S.notify( "tracking a facebook unlike", 1 ), S.onEvent( {
						type: "facebook.unlike",
						target: t
					} )
				} ), this.FB.Event.subscribe( "message.send", function() {
					S.notify( "tracking a facebook share", 1 ), S.onEvent( {
						type: "facebook.send",
						target: t
					} )
				} )
			}
		}, S.availableEventEmitters.push( r ), o.prototype = {
			backgroundTasks: function() {
				var e = this;
				S.each( this.rules, function( t ) {
					var n = t[ 1 ],
						i = t[ 0 ];
					S.cssQuery( n, function( t ) {
						S.each( t, function( t ) {
							e.trackElement( t, i )
						} )
					} )
				}, this )
			},
			trackElement: function( e, t ) {
				var n = this,
					i = S.$data( e, "hover.delays" );
				i ? S.contains( i, t ) || i.push( t ) : ( S.addEventHandler( e, "mouseover", function( t ) {
					n.onMouseOver( t, e )
				} ), S.addEventHandler( e, "mouseout", function( t ) {
					n.onMouseOut( t, e )
				} ), S.$data( e, "hover.delays", [ t ] ) )
			},
			onMouseOver: function( e, t ) {
				var n = e.target || e.srcElement,
					i = e.relatedTarget || e.fromElement,
					a = ( t === n || S.containsElement( t, n ) ) && !S.containsElement( t, i );
				a && this.onMouseEnter( t )
			},
			onMouseEnter: function( e ) {
				var t = S.$data( e, "hover.delays" ),
					n = S.map( t, function( t ) {
						return setTimeout( function() {
							S.onEvent( {
								type: "hover(" + t + ")",
								target: e
							} )
						}, t )
					} );
				S.$data( e, "hover.delayTimers", n )
			},
			onMouseOut: function( e, t ) {
				var n = e.target || e.srcElement,
					i = e.relatedTarget || e.toElement,
					a = ( t === n || S.containsElement( t, n ) ) && !S.containsElement( t, i );
				a && this.onMouseLeave( t )
			},
			onMouseLeave: function( e ) {
				var t = S.$data( e, "hover.delayTimers" );
				t && S.each( t, function( e ) {
					clearTimeout( e )
				} )
			}
		}, S.availableEventEmitters.push( o ), s.offset = function( n ) {
			var i = null,
				a = null;
			try {
				var r = n.getBoundingClientRect(),
					o = t,
					s = o.documentElement,
					c = o.body,
					u = e,
					l = s.clientTop || c.clientTop || 0,
					d = s.clientLeft || c.clientLeft || 0,
					f = u.pageYOffset || s.scrollTop || c.scrollTop,
					p = u.pageXOffset || s.scrollLeft || c.scrollLeft;
				i = r.top + f - l, a = r.left + p - d
			} catch ( h ) {}
			return {
				top: i,
				left: a
			}
		}, s.getViewportHeight = function() {
			var n = e.innerHeight,
				i = t.compatMode;
			return i && ( n = "CSS1Compat" == i ? t.documentElement.clientHeight : t.body.clientHeight ), n
		}, s.getScrollTop = function() {
			return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop
		}, s.isElementInDocument = function( e ) {
			return t.body.contains( e )
		}, s.isElementInView = function( e ) {
			if ( !s.isElementInDocument( e ) ) return !1;
			var t = s.getViewportHeight(),
				n = s.getScrollTop(),
				i = s.offset( e ).top,
				a = e.offsetHeight;
			return null !== i ? !( n > i + a || i > n + t ) : !1
		}, s.prototype = {
			backgroundTasks: function() {
				var e = this.elements;
				S.each( this.rules, function( t ) {
					S.cssQuery( t.selector, function( n ) {
						var i = 0;
						S.each( n, function( t ) {
							S.contains( e, t ) || ( e.push( t ), i++ )
						} ), i && S.notify( t.selector + " added " + i + " elements.", 1 )
					} )
				} ), this.track()
			},
			checkInView: function( e, t, n ) {
				var i = S.$data( e, "inview" );
				if ( s.isElementInView( e ) ) {
					i || S.$data( e, "inview", !0 );
					var a = this;
					this.processRules( e, function( n, i, r ) {
						if ( t || !n.inviewDelay ) S.$data( e, i, !0 ), S.onEvent( {
							type: "inview",
							target: e,
							inviewDelay: n.inviewDelay
						} );
						else if ( n.inviewDelay ) {
							var o = S.$data( e, r );
							o || ( o = setTimeout( function() {
								a.checkInView( e, !0, n.inviewDelay )
							}, n.inviewDelay ), S.$data( e, r, o ) )
						}
					}, n )
				} else {
					if ( !s.isElementInDocument( e ) ) {
						var r = S.indexOf( this.elements, e );
						this.elements.splice( r, 1 )
					}
					i && S.$data( e, "inview", !1 ), this.processRules( e, function( t, n, i ) {
						var a = S.$data( e, i );
						a && clearTimeout( a )
					}, n )
				}
			},
			track: function() {
				for ( var e = this.elements.length - 1; e >= 0; e-- ) this.checkInView( this.elements[ e ] )
			},
			processRules: function( e, t, n ) {
				var i = this.rules;
				n && ( i = S.filter( this.rules, function( e ) {
					return e.inviewDelay == n
				} ) ), S.each( i, function( n, i ) {
					var a = n.inviewDelay ? "viewed_" + n.inviewDelay : "viewed",
						r = "inview_timeout_id_" + i;
					S.$data( e, a ) || S.matchesCss( n.selector, e ) && t( n, a, r )
				} )
			}
		}, S.availableEventEmitters.push( s ), c.prototype = {
			obue: !1,
			initialize: function() {
				this.attachCloseListeners()
			},
			obuePrevUnload: function() {},
			obuePrevBeforeUnload: function() {},
			newObueListener: function() {
				this.obue || ( this.obue = !0, this.triggerBeacons() )
			},
			attachCloseListeners: function() {
				this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = S.bind( function( t ) {
					this.prevUnload && setTimeout( S.bind( function() {
						this.prevUnload.call( e, t )
					}, this ), 1 ), this.newObueListener()
				}, this ), e.onbeforeunload = S.bind( function( t ) {
					this.prevBeforeUnload && setTimeout( S.bind( function() {
						this.prevBeforeUnload.call( e, t )
					}, this ), 1 ), this.newObueListener()
				}, this )
			},
			triggerBeacons: function() {
				S.fireEvent( "leave", t )
			}
		}, S.availableEventEmitters.push( c ), u.prototype = {
			initialize: function() {
				this.setupHistoryAPI(), this.setupHashChange()
			},
			fireIfURIChanged: function() {
				var e = S.URL();
				this.lastURL !== e && ( this.fireEvent(), this.lastURL = e )
			},
			fireEvent: function() {
				S.updateQueryParams(), S.onEvent( {
					type: "locationchange",
					target: t
				} )
			},
			setupSPASupport: function() {
				this.setupHistoryAPI(), this.setupHashChange()
			},
			setupHistoryAPI: function() {
				var t = e.history;
				t && ( t.pushState && ( this.originalPushState = t.pushState, t.pushState = this._pushState ), t.replaceState && ( this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState ) ), S.addEventHandler( e, "popstate", this._onPopState )
			},
			pushState: function() {
				var e = this.originalPushState.apply( history, arguments );
				return this.onPushState(), e
			},
			replaceState: function() {
				var e = this.originalReplaceState.apply( history, arguments );
				return this.onReplaceState(), e
			},
			setupHashChange: function() {
				S.addEventHandler( e, "hashchange", this._onHashChange )
			},
			onReplaceState: function() {
				setTimeout( this._fireIfURIChanged, 0 )
			},
			onPushState: function() {
				setTimeout( this._fireIfURIChanged, 0 )
			},
			onPopState: function() {
				setTimeout( this._fireIfURIChanged, 0 )
			},
			onHashChange: function() {
				setTimeout( this._fireIfURIChanged, 0 )
			},
			uninitialize: function() {
				this.cleanUpHistoryAPI(), this.cleanUpHashChange()
			},
			cleanUpHistoryAPI: function() {
				history.pushState === this._pushState && ( history.pushState = this.originalPushState ), history.replaceState === this._replaceState && ( history.replaceState = this.originalReplaceState ), S.removeEventHandler( e, "popstate", this._onPopState )
			},
			cleanUpHashChange: function() {
				S.removeEventHandler( e, "hashchange", this._onHashChange )
			}
		}, S.availableEventEmitters.push( u ), l.orientationChange = function( t ) {
			var n = 0 === e.orientation ? "portrait" : "landscape";
			t.orientation = n, S.onEvent( t )
		}, S.availableEventEmitters.push( l ), d.prototype = {
			initialize: function() {
				var e = this.twttr;
				e && "function" == typeof e.ready && e.ready( S.bind( this.bind, this ) )
			},
			bind: function() {
				this.twttr.events.bind( "tweet", function( e ) {
					e && ( S.notify( "tracking a tweet button", 1 ), S.onEvent( {
						type: "twitter.tweet",
						target: t
					} ) )
				} )
			}
		}, S.availableEventEmitters.push( d ), f.prototype = {
			backgroundTasks: function() {
				var e = this.eventHandler;
				S.each( this.rules, function( t ) {
					S.cssQuery( t.selector || "video", function( t ) {
						S.each( t, function( t ) {
							S.$data( t, "videoplayed.tracked" ) || ( S.addEventHandler( t, "timeupdate", S.throttle( e, 100 ) ), S.$data( t, "videoplayed.tracked", !0 ) )
						} )
					} )
				} )
			},
			evalRule: function( e, t ) {
				var n = t.event,
					i = e.seekable,
					a = i.start( 0 ),
					r = i.end( 0 ),
					o = e.currentTime,
					s = t.event.match( /^videoplayed\(([0-9]+)([s%])\)$/ );
				if ( s ) {
					var c = s[ 2 ],
						u = Number( s[ 1 ] ),
						l = "%" === c ? function() {
							return 100 * ( o - a ) / ( r - a ) >= u
						} : function() {
							return o - a >= u
						};
					!S.$data( e, n ) && l() && ( S.$data( e, n, !0 ), S.onEvent( {
						type: n,
						target: e
					} ) )
				}
			},
			onUpdateTime: function( e ) {
				var t = this.rules,
					n = e.target;
				if ( n.seekable && 0 !== n.seekable.length )
					for ( var i = 0, a = t.length; a > i; i++ ) this.evalRule( n, t[ i ] )
			}
		}, S.availableEventEmitters.push( f ), p.prototype = {
			defineEvents: function() {
				this.oldBlurClosure = function() {
					S.fireEvent( "tabblur", t )
				}, this.oldFocusClosure = S.bind( function() {
					this.visibilityApiHasPriority ? S.fireEvent( "tabfocus", t ) : null != S.visibility.getHiddenProperty() ? S.visibility.isHidden() || S.fireEvent( "tabfocus", t ) : S.fireEvent( "tabfocus", t )
				}, this )
			},
			attachDetachModernEventListeners: function( e ) {
				var n = 0 == e ? "removeEventHandler" : "addEventHandler";
				S[ n ]( t, S.visibility.getVisibilityEvent(), this.handleVisibilityChange )
			},
			attachDetachOlderEventListeners: function( t, n, i ) {
				var a = 0 == t ? "removeEventHandler" : "addEventHandler";
				S[ a ]( n, i, this.oldBlurClosure ), S[ a ]( e, "focus", this.oldFocusClosure )
			},
			handleVisibilityChange: function() {
				S.visibility.isHidden() ? S.fireEvent( "tabblur", t ) : S.fireEvent( "tabfocus", t )
			},
			setVisibilityApiPriority: function( t ) {
				this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners( !1, e, "blur" ), this.attachDetachModernEventListeners( !1 ), t ? null != S.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners( !0 ) : this.attachDetachOlderEventListeners( !0, e, "blur" ) : ( this.attachDetachOlderEventListeners( !0, e, "blur" ), null != S.visibility.getHiddenProperty() && this.attachDetachModernEventListeners( !0 ) )
			},
			oldBlurClosure: null,
			oldFocusClosure: null,
			visibilityApiHasPriority: !0
		}, S.availableEventEmitters.push( p ), S.ecommerce = {
			addItem: function() {
				var e = [].slice.call( arguments );
				S.onEvent( {
					type: "ecommerce.additem",
					target: e
				} )
			},
			addTrans: function() {
				var e = [].slice.call( arguments );
				S.data.saleData.sale = {
					orderId: e[ 0 ],
					revenue: e[ 2 ]
				}, S.onEvent( {
					type: "ecommerce.addtrans",
					target: e
				} )
			},
			trackTrans: function() {
				S.onEvent( {
					type: "ecommerce.tracktrans",
					target: []
				} )
			}
		}, S.visibility = {
			isHidden: function() {
				var e = this.getHiddenProperty();
				return e ? t[ e ] : !1
			},
			isVisible: function() {
				return !this.isHidden()
			},
			getHiddenProperty: function() {
				var e = [ "webkit", "moz", "ms", "o" ];
				if ( "hidden" in t ) return "hidden";
				for ( var n = 0; n < e.length; n++ )
					if ( e[ n ] + "Hidden" in t ) return e[ n ] + "Hidden";
				return null
			},
			getVisibilityEvent: function() {
				var e = this.getHiddenProperty();
				return e ? e.replace( /[H|h]idden/, "" ) + "visibilitychange" : null
			}
		}, S.inherit( h, S.BaseTool ), S.extend( h.prototype, {
			initialize: function() {
				var e = this.settings;
				if ( this.settings.initTool !== !1 ) {
					var t = e.url;
					t = "string" == typeof t ? S.basePath() + t : S.isHttps() ? t.https : t.http, S.loadScript( t, S.bind( this.onLoad, this ) ), this.initializing = !0
				} else this.initialized = !0
			},
			isQueueAvailable: function() {
				return !this.initialized
			},
			onLoad: function() {
				this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue()
			},
			endPLPhase: function( e ) {
				var t = this.settings.loadOn;
				e === t && ( S.notify( this.name + ": Initializing at " + e, 1 ), this.initialize() )
			},
			$fire: function( e, t, n ) {
				return this.initializing ? void this.queueCommand( {
					command: "fire",
					arguments: [ n ]
				}, e, t ) : void n.call( this.settings, e, t )
			}
		} ), S.availableTools.am = h, S.availableTools.adlens = h, S.availableTools.__basic = h, S.inherit( g, S.BaseTool ), S.extend( g.prototype, {
			name: "Default",
			$loadIframe: function( t, n, i ) {
				var a = i.pages,
					r = i.loadOn,
					o = S.bind( function() {
						S.each( a, function( e ) {
							this.loadIframe( t, n, e )
						}, this )
					}, this );
				r || o(), "domready" === r && S.domReady( o ), "load" === r && S.addEventHandler( e, "load", o )
			},
			loadIframe: function( e, n, i ) {
				var a = t.createElement( "iframe" );
				a.style.display = "none";
				var r = S.data.host,
					o = i.data,
					s = this.scriptURL( i.src ),
					c = S.searchVariables( o, e, n );
				r && ( s = S.basePath() + s ), s += c, a.src = s;
				var u = t.getElementsByTagName( "body" )[ 0 ];
				u ? u.appendChild( a ) : S.domReady( function() {
					t.getElementsByTagName( "body" )[ 0 ].appendChild( a )
				} )
			},
			scriptURL: function( e ) {
				var t = S.settings.scriptDir || "";
				return t + e
			},
			$loadScript: function( t, n, i ) {
				var a = i.scripts,
					r = i.sequential,
					o = i.loadOn,
					s = S.bind( function() {
						r ? this.loadScripts( t, n, a ) : S.each( a, function( e ) {
							this.loadScripts( t, n, [ e ] )
						}, this )
					}, this );
				o ? "domready" === o ? S.domReady( s ) : "load" === o && S.addEventHandler( e, "load", s ) : s()
			},
			loadScripts: function( e, t, n ) {
				function i() {
					if ( r.length > 0 && a ) {
						var c = r.shift();
						c.call( e, t, o )
					}
					var u = n.shift();
					if ( u ) {
						var l = S.data.host,
							d = s.scriptURL( u.src );
						l && ( d = S.basePath() + d ), a = u, S.loadScript( d, i )
					}
				}
				try {
					var a, n = n.slice( 0 ),
						r = this.asyncScriptCallbackQueue,
						o = t.target || t.srcElement,
						s = this
				} catch ( c ) {
					console.error( "scripts is", S.stringify( n ) )
				}
				i()
			},
			$loadBlockingScript: function( e, t, n ) {
				var i = n.scripts,
					a = ( n.loadOn, S.bind( function() {
						S.each( i, function( n ) {
							this.loadBlockingScript( e, t, n )
						}, this )
					}, this ) );
				a()
			},
			loadBlockingScript: function( e, t, n ) {
				var i = this.scriptURL( n.src ),
					a = S.data.host,
					r = t.target || t.srcElement;
				a && ( i = S.basePath() + i ), this.argsForBlockingScripts.push( [ e, t, r ] ), S.loadScriptSync( i )
			},
			pushAsyncScript: function( e ) {
				this.asyncScriptCallbackQueue.push( e )
			},
			pushBlockingScript: function( e ) {
				var t = this.argsForBlockingScripts.shift(),
					n = t[ 0 ];
				e.apply( n, t.slice( 1 ) )
			},
			$writeHTML: S.escapeHtmlParams( function( e, n ) {
				if ( S.domReadyFired || !t.write ) return void S.notify( "Command writeHTML failed. You should try appending HTML using the async option.", 1 );
				if ( "pagebottom" !== n.type && "pagetop" !== n.type ) return void S.notify( "You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1 );
				for ( var i = 2, a = arguments.length; a > i; i++ ) {
					var r = arguments[ i ].html;
					r = S.replace( r, e, n ), t.write( r )
				}
			} ),
			linkNeedsDelayActivate: function( t, n ) {
				n = n || e;
				var i = t.tagName,
					a = t.getAttribute( "target" ),
					r = t.getAttribute( "href" );
				return i && "a" !== i.toLowerCase() ? !1 : r ? a ? "_blank" === a ? !1 : "_top" === a ? n.top === n : "_parent" === a ? !1 : "_self" === a ? !0 : n.name ? a === n.name : !0 : !0 : !1
			},
			$delayActivateLink: function( e, t ) {
				if ( this.linkNeedsDelayActivate( e ) ) {
					S.preventDefault( t );
					var n = S.settings.linkDelay || 100;
					setTimeout( function() {
						S.setLocation( e.href )
					}, n )
				}
			},
			isQueueable: function( e ) {
				return "writeHTML" !== e.command
			}
		} ), S.availableTools[ "default" ] = g, S.inherit( m, S.BaseTool ), S.extend( m.prototype, {
			name: "GA",
			initialize: function() {
				var t = this.settings,
					n = e._gaq,
					i = t.initCommands || [],
					a = t.customInit;
				if ( n || ( _gaq = [] ), this.isSuppressed() ) S.notify( "GA: page code not loaded(suppressed).", 1 );
				else {
					if ( !n && !m.scriptLoaded ) {
						var r = S.isHttps(),
							o = ( r ? "https://ssl" : "http://www" ) + ".google-analytics.com/ga.js";
						t.url && ( o = r ? t.url.https : t.url.http ), S.loadScript( o ), m.scriptLoaded = !0, S.notify( "GA: page code loaded.", 1 )
					}
					var s = ( t.domain, t.trackerName ),
						c = C.allowLinker(),
						u = S.replace( t.account, location );
					S.settings.domainList || [];
					_gaq.push( [ this.cmd( "setAccount" ), u ] ), c && _gaq.push( [ this.cmd( "setAllowLinker" ), c ] ), _gaq.push( [ this.cmd( "setDomainName" ), C.cookieDomain() ] ), S.each( i, function( e ) {
						var t = [ this.cmd( e[ 0 ] ) ].concat( S.preprocessArguments( e.slice( 1 ), location, null, this.forceLowerCase ) );
						_gaq.push( t )
					}, this ), a && ( this.suppressInitialPageView = !1 === a( _gaq, s ) ), t.pageName && this.$overrideInitialPageView( null, null, t.pageName )
				}
				this.initialized = !0, S.fireEvent( this.id + ".configure", _gaq, s )
			},
			isSuppressed: function() {
				return this._cancelToolInit || this.settings.initTool === !1
			},
			tracker: function() {
				return this.settings.trackerName
			},
			cmd: function( e ) {
				var t = this.tracker();
				return t ? t + "._" + e : "_" + e
			},
			$overrideInitialPageView: function( e, t, n ) {
				this.urlOverride = n
			},
			trackInitialPageView: function() {
				if ( !this.isSuppressed() && !this.suppressInitialPageView )
					if ( this.urlOverride ) {
						var e = S.preprocessArguments( [ this.urlOverride ], location, null, this.forceLowerCase );
						this.$missing$( "trackPageview", null, null, e )
					} else this.$missing$( "trackPageview" )
			},
			endPLPhase: function( e ) {
				var t = this.settings.loadOn;
				e === t && ( S.notify( "GA: Initializing at " + e, 1 ), this.initialize(), this.flushQueue(), this.trackInitialPageView() )
			},
			call: function( e, t, n, i ) {
				if ( !this._cancelToolInit ) {
					var a = ( this.settings, this.tracker() ),
						r = this.cmd( e ),
						i = i ? [ r ].concat( i ) : [ r ];
					_gaq.push( i ), a ? S.notify( "GA: sent command " + e + " to tracker " + a + ( i.length > 1 ? " with parameters [" + i.slice( 1 ).join( ", " ) + "]" : "" ) + ".", 1 ) : S.notify( "GA: sent command " + e + ( i.length > 1 ? " with parameters [" + i.slice( 1 ).join( ", " ) + "]" : "" ) + ".", 1 )
				}
			},
			$missing$: function( e, t, n, i ) {
				this.call( e, t, n, i )
			},
			$postTransaction: function( t, n, i ) {
				var a = S.data.customVars.transaction = e[ i ];
				this.call( "addTrans", t, n, [ a.orderID, a.affiliation, a.total, a.tax, a.shipping, a.city, a.state, a.country ] ), S.each( a.items, function( e ) {
					this.call( "addItem", t, n, [ e.orderID, e.sku, e.product, e.category, e.unitPrice, e.quantity ] )
				}, this ), this.call( "trackTrans", t, n )
			},
			delayLink: function( e, t ) {
				var n = this;
				if ( C.allowLinker() && e.hostname.match( this.settings.linkerDomains ) && !S.isSubdomainOf( e.hostname, location.hostname ) ) {
					S.preventDefault( t );
					var i = S.settings.linkDelay || 100;
					setTimeout( function() {
						n.call( "link", e, t, [ e.href ] )
					}, i )
				}
			},
			popupLink: function( t, n ) {
				if ( e._gat ) {
					S.preventDefault( n );
					var i = this.settings.account,
						a = e._gat._createTracker( i ),
						r = a._getLinkerUrl( t.href );
					e.open( r )
				}
			},
			$link: function( e, t ) {
				"_blank" === e.getAttribute( "target" ) ? this.popupLink( e, t ) : this.delayLink( e, t )
			},
			$trackEvent: function( e, t ) {
				var n = Array.prototype.slice.call( arguments, 2 );
				if ( n.length >= 4 && null != n[ 3 ] ) {
					var i = parseInt( n[ 3 ], 10 );
					S.isNaN( i ) && ( i = 1 ), n[ 3 ] = i
				}
				this.call( "trackEvent", e, t, n )
			}
		} ), S.availableTools.ga = m, S.inherit( v, S.BaseTool ), S.extend( v.prototype, {
			name: "GAUniversal",
			endPLPhase: function( e ) {
				var t = this.settings,
					n = t.loadOn;
				e === n && ( S.notify( "GAU: Initializing at " + e, 1 ), this.initialize(), this.flushQueue(), this.trackInitialPageView() )
			},
			getTrackerName: function() {
				return this.settings.trackerSettings.name || ""
			},
			isPageCodeLoadSuppressed: function() {
				return this.settings.initTool === !1 || this._cancelToolInit === !0
			},
			initialize: function() {
				if ( this.isPageCodeLoadSuppressed() ) return this.initialized = !0, void S.notify( "GAU: Page code not loaded (suppressed).", 1 );
				var t = "ga";
				e[ t ] = e[ t ] || this.createGAObject(), e.GoogleAnalyticsObject = t, S.notify( "GAU: Page code loaded.", 1 ), S.loadScriptOnce( this.getToolUrl() );
				var n = this.settings;
				if ( C.allowLinker() && n.allowLinker !== !1 ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), n.customInit ) {
					var i = n.customInit,
						a = i( e[ t ], this.getTrackerName() );
					a === !1 && ( this.suppressInitialPageView = !0 )
				}
				this.initialized = !0
			},
			createGAObject: function() {
				var e = function() {
					e.q.push( arguments )
				};
				return e.q = [], e.l = 1 * new Date, e
			},
			createAccount: function() {
				this.create()
			},
			createAccountForLinker: function() {
				var e = {};
				C.allowLinker() && ( e.allowLinker = !0 ), this.create( e ), this.call( "require", "linker" ), this.call( "linker:autoLink", this.autoLinkDomains(), !1, !0 )
			},
			create: function( e ) {
				var t = this.settings.trackerSettings;
				t = S.preprocessArguments( [ t ], location, null, this.forceLowerCase )[ 0 ], t.trackingId = S.replace( this.settings.trackerSettings.trackingId, location ), t.cookieDomain || ( t.cookieDomain = C.cookieDomain() ), S.extend( t, e || {} ), this.call( "create", t )
			},
			autoLinkDomains: function() {
				var e = location.hostname;
				return S.filter( S.settings.domainList, function( t ) {
					return t !== e
				} )
			},
			executeInitCommands: function() {
				var e = this.settings;
				e.initCommands && S.each( e.initCommands, function( e ) {
					var t = e.splice( 2, e.length - 2 );
					e = e.concat( S.preprocessArguments( t, location, null, this.forceLowerCase ) ), this.call.apply( this, e )
				}, this )
			},
			trackInitialPageView: function() {
				this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call( "send", "pageview" )
			},
			call: function() {
				return "function" != typeof ga ? void S.notify( "GA Universal function not found!", 4 ) : void( this.isCallSuppressed() || ( arguments[ 0 ] = this.cmd( arguments[ 0 ] ), this.log( S.toArray( arguments ) ), ga.apply( e, arguments ) ) )
			},
			isCallSuppressed: function() {
				return this._cancelToolInit === !0
			},
			$missing$: function( e, t, n, i ) {
				i = i || [], i = [ e ].concat( i ), this.call.apply( this, i )
			},
			getToolUrl: function() {
				var e = this.settings,
					t = S.isHttps();
				return e.url ? t ? e.url.https : e.url.http : ( t ? "https://ssl" : "http://www" ) + ".google-analytics.com/analytics.js"
			},
			cmd: function( e ) {
				var t = [ "send", "set", "get" ],
					n = this.getTrackerName();
				return n && -1 !== S.indexOf( t, e ) ? n + "." + e : e
			},
			log: function( e ) {
				var t = e[ 0 ],
					n = this.getTrackerName() || "default",
					i = "GA Universal: sent command " + t + " to tracker " + n;
				if ( e.length > 1 ) {
					S.stringify( e.slice( 1 ) );
					i += " with parameters " + S.stringify( e.slice( 1 ) )
				}
				i += ".", S.notify( i, 1 )
			}
		} ), S.availableTools.ga_universal = v;
		var C = {
			allowLinker: function() {
				return S.hasMultipleDomains()
			},
			cookieDomain: function() {
				var t = S.settings.domainList,
					n = S.find( t, function( t ) {
						var n = e.location.hostname;
						return S.equalsIgnoreCase( n.slice( n.length - t.length ), t )
					} ),
					i = n ? "." + n : "auto";
				return i
			}
		};
		S.inherit( b, S.BaseTool ), S.extend( b.prototype, {
			name: "Nielsen",
			endPLPhase: function( e ) {
				switch ( e ) {
					case "pagetop":
						this.initialize();
						break;
					case "pagebottom":
						this.enableTracking && ( this.queueCommand( {
							command: "sendFirstBeacon",
							arguments: []
						} ), this.flushQueueWhenReady() )
				}
			},
			defineListeners: function() {
				this.onTabFocus = S.bind( function() {
					this.notify( "Tab visible, sending view beacon when ready", 1 ), this.tabEverVisible = !0, this.flushQueueWhenReady()
				}, this ), this.onPageLeave = S.bind( function() {
					this.notify( "isHuman? : " + this.isHuman(), 1 ), this.isHuman() && this.sendDurationBeacon()
				}, this ), this.onHumanDetectionChange = S.bind( function( e ) {
					this == e.target.target && ( this.human = e.target.isHuman )
				}, this )
			},
			initialize: function() {
				this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = S.visibility.isVisible(), this.tabEverVisible ? this.notify( "Tab visible, sending view beacon when ready", 1 ) : S.bindEventOnce( "tabfocus", this.onTabFocus ), this.initialized = !0
			},
			initializeTracking: function() {
				this.initialized || ( this.notify( "Initializing tracking", 1 ), this.addRemovePageLeaveEvent( this.enableTracking ), this.addRemoveHumanDetectionChangeEvent( this.enableTracking ), this.initialized = !0 )
			},
			initializeDataProviders: function() {
				var e, t = this.getAnalyticsTool();
				this.dataProvider.register( new b.DataProvider.VisitorID( S.getVisitorId() ) ), t ? ( e = new b.DataProvider.Generic( "rsid", function() {
					return t.settings.account
				} ), this.dataProvider.register( e ) ) : this.notify( "Missing integration with Analytics: rsid will not be sent." )
			},
			initializeNonHumanDetection: function() {
				S.nonhumandetection ? ( S.nonhumandetection.init(), this.setEnableNonHumanDetection( 0 == this.settings.enableNonHumanDetection ? !1 : !0 ), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay( 1e3 * parseInt( this.settings.nonHumanDetectionDelay ) ) ) : this.notify( "NHDM is not available." )
			},
			getAnalyticsTool: function() {
				return this.settings.integratesWith ? S.tools[ this.settings.integratesWith ] : void 0
			},
			flushQueueWhenReady: function() {
				this.enableTracking && this.tabEverVisible && S.poll( S.bind( function() {
					return this.isReadyToTrack() ? ( this.flushQueue(), !0 ) : void 0
				}, this ), 100, 20 )
			},
			isReadyToTrack: function() {
				return this.tabEverVisible && this.dataProvider.isReady()
			},
			$setVars: function( e, t, n ) {
				for ( var i in n ) {
					var a = n[ i ];
					"function" == typeof a && ( a = a() ), this.settings[ i ] = a
				}
				this.notify( "Set variables done", 2 ), this.prepareContextData()
			},
			$setEnableTracking: function( e, t, n ) {
				this.notify( "Will" + ( n ? "" : " not" ) + " track time on page", 1 ), this.enableTracking != n && ( this.addRemovePageLeaveEvent( n ), this.addRemoveHumanDetectionChangeEvent( n ), this.enableTracking = n )
			},
			$sendFirstBeacon: function( e, t, n ) {
				this.sendViewBeacon()
			},
			setEnableNonHumanDetection: function( e ) {
				e ? S.nonhumandetection.register( this ) : S.nonhumandetection.unregister( this )
			},
			setNonHumanDetectionDelay: function( e ) {
				S.nonhumandetection.register( this, e )
			},
			addRemovePageLeaveEvent: function( e ) {
				this.notify( ( e ? "Attach onto" : "Detach from" ) + " page leave event", 1 );
				var t = 0 == e ? "unbindEvent" : "bindEvent";
				S[ t ]( "leave", this.onPageLeave )
			},
			addRemoveHumanDetectionChangeEvent: function( e ) {
				this.notify( ( e ? "Attach onto" : "Detach from" ) + " human detection change event", 1 );
				var t = 0 == e ? "unbindEvent" : "bindEvent";
				S[ t ]( "humandetection.change", this.onHumanDetectionChange )
			},
			sendViewBeacon: function() {
				this.notify( "Tracked page view.", 1 ), this.sendBeaconWith()
			},
			sendDurationBeacon: function() {
				if ( !S.timetracking || "function" != typeof S.timetracking.timeOnPage || null == S.timetracking.timeOnPage() ) return void this.notify( "Could not track close due missing time on page", 5 );
				this.notify( "Tracked close", 1 ), this.sendBeaconWith( {
					timeOnPage: Math.round( S.timetracking.timeOnPage() / 1e3 ),
					duration: "D",
					timer: "timer"
				} );
				var e, t = "";
				for ( e = 0; e < this.magicConst; e++ ) t += "0"
			},
			sendBeaconWith: function( e ) {
				this.enableTracking && this[ this.beaconMethod ].call( this, this.prepareUrl( e ) )
			},
			plainBeacon: function( e ) {
				var t = new Image;
				t.src = e, t.width = 1, t.height = 1, t.alt = ""
			},
			navigatorSendBeacon: function( e ) {
				navigator.sendBeacon( e )
			},
			prepareUrl: function( e ) {
				var t = this.settings;
				return S.extend( t, this.dataProvider.provide() ), S.extend( t, e ), this.preparePrefix( this.settings.collectionServer ) + this.adapt.convertToURI( this.adapt.toNielsen( this.substituteVariables( t ) ) )
			},
			preparePrefix: function( e ) {
				return "//" + encodeURIComponent( e ) + ".imrworldwide.com/cgi-bin/gn?"
			},
			substituteVariables: function( e ) {
				var t = {};
				for ( var n in e ) e.hasOwnProperty( n ) && ( t[ n ] = S.replace( e[ n ] ) );
				return t
			},
			prepareContextData: function() {
				if ( !this.getAnalyticsTool() ) return void this.notify( "Adobe Analytics missing." );
				var e = this.settings;
				e.sdkVersion = _satellite.publishDate, this.getAnalyticsTool().$setVars( null, null, {
					contextData: this.adapt.toAnalytics( this.substituteVariables( e ) )
				} )
			},
			isHuman: function() {
				return this.human
			},
			onTabFocus: function() {},
			onPageLeave: function() {},
			onHumanDetectionChange: function() {},
			notify: function( e, t ) {
				S.notify( this.logPrefix + e, t )
			},
			beaconMethod: "plainBeacon",
			adapt: null,
			enableTracking: !1,
			logPrefix: "Nielsen: ",
			tabEverVisible: !1,
			human: !0,
			magicConst: 2e6
		} ), b.DataProvider = {}, b.DataProvider.Generic = function( e, t ) {
			this.key = e, this.valueFn = t
		}, S.extend( b.DataProvider.Generic.prototype, {
			isReady: function() {
				return !0
			},
			getValue: function() {
				return this.valueFn()
			},
			provide: function() {
				this.isReady() || b.prototype.notify( "Not yet ready to provide value for: " + this.key, 5 );
				var e = {};
				return e[ this.key ] = this.getValue(), e
			}
		} ), b.DataProvider.VisitorID = function( e, t, n ) {
			this.key = t || "uuid", this.visitorInstance = e, this.visitorInstance && ( this.visitorId = e.getMarketingCloudVisitorID( [ this, this._visitorIdCallback ] ) ), this.fallbackProvider = n || new b.UUID
		}, S.inherit( b.DataProvider.VisitorID, b.DataProvider.Generic ), S.extend( b.DataProvider.VisitorID.prototype, {
			isReady: function() {
				return null === this.visitorInstance ? !0 : !!this.visitorId
			},
			getValue: function() {
				return this.visitorId || this.fallbackProvider.get()
			},
			_visitorIdCallback: function( e ) {
				this.visitorId = e
			}
		} ), b.DataProvider.Aggregate = function() {
			this.providers = [];
			for ( var e = 0; e < arguments.length; e++ ) this.register( arguments[ e ] )
		}, S.extend( b.DataProvider.Aggregate.prototype, {
			register: function( e ) {
				this.providers.push( e )
			},
			isReady: function() {
				return S.every( this.providers, function( e ) {
					return e.isReady()
				} )
			},
			provide: function() {
				var e = {};
				return S.each( this.providers, function( t ) {
					S.extend( e, t.provide() )
				} ), e
			}
		} ), b.UUID = function() {}, S.extend( b.UUID.prototype, {
			generate: function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace( /[xy]/g, function( e ) {
					var t = 16 * Math.random() | 0,
						n = "x" == e ? t : 3 & t | 8;
					return n.toString( 16 )
				} )
			},
			get: function() {
				var e = S.readCookie( this.key( "uuid" ) );
				return e ? e : ( e = this.generate(), S.setCookie( this.key( "uuid" ), e ), e )
			},
			key: function( e ) {
				return "_dtm_nielsen_" + e
			}
		} ), b.DataAdapters = function() {}, S.extend( b.DataAdapters.prototype, {
			toNielsen: function( e ) {
				var t = ( new Date ).getTime(),
					i = {
						c6: "vc,",
						c13: "asid,",
						c15: "apn,",
						c27: "cln,",
						c32: "segA,",
						c33: "segB,",
						c34: "segC,",
						c35: "adrsid,",
						c29: "plid,",
						c30: "bldv,",
						c40: "adbid,"
					},
					a = {
						ci: e.clientId,
						c6: e.vcid,
						c13: e.appId,
						c15: e.appName,
						prv: 1,
						forward: 0,
						ad: 0,
						cr: e.duration || "V",
						rt: "text",
						st: "dcr",
						prd: "dcr",
						r: t,
						at: e.timer || "view",
						c16: e.sdkVersion,
						c27: e.timeOnPage || 0,
						c40: e.uuid,
						c35: e.rsid,
						ti: t,
						sup: 0,
						c32: e.segmentA,
						c33: e.segmentB,
						c34: e.segmentC,
						asn: e.assetName,
						c29: e.playerID,
						c30: e.buildVersion
					};
				for ( key in a )
					if ( a[ key ] !== n && null != a[ key ] && a[ key ] !== n && null != a && "" != a ) {
						var r = encodeURIComponent( a[ key ] );
						i.hasOwnProperty( key ) && r && ( r = i[ key ] + r ), a[ key ] = r
					}
				return this.filterObject( a )
			},
			toAnalytics: function( e ) {
				return this.filterObject( {
					"a.nielsen.clientid": e.clientId,
					"a.nielsen.vcid": e.vcid,
					"a.nielsen.appid": e.appId,
					"a.nielsen.appname": e.appName,
					"a.nielsen.accmethod": "0",
					"a.nielsen.ctype": "text",
					"a.nielsen.sega": e.segmentA,
					"a.nielsen.segb": e.segmentB,
					"a.nielsen.segc": e.segmentC,
					"a.nielsen.asset": e.assetName
				} )
			},
			convertToURI: function( e ) {
				if ( S.isObject( e ) === !1 ) return "";
				var t = [];
				for ( var n in e ) e.hasOwnProperty( n ) && t.push( n + "=" + e[ n ] );
				return t.join( "&" )
			},
			filterObject: function( e ) {
				for ( var t in e ) !e.hasOwnProperty( t ) || null != e[ t ] && e[ t ] !== n || delete e[ t ];
				return e
			}
		} ), S.availableTools.nielsen = b, S.inherit( y, S.BaseTool ), S.extend( y.prototype, {
			name: "SC",
			endPLPhase: function( e ) {
				var t = this.settings.loadOn;
				e === t && this.initialize( e )
			},
			initialize: function( t ) {
				if ( !this._cancelToolInit )
					if ( this.settings.initVars = this.substituteVariables( this.settings.initVars, {
							type: t
						} ), this.settings.initTool !== !1 ) {
						var n = this.settings.sCodeURL || S.basePath() + "s_code.js";
						"object" == typeof n && ( n = "https:" === e.location.protocol ? n.https : n.http ), n.match( /^https?:/ ) || ( n = S.basePath() + n ), this.settings.initVars && this.$setVars( null, null, this.settings.initVars ), S.loadScript( n, S.bind( this.onSCodeLoaded, this ) ), this.initializing = !0
					} else this.initializing = !0, this.pollForSC()
			},
			getS: function( t, n ) {
				var i = n && n.hostname || e.location.hostname,
					a = this.concatWithToolVarBindings( n && n.setVars || this.varBindings ),
					r = n && n.addEvent || this.events,
					o = this.getAccount( i ),
					s = e.s_gi;
				if ( !s ) return null;
				if ( this.isValidSCInstance( t ) || ( t = null ), !o && !t ) return S.notify( "Adobe Analytics: tracker not initialized because account was not found", 1 ), null;
				var t = t || s( o ),
					c = "D" + S.appVersion;
				"undefined" != typeof t.tagContainerMarker ? t.tagContainerMarker = c : "string" == typeof t.version && t.version.substring( t.version.length - 5 ) !== "-" + c && ( t.version += "-" + c ), t.sa && this.settings.skipSetAccount !== !0 && this.settings.initTool !== !1 && t.sa( this.settings.account ), this.applyVarBindingsOnTracker( t, a ), r.length > 0 && ( t.events = r.join( "," ) );
				var u = S.getVisitorId();
				return u && ( t.visitor = S.getVisitorId() ), t
			},
			onSCodeLoaded: function( e ) {
				this.initialized = !0, this.initializing = !1;
				var t = [ "Adobe Analytics: loaded", e ? " (manual)" : "", "." ];
				S.notify( t.join( "" ), 1 ), S.fireEvent( this.id + ".load", this.getS() ), e || ( this.flushQueueExceptTrackLink(), this.sendBeacon() ), this.flushQueue()
			},
			getAccount: function( t ) {
				return e.s_account ? e.s_account : t && this.settings.accountByHost ? this.settings.accountByHost[ t ] || this.settings.account : this.settings.account
			},
			getTrackingServer: function() {
				var t = this,
					n = t.getS();
				if ( n ) {
					if ( n.ssl && n.trackingServerSecure ) return n.trackingServerSecure;
					if ( n.trackingServer ) return n.trackingServer
				}
				var i = t.getAccount( e.location.hostname );
				if ( !i ) return null;
				var a, r, o, s = "",
					c = n && n.dc;
				return a = i, r = a.indexOf( "," ), r >= 0 && ( a = a.gb( 0, r ) ), a = a.replace( /[^A-Za-z0-9]/g, "" ), s || ( s = "2o7.net" ), c = c ? ( "" + c ).toLowerCase() : "d1", "2o7.net" == s && ( "d1" == c ? c = "112" : "d2" == c && ( c = "122" ), o = "" ), r = a + "." + c + "." + o + s
			},
			sendBeacon: function() {
				var t = this.getS( e[ this.settings.renameS || "s" ] );
				return t ? this.settings.customInit && this.settings.customInit( t ) === !1 ? void S.notify( "Adobe Analytics: custom init suppressed beacon", 1 ) : ( this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker( t, this.varBindings ), this.executeCustomSetupFuns( t ), t.t(), this.clearVarBindings(), this.clearCustomSetup(), void S.notify( "Adobe Analytics: tracked page view", 1 ) ) : void S.notify( "Adobe Analytics: page code not loaded", 1 )
			},
			pollForSC: function() {
				S.poll( S.bind( function() {
					return "function" == typeof e.s_gi ? ( this.onSCodeLoaded( !0 ), !0 ) : void 0
				}, this ) )
			},
			flushQueueExceptTrackLink: function() {
				if ( this.pending ) {
					for ( var e = [], t = 0; t < this.pending.length; t++ ) {
						var n = this.pending[ t ],
							i = n[ 0 ];
						"trackLink" === i.command ? e.push( n ) : this.triggerCommand.apply( this, n )
					}
					this.pending = e
				}
			},
			isQueueAvailable: function() {
				return !this.initialized
			},
			substituteVariables: function( e, t ) {
				var n = {};
				for ( var i in e )
					if ( e.hasOwnProperty( i ) ) {
						var a = e[ i ];
						n[ i ] = S.replace( a, location, t )
					}
				return n
			},
			$setVars: function( e, t, n ) {
				for ( var i in n )
					if ( n.hasOwnProperty( i ) ) {
						var a = n[ i ];
						"function" == typeof a && ( a = a() ), this.varBindings[ i ] = a
					}
				S.notify( "Adobe Analytics: set variables.", 2 )
			},
			$customSetup: function( e, t, n ) {
				this.customSetupFuns.push( function( i ) {
					n.call( e, t, i )
				} )
			},
			isValidSCInstance: function( e ) {
				return !!e && "function" == typeof e.t && "function" == typeof e.tl
			},
			concatWithToolVarBindings: function( e ) {
				var t = this.settings.initVars || {};
				return S.map( [ "trackingServer", "trackingServerSecure" ], function( n ) {
					t[ n ] && !e[ n ] && ( e[ n ] = t[ n ] )
				} ), e
			},
			applyVarBindingsOnTracker: function( e, t ) {
				for ( var n in t ) t.hasOwnProperty( n ) && ( e[ n ] = t[ n ] )
			},
			clearVarBindings: function() {
				this.varBindings = {}
			},
			clearCustomSetup: function() {
				this.customSetupFuns = []
			},
			executeCustomSetupFuns: function( t ) {
				S.each( this.customSetupFuns, function( n ) {
					n.call( e, t )
				} )
			},
			$trackLink: function( e, t, n ) {
				n = n || {};
				var i = n.type,
					a = n.linkName;
				!a && e && e.nodeName && "a" === e.nodeName.toLowerCase() && ( a = e.innerHTML ), a || ( a = "link clicked" );
				var r = n && n.setVars,
					o = n && n.addEvent || [],
					s = this.getS( null, {
						setVars: r,
						addEvent: o
					} );
				if ( !s ) return void S.notify( "Adobe Analytics: page code not loaded", 1 );
				var c = s.linkTrackVars,
					u = s.linkTrackEvents,
					l = this.definedVarNames( r );
				n && n.customSetup && n.customSetup.call( e, t, s ), o.length > 0 && l.push( "events" ), s.products && l.push( "products" ), l = this.mergeTrackLinkVars( s.linkTrackVars, l ), o = this.mergeTrackLinkVars( s.linkTrackEvents, o ), s.linkTrackVars = this.getCustomLinkVarsList( l );
				var d = S.map( o, function( e ) {
					return e.split( ":" )[ 0 ]
				} );
				s.linkTrackEvents = this.getCustomLinkVarsList( d ), s.tl( !0, i || "o", a ), S.notify( [ "Adobe Analytics: tracked link ", "using: linkTrackVars=", S.stringify( s.linkTrackVars ), "; linkTrackEvents=", S.stringify( s.linkTrackEvents ) ].join( "" ), 1 ), s.linkTrackVars = c, s.linkTrackEvents = u
			},
			mergeTrackLinkVars: function( e, t ) {
				return e && ( t = e.split( "," ).concat( t ) ), t
			},
			getCustomLinkVarsList: function( e ) {
				var t = S.indexOf( e, "None" );
				return t > -1 && e.length > 1 && e.splice( t, 1 ), e.join( "," )
			},
			definedVarNames: function( e ) {
				e = e || this.varBindings;
				var t = [];
				for ( var n in e ) e.hasOwnProperty( n ) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test( n ) && t.push( n );
				return t
			},
			$trackPageView: function( e, t, n ) {
				var i = n && n.setVars,
					a = n && n.addEvent || [],
					r = this.getS( null, {
						setVars: i,
						addEvent: a
					} );
				return r ? ( r.linkTrackVars = "", r.linkTrackEvents = "", this.executeCustomSetupFuns( r ), n && n.customSetup && n.customSetup.call( e, t, r ), r.t(), this.clearVarBindings(), this.clearCustomSetup(), void S.notify( "Adobe Analytics: tracked page view", 1 ) ) : void S.notify( "Adobe Analytics: page code not loaded", 1 )
			},
			$postTransaction: function( t, n, i ) {
				var a = S.data.transaction = e[ i ],
					r = this.varBindings,
					o = this.settings.fieldVarMapping;
				if ( S.each( a.items, function( e ) {
						this.products.push( e )
					}, this ), r.products = S.map( this.products, function( e ) {
						var t = [];
						if ( o && o.item )
							for ( var n in o.item )
								if ( o.item.hasOwnProperty( n ) ) {
									var i = o.item[ n ];
									t.push( i + "=" + e[ n ] ), "event" === i.substring( 0, 5 ) && this.events.push( i )
								}
						var a = [ "", e.product, e.quantity, e.unitPrice * e.quantity ];
						return t.length > 0 && a.push( t.join( "|" ) ), a.join( ";" )
					}, this ).join( "," ), o && o.transaction ) {
					var s = [];
					for ( var c in o.transaction )
						if ( o.transaction.hasOwnProperty( c ) ) {
							var i = o.transaction[ c ];
							s.push( i + "=" + a[ c ] ), "event" === i.substring( 0, 5 ) && this.events.push( i )
						}
					r.products.length > 0 && ( r.products += "," ), r.products += ";;;;" + s.join( "|" )
				}
			},
			$addEvent: function( e, t ) {
				for ( var n = 2, i = arguments.length; i > n; n++ ) this.events.push( arguments[ n ] )
			},
			$addProduct: function( e, t ) {
				for ( var n = 2, i = arguments.length; i > n; n++ ) this.products.push( arguments[ n ] )
			}
		} ), S.availableTools.sc = y, S.inherit( x, S.BaseTool ), S.extend( x.prototype, {
			name: "tnt",
			endPLPhase: function( e ) {
				"aftertoolinit" === e && this.initialize()
			},
			initialize: function() {
				S.notify( "Test & Target: Initializing", 1 ), this.initializeTargetPageParams(), this.load()
			},
			initializeTargetPageParams: function() {
				e.targetPageParams && this.updateTargetPageParams( this.parseTargetPageParamsResult( e.targetPageParams() ) ), this.updateTargetPageParams( this.settings.pageParams ), this.setTargetPageParamsFunction()
			},
			load: function() {
				var e = this.getMboxURL( this.settings.mboxURL );
				this.settings.initTool !== !1 ? this.settings.loadSync ? ( S.loadScriptSync( e ), this.onScriptLoaded() ) : ( S.loadScript( e, S.bind( this.onScriptLoaded, this ) ), this.initializing = !0 ) : this.initialized = !0
			},
			getMboxURL: function( t ) {
				var n = t;
				return S.isObject( t ) && ( n = "https:" === e.location.protocol ? t.https : t.http ), n.match( /^https?:/ ) ? n : S.basePath() + n
			},
			onScriptLoaded: function() {
				S.notify( "Test & Target: loaded.", 1 ), this.flushQueue(), this.initialized = !0, this.initializing = !1
			},
			$addMbox: function( e, t, n ) {
				var i = n.mboxGoesAround,
					a = i + "{visibility: hidden;}",
					r = this.appendStyle( a );
				i in this.styleElements || ( this.styleElements[ i ] = r ), this.initialized ? this.$addMBoxStep2( null, null, n ) : this.initializing && this.queueCommand( {
					command: "addMBoxStep2",
					arguments: [ n ]
				}, e, t )
			},
			$addMBoxStep2: function( n, i, a ) {
				var r = this.generateID(),
					o = this;
				S.addEventHandler( e, "load", S.bind( function() {
					S.cssQuery( a.mboxGoesAround, function( n ) {
						var i = n[ 0 ];
						if ( i ) {
							var s = t.createElement( "div" );
							s.id = r, i.parentNode.replaceChild( s, i ), s.appendChild( i ), e.mboxDefine( r, a.mboxName );
							var c = [ a.mboxName ];
							a.arguments && ( c = c.concat( a.arguments ) ), e.mboxUpdate.apply( null, c ), o.reappearWhenCallComesBack( i, r, a.timeout, a )
						}
					} )
				}, this ) ), this.lastMboxID = r
			},
			$addTargetPageParams: function( e, t, n ) {
				this.updateTargetPageParams( n )
			},
			generateID: function() {
				var e = "_sdsat_mbox_" + String( Math.random() ).substring( 2 ) + "_";
				return e
			},
			appendStyle: function( e ) {
				var n = t.getElementsByTagName( "head" )[ 0 ],
					i = t.createElement( "style" );
				return i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild( t.createTextNode( e ) ), n.appendChild( i ), i
			},
			reappearWhenCallComesBack: function( e, t, n, i ) {
				function a() {
					var e = r.styleElements[ i.mboxGoesAround ];
					e && ( e.parentNode.removeChild( e ), delete r.styleElements[ i.mboxGoesAround ] )
				}
				var r = this;
				S.cssQuery( 'script[src*="omtrdc.net"]', function( e ) {
					var t = e[ 0 ];
					if ( t ) {
						S.scriptOnLoad( t.src, t, function() {
							S.notify( "Test & Target: request complete", 1 ), a(), clearTimeout( i )
						} );
						var i = setTimeout( function() {
							S.notify( "Test & Target: bailing after " + n + "ms", 1 ), a()
						}, n )
					} else S.notify( "Test & Target: failed to find T&T ajax call, bailing", 1 ), a()
				} )
			},
			updateTargetPageParams: function( e ) {
				var t = {};
				for ( var n in e ) e.hasOwnProperty( n ) && ( t[ S.replace( n ) ] = S.replace( e[ n ] ) );
				S.extend( this.targetPageParamsStore, t )
			},
			getTargetPageParams: function() {
				return this.targetPageParamsStore
			},
			setTargetPageParamsFunction: function() {
				e.targetPageParams = S.bind( this.getTargetPageParams, this )
			},
			parseTargetPageParamsResult: function( e ) {
				var t = e;
				return S.isArray( e ) && ( e = e.join( "&" ) ), S.isString( e ) && ( t = S.parseQueryParams( e ) ), t
			}
		} ), S.availableTools.tnt = x, S.extend( _.prototype, {
			getInstance: function() {
				return this.instance
			},
			initialize: function() {
				var e, t = this.settings;
				S.notify( "Visitor ID: Initializing tool", 1 ), e = this.createInstance( t.mcOrgId, t.initVars ), null !== e && ( t.customerIDs && this.applyCustomerIDs( e, t.customerIDs ), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e )
			},
			createInstance: function( e, t ) {
				if ( !S.isString( e ) ) return S.notify( 'Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4 ), null;
				S.notify( 'Visitor ID: Create instance using mcOrgId: "' + e + '"', 1 ), t = this.parseValues( t );
				var n = Visitor.getInstance( e, t );
				return S.notify( "Visitor ID: Set variables: " + S.stringify( t ), 1 ), n
			},
			applyCustomerIDs: function( e, t ) {
				var n = this.parseIds( t );
				e.setCustomerIDs( n ), S.notify( "Visitor ID: Set Customer IDs: " + S.stringify( n ), 1 )
			},
			parseValues: function( e ) {
				if ( S.isObject( e ) === !1 ) return {};
				var t = {};
				for ( var n in e ) e.hasOwnProperty( n ) && ( t[ n ] = S.replace( e[ n ] ) );
				return t
			},
			parseIds: function( e ) {
				var t = {};
				if ( S.isObject( e ) === !1 ) return {};
				for ( var n in e )
					if ( e.hasOwnProperty( n ) ) {
						var i = S.replace( e[ n ].id );
						i !== e[ n ].id && i && ( t[ n ] = {}, t[ n ].id = i, t[ n ].authState = Visitor.AuthState[ e[ n ].authState ] )
					}
				return t
			}
		} ), S.availableTools.visitor_id = _, _satellite.init( {
			tools: {
				"3ad828b1052a4246e4e37f52e12ec7b3": {
					engine: "sc",
					loadOn: "pagebottom",
					account: "tsg2resglobal",
					euCookie: !1,
					sCodeURL: {
						http: "",
						https: ""
					},
					renameS: "s",
					initVars: {
						trackInlineStats: !0,
						trackDownloadLinks: !0,
						linkDownloadFileTypes: "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
						trackExternalLinks: !0,
						linkLeaveQueryString: !1,
						dynamicVariablePrefix: "D="
					},
					skipSetAccount: !0,
					initTool: !1,
					customInit: function( e ) {
						return !1
					}
				},
				a4f955abcf66111fe7d1196686445c9c036effe1: {
					engine: "tnt",
					mboxURL: "a011e94b6ba81cdcfdf24acdb480b5e4204c4dea/mbox-contents-a4f955abcf66111fe7d1196686445c9c036effe1.js",
					loadSync: !0,
					pageParams: {}
				},
				"41c06251c72a92cf380ddf0be1a782150637247c": {
					engine: "visitor_id",
					loadOn: "pagetop",
					name: "VisitorID",
					mcOrgId: "5BB1123F5245AE4E0A490D45@AdobeOrg",
					autoRequest: !0,
					initVars: {
						trackingServer: "metric.timewarnercable.com",
						trackingServerSecure: "metrics.timewarnercable.com",
						marketingCloudServer: "twc.demdex.net",
						marketingCloudServerSecure: "twc.demdex.net"
					}
				}
			},
			pageLoadRules: [ {
				name: "All Pages - Bottom",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-54d3b2126430330016d80500.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					domains: [ /timewarnercable\.com$/i ]
				},
				conditions: [ function( e, n ) {
					if ( gcl = "undefined" == typeof _satellite.getVar( "gclid - url" ) ? "" : _satellite.getVar( "gclid - url" ), gcl.search( /(^(?!\*)[a-zA-Z0-9\-_]+)$/ ) > -1 ) {
						var i = new Date;
						i.setTime( i.getTime() + 1296e6 );
						var a = "expires=" + i.toUTCString();
						t.cookie = "twc_gclid=" + gcl + "; path=/;" + a + ";domain=timewarnercable.com", t.cookie = "twc_marchex_wins=gclid; path=/;" + a + ";domain=timewarnercable.com"
					}
					if ( vsref = "undefined" == typeof _satellite.getVar( "_vsrefdom - url" ) ? "" : _satellite.getVar( "_vsrefdom - url" ), "" != vsref ) {
						var i = new Date;
						i.setTime( i.getTime() + 1296e6 );
						var a = "expires=" + i.toUTCString();
						t.cookie = "twc_vsrefdom=" + vsref + "; path=/;" + a + ";domain=timewarnercable.com", t.cookie = "twc_marchex_wins=display; path=/;" + a + ";domain=timewarnercable.com"
					}
					if ( cid = ( "undefined" == typeof _satellite.getVar( "cid - url" ) ? "" : _satellite.getVar( "cid - url" ) ).toLowerCase(), cid.search( /.+:.+:.+/ ) > -1 ) {
						var i = new Date;
						i.setTime( i.getTime() + 1296e6 );
						var a = "expires=" + i.toUTCString();
						t.cookie = "twc_cid=" + cid + "; path=/;" + a + ";domain=timewarnercable.com"
					}
					if ( cid.search( /em:/ ) > -1 && "" != vsref ) {
						var i = new Date;
						i.setTime( i.getTime() + 1296e6 );
						var a = "expires=" + i.toUTCString();
						t.cookie = "twc_marchex_wins=email; path=/;" + a + ";domain=timewarnercable.com"
					}
					return !0
				} ],
				event: "pagebottom"
			}, {
				name: "All Pages - Load",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-5571dad73432640014140f00.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					domains: [ /timewarnercable\.com$/i ]
				},
				event: "windowload"
			}, {
				name: "BuyFlow",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: ".footer-links",
						mboxName: "BuyFlow",
						arguments: [ "Page=%BF Page%", "PageCategory=%BF Page Category%", "Step=%BF step%", "VisitorExistingCustomer=%BF Visitor Existing Customer%", "VisitorID=%BF VisitorID%", "VisitorLoginState=%BF VisitorLoginState%", "VisitorType=%BF Visitor Type%", "profile.FinalOffer=%BF Final Offer%", "profile.Internet=%BF Internet%", "profile.PackageName=%BF Package Name%", "profile.Phone=%BF Phone%", "profile.TV=%BF tv%", "LOSTV=%OC mboxLOSTV%", "LOSInternet=%OC mboxLOSInternet%", "LOSPhone=%OC mboxLOSPhone%" ],
						timeout: "1500"
					} ]
				} ],
				scope: {
					URI: {
						include: [ "/residential/order/" ]
					}
				},
				conditions: [ function( t, n ) {
					return e.location.href.indexOf( "?new_services" ) > -1 ? !1 : !0
				} ],
				event: "pagetop"
			}, {
				name: "BuyFlow - new_services",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: ".bottom-spacer-2",
						mboxName: "BuyFlow",
						arguments: [ "Step=new_services", "VisitorType=ABF Visitor", "Page=abf > new-services" ],
						timeout: "1500"
					} ]
				} ],
				scope: {
					URI: {
						include: [ "/residential/order/" ]
					}
				},
				conditions: [ function( t, n ) {
					return e.location.href.indexOf( "?new_services" ) > -1 ? !0 : !1
				} ],
				event: "pagetop"
			}, {
				name: "Cablemovers",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-55ccaff73465620014001103.js",
							data: [ ";    display: inline-block;}.error #inject_results .inject_result_item {    margin-top: 0 !important;}.error\xa0#inject_results .results_content {    border-left: 0 !important;    padding-left: 0 !important;}.error #inject_results .results_content {    border-left: none !important;    padding-left: 0 !important;}@media (max-width: 768px) {    .error #ctam_widget_container {        width: 100", ";}/* Begin CableMover specific styling */.error #ctam_widget_container {    border: none;    background-color: transparent;    max-width: 100" ]
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /\/residential\/order/i ]
					}
				},
				event: "pagebottom"
			}, {
				name: "Chat - Omega Learn",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-54d3a2f362323900193d0500.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /en\//i ],
						exclude: [ /en\/residential-home\/specials\/ppcNE.html/i, /en\/support\/twc-my-move.html/i, /support/i, /about-us/i, /myservices/i, /myaccount/i, /intelligenthome/i, /en\/residential.html/i, /en\/tv\/tv-listings.html/i, / search.html/i, /chat-ui/i, /en\/specials/i, /en\/enjoy\/twctv-roku-interest.html/i ]
					},
					domains: [ /rr\.com$/i, /timewarnercable\.com$/i ]
				},
				conditions: [ function( t, n ) {
					return navigator.appVersion.indexOf( "Trident/" ) > -1 && e.location.href.indexOf( "plans-packages" ) > -1 ? !1 : !0
				}, function( e, t ) {
					return location.href.indexOf( "PPC:" ) > -1 && location.href.indexOf( "gclid" ) > -1 ? !1 : !0
				} ],
				event: "windowload"
			}, {
				name: "Chat - Omega Side btn",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-550b086d6130330019120500.js",
							data: [ ";right: 0px;height: 93px;width: 80px;z-index:9999}  }    @media (max-width: 768px) {#side-chat {position: fixed;  display: none; top: 50", ";right: 0px;height: 93px;width: 80px;z-index:9999}  }    @media (max-width: 768px) {#side-chat {position: fixed;top: 50", ";right: 0px;height: 93px;width: 80px;z-index:9999}  }    @media (max-width: 768px) {#side-chat {position: fixed;top: 50" ]
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /intelligenthome/i, /\/en\/tv\/channels-lineup.html/i, /residential\/order/i, /\/en\//i ],
						exclude: [ /\/en\/whats-new.html/i, /\/en\/why-choose-twc.html/i, /\/en\/residential.html/i, /about-us/i, /en\/specials/i, /en\/residential-home/i, /hp-lex/i, /customer-compliments.html/i, /en\/enjoy\/roku/i, /en\/discover-twc\/service\/easy-connect-kit.html/i ]
					}
				},
				conditions: [ function( e, t ) {
					return location.href.indexOf( "en/support" ) > -1 && -1 == location.href.indexOf( "cablecard.html" ) ? !1 : location.href.indexOf( "cablecard.html" ) > -1 ? !0 : !0
				} ],
				event: "pagebottom"
			}, {
				name: "Chat BuyFlow ",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-54c269fe6262320015220300.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /\/residential\/order/i ]
					}
				},
				event: "windowload"
			}, {
				name: "Chat Predictive - Support",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-54de40df65616200162b0100.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /\/support\//i ],
						exclude: [ /contact-us.html/i, /intelligenthome/i, /en\/support\/twc-my-move.html/i ]
					}
				},
				conditions: [ function( e, t ) {
					return location.href.indexOf( "cic721" ) > -1 ? !1 : !0
				} ],
				event: "pagebottom"
			}, {
				name: "Chat Support Maxx",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-54d3bc576431626e752c0100.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /en\/enjoy\/better-twc\/support.html/i ]
					}
				},
				event: "pagebottom"
			}, {
				name: "Chat: Intelligent Home ",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-568ab4c964746d67920050cf.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /en\/intelligenthome/i ]
					}
				},
				event: "pagebottom"
			}, {
				name: "Clicktale",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadBlockingScript",
					arguments: [ {
						sequential: !0,
						scripts: [ {
							src: "satellite-53ff3e824d65ea279d00015e.js",
							data: []
						} ]
					} ]
				} ],
				event: "pagetop"
			}, {
				name: "Foresee",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-54d3b80f3636390016290500.js",
							data: [ ")/)[0]*(/", ")/)[0]*(/", '16).toString(16);\n7<c.length&&(c=c.substr(c.length-7));return c+"-"+a.length+d.substr(d.length-6)+"-xxxx-xxxx-xxxxx".replace(/[xy]/g,function(a){var c=16*Math.random()|0;return("x"==a?c:c&3|8).toString(16)})};n.wa=function(a){return 0+Math.random()*(a-0)};n.Ff=function(a,c){var b=k.document.createElement("a");b.href=k.location.href;var e=b.hostname,f=b.protocol;b.href=a;var m=b.hostname||e,g=0==b.protocol.indexOf("http")?b.protocol:f;b.href=c;f=0==b.protocol.indexOf("http")?b.protocol:f;return m.toLowerCase()==(b.hostname||\ne).toLowerCase()&&g.toLowerCase()==f.toLowerCase()};n.U=function(a,c,d){var e="";if(a)for(var f in a)e+=(0!=e.length?"&":"")+(c?c+"["+f+"]":f)+"="+(d?a[f]:b.jb(a[f]));return e};n.hash=function(a){a=a.split("_");return 3*a[0]+1357+""+(9*a[1]+58)};n.Ie=function(a){var c=0,b="";if(0==a.length)return c;for(x=0;x<a.length;x++)b=a.charCodeAt(x),c=(c<<5)-c+b,c&=c;return c};n.vb=function(a){a=a.replace(/[\\[]/,"\\\\[").replace(/[\\]]/,"\\\\]");a=RegExp("[\\\\?&+]"+a+"=([^&#]*)").exec(b.N());return null==a?!1:a[1]};\nn.la=function(a,c,b){return a[c]||a[b]};n.Yb=function(a){a=a.replace(/[^0-9]/g,"");return 10==a.length||"1"==a[0]&&11==a.length};n.Xb=function(a){return null!=a.match(/^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,6})+$/)};n.preventDefault=function(a){a&&a.preventDefault?a.preventDefault():k.event&&k.event.returnValue?k.eventReturnValue=!1:a.returnValue=!1};n.$f=function(){var a=window.screen;return b.n(a)&&b.n(a.width)&&"number"==typeof a.width?{Of:a.width,Ee:a.height}:{Of:0,Ee:0}};\nn.te=function(a){for(var c=0,d,e=0;e<a.length&&b.n(a[e].c)&&b.n(a[e].p);e++)c+=a[e].p;d=n.wa(c);for(e=c=0;e<a.length&&b.n(a[e].c)&&b.n(a[e].p);e++)if(c+=a[e].p,0<d&&d<=c)return a[e].c;return null};for(var fa={},Y=["onload","onerror","onabort"],x=0;x<Y.length;x++)fa[Y[x]]=function(){this.ub(0==arguments.callee.Je?1:0);this.zb=!1},fa[Y[x]].Je=x;t.R=function(a,c){this.options=b.B({},a);this.zb=!1;this.event=c;this.uc=0;return this};t.R.prototype.ub=function(a,c){if(this.zb)switch(this.zb=!1,this.status=\na,a){case 1:(this.options.onSuccess||b.ca)(c);break;case 0:this.event?this.Hf():(this.options.onFailure||b.ca)(c);break;case -1:(this.options.onError||b.ca)(c)}};t.R.prototype.Hf=function(){if(3>this.uc)this.Ec();else this.onFailure()};t.R.prototype.Ic=function(a,c){this.zb=!0;var d=n.U(b.B(a,{uid:b.now()})),d=b.Fa()+"//"+this.options.host+this.options.path+this.options.url+"?"+d;c=b.B({},fa,c);for(var e=new Image,f=0;f<Y.length;f++){var m=Y[f];e[m]=function(){var a=arguments.callee;a.Ra.onload=a.Ra.onerror=\na.Ra.onabort=null;a.ye.call(a.self,a.Ra);a.Ra=null};e[m].ye=c[m];e[m].Ra=e;e[m].self=this}e.src=d};t.R.prototype.send=function(a){this.Nf=a;this.Ec()};t.R.prototype.Ja=function(){var a=b.B(this.options.wb,{protocol:b.Fa()});this.Ic(a,{onload:function(a){this.options.ea&&a.width!=this.options.ea?this.ub(0,a.width):this.ub(1,a.width)},onerror:function(){this.ub(-1)}})};t.R.prototype.Ec=function(){var a;this.uc++;a=b.B({event:this.event,ver:this.uc},this.Nf,a);this.Ic(a)};b.f.Ld={};var q=b.f.Ld;q.aa=\nfunction(a,c){var d,e,f;b.n(a.length)||(a=[a]);d=0;for(e=a.length;d<e;d++){f=a[d];var m=f.className||"";RegExp("\\\\b"+c+"\\\\b").test(m)||(f.className=(""==m?"":m+" ")+c)}};q.da=function(a,c){var d,e,f;b.n(a.length)||(a=[a]);d=0;for(e=a.length;d<e;d++)f=a[d],f.className&&(f.className=f.className.replace(RegExp("(\\\\s|^)"+c+"(\\\\s|$)")," ").replace(/^\\s+|\\s+$/g,""))};q.qe=function(a,c){if(a){b.n(a.length)||(a=[a]);for(var d=0;d<a.length;d++)for(var e in c)e&&(-1=="zIndex".indexOf(e)&&("number"==typeof c[e]&&\n"opacity"!=e)&&(c[e]+="px"),a[d].style[e]=c[e])}return a};q.Uf=function(a,c){if(a){b.n(a.length)||(a=[a]);for(var d=0;d<a.length;d++)for(var e in c)a[d].setAttribute(e,c[e])}return a};var M=q.qe;q.outerHTML=function(a){if(b.n(a.outerHTML))return a.outerHTML;var c={TEXTAREA:!0},d={HR:!0,BR:!0,IMG:!0,INPUT:!0},e=[],f="",m=a.nodeName;switch(a.nodeType){case 1:f=f+"<"+m.toLowerCase();if(c[m])switch(m){case "TEXTAREA":for(c=0;c<a.attributes.length;c++)if("value"!=a.attributes[c].nodeName.toLowerCase())f+=\n" "+a.attributes[c].nodeName.toUpperCase()+\'="\'+a.attributes[c].nodeValue+\'"\';else var g=a.attributes[c].nodeValue;f+=">";f+=g;f+="</"+m+">"}else{for(c=a.attributes.length-1;0<=c;c--)g=a.attributes[c].nodeName.toLowerCase(),-1<"style,class,id".indexOf(g.toLowerCase())&&(f+=" "+g+\'="\'+a.attributes[c].nodeValue+\'"\');f+=">";d[m]||(f+=a.innerHTML,f+="</"+m.toLowerCase()+">")}break;case 3:f+=a.nodeValue;break;case 8:f+="\\x3c!--"+a.nodeValue+"--\\x3e"}e.push(f);return e.join("")};q.xd=function(a){a=q.ja.La("a, input[type=text], textarea, button, input[type=radio], select, *[tabIndex]",\na).sort(function(a,c){return parseInt(a.tabIndex)>parseInt(c.tabIndex)});for(var c=0;c<a.length;c++){var b=a[c];n.F.Ib(b,"keydown");n.F.Na(b,"keydown",function(a){return function(c){if(9===c.keyCode)for(var b=0;b<a.length;b++)if(a[b]===c.target){c.preventDefault?c.preventDefault():c.returnValue=!1;var d=b;if(c.shiftKey){do d=0==d?a.length-1:d-1;while((0>=a[d].offsetLeft||0>a[d].tabIndex)&&d!=b)}else{do d=(d+1)' ]
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /residential\/order/i, /en\//i ],
						exclude: [ /en\/business-home/i ]
					}
				},
				event: "pagebottom"
			}, {
				name: "HP Clicktale",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-55b6494f39313123710000fe.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /\/en\/residential.html/i, /\/en\/enjoy\/prototypes\/hp-lex-features.html/i ]
					}
				},
				event: "pagebottom"
			}, {
				name: "Opinion Labs: Buyflow ",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "writeHTML",
					arguments: [ {
						html: '\n<div id="oo_container" style="display: none">\n    <div id="oo_invitation_prompt" role="dialog" aria-describedby="oo_invite_message">\n        <div id="oo_company_logo"></div>\n        <div id="oo_invite_content">\n            <p id="oo_invite_message">After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p>\n            <p class="prompt_button"><a href="#" id="oo_launch_prompt">Yes<span class="screen_reader">This will open a new window</span></a></p>\n            <p class="prompt_button"><a href="#" id="oo_no_thanks">No Thanks</a></p>\n            <p id="ol_brand_logo"><a href="http://www.opinionlab.com/company/" target="_blank" aria-label="Powered by OpinionLab. This will open a new window"></a></p>\n        </div>\n        <a id="oo_close_prompt" href="#" aria-label="Close dialog"><div class="screen_reader">Close dialog</div><span aria-hidden="true">&#10006;</span></a>\n    </div>\n</div>\n<!-- END: OnlineOpinion v5.9.0 -->\n'
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-555e257e6336300014d80500.js",
							data: [ " 20px 10", " 20px 10", " 80px no-repeat; display: block; height: 1000", ' auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";\ncssText += "\\n#oo_invitation_prompt #oo_company_logo { width: 100', ", 0", ", 0", ', from(#eeeeee), to(#ffffff)); background-image: -webkit-linear-gradient(left, #eeeeee, #ffffff); background-image: -moz-linear-gradient(left, #eeeeee, #ffffff); background-image: -ms-linear-gradient(left, #eeeeee, #ffffff); background-image: -o-linear-gradient(left, #eeeeee, #ffffff); background-image: linear-gradient(left, #eeeeee, #ffffff); }";\ncssText += "\\n.oo_tab_left span { right: 6px; }";\ncssText += "\\n.oo_tab_left div { background-position: 6px -10px; }";\ncssText += "\\n.oo_tab_left:hover { left: -5px; }";\n\ncssText += "\\n.oo_tab_right { right: -13px; border-radius: 9px 0px 0px 9px; -moz-border-radius: 9px 0px 0px 9px; -webkit-border-radius: 9px 0px 0px 9px; transition: right .5s; -moz-transition: right .5s; -webkit-transition: right .5s; -o-transition: right .5s; background-image: -webkit-gradient(linear, 0', ', from(#ffffff), to(#eeeeee)); background-image: -webkit-linear-gradient(left, #ffffff, #eeeeee); background-image: -moz-linear-gradient(left, #ffffff, #eeeeee); background-image: -ms-linear-gradient(left, #ffffff, #eeeeee); background-image: -o-linear-gradient(left, #ffffff, #eeeeee); background-image: linear-gradient(left, #ffffff, #eeeeee); }";\ncssText += "\\n.oo_tab_right span { left: 7px; }";\ncssText += "\\n.oo_tab_right div { background-position: -6px -10px; }";\ncssText += "\\n.oo_tab_right:hover { right: -5px; }";\n\ncssText += "\\n#oo_tab_1 { background-color: black; border: 1px solid #ffffff; display: block; position: fixed; top: 40', "4)*8)}d[c>>2]|=0x80<<(24-(c", '; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content a { cursor: pointer; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content a:focus { outline: 3px solid #51ace9; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content p { color: black; font: 1em/1.5em \'HelveticaNeue-Medium\', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; text-align: center; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content p#oo_waypoint_message { font-size: 1.2em; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon { cursor: pointer; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; color: white; margin-bottom: 20px; background-color: #cb352d; text-align: center; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon.last { margin-bottom: 0; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo { border-top: 1px solid #ccc; line-height: 1.5em; margin: 10px 0 0 0; padding: 20px 0 0 0; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo img { height: 25px; width: 146px; border: 0px; }";\ncssText += "\\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo a { display: block; height: 25px; }";\ncssText += "\\n#oo_waypoint_prompt #oo_close_prompt { position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";\ncssText += "\\n#oo_waypoint_prompt #oo_close_prompt:focus { outline: none; }";\ncssText += "\\n#oo_waypoint_prompt #oo_close_prompt:focus span { outline: 3px solid #51ace9; }";\ncssText += "\\n#oo_waypoint_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";\n\n/* Android, iPhone 6 ----------- */\ncssText += "\\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_waypoint_prompt { width: 90', "; height: 100", '; height: 120px; background: black; }";\ncssText += "\\n#oo_waypoint_prompt #oo_company_logo img { height: 100', "; height: 90", "; left: 0; top: 0; width: 100", "; max-width: 100", "; overflow-y: scroll; overflow-x: hidden; } #oo_invitation_prompt #oo_company_logo { height: 80px; } #oo_invitation_prompt #oo_invite_content { padding: 20px 10", "; padding: 30px 10", '; position: absolute; left: 0; top: 0; z-index: 1; }";\ncssText += "\\n.oo_cc_wrapper .iwrapper { background-color: white; margin: 0 auto; position: relative; width: 535px; z-index: 2; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); }";\ncssText += "\\n.oo_cc_wrapper iframe { position: relative; border: none; width: 100', '; top: 0; left: 0; z-index: 999999; }";\n\ncssText += "\\n#oo_waypoint_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5', "; width: 100", "; width: 100", "; width: 100", '; z-index: 999997; box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; } "; \ncssText += "\\n#oo_bar span.icon { background-image: url(" + bar_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";\ncssText += "\\n#oo_bar .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";\ncssText += "\\n#oo_bar:focus { outline: 3px solid #51ace9; }";\n\ncssText += "\\n.oo_bar { padding-bottom: 37px; }";\n\ncssText += "\\n#oo_tab { background-color: #ffffff; border: 1px solid #cccccc; display: block; position: fixed; top: 40', '; z-index: 999999; }";\ncssText += "\\n.oo_cc_wrapper .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";\ncssText += "\\n.oo_cc_wrapper span { width: 100', '; } #oo_invitation_prompt #oo_company_logo { height: 80px; } }";\n/* iPhone 5, 4 ----------- */\ncssText += "\\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt { width: 90', '; } #oo_invitation_prompt #oo_invite_content #ol_brand_logo { margin: 0 0 0 0; } }";\n/* iPhone 4 only ----------- */\ncssText += "\\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt #oo_close_prompt { right: -70px; } }";\n\n\ncssText += "\\n#oo_waypoint_container { position: fixed; height: 100', '; }";\ncssText += "\\n#oo_invitation_prompt #oo_invite_content { width: 80', '; }";\ncssText += "\\n#oo_tab.wcag img { border: none; outline: none; display: block; position: absolute; left: -6px; top: -10px; }";\ncssText += "\\n#oo_tab .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";\n\ncssText += "\\n.oo_tab_left { left: -13px; border-radius: 0px 9px 9px 0px; -moz-border-radius: 0px 9px 9px 0px; -webkit-border-radius: 0px 9px 9px 0px; transition: left .5s; -moz-transition: left .5s; -webkit-transition: left .5s; -o-transition: left .5s; background-image: -webkit-gradient(linear, 0' ]
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /residential\/order\/session/i ]
					}
				},
				event: "pagebottom"
			}, {
				name: "OpinionLabs: Omega",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-566edd9464746d57d200016a.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /\/en\//i ],
						exclude: [ /\/residential\/order/i ]
					}
				},
				event: "windowload"
			}, {
				name: "P&P Test",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-563b6c6664746d10c100481f.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /en\/plans-packages\/cable-internet.html/i ]
					}
				},
				conditions: [ function( e, t ) {
					return location.href.indexOf( "PPC:" ) > -1 && location.href.indexOf( "gclid" ) > -1 ? !0 : !1
				} ],
				event: "windowload"
			}, {
				name: "TWC Sandboxing",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "#myDiv",
						mboxName: "TestMbox",
						arguments: [],
						timeout: "1500"
					} ]
				} ],
				scope: {
					URI: {
						include: [ "123.html|456.html" ]
					}
				},
				event: "pagetop"
			}, {
				name: "Target: Gateway Page",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadBlockingScript",
					arguments: [ {
						sequential: !0,
						scripts: [ {
							src: "satellite-54e7a5b33766620016180200.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ "/residential/order" ],
						exclude: [ "/session/" ]
					}
				},
				event: "pagetop"
			}, {
				name: "VA Chat Contact Us",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-5582d25c643737444700047b.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /en\/support\/contact-us.html/i ]
					}
				},
				event: "windowload"
			}, {
				name: "twc ABF OrderConfirmation",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: ".footer-links",
						mboxName: "twc_orderConfirmation_abf",
						arguments: [ "orderId=%OC OrderId%", "orderTotal=%OC OrderTotal%", "LOB=%OC LOB%", "OneTimeTotal=%OC OneTimeTotal%", "PackageName=%OC PackageName%", "Pagename=%OC PageName%", "Step=%OC Step%", "productPurchasedId=%OC ProductPurchasedId%", "mboxPageValue=%OC PageValue%", "LOSTV=%OC mboxLOSTV%", "LOSInternet=%OC mboxLOSInternet%", "LOSPhone=%OC mboxLOSPhone%" ],
						timeout: "1500"
					} ]
				} ],
				scope: {
					URI: {
						include: [ /residential\/order\/session\//i ]
					}
				},
				conditions: [ function() {
					return _satellite.textMatch( _satellite.getVar( "OC PageName" ), / order confirmation/i )
				}, function() {
					return _satellite.textMatch( _satellite.getVar( "BF Visitor Type" ), /ABF Visitor/i )
				} ],
				event: "pagetop"
			}, {
				name: "twc EBF OrderConfirmation",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: ".footer-links",
						mboxName: "twc_orderConfirmation_ebf",
						arguments: [ "orderTotal=%OC OrderTotal%", "orderId=%OC OrderId%", "Step=%OC Step%", "Pagename=%OC PageName%", "PackageName=%OC PackageName%", "OneTimeTotal=%OC OneTimeTotal%", "LOB=%OC LOB%", "productPurchasedId=%OC ProductPurchasedId%", "mboxPageValue=%OC PageValue%", "LOSTV=%OC mboxLOSTV%", "LOSInternet=%OC mboxLOSInternet%", "LOSPhone=%OC mboxLOSPhone%" ],
						timeout: "1500"
					} ]
				} ],
				scope: {
					URI: {
						include: [ /residential\/order\/session\//i ]
					}
				},
				conditions: [ function() {
					return _satellite.textMatch( _satellite.getVar( "OC PageName" ), /order confirmation/i )
				}, function() {
					return _satellite.textMatch( _satellite.getVar( "BF Visitor Type" ), /EBF Visitor/i )
				} ],
				event: "pagetop"
			}, {
				name: "twc_homepage",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadBlockingScript",
					arguments: [ {
						sequential: !0,
						scripts: [ {
							src: "satellite-545283ec8ac04bb6d8000708.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ /en\/residential.html/i ]
					}
				},
				event: "pagetop"
			}, {
				name: "twc_internet",
				trigger: [ {
					engine: "tnt",
					command: "addMbox",
					arguments: [ {
						mboxGoesAround: "",
						mboxName: "",
						arguments: [],
						timeout: "1500"
					} ]
				}, {
					command: "loadBlockingScript",
					arguments: [ {
						sequential: !0,
						scripts: [ {
							src: "satellite-5452845c8ac04bb6d800070e.js",
							data: []
						} ]
					} ]
				} ],
				scope: {
					URI: {
						include: [ "en/internet/internet-service-plans.html", "en/plans-packages/internet/internet-service-plans.html" ]
					}
				},
				event: "pagetop"
			} ],
			rules: [ {
				name: "Feedback (not helpful)",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-560438fc37313100170009a9.js",
							data: []
						} ]
					} ]
				} ],
				conditions: [ function( e, n ) {
					for ( var i = t.getElementsByName( "YesNo" ), a = 0, r = i.length; r > a; a++ )
						if ( i[ a ].checked ) return "No" == i[ a ].value ? !0 : !1
				} ],
				selector: 'input[name="YesNo"]',
				event: "click",
				bubbleFireIfParent: !0,
				bubbleFireIfChildFired: !0,
				bubbleStop: !1
			} ],
			directCallRules: [ {
				name: "modem",
				trigger: [ {
					engine: "sc",
					command: "trackLink",
					arguments: [ {
						type: "o",
						linkName: "best buy modem",
						setVars: {
							eVar57: "bestbuymodem-click"
						}
					} ]
				} ]
			}, {
				name: "chatBtnClick",
				trigger: [ {
					engine: "sc",
					command: "trackLink",
					arguments: [ {
						type: "o",
						linkName: "twc chat btn click",
						setVars: {
							eVar59: "%s.pageName%",
							eVar6: "%Region%",
							eVar67: "anchored tab: %LP pageType%",
							eVar68: "%s.pageName% || %LP pageType%"
						},
						addEvent: [ "event77" ]
					} ]
				} ]
			}, {
				name: "ChatbtnShown",
				trigger: [ {
					engine: "sc",
					command: "trackLink",
					arguments: [ {
						type: "o",
						linkName: "twc chat btn shown",
						setVars: {
							eVar59: "%s.pageName%",
							eVar6: "%Region%",
							eVar67: "anchored tab: %LP pageType%",
							eVar68: "%s.pageName% || %LP pageType%"
						},
						addEvent: [ "event81" ]
					} ]
				} ]
			}, {
				name: "chatCode",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-56742dae64746d5bd3002e7e.js",
							data: []
						} ]
					} ]
				} ]
			}, {
				name: "chatCodeold",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-5696841b64746d1483009201.js",
							data: []
						} ]
					} ]
				} ]
			}, {
				name: "connectedAgent",
				trigger: [ {
					engine: "sc",
					command: "trackLink",
					arguments: [ {
						type: "o",
						linkName: "connecting to the agent",
						setVars: {
							eVar67: "%LP type%",
							eVar68: "%LP pageType%",
							prop1: "connected to an agent",
							prop19: "connected to chat agent: %LP pageType% : %LP type%"
						},
						addEvent: [ "event46" ]
					} ]
				} ]
			}, {
				name: "mobilechattrk",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-5696515764746d57d200924a.js",
							data: []
						} ]
					} ]
				} ]
			}, {
				name: "proactiveChatShown",
				trigger: [ {
					engine: "sc",
					command: "trackLink",
					arguments: [ {
						type: "o",
						linkName: "twc proactive chat pop up",
						setVars: {
							eVar59: "%s.pageName%",
							eVar6: "%Region%",
							eVar67: "pcp attached: %LP pageType%",
							eVar68: "%s.pageName% || %LP pageType%"
						},
						addEvent: [ "event81" ]
					} ]
				} ]
			}, {
				name: "contactuschat",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-551c34e76636320017120300.js",
							data: []
						} ]
					} ]
				} ]
			}, {
				name: "Marchex",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-55300fc56230387b697c0400.js",
							data: [ " 64 );\n            phone = phone/64;\n        }\n        return( b );\n    },\n\n    decode64: function( b ) {\n        var phone = 0;\n        var i = b.length;\n        while( 0 < i ) {\n            phone = 64*phone + this.base64.indexOf( b.charAt(--i) );\n        }\n        return( '+' + phone );\n    },\n\n    set_cookie: function(name, val, exp){\n        if (_vsnocookies) return;\n        var ck = name + \"=\" + this.esc( val ) + \"; path=/\";\n        if(exp){\n            var now = new Date();\n            exp = new Date( now.getTime() + (exp * 1000));\n            ck = ck + \"; expires=\" + exp.toGMTString();\n        }\n\n        document.cookie = ck;\n    },\n\n    get_specific_cookie: function(n) {\n        var s, e, c = document.cookie, n = n + '=';\n        while((s = c.indexOf(n)) > -1) {\n            if (s && c.charAt(s-1) !== ' ') continue;\n            e = c.indexOf(';', s);\n            if (e == -1) e = c.length;\n            break;\n        }\n        return e > -1 ? c.substring(s + n.length, e) : null;\n    },\n\n    get_cookie: function(n){\n        if (_vsnocookies) return null;\n        var v = this.get_specific_cookie(n);\n        return v == null ? null : this.unesc(v);\n    },\n\n    write_numdata: function(name, value, exp) {\n        this.numdata = [name,value,exp];\n    },\n\n    numdata_notfit: function(name) {\n        var i;\n        for(i=0; i<120;i++) _vsrkpd.set_cookie(name+'_'+i, '', -1);\n        var dom = _vsrkpd.script.replace(/[^\\/]+[\\/]+/,'').replace(/[\\/\\?].*/,'').split('.').reverse();\n        document.cookie = name + '_cz=1; path=/; domain=' + [dom[1],dom[0]].join('.');\n    },\n\n    flush_numdata: function() {\n        if (!this.numdata) return;\n        var name = this.numdata[0], value = this.numdata[1], exp = this.numdata[2];\n        var str = '', num = 0, i, now = null;\n        if (!value) return;\n        if (exp) exp = '; expires=' + ((new Date((new Date()).getTime() + (exp * 1000))).toGMTString());\n        else exp = '';\n        function write_cookie () {\n            var cklen = (document.cookie).length;\n            document.cookie = ((name + '_' + num) + '=' + str + '; path=/' + exp);\n            num++;\n            str = '';\n            if ((''+document.cookie).length < cklen) throw new Error('!');\n        }\n        function append_record (data) {\n            if (str.length + data.length > _vsrkpd.LEN_MAX_COOKIE) write_cookie();\n            if (str.length) str += '&';\n            str += data;\n        }\n        try {\n            _vsrkpd.set_cookie(name, '', -1);\n            for (i = 0; i < value.length; i++) {\n                var rec = '', k;\n                for (k in value[i]) {\n                    var v = value[i][k];\n                    if (rec.length) rec += ':';\n                    rec += [k, (k=='txtl'||k=='txtr') ? _vsrkpd.esc(v) : v].join(':');\n                }\n                append_record(rec);\n                if (num >= _vsrkpd.NUM_NUMDATA_COOKIES) break;\n            }\n            append_record(':');\n            write_cookie();\n        }catch(e){\n            _vsrkpd.numdata_notfit(name)\n        };\n    },\n\n    has_numdata: function (name) {\n        if (_vsnocookies) return false;\n        var c = document.cookie;\n        name += '_0=';\n        if (c.indexOf(name) == 0) return true;\n        if (c.indexOf('; '+name) > -1) return true;\n        return false;\n    },\n\n\n    read_numdata: function (name) {\n        var num = 0, data = [], cookie = document.cookie;\n        function add_recs (recs) {\n            var i;\n            if (!recs || !recs.length) return true;\n            for (i = 0; i < recs.length; i++) {\n                var j, rec = {}, kvps = recs[i].split(':');\n                if (!kvps || !kvps.length) return true;\n                for (j = 0; j < kvps.length; j += 2) {\n                    if (kvps[j].length == 0) return true;\n                    rec[kvps[j]] = kvps[j+1];\n                }\n                data.push(rec);\n            }\n            return false;\n        }\n        while(true) {\n            var cv = this.get_specific_cookie( name + '_' + (num++) );\n            if ( cv == null ) break;\n            if ( add_recs(cv.split('&')) ) break;\n        }\n        return data;\n    },\n\n    extract_keyword_from_url: function (kwparam, url) {\n        var query = url.replace(/.*\\?/,'').split(/[&;]/g);\n        if (query && query.length) {\n            var i;\n            for (i = 0; i < query.length; i++) {\n                var kvp = query[i].split('=',2);\n                if (kvp[0] === kwparam) {\n                    return decodeURIComponent(kvp[1]);\n                }\n            }\n        }\n        return '';\n    },\n\n    ckw_get_number_data: function () {\n        if (vs_account_id) _vsrkpd.d = this.read_numdata('rkpd_'+vs_account_id);\n    },\n\n    get_number_data: function() {\n        if( ! vs_account_id ){\n            // misconfigured. user did not set the account id\n            return ;\n        }\n        var n = 'rkpd_' + vs_account_id;\n        var has_numdata = this.has_numdata(n);\n\n        var ignck = _vsnocookies || document.URL.match(/\\?.*_vsignck/);\n\n        // get kw from cookie\n        var kw_cookie = 'kw_' + vs_account_id;\n        var prev_kw = this.get_cookie(kw_cookie);\n        var ckw_chk = 0;\n        var new_kw;\n        var cur_kw = _vskw || '';\n        var custom_kw_param = '';\n        if (typeof prev_kw === 'string' && prev_kw.match(/=/)) {\n            var kvp = prev_kw.split('=',2);\n            prev_kw = kvp[1];\n            custom_kw_param = kvp[0];\n        }\n        if (!cur_kw) {\n            if (custom_kw_param) {\n                var found_kw = this.extract_keyword_from_url(custom_kw_param, document.URL);\n                if (found_kw) {\n                    cur_kw = found_kw;\n                }\n                else {\n                    custom_kw_param = '';\n                }\n            } else {\n                ckw_chk = 1;\n                ignck = true;\n            }\n        }\n        else {\n            custom_kw_param = '';\n        }\n\n        // if we don't have a keyword cookie, or if the current keyword is\n        // different than the old one, set the cookie and re-fetch data\n        if (cur_kw) {\n            new_kw = cur_kw;\n            if ((!prev_kw) || (new_kw && new_kw != prev_kw)) {\n                has_numdata = false;\n                ignck = true;\n                if (custom_kw_param) new_kw = custom_kw_param + '=' + new_kw;\n                this.set_cookie(kw_cookie, new_kw, 86400 * 365);\n            }\n        }\n\n        this.send_report( '' );\n        if( has_numdata && !ignck ) {\n            this.ckw_get_number_data();\n            this.rewrite_document_onload();\n        } else {\n            // fetch data\n            var url = \"//adtrack.voicestar.com/euinc/getnumdata.js?\"\n                + this.arg( 'var', '_vsrkpd.d' )\n                + this.arg( 'acc', window.vs_account_id )\n                + this.arg( 'cky', n )\n                + this.arg( 'ign', ignck ? 1 : 0 )\n                + this.arg( 'ref', document.referrer )\n                + this.arg( 'url', document.URL )\n                + this.arg( 'ckw_chk', _vsnocookies ? false : has_numdata && ckw_chk );\n            if( typeof vs_ref_override != 'undefined' && vs_ref_override )\n                url += this.arg('ref_ovrd', vs_ref_override);\n            if( _vskw )\n                url += this.arg( 'keyword', _vskw )\n            else if( prev_kw && ! new_kw )\n                url += this.arg( 'keyword', prev_kw );\n\n            this.debug( \"no cookie[\" + n + \"*] (\" + !!_vsnocookies + \") fetch: \" + url);\n\n            var top = this.get_first_element_child( document.documentElement );\n            var script = this.new_element( 'SCRIPT',\n                [ 'type', 'text/javascript', 'src', url ] );\n\n            top.insertBefore( script, this.get_first_element_child( top ) );\n            this.rewrite_document_onload();\n        }\n    },\n\n    get_uk_country_code: function( e164 ) {\n        if( ! e164 ) return '';\n        var match = e164.match( /^(\\+44)/ );\n        return match ? match[1] : '';\n    },\n\n    add_local_prefix: function( number ) {\n        //default local prefix is 0\n        var local_prefix = '0';\n        return local_prefix+number;\n    },\n\n    new_element: function( type, attribs ) {\n        var elt = document.createElement(type);\n        while( attribs.length ) {\n            elt.setAttribute( attribs[0], attribs[1] );\n            attribs.splice( 0, 2 );\n        }\n        return elt;\n    },\n\n    ctn: { },\n    report_queue: [ ],\n    pixel_loaded: false,\n\n    track_ctn: function( phone ) {\n        var intl = '+1' + phone;\n        intl.replace( /^\\+1\\+/, '+' );\n        if( this.ctn[intl] ) return;\n        this.ctn[intl] = 1;\n    },\n\n    report_ctns: function() {\n        var phone, b = [];\n        for( phone in this.ctn ) {\n            b.push( this.encode64( phone ) );\n            if( 128 <= b.length ) {\n                this.queue_report( '?p=' + b.join(',') );\n                b = [];\n            }\n        }\n        if( b.length ) this.queue_report( '?p=' + b.join(',') );\n    },\n\n    queue_report: function( query ) {\n        if( ! this.pixel_loaded ) {\n            this.report_queue.push( query );\n        } else {\n            this.send_report( query );\n        }\n    },\n\n    pixel_onload: function() {\n        var i = _vsrkpd.report_queue.length;\n        _vsrkpd.pixel_loaded = true;\n        while( i-- ) {\n            _vsrkpd.send_report( _vsrkpd.report_queue[i] );\n        }\n        _vsrkpd.report_queue = [];\n    },\n\n    send_report: function( query ) {\n        var url = '//px.marchex.io/pixel.gif' + query;\n        var pixel = this.new_element( 'IMG',\n            [ 'style', 'display: none;', 'src', url ] );\n        if( ! query ) {     // Don't touch DOM before document loaded:\n            this.pixels = [pixel];  // Prevent garbage collection.\n            // Report CTNs after first of .25s or first pixel loaded:\n            pixel.setAttribute( 'onload', '_vsrkpd.pixel_onload()' );\n            window.setTimeout( this.pixel_onload, 250 );\n        } else {\n            this.pixels.push( pixel );\n        }\n    },\n\n    rewrite_number: function( m, rltext, strip ) {\n        // (, x, 111, ), 555, -, 1234, x\n\n        var numfull = '' + m[1] + m[2] + m[3] + m[4] + m[5] + m[6] + m[7] + m[8];\n\n        if( m[2] != '' || m[8] != '' ) {\n            this.debug( \"not a number: \" + numfull );\n            return null;\n        }\n\n        var num = '' + m[3] + m[5] + m[7];\n\n        var pd = this.d;\n        var rw, lk, na, nb, nc, rwtxt, rw_local;\n        var nr = pd.length;\n        var i;\n        for( i=0; i<nr; i++ ) {\n\n            //change e164 rewrite number to local format\n            var match_num = pd[i].repl;\n            var match_cc = this.get_uk_country_code(match_num);\n            if( match_cc ) match_num = this.add_local_prefix(\n                match_num.substring(match_cc.length) );\n            if( match_num == num || ! match_num ) {\n\n                if( pd[i].dont ) break;\n                rw = pd[i].num;\n\n                if( rw ) {\n                    this.track_ctn( rw );\n                    rw_local = rw;\n                    var rw_cc = this.get_uk_country_code(rw);\n                    if( rw_cc ) {\n                        rw_local = rw.substring(rw_cc.length);\n                        rw = this.add_local_prefix( rw_local );\n                    }\n                    if( ! strip ) {\n                        na = rw_local.substring( 0, 3 );\n                        if( rw_cc ) na = this.add_local_prefix( na );\n                        nb = rw_local.substring( 3, 6 );\n                        nc = rw_local.substring( 6 );\n                        rw = '' + m[1] + m[2] + na + m[4] + nb + m[6] + nc;\n                    }\n                    this.debug( \"rewriting: \" + numfull + \" => \" + rw );\n                } else {\n                    pd[i].ctcp = 1;   // no number, force ctc\n                    this.debug( \"rewriting: \" + numfull + \" => click-to-call\" );\n                }\n\n                rwtxt = '';\n                if( rltext && pd[i].txtl ) rwtxt += _vsrkpd.unesc(pd[i].txtl);\n                if( rw )                   rwtxt += rw;\n                if( rltext && pd[i].txtr ) rwtxt += _vsrkpd.unesc(pd[i].txtr);\n\n                if( ! rwtxt ) {\n                    // provide default text if none\n                    rwtxt = 'Click-To-Call';\n                }\n                if( pd[i].ctcp ) {\n                    lk = '//adtrack.voicestar.com/euinc/ctc/callformpop?cmp=' + pd[i].cmp;\n                }\n\n                return { text: rwtxt, href: lk, cmp: pd[i].cmp };\n            }\n        }\n\n        return null;\n    },\n\n    rewrite_anchor_node: function(node) {\n        var txt = node.href;\n        //\"tel:\".length = 4\n        var i = txt.indexOf('tel:')+ 4;\n        var num = txt.substring(i);\n        // match against e164 pattern first: +44808-123-4567\n        var cc_m = this.UK_intl_anchor_regexp.exec(num);\n        var cc = '';\n        var m;\n        if( cc_m ) {\n            cc = cc_m[1]; //+44\n            // put together the rest of digits and any characters (.-)\n            // and change to local international format: 0808-123-4567\n            num = cc_m[2] + '0' + cc_m[3] + cc_m[4] + cc_m[5] + cc_m[6] + cc_m[7] + cc_m[8] + cc_m[9];\n        }\n        // match against local international number format: 0808-123-4567\n        m = this.UK_intl_number_regexp.exec(num);\n        // match US numbers\n        if( ! m ) m = this.anchor_number_regexp.exec(num);\n        if( ! m ) return; //no match\n\n        var rw = this.rewrite_number( m, false, true ); // match, rltext, strip\n        if( ! rw ) return; // number unchanged\n\n        node.href = 'tel:' + cc + this.esc(rw.text);\n    },\n\n    rewrite_text_node: function(node){\n        var number = node.nodeValue;\n        var m = this.UK_intl_number_regexp.exec( number );\n\n        if( ! m ) m = this.number_regexp.exec( number );\n\n        if( ! m ) return;       // no match\n\n        var rw = this.rewrite_number( m, true, false ); // match, rltext, strip\n\n        // split into 3 nodes => text, number, text\n        var n2 = node.splitText( m.index );\n        var n3 = n2.splitText( m[0].length );\n\n        if( ! rw ) return;      // number unchanged\n\n        n2.nodeValue = rw.text;\n\n        if( ! rw.href ) return; // no ctc\n\n        var a = document.createElement('A');\n        node.parentNode.replaceChild(a, n2);\n        a.appendChild(n2);\n        a.href = '#';\n        a.className = 'vsctcnumber';\n        if( this.dbg ) {\n            a.title = 'cmp:' + rw.cmp;\n        } else {\n            a.title = 'Click To Call';\n        }\n\n        a.onclick = function() {\n            _vs_popup( rw.href, 300, 200 );\n        };\n    },\n\n    replace_all_numbers: function( node, parentHasIntlClass ) {\n        var shouldRwIntl = 0;\n\n        if( ! node ) return;\n\n        // skip certain types?\n        if( node.nodeName == 'SCRIPT' || node.nodeName == 'STYLE' ) return;\n\n        // handle special spans?\n        if( node.className == 'vsnotnumber' ) return;\n\n        // rewrite this node text\n        shouldRwIntl = shouldRewriteIntl(\n                            node, vs_intl, vs_intl_class, parentHasIntlClass );\n\n        if( shouldRwIntl ) {\n            rewriteNodeIntl( node, this.intl_general_regexp, this.d, this.esc, this.unesc );\n        } else {\n            if( ! vs_intl && ! vs_intl_class ) {\n                switch( node.nodeName ) {\n                    case '#text':\n                        this.rewrite_text_node( node );\n                        break;\n\n                    // rewrite <a href=\"tel:xxx\"> tags, possibly added by mobile devices\n                    case 'A':\n                        if(node.href.indexOf('tel:')>-1){\n                        this.rewrite_anchor_node(node);\n                    }\n                        break;\n\n                    default:\n                        // node type not supported\n                }\n            }\n        }\n\n        // walk children nodes\n        var nn, i;\n\n        for(i=0; i<node.childNodes.length; i++){\n            nn = node.childNodes.length;\n            this.replace_all_numbers( node.childNodes[i], shouldRwIntl );\n            if( node.childNodes.length != nn ){\n                // extra nodes were added for CTC link. skip link\n                i++;\n            }\n        }\n    },\n\n    // built this function because Internet Explorer doesn't handle finding first element child\n    // http://stackoverflow.com/questions/6333249/firstelementchild-doesnt-work-in-internet-explorer-7-what-are-my-options\n    get_first_element_child: function( parentElement ) {\n        // check that firstElementChild exists\n        if( typeof parentElement.firstElementChild === 'function' ) {\n            return parentElement.firstElementChild;\n        }\n\n        var node = parentElement.firstChild;\n        var firstElementChild = null;\n\n        for( ; node; node = node.nextSibling ) {\n            if( node.nodeType === 1 ) {\n                firstElementChild = node;\n                break;\n            }\n        }\n\n        return firstElementChild;\n    },\n\n    getnum_error: function(m){\n        this.debug(m);\n        if( _vsrkpd._debugtxt ){\n            this.alert('DEBUG\\n' + _vsrkpd._debugtxt );\n        }\n    },\n\n    do_rewrite: function () {\n        _vsrkpd.replace_all_numbers( document, 0 );\n        if (this.numdata) _vsrkpd.flush_numdata();\n    },\n\n    rewrite_document_onload: function() {\n        if( document.readyState === 'complete' ) {\n            _vsrkpd.load_rewrite();\n        } else {\n            var o = window.onload;\n            window.onload = function() {\n                _vsrkpd.load_rewrite();\n                if(o) o();\n            };\n        }\n    },\n\n    load_rewrite: function() {\n        if( ! _vsrkpd.did_rewrite && _vsrkpd.d ) {\n            _vsrkpd.did_rewrite = true;\n            _vsrkpd.rewrite_document();\n        }\n        _vsrkpd.doc_loaded = true;\n    },\n\n    rewrite_document: function() {\n        _vsrkpd.do_rewrite();\n        _vsrkpd.report_ctns();\n        if( _vsrkpd._debugtxt ) {\n            _vsrkpd.alert( 'DEBUG\\n' + _vsrkpd._debugtxt );\n        }\n    },\n\n    should_redirect_v2: function(){\n        var accounts = [];\n            accounts[ 'CtjSZVLPBHBFmwAx' ] = 1;\n            accounts[ 'CA6phk-g0QY4TAB7' ] = 1;\n            accounts[ 'CA6pr1Xx6-5DDAB_' ] = 1;\n            accounts[ 'CtjSslXx7OJbYABH' ] = 1;\n            accounts[ 'CA6pr1Xx6nA9iQAv' ] = 1;\n            accounts[ 'CtjSslXx6wlTkgC6' ] = 1;\n        if( accounts[vs_account_id] == 1 && \"rw.voicestar.com\" && 80 ){\n            return true;\n        }\n        return false;\n    },\n\n    redirect_account_v2: function(){\n        // 'sendtov2' is arbitrary (normally we put an rule set id)\n        var redirect_url= \"//rw.voicestar.com:80/session/sendtov2\";\n        var script = document.createElement( 'script' );\n        script.src = redirect_url;\n        script.onerror = _vsrkpd.do_v1_rewrite;\n        document.body.appendChild( script );\n    },\n\n    do_v1_rewrite: function() {\n        var self = _vsrkpd; // We shouldn't use 'this' since we copy this function to another object (script)\n        var UK_intl_pat = '\\\\s*(\\\\(?)(\\\\d*)(0808)((?:[\\\\s\\\\)\\\\.\\\\-]|", "20)*)(\\\\d{3})((?:[\\\\xAD\\\\xB7\\\\u2010\\\\u2011\\\\u2013\\\\u2014\\\\u2015\\\\u2022\\\\u2027\\\\u2043\\\\u2063\\\\u2212\\\\s.\\\\-]|", "20)*)(\\\\d{3})((?:[\\\\xAD\\\\xB7\\\\u2010\\\\u2011\\\\u2013\\\\u2014\\\\u2015\\\\u2022\\\\u2027\\\\u2043\\\\u2063\\\\u2212\\\\s.\\\\-]|", "20)*)(\\\\d{3})((?:[\\\\xAD\\\\xB7\\\\u2010\\\\u2011\\\\u2013\\\\u2014\\\\u2015\\\\u2022\\\\u2027\\\\u2043\\\\u2063\\\\u2212\\\\s.\\\\-]|" ]
						} ]
					} ]
				} ]
			}, {
				name: "br",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-56436e0f64746d41dd00631f.js",
							data: []
						} ]
					} ]
				} ]
			}, {
				name: "buyflowchat",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !1,
						scripts: [ {
							src: "satellite-561ec00965646400170001f2.js",
							data: []
						} ]
					} ]
				} ]
			}, {
				name: "zip code update",
				trigger: [ {
					command: "loadScript",
					arguments: [ {
						sequential: !0,
						scripts: [ {
							src: "satellite-53d29fb5db0fc7bee0000335.js",
							data: []
						} ]
					} ]
				} ]
			} ],
			settings: {
				trackInternalLinks: !0,
				libraryName: "satelliteLib-8ae2982f5b2125133af8660ac2658540b2072e4e",
				isStaging: !1,
				allowGATTcalls: !1,
				downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
				notifications: !1,
				utilVisible: !1,
				domainList: [ "rr.com", "timewarnercable.com" ],
				scriptDir: "a011e94b6ba81cdcfdf24acdb480b5e4204c4dea/scripts/",
				tagTimeout: 3e3
			},
			data: {
				URI: t.location.pathname + t.location.search,
				browser: {},
				cartItems: [],
				revenue: "",
				host: {
					http: "assets.adobedtm.com",
					https: "assets.adobedtm.com"
				}
			},
			dataElements: {
				"BF Final Offer": {
					customJS: function() {
						return dataLayer[ 0 ].FinalOffer
					},
					storeLength: "visitor"
				},
				"BF Internet": {
					customJS: function() {
						return dataLayer[ 0 ][ "mBox.profile.internet" ]
					},
					storeLength: "visitor"
				},
				"BF Package Name": {
					customJS: function() {
						return dataLayer[ 0 ][ "mBox.profile.packageName" ]
					},
					storeLength: "visitor"
				},
				"BF Page": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxPage
					},
					storeLength: "pageview"
				},
				"BF Page Category": {
					customJS: function() {
						return dataLayer[ 0 ].pageCategory
					},
					storeLength: "pageview"
				},
				"BF Page Name": {
					customJS: function() {
						return dataLayer[ 0 ][ "Page Name" ]
					},
					storeLength: "pageview"
				},
				"BF Phone": {
					customJS: function() {
						return dataLayer[ 0 ][ "mBox.profile.phone" ]
					},
					storeLength: "visitor"
				},
				"BF step": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxStep
					},
					storeLength: "pageview"
				},
				"BF tv": {
					customJS: function() {
						return dataLayer[ 0 ][ "mBox.profile.tv" ]
					},
					storeLength: "visitor"
				},
				"BF Visitor Existing Customer": {
					customJS: function() {
						return dataLayer[ 0 ].visitorExistingCustomer
					},
					storeLength: "pageview"
				},
				"BF VisitorID": {
					customJS: function() {
						return dataLayer[ 0 ].VisitorID
					},
					storeLength: "pageview"
				},
				"BF VisitorLoginState": {
					customJS: function() {
						return dataLayer[ 0 ].VisitorLoginState
					},
					storeLength: "pageview"
				},
				"BF Visitor Type": {
					customJS: function() {
						return dataLayer[ 0 ].bfVisitorType
					},
					storeLength: "session"
				},
				chatName: {
					customJS: function() {
						var e = "",
							t = "chatName";
						return "undefined" != typeof _satellite.data.customVars[ t ] ? e = _satellite.data.customVars[ t ] : "undefined" != typeof _satellite.data.customVars[ t.toLowerCase() ] && ( e = _satellite.data.customVars[ t.toLowerCase() ] ), e
					},
					storeLength: "pageview",
					forceLowerCase: !0
				},
				cid: {
					customJS: function() {
						return cid = "undefined" == typeof _satellite.getVar( "cid - url" ) ? "" : _satellite.getVar( "cid - url" ), cid.search( /.+:.+:.+/ ) > -1 ? cid : ( cid = _satellite.getVar( "cid - cookie" ), cid )
					},
					storeLength: "pageview"
				},
				"cid - cookie": {
					customJS: function() {
						return _satellite.readCookie( "twc_cid" )
					},
					storeLength: "pageview"
				},
				"cid - url": {
					queryParam: "cid",
					storeLength: "pageview",
					ignoreCase: 0
				},
				"CQ Onnetwork": {
					jsVariable: "CQ_Analytics.ClientContextMgr.clientcontext.twcprofile.onNetwork",
					"default": "false",
					storeLength: "pageview"
				},
				Curcust: {
					cookie: "twc_dtm_curcust",
					"default": "false",
					storeLength: "pageview"
				},
				gclid: {
					customJS: function() {
						return gcl = "undefined" == typeof _satellite.getVar( "gclid - url" ) ? "" : _satellite.getVar( "gclid - url" ), gcl.search( /(^(?!\*)[a-zA-Z0-9\-_]+)$/ ) > -1 ? gcl : ( gcl = _satellite.getVar( "gclid - cookie" ), gcl )
					},
					storeLength: "pageview"
				},
				"gclid - cookie": {
					customJS: function() {
						return _satellite.readCookie( "twc_gclid" )
					},
					storeLength: "pageview"
				},
				"gclid - url": {
					queryParam: "gclid",
					storeLength: "pageview",
					ignoreCase: 0
				},
				"GTM-DataLayer": {
					jsVariable: "dataLayer",
					"default": "null",
					storeLength: "pageview"
				},
				IsMobile: {
					customJS: function() {
						var e = {
							Android: function() {
								return navigator.userAgent.match( /Android/i )
							},
							BlackBerry: function() {
								return navigator.userAgent.match( /BlackBerry/i )
							},
							iOS: function() {
								return navigator.userAgent.match( /iPhone|iPad|iPod/i )
							},
							Opera: function() {
								return navigator.userAgent.match( /Opera Mini/i )
							},
							Windows: function() {
								return navigator.userAgent.match( /IEMobile/i )
							},
							any: function() {
								return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows() ? "true" : "false"
							}
						};
						return e.any()
					},
					storeLength: "pageview"
				},
				lpClone: {
					queryParam: "lpclone",
					"default": "false",
					storeLength: "pageview",
					forceLowerCase: !0,
					ignoreCase: 0
				},
				"LP Clone Account": {
					customJS: function() {
						return "31464425"
					},
					storeLength: "pageview"
				},
				"LP pageType": {
					customJS: function() {
						for ( var e = 0; e < arrLPvars.length; e++ )
							if ( "pageType" == arrLPvars[ e ].name ) return arrLPvars[ e ].value
					},
					storeLength: "pageview"
				},
				"LP Prod Account": {
					customJS: function() {
						return "42897133"
					},
					storeLength: "pageview"
				},
				"LP type": {
					customJS: function() {
						return LPMobile.getSkill()
					},
					storeLength: "pageview"
				},
				"Marchex Winner": {
					cookie: "twc_marchex_wins",
					storeLength: "pageview",
					forceLowerCase: !0
				},
				"My Account Session": {
					cookie: "twc-dtm-acc",
					storeLength: "pageview"
				},
				MyAMbox: {
					customJS: function() {
						var e = t.querySelectorAll( ".campaign-my-account" );
						for ( i = 0; i < e.length; ++i )
							if ( e[ i ].textContent.indexOf( "Residential Account Sign-In" ) > -1 ) return e[ i ].id
					},
					storeLength: "pageview"
				},
				"OC LOB": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxLOB
					},
					storeLength: "pageview"
				},
				"OC mboxLOSInternet": {
					customJS: function() {
						return dataLayer[ 0 ].mboxLOSInternet
					},
					storeLength: "pageview"
				},
				"OC mboxLOSPhone": {
					customJS: function() {
						return dataLayer[ 0 ].mboxLOSPhone
					},
					storeLength: "pageview"
				},
				"OC mboxLOSTV": {
					customJS: function() {
						return dataLayer[ 0 ].mboxLOSTV
					},
					storeLength: "pageview"
				},
				"OC OneTimeTotal": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxOneTimeTotal
					},
					storeLength: "pageview"
				},
				"OC OrderId": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxOrderId
					},
					storeLength: "pageview"
				},
				"OC OrderTotal": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxOrderTotal
					},
					storeLength: "pageview"
				},
				"OC PackageName": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxPackageName
					},
					storeLength: "pageview"
				},
				"OC PageName": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxPageName
					},
					storeLength: "pageview"
				},
				"OC PageValue": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxPageValue
					},
					storeLength: "pageview"
				},
				"OC ProductPurchasedId": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxProductPurchasedId
					},
					storeLength: "pageview"
				},
				"OC Step": {
					customJS: function() {
						return dataLayer[ 0 ].mBoxStep
					},
					storeLength: "pageview"
				},
				OnNetwork: {
					cookie: "twc_dtm_onnet",
					"default": "false",
					storeLength: "pageview"
				},
				Region: {
					customJS: function() {
						return dataLayer[ 0 ].region
					},
					storeLength: "pageview"
				},
				sessioncookie: {
					cookie: "TWC-analytics-session",
					storeLength: "pageview"
				},
				"s.pageName": {
					jsVariable: "s.pageName",
					storeLength: "pageview"
				},
				testing: {
					customJS: function() {
						return testing = _satellite.getVar( "testing url" ), testing.length > 0 || ( testing = _satellite.getVar( "testing cookie" ) ), testing
					},
					"default": "false",
					storeLength: "session"
				},
				"testing url": {
					queryParam: "DTMStaging",
					storeLength: "pageview",
					forceLowerCase: !0,
					ignoreCase: 1
				},
				tnt10_1: {
					cookie: "tnt10_1",
					storeLength: "pageview"
				},
				tnt10_2: {
					cookie: "tnt10_2",
					storeLength: "pageview"
				},
				tnt_vars: {
					customJS: function() {
						var e = [];
						for ( key in _satellite.getVar( "GTM-DataLayer" )[ 0 ] ) e.push( "dataLayer_" + key.replace( " ", "" ) + "=" + _satellite.getVar( "GTM-DataLayer" )[ 0 ][ key ] );
						return e.push( "loggedIn=" + _satellite.getVar( "My Account Session" ) ), e
					},
					storeLength: "pageview"
				},
				"twc-user-profile": {
					cookie: "twc-user-profile",
					storeLength: "pageview"
				},
				_vsrefdom: {
					customJS: function() {
						return cid = "undefined" == typeof _satellite.getVar( "_vsrefdom - url" ) ? "" : _satellite.getVar( "_vsrefdom - url" ), "" != cid ? cid : ( cid = _satellite.getVar( "_vsrefdom - cookie" ), cid )
					},
					storeLength: "pageview"
				},
				"_vsrefdom - cookie": {
					customJS: function() {
						return _satellite.readCookie( "twc_vsrefdom" )
					},
					storeLength: "pageview"
				},
				"_vsrefdom - url": {
					queryParam: "_vsrefdom",
					storeLength: "pageview",
					ignoreCase: 0
				}
			},
			appVersion: "6GD",
			buildDate: "2016-04-19 13:43:20 UTC",
			publishDate: "2016-04-19 13:43:19 UTC"
		} )
	}( window, document );