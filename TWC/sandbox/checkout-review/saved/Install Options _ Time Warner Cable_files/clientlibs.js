var dataLayer;
if ( typeof( initGTM ) == "function" ) {
	$( document ).ready( function() {
		CQ_Analytics.ClientContextUtils.onStoreInitialized( 'twcprofile', initGTM, 0 );
	} );
}
//
// Dust - Asynchronous Templating v0.3.0
// http://akdubya.github.com/dustjs
//
// Copyright (c) 2010, Aleksander Williams
// Released under the MIT License.
//

var dust = {};
( function( o ) {
	function z( e, k, l ) {
		this.stack = e;
		this.global = k;
		this.blocks = l
	}

	function H( e, k, l, x ) {
		this.tail = k;
		this.isObject = !o.isArray( e ) && e && typeof e === "object";
		this.head = e;
		this.index = l;
		this.of = x
	}

	function p( e ) {
		this.head = new B( this );
		this.callback = e;
		this.out = ""
	}

	function J() {
		this.head = new B( this )
	}

	function B( e, k, l ) {
		this.root = e;
		this.next = k;
		this.data = "";
		this.flushable = false;
		this.taps = l
	}

	function r( e, k ) {
		this.head = e;
		this.tail = k
	}
	o.cache = {};
	o.register = function( e, k ) {
		if ( e ) o.cache[ e ] = k
	};
	o.render = function( e, k, l ) {
		l = ( new p( l ) ).head;
		o.load( e, l, z.wrap( k ) ).end()
	};
	o.stream = function( e, k ) {
		var l = new J;
		o.nextTick( function() {
			o.load( e, l.head, z.wrap( k ) ).end()
		} );
		return l
	};
	o.renderSource = function( e, k, l ) {
		return o.compileFn( e )( k, l )
	};
	o.compileFn = function( e, k ) {
		var l = o.loadSource( o.compile( e, k ) );
		return function( x, C ) {
			var E = C ? new p( C ) : new J;
			o.nextTick( function() {
				l( E.head, z.wrap( x ) ).end()
			} );
			return E
		}
	};
	o.load = function( e, k, l ) {
		var x = o.cache[ e ];
		if ( x ) return x( k, l );
		else {
			if ( o.onLoad ) return k.map( function( C ) {
				o.onLoad( e, function( E, M ) {
					if ( E ) return C.setError( E );
					o.cache[ e ] || o.loadSource( o.compile( M, e ) );
					o.cache[ e ]( C, l ).end()
				} )
			} );
			return k.setError( Error( "Template Not Found: " + e ) )
		}
	};
	o.loadSource = function( e ) {
		return eval( e )
	};
	o.isArray = Array.isArray ? Array.isArray : function( e ) {
		return Object.prototype.toString.call( e ) == "[object Array]"
	};
	o.nextTick = function( e ) {
		setTimeout( e, 0 )
	};
	o.isEmpty = function( e ) {
		if ( o.isArray( e ) && !e.length ) return true;
		if ( e === 0 ) return false;
		return !e
	};
	o.filter = function( e, k, l ) {
		if ( l )
			for ( var x = 0, C = l.length; x < C; x++ ) {
				var E = l[ x ];
				if ( E === "s" ) k = null;
				else e =
					o.filters[ E ]( e )
			}
		if ( k ) e = o.filters[ k ]( e );
		return e
	};
	o.filters = {
		h: function( e ) {
			return o.escapeHtml( e )
		},
		j: function( e ) {
			return o.escapeJs( e )
		},
		u: encodeURI,
		uc: encodeURIComponent
	};
	o.makeBase = function( e ) {
		return new z( new H, e )
	};
	z.wrap = function( e ) {
		if ( e instanceof z ) return e;
		return new z( new H( e ) )
	};
	z.prototype.get = function( e ) {
		for ( var k = this.stack, l; k; ) {
			if ( k.isObject ) {
				l = k.head[ e ];
				if ( l !== undefined ) return l
			}
			k = k.tail
		}
		return this.global ? this.global[ e ] : undefined
	};
	z.prototype.getPath = function( e, k ) {
		var l = this.stack,
			x = k.length;
		if ( e && x === 0 ) return l.head;
		if ( l.isObject ) {
			l = l.head;
			for ( var C = 0; l && C < x; ) {
				l = l[ k[ C ] ];
				C++
			}
			return l
		}
	};
	z.prototype.push = function( e, k, l ) {
		return new z( new H( e, this.stack, k, l ), this.global, this.blocks )
	};
	z.prototype.rebase = function( e ) {
		return new z( new H( e ), this.global, this.blocks )
	};
	z.prototype.current = function() {
		return this.stack.head
	};
	z.prototype.getBlock = function( e ) {
		var k = this.blocks;
		if ( k )
			for ( var l = k.length, x; l--; )
				if ( x = k[ l ][ e ] ) return x
	};
	z.prototype.shiftBlocks = function( e ) {
		var k = this.blocks;
		if ( e ) {
			newBlocks =
				k ? k.concat( [ e ] ) : [ e ];
			return new z( this.stack, this.global, newBlocks )
		}
		return this
	};
	p.prototype.flush = function() {
		for ( var e = this.head; e; ) {
			if ( e.flushable ) this.out += e.data;
			else {
				if ( e.error ) {
					this.callback( e.error );
					this.flush = function() {}
				}
				return
			}
			this.head = e = e.next
		}
		this.callback( null, this.out )
	};
	J.prototype.flush = function() {
		for ( var e = this.head; e; ) {
			if ( e.flushable ) this.emit( "data", e.data );
			else {
				if ( e.error ) {
					this.emit( "error", e.error );
					this.flush = function() {}
				}
				return
			}
			this.head = e = e.next
		}
		this.emit( "end" )
	};
	J.prototype.emit =
		function( e, k ) {
			var l = this.events;
			l && l[ e ] && l[ e ]( k )
		};
	J.prototype.on = function( e, k ) {
		if ( !this.events ) this.events = {};
		this.events[ e ] = k;
		return this
	};
	B.prototype.write = function( e ) {
		var k = this.taps;
		if ( k ) e = k.go( e );
		this.data += e;
		return this
	};
	B.prototype.end = function( e ) {
		e && this.write( e );
		this.flushable = true;
		this.root.flush();
		return this
	};
	B.prototype.map = function( e ) {
		var k = new B( this.root, this.next, this.taps ),
			l = new B( this.root, k, this.taps );
		this.next = l;
		this.flushable = true;
		e( l );
		return k
	};
	B.prototype.tap = function( e ) {
		var k =
			this.taps;
		this.taps = k ? k.push( e ) : new r( e );
		return this
	};
	B.prototype.untap = function() {
		this.taps = this.taps.tail;
		return this
	};
	B.prototype.render = function( e, k ) {
		return e( this, k )
	};
	B.prototype.reference = function( e, k, l, x ) {
		if ( typeof e === "function" ) {
			e = e( this, k, null, {
				auto: l,
				filters: x
			} );
			if ( e instanceof B ) return e
		}
		return o.isEmpty( e ) ? this : this.write( o.filter( e, l, x ) )
	};
	B.prototype.section = function( e, k, l, x ) {
		if ( typeof e === "function" ) {
			e = e( this, k, l, x );
			if ( e instanceof B ) return e
		}
		var C = l.block;
		l = l[ "else" ];
		if ( x ) k = k.push( x );
		if ( o.isArray( e ) ) {
			if ( C ) {
				x = e.length;
				l = this;
				for ( var E = 0; E < x; E++ ) l = C( l, k.push( e[ E ], E, x ) );
				return l
			}
		} else if ( e === true ) {
			if ( C ) return C( this, k )
		} else if ( e || e === 0 ) {
			if ( C ) return C( this, k.push( e ) )
		} else if ( l ) return l( this, k );
		return this
	};
	B.prototype.exists = function( e, k, l ) {
		var x = l.block;
		l = l[ "else" ];
		if ( o.isEmpty( e ) ) {
			if ( l ) return l( this, k )
		} else if ( x ) return x( this, k );
		return this
	};
	B.prototype.notexists = function( e, k, l ) {
		var x = l.block;
		l = l[ "else" ];
		if ( o.isEmpty( e ) ) {
			if ( x ) return x( this, k )
		} else if ( l ) return l( this, k );
		return this
	};
	B.prototype.block = function( e, k, l ) {
		l = l.block;
		if ( e ) l = e;
		if ( l ) return l( this, k );
		return this
	};
	B.prototype.partial = function( e, k ) {
		if ( typeof e === "function" ) return this.capture( e, k, function( l, x ) {
			o.load( l, x, k ).end()
		} );
		return o.load( e, this, k )
	};
	B.prototype.helper = function( e, k, l, x ) {
		return o.helpers[ e ]( this, k, l, x )
	};
	B.prototype.capture = function( e, k, l ) {
		return this.map( function( x ) {
			var C = new p( function( E, M ) {
				E ? x.setError( E ) : l( M, x )
			} );
			e( C.head, k ).end()
		} )
	};
	B.prototype.setError = function( e ) {
		this.error = e;
		this.root.flush();
		return this
	};
	o.helpers = {
		sep: function( e, k, l ) {
			if ( k.stack.index === k.stack.of - 1 ) return e;
			return l.block( e, k )
		},
		idx: function( e, k, l ) {
			return l.block( e, k.push( k.stack.index ) )
		}
	};
	r.prototype.push = function( e ) {
		return new r( e, this )
	};
	r.prototype.go = function( e ) {
		for ( var k = this; k; ) {
			e = k.head( e );
			k = k.tail
		}
		return e
	};
	var K = RegExp( /[&<>\"]/ ),
		q = /&/g,
		j = /</g,
		w = />/g,
		t = /\"/g;
	o.escapeHtml = function( e ) {
		if ( typeof e === "string" ) {
			if ( !K.test( e ) ) return e;
			return e.replace( q, "&amp;" ).replace( j, "&lt;" ).replace( w, "&gt;" ).replace( t, "&quot;" )
		}
		return e
	};
	var y = /\\/g,
		A = /\r/g,
		F = /\u2028/g,
		L = /\u2029/g,
		N = /\n/g,
		V = /\f/g,
		I = /'/g,
		Q = /"/g,
		T = /\t/g;
	o.escapeJs = function( e ) {
		if ( typeof e === "string" ) return e.replace( y, "\\\\" ).replace( Q, '\\"' ).replace( I, "\\'" ).replace( A, "\\r" ).replace( F, "\\u2028" ).replace( L, "\\u2029" ).replace( N, "\\n" ).replace( V, "\\f" ).replace( T, "\\t" );
		return e
	}
} )( dust );
if ( typeof exports !== "undefined" ) {
	typeof process !== "undefined" && require( "./server" )( dust );
	module.exports = dust
}
( function( o ) {
	function z( q, j ) {
		for ( var w = [ j[ 0 ] ], t = 1, y = j.length; t < y; t++ ) {
			var A = o.filterNode( q, j[ t ] );
			A && w.push( A )
		}
		return w
	}

	function H( q, j ) {
		return j
	}

	function p() {}

	function J( q, j ) {
		for ( var w = "", t = 1, y = j.length; t < y; t++ ) w += o.compileNode( q, j[ t ] );
		return w
	}

	function B( q, j, w ) {
		return "." + w + "(" + o.compileNode( q, j[ 1 ] ) + "," + o.compileNode( q, j[ 2 ] ) + "," + o.compileNode( q, j[ 4 ] ) + "," + o.compileNode( q, j[ 3 ] ) + ")"
	}
	o.compile = function( q, j ) {
		var w, t = o.parse( q );
		w = o.filterNode( {}, t );
		t = {
			name: j,
			bodies: [],
			blocks: {},
			index: 0,
			auto: "h"
		};
		w = "(function(){dust.register(" +
			( j ? '"' + j + '"' : "null" ) + "," + o.compileNode( t, w ) + ");";
		var y;
		var A = [],
			F = t.blocks;
		for ( y in F ) A.push( y + ":" + F[ y ] );
		if ( A.length ) {
			t.blocks = "ctx=ctx.shiftBlocks(blocks);";
			y = "var blocks={" + A.join( "," ) + "};"
		} else y = t.blocks = "";
		y = w + y;
		w = [];
		A = t.bodies;
		t = t.blocks;
		F = 0;
		for ( var L = A.length; F < L; F++ ) w[ F ] = "function body_" + F + "(chk,ctx){" + t + "return chk" + A[ F ] + ";}";
		t = w.join( "" );
		return y + t + "return body_0;})();"
	};
	o.filterNode = function( q, j ) {
		return o.optimizers[ j[ 0 ] ]( q, j )
	};
	o.optimizers = {
		body: function( q, j ) {
			for ( var w = [ j[ 0 ] ], t, y = 1, A =
					j.length; y < A; y++ ) {
				var F = o.filterNode( q, j[ y ] );
				if ( F )
					if ( F[ 0 ] === "buffer" )
						if ( t ) t[ 1 ] += F[ 1 ];
						else {
							t = F;
							w.push( F )
						}
				else {
					t = null;
					w.push( F )
				}
			}
			return w
		},
		buffer: H,
		special: function( q, j ) {
			return [ "buffer", r[ j[ 1 ] ] ]
		},
		format: p,
		reference: z,
		"#": z,
		"?": z,
		"^": z,
		"<": z,
		"+": z,
		"@": z,
		"%": z,
		partial: z,
		context: z,
		params: z,
		bodies: z,
		param: z,
		filters: H,
		key: H,
		path: H,
		literal: H,
		comment: p
	};
	o.pragmas = {
		esc: function( q, j, w ) {
			var t = q.auto;
			j || ( j = "h" );
			q.auto = j === "s" ? "" : j;
			j = J( q, w.block );
			q.auto = t;
			return j
		}
	};
	var r = {
		s: " ",
		n: "\n",
		r: "\r",
		lb: "{",
		rb: "}"
	};
	o.compileNode =
		function( q, j ) {
			return o.nodes[ j[ 0 ] ]( q, j )
		};
	o.nodes = {
		body: function( q, j ) {
			var w = q.index++,
				t = "body_" + w;
			q.bodies[ w ] = J( q, j );
			return t
		},
		buffer: function( q, j ) {
			return ".write(" + K( j[ 1 ] ) + ")"
		},
		format: function( q, j ) {
			return ".write(" + K( j[ 1 ] + j[ 2 ] ) + ")"
		},
		reference: function( q, j ) {
			return ".reference(" + o.compileNode( q, j[ 1 ] ) + ",ctx," + o.compileNode( q, j[ 2 ] ) + ")"
		},
		"#": function( q, j ) {
			return B( q, j, "section" )
		},
		"?": function( q, j ) {
			return B( q, j, "exists" )
		},
		"^": function( q, j ) {
			return B( q, j, "notexists" )
		},
		"<": function( q, j ) {
			for ( var w = j[ 4 ], t = 1, y =
					w.length; t < y; t++ ) {
				var A = w[ t ];
				if ( A[ 1 ][ 1 ] === "block" ) {
					q.blocks[ j[ 1 ].text ] = o.compileNode( q, A[ 2 ] );
					break
				}
			}
			return ""
		},
		"+": function( q, j ) {
			return ".block(ctx.getBlock(" + K( j[ 1 ].text ) + ")," + o.compileNode( q, j[ 2 ] ) + "," + o.compileNode( q, j[ 4 ] ) + "," + o.compileNode( q, j[ 3 ] ) + ")"
		},
		"@": function( q, j ) {
			return ".helper(" + K( j[ 1 ].text ) + "," + o.compileNode( q, j[ 2 ] ) + "," + o.compileNode( q, j[ 4 ] ) + "," + o.compileNode( q, j[ 3 ] ) + ")"
		},
		"%": function( q, j ) {
			var w = j[ 1 ][ 1 ];
			if ( !o.pragmas[ w ] ) return "";
			for ( var t = j[ 4 ], y = {}, A = 1, F = t.length; A < F; A++ ) {
				var L = t[ A ];
				y[ L[ 1 ][ 1 ] ] =
					L[ 2 ]
			}
			t = j[ 3 ];
			L = {};
			A = 1;
			for ( F = t.length; A < F; A++ ) {
				var N = t[ A ];
				L[ N[ 1 ][ 1 ] ] = N[ 2 ][ 1 ]
			}
			return o.pragmas[ w ]( q, j[ 2 ][ 1 ] ? j[ 2 ][ 1 ].text : null, y, L )
		},
		partial: function( q, j ) {
			return ".partial(" + o.compileNode( q, j[ 1 ] ) + "," + o.compileNode( q, j[ 2 ] ) + ")"
		},
		context: function( q, j ) {
			if ( j[ 1 ] ) return "ctx.rebase(" + o.compileNode( q, j[ 1 ] ) + ")";
			return "ctx"
		},
		params: function( q, j ) {
			for ( var w = [], t = 1, y = j.length; t < y; t++ ) w.push( o.compileNode( q, j[ t ] ) );
			if ( w.length ) return "{" + w.join( "," ) + "}";
			return "null"
		},
		bodies: function( q, j ) {
			for ( var w = [], t = 1, y = j.length; t <
				y; t++ ) w.push( o.compileNode( q, j[ t ] ) );
			return "{" + w.join( "," ) + "}"
		},
		param: function( q, j ) {
			return o.compileNode( q, j[ 1 ] ) + ":" + o.compileNode( q, j[ 2 ] )
		},
		filters: function( q, j ) {
			for ( var w = [], t = 1, y = j.length; t < y; t++ ) w.push( '"' + j[ t ] + '"' );
			return '"' + q.auto + '"' + ( w.length ? ",[" + w.join( "," ) + "]" : "" )
		},
		key: function( q, j ) {
			return 'ctx.get("' + j[ 1 ] + '")'
		},
		path: function( q, j ) {
			for ( var w = j[ 1 ], t = j[ 2 ], y = [], A = 0, F = t.length; A < F; A++ ) y.push( '"' + t[ A ] + '"' );
			return "ctx.getPath(" + w + ",[" + y.join( "," ) + "])"
		},
		literal: function( q, j ) {
			return K( j[ 1 ] )
		}
	};
	var K =
		typeof JSON === "undefined" ? function( q ) {
			return '"' + o.escapeJs( q ) + '"'
		} : JSON.stringify
} )( typeof exports !== "undefined" ? exports : window.dust );
( function( o ) {
	var z = function() {
		var H = {
			parse: function( p ) {
				function J( n ) {
					var b = n.charCodeAt( 0 );
					if ( b < 255 ) {
						n = "x";
						var c = 2
					} else {
						n = "u";
						c = 4
					}
					n = "\\" + n;
					var d = b.toString( 16 ).toUpperCase();
					b = d;
					c = c - d.length;
					for ( d = 0; d < c; d++ ) b = "0" + b;
					return n + b
				}

				function B( n ) {
					return '"' + n.replace( /\\/g, "\\\\" ).replace( /"/g, '\\"' ).replace( /\r/g, "\\r" ).replace( /\n/g, "\\n" ).replace( /[\x80-\uFFFF]/g, J ) + '"'
				}

				function r( n ) {
					if ( !( a < R ) ) {
						if ( a > R ) {
							R = a;
							W = []
						}
						W.push( n )
					}
				}

				function K() {
					var n = "body@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = [];
					for ( var c =
							q(); c !== null; ) {
						b.push( c );
						c = q()
					}
					b = b !== null ? [ "body" ].concat( b ) : null;
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function q() {
					var n = "part@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = l();
					if ( b !== null ) b = b;
					else {
						b = j();
						if ( b !== null ) b = b;
						else {
							b = "partial@" + a;
							var c = v[ b ];
							if ( c ) {
								a = c.nextPos;
								b = c.result
							} else {
								c = h;
								h = false;
								var d = a,
									g = C();
								if ( g !== null ) {
									if ( p.substr( a, 1 ) === ">" ) {
										var f = ">";
										a += 1
									} else {
										f = null;
										h && r( '">"' )
									}
									if ( f !== null ) {
										var i = I();
										i = i !== null ? [ "literal", i ] : null;
										if ( i !== null ) i = i;
										else {
											i = Q();
											i = i !== null ? i : null
										}
										if ( i !== null ) {
											var m =
												y();
											if ( m !== null ) {
												if ( p.substr( a, 1 ) === "/" ) {
													var s = "/";
													a += 1
												} else {
													s = null;
													h && r( '"/"' )
												}
												if ( s !== null ) {
													var u = E();
													if ( u !== null ) g = [ g, f, i, m, s, u ];
													else {
														g = null;
														a = d
													}
												} else {
													g = null;
													a = d
												}
											} else {
												g = null;
												a = d
											}
										} else {
											g = null;
											a = d
										}
									} else {
										g = null;
										a = d
									}
								} else {
									g = null;
									a = d
								}
								d = g !== null ? [ "partial", g[ 2 ], g[ 3 ] ] : null;
								( h = c ) && d === null && r( "partial" );
								v[ b ] = {
									nextPos: a,
									result: d
								};
								b = d
							}
							if ( b !== null ) b = b;
							else {
								b = L();
								if ( b !== null ) b = b;
								else {
									b = F();
									if ( b !== null ) b = b;
									else {
										b = "buffer@" + a;
										if ( c = v[ b ] ) {
											a = c.nextPos;
											b = c.result
										} else {
											c = h;
											h = false;
											d = a;
											g = M();
											if ( g !== null ) {
												f = [];
												for ( i =
													U(); i !== null; ) {
													f.push( i );
													i = U()
												}
												if ( f !== null ) g = [ g, f ];
												else {
													g = null;
													a = d
												}
											} else {
												g = null;
												a = d
											}
											d = g !== null ? [ "format", g[ 0 ], g[ 1 ].join( "" ) ] : null;
											if ( d !== null ) d = d;
											else {
												i = g = a;
												f = h;
												h = false;
												m = x();
												h = f;
												if ( m === null ) f = "";
												else {
													f = null;
													a = i
												}
												if ( f !== null ) {
													m = a;
													i = h;
													h = false;
													s = M();
													h = i;
													if ( s === null ) i = "";
													else {
														i = null;
														a = m
													}
													if ( i !== null ) {
														m = a;
														s = h;
														h = false;
														u = l();
														h = s;
														if ( u === null ) s = "";
														else {
															s = null;
															a = m
														}
														if ( s !== null ) {
															if ( p.length > a ) {
																m = p.charAt( a );
																a++
															} else {
																m = null;
																h && r( "any character" )
															}
															if ( m !== null ) f = [ f, i, s, m ];
															else {
																f = null;
																a = g
															}
														} else {
															f = null;
															a = g
														}
													} else {
														f =
															null;
														a = g
													}
												} else {
													f = null;
													a = g
												}
												g = f !== null ? f[ 3 ] : null;
												if ( g !== null )
													for ( d = []; g !== null; ) {
														d.push( g );
														i = g = a;
														f = h;
														h = false;
														m = x();
														h = f;
														if ( m === null ) f = "";
														else {
															f = null;
															a = i
														}
														if ( f !== null ) {
															m = a;
															i = h;
															h = false;
															s = M();
															h = i;
															if ( s === null ) i = "";
															else {
																i = null;
																a = m
															}
															if ( i !== null ) {
																m = a;
																s = h;
																h = false;
																u = l();
																h = s;
																if ( u === null ) s = "";
																else {
																	s = null;
																	a = m
																}
																if ( s !== null ) {
																	if ( p.length > a ) {
																		m = p.charAt( a );
																		a++
																	} else {
																		m = null;
																		h && r( "any character" )
																	}
																	if ( m !== null ) f = [ f, i, s, m ];
																	else {
																		f = null;
																		a = g
																	}
																} else {
																	f = null;
																	a = g
																}
															} else {
																f = null;
																a = g
															}
														} else {
															f = null;
															a = g
														}
														g = f !== null ? f[ 3 ] : null
													} else d = null;
												d = d !==
													null ? [ "buffer", d.join( "" ) ] : null;
												d = d !== null ? d : null
											}( h = c ) && d === null && r( "buffer" );
											v[ b ] = {
												nextPos: a,
												result: d
											};
											b = d
										}
										b = b !== null ? b : null
									}
								}
							}
						}
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function j() {
					var n = "section@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a,
						d = w();
					if ( d !== null ) {
						var g = E();
						if ( g !== null ) {
							var f = K();
							if ( f !== null ) {
								var i = A();
								if ( i !== null ) {
									var m = t();
									if ( m !== null ) {
										var s = d[ 1 ].text === m.text ? "" : null;
										if ( s !== null ) d = [ d, g, f, i, m, s ];
										else {
											d = null;
											a = c
										}
									} else {
										d = null;
										a = c
									}
								} else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
						} else {
							d =
								null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? function( u, D, O ) {
						O.push( [ "param", [ "literal", "block" ], D ] );
						u.push( O );
						return u
					}( d[ 0 ], d[ 2 ], d[ 3 ], d[ 4 ] ) : null;
					if ( c !== null ) c = c;
					else {
						c = a;
						d = w();
						if ( d !== null ) {
							if ( p.substr( a, 1 ) === "/" ) {
								g = "/";
								a += 1
							} else {
								g = null;
								h && r( '"/"' )
							}
							if ( g !== null ) {
								f = E();
								if ( f !== null ) d = [ d, g, f ];
								else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
						} else {
							d = null;
							a = c
						}
						c = d !== null ? function( u ) {
							u.push( [ "bodies" ] );
							return u
						}( d[ 0 ] ) : null;
						c = c !== null ? c : null
					}( h = b ) && c === null && r( "section" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function w() {
					var n = "sec_tag_start@" +
						a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = a;
					var c = C();
					if ( c !== null ) {
						if ( p.substr( a ).match( /^[#?^<+@%]/ ) !== null ) {
							var d = p.charAt( a );
							a++
						} else {
							d = null;
							h && r( "[#?^<+@%]" )
						}
						if ( d !== null ) {
							var g = N();
							if ( g !== null ) {
								var f = y();
								if ( f !== null ) {
									var i;
									i = "params@" + a;
									var m = v[ i ];
									if ( m ) {
										a = m.nextPos;
										i = m.result
									} else {
										m = h;
										h = false;
										var s = [],
											u = a,
											D = U();
										if ( D !== null ) {
											var O = I();
											if ( O !== null ) {
												if ( p.substr( a, 1 ) === "=" ) {
													var P = "=";
													a += 1
												} else {
													P = null;
													h && r( '"="' )
												}
												if ( P !== null ) {
													var G = N();
													if ( G !== null ) G = G;
													else {
														G = Q();
														G = G !== null ? G : null
													}
													if ( G !== null ) D = [ D, O, P, G ];
													else {
														D = null;
														a = u
													}
												} else {
													D = null;
													a = u
												}
											} else {
												D = null;
												a = u
											}
										} else {
											D = null;
											a = u
										}
										for ( u = D !== null ? [ "param", [ "literal", D[ 1 ] ], D[ 3 ] ] : null; u !== null; ) {
											s.push( u );
											u = a;
											D = U();
											if ( D !== null ) {
												O = I();
												if ( O !== null ) {
													if ( p.substr( a, 1 ) === "=" ) {
														P = "=";
														a += 1
													} else {
														P = null;
														h && r( '"="' )
													}
													if ( P !== null ) {
														G = N();
														if ( G !== null ) G = G;
														else {
															G = Q();
															G = G !== null ? G : null
														}
														if ( G !== null ) D = [ D, O, P, G ];
														else {
															D = null;
															a = u
														}
													} else {
														D = null;
														a = u
													}
												} else {
													D = null;
													a = u
												}
											} else {
												D = null;
												a = u
											}
											u = D !== null ? [ "param", [ "literal", D[ 1 ] ], D[ 3 ] ] : null
										}
										s = s !== null ? [ "params" ].concat( s ) : null;
										( h = m ) && s ===
											null && r( "params" );
										v[ i ] = {
											nextPos: a,
											result: s
										};
										i = s
									}
									if ( i !== null ) c = [ c, d, g, f, i ];
									else {
										c = null;
										a = b
									}
								} else {
									c = null;
									a = b
								}
							} else {
								c = null;
								a = b
							}
						} else {
							c = null;
							a = b
						}
					} else {
						c = null;
						a = b
					}
					b = c !== null ? [ c[ 1 ], c[ 2 ], c[ 3 ], c[ 4 ] ] : null;
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function t() {
					var n = "end_tag@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a,
						d = C();
					if ( d !== null ) {
						if ( p.substr( a, 1 ) === "/" ) {
							var g = "/";
							a += 1
						} else {
							g = null;
							h && r( '"/"' )
						}
						if ( g !== null ) {
							var f = N();
							if ( f !== null ) {
								var i = E();
								if ( i !== null ) d = [ d, g, f, i ];
								else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
						} else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? d[ 2 ] : null;
					( h = b ) && c === null && r( "end tag" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function y() {
					var n = "context@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = a;
					if ( p.substr( a, 1 ) === ":" ) {
						var c = ":";
						a += 1
					} else {
						c = null;
						h && r( '":"' )
					}
					if ( c !== null ) {
						var d = N();
						if ( d !== null ) c = [ c, d ];
						else {
							c = null;
							a = b
						}
					} else {
						c = null;
						a = b
					}
					b = c !== null ? c[ 1 ] : null;
					b = b !== null ? b : "";
					b = b !== null ? b ? [ "context", b ] : [ "context" ] : null;
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function A() {
					var n = "bodies@" + a,
						b = v[ n ];
					if ( b ) {
						a =
							b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = [],
						d = a,
						g = C();
					if ( g !== null ) {
						if ( p.substr( a, 1 ) === ":" ) {
							var f = ":";
							a += 1
						} else {
							f = null;
							h && r( '":"' )
						}
						if ( f !== null ) {
							var i = I();
							if ( i !== null ) {
								var m = E();
								if ( m !== null ) {
									var s = K();
									if ( s !== null ) g = [ g, f, i, m, s ];
									else {
										g = null;
										a = d
									}
								} else {
									g = null;
									a = d
								}
							} else {
								g = null;
								a = d
							}
						} else {
							g = null;
							a = d
						}
					} else {
						g = null;
						a = d
					}
					for ( d = g !== null ? [ "param", [ "literal", g[ 2 ] ], g[ 4 ] ] : null; d !== null; ) {
						c.push( d );
						d = a;
						g = C();
						if ( g !== null ) {
							if ( p.substr( a, 1 ) === ":" ) {
								f = ":";
								a += 1
							} else {
								f = null;
								h && r( '":"' )
							}
							if ( f !== null ) {
								i = I();
								if ( i !== null ) {
									m =
										E();
									if ( m !== null ) {
										s = K();
										if ( s !== null ) g = [ g, f, i, m, s ];
										else {
											g = null;
											a = d
										}
									} else {
										g = null;
										a = d
									}
								} else {
									g = null;
									a = d
								}
							} else {
								g = null;
								a = d
							}
						} else {
							g = null;
							a = d
						}
						d = g !== null ? [ "param", [ "literal", g[ 2 ] ], g[ 4 ] ] : null
					}
					c = c !== null ? [ "bodies" ].concat( c ) : null;
					( h = b ) && c === null && r( "bodies" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function F() {
					var n = "reference@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a,
						d = C();
					if ( d !== null ) {
						var g = N();
						if ( g !== null ) {
							var f;
							f = "filters@" + a;
							var i = v[ f ];
							if ( i ) {
								a = i.nextPos;
								f = i.result
							} else {
								i = h;
								h = false;
								var m = [],
									s = a;
								if ( p.substr( a, 1 ) === "|" ) {
									var u = "|";
									a += 1
								} else {
									u = null;
									h && r( '"|"' )
								}
								if ( u !== null ) {
									var D = I();
									if ( D !== null ) u = [ u, D ];
									else {
										u = null;
										a = s
									}
								} else {
									u = null;
									a = s
								}
								for ( s = u !== null ? u[ 1 ] : null; s !== null; ) {
									m.push( s );
									s = a;
									if ( p.substr( a, 1 ) === "|" ) {
										u = "|";
										a += 1
									} else {
										u = null;
										h && r( '"|"' )
									}
									if ( u !== null ) {
										D = I();
										if ( D !== null ) u = [ u, D ];
										else {
											u = null;
											a = s
										}
									} else {
										u = null;
										a = s
									}
									s = u !== null ? u[ 1 ] : null
								}
								m = m !== null ? [ "filters" ].concat( m ) : null;
								( h = i ) && m === null && r( "filters" );
								v[ f ] = {
									nextPos: a,
									result: m
								};
								f = m
							}
							if ( f !== null ) {
								i = E();
								if ( i !== null ) d = [ d, g, f, i ];
								else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
						} else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? [ "reference", d[ 1 ], d[ 2 ] ] : null;
					( h = b ) && c === null && r( "reference" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function L() {
					var n = "special@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a,
						d = C();
					if ( d !== null ) {
						if ( p.substr( a, 1 ) === "~" ) {
							var g = "~";
							a += 1
						} else {
							g = null;
							h && r( '"~"' )
						}
						if ( g !== null ) {
							var f = I();
							if ( f !== null ) {
								var i = E();
								if ( i !== null ) d = [ d, g, f, i ];
								else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
						} else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? [ "special", d[ 2 ] ] :
						null;
					( h = b ) && c === null && r( "special" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function N() {
					var n = "identifier@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = V();
					c = c !== null ? X( [ "path" ].concat( c ), n ) : null;
					if ( c !== null ) c = c;
					else {
						c = I();
						c = c !== null ? X( [ "key", c ], n ) : null;
						c = c !== null ? c : null
					}( h = b ) && c === null && r( "identifier" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function V() {
					var n = "path@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a,
						d = I();
					d = d !== null ? d : "";
					if ( d !== null ) {
						var g = a;
						if ( p.substr( a, 1 ) ===
							"." ) {
							var f = ".";
							a += 1
						} else {
							f = null;
							h && r( '"."' )
						}
						if ( f !== null ) {
							var i = I();
							if ( i !== null ) f = [ f, i ];
							else {
								f = null;
								a = g
							}
						} else {
							f = null;
							a = g
						}
						g = f !== null ? f[ 1 ] : null;
						if ( g !== null )
							for ( var m = []; g !== null; ) {
								m.push( g );
								g = a;
								if ( p.substr( a, 1 ) === "." ) {
									f = ".";
									a += 1
								} else {
									f = null;
									h && r( '"."' )
								}
								if ( f !== null ) {
									i = I();
									if ( i !== null ) f = [ f, i ];
									else {
										f = null;
										a = g
									}
								} else {
									f = null;
									a = g
								}
								g = f !== null ? f[ 1 ] : null
							} else m = null;
						if ( m !== null ) d = [ d, m ];
						else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? function( s, u ) {
						if ( s ) {
							u.unshift( s );
							return [ false, u ]
						}
						return [ true, u ]
					}( d[ 0 ], d[ 1 ] ) : null;
					if ( c !==
						null ) c = c;
					else {
						if ( p.substr( a, 1 ) === "." ) {
							c = ".";
							a += 1
						} else {
							c = null;
							h && r( '"."' )
						}
						c = c !== null ? [ true, [] ] : null;
						c = c !== null ? c : null
					}( h = b ) && c === null && r( "path" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function I() {
					var n = "key@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a;
					if ( p.substr( a ).match( /^[a-zA-Z_$]/ ) !== null ) {
						var d = p.charAt( a );
						a++
					} else {
						d = null;
						h && r( "[a-zA-Z_$]" )
					}
					if ( d !== null ) {
						var g = [];
						if ( p.substr( a ).match( /^[0-9a-zA-Z_$]/ ) !== null ) {
							var f = p.charAt( a );
							a++
						} else {
							f = null;
							h && r( "[0-9a-zA-Z_$]" )
						}
						for ( ; f !== null; ) {
							g.push( f );
							if ( p.substr( a ).match( /^[0-9a-zA-Z_$]/ ) !== null ) {
								f = p.charAt( a );
								a++
							} else {
								f = null;
								h && r( "[0-9a-zA-Z_$]" )
							}
						}
						if ( g !== null ) d = [ d, g ];
						else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? d[ 0 ] + d[ 1 ].join( "" ) : null;
					( h = b ) && c === null && r( "key" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function Q() {
					var n = "inline@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a;
					if ( p.substr( a, 1 ) === '"' ) {
						var d = '"';
						a += 1
					} else {
						d = null;
						h && r( '"\\""' )
					}
					if ( d !== null ) {
						if ( p.substr( a, 1 ) === '"' ) {
							var g = '"';
							a += 1
						} else {
							g = null;
							h && r( '"\\""' )
						}
						if ( g !== null ) d = [ d,
							g
						];
						else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? [ "literal", "" ] : null;
					if ( c !== null ) c = c;
					else {
						c = a;
						if ( p.substr( a, 1 ) === '"' ) {
							d = '"';
							a += 1
						} else {
							d = null;
							h && r( '"\\""' )
						}
						if ( d !== null ) {
							g = e();
							if ( g !== null ) {
								if ( p.substr( a, 1 ) === '"' ) {
									var f = '"';
									a += 1
								} else {
									f = null;
									h && r( '"\\""' )
								}
								if ( f !== null ) d = [ d, g, f ];
								else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
						} else {
							d = null;
							a = c
						}
						c = d !== null ? [ "literal", d[ 1 ] ] : null;
						if ( c !== null ) c = c;
						else {
							c = a;
							if ( p.substr( a, 1 ) === '"' ) {
								d = '"';
								a += 1
							} else {
								d = null;
								h && r( '"\\""' )
							}
							if ( d !== null ) {
								f = T();
								if ( f !== null )
									for ( g = []; f !== null; ) {
										g.push( f );
										f = T()
									} else g = null;
								if ( g !== null ) {
									if ( p.substr( a, 1 ) === '"' ) {
										f = '"';
										a += 1
									} else {
										f = null;
										h && r( '"\\""' )
									}
									if ( f !== null ) d = [ d, g, f ];
									else {
										d = null;
										a = c
									}
								} else {
									d = null;
									a = c
								}
							} else {
								d = null;
								a = c
							}
							c = d !== null ? [ "body" ].concat( d[ 1 ] ) : null;
							c = c !== null ? c : null
						}
					}( h = b ) && c === null && r( "inline" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function T() {
					var n = "inline_part@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = L();
					if ( b !== null ) b = b;
					else {
						b = F();
						if ( b !== null ) b = b;
						else {
							b = e();
							b = b !== null ? [ "buffer", b ] : null;
							b = b !== null ? b : null
						}
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function e() {
					var n = "literal@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a,
						d = a,
						g = h;
					h = false;
					var f = x();
					h = g;
					if ( f === null ) g = "";
					else {
						g = null;
						a = d
					}
					if ( g !== null ) {
						f = a;
						d = h;
						h = false;
						var i = M();
						h = d;
						if ( i === null ) d = "";
						else {
							d = null;
							a = f
						}
						if ( d !== null ) {
							f = k();
							if ( f !== null ) f = f;
							else {
								if ( p.substr( a ).match( /^[^"]/ ) !== null ) {
									f = p.charAt( a );
									a++
								} else {
									f = null;
									h && r( '[^"]' )
								}
								f = f !== null ? f : null
							}
							if ( f !== null ) g = [ g, d, f ];
							else {
								g = null;
								a = c
							}
						} else {
							g = null;
							a = c
						}
					} else {
						g = null;
						a = c
					}
					c = g !== null ? g[ 2 ] : null;
					if ( c !== null )
						for ( var m = []; c !== null; ) {
							m.push( c );
							d = c = a;
							g = h;
							h = false;
							f = x();
							h = g;
							if ( f === null ) g = "";
							else {
								g = null;
								a = d
							}
							if ( g !== null ) {
								f = a;
								d = h;
								h = false;
								i = M();
								h = d;
								if ( i === null ) d = "";
								else {
									d = null;
									a = f
								}
								if ( d !== null ) {
									f = k();
									if ( f !== null ) f = f;
									else {
										if ( p.substr( a ).match( /^[^"]/ ) !== null ) {
											f = p.charAt( a );
											a++
										} else {
											f = null;
											h && r( '[^"]' )
										}
										f = f !== null ? f : null
									}
									if ( f !== null ) g = [ g, d, f ];
									else {
										g = null;
										a = c
									}
								} else {
									g = null;
									a = c
								}
							} else {
								g = null;
								a = c
							}
							c = g !== null ? g[ 2 ] : null
						} else m = null;
					m = m !== null ? m.join( "" ) : null;
					( h = b ) && m === null && r( "literal" );
					v[ n ] = {
						nextPos: a,
						result: m
					};
					return m
				}

				function k() {
					var n = "esc@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					if ( p.substr( a, 2 ) === '\\"' ) {
						b = '\\"';
						a += 2
					} else {
						b = null;
						h && r( '"\\\\\\""' )
					}
					b = b !== null ? '"' : null;
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function l() {
					var n = "comment@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = h;
					h = false;
					var c = a;
					if ( p.substr( a, 2 ) === "{!" ) {
						var d = "{!";
						a += 2
					} else {
						d = null;
						h && r( '"{!"' )
					}
					if ( d !== null ) {
						var g = [],
							f = a,
							i = a,
							m = h;
						h = false;
						if ( p.substr( a, 2 ) === "!}" ) {
							var s = "!}";
							a += 2
						} else {
							s = null;
							h && r( '"!}"' )
						}
						h = m;
						if ( s === null ) m = "";
						else {
							m = null;
							a = i
						}
						if ( m !== null ) {
							if ( p.length > a ) {
								i = p.charAt( a );
								a++
							} else {
								i = null;
								h && r( "any character" )
							}
							if ( i !== null ) i = [ m, i ];
							else {
								i = null;
								a = f
							}
						} else {
							i = null;
							a = f
						}
						for ( f = i !== null ? i[ 1 ] : null; f !== null; ) {
							g.push( f );
							i = f = a;
							m = h;
							h = false;
							if ( p.substr( a, 2 ) === "!}" ) {
								s = "!}";
								a += 2
							} else {
								s = null;
								h && r( '"!}"' )
							}
							h = m;
							if ( s === null ) m = "";
							else {
								m = null;
								a = i
							}
							if ( m !== null ) {
								if ( p.length > a ) {
									i = p.charAt( a );
									a++
								} else {
									i = null;
									h && r( "any character" )
								}
								if ( i !== null ) i = [ m, i ];
								else {
									i = null;
									a = f
								}
							} else {
								i = null;
								a = f
							}
							f = i !== null ? i[ 1 ] : null
						}
						if ( g !== null ) {
							if ( p.substr( a, 2 ) === "!}" ) {
								f = "!}";
								a += 2
							} else {
								f = null;
								h && r( '"!}"' )
							}
							if ( f !== null ) d = [ d, g,
								f
							];
							else {
								d = null;
								a = c
							}
						} else {
							d = null;
							a = c
						}
					} else {
						d = null;
						a = c
					}
					c = d !== null ? [ "comment", d[ 1 ].join( "" ) ] : null;
					( h = b ) && c === null && r( "comment" );
					v[ n ] = {
						nextPos: a,
						result: c
					};
					return c
				}

				function x() {
					var n = "tag@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					b = a;
					var c = C();
					if ( c !== null ) {
						if ( p.substr( a ).match( /^[#?^><+%:@\/~%]/ ) !== null ) {
							var d = p.charAt( a );
							a++
						} else {
							d = null;
							h && r( "[#?^><+%:@\\/~%]" )
						}
						if ( d !== null ) {
							var g = a,
								f = a,
								i = h;
							h = false;
							var m = E();
							h = i;
							if ( m === null ) i = "";
							else {
								i = null;
								a = f
							}
							if ( i !== null ) {
								f = a;
								m = h;
								h = false;
								var s = M();
								h = m;
								if ( s === null ) m =
									"";
								else {
									m = null;
									a = f
								}
								if ( m !== null ) {
									if ( p.length > a ) {
										f = p.charAt( a );
										a++
									} else {
										f = null;
										h && r( "any character" )
									}
									if ( f !== null ) i = [ i, m, f ];
									else {
										i = null;
										a = g
									}
								} else {
									i = null;
									a = g
								}
							} else {
								i = null;
								a = g
							}
							if ( i !== null )
								for ( var u = []; i !== null; ) {
									u.push( i );
									f = g = a;
									i = h;
									h = false;
									m = E();
									h = i;
									if ( m === null ) i = "";
									else {
										i = null;
										a = f
									}
									if ( i !== null ) {
										f = a;
										m = h;
										h = false;
										s = M();
										h = m;
										if ( s === null ) m = "";
										else {
											m = null;
											a = f
										}
										if ( m !== null ) {
											if ( p.length > a ) {
												f = p.charAt( a );
												a++
											} else {
												f = null;
												h && r( "any character" )
											}
											if ( f !== null ) i = [ i, m, f ];
											else {
												i = null;
												a = g
											}
										} else {
											i = null;
											a = g
										}
									} else {
										i = null;
										a = g
									}
								} else u =
									null;
							if ( u !== null ) {
								g = E();
								if ( g !== null ) c = [ c, d, u, g ];
								else {
									c = null;
									a = b
								}
							} else {
								c = null;
								a = b
							}
						} else {
							c = null;
							a = b
						}
					} else {
						c = null;
						a = b
					}
					if ( c !== null ) b = c;
					else {
						b = F();
						b = b !== null ? b : null
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function C() {
					var n = "ld@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					if ( p.substr( a, 1 ) === "{" ) {
						b = "{";
						a += 1
					} else {
						b = null;
						h && r( '"{"' )
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function E() {
					var n = "rd@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					if ( p.substr( a, 1 ) === "}" ) {
						b = "}";
						a += 1
					} else {
						b = null;
						h && r( '"}"' )
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function M() {
					var n = "eol@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					if ( p.substr( a, 1 ) === "\n" ) {
						b = "\n";
						a += 1
					} else {
						b = null;
						h && r( '"\\n"' )
					}
					if ( b !== null ) b = b;
					else {
						if ( p.substr( a, 2 ) === "\r\n" ) {
							b = "\r\n";
							a += 2
						} else {
							b = null;
							h && r( '"\\r\\n"' )
						}
						if ( b !== null ) b = b;
						else {
							if ( p.substr( a, 1 ) === "\r" ) {
								b = "\r";
								a += 1
							} else {
								b = null;
								h && r( '"\\r"' )
							}
							if ( b !== null ) b = b;
							else {
								if ( p.substr( a, 1 ) === "\u2028" ) {
									b = "\u2028";
									a += 1
								} else {
									b = null;
									h && r( '"\\u2028"' )
								}
								if ( b !== null ) b = b;
								else {
									if ( p.substr( a, 1 ) === "\u2029" ) {
										b = "\u2029";
										a += 1
									} else {
										b = null;
										h && r( '"\\u2029"' )
									}
									b =
										b !== null ? b : null
								}
							}
						}
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function U() {
					var n = "ws@" + a,
						b = v[ n ];
					if ( b ) {
						a = b.nextPos;
						return b.result
					}
					if ( p.substr( a ).match( /^[\t\u000b\u000c \xA0\uFEFF]/ ) !== null ) {
						b = p.charAt( a );
						a++
					} else {
						b = null;
						h && r( "[\t\u000b\u000c \\xA0\\uFEFF]" )
					}
					v[ n ] = {
						nextPos: a,
						result: b
					};
					return b
				}

				function Y() {
					var n = function( c ) {
							c.sort();
							for ( var d = null, g = [], f = 0; f < c.length; f++ )
								if ( c[ f ] !== d ) {
									g.push( c[ f ] );
									d = c[ f ]
								}
							switch ( g.length ) {
								case 0:
									return "end of input";
								case 1:
									return g[ 0 ];
								default:
									return g.slice( 0, g.length - 1 ).join( ", " ) +
										" or " + g[ g.length - 1 ]
							}
						}( W ),
						b = Math.max( a, R );
					b = b < p.length ? B( p.charAt( b ) ) : "end of input";
					return "Expected " + n + " but " + b + " found."
				}

				function Z() {
					for ( var n = 1, b = 1, c = false, d = 0; d < R; d++ ) {
						var g = p.charAt( d );
						if ( g === "\n" ) {
							c || n++;
							b = 1;
							c = false
						} else if ( g === "\r" | g === "\u2028" || g === "\u2029" ) {
							n++;
							b = 1;
							c = true
						} else {
							b++;
							c = false
						}
					}
					return {
						line: n,
						column: b
					}
				}

				function X( n, b ) {
					n.text = p.substring( b.split( "@" )[ 1 ], a );
					return n
				}
				var a = 0,
					h = true,
					R = 0,
					W = [],
					v = {},
					S = K();
				if ( S === null || a !== p.length ) {
					S = Z();
					throw new SyntaxError( Y(), S.line, S.column );
				}
				return S
			},
			toSource: function() {
				return this._source
			}
		};
		H.SyntaxError = function( p, J, B ) {
			this.name = "SyntaxError";
			this.message = p;
			this.line = J;
			this.column = B
		};
		H.SyntaxError.prototype = Error.prototype;
		return H
	}();
	o.parse = z.parse
} )( typeof exports !== "undefined" ? exports : window.dust );

//
// Dust-helpers - Additional functionality for dustjs-linkedin package v1.1.1
//
// Copyright (c) 2012, LinkedIn
// Released under the MIT License.
//

( function( dust ) {

	// Note: all error conditions are logged to console and failed silently

	/* make a safe version of console if it is not available
	 * currently supporting:
	 *   _console.log
	 * */
	var _console = ( typeof console !== 'undefined' ) ? console : {
		log: function() {
			/* a noop*/
		}
	};

	function isSelect( context ) {
		var value = context.current();
		return typeof value === "object" && value.isSelect === true;
	}

	// Utility method : toString() equivalent for functions
	function jsonFilter( key, value ) {
		if ( typeof value === "function" ) {
			return value.toString();
		}
		return value;
	}

	// Utility method: to invoke the given filter operation such as eq/gt etc
	function filter( chunk, context, bodies, params, filterOp ) {
		params = params || {};
		var body = bodies.block,
			actualKey,
			expectedValue,
			filterOpType = params.filterOpType || '';
		// when @eq, @lt etc are used as standalone helpers, key is required and hence check for defined
		if ( typeof params.key !== "undefined" ) {
			actualKey = dust.helpers.tap( params.key, chunk, context );
		} else if ( isSelect( context ) ) {
			actualKey = context.current().selectKey;
			//  supports only one of the blocks in the select to be selected
			if ( context.current().isResolved ) {
				filterOp = function() {
					return false;
				};
			}
		} else {
			_console.log( "No key specified for filter in:" + filterOpType + " helper " );
			return chunk;
		}
		expectedValue = dust.helpers.tap( params.value, chunk, context );
		// coerce both the actualKey and expectedValue to the same type for equality and non-equality compares
		if ( filterOp( coerce( expectedValue, params.type, context ), coerce( actualKey, params.type, context ) ) ) {
			if ( isSelect( context ) ) {
				context.current().isResolved = true;
			}
			// we want helpers without bodies to fail gracefully so check it first
			if ( body ) {
				return chunk.render( body, context );
			} else {
				_console.log( "Missing body block in the " + filterOpType + " helper " );
				return chunk;
			}
		} else if ( bodies[ 'else' ] ) {
			return chunk.render( bodies[ 'else' ], context );
		}
		return chunk;
	}

	function coerce( value, type, context ) {
		if ( value ) {
			switch ( type || typeof( value ) ) {
				case 'number':
					return +value;
				case 'string':
					return String( value );
				case 'boolean':
					{
						value = ( value === 'false' ? false : value );
						return Boolean( value );
					}
				case 'date':
					return new Date( value );
				case 'context':
					return context.get( value );
			}
		}

		return value;
	}

	var helpers = {

		// Utility helping to resolve dust references in the given chunk
		// uses the Chunk.render method to resolve value
		/*
		 Reference resolution rules:
		 if value exists in JSON:
		  "" or '' will evaluate to false, boolean false, null, or undefined will evaluate to false,
		  numeric 0 evaluates to true, so does, string "0", string "null", string "undefined" and string "false".
		  Also note that empty array -> [] is evaluated to false and empty object -> {} and non-empty object are evaluated to true
		  The type of the return value is string ( since we concatenate to support interpolated references

		 if value does not exist in JSON and the input is a single reference: {x}
		   dust render emits empty string, and we then return false

		 if values does not exist in JSON and the input is interpolated references : {x} < {y}
		   dust render emits <  and we return the partial output

		*/
		"tap": function( input, chunk, context ) {
			// return given input if there is no dust reference to resolve
			var output = input;
			// dust compiles a string/reference such as {foo} to function,
			if ( typeof input === "function" ) {
				// just a plain function (a.k.a anonymous functions) in the context, not a dust `body` function created by the dust compiler
				if ( input.isFunction === true ) {
					output = input();
				} else {
					output = '';
					chunk.tap( function( data ) {
						output += data;
						return '';
					} ).render( input, context ).untap();
					if ( output === '' ) {
						output = false;
					}
				}
			}
			return output;
		},

		"sep": function( chunk, context, bodies ) {
			var body = bodies.block;
			if ( context.stack.index === context.stack.of - 1 ) {
				return chunk;
			}
			if ( body ) {
				return bodies.block( chunk, context );
			} else {
				return chunk;
			}
		},

		"idx": function( chunk, context, bodies ) {
			var body = bodies.block;
			if ( body ) {
				return bodies.block( chunk, context.push( context.stack.index ) );
			} else {
				return chunk;
			}
		},

		/**
		 * contextDump helper
		 * @param key specifies how much to dump.
		 * "current" dumps current context. "full" dumps the full context stack.
		 * @param to specifies where to write dump output.
		 * Values can be "console" or "output". Default is output.
		 */
		"contextDump": function( chunk, context, bodies, params ) {
			var p = params || {},
				to = p.to || 'output',
				key = p.key || 'current',
				dump;
			to = dust.helpers.tap( to, chunk, context ),
				key = dust.helpers.tap( key, chunk, context );
			if ( key === 'full' ) {
				dump = JSON.stringify( context.stack, jsonFilter, 2 );
			} else {
				dump = JSON.stringify( context.stack.head, jsonFilter, 2 );
			}
			if ( to === 'console' ) {
				_console.log( dump );
				return chunk;
			} else {
				return chunk.write( dump );
			}
		},
		/**
		 if helper for complex evaluation complex logic expressions.
		 Note : #1 if helper fails gracefully when there is no body block nor else block
		        #2 Undefined values and false values in the JSON need to be handled specially with .length check
		           for e.g @if cond=" '{a}'.length && '{b}'.length" is advised when there are chances of the a and b been
		           undefined or false in the context
		        #3 Use only when the default ? and ^ dust operators and the select fall short in addressing the given logic,
		           since eval executes in the global scope
		        #4 All dust references are default escaped as they are resolved, hence eval will block malicious scripts in the context
		           Be mindful of evaluating a expression that is passed through the unescape filter -> |s
		 @param cond, either a string literal value or a dust reference
		              a string literal value, is enclosed in double quotes, e.g. cond="2>3"
		              a dust reference is also enclosed in double quotes, e.g. cond="'{val}'' > 3"
		  cond argument should evaluate to a valid javascript expression
		 **/

		"if": function( chunk, context, bodies, params ) {
			var body = bodies.block,
				skip = bodies[ 'else' ];
			if ( params && params.cond ) {
				var cond = params.cond;
				cond = dust.helpers.tap( cond, chunk, context );
				// eval expressions with given dust references
				if ( eval( cond ) ) {
					if ( body ) {
						return chunk.render( bodies.block, context );
					} else {
						_console.log( "Missing body block in the if helper!" );
						return chunk;
					}
				}
				if ( skip ) {
					return chunk.render( bodies[ 'else' ], context );
				}
			}
			// no condition
			else {
				_console.log( "No condition given in the if helper!" );
			}
			return chunk;
		},

		/**
		 * math helper
		 * @param key is the value to perform math against
		 * @param method is the math method,  is a valid string supported by math helper like mod, add, subtract
		 * @param operand is the second value needed for operations like mod, add, subtract, etc.
		 * @param round is a flag to assure that an integer is returned
		 */
		"math": function( chunk, context, bodies, params ) {
			//key and method are required for further processing
			if ( params && typeof params.key !== "undefined" && params.method ) {
				var key = params.key,
					method = params.method,
					// operand can be null for "abs", ceil and floor
					operand = params.operand,
					round = params.round,
					mathOut = null,
					operError = function() {
						_console.log( "operand is required for this math method" );
						return null;
					};
				key = dust.helpers.tap( key, chunk, context );
				operand = dust.helpers.tap( operand, chunk, context );
				//  TODO: handle  and tests for negatives and floats in all math operations
				switch ( method ) {
					case "mod":
						if ( operand === 0 || operand === -0 ) {
							_console.log( "operand for divide operation is 0/-0: expect Nan!" );
						}
						mathOut = parseFloat( key ) % parseFloat( operand );
						break;
					case "add":
						mathOut = parseFloat( key ) + parseFloat( operand );
						break;
					case "subtract":
						mathOut = parseFloat( key ) - parseFloat( operand );
						break;
					case "multiply":
						mathOut = parseFloat( key ) * parseFloat( operand );
						break;
					case "divide":
						if ( operand === 0 || operand === -0 ) {
							_console.log( "operand for divide operation is 0/-0: expect Nan/Infinity!" );
						}
						mathOut = parseFloat( key ) / parseFloat( operand );
						break;
					case "ceil":
						mathOut = Math.ceil( parseFloat( key ) );
						break;
					case "floor":
						mathOut = Math.floor( parseFloat( key ) );
						break;
					case "round":
						mathOut = Math.round( parseFloat( key ) );
						break;
					case "abs":
						mathOut = Math.abs( parseFloat( key ) );
						break;
					default:
						_console.log( "method passed is not supported" );
				}

				if ( mathOut !== null ) {
					if ( round ) {
						mathOut = Math.round( mathOut );
					}
					if ( bodies && bodies.block ) {
						// with bodies act like the select helper with mathOut as the key
						// like the select helper bodies['else'] is meaningless and is ignored
						return chunk.render( bodies.block, context.push( {
							isSelect: true,
							isResolved: false,
							selectKey: mathOut
						} ) );
					} else {
						// self closing math helper will return the calculated output
						return chunk.write( mathOut );
					}
				} else {
					return chunk;
				}
			}
			// no key parameter and no method
			else {
				_console.log( "Key is a required parameter for math helper along with method/operand!" );
			}
			return chunk;
		},
		/**
		select helperworks with one of the eq/gt/gte/lt/lte/default providing the functionality
		of branching conditions
		@param key,  ( required ) either a string literal value or a dust reference
		             a string literal value, is enclosed in double quotes, e.g. key="foo"
		             a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		@param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		**/
		"select": function( chunk, context, bodies, params ) {
			var body = bodies.block;
			// key is required for processing, hence check for defined
			if ( params && typeof params.key !== "undefined" ) {
				// returns given input as output, if the input is not a dust reference, else does a context lookup
				var key = dust.helpers.tap( params.key, chunk, context );
				// bodies['else'] is meaningless and is ignored
				if ( body ) {
					return chunk.render( bodies.block, context.push( {
						isSelect: true,
						isResolved: false,
						selectKey: key
					} ) );
				} else {
					_console.log( "Missing body block in the select helper " );
					return chunk;
				}
			}
			// no key
			else {
				_console.log( "No key given in the select helper!" );
			}
			return chunk;
		},

		/**
		 eq helper compares the given key is same as the expected value
		 It can be used standalone or in conjunction with select for multiple branching
		 @param key,  The actual key to be compared ( optional when helper used in conjunction with select)
		              either a string literal value or a dust reference
		              a string literal value, is enclosed in double quotes, e.g. key="foo"
		              a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		 @param value, The expected value to compare to, when helper is used standalone or in conjunction with select
		 @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		 Note : use type="number" when comparing numeric
		 **/
		"eq": function( chunk, context, bodies, params ) {
			if ( params ) {
				params.filterOpType = "eq";
			}
			return filter( chunk, context, bodies, params, function( expected, actual ) {
				return actual === expected;
			} );
		},

		/**
		 ne helper compares the given key is not the same as the expected value
		 It can be used standalone or in conjunction with select for multiple branching
		 @param key,  The actual key to be compared ( optional when helper used in conjunction with select)
		              either a string literal value or a dust reference
		              a string literal value, is enclosed in double quotes, e.g. key="foo"
		              a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		 @param value, The expected value to compare to, when helper is used standalone or in conjunction with select
		 @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		 Note : use type="number" when comparing numeric
		 **/
		"ne": function( chunk, context, bodies, params ) {
			if ( params ) {
				params.filterOpType = "ne";
				return filter( chunk, context, bodies, params, function( expected, actual ) {
					return actual !== expected;
				} );
			}
			return chunk;
		},

		/**
		 lt helper compares the given key is less than the expected value
		 It can be used standalone or in conjunction with select for multiple branching
		 @param key,  The actual key to be compared ( optional when helper used in conjunction with select)
		              either a string literal value or a dust reference
		              a string literal value, is enclosed in double quotes, e.g. key="foo"
		              a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		 @param value, The expected value to compare to, when helper is used standalone  or in conjunction with select
		 @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		 Note : use type="number" when comparing numeric
		 **/
		"lt": function( chunk, context, bodies, params ) {
			if ( params ) {
				params.filterOpType = "lt";
				return filter( chunk, context, bodies, params, function( expected, actual ) {
					return actual < expected;
				} );
			}
		},

		/**
		 lte helper compares the given key is less or equal to the expected value
		 It can be used standalone or in conjunction with select for multiple branching
		 @param key,  The actual key to be compared ( optional when helper used in conjunction with select)
		              either a string literal value or a dust reference
		              a string literal value, is enclosed in double quotes, e.g. key="foo"
		              a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		 @param value, The expected value to compare to, when helper is used standalone or in conjunction with select
		 @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		 Note : use type="number" when comparing numeric
		**/
		"lte": function( chunk, context, bodies, params ) {
			if ( params ) {
				params.filterOpType = "lte";
				return filter( chunk, context, bodies, params, function( expected, actual ) {
					return actual <= expected;
				} );
			}
			return chunk;
		},


		/**
		 gt helper compares the given key is greater than the expected value
		 It can be used standalone or in conjunction with select for multiple branching
		 @param key,  The actual key to be compared ( optional when helper used in conjunction with select)
		              either a string literal value or a dust reference
		              a string literal value, is enclosed in double quotes, e.g. key="foo"
		              a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		 @param value, The expected value to compare to, when helper is used standalone  or in conjunction with select
		 @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		 Note : use type="number" when comparing numeric
		 **/
		"gt": function( chunk, context, bodies, params ) {
			// if no params do no go further
			if ( params ) {
				params.filterOpType = "gt";
				return filter( chunk, context, bodies, params, function( expected, actual ) {
					return actual > expected;
				} );
			}
			return chunk;
		},

		/**
		  gte helper, compares the given key is greater than or equal to the expected value
		  It can be used standalone or in conjunction with select for multiple branching
		  @param key,  The actual key to be compared ( optional when helper used in conjunction with select)
		               either a string literal value or a dust reference
		               a string literal value, is enclosed in double quotes, e.g. key="foo"
		               a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
		  @param value, The expected value to compare to, when helper is used standalone or in conjunction with select
		  @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
		  Note : use type="number" when comparing numeric
		 **/
		"gte": function( chunk, context, bodies, params ) {
			if ( params ) {
				params.filterOpType = "gte";
				return filter( chunk, context, bodies, params, function( expected, actual ) {
					return actual >= expected;
				} );
			}
			return chunk;
		},

		// to be used in conjunction with the select helper
		// TODO: fix the helper to do nothing when used standalone
		"default": function( chunk, context, bodies, params ) {
			// does not require any params
			if ( params ) {
				params.filterOpType = "default";
			}
			return filter( chunk, context, bodies, params, function( expected, actual ) {
				return true;
			} );
		},

		/**
		 * size helper prints the size of the given key
		 * Note : size helper is self closing and does not support bodies
		 * @param key, the element whose size is returned
		 */
		"size": function( chunk, context, bodies, params ) {
			var key, value = 0,
				nr, k;
			params = params || {};
			key = params.key;
			if ( !key || key === true ) { //undefined, null, "", 0
				value = 0;
			} else if ( dust.isArray( key ) ) { //array
				value = key.length;
			} else if ( !isNaN( parseFloat( key ) ) && isFinite( key ) ) { //numeric values
				value = key;
			} else if ( typeof key === "object" ) { //object test
				//objects, null and array all have typeof ojbect...
				//null and array are already tested so typeof is sufficient http://jsperf.com/isobject-tests
				nr = 0;
				for ( k in key ) {
					if ( Object.hasOwnProperty.call( key, k ) ) {
						nr++;
					}
				}
				value = nr;
			} else {
				value = ( key + '' ).length; //any other value (strings etc.)
			}
			return chunk.write( value );
		}


	};

	dust.helpers = helpers;

} )( typeof exports !== 'undefined' ? module.exports = require( 'dustjs-linkedin' ) : dust );

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
( function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD. Register as anonymous module.
		define( [ 'jquery' ], factory );
	} else {
		// Browser globals.
		factory( jQuery );
	}
}( function( $ ) {

	var pluses = /\+/g;

	function raw( s ) {
		return s;
	}

	function decoded( s ) {
		return decodeURIComponent( s.replace( pluses, ' ' ) );
	}

	function converted( s ) {
		if ( s.indexOf( '"' ) === 0 ) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice( 1, -1 ).replace( /\\"/g, '"' ).replace( /\\\\/g, '\\' );
		}
		try {
			return config.json ? JSON.parse( s ) : s;
		} catch ( er ) {}
	}

	var config = $.cookie = function( key, value, options ) {

		// write
		if ( value !== undefined ) {
			options = $.extend( {}, config.defaults, options );

			if ( typeof options.expires === 'number' ) {
				var days = options.expires,
					t = options.expires = new Date();
				t.setDate( t.getDate() + days );
			}

			value = config.json ? JSON.stringify( value ) : String( value );

			return ( document.cookie = [
				config.raw ? key : encodeURIComponent( key ),
				'=',
				config.raw ? value : encodeURIComponent( value ),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
			].join( '' ) );
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split( '; ' );
		var result = key ? undefined : {};
		for ( var i = 0, l = cookies.length; i < l; i++ ) {
			var parts = cookies[ i ].split( '=' );
			var name = decode( parts.shift() );
			var cookie = decode( parts.join( '=' ) );

			if ( key && key === name ) {
				result = converted( cookie );
				break;
			}

			if ( !key ) {
				result[ name ] = converted( cookie );
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function( key, options ) {
		if ( $.cookie( key ) !== undefined ) {
			// Must not alter options, thus extending a fresh object...
			$.cookie( key, '', $.extend( {}, options, {
				expires: -1
			} ) );
			return true;
		}
		return false;
	};

} ) );

// jQuery Mask Plugin v1.6.5
// github.com/igorescobar/jQuery-Mask-Plugin
( function( g ) {
	"function" === typeof define && define.amd ? define( [ "jquery" ], g ) : g( window.jQuery || window.Zepto )
} )( function( g ) {
	var z = function( b, f, d ) {
		var l = this,
			x, y;
		b = g( b );
		f = "function" === typeof f ? f( b.val(), void 0, b, d ) : f;
		l.init = function() {
			d = d || {};
			l.byPassKeys = [ 9, 16, 17, 18, 36, 37, 38, 39, 40, 91 ];
			l.translation = {
				0: {
					pattern: /\d/
				},
				9: {
					pattern: /\d/,
					optional: !0
				},
				"#": {
					pattern: /\d/,
					recursive: !0
				},
				A: {
					pattern: /[a-zA-Z0-9]/
				},
				S: {
					pattern: /[a-zA-Z]/
				}
			};
			l.translation = g.extend( {}, l.translation, d.translation );
			l = g.extend( !0, {}, l, d );
			y =
				c.getRegexMask();
			b.each( function() {
				!1 !== d.maxlength && b.attr( "maxlength", f.length );
				d.placeholder && b.attr( "placeholder", d.placeholder );
				b.attr( "autocomplete", "off" );
				c.destroyEvents();
				c.events();
				var a = c.getCaret();
				c.val( c.getMasked() );
				c.setCaret( a + c.getMaskCharactersBeforeCount( a, !0 ) )
			} )
		};
		var c = {
			getCaret: function() {
				var a;
				a = 0;
				var e = b.get( 0 ),
					c = document.selection,
					e = e.selectionStart;
				if ( c && !~navigator.appVersion.indexOf( "MSIE 10" ) ) a = c.createRange(), a.moveStart( "character", b.is( "input" ) ? -b.val().length : -b.text().length ),
					a = a.text.length;
				else if ( e || "0" === e ) a = e;
				return a
			},
			setCaret: function( a ) {
				if ( b.is( ":focus" ) ) {
					var e;
					e = b.get( 0 );
					e.setSelectionRange ? e.setSelectionRange( a, a ) : e.createTextRange && ( e = e.createTextRange(), e.collapse( !0 ), e.moveEnd( "character", a ), e.moveStart( "character", a ), e.select() )
				}
			},
			events: function() {
				b.on( "keydown.mask", function() {
					x = c.val()
				} );
				b.on( "keyup.mask", c.behaviour );
				b.on( "paste.mask drop.mask", function() {
					setTimeout( function() {
						b.keydown().keyup()
					}, 100 )
				} );
				b.on( "change.mask", function() {
					b.data( "changeCalled", !0 )
				} );
				b.on( "blur.mask", function( a ) {
					a = g( a.target );
					a.prop( "defaultValue" ) !== a.val() && ( a.prop( "defaultValue", a.val() ), a.data( "changeCalled" ) || a.trigger( "change" ) );
					a.data( "changeCalled", !1 )
				} );
				b.on( "focusout.mask", function() {
					d.clearIfNotMatch && !y.test( c.val() ) && c.val( "" )
				} )
			},
			getRegexMask: function() {
				var a = [],
					e, b, c, d, k;
				for ( k in f )( e = l.translation[ f[ k ] ] ) ? ( b = e.pattern.toString().replace( /.{1}$|^.{1}/g, "" ), c = e.optional, ( e = e.recursive ) ? ( a.push( f[ k ] ), d = {
					digit: f[ k ],
					pattern: b
				} ) : a.push( c || e ? b + "?" : b ) ) : a.push( "\\" +
					f[ k ] );
				a = a.join( "" );
				d && ( a = a.replace( RegExp( "(" + d.digit + "(.*" + d.digit + ")?)" ), "($1)?" ).replace( RegExp( d.digit, "g" ), d.pattern ) );
				return RegExp( a )
			},
			destroyEvents: function() {
				b.off( "keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask focusout.mask" ).removeData( "changeCalled" )
			},
			val: function( a ) {
				var e = b.is( "input" );
				return 0 < arguments.length ? e ? b.val( a ) : b.text( a ) : e ? b.val() : b.text()
			},
			getMaskCharactersBeforeCount: function( a, e ) {
				for ( var b = 0, c = 0, d = f.length; c < d && c < a; c++ ) l.translation[ f.charAt( c ) ] || ( a =
					e ? a + 1 : a, b++ );
				return b
			},
			determineCaretPos: function( a, b, d, h ) {
				return l.translation[ f.charAt( Math.min( a - 1, f.length - 1 ) ) ] ? Math.min( a + d - b - h, d ) : c.determineCaretPos( a + 1, b, d, h )
			},
			behaviour: function( a ) {
				a = a || window.event;
				var b = a.keyCode || a.which;
				if ( -1 === g.inArray( b, l.byPassKeys ) ) {
					var d = c.getCaret(),
						f = c.val(),
						n = f.length,
						k = d < n,
						p = c.getMasked(),
						m = p.length,
						q = c.getMaskCharactersBeforeCount( m - 1 ) - c.getMaskCharactersBeforeCount( n - 1 );
					p !== f && c.val( p );
					!k || 65 === b && a.ctrlKey || ( 8 !== b && 46 !== b && ( d = c.determineCaretPos( d, n, m, q ) ),
						c.setCaret( d ) );
					return c.callbacks( a )
				}
			},
			getMasked: function( a ) {
				var b = [],
					g = c.val(),
					h = 0,
					n = f.length,
					k = 0,
					p = g.length,
					m = 1,
					q = "push",
					s = -1,
					r, u;
				d.reverse ? ( q = "unshift", m = -1, r = 0, h = n - 1, k = p - 1, u = function() {
					return -1 < h && -1 < k
				} ) : ( r = n - 1, u = function() {
					return h < n && k < p
				} );
				for ( ; u(); ) {
					var v = f.charAt( h ),
						w = g.charAt( k ),
						t = l.translation[ v ];
					if ( t ) w.match( t.pattern ) ? ( b[ q ]( w ), t.recursive && ( -1 === s ? s = h : h === r && ( h = s - m ), r === s && ( h -= m ) ), h += m ) : t.optional && ( h += m, k -= m ), k += m;
					else {
						if ( !a ) b[ q ]( v );
						w === v && ( k += m );
						h += m
					}
				}
				a = f.charAt( r );
				n !== p + 1 || l.translation[ a ] ||
					b.push( a );
				return b.join( "" )
			},
			callbacks: function( a ) {
				var e = c.val(),
					g = c.val() !== x;
				if ( !0 === g && "function" === typeof d.onChange ) d.onChange( e, a, b, d );
				if ( !0 === g && "function" === typeof d.onKeyPress ) d.onKeyPress( e, a, b, d );
				if ( "function" === typeof d.onComplete && e.length === f.length ) d.onComplete( e, a, b, d )
			}
		};
		l.remove = function() {
			var a = c.getCaret(),
				b = c.getMaskCharactersBeforeCount( a );
			c.destroyEvents();
			c.val( l.getCleanVal() ).removeAttr( "maxlength" );
			c.setCaret( a - b )
		};
		l.getCleanVal = function() {
			return c.getMasked( !0 )
		};
		l.init()
	};
	g.fn.mask = function( b, f ) {
		this.unmask();
		return this.each( function() {
			g( this ).data( "mask", new z( this, b, f ) )
		} )
	};
	g.fn.unmask = function() {
		return this.each( function() {
			try {
				g( this ).data( "mask" ).remove()
			} catch ( b ) {}
		} )
	};
	g.fn.cleanVal = function() {
		return g( this ).data( "mask" ).getCleanVal()
	};
	g( "*[data-mask]" ).each( function() {
		var b = g( this ),
			f = {};
		"true" === b.attr( "data-mask-reverse" ) && ( f.reverse = !0 );
		"false" === b.attr( "data-mask-maxlength" ) && ( f.maxlength = !1 );
		"true" === b.attr( "data-mask-clearifnotmatch" ) && ( f.clearIfNotMatch = !0 );
		b.mask( b.attr( "data-mask" ), f )
	} )
} );

/**
 * @author McGowan
 * @namespace
 */
var Twc = Twc || {}

/** @author McGowan
 * Logs a message to on-screen console for ipad and stuff
 * @param o {Object} object to show
 * @param isError {Boolean} indicates error message
 */
function logOsd( o, isError ) {
	var $osdConsole = $( '#twcLog' );
	var color = isError ? 'red' : 'lime';
	if ( $osdConsole.length === 0 ) {
		logEl = $( '<div id="twcLog"  style="z-index:5000;font-size: 11px;border-color: #dddddd; border-style: solid; border-width: 1px 1px 0 0; padding: 2px; position: fixed; bottom: 0; right: 0px;background: black !important; color: lime; font-size: 11px; font-family: arial;">\
		           <div style="color: #aaaaaa !important; text-align: right;"><a style="font-size; 9px !important; color: #aaaaaa !important; " href="javascript:void(0)" onclick="$(\'#twcLog\').hide().find(\'.log-entry\').remove();return false;">clear</a></div>\
		           <div id="twcLogContent" style="font-size: 11px; padding: 5px;"></div>\
		         </div>' );
		$( 'body' ).append( logEl );
		$osdConsole = $( '#twcLog' );
	}
	$osdConsole.find( '#twcLogContent' ).append( '<div style="color: ' + color + ';" class="log-entry">' + o + '</div>' );
	$osdConsole.show();
}

/** Try/Catch convenince of console.log(o)
 * @author McGowan
 * @param {Object} o Object to log
 * @param {Boolean} osd use on-screen display (for mobile devices)
 */
function log( o, osd ) {
	var onScreen = osd || Twc.Settings.forceLogOsd;
	try {
		console.log( o )
	} catch ( e ) {}
	if ( onScreen ) {
		logOsd( o, 0 );
	}
}
/** Try/Catch convenince of console.error(o)
 * @author McGowan
 * @param {Object} o Object to log
 * @param {Boolean} osd use on-screen display (for mobile devices)
 */
function error( o, osd ) {
	var onScreen = osd || Twc.Settings.forceErrorOsd;
	try {
		console.error( o )
	} catch ( e ) {}
	if ( onScreen ) {
		logOsd( o, 1 );
	}
}
/** Try/Catch convenince of console.warn(o)
 * @author McGowan
 * @param {Object} o Object to log
 * @param {Boolean} osd use on-screen display (for mobile devices)
 */
function warn( o, osd ) {
	var onScreen = osd || Twc.Settings.forceErrorOsd;
	try {
		console.warn( o )
	} catch ( e ) {}
	if ( onScreen ) {
		logOsd( o, 1 );
	}
}
/** Try/Catch convenince of console.dir(o)
 * @author McGowan
 * @param {Object} o Object to log
 */
function dir( o ) {
	try {
		console.dir( o )
	} catch ( e ) {}
}


if ( Modernizr ) {
	// Ensure IE CSS selector (ie6,ie7,etc...) is set
	// from http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
	if ( Modernizr.addTest ) {
		rv = -1;
		if ( navigator.appName == 'Microsoft Internet Explorer' ) {
			rv = document.documentMode;
			if ( rv == undefined || rv == 0 ) {
				var ua = navigator.userAgent;
				var re = new RegExp( "MSIE ([0-9]{1,}[\.0-9]{0,})" );
				if ( re.exec( ua ) != null )
					rv = parseFloat( RegExp.$1 );
			}
		}
		if ( rv != -1 ) {
			Modernizr.addTest( 'ie' + rv, function() {
				return true;
			} );
		}
	}

	/* Adds setObject and getObject to localStorage prototype
	 * Allows saving and retrieving of JSON objects
	 * Uses short-circuit evaluation and returns null if key does not exist
	 */
	if ( Modernizr.localstorage ) {
		Storage.prototype.setObject = function( key, value ) {
			this.setItem( key, JSON.stringify( value ) );
		}
		Storage.prototype.getObject = function( key ) {
			var value = this.getItem( key );
			return value && JSON.parse( value );
		}
	}
}

Twc = Twc || {};
Twc.Checkout = Twc.Checkout || {};
/**
 *  Manages functionality for loading component
 */
Twc.Checkout.Loading = ( function() {
	var defaultOpts = {
		width: '600px',
		height: '200px'
	};
	var fadeDuration = 400;
	var $overlay = $( '.loading-overlay-bkg' );
	var $window = $( '.loading-window' );

	/**
	 * @param {String} value 40px or 100% string with a numerical value and a non-numerical unit.
	 * @returns {Array} [numberValue, unit], [-1, ''] on error
	 */
	function getNumberUnit( value ) {
		var s = $.trim( value );
		var val = parseInt( s, 10 );
		var unit = s.match( /[^0-9^ ]+/g ).join( '' ); // get all non numbers and non spaces and combine
		return [ val, unit ];
	}

	/** Resizes the loading component based on the options shown.
	 * @param {object} options Object of dimensions with units, ie {width: '600px', height: '200px'}
	 */
	function resizeLoadingComponent( options ) {
		// custom widths/heights should only be set for desktop.
		// tablet and mobile should always show full width/heights. Ensure CSS uses !important
		if ( options.width ) {
			// get unit (px or %) and number
			var numUnit = getNumberUnit( options.width );

			var width = numUnit[ 0 ] + numUnit[ 1 ];
			var marginLeft = -( numUnit[ 0 ] / 2 ) + numUnit[ 1 ];

			$window.css( {
				'left': '50%',
				'right': 'auto',
				'width': width,
				'marginLeft': marginLeft
			} );
		}

		if ( options.height ) {
			// get unit (px or %) and number
			var numUnit = getNumberUnit( options.height );

			var height = numUnit[ 0 ] + numUnit[ 1 ];
			var top = '40%';
			var marginTop = -( numUnit[ 0 ] / 2 ) + 'px';

			// percentages handle height differently
			if ( numUnit[ 1 ] === '%' ) {
				marginTop = 0;
			}
			$window.css( {
				'bottom': 'auto',
				'height': height,
				'top': top,
				'marginTop': marginTop
			} );
		}
	}


	/**
	 * Starts a loading component - display
	 * @param {object} options Object of dimensions with units, ie {width: '600px', height: '200px'}
	 */
	function startLoadingComponent( options ) {
		log( 'Twc.Checkout.Loading.startLoadingComponent()' );

		$overlay.removeClass( 'hidden' ).fadeIn( fadeDuration );
		resizeLoadingComponent( options );

		$window.removeClass( 'hidden' ).fadeIn( fadeDuration );
		$window.css( 'position', 'fixed' );
	}

	return {
		/**
		 * Show busy/processing content and dim overlay
		 * @param {object} opts Object of dimensions with units, ie {width: '600px', height: '200px'}
		 */
		show: function( opts ) {
			log( 'Twc.Checkout.Loading.show()' );
			startLoadingComponent( opts || defaultOpts );
		},

		/**
		 * Hide the busy/processing content and un-dim overlay
		 */
		hide: function() {
			log( 'Twc.Checkout.Loading.hide()' );
			// hide previous modal if exists
			if ( $window ) {
				$window.css( 'position', '' );
				//If the window is being displayed
				if ( !$window.hasClass( 'hidden' ) ) {
					//Hide it
					$window.addClass( 'hidden' )
				}
			}
			if ( $overlay ) {
				//If the overlay (grey overlay) is being displayed
				if ( !$overlay.hasClass( 'hidden' ) ) {
					//Hide it
					$overlay.addClass( 'hidden' )
				}
			}
		}
	};
}() );

/**
 * Manages breakpoint changes and functions. Binds to window.onResize(), so don't initialize all the time unless needed
 * @namespace
 * @author McGowan
 */
Twc.Breakpoint = ( function() {

	var isInitialized = false;
	var $window;
	var currentBreakpoint;
	var onChange = [];
	var onChangeToDesktop = [];
	var onChangeFromDesktop = [];


	function getCurrentBreakpoint() {
		var w = $window.width();
		if ( w < Twc.Settings.breakpoint.tablet )
			return "mobile"

		if ( w < Twc.Settings.breakpoint.desktop )
			return "tablet";

		return 'desktop';
	}

	function runFunctions( fArray ) {
		for ( var i = 0; i < fArray.length; i++ ) {
			var f = fArray[ i ];
			if ( 'function' === typeof f ) {
				f( getCurrentBreakpoint() );
			}
		}
	}

	function breakpointChanged( bpoint ) {
		runFunctions( onChange );
		if ( currentBreakpoint === 'desktop' && bpoint === 'tablet' ) {
			runFunctions( onChangeFromDesktop )
		} else if ( currentBreakpoint === 'tablet' && bpoint === 'desktop' ) {
			runFunctions( onChangeToDesktop )
		}
		currentBreakpoint = bpoint;
	}

	return {
		init: function() {
			if ( isInitialized ) {
				warn( 'Twc.Breakpoint.init(): Already initialized.' );
				return;
			}

			$window = $( window );
			currentBreakpoint = getCurrentBreakpoint();

			$window.on( 'resize', function() {
				var breakpoint = getCurrentBreakpoint();
				if ( breakpoint !== currentBreakpoint ) {
					breakpointChanged( breakpoint );
				}

			} );

			isInitialized = true;
		},

		which: getCurrentBreakpoint,

		onChange: function( f ) {
			onChange.push( f );
		},

		onChangeToDesktop: function( f ) {
			onChangeToDesktop.push( f );
		},

		onChangeFromDesktop: function( f ) {
			onChangeFromDesktop.push( f );
		}
	}

} )();

/**
 * Globals
 */
Twc.Analytics = {
	// Stores the variable mappings from SiteCatalyst framework
	scVars: [],
	cqVars: [],

	// Will be set by Twc.Analytics.Core.initialize()
	bodyId: '',
	pageName: '',
	buyflowType: '',
	serviceRegion: '',
	serviceState: '',
	serviceZip: '',
	breadcrumb: '',
	houseStatus: '',
	componentPath: '',

	/**
	 * Dispatches an event defined in Twc.Analytics.Dispatchable.*
	 * Accepts indefinite amount of arguments, but first argument must be string of event
	 * name with corresponding function. e.g. dispatch('elementClick', param1, param2, etc...);
	 */
	dispatch: function() {
		try {
			if ( !typeof arguments[ 0 ] === 'string' ) {
				error( 'Analytics.dispatch(): first argument must be event name' );
				return;
			}
			var args = Array.prototype.slice.call( arguments ); // convert arguments to Array
			var eventName = args.shift(); // we don't need event name anymore. don't pass it on
			var match = false;

			// Searches for the matching dispatchable event in Twc.Analytics.Dispatchable.*
			for ( var namespace in Twc.Analytics.Dispatchable ) {
				var f = Twc.Analytics.Dispatchable[ namespace ][ eventName ];
				if ( 'function' === typeof f ) {
					f.apply( f, args );
					match = true;
					if ( namespace === 'PageLoad' ) { //If this is a PageLoad event, detect and fire any error analytics
						Twc.Analytics.Core.errorAnalytics();
					}
					break;
				}
			}
			if ( !match ) {
				error( 'Twc.Analytics.dispatch(): no function defined for ' + eventName );
				return;
			}
		} catch ( e ) {
			// don't show errors on QA servers
			if ( !( /^twccheckout\./.test( window.location.hostname ) ) ) {
				Twc.Checkout.Util.catchError( e );
			}
		}
	}
};

/**
 * Handles all initial page load tasks
 * Produces the data-tracking object used by SC framework to fire initial page load s.t()
 */
Twc.Analytics.Core = ( function() {

	//BodyID constants
	var NEW_SERVICES = 'new_services';
	var YOUR_SERVICES = 'your_services';
	var SELECT_INTERNET = 'select_internet';
	var CUSTOMIZE_INTERNET = 'customize_internet';
	var SELECT_PACKAGES = 'select_packages';
	var SELECT_TV = 'select_tv';
	var CUSTOMIZE_TV = 'customize_tv';
	var SELECT_PHONE = 'select_phone';
	var CUSTOMIZE_PHONE = 'customize_phone';
	var ORDER_REVIEW = 'order_review';
	var BILLING = 'billing';
	var ORDER_SUMMARY = 'order_summary';
	var ORDER_CONFIRM_INTERNET = 'order_confirm_internet';

	/**
	 * Produces a string of CQ event vars (which map to SC event## vars) for the initial page load s.t()
	 * Any dynamic logic which could alter the generated events for page load should be placed in the cases
	 * Example: event: internet,landing in data-tracking object would map to event: event28,event25 in the page load call
	 * @returns {*}
	 */
	function getEvent() {
		var event = '';

		if ( !Twc.Analytics.bodyId ) {
			error( 'Twc.Analytics.Core.getEvent(): No Body ID tag detected on page' );
		} else {
			switch ( Twc.Analytics.bodyId ) {
				case NEW_SERVICES:
				case YOUR_SERVICES:
				case SELECT_PACKAGES:
					event = 'landing';
					break;
				case SELECT_TV:
				case CUSTOMIZE_TV:
					event = 'tv';
					break;
				case SELECT_INTERNET:
				case CUSTOMIZE_INTERNET:
					event = 'internet';
					break;
				case SELECT_PHONE:
				case CUSTOMIZE_PHONE:
					event = 'phone';
					break;
				case ORDER_REVIEW:
					event = 'orderReview';
					if ( $( '.installation-options input.radio.installation' ).length > 0 ) {
						createEventTrackingElement( 'install' );
					}
					break;
				case ORDER_SUMMARY:
					event = 'order_summary';
					if ( $( '#js-phone-form' ).length === 1 ) {
						createEventTrackingElement( 'agreements' );
					}
					break;
				case BILLING:
					event = 'billingContactInfo';
					break;
				case ORDER_CONFIRM_INTERNET:
					var products = $( '#analyticsProductString' ).val();
					event = 'purchase';
					if ( products.indexOf( 'event66' ) !== -1 ) createEventTrackingElement( 'oneTimeRevenue' );
					if ( products.indexOf( 'event73' ) !== -1 ) createEventTrackingElement( 'confirmationFlag' );
					break;
				default:
					log( 'Twc.Analytics.Core.getEvent(): No events defined for ' + Twc.Analytics.bodyId );
					event = null;
			}

			//Append the 'landing' event if this is not new_services, your_services, or select_packages page, and is qso, addOffers or product flow
			if ( ( isProductFlow() || isQsoLanding() || isUnqualifiedOffersLanding() ) && $.inArray( Twc.Analytics.bodyId, [ NEW_SERVICES, YOUR_SERVICES, SELECT_PACKAGES ] ) === -1 ) {
				var cartProduct = getCartTrackingObject();
				createEventTrackingElement( 'landing' );
				createCartOpenEventTrackingElement( [ 'cartOpen' ], getCartTrackingObject( cartProduct.productName ).productString, cartProduct.cartFirstProductString );
			}
		}

		return event;
	}

	/**
	 * Produces the pageName string for the initial page load s.t()
	 * Any dynamic logic which could modify the pageName for initial page load should be placed here
	 * @returns {string}
	 */
	function getPageName() {
		var pageName = Twc.Analytics.buyflowType;
		var pageType;
		var lob;

		if ( !Twc.Analytics.bodyId ) {
			error( 'Twc.Analytics.Core.getPageName(): No Body ID tag detected on page' );
		} else {
			switch ( Twc.Analytics.bodyId ) {
				case NEW_SERVICES:
					var $activeTab = $( '.tabs .tab-nav li.active' );
					if ( $activeTab.data( 'tabname' ) === 'sap' ) {
						pageName += ' > packages > select a package';
					} else if ( $activeTab.data( 'tabname' ) === 'syos' ) {
						pageName += ' > packages > select your own service';
					}
					break;
				case YOUR_SERVICES:
					pageName += ' > add or upgrade services';
					break;
				case SELECT_INTERNET:
					pageType = $( '.plans' ).data( 'existing-lob' ) ? 'upgrade services' : 'select services';
					pageName += ' > ' + pageType + ' > internet';
					break;
				case CUSTOMIZE_INTERNET:
					pageName += ' > configure services > internet';
					break;
				case SELECT_PACKAGES:
					pageName += ' > packages';
					break;
				case SELECT_TV:
					pageType = $( '.plans' ).data( 'existing-lob' ) ? 'upgrade services' : 'select services';
					pageName += ' > ' + pageType + ' > digital cable';
					break;
				case CUSTOMIZE_TV:
					var $premiumChannelsAccordion;
					if ( $( '.tv-customize-accordion > .collapsible' ).length === 2 ) {
						$premiumChannelsAccordion = $( '.tv-customize-accordion > .collapsible' ).eq( 1 );
					} else {
						$premiumChannelsAccordion = $( '.tv-customize-accordion > .collapsible' ).eq( 0 );
					}
					lob = $premiumChannelsAccordion.hasClass( "active" ) ? 'digital cable > full view' : 'digital cable';
					pageName += ' > configure services > ' + lob;
					break;
				case SELECT_PHONE:
					pageType = $( '.plans' ).data( 'existing-lob' ) ? 'upgrade services' : 'select services';
					pageName += ' > ' + pageType + ' > digital phone';
					break;
				case CUSTOMIZE_PHONE:
					pageType = 'configure services'; //default page type is configure services
					lob = 'digital phone';
					var $activeAccordion = $( '.phone-customize-accordion .collapsible.active' );

					//full view if more than one accordion is open
					if ( $activeAccordion.length > 1 ) {
						lob += ' > full view';
					}

					//if sections 2, 3, or 4 are the first open one, change pageType
					switch ( $activeAccordion.index() ) {
						case 1:
							pageType = 'select or transfer number';
							break;
						case 2:
							pageType = 'installation details';
							break;
						case 3:
							pageType = 'agreements';
							break;
						default:
							pageType = 'configure services';
					}
					pageName += ' > ' + pageType + ' > ' + lob;
					break;
				case ORDER_REVIEW:
					var twoOptions = $( '.installation-options input[value="' + Twc.Settings.splitTechnicianVisitId + '"]' ).length > 0;
					pageType = twoOptions ? 'review order with options' : 'review order';
					pageName += ' > ' + pageType;
					break;
				case BILLING:
					pageName += ' > setup your account > user account and payment information';
					break;
				case ORDER_SUMMARY:
					pageName += ' > order > order summary ';
					break;
				case ORDER_CONFIRM_INTERNET:
					pageName += ' > order > order confirmation';
					break;
				default:
					log( 'Twc.Analytics.Core.getPageName(): No pageName defined for ' + Twc.Analytics.bodyId );
			}
		}

		return pageName;
	}

	/**
	 * Produces the breadcrumb string for the initial page load s.t()
	 * Any dynamic logic which could alter the breadcrumb for initial page load should be placed here
	 * @returns {string}
	 */
	function getBreadcrumb() {
		var breadcrumb = Twc.Analytics.buyflowType + ':';

		if ( !Twc.Analytics.bodyId ) {
			error( 'Twc.Analytics.Core.getBreadcrumb(): No Body ID tag detected on page' );
		} else {
			switch ( Twc.Analytics.bodyId ) {
				case NEW_SERVICES:
					var $activeTab = $( '.tabs .tab-nav li.active' );
					if ( $activeTab.data( 'tabname' ) === 'sap' ) {
						breadcrumb += 'packages';
					} else if ( $activeTab.data( 'tabname' ) === 'syos' ) {
						breadcrumb += 'select your service';
					}
					break;
				case SELECT_INTERNET:
				case CUSTOMIZE_INTERNET:
				case SELECT_TV:
				case CUSTOMIZE_TV:
				case SELECT_PHONE:
				case CUSTOMIZE_PHONE:
					breadcrumb += 'select & customize';
					break;
				case YOUR_SERVICES:
					breadcrumb += 'current services';
					break;
				case SELECT_PACKAGES:
					breadcrumb += 'packages';
					break;
				case ORDER_REVIEW:
					breadcrumb += 'review';
					break;
				case ORDER_SUMMARY:
					breadcrumb += 'summary';
					break;
				case BILLING:
					breadcrumb += 'billing';
					break;
				case ORDER_CONFIRM_INTERNET:
					breadcrumb += 'confirm';
					break;
				default:
					log( 'Twc.Analytics.Core.getBreadcrumb(): No breadcrumb defined for ' + Twc.Analytics.bodyId );
			}
		}

		return breadcrumb;
	}

	/**
	 * Produces the existingLOS string for the initial page load s.t()
	 * Will not append to data-tracking object if not defined for the page
	 * @returns {string}
	 */
	function getExistingLOS() {
		if ( Twc.Analytics.bodyId === YOUR_SERVICES || isQsoLanding() || isUnqualifiedOffersLanding() ) {
			var tvLOS = 'tv:none';
			var internetLOS = 'hso:none';
			var phoneLOS = 'ph:none';

			$( '.existingLOS' ).each( function() {
				var title = $( this ).data( 'title' );

				switch ( $( this ).data( 'lob' ) ) {
					case 'TV':
						tvLOS = tvLOS.replace( 'none', title );
						break;
					case 'Internet':
						internetLOS = internetLOS.replace( 'none', title );
						break;
					case 'Phone':
						phoneLOS = phoneLOS.replace( 'none', title );
						break;
					default:
						log( "Invalid LOB for existingLOB analytics elements" );
				}
			} );

			return tvLOS + '||' + internetLOS + '||' + phoneLOS;
		} else {
			return null;
		}
	}

	/**
	 * Produces the analyticsNiceName string for the initial page load s.t()
	 * Will not append to data-tracking object if not defined for the page
	 * @returns {*}
	 */
	function getAnalyticsNiceName() {
		var analyticsNiceName;

		if ( Twc.Analytics.bodyId ) {
			switch ( Twc.Analytics.bodyId ) {
				case NEW_SERVICES:
					var $activeTab = $( '.tabs .tab-nav li.active' );
					if ( $activeTab.data( 'tabname' ) === 'sap' ) {
						analyticsNiceName = 'packages page:1:1:packages tab';
					} else if ( $activeTab.data( 'tabname' ) === 'syos' ) {
						analyticsNiceName = 'packages page:1:1:syos tab';
					}
					break;
				default:
			}

			return analyticsNiceName;
		} else {
			return null;
		}
	}

	function enrichForSpecificPage( tracking ) {
		switch ( Twc.Analytics.bodyId ) {
			case ORDER_CONFIRM_INTERNET:
				tracking.values.serviceState = Twc.Analytics.serviceState;
				tracking.values.serviceZip = Twc.Analytics.serviceZip;
				break;
			default:
		}

		return tracking;
	}

	/**
	 * Grab the product string for the initial page load s.t()
	 * Will not append to data-tracking object if not defined for the page
	 * @returns {*|jQuery}
	 */
	function getProductString() {
		var productString;

		switch ( Twc.Analytics.bodyId ) {
			case ORDER_REVIEW:
			case ORDER_SUMMARY:
			case ORDER_CONFIRM_INTERNET:
				productString = $( '#analyticsProductString' ).val();
				break;
			default:
		}

		return productString;
	}

	/**
	 * Grab the payment info values for the initial page load s.t()
	 * Will not append to data-tracking object if not defined for the page
	 * @returns {{orderID: *, paymentType: *}}
	 */
	function getPaymentInfo() {
		var orderData = {};

		var orderNumber = $( '.order-details' ).data( 'ordernumber' );
		var paymentType = $( '#paymentDetailsForAnalytics' ).data( 'analytics-payment-details' );

		if ( orderNumber ) {
			orderData = $.extend( orderData, {
				orderID: orderNumber
			} );
		}

		if ( paymentType ) {
			switch ( Twc.Analytics.bodyId ) {
				case ORDER_CONFIRM_INTERNET:
					orderData = $.extend( orderData, {
						paymentType: paymentType
					} );
					break;
				default:
			}
		}

		return orderData;
	}

	/**
	 * Utility function to detect if this is a QSO landing
	 * @returns {boolean}
	 */
	function isQsoLanding() {
		var search = location.search.toLowerCase();
		return search.indexOf( "qso=" ) != -1;
	}

	/**
	 * Utility function to detect if this is in product flow
	 * @returns {boolean}
	 */
	function isProductFlow() {
		var search = location.search.toLowerCase();
		return search.indexOf( "lob=" ) != -1;
	}

	/**
	 * Utility function to detect if this is unqualified landing
	 * @returns {boolean}
	 */
	function isUnqualifiedOffersLanding() {
		var queryParams = location.search;
		return queryParams.indexOf( "addOffers=" ) != -1;
	}

	function getHouseStatus() {
		var customerProfileObj = $( '#customerProfileJson' ).data( 'customer-profile-json' );
		if ( customerProfileObj && customerProfileObj.houseStatus ) {
			switch ( customerProfileObj.houseStatus ) {
				case "A":
					return "Active";
					break;
				case "F":
					return "Former";
					break;
				case "N":
					return "Never";
					break;
				default:
					return customerProfileObj.houseStatus;
			}
		} else {
			return null;
		}
	}

	function createPrimaryTrackingElement( trackingObj ) {
		jQuery( '<span/>', {
			'data-tracking': JSON.stringify( trackingObj )
		} ).appendTo( '#checkoutDataTracking' );
	}

	function createEventTrackingElement( event ) {
		jQuery( '<span/>', {
			'data-tracking': JSON.stringify( {
				"event": event,
				"values": {},
				"componentPath": Twc.Analytics.componentPath
			} )
		} ).appendTo( '#checkoutDataTracking' );
	}

	function createCartOpenEventTrackingElement( event, products, cartFirstProductString ) {
		jQuery( '<span/>', {
			'data-tracking': JSON.stringify( {
				"event": event,
				"values": {
					"products": products,
					"cartFirstProduct": cartFirstProductString
				},
				"componentPath": Twc.Analytics.componentPath
			} )
		} ).appendTo( '#checkoutDataTracking' );
	}

	function getCartTrackingObject( productName ) {
		var cartFirstProductString = '',
			productString = '',
			cartSummary = JSON.parse( $( '#cartSummaryJson' ).attr( 'data-cart-summary-json' ) ) || {};
		cartSummary.offerSummaries.forEach( function( offerSummary ) {
			var productNameString = offerSummary.name.toLowerCase();
			cartFirstProductString += isQsoLanding ? productNameString : productNameString + ' + ';
			if ( productName ) {
				productString += ';' + offerSummary.id + '||' + productNameString + productName.trim() + ','
			}
		} );
		cartFirstProductString = isQsoLanding() ? cartFirstProductString.replace( /\+\s*$/, '' ) : 'syos:' + cartFirstProductString;
		return {
			cartFirstProductString: cartFirstProductString,
			productString: productString.replace( /,\s*$/, '' ),
			productName: isQsoLanding() ? ';;;;evar46=' + cartFirstProductString + '>>bundle' : ';;;;evar46=' + cartFirstProductString
		}
	}

	return {

		/**
		 * Initializes the page load analytics and Twc.Analytics JS module
		 * Builds the data-tracking JSON object that is scraped for automatic page load s.t() by SiteCatalyst
		 * Stores the initial page load values as defaults in Twc.Analytics.* globals for later Metric calls
		 * Invoked from script block in apps/buyflow/components/page/base/body.jsp
		 * @param bodyId
		 * @param buyflowType
		 * @param region
		 * @param state
		 * @param zip
		 * @param componentPath
		 * @returns {*}
		 */
		initialize: function( bodyId, buyflowType, region, state, zip, componentPath ) {
			Twc.Analytics.bodyId = bodyId;

			Twc.Analytics.buyflowType = buyflowType;
			Twc.Analytics.pageName = getPageName();
			Twc.Analytics.breadcrumb = getBreadcrumb();
			Twc.Analytics.serviceRegion = region;
			Twc.Analytics.serviceState = state;
			Twc.Analytics.serviceZip = zip;
			Twc.Analytics.houseStatus = getHouseStatus();
			Twc.Analytics.componentPath = componentPath;

			var tracking = {};
			tracking.event = getEvent();
			tracking.values = {
				pageName: Twc.Analytics.pageName,
				buyflowType: buyflowType,
				breadcrumb: Twc.Analytics.breadcrumb,
				serviceRegion: region,
				serviceZip: zip
			};
			tracking.componentPath = componentPath;
			tracking = enrichForSpecificPage( tracking );

			/* If these values exist for page, append to tracking.values  */
			var existingLOS = getExistingLOS();
			if ( existingLOS ) {
				tracking.values.existingLOS = existingLOS;
			}

			var analyticsNiceName = getAnalyticsNiceName();
			if ( analyticsNiceName ) {
				tracking.values.analyticsNiceName = analyticsNiceName;
			}

			var productString = getProductString();
			if ( productString ) {
				tracking.values.products = productString;
			}

			var paymentInfo = getPaymentInfo();
			if ( paymentInfo ) {
				tracking.values = $.extend( tracking.values, paymentInfo );
			}

			createPrimaryTrackingElement( tracking );
		},

		/**
		 * Accepts the CQ_Analytics.Sitecatalyst.frameworkMappings and stores them internally
		 * in Twc.Analytics.scVars and Twc.Analytics.cqVars, for later lookup by firePageView
		 * @param frameworkMappings
		 */
		storeMappings: function( frameworkMappings ) {
			for ( var i = 0; i < frameworkMappings.length; i++ ) {

				var scVar = frameworkMappings[ i ].scVar;
				//If the scVar isn't already in our array
				if ( frameworkMappings[ i ].resourceType === Twc.Analytics.componentPath && $.inArray( scVar, Twc.Analytics.scVars ) === -1 ) {
					Twc.Analytics.scVars.push( scVar );

					//Since format of CQ vars is eventdata.events.* or eventdata.*, get last item for var's nice name
					var cqVar = frameworkMappings[ i ].cqVar.split( '.' ).pop();
					Twc.Analytics.cqVars.push( cqVar );
				}
			}

			//console.log('scVars', Twc.Analytics.scVars);
			//console.log('cqVars', Twc.Analytics.cqVars);
		},


		/**
		 * Fired when initial PageLoad event is dispatched
		 */
		errorAnalytics: function() {
			$( '.checkout-plans .error-module p:visible' ).each( function() {
				Twc.Analytics.Metric.fireImpression( {
					analyticsNiceName: 'warning/alert:1:1:' + $.trim( $( this ).text() )
				} );
			} );

			if ( window.location.href.indexOf( 'cape=learn' ) !== -1 ) {
				$( '.currentServicesWrapper .error-module p:visible' ).each( function() {
					Twc.Analytics.Metric.fireTrackLink( [ 'capeError' ], {
						errorMessage: 'capeerror',
						currentPageName: Twc.Analytics.buyflowType + 'error page',
						currentGeoRegion: Twc.Analytics.serviceZip
					} );
				} );
			}

			//TODO: move to the appropriate page init events
			//impressions for each compare table product
			$( '.fiveColumnCompareTable header ul' ).each( function() {
				var productId = $( this ).data( 'productid' );
				var enrichedName = $( this ).data( 'enrichedname' );
				Twc.Analytics.Metric.fireImpressionWithContextData( enrichedName, productId, enrichedName );
			} );
		},

		refreshPageName: function() {
			Twc.Analytics.pageName = getPageName();
		}
	}
} )();

/**
 * Contains all Dispatchable events which can be invoked with Twc.Analytics.dispatch('function', 'param1', 'param2')
 */
Twc.Analytics.Dispatchable = ( function() {

	//Declare any vars which could persist between event dispatches
	var installationOptionsSet = [],
		prevPackages = [],
		integrationCode;

	function getIntegrationCode() {
		var productNameString = $( '#cartSummaryJson' ).data( 'cart-summary-json' ).offerSummaries[ 0 ].integrationCode.toLowerCase(),
			lobIndex = productNameString.length - 4;
		return productNameString.substring( 0, 3 ) + " - " + productNameString.substring( 3, lobIndex ) + " - " + productNameString.substring( lobIndex ) + " Offer";
	}

	function getTVStringFromObjects( $objects, condition ) {
		var tvProductString = '';
		$objects.each( function() {
			var $this = $( this ),
				objectData = $this.data();
			if ( typeof condition == 'undefined' || condition( $this ) ) {
				tvProductString += ';' + objectData.selectionid + '||' + integrationCode + '||' + objectData.name + ';;;;,';
			}
		} );
		return tvProductString;
	}

	function isPickupOrMail( installOption ) {
		return [ 'store pickup', 'mail to home' ].indexOf( installOption ) >= 0;
	}

	function firePhoneAccordionImpression() {
		var $activeAccordion = $( '.phone-customize-accordion .collapsible.active' );
		if ( $activeAccordion.index() != 0 ) {
			return;
		}
		$activeAccordion.find( '.collapsible' ).each( function() {
			var $this = $( this ),
				productData = $this.find( 'input' ).data(),
				enrichedProductName = $this.find( 'h3' ).text(),
				productName = ( typeof integrationCode == 'undefined' ? ( integrationCode + '||' ) : '' ) + productData.shortname;

			Twc.Analytics.Metric.fireImpressionWithContextData( productName, productData.productid, enrichedProductName );
		} );
	}

	return {
		/**
		 * Invoked automatically according to bodyID after initial page load s.t() by Twc.Checkout.Util.initPage()
		 * Should contain any page-specific analytics logic for page initialization (such as impressions)
		 * If no page-specific analytics logic, a page function is still needed to handle the dynamically generated call
		 */
		PageLoad: {
			new_services: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.new_services()' );
			},
			select_packages: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.select_packages()' );
			},
			your_services: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.your_services()' );
			},
			select_internet: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.select_internet()' );
			},
			select_phone: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.select_phone()' );
			},
			select_tv: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.select_tv()' );
			},
			customize_phone: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.customize_phone()' );
				firePhoneAccordionImpression();
			},
			customize_tv: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.events.customize_tv()' );

				if ( $( '.notcompatiblemsg:visible' ).length > 0 ) {
					Twc.Analytics.Metric.fireImpression( {
						analyticsNiceName: $.trim( $( '.notcompatiblemsg:visible' ).text() )
					} );
				}

				//Firing prodview/impression for TV equipment products that are rendered on page by default
				Twc.Analytics.Dispatchable.Events.primaryTVEquipmentImpressions();
			},
			customize_internet: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.customize_internet()' );
			},
			order_review: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.order_review()' );

				var installOptions = $( '.installation-options input.radio.installation' );
				if ( installOptions.length > 0 ) {
					installOptions.each( function() {
						var installOptionName = $( this ).data( 'name' ).toLowerCase();
						var installationString = installOptionName.indexOf( 'technician visit' ) != -1 ? 'installation by technician' : installOptionName;
						Twc.Analytics.Metric.fireImpression( {
							installationOption: installationString
						} );
					} );
				} else {
					Twc.Analytics.Metric.fireImpression( {
						installationOption: 'no install'
					} );
				}
			},
			order_summary: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.order_summary()' );
			},
			order_confirm_internet: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.order_confirm_internet()' );
			},
			billing: function() {
				log( 'Twc.Analytics.Dispatchable.PageLoad.billing()' );
			}
		},

		/**
		 * Defines dispatchable events which can be invoked by client component JS modules
		 * By definition, should be any event caused by user interaction or changes after page load
		 */
		Events: {

			/**
			 * User clicks a top question to open
			 * @param indexPos indexPos position in question list.
			 * @param $a jQuery object user clicked.
			 */
			topQuestionsClick: function( indexPos, $a ) {
				var analyticsNiceName = 'checkout top questions:1:' + indexPos + ':' + $a.text();
				Twc.Analytics.Metric.fireTrackLink( 'click', {
					analyticsNiceName: analyticsNiceName
				} );
			},

			chatClick: function() {
				Twc.Analytics.firePageView( 'chatClick', {
					chatPageName: Twc.Analytics.pageName,
					clickToChat: 'ctc | ecare > click to chat > ' + Twc.Analytics.buyflowType,
					chatBreadcrumb: 'checkout ' + Twc.Analytics.buyflowType + ':1:1:chat'
				} );
			},

			/**
			 * Expandable/Collapsible Row opened
			 * @param index index of row in its container.
			 * @param $row jQuery object representing the row.
			 */
			rowExpanderOpened: function( index, $row ) {
				var bodyId = Twc.Analytics.bodyId,
					$rowObject = ( bodyId === 'customize_phone' ) ? $row.find( 'input' ) : $row.find( 'ul' );

				if ( typeof $rowObject.data( 'integrationcode' ) != "undefined" ) {
					integrationCode = $rowObject.data( 'integrationcode' );
				} else {
					integrationCode = getIntegrationCode();
				}

				if ( bodyId === 'customize_phone' && $row.find( '.analytics-mainAccordion' ).text() !== "" ) {
					var pageType = $activeAccordion.find( '.analytics-mainAccordion' ).data( 'pagetype' );
					Twc.Analytics.Metric.firePageView( 'phone', {
						pageName: Twc.Analytics.buyflowType + ' > ' + pageType + ' > digital phone',
						breadcrumb: Twc.Analytics.buyflowType + ':select & customize'
					} );

					firePhoneAccordionImpression();
				} else if ( -1 !== $.inArray( bodyId, [ 'select_internet', 'select_tv', 'select_phone', 'customize_phone' ] ) ) { //only applies to select pages and customize phone
					var rowData = $rowObject.data();
					var productName = bodyId === 'customize_phone' ? rowData.shortname : rowData.enrichedname;
					var productId = rowData.productid;
					var enrichedProductName = $.trim( $row.find( 'h3' ).text() );
					productName = integrationCode + "||" + productName;

					Twc.Analytics.Metric.fireProdView( productName, productId, enrichedProductName );
				} else if ( bodyId === 'customize_tv' && $row.parents( '.tv-equipment' ).length > 0 ) { //Select equipment
					if ( $row.hasClass( 'secondary-equipment' ) ) {
						Twc.Analytics.Metric.fireTrackLink( 'subPageView', {
							subPageViewValue: Twc.Analytics.buyflowType + ' > ' + 'Additional Boxes',
							serviceZip: Twc.Analytics.serviceZip
						} );
						Twc.Analytics.Dispatchable.Events.additionalTVEquipmentImpressions();
					} else {
						Twc.Analytics.Metric.fireTrackLink( 'subPageView', {
							subPageViewValue: Twc.Analytics.buyflowType + ' > ' + 'TV Equipment',
							serviceZip: Twc.Analytics.serviceZip
						} );
						Twc.Analytics.Dispatchable.Events.primaryTVEquipmentImpressions();
					}

				} else if ( bodyId === 'customize_tv' && $row.parents( '.tv-customize-accordion' ).length > 0 ) { //Premium channels
					Twc.Analytics.Metric.firePageView( 'pageViewEvent', {
						pageName: Twc.Analytics.buyflowType + " > premium channels > digital cable",
						breadcrumb: Twc.Analytics.buyflowType + ":select and customize"
					} );

					//Fire impressions for Premium channels default view
					var premiumTVEquipmentProductString = getTVStringFromObjects( $( '.premium-channels-tabsystem table:visible input[type=checkbox]' ) );

					if ( premiumTVEquipmentProductString ) {
						Twc.Analytics.Metric.fireImpression( {
							products: premiumTVEquipmentProductString
						} );
						Twc.Analytics.Metric.clearSValue( 'products' ); //clear products values to prevent multiple reporting
					}
				}
			},

			primaryTVEquipmentImpressions: function() {
				integrationCode = getIntegrationCode();
				var conditionForString = function( $obj ) {
					return $obj.length != 0 || !Twc.Checkout.ShoppingCart.isProductInCart( $obj.data( 'modelid' ), obj.data( 'name' ) );
				};
				//Build product string for primary tv equipment
				var tvEquipmentProductString = getTVStringFromObjects( $( '.tv-equipment section:eq(0) ul.boxes > li.tv-equip-box .price-wrap input' ),
					conditionForString );
				if ( tvEquipmentProductString ) {
					Twc.Analytics.Metric.fireTrackLink( [ 'prodView', 'impression' ], {
						products: tvEquipmentProductString
					} );
					Twc.Analytics.Metric.clearSValue( 'products' ); //clear products values to prevent multiple reporting
				}
			},

			additionalTVEquipmentImpressions: function() {
				integrationCode = getIntegrationCode();
				var tvEquipBox = $( '.tv-equipment section:eq(1) ul.boxes > li.tv-equip-box' ),
					conditionForString = function( $obj ) {
						return $obj.data( 'name' ) && $obj.data( 'selectionid' );
					};
				//Build product string for Additional Equipment
				var additionalEquipmentString = getTVStringFromObjects( tvEquipBox.find( 'div.box' ), conditionForString );

				var cableCardProductString = getTVStringFromObjects( tvEquipBox.find( 'div.detail-view > h4 > span.amount' ) );

				var tvEquipmentProductString = additionalEquipmentString + cableCardProductString;

				Twc.Analytics.Metric.fireTrackLink( [ 'prodView', 'impression' ], {
					products: tvEquipmentProductString
				} );
				Twc.Analytics.Metric.clearSValue( 'products' ); //clear products values to prevent multiple reporting
			},

			tabView: function( tab ) {

				if ( Twc.Analytics.bodyId === 'new_services' ) {
					if ( tab === 'sap' ) {
						Twc.Analytics.Metric.firePageView( 'pageViewEvent', {
							pageName: Twc.Analytics.buyflowType + ' > packages > select a package',
							breadcrumb: Twc.Analytics.buyflowType + ':packages',
							serviceZip: Twc.Analytics.serviceZip,
							analyticsNiceName: 'packages page:1:1:packages tab'
						} );
					} else if ( tab === 'syos' ) {
						Twc.Analytics.Metric.firePageView( 'pageViewEvent', {
							pageName: Twc.Analytics.buyflowType + ' > packages > select your own service',
							breadcrumb: Twc.Analytics.buyflowType + ':select your service',
							serviceZip: Twc.Analytics.serviceZip,
							analyticsNiceName: 'packages page:1:1:syos tab'
						} );
					}
				} else if ( Twc.Analytics.bodyId === 'customize_tv' ) {
					Twc.Analytics.Metric.firePageView( 'pageViewEvent', {
						pageName: Twc.Analytics.buyflowType + ' > premium channels > ' + tab,
						breadcrumb: Twc.Analytics.buyflowType + ':select and customize'
					} );

					if ( typeof s !== 'undefined' ) {
						s.cookieLink( 'configure tv:1:1:' + tab );
					}

					var premiumTVEquipmentProductString = '';
					integrationCode = getIntegrationCode();
					//Wait for the new channels to become visible
					setTimeout( function() {
						//Fire impressions for premium channels
						premiumTVEquipmentProductString = getTVStringFromObjects( $( '.premium-channels-tabsystem table:visible input[type=checkbox]' ) );
						if ( premiumTVEquipmentProductString ) {
							Twc.Analytics.Metric.fireImpression( {
								products: premiumTVEquipmentProductString
							} );
							Twc.Analytics.Metric.clearSValue( 'products' ); //clear products values to prevent multiple reporting
						}
					}, 500 );
				}
			},

			noPackagesExist: function( errorMsg ) {
				Twc.Analytics.Metric.fireTrackLink( null, {
					analyticsNiceName: 'warning/alert:1:1:' + errorMsg.trim()
				} );
			},

			packagesFilter: function( string ) {
				Twc.Analytics.Metric.fireTrackLink( null, {
					analyticsNiceName: Twc.Analytics.buyflowType + ' packages filter:1:1:' + string.trim(),
					breadcrumb: Twc.Analytics.breadcrumb
				} );
			},

			viewMoreLink: function( linkText ) {
				Twc.Analytics.Core.refreshPageName();
				Twc.Analytics.Metric.fireTrackLink( null, {
					analyticsNiceName: Twc.Analytics.buyflowType + ' packages:1:1:' + linkText.trim()
				} );
			},

			/**
			 * User moves to the next page
			 * @param installOption The installation option selected
			 *                      options are: 'installation by technician', 'store pickup',
			 *                      'mail to home', 'no install' (no installation needed or presented).
			 * @param isSplitInstall
			 */
			reviewOrderComplete: function( installOption, isSplitInstall ) {
				if ( !installOption ) {
					Twc.Analytics.Metric.fireTrackLink( 'click', {
						installationOption: "no install",
						serviceZip: Twc.Analytics.serviceZip
					} );
					return;
				}
				var splitInstallString = isSplitInstall ? '2 visits' : '1 visit',
					installString = installOption.indexOf( 'technician visit' ) !== -1 ? 'installation by technician' : '';

				installString += installOption.indexOf( 'split' ) !== -1 ? ( '|split schedule eligible,' + splitInstallString ) :
					installationOptionsSet.some( isPickupOrMail ) ? '|SIK eligible' : '';

				Twc.Analytics.Metric.fireTrackLink( 'click', {
					installationOption: installString ? installString : installOption,
					serviceZip: Twc.Analytics.serviceZip
				} );
			},

			/**
			 * User clicks edit links in serviceDetails
			 * @param lob Line of Business.
			 * @param position index of edit link, base 1.
			 */
			reviewOrderEdit: function( lob, position ) {
				if ( typeof s !== 'undefined' ) {
					s.cookieLink( 'review order ' + lob + ':' + position + ':1:edit' );
				}
			},

			billingPaymentInfo: function( optedOut, creditStatus ) {
				log( 'Twc.Analytics.Dispatchable.Events.billingPaymentInfo()' );
				//Did the customer opt out of a credit check?
				Twc.Analytics.Metric.firePageView( 'billingPaymentInfo,siteToolUsed', {
					pageName: Twc.Analytics.buyflowType + ' > setup your account > billing step 2' + ( optedOut ? ' > no credit check' : '' ),
					breadcrumb: Twc.Analytics.buyflowType + ':billing',
					siteTool: 'checkout: credit check opt ' + ( optedOut ? 'out' : ( 'in: ' + creditStatus.toLowerCase() ) )
				} );
			},

			/**
			 * Click select for upgrade/customize {LOB}
			 * @param $el clicked. Expected val() of element is upgrade_{lob], customize_{lob}, or select_{lob}
			 */
			currentServicesSelect: function( $el ) {
				log( 'Twc.Analytics.Dispatchable.Events.currentServicesSelect()' );
				var inputValue = $.trim( $el.val() );
				var actionTypes = {
					upgrade: 'upgrade your plan',
					select: 'select new plan'
				};
				if ( !inputValue.indexOf( '_' ) >= 0 ) return; //if the input value does not contain underscore, cannot be expected value
				var defaultAction = 'add equipment'; //Default action

				var inputSplit = inputValue.split( '_' ); //value options are: upgrade_{lob], customize_{lob}, or select_{lob}
				var action = $.each( actionTypes, function( k, v ) {
					if ( inputSplit[ 0 ] === k.toString() ) {
						return v;
					}
				} );
				Twc.Analytics.Metric.fireTrackLink( 'click', {
					analyticsNiceName: inputSplit[ 1 ] + ':' + action ? action : defaultAction
				} );
			},

			/**
			 * View More opening
			 * @param page - page form which view more/less was triggered.
			 * @param lob - line of business for which button was triggered.
			 */
			viewMoreOpen: function( page, lob ) {
				log( 'Twc.Analytics.Dispatchable.Events.viewMoreOpen()' );
				Twc.Analytics.Metric.fireTrackLink( 'click', {
					analyticsNiceName: page + ':' + lob + ':view more'
				} );
			},

			/**
			 * View modal of new LoB compare plans  $('.modalGeneric').click()
			 * @param lob
			 * @param breadcrumb
			 * @param type
			 */
			compareModal: function( lob, breadcrumb, type ) {
				log( 'Twc.Analytics.Dispatchable.Events.compareModal()' );

				if ( !lob ) lob = '';
				if ( !breadcrumb ) breadcrumb = '';
				if ( !type ) type = '';
				if ( typeof s !== 'undefined' ) {
					s.cookieLink( 'configure ' + lob + ':1:1:' + lob + ' compare ' + type );
				}
				Twc.Analytics.Metric.firePageView( 'pageViewEvent', {
					pageName: Twc.Analytics.buyflowType + ' > modals > compare > ' + lob + ' ' + type,
					breadcrumb: Twc.Analytics.buyflowType + ':' + breadcrumb
				} );
			},

			/**
			 * Page Transition Clicked.  Probably can be used throughout $('.js-next-button').click()
			 * @param $el clicked.
			 */
			nextPageTransition: function( $el ) {
				log( 'Twc.Analytics.Dispatchable.Events.nextPageTransition()' );
				var anVal = $el.attr( 'analyticsname' );
				if ( typeof s !== 'undefined' ) {
					s.cookieLink( anVal );
				}
			},

			packagesDisplayed: function( $packageList ) {
				var currPackages = [];
				$packageList.each( function() {
					var packageData = $( this ).data();
					if ( prevPackages.indexOf( productId ) === -1 ) {
						Twc.Analytics.Metric.fireImpression( {
							'analyticsNiceName': packageData.id + '||' + packageData.name
						} );
					}
					currPackages.push( packageData.id );
				} );
				prevPackages = currPackages;
			},

			packageOrdered: function( $orderButton ) {
				var $package = $orderButton.closest( '.package' );
				var position = $package.parent().index() + 1;
				var packageData = $orderButton.data();
				var orderType = 'bundle';
				if ( $package.length < 1 ) {
					$package = $orderButton.closest( '.js-details.clearfix' );
					position = $package.index() + 1;
				}
				if ( typeof s !== 'undefined' ) {
					s.cookieLink( Twc.Analytics.buyflowType + 'packages:1:' + position + ':' + $orderButton.text() );
				}
				Twc.Analytics.Dispatchable.Cart.cartOpenProduct( packageData.id, packageData.name, orderType, packageData.name, packageData.siebelname );
			},

			servicesOrdered: function( $nextButton ) {
				var firstProduct = '';
				var prevName = '';
				var productsString = '';
				var productsObject = ( $nextButton.data( 'products' ) ) ? JSON.parse( $nextButton.data( 'products' ) ) : {};
				$.each( productsObject, function( id, name ) {
					if ( firstProduct !== '' ) {
						firstProduct = name;
					}
					productsString += ';' + id + '||' + name + ';;;;eVar46=syos:' + prevName + name + ',';
					prevName += name + "+ ";
				} );

				Twc.Analytics.Dispatchable.Cart.cartOpenSYOS( firstProduct, productsString.slice( 0, -1 ) );
			},

			upsellServicesOrdered: function( offerId, offerName ) {
				var productsString = ';' + offerId + '||' + offerName + ';;;;eVar46=' + offerName;
				Twc.Analytics.Dispatchable.Cart.cartOpenUpsellSYOS( offerId, offerName, productsString );
			},

			upsellBannerDisplay: function( description ) {
				Twc.Analytics.Metric.fireTrackLink( 'upsellBannerDisplay', {
					analyticsNiceName: 'floating banner--' + description
				} );
			},

			upsellBannerViewDetails: function( description ) {
				Twc.Analytics.Metric.fireTrackLink( 'impression', {
					analyticsNiceName: 'floating banner--' + description + '--details'
				} )
			},

			upsellItemBannerViewDetails: function( description ) {
				Twc.Analytics.Metric.fireTrackLink( 'impression', {
					analyticsNiceName: description,
					buyFlowType: Twc.Analytics.buyflowType,
					currentGeoRegion: Twc.Analytics.serviceRegion
				} );
			},

			trackProductRemovals: function() {
				Twc.Checkout.ShoppingCart.fetchCartSummaryData( function( data ) {
					if ( data.offerSummaries ) {
						var cart = data.offerSummaries,
							lastCart = localStorage.getObject( 'cartPersist' ),
							initialCart = {},
							finalProductString = '';

						cart.forEach( function( offerSummary ) {
							if ( offerSummary ) {
								initialCart.offerId = offerSummary.id;
								initialCart.offerName = getBundleName();
								initialCart.offerIntegrationCode = getIntegrationCode();
							}
							offerSummary.serviceSummaries.forEach( function( serviceSummary ) {
								if ( serviceSummary.items ) {
									serviceSummary.items.forEach( function( e ) {
										addServicePropsToCart( e );
									} );
								}
								if ( serviceSummary.packages ) {
									serviceSummary.packages.forEach( function( e ) {
										addServicePropsToCart( e );
									} );
								}
							} );
						} );

						if ( initialCart && lastCart ) {
							/*
							 *	Workaround: suppress cartRemoves on current page load for default cart adds
							 *	of products TWC Modem, and Home Wifi and Modem, Home WiFi Professional Installation Fee
							 */
							if ( initialCart[ '1-29P7' ] && lastCart[ '1-29OW' ] ) {
								delete lastCart[ '1-29OW' ]; //TWC Modem
							}
							if ( initialCart[ '1-29PI' ] && lastCart[ '1-29P7' ] ) {
								delete lastCart[ '1-29P7' ]; //Home Wifi and Modem
								delete lastCart[ '1-29VJ' ]; //Home WiFi Professional Installation Fee
							}
							if ( initialCart[ '1-29P7' ] ) {
								delete initialCart[ '1-29VJ' ]; //Suppress any tracking on 1-29VJ: "TWC WiFi Router Installation Fee"
								delete initialCart[ '1-29P7' ]; //Suppress any tracking on 1-29P7: "TWC Wireless Gateway with Free Home WiFi"
							}
							if ( initialCart[ '1-FP9FJ' ] ) {
								delete initialCart[ '1-FP9FJ' ]; //Suppress any tracking on 1-FP9FJ: "Broadcast TV Fee"
							}
							if ( lastCart.offerId !== initialCart.offerId ) {
								finalProductString = ';' + lastCart.offerId + '||' + lastCart.offerIntegrationCode + '||' + lastCart.offerName;
							} else {
								$.each( lastCart, function( id, name ) {
									// Void adding offer name and id to "add on"
									if ( lastCart[ id ].indexOf( 'offer' ) > -1 ) {
										return;
									}

									if ( initialCart[ id ] === undefined ) {
										finalProductString += ';' + id + '||' + getIntegrationCode() + '||' + name + ';;;;eVar46=' + getBundleName() + ">>add on,";

										//WEBCMS-13766 When upgrading LOB from packages, Old LOB fires a Remove, but the new one never fires an Add
										//We only want this to fire on the customize pages and we need to ignore the special products above which
										//are automatically added to the cart
										if ( -1 !== $.inArray( Twc.Analytics.bodyId, [ 'customize_internet', 'customize_tv', 'customize_phone' ] ) ) {
											$.each( initialCart, function( id, name ) {
												if ( -1 === $.inArray( id, [ '12-19GL', '1-29VJ', '1-3W04H', '1-29UB' ] ) && lastCart[ id ] === undefined ) {
													Twc.Analytics.Dispatchable.Cart.cartAddProduct( id, name );
												}
											} );
										}
									}
								} );
								finalProductString = finalProductString.slice( 0, -1 );
							}
						}

						/*
						 *	Workaround: suppress cartRemoves on next page load for default cart adds
						 *	of products HD Box, No International Phone Plan, Phone Activation Fee
						 *  If product did not exist in last cart, delete
						 */
						$.each( [ '12-19GL', '1-3W04H', '1-29UB' ], function( index, productId ) {
							if ( lastCart && !lastCart[ productId ] ) {
								delete initialCart[ productId ];
							}
						} );

						Twc.Analytics.Dispatchable.Cart.cartRemove( finalProductString );

						localStorage.setObject( 'cartPersist', initialCart );
					}

					function addServicePropsToCart( e ) {
						if ( !e.included && e.name && parseInt( e.subtotalPrice ) > 0 ) {
							initialCart[ e.id ] = e.name;
						}
					}

					function getBundleName() {
						var analyticsProductString = $( '#analyticsProductString' ).val(),
							bundleName = '';
						// This check is needed if a page does not contain the analyticsProductString
						if ( typeof analyticsProductString != 'undefined' ) {
							analyticsProductString.split( /[;,]+/ ).forEach( function( index ) {
								if ( index.indexOf( 'lob' ) > -1 ) {
									// lob will always have something similar to lob:Preferred TV+Ultimate 200+TWC Phone
									// so we slice lob:
									bundleName = index.slice( 4 );
								}
							} );
						}
						return bundleName;
					}

				} );
			}
		},

		/**
		 * Defines any Cart events
		 */
		Cart: {

			/**
			 * Add product to cart (i.e., click "select" button)
			 * @param productId
			 * @param productName
			 */
			cartAddProduct: function( productId, productName ) {
				this.cartAdd( ';' + productId + '||' + productName );
			},

			/**
			 * Add product(s) to cart (i.e., click "continue" button)
			 * @param productString
			 */
			cartAdd: function( productString ) {
				if ( !productString ) {
					return;
				}
				Twc.Analytics.Metric.fireTrackLink( 'cartAdd', {
					products: productString,
					serviceZip: Twc.Analytics.serviceZip
				} );
			},

			/**
			 * Add product to cart (i.e., click "select" button)
			 * @param productId id of the product.
			 * @param productName name of the product.
			 * @param orderType the type of order used. Options are "bundle {bundleName}", "addon", or "a la carte"
			 * @param packageName the name of the package added (if any)
			 */
			cartOpenProduct: function( productId, productName, orderType, packageName, seibelName ) {
				var productString = ';' + productId + '||' + seibelName + '||' + productName + ';;;;evar46=';
				if ( packageName ) {
					productString += productId + '---' + seibelName + '---' + productName;
				}
				if ( orderType !== 'bundle' ) {
					packageName = 'syos:' + productName;
				}
				productString += ">>" + orderType;
				Twc.Analytics.Dispatchable.Cart.cartOpen( productString, packageName );
			},

			/**
			 * Add product to cart (i.e., click "select" button)
			 * @param productString productString for analytics
			 * @param orderType the type of order used. Options are "bundle {bundleName}", "addon", or "a la carte"
			 * @param packageName the name of the package added (if any)
			 */
			cartOpen: function( productString, packageName ) {
				var values = {};

				values.products = productString;
				if ( packageName ) {
					values.cartFirstProduct = packageName;
				}

				Twc.Analytics.Metric.fireTrackLink( 'cartOpen', values );
			},

			cartOpenSYOS: function( firstProduct, productsString ) {
				Twc.Analytics.Metric.fireTrackLink( 'cartOpen', {
					products: productsString,
					cartFirstProduct: 'syos:' + firstProduct
				} );
			},

			cartOpenUpsellSYOS: function( offerId, offerName, productsString ) {
				Twc.Analytics.Metric.fireTrackLink( 'cartOpen', {
					products: productsString,
					cartFirstProduct: 'syos:' + offerId,
					descriptionClick: 'floating banner--' + offerName + '--details'
				} );
			},

			addCartUpsellItem: function( offerName, productsString ) {
				Twc.Analytics.Metric.fireTrackLink( 'cartAdd', {
					products: productsString,
					descriptionClick: offerName,
					buyFlowType: Twc.Analytics.buyflowType,
					currentGeoRegion: Twc.Analytics.serviceRegion
				} );
			},

			cartRemove: function( productString ) {
				if ( !productString ) {
					return;
				}
				Twc.Analytics.Metric.fireTrackLink( 'cartRemove', {
					products: productString
				} );
				log( productString + ' removed from cart' );
			}
		}
	}
} )();

/**
 * Handles generic Metric calls
 */
Twc.Analytics.Metric = ( function() {

	//CQ Variables which should always be populated in metric calls, if they are not provided/overridden
	var analyticsPresets = [ 'buyflowType', 'pageName', 'serviceRegion' ];

	/**
	 * Utility which accepts a CQ Variable name and returns an array of the SC Variables which are mapped to it in the framework
	 * @param cqVar
	 * @returns {*}
	 */
	function lookupSCVar( cqVar ) {
		var indexes = [];
		var scVarMatches = [];
		for ( var i = 0; i < Twc.Analytics.cqVars.length; i++ ) {
			if ( Twc.Analytics.cqVars[ i ] === cqVar ) {
				indexes.push( i );
			}
		}
		if ( indexes.length > 0 ) {
			for ( var j = 0; j < indexes.length; j++ ) {
				scVarMatches.push( Twc.Analytics.scVars[ indexes[ j ] ] );
			}
		} else {
			console.log( "lookupSCVar() for " + cqVar + " failed" );
		}
		return scVarMatches;
	}

	function doMapping( events, values ) {
		var mappedValues = {};

		if ( values ) {
			for ( var cqVar in values ) {
				if ( cqVar.indexOf( 'function' ) === -1 ) { //Ignore any prototypical object functions
					var scVarMatches = lookupSCVar( cqVar );
					for ( var j = 0; j < scVarMatches.length; j++ ) { //Set value of CQ var to each mapped SC var
						//replace evar to the correct format expected by s.t()
						mappedValues[ scVarMatches[ j ].replace( /evar/i, 'eVar' ) ] = values[ cqVar ];
					}
				}
			}
		} else {
			error( "Values was empty" );
		}

		if ( events ) { //If events also provided
			var eventArray = events.replace( / /g, '' ).split( ',' ); //Remove any whitespace from events string and create array
			var newArray = [];
			for ( var i = 0; i < eventArray.length; i++ ) {
				newArray[ i ] = lookupSCVar( eventArray[ i ] );
			}
			mappedValues[ 'events' ] = newArray.join( ',' ); //Converts the events string with CQ vars to SC vars
		}

		return mappedValues;
	}

	/**
	 * Iterates through analytics values, and sets the default values from Twc.Analytics.* globals
	 * if they are not provided/overridden
	 * @param values
	 * @returns {*}
	 */
	function setAnalyticsPresets( values ) {
		for ( var key in analyticsPresets ) {
			if ( !values[ analyticsPresets[ key ] ] ) {
				values[ analyticsPresets[ key ] ] = Twc.Analytics[ analyticsPresets[ key ] ];
			}
		}
		return values;
	}

	return {

		/**
		 * Used to fire s.t() after initial page load. Because manual invocation of s.t() expects SC vars,
		 * this function does the lookup to convert provided CQ vars to all SC var counterparts
		 * Example:
		 *      firePageView('tv,landing', { serviceRegion : 'LA' }) converts to
		 *      s.t({ events: 'event27,event25', eVar6: 'LA', prop3: 'LA' })
		 * @param events
		 * @param values
		 */
		firePageView: function( events, values ) {
			values = setAnalyticsPresets( values );

			if ( typeof s !== 'undefined' ) {
				s.t( doMapping( events, values ) );
			}
		},

		/**
		 * Fires generic s.tl() with optional provided event string.
		 * Because CQ_Analytics.record() expects CQ vars, no CQ to SC var mapping needs to occur.
		 * @param event
		 * @param values
		 */
		fireTrackLink: function( event, values ) {
			values = setAnalyticsPresets( values );

			var obj = {};
			if ( event ) {
				obj.event = event;
			} else {
				obj.event = 'empty';
			}
			obj.values = values;
			obj.values.pageNameTracklight = Twc.Analytics.pageName;
			obj.componentPath = Twc.Analytics.componentPath;
			if ( typeof s !== 'undefined' ) {
				s.pe = 'lnk_o';
				CQ_Analytics.record( obj );
				s.pe = '';
			}
		},

		/**
		 * Fires s.tl() for Impression event.
		 * @param values
		 */
		fireImpression: function( values ) {
			values = setAnalyticsPresets( values );

			values.serviceZip = Twc.Analytics.serviceZip;
			values.pageNameTracklight = Twc.Analytics.pageName;
			if ( typeof s !== 'undefined' ) {
				s.pe = 'lnk_o';
				CQ_Analytics.record( {
					event: 'impression',
					values: values,
					componentPath: Twc.Analytics.componentPath
				} );
				s.pe = '';
			}
		},

		/**
		 * Fires s.tl() for impressions with contextData
		 * @param {String} productName product name displayed on compare table.
		 * @param {String} productId product id displayed on compare table.
		 * @param {String} enrichedName enriched product name displayed on compare table.
		 */
		fireImpressionWithContextData: function( productName, productId, enrichedName ) {
			var events = 'impression';
			if ( typeof s !== 'undefined' ) {
				s.linkTrackVars = 'events,products,eVar57,eVar59,eVar6,prop3,eVar19,eVar12,contextData.' + Twc.Analytics.buyflowType + '_prodid,contextData.' + Twc.Analytics.buyflowType + '_enrichedprodname';
				s.linkTrackEvents = 'event84';
				s.contextData[ Twc.Analytics.buyflowType + '_prodid' ] = productId;
				s.contextData[ Twc.Analytics.buyflowType + '_enrichedprodname' ] = enrichedName;

				var mappedValues = doMapping( events, {
					'products': ';' + productId + '||' + productName,
					'analyticsNiceName': productId + '||' + productName,
					'serviceRegion': Twc.Analytics.serviceRegion,
					'serviceZip': Twc.Analytics.serviceZip
				} );

				for ( var key in mappedValues ) {
					s[ key ] = mappedValues[ key ];
				}
				s.tl( true, 'o', 'imprsn' );
				//Clear the values from s
				for ( var key in mappedValues ) {
					s[ key ] = null;
				}
				s.contextData[ Twc.Analytics.buyflowType + '_prodid' ] = s.contextData[ Twc.Analytics.buyflowType + '_enrichedprodname' ] = null;
				s.linkTrackVars = s.linkTrackEvents = 'None';
			}
		},

		fireProdView: function( productName, productId, enrichedName ) {
			var events = 'prodView,click';
			if ( typeof s !== 'undefined' ) {
				s.linkTrackVars = 'events,products,eVar57,eVar59,eVar6,prop3,eVar19,eVar12,contextData.' + Twc.Analytics.buyflowType + '_prodid,contextData.' + Twc.Analytics.buyflowType + '_enrichedprodname';
				s.linkTrackEvents = 'prodView,event86';

				s.contextData[ Twc.Analytics.buyflowType + '_prodid' ] = productId;
				s.contextData[ Twc.Analytics.buyflowType + '_enrichedprodname' ] = enrichedName;

				var mappedValues = doMapping( events, {
					'products': ';' + productId + '||' + productName,
					'analyticsNiceName': productId + '||' + productName,
					'serviceRegion': Twc.Analytics.serviceRegion,
					'serviceZip': Twc.Analytics.serviceZip
				} );

				for ( var key in mappedValues ) {
					s[ key ] = mappedValues[ key ];
				}

				s.tl( true, 'o', 'imprsn' );

				//Clear the values from s
				for ( var key in mappedValues ) {
					s[ key ] = null;
				}
				s.contextData[ Twc.Analytics.buyflowType + '_prodid' ] = s.contextData[ Twc.Analytics.buyflowType + '_enrichedprodname' ] = null;
				s.linkTrackVars = s.linkTrackEvents = 'None';
			}
		},

		/**
		 * clears a value out of s, used if you don't want to fire another tracking call to clear value
		 * @param {String} key value that will be cleared back to an empty string
		 */
		clearSValue: function( sKey ) {
			if ( sKey && s[ sKey ] ) {
				s[ sKey ] = '';
			}
		}
	}
} )();

Twc = Twc || {};
Twc.Checkout = Twc.Checkout || {};
/**
 * Manages calls to CSS via javascript for profile and cart updates
 * @namespace
 */
Twc.Checkout.CSSCall = ( function() {

	function updateCartService( actionData, inputEl ) {
		var $inputEl = $( inputEl );

		$.ajaxQueue( {
			type: "POST",
			url: Twc.Settings.ajaxUrls.UpdateCart,
			dataType: "json",
			async: false, // required to preserve Event used for click to e.preventDefault() on ajax error
			data: actionData
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			if ( 'abort' !== textStatus ) { // don't show erros for explicit aborts
				return exitOnError( 'AJAX Error ' + textStatus );
			}
		} ).done( function( data ) {
			if ( $inputEl.is( '.quantity select' ) ) {
				Twc.Checkout.CSSCall.updatePrices( data );
				Twc.Checkout.CSSCall.updateOutlets( data );
				Twc.Checkout.CSSCall.updateOutletNumbers( data );
				$inputEl.data( 'currentvalue', $inputEl.find( 'option:selected' ).val() );
			}
			Twc.Checkout.ShoppingCart.updateShoppingCart();
		} );
	}

	// show message and reset the inputElement to what it was before clicked
	function exitOnError( errMsg, e ) {
		if ( 'undefined' !== typeof e && e.preventDefault ) {
			e.preventDefault();
			window.setTimeout( function() {
				$inputEl.change()
			}, 0 ); // forces plugin to reset blue/green status
		}
		Twc.Checkout.Util.catchError( new Error( errMsg ) );
		Twc.Checkout.Util.showErrorMessage();
		return;
	}

	function buildTVEquipmentAspectActions( inputElement, previousElement ) {
		var $new = $( inputElement );
		var $previous = $( previousElement );
		var serviceId = $new.data( 'serviceid' );
		var aspectId = $new.data( 'aspectid' );
		var newSelectionId = $new.data( 'selectionid' );
		var newModelId = $new.data( 'modelid' );
		var oldSelectionId = $previous.data( 'selectionid' );
		var oldModelId = $previous.data( 'modelid' );

		var actionData = {
			service_id: serviceId
		};
		var aspectActions;

		if ( $new.is( 'input' ) ) { //Primary equipment
			aspectActions = [ {
				id: aspectId,
				selectionActions: [ {
					id: newSelectionId,
					quantity: 1,
					action: 'add',
					model: newModelId ? newModelId : "empty" //Non-primary equipment does not currently provide ModelDefinition, ex. CableCard
				}, {
					id: oldSelectionId,
					quantity: 1,
					action: 'remove',
					model: oldModelId ? oldModelId : "empty"
				} ]
			} ];
		} else { //Additional equipment
			aspectActions = [ {
				id: aspectId,
				selectionActions: [ {
					id: newSelectionId,
					quantity: $.isNumeric( $new.val() ) ? $new.val() : 0,
					action: 'add',
					model: newModelId ? newModelId : "empty" //Non-primary equipment does not currently provide ModelDefinition, ex. CableCard
				} ]
			} ];
		}

		actionData.aspect_actions = JSON.stringify( aspectActions );

		return actionData;
	}

	var events = {
		/**********************************************************
		 * CUSTOMIZE INTERNET PAGE
		 **********************************************************/

		/** Bind select buttons for customize internet
		 * @author athomas
		 */
		customize_internet: function() {
			log( 'CSSCall.customize_internet()' );
			Twc.Checkout.CSSCall.bindCustomizePageUpdates();
		},

		/**********************************************************
		 * CUSTOMIZE TV PAGE
		 **********************************************************/

		/** Bind checkbox and radio buttons for customize tv
		 * @author athomas
		 */
		customize_tv: function() {
			log( 'CSSCall.customize_tv()' );
			Twc.Checkout.CSSCall.bindCustomizePageUpdates();
		},

		/**********************************************************
		 * CUSTOMIZE PHONE PAGE
		 **********************************************************/

		/** Bind checkbox and radio buttons for customize phone
		 * @author athomas
		 */
		customize_phone: function() {
			log( 'CSSCall.customize_phone()' );
			Twc.Checkout.CSSCall.bindCustomizePageUpdates();
		},

		/**********************************************************
		 * ORDER SUMMARY PAGE
		 **********************************************************/

		/** Placeholder for order summary page
		 * @author athomas
		 */
		order_summary: function() {
			log( 'CSSCall.order_summary()' );
		}
	};

	return {

		/**********************************************************
		 * UPDATE PRICES ON CUSTOMIZE TV
		 **********************************************************/
		updatePrices: function( data ) {
			//TODO: updated prices based on cart, perhaps trigger error when quantity is too high
			$( '#customize_tv .quantity select' ).each( function( i ) {
				var $this = $( this );
				var totalPrice = 0;
				for ( var i = 0; i < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ] ); i++ ) {
					for ( var j = 0; j < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ] ); j++ ) {
						if ( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'id' ] == $this.data( 'serviceid' ) ) {
							for ( var k = 0; k < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ] ); k++ ) {
								if ( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'id' ] == $this.data( 'aspectid' ) ) {
									for ( var l = 0; l < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'items' ] ); l++ ) {
										if ( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'items' ][ l ][ 'productId' ] == $this.data( 'selectionid' ) ) {
											var totalPrice = data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'items' ][ l ][ 'subtotalPrice' ] * 1;
										}
									}

								}
							}
						}
					}
				}
				if ( isNaN( totalPrice ) ) {
					totalPrice = 0;
				}
				$this.siblings( ".price" ).html( '<sup class="sign">$</sup>' + totalPrice.toFixed( 2 ) );
			} );
		},

		updateOutlets: function( data ) {
			$( '.tv-equipment.outside select' ).each( function( i ) {
				var $this = $( this );
				var totalPrice = 0;
				for ( var i = 0; i < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ] ); i++ ) {
					for ( var j = 0; j < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ] ); j++ ) {
						if ( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'id' ] == $this.data( 'serviceid' ) ) {
							for ( var k = 0; k < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ] ); k++ ) {
								if ( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'id' ] == $this.data( 'aspectid' ) ) {
									$this.empty();
									for ( var l = data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'min' ]; l <= data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'max' ]; l++ ) {
										$this.append( $( '<option></option>' ).data( 'quantity', l ).attr( 'value', l ).text( l ) );
									}
								}
							}
						}
					}
				}
			} );
		},
		updateOutletNumbers: function( data ) {
			$( '.tv-customize-accordion .rtf span' ).each( function( i ) {
				var outletNumbers = 0;
				for ( var i = 0; i < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ] ); i++ ) {
					for ( var j = 0; j < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ] ); j++ ) {
						for ( var k = 0; k < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ] ); k++ ) {
							for ( var l = 0; l < Twc.Checkout.Util.getArrayLength( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'items' ] ); l++ ) {
								if ( data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'items' ][ l ][ 'integrationCode' ] == 'TV-INCL-OUTLET' ) {
									outletNumbers = data[ 'cartOffers' ][ i ][ 'services' ][ j ][ 'aspects' ][ k ][ 'items' ][ l ][ 'quantity' ];
									break;
								}
							}
						}
					}
				}
				$( "#_outlet_numbers_" ).text( outletNumbers );
			} );
		},
		/**********************************************************
		 * GENERIC/UTIL FUNCTIONS
		 **********************************************************/

		buildTabConfigAspectActions: function( inputElement, previousId ) {
			var $input = $( inputElement );

			var serviceId = $input.data( 'serviceid' );
			var aspectId = $input.data( 'aspectid' );
			var productId = $input.val();
			var isSelected = ( $input.is( ':selected' ) || $input.is( ':checked' ) || $input.is( 'select' ) );
			var controlType = $input.data( 'controltype' );
			var isPackage = typeof $input.data( 'packageid' ) != 'undefined';
			var modelId = $input.data( 'modelid' );

			var quantity;
			if ( $input.is( 'select' ) ) {
				productId = $input.data( 'selectionid' );
				quantity = $input.val();
			}
			if ( previousId ) {
				productId = previousId;
				quantity = -1;
			}

			if ( typeof quantity == 'undefined' ) {
				quantity = 1;
			}
			if ( isNaN( quantity ) ) {
				quantity = 0;
			}

			var aspectActions = "";
			if ( typeof controlType == 'undefined' ) {
				controlType = '';
			}
			if ( typeof isPackage == 'undefined' ) {
				isPackage = false;
			}

			if ( isPackage ) {
				aspectActions = [ {
					"id": aspectId,
					"packageActions": [ {
						'id': productId,
						'action': 'remove'
					} ]
				} ];
			} else if ( controlType === 'Combo Box' || controlType === 'Quantity Box' ) {
				log( 'Twc.Checkout.CSSCall.buildTabConfigAspectActions(): update for combo box' );
				//no need for the remove
				aspectActions = [ {
					"id": aspectId
				} ];
			} else {
				log( 'Twc.Checkout.CSSCall.buildTabConfigAspectActions(): remove for non-combo box' );
				// we will do item add if not selected, otherwise item remove
				aspectActions = [ {
					"id": aspectId,
					"selectionActions": [ {
						"id": productId,
						"action": "remove"
					} ]
				} ];
			}

			if ( isSelected && quantity >= 0 ) {
				log( 'Twc.Checkout.CSSCall.buildTabConfigAspectActions(): add items if necessary' );
				// we will do item add if selected
				if ( isPackage ) {
					aspectActions[ 0 ][ 'packageActions' ] = [ {
						'id': productId,
						'action': 'add'
					} ];
				} else if ( typeof aspectActions[ 0 ][ 'selectionActions' ] === 'undefined' ) {
					aspectActions[ 0 ][ 'selectionActions' ] = [ {
						"id": productId,
						"quantity": quantity,
						"action": "add"
					} ];
				} else {
					aspectActions[ 0 ][ 'selectionActions' ].push( {
						"id": productId,
						"quantity": quantity,
						"action": "add"
					} );
				}
				if ( typeof modelId != 'undefined' && modelId !== "" && typeof aspectActions[ 0 ][ 'selectionActions' ] !== 'undefined' ) {
					var lastSelectionIndex = aspectActions[ 0 ][ 'selectionActions' ].length - 1;
					aspectActions[ 0 ][ 'selectionActions' ][ lastSelectionIndex ][ 'model' ] = modelId;
				}
			}

			return {
				'service_id': serviceId,
				'aspect_actions': JSON.stringify( aspectActions )
			};
		},

		addOfferToCart: function( offerId, offerData ) {
			log( 'Twc.Checkout.CSSCall.addOfferToCart(' + offerId + ')' );
			var addedToCart = new Object();
			addedToCart.result = "failure";
			if ( !offerData ) offerData = {
				"offer_id": offerId
			};
			$.ajaxQueue( {
				type: "POST",
				url: Twc.Settings.ajaxUrls.UpdateCart,
				dataType: "json",
				data: offerData,
				async: false,
				success: function( data ) {
					if ( data !== null && data.result != "failure" ) {
						addedToCart = data;
						addedToCart.result = "success";
						log( 'Twc.Checkout.CSSCall.addOfferToCart(): ' + offerId + " added to cart" );
					} else {
						error( "Failed to Add Offer to Cart" );
						addedToCart = data;
						addedToCart.result = "failure";
					}
				},
				error: function( request, textStatus, errorThrown ) {
					error( "Failed to Add Offer to Cart: " + textStatus + " - " + errorThrown ); // log the error
				},
				timeout: function() {
					error( "Failed to add offer to cart due to timeout" );
				}
			} );
			return addedToCart;
		},

		updateCartCustomizePhone: function( inputElement, e ) {
			var $inputEl = $( inputElement );

			// throw error if our ajax request requirements aren't met
			if ( $inputEl.length !== 1 ||
				'undefined' === typeof( $inputEl.data( 'serviceid' ) ) ||
				'undefined' === typeof( $inputEl.data( 'aspectid' ) ) ) {
				return exitOnError( 'required data not available', e );
			}

			var actionData = Twc.Checkout.CSSCall.buildTabConfigAspectActions( inputElement );
			log( 'Twc.Checkout.CSSCall.updateCartCustomizePhone(' + $inputEl.data( 'serviceid' ) + ')' );

			updateCartService( actionData, inputElement );
		},

		updateCartCustomizeTv: function( inputElement, previousElement ) {
			var $inputEl = $( inputElement );

			// throw error if our ajax request requirements aren't met
			if ( $inputEl.length !== 1 ||
				'undefined' === typeof( $inputEl.data( 'serviceid' ) ) ||
				'undefined' === typeof( $inputEl.data( 'aspectid' ) ) ) {
				return exitOnError( 'required data not available' );
			}

			var actionData = buildTVEquipmentAspectActions( inputElement, previousElement );
			log( 'Twc.Checkout.CSSCall.updateCartCustomizeTv(' + $inputEl.data( 'serviceid' ) + ')' );

			updateCartService( actionData, inputElement );
		},

		buildNextFlags: function( origHref, nextFlags ) {
			console.log( origHref );
			console.log( nextFlags );
			var _href = ( origHref.indexOf( '?' ) == -1 ) ? origHref + "?" : origHref;
			jQuery.each( nextFlags, function() {
				if ( _href.indexOf( this ) == -1 ) {
					_href += "&" + this;
				}
			} );
			_href = _href.replace( /\?&/, "?" );
			console.log( _href );
			return _href;
		},

		getItemInstallmentData: function( inputElement ) {
			var $inputEl = $( inputElement );
			var serviceId = $inputEl.data( 'serviceid' );
			var aspectId = $inputEl.data( 'aspectid' );
			var selectionId = $inputEl.data( 'selectionid' );
			var installmentSelected = $inputEl.attr( 'isiteminstallment' );

			//all variables required so check for empty or undefined
			if ( typeof serviceId === 'undefined' || serviceId == '' || typeof aspectId === 'undefined' || aspectId == '' || typeof selectionId === 'undefined' || selectionId == '' || typeof installmentSelected === 'undefined' || installmentSelected == '' ) {
				return {};
			} else {
				return {
					'service_id': serviceId,
					'aspect_id': aspectId,
					'selection_id': selectionId,
					'installment_selected': installmentSelected
				}
			}

		},

		clearCart: function( cartActionType ) {
			if ( !Twc.Checkout.ShoppingCart.isEmpty() ) {
				Twc.Checkout.Util.invokeClearCartDialog( cartActionType );
			}
		},

		/**********************************************************
		 * MULTI-PAGE FUNCTIONS
		 **********************************************************/
		bindCustomizePageUpdates: function() {
			$( ".modem-options input, .connections input" ).change( function() {
				Twc.Checkout.CSSCall.updateCartCustomizePhone( this, null );
			} );
		},

		/** Dispatches an event.  Accepts indefinite amount of arguments, but first argument MUST be string of event name with corresponding
		 * function.  e.g. dispatch('elementClick', param1, param2, etc...);
		 * @author McGowan
		 */
		dispatch: function() {
			try {
				if ( !typeof arguments[ 0 ] === 'string' ) {
					error( 'CSSCall.dispatch(): first argument must be event name' );
					return;
				}
				var args = Array.prototype.slice.call( arguments ); // convert arguments to Array
				var eventName = args.shift(); // we don't need event name anymore. don't pass it on
				var f = events[ eventName ];
				if ( 'function' === typeof f ) {
					f.apply( f, args );
				} else {
					warn( 'CSSCall.dispatch(): no function defined for: ' + eventName );
					return;
				}
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e )
			}
		}
	}

}() );

Twc = Twc || {};
Twc.Checkout = Twc.Checkout || {};
/**
 * Manages user session within browser.  Implicitly starts a countdown timer
 * @namespace
 * @author McGowan
 */
Twc.Checkout.Session = ( function() {

	// this should be set true when
	var isExpired = 0;

	var sessionTimeout = Twc.Settings.sessionTimeout;

	var sessionTimeoutWarning = Twc.Settings.sessionTimeoutWarning;

	// ID for current window.setTimeout()
	var sessionTimeoutId = null;
	var sessionTimeoutWarningId = null;

	var cartActionType = '';

	var warningModal = '';

	var sessionTimeoutComponent = '';

	/** @returns "x minutes" or "x seconds" or x.xx if x has decimal
	 * @author McGowan
	 */
	function getMSFormatted( ms ) {
		if ( isNaN( ms ) )
			return '';

		var time, label;
		// determine mins or seconds.  Show two decimal places if decimal
		if ( ms / 1000 / 60 < 1 ) { // show seconds
			time = ms / 1000;
			label = time != 1 ? ' seconds' : ' second';
		} else { // show minutes
			time = ms / 1000 / 60;
			label = time != 1 ? ' minutes' : ' minute';
		}
		time = time % 1 == 0 ? time : time.toFixed( 2 );
		return ( time ) + ' ' + label;
	}

	function showTimeoutMessage() {
		if ( cartActionType ) {
			if ( warningModal.find( '.modal-box' ).is( ":visible" ) ) {
				warningModal.trigger( "closeModal" );
			}
			sessionTimeoutComponent.find( '.session-timeout-modal .modal' ).trigger( "showModal" );
		} else {
			if ( Twc.Checkout.Modal.isVisible( "process timed out" ) ) return;

			var redirectUrl = Twc.Settings.loginUrl;

			var modalOptions = {
				width: Twc.Settings.sessionModalWidth,
				height: Twc.Settings.sessionModalHeight,
				isError: false,
				message: '<p>The order process timed out. For your security, our order process will time out within approximately ' + getMSFormatted( sessionTimeout ) + ' of inactivity.</p><p>Please try again. If you continue to experience difficulty, please call us at 1-855-243-8892.</p>',
				title: 'Session Timeout',
				confirmText: 'Start Over',
				confirmCallBack: function() {
					Twc.Checkout.Modal.redirect( redirectUrl );
				},
				closeCallBack: function() {
					Twc.Checkout.Modal.redirect( redirectUrl );
				}
			};
			Twc.Checkout.Modal.modalFactory( modalOptions );
		}
	}

	function startWarningTimer() {
		if ( !Twc.Settings.sessionTimeoutEnabled )
			return;

		// start timeout timer
		if ( sessionTimeout >= 0 ) {
			sessionTimeoutId = window.setTimeout( function() {
				Twc.Checkout.Session.expireSession();
			}, sessionTimeout );
		}

		// start the session timeout timer. QA sets zero value so don't run this if so
		if ( sessionTimeoutWarning >= 0 ) {
			if ( cartActionType ) {
				sessionTimeoutWarningId = window.setTimeout( function() {
					warningModal.trigger( "showModal" );
				}, sessionTimeoutWarning );
			} else {
				sessionTimeoutWarningId = window.setTimeout( function() {
					var modalOptions = {
						width: Twc.Settings.sessionModalWidth,
						height: Twc.Settings.sessionModalHeight,
						isError: true,
						message: 'Your session will expire in ' + getMSFormatted( sessionTimeout - sessionTimeoutWarning ),
						title: 'Session Timeout Warning',
						confirmCallBack: function() {
							$( this ).html( 'Please wait...' );

							// don't provide callbacks, because global callbacks should be set to filter response
							$.ajax( {
									method: 'post',
									url: Twc.Settings.ajaxUrls.Session
								} )
								.fail( Twc.Checkout.Session.expireSession )
								.done( function() {
									Twc.Checkout.Modal.close();
									Twc.Checkout.Session.resetTimeoutWarning();
								} );
							return false;
						},
						closeCallBack: function() {
							$( this ).html( 'Please wait...' );

							// don't provide callbacks, because global callbacks should be set to filter response
							$.ajax( {
									method: 'post',
									url: Twc.Settings.ajaxUrls.Session
								} )
								.fail( Twc.Checkout.Session.expireSession )
								.done( function() {
									Twc.Checkout.Modal.close();
									Twc.Checkout.Session.resetTimeoutWarning();
								} );
							return false;
						}
					};
					Twc.Checkout.Modal.modalFactory( modalOptions );
				}, sessionTimeoutWarning );
			}
		}
	}

	function clearTimers() {
		if ( sessionTimeoutId != null ) {
			window.clearTimeout( sessionTimeoutId );
			sessionTimeoutId = null;
		}
		if ( sessionTimeoutWarningId != null ) {
			window.clearTimeout( sessionTimeoutWarningId );
			sessionTimeoutWarningId = null;
		}
	}

	startWarningTimer();

	return {

		/** Explicitly expire the session and show users a message
		 * @author McGowan
		 */
		expireSession: function() {
			Twc.Checkout.Util.deleteSessionCookies();

			if ( !Twc.Settings.sessionTimeoutEnabled )
				return;

			clearTimers();
			isExpired = true;
			showTimeoutMessage();
		},

		expireSessionNoMessage: function() {
			Twc.Checkout.Util.deleteSessionCookies();
			clearTimers();
			isExpired = true;
		},

		/** Resets the session timeout warning and starts the timer again. Only resets if session has not yet expired
		 * This should only be called by the AJAX filter Twc.Checkout.Util.processAjaxResponse()
		 * @author McGowan
		 */
		resetTimeoutWarning: function( actionType ) {
			cartActionType = ( actionType === "fed" );
			if ( cartActionType && sessionTimeoutComponent === '' ) {
				sessionTimeoutComponent = $( '.session-timeout-warning' );
				warningModal = sessionTimeoutComponent.find( '.session-warning-modal .modal' );
				sessionTimeout = ( sessionTimeoutComponent.find( '.timeoutDuration' ).data( "timeout" ) ) * 60 * 1000;
				sessionTimeoutWarning = ( sessionTimeoutComponent.find( '.sessionWarningDuration' ).data( "timeout" ) ) * 60 * 1000;
			}
			if ( !Twc.Settings.sessionTimeoutEnabled )
				return;

			if ( isExpired ) {
				log( 'Session.resetTimeoutWarning(): already expired. Not resetting.' );
				showTimeoutMessage();
				return;
			}

			log( 'Session.resetTimeoutWarning()' );
			clearTimers();

			startWarningTimer();
		},

		/** Explicitly disables the session timers and warning maessages.  Currently used while in CQ Author Mode
		 * @author McGowan
		 */
		disableTimeoutFeatures: function() {
			log( "Twc.Checkout.Session.disableTimeoutFeatures()" );
			Twc.Settings.sessionTimeoutEnabled = 0;
			clearTimers();
		}
	};

}() );

/**
 * Manages interactive for packages, package filter, etc.
 * @namespace
 */
Twc.ServicePackages = ( function() {

	var isInitialized = false;
	var showErrorTimeoutId = null;
	var $navPrev = null;
	var $navNext = null;
	var $filterBoxes;
	var $filterError;
	var $noPackagesExistError;
	var $carouselWrap;
	var $packages;
	var $carousel;
	var $originalPackagesList;
	var $originalDetailsList;
	var filterBoxes = {};
	var currentPage = 0;
	var numberOfPackages = 0;
	var $detailsWrap;
	var $detailsArrow;
	var $detailsToggles;
	var detailsToggleLabels;
	var $detailsContents;
	var $packagesContentContainer;
	var $detailsContentContainer;
	var currentFilter = "All";

	/**
	 * Get Data About Various Page and Package Information
	 */
	function getTotalPerSlide() {
		if ( Twc.Checkout.Util.isIE8OrLower() ) {
			var desktop = 3;
			return desktop;
		} else {
			return ( Twc.Breakpoint.which() === 'desktop' ) ? 3 : 1;
		}
	}

	function getTotalPages() {
		return Math.ceil( numberOfPackages / getTotalPerSlide() );
	}

	/**
	 * Functions To Dynamically Set and Calculate Carousel and Packages Views
	 */
	// dynamically fix heights based on largest height on each page group. should be called when moving in/out desktop breakpoint
	function setPackageHeights() {
		// each package should have these rows, which we must set to equal heights based on those shown within a carousel "page"
		var rows = [
			$carouselWrap.find( '.package-header' ),
			$carouselWrap.find( '.package-services li:nth-child(1)' ),
			$carouselWrap.find( '.package-services li:nth-child(2)' ),
			$carouselWrap.find( '.package-services li:nth-child(3)' ),
			$carouselWrap.find( '.more-details-content' )
		];

		// Add 2 for the end pages used for the wrapping effect
		var totalPages = getTotalPages() + 2;
		var totalPerSlide = getTotalPerSlide();
		var $activeTab = $( '.tabs .tab-nav li.active' ) || {};
		var tab = $activeTab.data( 'tabname' );

		if ( totalPerSlide === 1 && tab !== 'syos' ) {
			var h = 'auto';
			for ( var row = 0; row < rows.length; row++ ) {
				rows[ row ].css( {
					'height': h
				} );
			}
		} else if ( tab !== 'syos' ) {
			for ( var page = 0; page < totalPages; page++ ) {
				for ( var row = 0; row < rows.length; row++ ) {
					var $rowCells = rows[ row ].slice( page * totalPerSlide, ( totalPerSlide * ( page + 1 ) ) );
					var maxH = 0;
					$rowCells.each( function() {
						var $me = $( this );
						var h = $me.outerHeight( true );
						if ( h > maxH )
							maxH = h;
					} );
					$rowCells.css( {
						'height': maxH + 'px'
					} );
				}
			}
		}
	}

	// sets the height of the packages based on the next page to be shown.
	function setPackageContainerHeight() {
		var $packagesList = $carouselWrap.find( '.packages-list' );
		var $activeTab = $( '.tabs .tab-nav li.active' ) || {};
		var tab = $activeTab.data( 'tabname' );
		if ( tab === 'syos' ) {
			return;
		}
		var perSlide = getTotalPerSlide();
		var $packagesShown = $packages.slice( currentPage * perSlide, ( currentPage * perSlide ) + perSlide );
		var maxH = 0;
		$packagesShown.each( function() {
			var $me = $( this );
			var h = $me.outerHeight( true );
			if ( h > maxH )
				maxH = h;
		} );
		// note - animation of height causes flash on ul.packages-list during paging, so don't animate for now
		$packagesList.css( {
			'height': maxH + 'px'
		} );
	}

	function evalPagingButtons( disableFade ) {
		var $packagesList = $carouselWrap.find( '.packages-list' );
		var packageNavButtonFadeDuration = 400;
		if ( !$packagesList.is( ':animated' ) ) {
			if ( getTotalPages() <= 1 ) {
				$navNext.clearQueue().fadeOut( disableFade ? 0 : packageNavButtonFadeDuration );
				$navPrev.clearQueue().fadeOut( disableFade ? 0 : packageNavButtonFadeDuration );
				currentPage = 0;
			} else {
				$navNext.clearQueue().fadeIn( disableFade ? 0 : packageNavButtonFadeDuration );
				$navPrev.clearQueue().fadeIn( disableFade ? 0 : packageNavButtonFadeDuration );
			}
		}
	}

	function handleErrorSlide( error, direction, callback ) {
		window.clearTimeout( showErrorTimeoutId );
		callback = callback || function() {};
		var showErrorDelay = 500;
		var packageFilterErrorSlideDuration = 400;
		var packageFilterErrorSlideEasing = 'swing';
		if ( direction === 'up' ) {
			error.slideUp(
				packageFilterErrorSlideDuration,
				packageFilterErrorSlideEasing,
				callback
			)
		} else if ( direction === 'down' ) {
			showErrorTimeoutId = window.setTimeout( function() {
				error.slideDown(
					packageFilterErrorSlideDuration,
					packageFilterErrorSlideEasing,
					callback
				)
			}, showErrorDelay );
		}
	}

	/**
	 * Package Filter functions
	 *   - filter functions for user checkbox selection
	 *   - filter functions for controlling and setting error state
	 */
	// evaluates the User Interface status and decides which action to take
	function evalUIStatus( layoutChange ) {
		layoutChange = layoutChange || false;
		var filter = getFilter();
		if ( filter === 'None' ) {
			$navNext.hide();
			$navPrev.hide();
			handleErrorSlide( $noPackagesExistError, 'up', removeCalculatedPackages );
			buildFilterSelectionAnalytics();
			closePackageDetails();
			handleErrorSlide( $filterError, 'down', setPackageContainerHeight );
			$packagesContentContainer.css( {
				'opacity': '0'
			} );
			Twc.Analytics.dispatch( 'noPackagesExist', $noPackagesExistError.text() );
		} else if ( currentFilter !== filter || ( filter === 'All' && isInitialized && !layoutChange ) ) {
			removeCalculatedPackages();
			if ( filterPackages( filter ) ) {
				currentPage = 1;
				if ( currentFilter === 'None' ) {
					handleErrorSlide( $filterError, 'up', showLoadedContent );
				} else {
					handleErrorSlide( $noPackagesExistError, 'up', showLoadedContent );
				}
			} else {
				$navNext.hide();
				$navPrev.hide();
				closePackageDetails();
				if ( currentFilter === 'None' ) {
					handleErrorSlide( $filterError, 'up' );
				}
				$packagesContentContainer.css( {
					'opacity': '0'
				} );
				handleErrorSlide( $noPackagesExistError, 'down', setPackageContainerHeight );
			}
		} else if ( !isInitialized ) {
			currentPage = 1;
			showLoadedContent();
		} else if ( layoutChange ) {
			removeCalculatedPackages();
			filterPackages( filter );
			showLoadedContent();
		}
		currentFilter = filter;
	}

	function getFilter() {
		var all = filterBoxes.all.checked,
			tv = filterBoxes.tv.checked,
			internet = filterBoxes.internet.checked,
			phone = filterBoxes.phone.checked,
			filterType = "";

		if ( all ) {
			filterType = "All";
			return filterType;
		} else if ( tv && internet && phone ) {
			filterType = "TriplePlay";
			return filterType;
		} else if ( tv && internet && !phone ) {
			filterType = "TvInternetDoublePlay";
			return filterType;
		} else if ( tv && !internet && phone ) {
			filterType = "TvPhoneDoublePlay";
			return filterType;
		} else if ( !tv && internet && phone ) {
			filterType = "InternetPhoneDoublePlay";
			return filterType;
		} else {
			return "None";
		}
	}

	function filterPackages( filter ) {
		var packagesExists = false;
		var $packagesList = $carouselWrap.find( '.packages-list' );
		var $filterDetailsContent = [];

		if ( filter === "All" ) {
			$packagesList.append( $originalPackagesList );
			$detailsContentContainer.append( $originalDetailsList );
			packagesExists = true;
		} else if ( filter === "TriplePlay" ) {
			$packagesList.append( $originalPackagesList.filter( function( index ) {
				if ( $( this ).data( 'tv' ) == true && $( this ).data( 'internet' ) == true && $( this ).data( 'phone' ) == true ) {
					packagesExists = true;
					$filterDetailsContent.push( $originalDetailsList[ index ] );
					return $( this );
				}
			} ) );
			$detailsContentContainer.append( $filterDetailsContent );
		} else if ( filter === "TvInternetDoublePlay" ) {
			$packagesList.append( $originalPackagesList.filter( function( index ) {
				if ( $( this ).data( 'tv' ) == true && $( this ).data( 'internet' ) == true && $( this ).data( 'phone' ) == false ) {
					packagesExists = true;
					$filterDetailsContent.push( $originalDetailsList[ index ] );
					return $( this );
				}
			} ) );
			$detailsContentContainer.append( $filterDetailsContent );
		} else if ( filter === "TvPhoneDoublePlay" ) {
			$packagesList.append( $originalPackagesList.filter( function( index ) {
				if ( $( this ).data( 'tv' ) == true && $( this ).data( 'internet' ) == false && $( this ).data( 'phone' ) == true ) {
					packagesExists = true;
					$filterDetailsContent.push( $originalDetailsList[ index ] );
					return $( this );
				}
			} ) );
			$detailsContentContainer.append( $filterDetailsContent );
		} else if ( filter === "InternetPhoneDoublePlay" ) {
			$packagesList.append( $originalPackagesList.filter( function( index ) {
				if ( $( this ).data( 'tv' ) == false && $( this ).data( 'internet' ) == true && $( this ).data( 'phone' ) == true ) {
					packagesExists = true;
					$filterDetailsContent.push( $originalDetailsList[ index ] );
					return $( this );
				}
			} ) );
			$detailsContentContainer.append( $filterDetailsContent );
		}

		return packagesExists;
	}

	function removeCalculatedPackages() {
		$.merge( $carouselWrap.find( '.packages-list' )
			.find( '>' ), $detailsContentContainer
			.find( '>' ) ).remove();
	}

	function buildFilterSelectionAnalytics() {
		var services = [];
		if ( filterBoxes.tv.checked ) {
			services.push( 'tv' );
		}
		if ( filterBoxes.internet.checked ) {
			services.push( 'internet' );
		}
		if ( filterBoxes.phone.checked ) {
			services.push( 'phone' );
		}
		Twc.Analytics.dispatch( 'packagesFilter', ( services.length == 3 || filterBoxes.all.checked ) ? 'show all' : services.join( ' and ' ) );
	}

	/**
	 * Package Details Control
	 *   - hide, fade, and reset Package Details content
	 */
	function closePackageDetails() {
		$detailsWrap.stop( true, true ).slideUp( function() {
			$detailsWrap.removeClass( 'active' );
		} );
		resetPackageDetailsToggles();
	}

	// set all columns equal for visible details
	function setPackageDetailsHeight() {
		var $thisDetails = $detailsContents.filter( ':visible' );
		var $thisDetailsCols = $thisDetails.find( '.col' );

		var h = 'auto';
		if ( Twc.Breakpoint.which() === 'desktop' ) { // moving from 1 slide to perDesktopPage. determining the page that shows this among three
			var maxH = 0;
			$thisDetailsCols.each( function() {
				var $me = $( this );
				var h = $me.height();
				if ( h > maxH )
					maxH = h;
			} );
			h = maxH + 'px';
		}
		$thisDetailsCols.height( h );
	}

	function resetPackageDetailsToggles() {
		$detailsToggles.removeClass( 'active' ).each( function( i ) {
			var $me = $( this );
			$me.html( detailsToggleLabels[ i ].viewMore );
		} );
		$detailsToggles.removeClass( 'active' )
	}

	function togglePackageDetails( packageNum ) {
		// get position of that clicked within slide page
		var $thisToggle = $detailsToggles.eq( packageNum );
		var $thisDetails = $detailsContents.eq( packageNum );
		var detailsArrowPos = [ '15.8%', '50%', '84.2%' ]; // [left, right, center]
		var packageDetailsFadeInDuration = 800;
		if ( $thisToggle.is( '.active' ) ) { // close details
			closePackageDetails();
		} else { // open details
			resetPackageDetailsToggles();
			$thisToggle.addClass( 'active' ).html( detailsToggleLabels[ packageNum ].viewLess );
			var arrowPos = detailsArrowPos[ packageNum % getTotalPerSlide() ];

			$detailsArrow.stop().clearQueue();

			$detailsContents.hide().stop( true, true );
			if ( $detailsWrap.hasClass( 'active' ) ) { // already open. transition content
				$thisDetails.fadeIn( packageDetailsFadeInDuration, 'swing' );
				$detailsArrow.animate( {
					'left': arrowPos
				}, packageDetailsFadeInDuration / 2, 'swing' );
			} else { // not yet open
				$thisDetails.show();
				$detailsWrap.stop( true, true ).slideDown( function() {
					$detailsWrap.addClass( 'active' );
				} );
				$detailsArrow.css( {
					'left': arrowPos
				} );
			}

			setPackageDetailsHeight();
			Twc.Analytics.dispatch( 'viewMoreLink', 'View More' );
		}
	}

	/**
	 * Page Flow and Layout Change Control
	 */
	// only called when switching between desktop and tablet
	function onLayoutChange( breakpoint ) {
		var $activeTab = $( '.tabs .tab-nav li.active' ) || {},
			tab = $activeTab.data( 'tabname' ),
			$packagesList = $carouselWrap.find( '.packages-list' ),
			perDesktopPage = 3,
			pageOffset = 1;

		numberOfPackages = $packagesList.find( '>' ).length;

		if ( tab === 'syos' ) {
			return;
		}
		if ( breakpoint === 'desktop' ) {
			currentPage = Math.ceil( currentPage / perDesktopPage );
			evalUIStatus( true );
			if ( numberOfPackages > 0 ) {
				var offset = getScrollOffset( 'desktop' );
				$packagesList.stop( true, false ).clearQueue().css( {
					'margin-left': offset
				} );
			}
		} else {
			if ( numberOfPackages === 1 ) {
				currentPage = 0;
			} else if ( numberOfPackages <= 3 ) {
				currentPage = 1;
			} else {
				currentPage = ( currentPage * perDesktopPage ) - perDesktopPage + pageOffset;
			}
			evalUIStatus( true );
			if ( numberOfPackages > 0 ) {
				var offset = getScrollOffset( 'mobile' );
				$packagesList.stop( true, false ).clearQueue().css( {
					'margin-left': offset
				} );
			}
		}

		setPackageHeights();
		setPackageContainerHeight();
		evalPagingButtons( true );
		setPackageDetailsHeight();
	}

	function getScrollOffset( view ) {
		var perSlide = getTotalPerSlide();
		var $packagesShown = $packages.slice( currentPage * perSlide, currentPage * perSlide + perSlide );
		Twc.Analytics.dispatch( 'packagesDisplayed', $packagesShown );
		var scrollOffset = ( view === 'desktop' ) ? -( $packagesContentContainer.outerWidth( true ) * currentPage ) + 'px' : -( currentPage * 100 ) + '%';
		return scrollOffset;
	}

	// Control page animation and wrapping
	function setPage( page ) {
		var view = Twc.Checkout.Util.isIE8OrLower() ? 'desktop' : Twc.Breakpoint.which();
		var totalPages = getTotalPages() - 2;
		var $packagesList = $carouselWrap.find( '.packages-list' );
		var packageSlideDuration = 400;
		closePackageDetails();
		currentPage = page;
		$packagesList.clearQueue().animate( {
			'margin-left': getScrollOffset( view )
		}, {
			'queue': false,
			'duration': packageSlideDuration,
			'complete': function() {
				if ( page == 0 ) {
					currentPage = totalPages;
					$packagesList.stop( true, false ).clearQueue().css( {
						'margin-left': getScrollOffset( view )
					} );
				} else if ( page > totalPages ) {
					currentPage = 1;
					$packagesList.stop( true, false ).clearQueue().css( {
						'margin-left': getScrollOffset( view )
					} );
				} else {
					currentPage = page;
				}
				setPackageContainerHeight();
			}
		} );
	}

	// Produces BackFill Packages
	function sliceBackFillPackages( pkgObj ) {
		var def = new jQuery.Deferred();

		var backFillIndex = 0;
		var backFillInitial = 0;
		if ( numberOfPackages % 3 === 0 || ( numberOfPackages < 3 ) ) {
			def.resolve( pkgObj );
		} else {
			backFillIndex = ( numberOfPackages % 3 === 1 ) ? 2 : 1;
			var $backFillPackages = pkgObj.packageItems.slice( backFillInitial, backFillIndex ).clone().removeData( 'initial' );
			$backFillPackages.attr( 'data-initial', 'false' );
			var $nextEdgeDetails = pkgObj.packageDetails.slice( backFillInitial, backFillIndex ).clone().removeData( 'initial' );
			$nextEdgeDetails.attr( 'data-initial', 'false' );
			pkgObj.packageItems.filter( ':last' ).after( $backFillPackages );
			pkgObj.packageDetails.filter( ':last' ).after( $nextEdgeDetails );
			pkgObj.packageItems = pkgObj.packagesList.find( '>' );
			pkgObj.packageDetails = $detailsContentContainer.find( '>' );
			def.resolve( pkgObj );
		}

		return def.promise();
	}

	// Produces Beginning Boundary Packages needed for wrapping effect
	function slicePreviousEdgePackages( pkgObj ) {
		var def = new jQuery.Deferred();

		var slice = 3;
		var $prevEdgePackages = pkgObj.packageItems.slice( -slice ).clone().removeData( 'initial' );
		$prevEdgePackages.attr( 'data-initial', 'false' );
		var $nextEdgeDetails = pkgObj.packageDetails.slice( -slice ).clone().removeData( 'initial' );
		$nextEdgeDetails.attr( 'data-initial', 'false' );
		pkgObj.packageItems.filter( ':first' ).before( $prevEdgePackages );
		pkgObj.packageDetails.filter( ':first' ).before( $nextEdgeDetails );
		pkgObj.packageItems = pkgObj.packagesList.find( '>' );
		pkgObj.packageDetails = $detailsContentContainer.find( '>' );

		def.resolve( pkgObj );
		return def.promise();
	}

	// Produces End Boundary Packages needed for wrapping effect
	function sliceNextEdgePackages( pkgObj ) {
		var def = new jQuery.Deferred();

		var slice = 3;
		var $nextEdgePackages = pkgObj.packageItems.slice( slice, 2 * slice ).clone().removeData( 'initial' );
		$nextEdgePackages.attr( 'data-initial', 'false' );
		var $nextEdgeDetails = pkgObj.packageDetails.slice( slice, 2 * slice ).clone().removeData( 'initial' );
		$nextEdgeDetails.attr( 'data-initial', 'false' );

		pkgObj.packageItems.filter( ':last' ).after( $nextEdgePackages );
		pkgObj.packageDetails.filter( ':last' ).after( $nextEdgeDetails );
		pkgObj.packageItems = pkgObj.packagesList.find( '>' );
		pkgObj.packageDetails = $detailsContentContainer.find( '>' );

		def.resolve( pkgObj );

		return def.promise();
	}

	//Creates Mobile Wrap Package List
	function createMobilePackageList( pkgObj ) {
		var def = new jQuery.Deferred();

		pkgObj.mobilePackageItems = pkgObj.mobilePackageItems.removeData( 'initial' ).attr( 'data-initial', 'false' );
		pkgObj.mobilePackageDetails = pkgObj.mobilePackageDetails.removeData( 'initial' ).attr( 'data-initial', 'false' );

		pkgObj.packageItems.filter( ':first' ).before( pkgObj.mobilePackageItems.last().clone() );
		pkgObj.packageItems = pkgObj.packagesList.find( '>' );
		pkgObj.packageItems.filter( ':last' ).after( pkgObj.mobilePackageItems.first().clone() );

		pkgObj.packageDetails.filter( ':first' ).before( pkgObj.mobilePackageDetails.last().clone() );
		pkgObj.packageDetails = $detailsContentContainer.find( '>' );
		pkgObj.packageDetails.filter( ':last' ).after( pkgObj.mobilePackageDetails.first().clone() );

		pkgObj.packageItems = pkgObj.packagesList.find( '>' );
		pkgObj.packageDetails = $detailsContentContainer.find( '>' );

		def.resolve( pkgObj );

		return def.promise();
	}

	function calculatePackageList( view ) {
		var $packagesList = $carouselWrap.find( '.packages-list' ),
			$packageDetails = $detailsContentContainer.find( '>' ),
			$packageItems = $packagesList.find( '>' ),
			$mobilePackageItems = $packageItems.clone(),
			$mobilePackageDetails = $packageDetails.clone();

		numberOfPackages = $packageItems.length;
		var totalPages = getTotalPages();

		if ( totalPages > 1 ) {
			var packageObj = {
				packagesList: $packagesList,
				packageDetails: $packageDetails,
				packageItems: $packageItems,
				mobilePackageItems: $mobilePackageItems,
				mobilePackageDetails: $mobilePackageDetails
			};

			if ( view === 'desktop' ) {
				$.when( packageObj )
					.then( sliceBackFillPackages )
					.then( slicePreviousEdgePackages )
					.then( sliceNextEdgePackages )
					.done( function( packageObj ) {
						$detailsContentContainer.find( '>' ).hide();
						numberOfPackages = $packagesList.find( '>' ).length;
						return packageObj
					} );
			} else {
				$.when( packageObj )
					.then( createMobilePackageList )
					.done( function( packageObj ) {
						$detailsContentContainer.find( '>' ).hide();
						numberOfPackages = $packagesList.find( '>' ).length;
						return packageObj
					} );
			}
		}

	}

	function showLoadedContent() {
		var packageLoadFadeDuration = 400;
		var view = Twc.Checkout.Util.isIE8OrLower() ? 'desktop' : Twc.Breakpoint.which();

		$carousel.find( '.js-packages-loading' ).hide();
		$packagesContentContainer.show();

		$packagesContentContainer.css( {
			'opacity': '0'
		} );
		calculatePackageList( view );

		$packages = $carouselWrap.find( '.package' );
		var totalPackages = $packages.length;

		if ( totalPackages === 0 ) {
			Twc.Analytics.dispatch( 'noPackagesExist', $noPackagesExistError.text() );
			$noPackagesExistError.show();
			$navNext.hide();
			$navPrev.hide();
		} else {
			$navNext.show();
			$navPrev.show();
			setPackageHeights();
			setPackageContainerHeight( true );

			// Init view more/less labels if specified for individual packages or use global
			detailsToggleLabels = new Array( $packages.length );
			$packages.each( function( i ) {
				var $package = $( this );
				var options = Twc.Checkout.Util.safeParseJson( $package.attr( 'data-options' ) );
				var detailsToggleOn = "Show What's Included";
				var detailsToggleOff = "Hide What's Included";
				detailsToggleLabels[ i ] = {
					'viewMore': options.viewMore || detailsToggleOff,
					'viewLess': options.viewLess || detailsToggleOn
				};
				$package.find( '.js-package-details-toggle' ).html( detailsToggleLabels[ i ].viewMore );
			} );
			$carouselWrap.find( 'a.modal' ).each( function() {
				$( this ).removeClass( 'js-modal-initialized' );
			} );
			$carouselWrap.find( 'a.tooltip' ).each( function() {
				$( this ).removeClass( 'js-tooltip-initialized' );
			} );

			Twc.Checkout.Modal.initLinks( $carouselWrap.find( 'a.modal' ) );
			Twc.Checkout.Tooltip.init( $carouselWrap.find( 'a.tooltip' ) );

			// init order button click
			var $orderButtons = $carouselWrap.find( '.js-package-order' );
			$orderButtons.click( Twc.Checkout.OrderButton.addPackage );

			var $packagesList = $carouselWrap.find( '.packages-list' );
			var $packageDetails = $detailsContentContainer.find( '>' );
			$detailsContents = $packageDetails.hide();

			// show/hide details links
			$detailsToggles = $packages.find( '.js-package-details-toggle' ).each( function( i ) {
				$( this ).click( function() {
					togglePackageDetails( i );
					return false;
				} );
			} );

			if ( totalPackages < 1 ) {
				$carousel.removeClass( 'js-page-desktop' );
				$carousel.removeClass( 'js-page' ); // tablet/mobile
			}
			if ( $packages.length > 1 ) {
				$carousel.addClass( 'js-page' );
			}
			if ( $packages.length > 3 ) {
				$carousel.addClass( 'js-page-desktop' );
			}

			evalPagingButtons();
			closePackageDetails();
			setPackageContainerHeight();

			var offset = getScrollOffset( view ); // ensure this is called so Analytics fires
			if ( view === 'desktop' ) {
				$packagesList.stop( true, false ).clearQueue().css( {
					'margin-left': offset
				} );
			} else {
				$packagesList.stop( true, false ).clearQueue().css( {
					'margin-left': offset
				} );
			}
			evalPagingButtons( true );
		}

		$packagesContentContainer.stop().animate( {
			'opacity': '1'
		}, {
			duration: packageLoadFadeDuration
		} );

		isInitialized = true;
	}

	return {
		init: function() {
			if ( isInitialized ) {
				error( 'Twc.ServicePackages.init(): Already initialized.' );
				return;
			}
			$carousel = $( '.packageCarouselWrapper .packages-slider' ).removeClass( 'hidden invisible' );
			$carouselWrap = $( '.packages-slider-wrap' );
			$detailsWrap = $carousel.find( '.whats-included-wrap' ).removeClass( 'active hidden' ).hide();
			$packagesContentContainer = $carousel.find( '.js-packages-wrap' ).css( {
				'opacity': 0
			} );
			$detailsContentContainer = $carousel.find( '.js-details-wrap' );
			$detailsArrow = $carousel.find( '.arrow-indicator' );
			$filterError = $( '.js-select-services' ).hide().removeClass( 'hidden invisible' );
			$noPackagesExistError = $( '.js-no-packages-exist' ).hide().removeClass( 'hidden invisible' );
			$filterBoxes = $( '.filter-options input[type=checkbox]' );
			$navPrev = $carousel.find( 'a.prev' ).hide().removeClass( 'hidden invisible' ).click( function() {
				setPage( currentPage - 1 );
				return false;
			} );
			$navNext = $carousel.find( 'a.next' ).hide().removeClass( 'hidden invisible' ).click( function() {
				setPage( currentPage + 1 );
				return false;
			} );

			if ( $carousel.length !== 1 ||
				$carouselWrap.length !== 1 ||
				$detailsWrap.length !== 1 ||
				$packagesContentContainer.length !== 1 ||
				$detailsContentContainer.length !== 1 ||
				$detailsArrow.length !== 1 ||
				$filterError.length !== 1 ||
				$filterBoxes.length !== 4 ||
				$navPrev.length !== 1 ||
				$navNext.length !== 1
			) {
				error( 'Twc.ServicePackages.init(): could not instantiate. Required DOM elements not found.' );
			}

			$carouselWrap.find( '.close' ).click( function() {
				closePackageDetails();
				return false;
			} );

			$originalDetailsList = $detailsContentContainer.find( '>' ).clone();
			$originalPackagesList = $carousel.find( '.packages-list' ).find( '>' ).clone();

			// manually set the values to ensure behavior we need
			filterBoxes.tv = $filterBoxes.filter( '[name=tv-filter]' ).attr( 'value', 'tv' )[ 0 ];
			filterBoxes.internet = $filterBoxes.filter( '[name=internet-filter]' ).attr( 'value', 'internet' )[ 0 ];
			filterBoxes.phone = $filterBoxes.filter( '[name=phone-filter]' ).attr( 'value', 'phone' )[ 0 ];
			filterBoxes.all = $filterBoxes.filter( '[name=show-all-filter]' ).attr( 'value', 'all' )[ 0 ];

			if ( 'undefined' === typeof( filterBoxes.tv ) ||
				'undefined' === typeof( filterBoxes.internet ) ||
				'undefined' === typeof( filterBoxes.phone ) ||
				'undefined' === typeof( filterBoxes.all ) ||
				$navPrev.length == 0 || $navNext.length == 0
			) {
				error( 'Twc.ServicePackages.init(): could not instantiate. all checkboxes required.' );
			}

			// deselect all other boxes if all is clicked
			$filterBoxes.filter( '[name=show-all-filter]' ).click( function() {
				if ( this.checked ) {
					filterBoxes.tv.checked = false;
					filterBoxes.internet.checked = false;
					filterBoxes.phone.checked = false;
				}
				evalUIStatus();
			} );

			// unselect all if one of these clicked
			$filterBoxes.filter( ':not([name=show-all-filter])' ).click( function() {
				if ( this.checked ) {
					filterBoxes.all.checked = false;
				}
				evalUIStatus();
			} );

			// bind left/right keys for carousel slider
			$( document ).keyup( function( e ) {
				var key = e.which;
				if ( 37 == key ) { // left
					setPage( currentPage - 1 );
				} else if ( 39 == key ) { // right
					setPage( currentPage + 1 );
				}
			} );

			Twc.Breakpoint.init();

			if ( !Twc.Checkout.Util.isIE8OrLower() ) {
				Twc.Breakpoint.onChange( setPackageContainerHeight );
				Twc.Breakpoint.onChangeFromDesktop( onLayoutChange );
				Twc.Breakpoint.onChangeToDesktop( onLayoutChange );
			}

			evalUIStatus();
		},

		isInitialized: function() {
			return isInitialized;
		},

		setContainerHeight: function() {
			evalUIStatus( true );
		}
	}

} )();

/**
 * @author McGowan
 * @namespace
 * Holds all page initialization routines
 */
Twc.PageInit = {};


/**
 * Runs on all pages.
 *	@author McGowan
 * @function
 */
Twc.PageInit.global = function() {

	// close any pop-up content if document is clicked.  pop-up content should call e.stopPropogation to prevent this from executing
	$( document ).click( Twc.Checkout.Util.closeOpenInteractives );

	if ( Modernizr && Modernizr.localstorage && !Twc.Checkout.Util.isIE8OrLower() ) {
		Twc.Analytics.dispatch( 'trackProductRemovals' );
	}

	Twc.Checkout.Modal.initLinks( $( 'a.modal' ) );
	Twc.Checkout.Tooltip.init( $( 'a.tooltip' ) );
	Twc.Components.TopQuestions.init();
	$( ".checkoutHeader .chat a" ).click( function() {
		Twc.Analytics.dispatch( 'chatClick' );
	} );

	//analytics for continue buttons
	$( '.button-nav a' ).click( function() {
		Twc.Analytics.dispatch( 'nextPageTransition', $( this ) );
	} );

	//setup analytics for modals
	$( 'a.modal' ).click( function() {
		var bodyId = Twc.Checkout.Util.getCurrentPageId();
		if ( bodyId.indexOf( '_' ) == -1 ||
			( bodyId.indexOf( 'select' ) == -1 &&
				bodyId.indexOf( 'upgrade' ) == -1 &&
				bodyId.indexOf( 'customize' ) == -1 ) )
			return; //expecting an underscore in the body id tag and only for customize or select pages

		var pageType = bodyId.split( '_' )[ 0 ];
		var lob = bodyId.split( '_' )[ 1 ];
		var items = 'plans';
		switch ( pageType ) {
			case 'select':
			case 'upgrade':
				items = 'plans';
				break;
			case 'customize':
				items = 'equipment'
				break;
			default:
				return;
		}
		Twc.Analytics.dispatch( 'compareModal', lob, 'select & customize', items );
	} );

	Twc.Checkout.ShoppingCart.init();

	Twc.DevOnly.prepPage();

	// view more/less disclaimers
	Twc.Components.ViewMore.initObjects( $( '.disclaimer' ) );

	/**********************************************************
	               Logout Button
	 **********************************************************/
	$( 'a.js-logout' ).click( function() {
		// remove cookie using top-level domain i.e. timewarnercable.com or blank. Always remove regardless of ajax response
		Twc.Checkout.Util.deleteSessionCookies();

		var logoutUrl = Twc.Settings.ajaxUrls.Session;
		var msgCssClass = Twc.Checkout.Util.showStatusBubble( $( 'body' ), Twc.Settings.messages.signingOut, {
			'cssClass': 'status-bubble-logout'
		} );
		$.ajax( {
			url: logoutUrl,
			method: 'delete',
			success: function( data, textStatus, xhr ) {
				var redirectUrl = data.redirectUrl;
				if ( 'undefined' !== typeof redirectUrl ) { // all good. complete logout
					window.location.href = redirectUrl;
				} else {
					$( '.' + msgCssClass ).remove();
					alert( 'No redirect URL found after logout.  Please refresh this page.' );
				}
			},
			error: function( xhr, textStatus, errorThrown ) {
				$( '.' + msgCssClass ).remove();
				alert( 'An error occurred during logout: ' + textStatus );
			}
		} );
		return false;
	} );
}

Twc = Twc || {};
Twc.Checkout = Twc.Checkout || {};
/**
 *  Manages functionality the shopping cart
 * @author McGowan
 * @namespace
 */
Twc.Checkout.ShoppingCart = ( function() {
	var isInitialized = false;
	var isActive = false;

	/** Page load data bound to the DOM */
	var cachedCartSummary; // cart summary object json
	var cachedMiniCartData; // condensed cart summary and customer profile object json
	var customerProfileData = $( "#customerProfileJson" ).data( 'customer-profile-json' );

	/** Cart elements */
	var $cart;
	var $cartOpenButton;

	/** Dust template is compiled once */
	var compiledCartTemplate;

	/** All variables used in evalPosition function */
	var $window = $( window );
	var $floating; //The object we're floating.  Statically on top or absolute on bottom of it's boundary container
	var $floatingBoundaryContainer; //The floating object should never go outside of this
	var $floatingBoundaryLeft; //the content section left of the floating object
	var $floatingBoundaryRight; //the content section right of the floating object
	var $floatingWrapper; //Wraps the floating object for positioning assistance
	var floatingTop;
	var floatingWrapperTop;
	var floatingBoundaryTop;
	var floatingBoundaryBottom;
	var scrollTop;
	var floatingHeight;
	var floatingBoundaryHeight;
	var floatTopClass = 'cart-float-top';
	var fixBottomClass = 'cart-fixed-bottom';
	var activeClass = 'active';

	/** Resets the positioning to default
	 */
	function reset() {
		if ( isInitialized ) {
			Twc.Checkout.Util.removeClass( $floatingBoundaryContainer, floatTopClass );
			Twc.Checkout.Util.removeClass( $floatingBoundaryContainer, fixBottomClass );

			floatingHeight = null;
			floatingBoundaryHeight = null;

			isActive = false;
		}
	}

	/** shows/hides cart based on button status
	 */
	function evalCartDisplay() {
		if ( isInitialized ) {
			if ( $cartOpenButton.hasClass( activeClass ) ) {
				$floatingWrapper.addClass( activeClass );
			} else { // close
				$floatingWrapper.removeClass( activeClass );
			}
		}
	}

	function expandCurrentLobDiv() {
		var page = Twc.Checkout.Util.getCurrentPageId();
		var lobs = [ "TV", "Internet", "Phone" ];

		if ( page ) {
			$.each( lobs, function() {
				if ( page.indexOf( this.toLowerCase() ) != -1 ) {
					//expand the div for this lob in the miniCart
					$( '.new-services-cart-module .' + this ).addClass( 'active' );
				}
			} );
		}
	}

	function renderCart( data ) {
		dust.render( 'miniCart', data, function( err, out ) {
			$cart.stop().fadeOut( Twc.Settings.shoppingCartUpdateFadeDuration, function() {
				$cart.html( out ).fadeIn( {
					'duration': Twc.Settings.shoppingCartUpdateFadeDuration,
					'step': Twc.Checkout.ShoppingCart.evalPosition
				} );
				// bind new content after it's loaded
				$floating = $cart.find( '.new-services-cart-module' );
				Twc.Components.RowExpander.initRows( $cart.find( '.collapsible' ), false, true );
				expandCurrentLobDiv();
			} );
		} );
	}

	function updateCartSummaryData( callbackFunction ) {
		$.ajaxQueue( {
			url: Twc.Settings.ajaxUrls.UpdateCart,
			dataType: 'json'
		} ).done( function( data, textStatus, jqXHR ) {
			cachedCartSummary = data;
			callbackFunction( cachedCartSummary );
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			showCartUpdateError( errorThrown );
			cachedCartSummary = null;
			callbackFunction( cachedCartSummary );
		} );
	}

	function updateCondensedCartData( callbackFunction ) {
		$.ajaxQueue( {
			url: Twc.Settings.ajaxUrls.GetCondensedCart,
			dataType: 'json'
		} ).done( function( data, textStatus, jqXHR ) {
			cachedMiniCartData = $.extend( {}, data, customerProfileData );
			callbackFunction( cachedMiniCartData );
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			showCartUpdateError( errorThrown );
			cachedMiniCartData = null;
			callbackFunction( cachedMiniCartData );
		} );
	}

	function showCartUpdateError( errorThrown ) {
		error( 'Could not update Shopping cart' );
		Twc.Checkout.Util.catchError( errorThrown );
	}

	return {
		init: function() {
			var $miniCartTemplate = $( '#miniCart' ).html();
			if ( $miniCartTemplate ) {
				compiledCartTemplate = dust.compile( $miniCartTemplate, 'miniCart' );
				dust.loadSource( compiledCartTemplate );
			}

			if ( -1 === $.inArray( Twc.Checkout.Util.getCurrentPageId(), [ 'your_services', 'select_packages', 'order_review', 'order_summary' ] ) ) {
				try {
					$floatingBoundaryContainer = $( '.cart-boundary-wrapper' );
					$floatingBoundaryLeft = $floatingBoundaryContainer.find( '.cart-boundary-left' );
					$floatingBoundaryRight = $floatingBoundaryContainer.find( '.cart-boundary-right' );
					$floatingWrapper = $floatingBoundaryContainer.find( '.cart-module-wrapper' );
					$floating = $floatingWrapper.find( '.new-services-cart-module' );
					$cart = $floatingBoundaryContainer.find( '.cart-module' );
					$cartOpenButton = $( '.user-options .cart' );

					if ( $floatingBoundaryContainer.length > 0 && $floatingWrapper.length > 0 && $cart.length > 0 && $cartOpenButton.length > 0 ) {

						// initialize header cart button
						var $cartButtonTrigger = $cartOpenButton.find( 'a' );

						$cartButtonTrigger.click( function( e ) {
							Twc.Checkout.Util.closeOpenInteractives( e );
							e.stopPropagation();
							if ( Twc.Breakpoint.which() !== 'desktop' ) {
								if ( $cart.length > 0 ) {
									if ( $cartOpenButton.hasClass( activeClass ) ) { // hide
										Twc.Checkout.ShoppingCart.close();
									} else { // show
										$cartOpenButton.addClass( activeClass );
										$floatingWrapper.addClass( activeClass );
									}
								}
							}
							return false;
						} );
						$cart.click( function( e ) {
							e.stopPropagation();
						} );
						if ( !isInitialized ) { // prevent multiple bindings
							$window.on( 'scroll resize', function( e ) {
								Twc.Checkout.ShoppingCart.evalPosition( true );
							} );
						}
						Twc.Breakpoint.init();
						isInitialized = true;
						evalCartDisplay();
						Twc.Checkout.ShoppingCart.updateShoppingCart();
					} else if ( !document.getElementsByClassName( "packageCompareTable" ) ) {
						error( 'Could not initialize Shopping Cart. Required elements not found' );
					}
				} catch ( e ) {
					Twc.Checkout.Util.catchError( e );
				}
			}
		},

		/** Evaluates the cart position and displays it appropriately.  This method should be called by any methods
		 * affecting page height.  Currently called by slide up/down methods from other features
		 * @param isScrollEvent {Boolean} Signifies this is only a scroll event and we should not re-calculate heights.
		 */
		evalPosition: function( isScrollEvent ) {
			if ( !isInitialized ) {
				return;
			}

			if ( Twc.Breakpoint.which() === 'desktop' ) { // we're in desktop breakpoint. tricky, but it works
				scrollTop = $window.scrollTop();

				if ( !floatingTop ) { // these should be set in desktop mode and default to 0 if not set
					floatingTop = $floating.offset().top;
					floatingWrapperTop = $floatingWrapper.offset().top;
					floatingBoundaryTop = $floatingBoundaryContainer.offset().top;
				}

				// exit if content section is not higher than floating section
				if ( $floatingBoundaryRight.height() > $floatingBoundaryLeft.height() ||
					$floatingWrapper.height() > $floatingBoundaryLeft.height() ) {
					reset();
					return;
				}

				if ( floatingTop <= scrollTop ) { // fix the floating object at top
					Twc.Checkout.Util.addClass( $floatingBoundaryContainer, floatTopClass ); // this drops processor from 85% to 25%.  Increases performance significantly
					isActive = true;

					// avoid height calls to improve performance
					if ( true ) { //floatingHeight == null || !isScrollEvent) {
						floatingHeight = $floating.outerHeight( true );
						floatingBoundaryHeight = $floatingBoundaryContainer.height();
					}

					// determine if user scrolled too far past boundary and affix float to bottom
					floatingBoundaryBottom = floatingWrapperTop + floatingBoundaryHeight - scrollTop;
					if ( floatingBoundaryBottom <= floatingHeight ) {
						Twc.Checkout.Util.addClass( $floatingBoundaryContainer, fixBottomClass );
					} else {
						Twc.Checkout.Util.removeClass( $floatingBoundaryContainer, fixBottomClass );
					}
				} else {
					reset();
				}
			} else {
				// reset if breakpoints are changing
				reset();
			}
		},

		updateShoppingCart: function() {
			if ( isInitialized ) {
				if ( !cachedMiniCartData ) { //If variable empty, do initial mini cart render
					cachedMiniCartData = $.extend( {}, $( "#condensedCartSummaryJson" ).data( 'condensed-cart-summary-json' ), customerProfileData );
					renderCart( cachedMiniCartData );
				} else {
					updateCondensedCartData( function( data ) {
						if ( data ) {
							renderCart( data );
						}
					} );
				}
			}
		},

		fetchCartSummaryData: function( callbackFunction ) {
			if ( !cachedCartSummary ) { //Grab the DOM data for first fetch of cart summary data
				cachedCartSummary = $( '#cartSummaryJson' ).data( 'cart-summary-json' );
				return callbackFunction( cachedCartSummary );
			} else {
				return updateCartSummaryData( callbackFunction );
			}
		},

		fetchCondensedCartData: function( callbackFunction ) {
			if ( !cachedMiniCartData ) { //If asynchronous call tries to reference cachedMiniCartData before Twc.Checkout.ShoppingCart.init()
				cachedMiniCartData = $.extend( {}, $( "#condensedCartSummaryJson" ).data( 'condensed-cart-summary-json' ), customerProfileData );
			}
			return callbackFunction( cachedMiniCartData );
		},

		isEmpty: function() {
			var initialCartSummary = $( '#cartSummaryJson' ).data( 'cart-summary-json' );

			if ( !initialCartSummary[ 'offerSummaries' ] ) {
				error( "Cart summary does not contain 'offerSummaries' property " );
				return true;
			}
			return initialCartSummary[ 'offerSummaries' ].length === 0
		},

		deleteCartContents: function() {
			jQuery.ajax( {
				type: "DELETE",
				async: false,
				url: Twc.Settings.ajaxUrls.UpdateCart,
				dataType: "json",
				success: function( data ) {
					window.location.reload();
				},
				error: function() {
					Twc.Checkout.Util.showErrorMessage( new Error( 'Clear cart action failed' ) );
				}
			} );
		},

		close: function() {
			if ( isInitialized ) {
				$cartOpenButton.removeClass( activeClass );
				evalCartDisplay();
			}
		},

		/**
		 * Checks the current cart summary, non ajax call, for a specific product based on its
		 * productId and product name
		 * @param productId {String} the product id of the item in question (can be viewed as modelId)
		 * @param productName {String} the product name
		 */
		isProductInCart: function( productId, productName ) {
			var data = $( '#cartSummaryJson' ).data( 'cart-summary-json' ); //fetch cart summary without ajax call
			var isFound = false; //record is product is found in current cart summary
			if ( data.offerSummaries ) {
				var cart = data.offerSummaries;

				$.each( cart, function( index, offerSummaries ) {
					$.each( offerSummaries.serviceSummaries, function( index, serviceSummaries ) {
						$.each( serviceSummaries.items, function( index, items ) {
							//compare all items in the cart to params
							if ( items.productId == productId && items.name == productName ) {
								isFound = true;
								return false; //break out of loops
							}
						} );
					} );
				} );
			}
			return isFound;
		}
	}
}() );

/**
 *  Manages functionality for loading modal pop-ups
 * @author McGowan
 * @namespace
 */
Twc.Checkout = Twc.Checkout || {};
Twc.Checkout.Modal = ( function() {

	function log( o ) {
		if ( console ) console.log( o );
	}

	function error( o ) {
		if ( console ) console.error( o );
	}

	function dir( o ) {
		if ( console ) console.dir( o );
	}

	/**
	 * marker to indicate link was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-modal-initialized';
	var modalContentSelector = '.modal-content';

	var modalFadeInDuration = 400;
	var errorModalHeight = '280px';

	// original markup used for cloning to new modals
	var $overlay_orig = $( '<div class="modal-overlay-bkg" onclick="Twc.Checkout.Modal.close()"></div>' );
	var $modalWindow_orig = $( '<div class="ajax-modal modal-window"><div class="modal-title-wrapper"><div class="modal-title"></div><div class="modal-button-close" onclick="Twc.Checkout.Modal.close();"></div></div><div class="modal-content-wrapper"><div class="modal-content-outer"><div class="modal-content"></div></div></div></div>' );
	var $loadingMessage = $( '<div class="modal-loading">Loading...<a href="#" class="modal-loading-close">cancel</a></div>' );
	$loadingMessage.find( ".modal-loading-close" ).on( 'tap', function() {
		Twc.Checkout.Modal.close();
		return false;
	} );
	var showLoadingMessageTimeoutId;

	// these are set later after DOM insert
	var $overlay = null;
	var $modalWindow = null;
	var $title = null;
	var $content = null;
	var $contentWrapper = null;

	var escKeyBound = false;
	var currentAjaxRequestId = null;

	function showLoadingMessage() {
		hideLoadingMessage();
		if ( $overlay ) {
			showLoadingMessageTimeoutId = window.setTimeout( function() {
				$overlay.append( $loadingMessage );
				var w = -( $loadingMessage.outerWidth( true ) ) / 2;
				$loadingMessage.css( {
					"margin-left": w
				} );
			}, 2000 ); // don't show immediately
		}
	}

	function hideLoadingMessage() {
		window.clearTimeout( showLoadingMessageTimeoutId );
		$( '.modal-loading' ).remove();
	}

	/** Resizes the modal based on the options shown.
	 * @author McGowan
	 */
	function resizeModal( options ) {
		// custom widths/heights should only be set for desktop. tablet and mobile should always show full width/heights. Ensure CSS uses !important
		if ( options.width ) {
			// get unit (px or %) and number
			var numUnit = Twc.Checkout.Util.getNumberUnit( options.width );

			var width = numUnit[ 0 ] + numUnit[ 1 ];
			var marginLeft = -( numUnit[ 0 ] / 2 ) + numUnit[ 1 ];

			$modalWindow.css( {
				'left': '50%',
				'right': 'auto',
				'width': width,
				'marginLeft': marginLeft
			} );
		}

		if ( options.height ) {
			// get unit (px or %) and number
			var numUnit = Twc.Checkout.Util.getNumberUnit( options.height );

			var height = numUnit[ 0 ] + numUnit[ 1 ];
			var top = '50%';
			var marginTop = -numUnit[ 0 ] / 2 + 'px';

			// percentages handle height differently
			if ( numUnit[ 1 ] === '%' ) {
				top = ( 100 - numUnit[ 0 ] ) / 2 + '%';
				marginTop = 0;
			}
			$modalWindow.css( {
				'bottom': 'auto',
				'height': height,
				'top': top,
				'marginTop': marginTop
			} );
		}
	}

	/** @author McGowan
	 * Starts a modal display
	 * @returns {integer} Timestamp ID of request
	 */
	function startModal( title, $link, options ) {
		var options = options || {};
		requestId = new Date().getTime(); // create an id to prevent latency display overlapping
		currentAjaxRequestId = requestId;

		Twc.Checkout.Modal.bindEscapeKey();

		Twc.Checkout.Modal.close();

		var title = title || '';

		// clone and create new modal elements.  Set local vars after DOM insert
		//If modal is triggered from a checkout extension container, we want to insert the content into that container so that style works correctly
		var $checkourModalWrapper = $( '.modal-wrapper' );
		$checkourModalWrapper.append( $overlay_orig.clone().hide() );
		$checkourModalWrapper.append( $modalWindow_orig.clone().hide() );

		$overlay = $( '.modal-overlay-bkg' ).fadeIn( modalFadeInDuration );
		$modalWindow = $( '.modal-window' );

		resizeModal( options );

		$title = $modalWindow.find( '.modal-title' );
		$content = $( modalContentSelector );
		$contentWrapper = $( '.modal-content-outer' );

		$title.html( title );

		return requestId;
	}

	/**
	 * @author McGowan
	 * @returns {boolean} Tests to see if a modal request is still valid
	 */
	function requestStillValid( requestId ) {
		var valid = ( requestId === currentAjaxRequestId );
		if ( !valid ) {
			log( requestId + " Current AJAX Request Expired." );
		}
		return valid;
	}

	function createModalButton( text, callBack, styles ) {
		var $button = $( '<a/>', {
			'class': 'blue-button',
			'style': styles,
			'html': text,
			'click': function() {
				callBack();
			}
		} );
		if ( !styles ) {
			$button.css( {
				'text-align': 'center',
				'margin': '5px',
				'width': 'auto',
				'display': 'inline-block',
				'clear': 'left'
			} )
		}
		return $button;
	}

	$( document ).ready( function() {
		$( 'body' ).append( "<div class='checkout-ext modal-wrapper'></div>" );
	} );

	return {

		/**
		 * @param {Object} modalOptions - options for configuring the modal
		 * title - title
		 * message - message
		 * isError - boolean that sets the message div to 'error-module'
		 * height - optional height, if not set it will default to 280px
		 * width - optional width, if not set it will default to 600px
		 * confirmCallBack - optional call back function for the confirm button, confirm button will not display if this is not set
		 * confirmText - optional text for the confirm button, text will default to 'OK' if this is not set
		 * cancelCallBack - optional call back function for the cancel button, cancel button will not display if this is not set
		 * cancelText - optional text for the cancel button, text will default to 'Cancel' if this is not set
		 * closeCallBack - optional call back function for the close button, this will default to close
		 * clickAwayCallBack - optional call back function for clicking away from the modal, this will default to the closeCallBack
		 * escapeCallBack - optional callb back function for handling escape key press, this will default to the closeCallBack
		 * @returns {Object} dialog mark-up
		 */
		modalFactory: function( modalOptions ) {
			Twc.Checkout.Modal.close();

			$overlay = $( '<div class="modal-overlay-bkg"></div>' );
			if ( typeof modalOptions.closeCallBack !== 'function' ) {
				modalOptions.closeCallBack = Twc.Checkout.Modal.close;
			}
			if ( typeof modalOptions.clickAwayCallBack !== 'function' ) {
				modalOptions.clickAwayCallBack = modalOptions.closeCallBack;
			}
			if ( typeof modalOptions.escapeCallBack !== 'function' ) {
				modalOptions.escapeCallBack = modalOptions.closeCallBack;
			}
			$overlay.on( "tap", function() {
				modalOptions.clickAwayCallBack();
			} );

			Twc.Checkout.Modal.createModalWindow( modalOptions );
			var $titleWrapper = Twc.Checkout.Modal.getTitleWrapper( modalOptions );
			var $contentWrapper = Twc.Checkout.Modal.getContentWrapper( modalOptions );
			$modalWindow.append( $titleWrapper ).append( $contentWrapper );

			Twc.Checkout.Modal.bindEscapeKey( modalOptions.escapeCallBack );

			$( 'body' ).append( $overlay );
			$( 'body' ).append( $modalWindow );
			$overlay.fadeIn( modalFadeInDuration );
			$modalWindow.fadeIn( modalFadeInDuration );
		},

		createModalWindow: function( modalOptions ) {
			$modalWindow = $( '<div class="checkout-modal modal-window"></div>' );
			// custom widths/heights should only be set for desktop. tablet and mobile should always show full width/heights. Ensure CSS uses !important
			if ( !modalOptions.width ) {
				modalOptions.width = '600px';
			}
			// get unit (px or %) and number
			var numUnit = Twc.Checkout.Util.getNumberUnit( modalOptions.width );

			var width = numUnit[ 0 ] + numUnit[ 1 ];
			var marginLeft = -( numUnit[ 0 ] / 2 ) + numUnit[ 1 ];

			$modalWindow.css( {
				'left': '50%',
				'right': 'auto',
				'width': width,
				'marginLeft': marginLeft
			} );

			if ( !modalOptions.height ) {
				modalOptions.height = errorModalHeight;
			}
			// get unit (px or %) and number
			var numUnit = Twc.Checkout.Util.getNumberUnit( modalOptions.height );

			var height = numUnit[ 0 ] + numUnit[ 1 ];
			var top = '50%';
			var marginTop = -numUnit[ 0 ] / 2 + 'px';

			// percentages handle height differently
			if ( numUnit[ 1 ] === '%' ) {
				top = ( 100 - numUnit[ 0 ] ) / 2 + '%';
				marginTop = 0;
			}
			$modalWindow.css( {
				'bottom': 'auto',
				'height': height,
				'top': top,
				'marginTop': marginTop
			} );
		},

		getTitleWrapper: function( modalOptions ) {
			var $modalTitleWrapper = $( '<div class="modal-title-wrapper"></div>' );
			var $modalTitle = $( '<div class="modal-title">' + modalOptions.title + '</div>' );
			var $closeButton = $( '<div class="modal-button-close"></div>' );
			$closeButton.on( 'tap', function() {
				modalOptions.closeCallBack();
			} );

			$modalTitleWrapper.append( $modalTitle );
			$modalTitleWrapper.append( $closeButton );

			return $modalTitleWrapper;
		},

		getContentWrapper: function( modalOptions ) {
			var $modalContentWrapper = $( '<div class="modal-content-wrapper"></div>' );
			var $modalContentOuter = $( '<div class="modal-content-outer"></div>' );
			var $modalContent = $( '<div class="modal-content"></div>' );

			var messageDiv = ( modalOptions.isError ) ? '<div class="error-module" style="margin: 0 0 20px 0; line-height: 1.5em"><div class="error-wrap">' + modalOptions.message + '</div></div>' : '<div>' + modalOptions.message + '</div>';
			var $dialogBody = $( messageDiv + '<div><div class="modal-action-wrapper" style="text-align : center" ></div></div>' );
			if ( typeof modalOptions.confirmCallBack === 'function' ) {
				$dialogBody.find( '.modal-action-wrapper' ).append( createModalButton( modalOptions.confirmText || "Ok", modalOptions.confirmCallBack ) );
			}
			if ( typeof modalOptions.cancelCallBack === 'function' ) {
				$dialogBody.find( '.modal-action-wrapper' ).append( createModalButton( modalOptions.cancelText || "Cancel", modalOptions.cancelCallBack ) );
			}
			return $modalContentWrapper.append( $modalContentOuter.append( $modalContent.append( $dialogBody ) ) );
		},

		/** Initializes group of links to handle modal functionality
		 * @author McGowan
		 * @param {Object} $o The jQuery object to iterate over.  should be a tags
		 */
		initLinks: function( $o ) {
			try {
				if ( typeof $o === 'undefined' || !( $o instanceof jQuery ) ) {
					error( '$o is not a jQuery object' );
					return;
				}
				$o.each( function( i ) {
					var $link = $( this );
					if ( $link.hasClass( initializedClass ) ) {
						error( 'Already initialized: ' + initializedClass );
						return true; // continue to next
					}

					$link.on( 'tap', function( e ) {
						Twc.Checkout.Modal.initLink( $link );
						return false;
					} );

					$link.addClass( initializedClass );
				} );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}
		},

		/**
		 * @author Armstrong
		 * Returns true if the Modal exists, is visible, and contains the specified String
		 * @param contentText a substring of the intended modal's text, to identify the intended modal
		 */
		isVisible: function( contentText ) {
			var txt = $( '.modal-content:visible' ).text();
			if ( txt.match( contentText ) ) return true;
			return false;
		},

		/**
		 * @author McGowan
		 * Opens a modal and closes all other modals to prevent duplicates. Appropriately handles late-arriving responses
		 * @param $link initialize a link to open a modal
		 */
		initLink: function( $link ) {
			try {
				var url = $.trim( $link.attr( 'href' ) );
				var title = $link.attr( 'title' ) || $link.text();
				var requestId = startModal( title, $link );
				if ( url !== '#' ) {
					showLoadingMessage();

					$.ajax( {
						'url': url,
						'success': function( data, textStatus, jqXHR ) {
							try {
								if ( requestStillValid( requestId ) ) {
									hideLoadingMessage();
									// data must have an outer-most wrapper of modalContentSelector
									var $newContent = $( '<div>' ).html( $.parseHTML( data ) ).find( modalContentSelector );
									if ( $newContent.length === 0 ) {
										Twc.Checkout.Util.showErrorMessage( new Error( 'Invalid Modal Content' ) );
									} else {
										var options = Twc.Checkout.Util.safeParseJson( $newContent.attr( 'data-options' ) );
										resizeModal( options );
										if ( $newContent.find( '.clu-channel-listing' ).length > 0 ) {
											$newContent = Twc.Checkout.MiniClu.createMiniClu( $newContent );
										}
										$contentWrapper.html( $newContent );
										$content = $contentWrapper.find( modalContentSelector );
										if ( 'undefined' !== typeof options.title ) {
											$modalWindow.find( '.modal-title' ).html( unescape( options.title ) );
										}
										if ( options.id && 'function' === typeof Twc.Checkout.Modal.callbacks[ options.id ] ) {
											Twc.Checkout.Modal.callbacks[ options.id ]( $content );
										}
										$modalWindow.fadeIn( modalFadeInDuration );
									}
								}
							} catch ( e ) {
								Twc.Checkout.Util.catchError( e );
							}
						},
						'error': function( jqXHR, textStatus, errorThrown ) {
							if ( requestStillValid( requestId ) ) {
								hideLoadingMessage();
								Twc.Checkout.Util.showErrorMessage( new Error( 'Content could not be loaded: ' + textStatus ) );
							}
						}
					} );
				}
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}
		},

		bindEscapeKey: function( escapeCallBack ) {
			// bind esc if not yet bound to close modal
			if ( !escKeyBound ) {
				$( document ).keyup( function( e ) {
					if ( e.keyCode === 27 ) {
						if ( typeof escapeCallBack === 'function' ) {
							escapeCallBack();
						} else {
							Twc.Checkout.Modal.close();
						}
					}
				} );
				escKeyBound = true;
			}
		},

		close: function() {
			// Close previous modal if exists
			if ( $modalWindow ) {
				$modalWindow.remove();
			}
			if ( $overlay ) {
				$overlay.remove();
			}
		},

		redirect: function( redirectTarget ) {
			if ( typeof redirectTarget === "string" ) {
				window.location.href = redirectTarget;
			} else if ( typeof redirectTarget === "number" ) {
				history.go( redirectTarget );
			}
			Twc.Checkout.Modal.close();
		},

		/** CALL BACK FUNCTIONS **/

		callbacks: {
			/**
			 * Test function for running when modal runs
			 * @author McGowan
			 * @param $content {Object} Modal content wrapper.  Work within this.
			 */
			_exampleModalTest: function( $content ) {

				var $msg = $( '<div>JavaScript Initialized for this modal content</div>' ).hide().css( {
					'border': '2px dashed green',
					padding: '20px',
					'color': 'green',
					'font-size': '1.5em',
					'font-weight': 'bold',
					'text-align': 'center',
					'opacity': '0'
				} );
				$content.prepend( $msg );
				$msg.slideDown( 500, function() {
					$msg.animate( {
						'opacity': 1
					} );
				} );
			},

			/**
			 * Test function for running when modal runs
			 * @author McGowan
			 * @param $content {Object} Modal content wrapper.  Work within this.
			 * @returns nothing
			 */
			compareInternetEquipment: function( $content ) {
				// remove a tags
				$content.find( 'a' ).filter( ':not(#mcg-message a)' ).contents().unwrap();

				// mark odd table rows to accomodate IE8
				$content.find( 'tr:nth-child(odd)' ).addClass( 'odd-row' );
			}
		},

		/** END CALL BACK FUNCTIONS **/

		getErrorModalHeight: function() {
			return errorModalHeight;
		}
	}
}() );

/**
 * Utility class for sitewide functions
 * @author McGowan
 * @namespace
 */
Twc = Twc || {};
Twc.Checkout = Twc.Checkout || {};
Twc.Checkout.Util = ( function() {

	function log( o ) {
		if ( console ) console.log( o );
	}

	function error( o ) {
		if ( console ) console.error( o );
	}

	function dir( o ) {
		if ( console ) console.dir( o );
	}


	var $statusBubbleMask = $( '<div class="status-bubble-mask"></div>' );
	var $statusBubbleWrapper = $( '<div class="status-bubble-wrapper"><div class="status-bubble"></div></div>' );


	// these are set by application
	var inAuthorMode = 0;
	var inIframeMode = 0;

	return {
		/** performs a synchronous URL fetch
		 * @author McGowan
		 * @param {String} url url to fetch from
		 * @param {String} [dataType] xml,json,script,html (values in compliance with jQuery $.ajax())
		 * @param {Object} [options] will add certain values in compliance with jQuery $.ajax())
		 * @returns contens of URL with data type inferred by MIME type response
		 */
		getUrl: function( url, dataType, options ) {
			var options = options || {};
			var ajaxParams = {
				async: false, // should be required to return data
				url: url,
				dataType: dataType, // use undefined if not provided in funciton

				success: function( data, textStatus, jqXHR ) {
					returnData = data;
				},
				error: function( jqXHR, textStatus, e ) {
					Twc.Checkout.Util.catchError( e );
				}
			}

			// add any ajax options passed into function
			if ( undefined !== typeof options.params ) {
				ajaxParams.data = options.params;
			}


			try {
				var returnData = null;
				$.ajax( ajaxParams );
				return returnData;
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e )
			}
		},

		safeParseJson: function( s ) {
			try {
				return ( 'undefined' !== typeof( s ) ) ? $.parseJSON( s ) : {};
			} catch ( e ) {
				return {};
			}
		},

		/** Closes all open interactive elements (tooltips, top questions, etc.). Should be bound on $(document).click()
		 * @param {Event} [e] event of item clicked
		 * @author McGowan
		 */
		closeOpenInteractives: function( e ) {
			var $target = ( 'undefined' !== typeof e && 'undefined' !== typeof e.target ) ? $( e.currentTarget ) : $( '<div>' );

			// always close tooltips
			Twc.Checkout.Tooltip.closeAll();

			// conditionally close based on what was clicked
			if ( !$target.hasClass( 'js-top-questions' ) )
				Twc.Components.TopQuestions.close();
			if ( !$target.hasClass( 'js-cart-button' ) )
				Twc.Checkout.ShoppingCart.close();
		},

		enableInput: function() {
			$( '.blue-button.disabled' ).each( function() {
				if ( $( this ).hasClass( 'enableOnJSLoad' ) ) {
					$( this ).removeClass( 'disabled' );
				}
			} );
		},

		initPage: function() {
			Twc.Checkout.Util.enableInput();
			Twc.PageInit[ 'global' ]();
			var bodyId = Twc.Checkout.Util.getCurrentPageId();

			var pageSpecificInit = Twc.PageInit[ bodyId ];
			if ( 'function' === typeof( pageSpecificInit ) ) {
				pageSpecificInit();
			} else {
				warn( 'Util.initPage(): no PageInit defined for: ' + bodyId );
			}

			Twc.Analytics.dispatch( bodyId );
			Twc.Checkout.CSSCall.dispatch( bodyId );
		},

		/** Returns current body ID to determine current page in flow
		 * @author Scerri
		 * @returns {String} the body ID value
		 */
		getCurrentPageId: function() {
			return $( 'body' ).attr( 'id' );
		},

		/** Returns parsed urlParams.  Does not currently support multiple params with same name and different values :(
		 * @author McGowan
		 * @returns {Object} Case-Sensitive object map with parameter value strings.  Only currently supports one value per parameter name.  Empty string returned
		 * for parameters that have no value.
		 */
		getUrlParams: function() {
			var params = {};
			var queryString = location.search.substring( 1 );
			var regEx = /([^&=]+)(=([^&]*))*/g; // also match empty values
			var paramCombo = null;

			while ( paramCombo = regEx.exec( queryString ) ) {
				var value = ( 'undefined' !== typeof paramCombo[ 3 ] ) ? decodeURIComponent( paramCombo[ 3 ] ) : ''; // use empty string if no value
				var key = decodeURIComponent( paramCombo[ 1 ] );
				params[ key ] = value;
			}
			return params;
		},

		/** Doest not work on multiple class names! adds classname to the jQuery object if it doesn't already exist.  This method shows huge performance improverments.
		 * @author McGowan
		 * @param $o {Object} jQuery object to add class to
		 * @param $className {String} class name to add.  Should only contain one class
		 */
		addClass: function( $o, className ) {
			if ( !$o.hasClass( className ) ) {
				$o.addClass( className );
			}
		},

		/** Doest not work on multiple class names! removes classname to the jQuery object if it doesn't already exist.  This method shows huge performance improverments.
		 * @author McGowan
		 * @param $o {Object} jQuery object to remove class from
		 * @param $className {String} class name to remove.  Should only contain one class
		 */
		removeClass: function( $o, className ) {
			if ( $o.hasClass( className ) ) {
				$o.removeClass( className );
			}
		},


		/** Used to catch errors and debug some useful info.  All try/catch blocks should utilize this feature
		 * @author McGowan
		 * @param {Error} e
		 */
		catchError: function( e ) {
			try {
				Twc.Checkout.Loading.hide();
			} catch ( e ) {}

			if ( console && console.group ) { // IE doesn't have console
				console.group( e.name + ': ' + e.message );
			}
			error( e );
			error( e.stack );
			if ( console && console.group ) {
				console.groupEnd();
			}
		},

		/**
		 * @author McGowan
		 * @param dateInt {Object} YYYYMMDD to create date from
		 * @returns new Date or undefined
		 */
		getDate: function( dateInt ) {
			try {
				var s = new String( dateInt ); // convert from integer to String just in case
				// convert "YYYYMMDD" to "MM/DD/YYYY"
				var dateString = s.substring( 4, 6 ) + '/' + s.substring( 6, 8 ) + '/' + s.substring( 0, 4 );
				var date = new Date( dateString );
				if ( 'undefined' === typeof( date ) || isNaN( date.getTime() ) )
					throw "Invalid Date from " + dateString;
				else {
					return date;
				}
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
				return undefined;
			}
		},

		/**
		 * @author McGowan
		 * @param {Date} date to convert into integer
		 * @returns -1 on error or integer of date as YYYYMMDD
		 */
		getDateInt: function( date ) {
			if ( typeof date === 'undefined' || !( date instanceof Date ) )
				return -1;

			return date.getFullYear() * 10000 + ( date.getMonth() + 1 ) * 100 + date.getDate();

		},

		/** @param {String} time "HH:MM"
		 * @returns time formatted like 9am or 9:30am with minutes or 1pm. Returns empty string on error
		 */
		getTimeString: function( time ) {
			try {
				var ary = time.split( ':' );
				var hr = parseInt( ary[ 0 ], 10 );
				var min = parseInt( ary[ 1 ], 10 );

				if ( isNaN( hr ) )
					hr = '??';
				if ( isNaN( min ) )
					min = '??';

				var am = hr >= 12 ? 'pm' : 'am';
				hr = hr > 12 ? hr - 12 : hr;
				min = min === 0 ? '' : ':' + min; // don't show minutes if zero

				return hr + min + am;
			} catch ( e ) {
				return ''
			}
		},

		/**
		 * @param {String} startTime 24-hour time like 08:00
		 * @param {String} endTime 24-hour time like 08:00
		 * @returns String formatted like "8pm to 9pm" or "8:30am to 9pm". doesn't show minutes if zero
		 * @author McGowan
		 */
		getTimeRangeString: function( startTime, endTime ) {
			var start = Twc.Checkout.Util.getTimeString( startTime );
			var end = Twc.Checkout.Util.getTimeString( endTime );
			if ( start === '' || end === '' )
				return start + end; // one will show alone
			else
				return start + ' to ' + end;
		},

		/**
		 * @author McGowan
		 * @param {Object} date
		 * returns M/D/YYYY or empty dtring
		 */
		getDateString: function( date ) {
			try {
				return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
				return '';
			}
		},

		/**
		 * @author McGowan
		 * @param {Date} date to convert into string
		 * @returns '' on error or ISO date string as: YYYY-MM-DD
		 */
		getDateStringISO: function( date ) {
			if ( typeof date === 'undefined' || !( date instanceof Date ) )
				return '';

			var mm = date.getMonth() + 1;
			var dd = date.getDate();

			if ( mm < 10 ) mm = '0' + mm;
			if ( dd < 10 ) dd = '0' + dd;

			return date.getFullYear() + '-' + mm + '-' + dd;
		},

		showErrorMessage: function( e ) {
			var modalOptions = {
				message: Twc.Settings.messages.systemError,
				title: 'System Error',
				isError: true,
				height: Twc.Checkout.Modal.getErrorModalHeight(),
				confirmCallBack: function() {
					Twc.Checkout.Modal.close();
					return false;
				},
				closeCallBack: function() {
					Twc.Checkout.Modal.close();
					return false;
				}
			}
			Twc.Checkout.Loading.hide();
			Twc.Checkout.Modal.close();
			Twc.Checkout.Modal.modalFactory( modalOptions );
		},

		/**
		 * @author McGowan
		 * @param value {String} 40px or 100% string with a numerical value and a non-numerical unit
		 * @returns Array [numberValue, unit] i.e. 40px returns [40, 'px']. returns [-1, ''] on error
		 */
		getNumberUnit: function( value ) {
			var s = $.trim( value );
			var val = parseInt( s, 10 );
			var unit = s.match( /[^0-9^ ]+/g ).join( '' ); // get all non numbers and non spaces and combine
			return [ val, unit ];
		},

		/** Call this while in CQ Author mode to disable certain features that should be supressed while in Author mode
		 * @author McGowan
		 */
		invokeAuthorMode: function() {
			log( 'Twc.Checkout.Util.invokeAuthorMode()' );
			inAuthorMode = true;
			Twc.Settings.sessionTimeoutEnabled = 0;
			Twc.Checkout.Session.disableTimeoutFeatures();
		},

		/** iFrames should call this to disable certain features on iFrame pages
		 * @author McGowan
		 */
		invokeIframeMode: function() {
			log( 'Twc.Checkout.Util.invokeIframeMode()' );
			inIframeMode = true;
			Twc.Settings.sessionTimeoutEnabled = 0;
			Twc.Checkout.Session.disableTimeoutFeatures();
		},

		authorModeInvoked: function() {
			return inAuthorMode;
		},

		iframeModeInvoked: function() {
			return inIframeMode;
		},

		/**
		 * @returns meeta value of session or empty string
		 * @deprecated Use Twc.Settings.sessionId
		 * @author McGowan
		 */
		getSessionId: function() {
			return Twc.Settings.sessionId;
		},


		/** Scrolls page to a div if that div is above the top page fold.
		 * @param $div Div to scroll to
		 * @author McGowan
		 */
		scrollToInvisibleDiv: function( $div ) {
			var divTop = $div.offset().top;
			var scrollTop = $( window ).scrollTop();

			if ( scrollTop > divTop ) {
				scrollTop = divTop - Twc.Settings.errorListScrollTopPadding;
				$( 'html, body' ).animate( {
					'scrollTop': scrollTop
				}, Twc.Settings.errorListScrollToDuration, 'linear' );
			}
		},


		/** Shows or hides inline errors, based on whether heading and errors are provided
		 * @param $errorDiv jQuery error wrapper
		 * @param [errorList] Array of errors to show in list
		 * @author McGowan
		 */
		showHideInlineErrorList: function( $errorDiv, errorList ) {
			var totalErrors = ( 'undefined' !== typeof( errorList ) ) ? errorList.length : 0;
			if ( totalErrors > 0 ) { // show
				// add ul and error if not already there
				if ( $errorDiv.find( '.error-wrap' ).length === 0 ) {
					$errorDiv.append( '<div class="error-wrap"></div>' );
				}
				var $wrap = $errorDiv.find( '.error-wrap' );

				if ( $wrap.find( 'ul' ).length === 0 ) {
					$wrap.append( '<ul>' );
				}

				// empty error list and populate it
				var $errorDivList = $wrap.find( 'ul' ).empty();
				for ( var i = 0; i < errorList.length; i++ ) {
					$errorDivList.append( '<li>' + errorList[ i ] + '</li>' );
				}

				if ( $errorDiv.is( ':visible' ) ) {
					Twc.Checkout.Util.scrollToInvisibleDiv( $errorDiv );
					$errorDivList.removeClass( 'invisible' ).hide().fadeIn();
					$errorDiv.stop().animate( {
						'max-height': '100%',
						'height': 'auto'
					}, {
						complete: function() {
							$errorDivList.removeClass( 'invisible' );
						}
					} );
				} else { // errors not yet shown
					$errorDivList.removeClass( 'invisible' ).show();

					// reset height to avoid jitter
					$errorDiv.hide().removeClass( 'hidden' ).css( 'height', '' ).slideDown( function() {
						$( this ).css( {
							'max-height': '100%'
						} );
					} );
					Twc.Checkout.Util.scrollToInvisibleDiv( $errorDiv );
				}
			} else { // hide
				$errorDiv.slideUp();
			}
		},

		/** Process an ajax response and handles valid/invalid sessions or other filtering activities
		 * @returns nothing
		 * @author McGowan
		 * @param jqXHR jQuery Ajax Request object
		 */
		processAjaxResponse: function( jqXHR ) {
			var statusCode = jqXHR.status;
			if ( statusCode == 200 && ( typeof isCIC == 'undefined' ) ) {
				var cartActionType = '';
				Twc.Checkout.Session.resetTimeoutWarning( cartActionType );
			} else if ( statusCode == 415 ) {
				error( 'AJAX response indicates invalid session.' );
				Twc.Checkout.Util.deleteSessionCookies();
				var data = Twc.Checkout.Util.safeParseJson( jqXHR.responseText );
				var redirectUrl = data.redirectUrl || '';
				if ( redirectUrl === '' ) {
					error( 'redirectUrl not found in response JSON' );
					alert( 'Your session has expired.  Please refresh this page.' );
				} else {
					Twc.Checkout.Session.expireSession( redirectUrl );
				}
			}
		},

		/** Shows a status bubble message on the screen or updates message/options if already shown
		 * @returns Class name used for the elements inserted.  Is Random js-status-bubble-40234098sdf789x
		 * @param $container Element to insert into.  <body> for the page or provide a more specific element
		 * @param messageHTML Message to display
		 * @param [options] {Object} options to pass for positioning or colors
		 * @author McGowan
		 */
		showStatusBubble: function( $container, messageHTML, options ) {
			var options = options || {};
			var rndClass = 'js-status-bubble-' + Twc.Checkout.Util.getRandomString();

			var $mask = $container.find( '.status-bubble-mask' );
			var $wrapper = $container.find( '.status-bubble-wrapper' );

			if ( $mask.length === 0 ) {
				$mask = $statusBubbleMask.clone().hide().addClass( rndClass );
				$container.append( $mask );
			}
			if ( $wrapper.length === 0 ) {
				$wrapper = $statusBubbleWrapper.clone().hide().addClass( rndClass );
				$container.append( $wrapper );
			}

			$wrapper.find( '.status-bubble' ).html( messageHTML );


			if ( options.cssClass ) {
				$mask.addClass( options.cssClass );
				$wrapper.addClass( options.cssClass );
			}

			if ( options.verticallyCenter ) {
				var topPosOffset = $wrapper.outerHeight( true ) / 2;
				$wrapper.css( 'top', '50%' );
				$wrapper.css( 'margin-top', ( -topPosOffset ) + 'px' );
			} else if ( options.verticallyCenterOn ) {
				var topPosOffset = $wrapper.outerHeight( true ) / 2;
				$wrapper.css( 'top', options.verticallyCenterOn - topPosOffset );
			}

			$mask.show();
			$wrapper.show();

			return rndClass;
		},

		/** Removes status bubble if shown
		 * @param $container Element to remove from.  <body> for the page or provide a more specific element
		 * @author McGowan
		 */
		removeStatusBubble: function( $container ) {
			$container.find( '.status-bubble-mask, .status-bubble-wrapper' ).remove();
		},

		showPageLoadingBubble: function() {
			Twc.Checkout.Util.showStatusBubble( $( 'body' ), 'Loading...', {
				'cssClass': 'status-bubble-page-loading',
				'verticallyCenter': true
			} );
		},

		removePageLoadingBubble: function() {
			$( '.status-bubble-page-loading' ).remove();
		},

		/** @returns random string of numbers
		 * @author McGowan
		 */
		getRandomString: function() {
			return ( Math.random().toString().substr( 2 ) );
		},

		/** Removes any session cookies when users logout or session expires.
		 * @author McGowan
		 */
		deleteSessionCookies: function() {
			log( 'Twc.Checkout.Util.deleteSessionCookies()' );
			var topLeveldomain = document.location.hostname.match( /\w+\.\w+$/ );
			topLeveldomain = ( topLeveldomain != null ) ? topLeveldomain[ 0 ] : '';
			$.removeCookie( 'Wayfarer', {
				'path': '/',
				'domain': topLeveldomain
			} );
		},

		/** @returns A string respresentation of an LOB object
		 * @author Dawson
		 */
		getLOBString: function( LOBObject ) {
			var lobNames = [];
			var retVal = "Installation: ";

			if ( LOBObject.digitalCable ) {
				lobNames.push( "TV" );
			}
			if ( LOBObject.highSpeedData ) {
				lobNames.push( "Internet" );
			}
			if ( LOBObject.voip ) {
				lobNames.push( "Phone" );
			}

			if ( lobNames.length < 3 ) {
				retVal = retVal + lobNames.join( " & " ) + " Service";
			} else {
				retVal = retVal + lobNames[ 0 ] + " , " + lobNames[ 1 ] + " , & " + lobNames[ 2 ] + " Service";
			}

			if ( lobNames.length > 1 ) {
				retVal = retVal + "s";
			}

			return retVal;
		},

		/** @returns length of the array or 0 if array is undefined
		 * @author athomas
		 */
		getArrayLength: function( array ) {
			if ( typeof array === 'undefined' ) {
				return 0;
			}
			return array.length;
		},

		stripScriptTags: function( text ) {
			var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
			while ( scriptRegex.test( text ) ) {
				text = text.replace( scriptRegex, "" );
			}
			return text;
		},

		/** Passes callback function true or false, based on whether the customize page of the LOB
		 * specified is the first offer in the flow
		 * @returns value of callback return
		 * @param lob Line of Business to check against
		 * @param callback callback function to use the true/false test result
		 * @author athomas
		 */
		isFirstOffer: function( lob, callback ) {
			if ( typeof callback !== 'function' ) {
				return false;
			}

			return Twc.Checkout.ShoppingCart.fetchCondensedCartData( function( cartSummary ) {
				//pages are always processed in the order TV -> Internet -> Phone
				//if the shopping cart has TV lob, then the Internet and Phone have to be after it, so it's not the first
				if ( typeof cartSummary !== 'undefined' && typeof cartSummary[ 'currentLOB' ] !== 'undefined' ) {
					if ( cartSummary[ 'currentLOB' ].indexOf( 'TV' ) != -1 && ( lob === 'Internet' || lob === 'Phone' ) ) {
						return callback( false );
					}
					//if the shopping cart has Internet, then Phone can't have been the first
					if ( cartSummary[ 'currentLOB' ].indexOf( 'Internet' ) != -1 && lob === 'Phone' ) {
						return callback( false );
					}
				}
				//Since this is the first LOB, then check to see if a mainItem has been added. If not, customize page is the first offer
				for ( var i = 0; i < cartSummary[ 'products' ].length; i++ ) {
					var product = cartSummary[ 'products' ][ i ];
					//if this is just equipment upgrade, then there will be no mainItem
					if ( product[ 'lineOfBusiness' ] === lob && typeof product.mainItem === 'undefined' ) {
						return callback( true );
					}
				}
				return callback( false );
			} );
		},

		isValidSelector: function( selector ) {
			try {
				var $element = $( selector );
			} catch ( error ) {
				return false;
			}
			return true;
		},

		isIE8OrLower: function() {
			//modified property version to fullVersion for browser based on jquery.mbBrowser plugin - jquery upgrade
			if ( $.browser.msie && $.browser.fullVersion <= 8 ) {
				return true;
			}
			return false;
		},

		getDomainForCookie: function( url ) {
			var tempAnchor = document.createElement( "a" );
			tempAnchor.href = url;
			return "." + tempAnchor.hostname.match( /\w+\.\w+$/ )[ 0 ];
		},

		invokeClearCartDialog: function( actionType ) {
			//TODO actionTYpe is used to distinguish between "old" checkout and new responsive "FED" checkout
			//Remove the else portion when all of checkout is FED
			if ( actionType == "fed" ) {
				$( '.clear-cart .clear-cart-modal' ).find( '.modal' ).trigger( "showModal" );
			} else {
				var redirect = 0,
					referrer = document.referrer;

				if ( referrer.search( "qsoLanding" ) >= 0 || referrer.search( 'unqualifiedLanding' ) >= 0 )
					redirect = -1;

				var modalOptions = {
					message: Twc.Settings.messages.clearCartMessage,
					title: Twc.Settings.messages.clearCartTitle,
					isError: true,
					height: Twc.Settings.errorModalAltHeight,
					confirmText: Twc.Settings.messages.clearCartConfirm,
					cancelText: Twc.Settings.messages.clearCartCancel,
					confirmCallBack: function() {
						Twc.Checkout.ShoppingCart.deleteCartContents();
						Twc.Checkout.Modal.redirect( redirect );
					},
					cancelCallBack: function() {
						( redirect == 0 ) ?
						Twc.Checkout.Modal.redirect( 1 ):
							Twc.Checkout.Modal.redirect( redirect );

					},
					closeCallBack: function() {
						this.cancelCallBack();
					}
				};
				Twc.Checkout.Modal.modalFactory( modalOptions );
			}
		},

		/**
		 * Method to log any message from front end JS to CQ error.log
		 * @param message to be logged
		 * @param level at which the message is logged (debug, info)
		 * @param callBackOnDone to executed after ajax' .done
		 */
		logToCq: function( message, level, callBackOnDone ) {

			var failureMessage = function( message, textStatus, errorThrown ) {
				textStatus = textStatus || "";
				errorThrown = errorThrown || "";
				return "Twc.Checkout.Util.logToCq() failed to log [" + message + "] to error.log. " + textStatus + " . " + errorThrown;
			};

			if ( message ) {
				$.ajax( {
						url: Twc.Settings.ajaxUrls.Logger,
						type: 'post',
						data: {
							"log": message,
							"level": level
						}
					} )
					.done( function( data ) {
						if ( data !== null && data.result === "success" ) {
							log( "Twc.Checkout.Util.logToCq() logged [" + message + "] to error.log" );
							if ( callBackOnDone && typeof( callBackOnDone ) === "function" ) {
								callBackOnDone();
							}
						} else {
							error( failureMessage( message ) );
						}
					} )
					.fail( function( request, textStatus, errorThrown ) {
						error( failureMessage( message, textStatus, errorThrown ) );
					} );
			} else {
				warn( "Twc.Checkout.Util.logToCq() cannot log an empty or null message : [" + message + "] to error.log" );
			}
		},

		/**
		 * Method used to get current time using either the window.performance API or new Date().getTime()
		 * if window.performance is not implemented in older browsers like IE8 and IE9
		 * @returns {*}
		 */
		getCurrentTime: function() {
			window.performance = window.performance || {};
			performance.now = ( function() {
				return performance.now ||
					performance.mozNow ||
					performance.msNow ||
					performance.oNow ||
					performance.webkitNow ||
					function() {
						return new Date().getTime();
					};
			} )();
			return performance.now();
		},

		/**
		 * Parses the userAgent string and retrieves the user's browser and version.
		 * Currently compatible with IE (versions 2 through 11), Firefox, Chrome, Safari, Android (as a browser), and iOS (as a browser).
		 */
		getBrowserAndVersion: function( userAgent ) {
			return /Firefox[\/\s](\d+\.\d+)([\.a]\d+)?/.test( userAgent ) ? {
					name: "FF",
					ver: RegExp.$1
				} :
				/(Opera|OPR)[\/\s](\d+\.\d+)/.test( userAgent ) ? {
					name: "Opera",
					ver: RegExp.$2
				} :
				/AOL[\/\s](\d+\.\d+)([\.a]\d+)?/.test( userAgent ) ? {
					name: "AOL",
					ver: RegExp.$1
				} :
				/(Chrome|CriOS)[\/\s](\d+\.\d+)/.test( userAgent ) ? {
					name: "Chrome",
					ver: RegExp.$2
				} :
				/Android\s(\d+\.\d+)(\.(\d+))?/i.test( userAgent ) ? {
					name: "Android",
					ver: RegExp.$1
				} :
				/Trident\/.*; rv:(\d+\.\d+)/.test( userAgent ) ? {
					name: "IE",
					ver: RegExp.$1
				} : //IE11
				/(?:(compatible;.*)?Trident\/7.0)/ig.test( userAgent ) ? {
					name: "IE",
					ver: RegExp.$1
				} :
				/MSIE (\d+\.\d+);/.test( userAgent ) ? {
					name: "IE",
					ver: RegExp.$1
				} :
				/Safari/.test( userAgent ) && /Version[\/\s](\d+\.\d+)((\.|dp)\d+)?/.test( userAgent ) ? {
					name: "Safari",
					ver: RegExp.$1
				} :
				/ip(hone|od|ad)/i.test( userAgent ) && /Version[\/\s](\d+\.\d+)(\.\d+)?/.test( userAgent ) ? {
					name: "iOS",
					ver: RegExp.$1
				} :
				/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test( navigator.userAgent ) ? {
					name: "UIWebView",
					ver: "0"
				} : {
					name: "unknown",
					ver: "0"
				};
		},

		isPageOnIOSDevice: function() {
			return navigator.userAgent.match( /iPhone|iPad|iPod/i );
		},

		isPageOnAndroidDevice: function() {
			return navigator.userAgent.match( /Android/i );
		},

		isPageOnWindowsDevice: function() {
			return navigator.userAgent.match( /IEMobile/i );
		},

		gtmPath: function( pathname ) {
			pathname = pathname || window.location.pathname
			return pathname.replace( /^\//, "" ).replace( /^.*(en|es)\//, "" ).replace( /.html$/, "" ).replace( /\//g, " > " )
		},
		closeMobileKeyboard: function( safeElement ) {
			if ( TWC.Util.isPageOnDevice() ) {
				document.activeElement.blur();
				safeElement.blur();
			}
		}
	}
}() );

/**
 *  Manages functionality for rendering miniCLU
 * @author AThomas
 * @namespace
 */
Twc.Checkout = Twc.Checkout || {};
Twc.Checkout.MiniClu = ( function() {
	function buildModal( titles, descriptions, channels, bottomMessages ) {
		var $modalContent = $( '<div class="miniCLUTVPlans"></div>' );
		var $modalTitle = buildModalTitles( titles );
		$modalContent.append( $modalTitle )

		var $modalTabContent = $( '<div class="tabcontents"></div><!-- end tabcontents-->' );
		for ( var i = 0; i < titles.length; i++ ) {
			$( '<div class="minitabcontent"></div>' ).appendTo( $modalTabContent ).append( buildModalTabContents( descriptions[ i ], channels[ i ] ) );
		}
		$modalContent.append( $modalTabContent );

		for ( var i = 0; i < bottomMessages.length; i++ ) {
			$( '<div class="miniBottomMessage"></div>' ).appendTo( $modalContent ).append( bottomMessages[ i ] );
		}
		$modalContent.find( '.miniBottomMessage:first' ).show();
		return $modalContent;
	}

	function buildModalTitles( titles ) {
		var $modalTitles = $( '<ul class="tabs" persist="true"></ul>' );
		for ( var i = 0; i < titles.length; i++ ) {
			$modalTitles.append( '<li onclick="Twc.Checkout.MiniClu.showChannelTab(this); return false;"' + ( ( i == 0 ) ? ' class="selected"' : '' ) + '><a href="#">' + titles[ i ] + '</a></li>' );
		}
		return $modalTitles;
	}

	function buildModalTabContents( $description, $channels ) {
		var $modalTabContent = $( '<div class="minitabcontent"><!-- end content --></div>' );
		return $( '<div class="content"></div>' ).appendTo( $modalTabContent ).append( $description ).append( $channels );
	}

	/* @channels html table containing the miniClu channels
	 *
	 */
	function buildModalChannels( $channels ) {
		var $newTables = $( '<div class="content"></div>' );
		for ( var i = 0; i < 3; i++ ) {
			$newTables.append( '<table></table>' );
		}
		var $tables = $newTables.find( 'table' );
		$channels.find( 'td' ).each( function( index, element ) {
			var i = index % 3;
			$tables.eq( i ).append( '<tr><td>' + $( this ).text() + '</td></tr>' ); //allows us to ignore attributes set in the table rte
		} );
		return $newTables;
	}

	return {
		/* @pos 0-n array index number of content to show
		 *
		 */
		showChannelTab: function( element ) {
			$( '.miniCLUTVPlans li' ).removeClass( 'selected' );
			var pos = $( '.miniCLUTVPlans li' ).index( element );
			$( element ).addClass( 'selected' );
			$( $( '.minitabcontent' ).hide()[ pos ] ).show();
			$( $( '.miniBottomMessage' ).hide()[ pos ] ).show();
		},

		/* @$content jQuery object containing .clu-channel-listing components to transform into a miniCLU
		 *
		 */
		createMiniClu: function( $content ) {
			var titles = [];
			var descriptions = [];
			var channels = [];
			var bottomMessages = [];
			var $cluTabs = $content.find( '.clu-channel-listing' );
			$cluTabs.each( function( i ) {
				var $this = $( this );
				titles[ i ] = $this.find( '.miniCLUTitle' ).text();
				descriptions[ i ] = $this.find( '.miniCLUDesc' );
				channels[ i ] = buildModalChannels( $this.find( '.miniCLUTable' ) );
				bottomMessages[ i ] = $this.find( '.miniCLUMessage' );
			} );
			var $modal = buildModal( titles, descriptions, channels, bottomMessages );
			$cluTabs.parent().append( $modal );
			$cluTabs.remove();
			return $content;
		}
	}
}() );
/**
 * @author McGowan
 * @namespace Components Contains all of the component/module initialization routines, similar to Plug-Ins
 */
Twc.Components = {};
/**
 * Manages functionality for expandable/collapsable row sections
 * @author McGowan
 * @namespace RowExpander
 */
Twc.Components.RowExpander = ( function() {
	/**
	 * marker to indicate container was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-expander-initialized';


	/** Iterates through $rows and closes them all.
	 * @author McGowan
	 * @param $rows {Object} jQuery rows to close
	 */
	function closeRows( $rows ) {
		$rows.each( function( i ) {
			var $row = $( this );
			var $section = $row.find( '> section' ).stop( true, true );
			var $content = $section.find( 'div' ).filter( ':first' ).stop( true, true );
			$content.animate( {
				'opacity': 0
			}, 0, function() {
				// sliding up/down changes page and container height, so re-evaluate the floating cart
				clearTextSelection();
				$section.slideUp( {
					'duration': Twc.Settings.accordianSlideDuration,
					'easing': Twc.Settings.accordianSlideEasing,
					'step': Twc.Checkout.ShoppingCart.evalPosition,
					'complete': function() {
						$row.removeClass( 'active' );
					}
				} );
			} );

		} );
	}

	function closeOpenRows( $rows ) {
		closeRows( $rows.filter( '.active' ) );
	}

	// removes text selected during double-click of expand/collapse
	function clearTextSelection() {
		var sel = window.getSelection ? window.getSelection() : document.selection;
		if ( sel ) {
			if ( sel.removeAllRanges ) {
				sel.removeAllRanges();
			} else if ( sel.empty ) {
				sel.empty();
			}
		}
	}

	return {
		/** initializes a group of rows for expand/collapse.  Prevents double initalization.
		 * @author McGowan
		 * @param $rows {Object} jQuery object to iterate over, instantiating each row to show/hide the content within it
		 * @param [restrictOneRowOpen] {Boolean} only allow 1 row in $rows to be open at the same time.  Don't allow it to be closed
		 * @param isMiniCart {Boolean} boolean value to identify if this is the minicart being expanded
		 */
		initRows: function( $rows, restrictOneRowOpen, isMiniCart ) {
			try {
				if ( typeof $rows === 'undefined' || !( $rows instanceof jQuery ) ) {
					error( '$rows is not a jQuery object' );
					return;
				}

				$rows.each( function( i ) {
					var $row = $( this );
					if ( $row.hasClass( initializedClass ) ) {
						error( 'Row already initialized: ' + initializedClass );
						return true; // continue to next
					}

					// buttons with .aditional-form wrapper should allow click through to expand section.
					// clicking buttons should not expand/collapse row
					var $buttons = $row.find( '.blue-button' ).on( 'tap', function( e ) {
						$me = $( this );
						if ( !$row.hasClass( 'additional-form' ) ) {
							e.stopPropagation();
						}
					} );

					// open/close sections on click.  stop previous animations
					$row.find( '> header' ).each( function( i ) {
						var $header = $( this );
						var $section = $row.find( '> section' ).stop( true, true );
						var $content = $section.find( 'div' ).filter( ':first' ).stop( true, true );
						var $radio = $header.find( 'input[type=radio]' );
						var eventType = 'tap';


						// don't allow header links to go anywhere
						$header.find( 'a:not(.blue-button)' ).on( 'tap', function( e ) {
							e.preventDefault();
						} );

						//This if statement is used to fix some issues with the tap library. This allows rows from expanding when a radio/checkbox is clicked
						//in the same row but not when it's surrounded by a select blue button.
						if ( ( $header.find( 'input[type=checkbox]' ).length > 0 || $radio.length > 0 ) && $header.find( '.blue-button' ).length === 0 ) {
							eventType = 'click';
						}

						$header.on( eventType, function( e ) {
							// double events occur of a label is clicked and an input is within.  Disallow this
							if ( e.target.tagName !== 'INPUT' && ( e.target.tagName === 'LABEL' || $( e.target ).parents( 'label' ).length > 0 ) ) {
								return;
							}

							// don't allow interactivity if disabled
							if ( $row.hasClass( 'disabled' ) ) {
								return;
							}


							if ( $row.hasClass( 'active' ) ) { // close it
								// only close this if it doesn't have a radio that isn't a button
								if ( $radio.length === 0 || $radio.parents( 'label' ).hasClass( 'js-inputButton-initialized' ) ) {
									closeRows( $row );
								}
							} else { // open it
								if ( restrictOneRowOpen ) {
									closeOpenRows( $rows );
								}

								$content.css( {
									opacity: 0
								} );
								$section.hide();
								$row.addClass( "active" );

								// sliding up/down changes page and container height, so re-evaluate the floating cart
								clearTextSelection();
								$section.slideDown( {
									'duration': Twc.Settings.accordianSlideDuration,
									'easing': Twc.Settings.accordianSlideEasing,
									'step': Twc.Checkout.ShoppingCart.evalPosition,
									'complete': function() {
										$content.animate( {
											opacity: 1
										}, Twc.Settings.accordianFadeDuration, Twc.Settings.accordianFadeEasing );
										if ( !isMiniCart ) {
											Twc.Analytics.dispatch( 'rowExpanderOpened', i, $row );
										}
									}
								} );
							}
						} );
					} );
					$row.addClass( initializedClass );
				} );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}

		}
	}
} )();

/**
 * Top Questions that appear in the page header
 * @author McGowan
 * @namespace
 */
Twc.Components.TopQuestions = ( function() {
	/** 
	 * marker to indicate container was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-top-questions-initialized';

	var activeClass = 'active';

	var $questionsWrapper = null;


	return {
		/** initializes a container that contains tab rows and tabbed contentPrevents double initalization.  Assumes
		 * this is a responsive design that also handles expand/collapse sections within.
		 * @author McGowan
		 */
		init: function() {
			try {

				// initialize top Questions clicking. return false for all clickable items to prevent URL anchor
				$questionsWrapper = $( '.js-top-questions' );

				if ( $questionsWrapper.length === 0 ) {
					return;
				}
				if ( $questionsWrapper.hasClass( initializedClass ) ) {
					error( 'Already initialized: ' + initializedClass );
					return;
				}

				var $questionsList = $questionsWrapper.find( '.question-list' );
				var $questions = $questionsList.find( '.addflyout' );
				var $answers = $questionsList.find( '.flyout' );
				var $answerCloseButtons = $questionsList.find( '.flyout a.close' );

				// original height of questions
				var questionsH;

				$questionsWrapper.click( function( e ) {
					Twc.Checkout.Util.closeOpenInteractives( e );
					var $me = $( this );
					$questionsList.css( 'height', '' );
					$me.toggleClass( activeClass );
					$answers.removeClass( activeClass ).css( {
						left: 'auto'
					} );
					e.stopPropagation(); // prevent document.click() callback
				} );
				$questions.each( function( i ) {
					var $q = $( this );
					$q.click( function( e ) {
						questionsH = $questionsList.height();
						$answers.stop( true, true );
						var $answer = $( this ).parent().children( '.flyout' ).css( {
							left: '100%'
						} );
						var $answerContentWrap = $answer.find( '.flyout-wrap' );
						$answer.addClass( activeClass );
						var answerH = $answerContentWrap.outerHeight( true );

						$answer.animate( {
							left: '0'
						}, Twc.Settings.topQuestionsSlideDuration );

						// animate height to match answer's height
						if ( answerH > questionsH ) {
							$questionsList.stop().animate( {
								'height': answerH + 'px'
							}, Twc.Settings.topQuestionsSlideDuration );
						}

						e.stopPropagation(); // prevent questions wrapper callback
						Twc.Analytics.dispatch( 'topQuestionsClick', i, $q );
						return false;
					} );
				} );
				$answers.click( function( e ) {
					e.stopPropagation(); // prevent click through callbacks					
				} );
				$answerCloseButtons.click( function( e ) {
					$questionsList.stop().animate( {
						'height': questionsH + 'px'
					}, Twc.Settings.topQuestionsSlideDuration, function() {
						$( this ).css( 'height', '' );
					} );
					$answers.filter( '.active' ).animate( {
						left: '100%'
					}, Twc.Settings.topQuestionsSlideDuration, function() {
						$( this ).removeClass( activeClass );
					} );
					e.stopPropagation(); // prevent click through callbacks					
					return false;
				} );


				$questionsWrapper.addClass( initializedClass );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}
		},

		/** Closes top questions.
		 * @author McGowan
		 */
		close: function() {
			try {
				if ( $questionsWrapper.length > 0 ) {
					$questionsWrapper.removeClass( activeClass );
				}
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}

		}
	}
} )();

Twc = Twc || {};
Twc.Checkout = Twc.Checkout || {};
/**
 * Order Button: adds items to the cart and updates flags for page transitions
 * @namespace
 */
Twc.Checkout.OrderButton = ( function() {

	return {
		addPackage: function() {
			Twc.Checkout.Loading.show(); // prevent multiple clicks on this button
			var $button = $( this );
			var offerId = $button.data( "id" );
			window.setTimeout( function() { // queued to allow loading screen to show
				if ( 'undefined' === typeof offerId ) {
					error( 'Package Offer ID not found' );
					Twc.Checkout.Loading.hide(); // prevent multiple clicks on this button
				} else {
					var addOfferResp = Twc.Checkout.CSSCall.addOfferToCart( offerId );
					if ( addOfferResp.result != "failure" ) {
						if ( addOfferResp.nextFlags != null && addOfferResp.nextFlags.length > 0 ) {
							var _href = Twc.Checkout.CSSCall.buildNextFlags( window.location.pathname, addOfferResp.nextFlags );
							window.location.href = _href;
							$button.attr( "href", _href );
						}
					} else {
						Twc.Checkout.Loading.hide(); // prevent multiple clicks on this button
					}
				}

				Twc.Analytics.dispatch( 'packageOrdered', $button );
			}, 100 );

			return false;
		},

		addExpressPackage: function() {
			Twc.Checkout.Loading.show(); // prevent multiple clicks on this button
			var $button = $( this );
			var offerId = $button.data( "id" );
			var data = {
				"offer_id": offerId,
				"cape": "buyflow",
				"tvService": $button.data( "tvService" ),
				"tvAspect": $button.data( "tvAspect" ),
				"tvSelection": $button.data( "tvSelection" ),
				"internetService": $button.data( "internetService" ),
				"internetAspect": $button.data( "internetAspect" ),
				"internetSelection": $button.data( "internetSelection" )
			}
			window.setTimeout( function() { // queued to allow loading screen to show
				if ( 'undefined' === typeof offerId ) {
					error( 'Package Offer ID not found' );
					Twc.Checkout.Loading.hide(); // prevent multiple clicks on this button
				} else {
					var addOfferResp = Twc.Checkout.CSSCall.addOfferToCart( offerId, data );
					if ( addOfferResp.result != "failure" ) {
						if ( addOfferResp.nextFlags != null && addOfferResp.nextFlags.length > 0 ) {
							var _href = Twc.Checkout.CSSCall.buildNextFlags( window.location.pathname, addOfferResp.nextFlags );
							window.location.href = _href;
							$button.attr( "href", _href );
						}
					} else {
						Twc.Checkout.Loading.hide(); // prevent multiple clicks on this button
					}
				}

				Twc.Analytics.dispatch( 'packageOrdered', $button );
			}, 100 );

			return false;
		}

	}

}() );

;
( function( $ ) {
	"use strict";

	$.fn.adblock = function( opts ) {
		var $this = this;

		function appendMessage( argument ) {
			var msg = $this.find( "div.adblockMessage p" ).html();
			var str = $( "<div class='twc-browser-alert-section'><ul><li class='--alert twc-full js-first js-last'><p class='twc-container twc-alert-text'>" + msg + "</p></li></ul></div>" );
			jQuery( 'body' ).prepend( str );
		}

		setTimeout( function() {
			var $adDiv = $this.find( ".ad-div" );
			if ( $adDiv.css( 'display' ) == "none" || $adDiv.is( ":hidden" ) ) {
				appendMessage();
			}
		}, 500 );
	};
} )( jQuery );

Twc.PageInit.new_services = function() {
	log( 'PageInit.new_services()' );

	//Any client JS module which can dispatch analytics events must be initialized in the appropriate PageInit
	//This is because these events must happen after initial page load s.t()
	Twc.SelectYourServices.CollapsiblePackages.init(); //TODO: WEBCMS-17427 clean-up after new_services page switches to FEDs
	Twc.SelectYourServices.NextButton.init();
	Twc.SelectYourServices.Tabs.init(); //TODO: WEBCMS-17427 clean-up after new_services page switches to FEDs
	Twc.SelectYourServices.PricePreview.init(); //TODO: WEBCMS-17427 clean-up after new_services page switches to FEDs
	Twc.SelectYourServices.Upsell.init(); //TODO: WEBCMS-17427 clean-up after new_services page switches to FEDs
};

/**
 * Initializes Billing parent page
 * @author McGowan
 *
 */
Twc.PageInit.billing = function() {
	log( 'PageInit.billing()' );

	var $iframeLoading = $( '.billing-iframe-loading' );
	var $iframe = $( '.billing-iframe' );

	// Initial set up of iframe once page is loaded
	function initIframe() {

		if ( $iframe.length === 0 || $iframeLoading.length === 0 ) {
			error( 'Page does not contain required DOM elements.' );
			return;
		}

		$iframeLoading.show().html( 'Loading...' ).removeClass( 'error' );

		//Initialize window messaging handler.  This is how the iframe communicates to our JS outside the iframe
		$( window ).on( 'message', cstCallback );

		//query for a customer's credit info
		var creditInfo = getCreditInfo();

		//fetch the CST token
		var cstToken = getCSTToken();

		$.when( creditInfo, cstToken ).done( function( creditInfo, cstToken ) {
			var cstTokenSuccess = addCSTTokenCookie( cstToken );

			if ( !cstTokenSuccess ) {
				return;
			}

			//Hide loading message
			$iframeLoading.hide();

			processCreditInfo( creditInfo );
		} );

		cstToken.fail( function() {
			showIframeInitError();
		} );

		creditInfo.fail( function() {
			loadCreditCheckPage();
		} );
	}

	function addCSTTokenCookie( cstToken ) {
		$.removeCookie( cstToken.tokenCookieName );
		if ( cstToken.token ) {
			$.cookie( cstToken.tokenCookieName, cstToken.token, {
				path: '/',
				domain: Twc.Checkout.Util.getDomainForCookie( Twc.Settings.billing.billingIframeUrl )
			} );
			return true;
		} else {
			error( 'No CST token in JSON response' );
			Twc.Checkout.Util.logToCq( "No CST token in JSON response on Payment Gateway!", "debug", null );
			showIframeInitError();
			return false;
		}
	}

	function processCreditInfo( creditInfo ) {
		//If the customer already has credit on file
		if ( creditInfo.hasValidCredit ) {
			//Initialize the banner
			Twc.Billing.CreditResponseBanner.init( creditInfo.creditStatus, parseInt( creditInfo.responseCode ) );
			//Go to billing page.  We aren't opting out of a credit check
			loadBillingPage( false, creditInfo.creditStatus );
		} else {
			loadCreditCheckPage();
		}
	}
	/**
	 * This function will be triggered when CST responds to the user submitting an iframe page
	 */
	function cstCallback( cstData ) {
		//we expect a JSON string back from the frame
		var data = Twc.Checkout.Util.safeParseJson( cstData.originalEvent.data );

		if ( 'undefined' !== typeof data.iFrameHeight ) {
			$( '.billing-iframe' ).height( data.iFrameHeight );
		}

		// pass through iframe clicks as document clicks (to close open menus, etc);
		if ( data.event === 'iFrameDocumentClick' ) {
			$( document ).click();
		}

		if ( data.event === "submit" ) {
			Twc.Checkout.Loading.show();
			//Refresh the cart
			Twc.Checkout.ShoppingCart.updateShoppingCart();

			if ( data.value === true ) {
				//the submit was successful so move to the next page
				loadNextPageInCheckoutFlow();
			} else if ( data.value.creditCheck === false || typeof data.value.responseCode !== 'undefined' ) {

				//Load the credit banner
				if ( typeof data.value.responseCode !== 'undefined' ) {
					//failed creditResponse is handled in the response banner
					Twc.Billing.CreditResponseBanner.jsResponseInit( data );
					//Scroll to banner at top
					$( 'html, body' ).animate( {
						scrollTop: 0
					}, 'fast' );
				}
				//If the customer is not red credit status, load the billing page
				if ( !Twc.Billing.CreditResponseBanner.isRedCreditStatus() ) {
					//If you had a credit check, then you didn't opt out
					var optedOutCreditCheck = !data.value.creditCheck;
					loadBillingPage( optedOutCreditCheck, data.value.creditStatus );
				}

			} else {
				Twc.Checkout.Loading.hide();
				//the submit failed on the first page or the whole form is bad, we must move to error page
				showErrorPage();
			}
		} else if ( data.event === "no-thanks" && data.value === true ) {
			//The user chose No Thanks so move to the next page
			loadNextPageInCheckoutFlow();
		}
	}

	function getCSTToken() {
		var cstToken = new $.Deferred();
		$.ajax( {
			'url': Twc.Settings.ajaxUrls.CSTToken,
			'headers': {
				'content-type': 'application/json'
			},
			'cache': false,
			'method': 'get'
		} ).done( function( data, textStatus, jqXHR ) {
			cstToken.resolve( {
				token: data.token,
				tokenCookieName: 'payment_gateway_token'
			} );
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			error( 'Could not obtain CST token. AJAX error.' );
			cstToken.fail();
		} );
		return cstToken.promise();
	}

	function getCreditInfo() {
		var creditInfo = new $.Deferred();
		$.ajax( {
			url: Twc.Settings.ajaxUrls.CustomerProfile + '?credit_info=true',
			dataType: 'json'
		} ).done( function( data, textStatus, jqXHR ) {
			creditInfo.resolve( {
				hasValidCredit: data.hasValidCredit,
				creditStatus: data.creditStatus,
				responseCode: data.responseCode
			} );
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			error( 'Failed to get creditInfo' );
			creditInfo.fail();
		} );
		return creditInfo.promise();
	}

	function loadCreditCheckPage() {
		var startTime = Twc.Checkout.Util.getCurrentTime();

		//set timeouts
		var timeoutIDs = setTimeouts();
		$iframe.get( 0 ).contentWindow.location.replace( Twc.Settings.billing.billingIframeUrl );
		clearTimeouts( timeoutIDs );

		var endTime = Twc.Checkout.Util.getCurrentTime();
		Twc.Checkout.Util.logToCq( "Time taken ( in milliseconds ) for iframe: [" + Twc.Settings.billing.billingIframeUrl + "] to load is : " + ( endTime - startTime ), "info", null );
	}

	/**
	 * @param optedOut did the customer opt out of a credit check?
	 * @param creditStatus the users credit status
	 */
	function loadBillingPage( optedOut, creditStatus ) {
		//Scroll to banner at top
		$( 'html, body' ).animate( {
			scrollTop: 0
		}, 'fast' );

		//Register call back for when billing page is fully loaded
		$iframe.first().on( 'load', function() {
			Twc.Analytics.Dispatchable.Events.billingPaymentInfo( optedOut, creditStatus );
			//Unbind the load callback on billing iframe
			$iframe.first().off();
			Twc.Checkout.Loading.hide();
		} );

		var startTime = Twc.Checkout.Util.getCurrentTime();

		//set timeouts
		var timeoutIDs = setTimeouts();
		$iframe.get( 0 ).contentWindow.location.replace( Twc.Settings.billing.abfBillingIframePaymentUrl );
		clearTimeouts( timeoutIDs );

		var endTime = Twc.Checkout.Util.getCurrentTime();
		Twc.Checkout.Util.logToCq( "Time taken ( in milliseconds ) for iframe: [" + Twc.Settings.billing.abfBillingIframePaymentUrl + "] to load is : " + ( endTime - startTime ), "info", null );
	}

	function loadNextPageInCheckoutFlow() {
		window.location.replace( Twc.Settings.loginUrl + '/session/' + Twc.Settings.sessionId + '?order_ready' );
	}

	function setTimeouts() {
		return {
			slaCallbackID: window.setTimeout( processFailedIframeLoadedForSLACallback, Twc.Settings.billing.iframeTimeoutForSLA ),
			splashCallbackID: window.setTimeout( processFailedIframeLoadedForSplashCallback, Twc.Settings.billing.iframeTimeoutForSplash )
		};
	}

	function clearTimeouts( timeoutIDs ) {
		window.clearTimeout( timeoutIDs.slaCallbackID );
		window.clearTimeout( timeoutIDs.splashCallbackID );
	}

	function showIframeInitError() {
		$iframeLoading.show().addClass( 'error' ).html( 'ERROR: Secure billing form could not be loaded.<br /><br />Please reload this page.' );
	}

	function processFailedIframeLoadedForSLACallback() {
		Twc.Checkout.Util.logToCq( "Payment Gateway URL failed to load for the SLA threshold of [" + Twc.Settings.billing.iframeTimeoutForSLA + "] milliseconds!", "debug", null );
	}

	function processFailedIframeLoadedForSplashCallback() {
		Twc.Checkout.Util.logToCq( "Payment Gateway URL failed to load in max threshold of [" + Twc.Settings.billing.iframeTimeoutForSplash + "] milliseconds!  Redirecting to splash page", "debug", function() {
			showErrorPage();
		} );
	}

	function showErrorPage() {
		window.location.replace( Twc.Settings.loginUrl + "/session/billingpageiframeerror?type=" + Twc.Analytics.buyflowType );
	}

	initIframe();

};

/**
 * Initializes Billing iFrame page
 * @author McGowan
 *
 */
Twc.PageInit.billing_iframe = function() {
	log( 'PageInit.billing_iframe()' );

	$( window ).on( 'resize load', function() {
		setParentHeight();
	} );


	function setParentHeight() {
		window.setTimeout( function() { // setTimeout required for IE8 issues when parent wasn't ready before this iframe 
			var h = $( '#iframe-content' ).outerHeight( true );
			var message = {
				"iFrameHeight": h
			};
			window.parent.postMessage( JSON.stringify( message ), '*' );
		}, 0 );
	}

	$( document ).ready( function() {
		setParentHeight();
	} ).click( function() { // propogate iframe document clicks to parent
		var message = {
			"event": "iFrameDocumentClick"
		};
		window.parent.postMessage( JSON.stringify( message ), '*' );
	} );


};

/**
 * Initializes select service pages
 * @author McGowan
 *
 */
Twc.PageInit.select_service = function() {
	log( 'PageInit.select_service()' );
	Twc.Components.RowExpander.initRows( $( '.plans > .collapsible' ) );
	Twc.Components.RowExpander.initRows( $( '.cart-module .collapsible' ) ); // init right-rail cart

	var isSelectInternet = ( 'select_internet' === Twc.Checkout.Util.getCurrentPageId() );
	var $orderServiceButtons = $( '.js-next-button' );

	$orderServiceButtons.click( function( e ) {
		var $button = $( this );

		e.preventDefault(); // manually redirect user and enforce strict flow control
		Twc.Checkout.Loading.show();

		window.setTimeout( function() { // allow time for loading bubble to show before instantiating the ajax functions
			var $parentUL = $button.parents( 'ul' );
			var productName = $parentUL.data( 'enrichedname' );
			var productId = $parentUL.data( 'productid' );

			if ( $button.hasClass( 'first-lob' ) ) {
				Twc.Analytics.dispatch( 'cartOpenProduct', productId, productName, 'a la carte' );
			} else {
				Twc.Analytics.Metric.fireTrackLink( 'cartAdd', {
					products: ';' + productId + '||' + productName,
					serviceZip: Twc.Analytics.serviceZip
				} );
			}

			if ( !$button.is( '.current-los, .update-los' ) ) {
				var addOfferResp = Twc.Checkout.CSSCall.addOfferToCart( productId );

				if ( addOfferResp.result == 'failure' ) {
					var e = new Error( 'Could not add offer to cart' );
					Twc.Checkout.Util.catchError( e );
					Twc.Checkout.Util.showErrorMessage( e );
				} else {
					if ( isSelectInternet ) {
						if ( addOfferResp.nextFlags != null && addOfferResp.nextFlags.length > 0 ) {
							var _href = Twc.Checkout.CSSCall.buildNextFlags( $button.attr( 'href' ), addOfferResp.nextFlags );
							$button.attr( 'href', _href );
						}
					}
					navToNextPage( $button );
				}
			} else if ( $button.is( '.update-los' ) ) {
				var aspectId = $parentUL.data( 'aspectid' );
				var serviceId = $parentUL.data( 'serviceid' );
				var actionData = {
					'service_id': serviceId,
					'aspect_actions': JSON.stringify( [ {
						'id': aspectId,
						'selectionActions': [ {
							'id': productId,
							'action': 'add',
							'quantity': 1
						} ]
					} ] )
				};
				$.ajaxQueue( {
					type: 'POST',
					url: Twc.Settings.ajaxUrls.UpdateCart,
					dataType: 'json',
					async: false, // required to preserve Event used for click to e.preventDefault() on ajax error
					data: actionData
				} ).fail( function( jqXHR, textStatus, errorThrown ) {
					if ( 'abort' !== textStatus ) { // don't show erros for explicit aborts
						Twc.Checkout.Util.catchError( errorThrown );
						Twc.Checkout.Util.showErrorMessage( errorThrown );
					} else {
						Twc.Checkout.Loading.hide();
					}
				} ).done( function( data ) {
					if ( isSelectInternet ) {
						if ( data.nextFlags != null && data.nextFlags.length > 0 ) {
							var _href = Twc.Checkout.CSSCall.buildNextFlags( $button.attr( 'href' ), data.nextFlags );
							$button.attr( 'href', _href );
						}
					}
					navToNextPage( $button );
				} );
			} else { // take no action and redirect
				navToNextPage( $button );
			}
		}, 100 ); // 100ms delay to show loading screen
	} );

	function navToNextPage( $button ) {
		window.location.href = $button.attr( 'href' );
	}

	function expandCartSelection() {
		var $cartJsonCondensedObject = $( '#condensedCartSummaryJson' ).data( "condensedCartSummaryJson" );
		$.each( $cartJsonCondensedObject.products, function( i, item ) {
			if ( item.mainItem && item.mainItem.productId ) {
				$( '.checkout-plans .two-rows' ).find( "[data-productid='" + item.mainItem.productId + "']" ).closest( '.two-rows' ).addClass( 'active' );
			}
		} );

		var $cartJsonObject = $( '#cartSummaryJson' ).data( "cartSummaryJson" );
		$.each( $cartJsonObject.offerSummaries, function( i, item ) {
			if ( item.id ) {
				$( '.checkout-plans .two-rows' ).find( "[data-productid='" + item.id + "']" ).closest( '.two-rows' ).addClass( 'active' );
			}
		} );
	}

	expandCartSelection();
}

/**
 * Initializes select TV service page
 * @author McGowan
 *
 */
Twc.PageInit.select_tv = function() {
	log( 'PageInit.select_tv()' );
	Twc.PageInit.select_service();
}

/**
 * Initializes select Phone service page
 * @author McGowan
 *
 */
Twc.PageInit.select_phone = function() {
	log( 'PageInit.select_phone()' );
	Twc.PageInit.select_service();
}

/**
 * Initializes select Internet service page
 * @author McGowan
 *
 */
Twc.PageInit.select_internet = function() {
	log( 'PageInit.select_internet()' );
	Twc.PageInit.select_service();
}

/**
 * Initializes select Packages page
 * @author McGowan
 *
 */
Twc.PageInit.select_packages = function() {
	log( 'PageInit.select_packages()' );

	if ( $( ".packageCompareTable" )[ 0 ] ) {
		Twc.PackageCompareTable.init();
	} else {
		Twc.ServicePackages.init();
	}
}

/**
 * Initializes upgrade Internet service page
 * @author McGowan
 *
 */
Twc.PageInit.upgrade_internet = function() {
	log( 'PageInit.upgrade_internet()' );
	Twc.Components.RowExpander.initRows( $( '.plans .collapsible, .internet-customize-accordion .collapsible' ) );
	Twc.Components.RowExpander.initRows( $( '.cart-module .collapsible' ) ); // init right-rail cart
}

/**
 * Initializes customize tv pages
 * @author McGowan
 */
Twc.PageInit.customize_tv = function() {
	log( 'PageInit.customize_tv()' );

	var $previousSelectedEquipment = $( '.tv-equipment .primary-equipment section input:checked' );

	var tabLoadingCssClass = 'status-bubble-tab-loading';
	var $tabSections = $( '.tabs section' );
	var $tabContainer = $( '.premium-channels-tabsystem' );

	// this will store timout ids for showing "loading..." on each tab.
	var sectionLoadingTimeoutIds = {};

	var $nextButton = $( '.button-nav .js-next-button' ).removeClass( 'disabled' );

	Twc.Components.RowExpander.initRows( $( '.cart-module .collapsible' ) ); // init right-rail cart

	// only mark first-level .collapsible for initilization.  Child .collapsible require special treatement
	var $rows = $( '.tv-customize-accordion > .collapsible' );
	Twc.Components.RowExpander.initRows( $rows );

	// Select TV Equip has inner collapsibles
	Twc.Components.RowExpander.initRows( $rows.eq( 0 ).find( '.collapsible' ) );

	// initialize the tabs
	Twc.Components.Tabs.init( $( '.tv-customize-accordion .tabs' ) );

	// view more/less sections
	Twc.Components.ViewMore.initObjects( $( '.js-view-more:not(.tabs .js-view-more), .detail-view' ) );

	// radios and checkboxes
	Twc.Components.InputButton.init( $( '.blue-button' ) );

	var $tvEquipForm = $rows.eq( 0 ).find( 'form:eq(0)' ); // only expecting 1 form

	var $selectTVInputParents = $( '.tv-equipment' );
	var $tvCustomizeAccordion = $( '.tv-customize-accordion' );
	var $premiumChannelsDiv = $tvCustomizeAccordion.children( '.collapsible' ).eq( 1 );
	var $tvEquipmentDiv = $tvEquipForm.children().eq( 0 );
	var $additionalEquipmentDiv = $tvEquipForm.children().eq( 1 );
	var $noBoxInput = $( "#nobox" );

	var $errorModule = $( '#js-page-errors' );
	if ( $errorModule.length !== 1 ) {
		error( 'PageInit.customize_tv(): $errorModule is not found' );
	}

	var serviceId = $( '#service-id' ).val() || '';
	if ( serviceId === '' ) {
		error( 'PageInit.customize_tv(): serviceId value is blank' );
	}

	var DTA_ID_1 = '1-4I4QB';
	var DTA_ID_2 = '1-5QHFM';
	if ( $previousSelectedEquipment.data( 'selectionid' ) === DTA_ID_1 ||
		$previousSelectedEquipment.data( 'selectionid' ) === DTA_ID_2 ) {
		dtaClicked( true );
	}

	//some of these items are dynamically refreshed
	$selectTVInputParents.on( 'change', ':checkbox, :radio, select, input', function( e ) {
		var $this = $( this );
		//don't update if select is choosing same value as already chosen
		//used to keep from resubmitting if user has chosen too many additional boxes
		if ( !$this.is( '.quantity select' ) || $this.data( 'currentvalue' ) !== $this.val() ) {
			Twc.Checkout.Util.showHideInlineErrorList( $errorModule );
			// update Premium Channels component if the primary equipment is changed.
			Twc.Checkout.CSSCall.updateCartCustomizeTv( this, $previousSelectedEquipment );
			if ( $this.data( 'modelid' ) === '' && $this.is( 'select' ) ) { //This is a Cable Card or DTA if no modelID exist
				var selectedValue = $.isNumeric( $this.data( 'currentvalue' ) ) ? $this.data( 'currentvalue' ) : 0;
				var amountElement = 'span.item-' + $this.data( 'selectionid' ) + '.amount';
				$( amountElement ).text( selectedValue ); //so update the cableCard or DTA quantity
			}

			if ( $this.parents( '.primary-equipment' ).length > 0 ) {
				var dtaSelected = $this.data( 'selectionid' ) === DTA_ID_1 ||
					$this.data( 'selectionid' ) === DTA_ID_2;
				var dtaDeselected = $previousSelectedEquipment.data( 'selectionid' ) === DTA_ID_1 ||
					$previousSelectedEquipment.data( 'selectionid' ) === DTA_ID_2;
				if ( dtaSelected ) {
					dtaClicked( true );
				} else if ( dtaDeselected ) {
					dtaClicked( false );
				}
			}

			// set new previous selected
			$previousSelectedEquipment = $( '.tv-equipment .primary-equipment section input:checked' );

			if ( $tvEquipmentDiv.find( $( this ) ).length > 0 && $( '#nobox' ).length > 0 ) {
				if ( $tvEquipmentDiv.find( 'input:checked' ).size == 0 || $( '#nobox:checked' ).length > 0 ) {
					showPremiumChannelsWarning( true );
					showAdditionalEquipmentWarning( true );
				} else {
					if ( !dtaSelected ) {
						showPremiumChannelsWarning( false );
					}
					showAdditionalEquipmentWarning( false );
				}
			} else {
				updateNoBox();
			}
		}
	} );

	function dtaClicked( isSelected ) {
		showPremiumChannelsWarning( isSelected );
		hideNonDtaAdditionalEquipment( isSelected );
	}

	// Select boxes that show updates
	$( '.quantity select' ).each( function( i ) {
		var $this = $( this );
		var $wrapper = $this.parent( '.quantity' );
		var $msg = $wrapper.find( '.confirm' );
		$this.data( 'currentvalue', $this.find( 'option:selected' ).val() );

		$this.on( 'change', function( e ) {
			var maxEquipment = parseInt( $this.data( 'max' ) ) + 1; // max secondary equipment plus one primary equipment
			var val = $this[ 0 ].value;
			if ( isNaN( val ) ) {
				$msg.animate( {
					'opacity': 0
				} );
				return;
			}

			var totalQuantity = 1;
			$( '.quantity option:selected' ).each( function() {
				if ( !isNaN( this.value ) ) {
					totalQuantity += parseInt( this.value );
				}
			} );
			if ( totalQuantity > maxEquipment ) {
				Twc.Checkout.Util.showHideInlineErrorList( $errorModule, [ 'The total of all equipment cannot exceed ' + maxEquipment + '.' ] );
				$this.val( $this.data( 'currentvalue' ) );
			} else if ( $msg.length == 0 ) { // message doesn't exist, slide to show
				$msg = $( '<div class="confirm"><span>Cart Updated</span></div>' ).hide();
				$wrapper.append( $msg );
				$msg.fadeIn();
			} else { // message aleady exists, use fade indication
				$msg.fadeOut( function() {
					$msg.css( {
						'opacity': 1
					} );
					$msg.html( '<span>Cart Updated</span>' );
					$msg.fadeIn();
				} );
			}
		} )
	} );

	function hideNonDtaAdditionalEquipment( hideEquipment ) {
		if ( hideEquipment ) {
			$additionalEquipmentDiv.find( '[data-selectionid="1-4I4QB"]' ).parents( '.tv-equip-box' ).siblings().addClass( 'hidden' );
		} else { //if the additional equipment exists, show it
			if ( $additionalEquipmentDiv.find( '.tv-equip-box' ).length > 0 ) {
				$additionalEquipmentDiv.find( '.tv-equip-box' ).removeClass( 'hidden' );
			} else { //otherwise, reload the page
				location.reload( true );
			}
		}
	}

	function showAdditionalEquipmentWarning( showWarning ) {
		//if the No Box option is checked, show error message
		if ( showWarning ) {
			$additionalEquipmentDiv.find( '.boxes' ).addClass( 'hidden' );
			$additionalEquipmentDiv.find( '.warning-module' ).removeClass( 'hidden' );
			$additionalEquipmentDiv.addClass( 'active' );
		} else { //otherwise hide error message and show boxes if they're available
			if ( $additionalEquipmentDiv.find( '.tv-equip-box' ).length > 0 ) {
				$additionalEquipmentDiv.find( '.boxes' ).removeClass( 'hidden' );
				$additionalEquipmentDiv.find( '.warning-module' ).addClass( 'hidden' );
			} else { //otherwise reload the page
				location.reload( true );
			}
		}
	}

	function showPremiumChannelsWarning( showWarning ) {
		if ( showWarning ) {
			$( '#premium-channels-warnings' ).removeClass( 'hidden' );
			$( '.premium-channels-tabsystem' ).addClass( 'hidden' );
			$premiumChannelsDiv.addClass( 'active' );
		} else { //otherwise hide error message and show channels if they're available
			if ( $( '.premium-channels-tabsystem' ).length > 0 ) {
				$( '#premium-channels-warnings' ).addClass( 'hidden' );
				$( '.premium-channels-tabsystem' ).removeClass( 'hidden' );
			} else { //otherwise reload the page
				location.reload( true );
			}
		}
	}

	function updateNoBox() {
		var hideNoBox = $premiumChannelsDiv.find( ':checked, :selected' ).not( ':disabled' ).length > 0;
		$additionalEquipmentDiv.find( ':selected, :checked' ).not( ':disabled' ).each( function() {
			var selectedText = $( this ).text();
			if ( !isNaN( selectedText ) && selectedText > 0 ) {
				hideNoBox = true;
			}
		} );
		if ( hideNoBox ) {
			$( '#nobox' ).parents( '.tv-equip-box' ).addClass( 'hidden' );
			//only do this is nobox is selected, otherwise it causes the other boxes to be unselected as well
			if ( $( '#nobox' ).attr( 'checked' ) === 'checked' ) {
				$( '#nobox' ).attr( 'checked', '' );
			}
		} else {
			$( '#nobox' ).parents( '.tv-equip-box' ).removeClass( 'hidden' );
		}
	}

	/** Show spinner (for tab container)
	 * @param {integer} topPos Y position of element clicked.
	 */
	function showCartUpdating( topPos ) {
		Twc.Checkout.Util.showStatusBubble( $tabContainer, 'Updating cart...', {
			'cssClass': tabLoadingCssClass,
			'verticallyCenterOn': topPos
		} );
	}

	/** Hide spinner for given tab
	 * @param {jQuery} $section tab content associated with spinner.
	 */
	function hideTabLoadingMessage( $section ) {
		//window.clearTimeout(sectionLoadingTimeoutIds[getTabSectionId($section)]);
		$section.find( '.' + tabLoadingCssClass ).remove();
	}

	/** Refresh the content for a tab
	 * @param {jQuery} $section The content associated with a tab.
	 * @param {array} openIds List of IDs of sections that should remain open.
	 * @param {html} data The updated content for the tab content.
	 */
	function refreshTab( $section, openIds, data ) {
		var $data = $( '<div>' ).html( data );
		var $currentContent = $section.find( '.content-wrap' );
		var $newContent = $data.find( '.content-wrap' ).hide();
		$section.find( 'form' ).append( $newContent );

		// open all rows open before refresh
		for ( var i = 0; i < openIds.length; i++ ) {
			$newContent.find( '#' + openIds[ i ] ).addClass( 'active' );
		}

		// explicitly set height before animating
		var currentContentH = $currentContent.outerHeight( true );
		var newContentH = $newContent.outerHeight( true );
		$section.css( 'height', currentContentH + 'px' );
		$currentContent.remove();
		$newContent.show();
		initTabSection( $section ); // re-initialize updated content

		$section.stop().animate( {
			'height': newContentH + 'px'
		}, {
			'step': function() {
				Twc.Checkout.ShoppingCart.evalPosition()
			},
			'complete': function() {
					$section.css( 'height', 'auto' );
				} // reset height to allow for auto-adjustment
		} );
	}

	/** Handles a click within a tab section that should update the cart/section
	 * @param {jQuery} $input The input field.
	 * @param {integer} topPos Y position of element clicked.
	 * @param {jQuery} $section content to init.
	 */
	function tabSectionUpdateClick( $input, topPos, $section ) {
		showCartUpdating( topPos );

		var tabId = getTabSectionId( $section );
		// grab IDs of all the open rows so we can set them open on refresh
		var openIds = [];
		$section.find( 'tr.active, .js-view-more.active' ).each( function() {
			var $me = $( this );
			var id = $me.attr( 'id' );
			if ( 'undefined' !== typeof id ) {
				openIds.push( id );
			}
		} );

		var actionData;
		if ( $input.data( 'premiumpackage' ) ) {
			if ( $input.is( ':radio' ) ) {
				// Process if Radio button
				var previousId = $( "#radioCurrentSelectedId" ).val();
				if ( previousId ) {
					// Delete the previously added package
					actionData = Twc.Checkout.CSSCall.buildTabConfigAspectActions( $input, previousId );
					updateCart( actionData, openIds, $section, $input );
				} else {
					// Add newly selected package
					actionData = Twc.Checkout.CSSCall.buildTabConfigAspectActions( $input );
					updateCart( actionData, openIds, $section );
				}
			} else {
				// Process if checkbox button
				actionData = Twc.Checkout.CSSCall.buildTabConfigAspectActions( $input );
				updateCart( actionData, openIds, $section );
			}
		} else {
			// Process for non premium package sections
			actionData = $input.is( ':radio' ) ? Twc.Checkout.CSSCall.getItemInstallmentData( $input ) : Twc.Checkout.CSSCall.buildTabConfigAspectActions( $input );
			updateCart( actionData, openIds, $section );
		}
	}

	function updateCart( actionData, openIds, $section, $input ) {

		log( 'tabSectionUpdateClick about to UpdateCart' );
		$.ajaxQueue( { // update cart
			'method': 'post',
			'url': Twc.Settings.ajaxUrls.UpdateCart,
			'data': actionData
		} ).done( function() {
			// Only add the package if "None" Radio is not selected
			if ( $input && !$input.data( "none-option" ) ) {
				// Add newly selected package
				actionData = Twc.Checkout.CSSCall.buildTabConfigAspectActions( $input );
				updateCart( actionData, openIds, $section, null );
			}
			log( 'updateCart complete; about to refresh tab' );
			$.ajaxQueue( { // refresh tab
					'method': 'get',
					'url': $section.attr( 'data-tab-url' ),
					'data': {
						'sessionid': Twc.Settings.sessionId
					}
				} ).done( function( data, textStatus, errorThrown ) {
					log( 'refresh tab complete' );
					refreshTab( $section, openIds, data );
					// fire off async request to update cart
					Twc.Checkout.ShoppingCart.updateShoppingCart();
					updateNoBox();
					// remove spinner
					hideTabLoadingMessage( $tabContainer );
				} )
				.fail( function() {
					// remove spinner
					hideTabLoadingMessage( $tabContainer );
				} )
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			if ( 'abort' !== textStatus ) { // don't show errors for explicit aborts
				Twc.Checkout.Util.showErrorMessage( new Error( 'Update Cart Failed. ' + textStatus ) );
			}
			// remove spinner
			hideTabLoadingMessage( $tabContainer );
		} );

	}

	/** Initializes tab section content.  this must occur whenever content is loaded/refreshed.
	 * @param {jQuery} $section content to init.
	 */
	function initTabSection( $section ) {
		Twc.Checkout.Modal.initLinks( $section.find( 'a.modal' ) );
		Twc.Checkout.Tooltip.init( $section.find( 'a.tooltip' ) );
		Twc.Components.ViewMore.initObjects( $section.find( '.js-view-more' ) );

		// initialize the tables that have detail rows that expand
		Twc.Components.TableRowExpander.initTable( $section.find( 'table' ) );

		// get objects users click for which we should refresh tab content
		var $clickables = $section.find( ':checkbox, :radio, select' ).change( function( e ) {
			var $me = $( this );
			tabSectionUpdateClick( $me, ( $me.position().top + $me.height() / 2 ), $section );
		} );
	}

	function getTabSectionId( $section ) {
		return $section.data( 'tabId' );
	}

	$tabSections.each( function( i ) {
		var $section = $( this );

		// give each tab a unique id
		$section.data( 'tabId', 'tabId' + i );

		var tabUrl = $.trim( $section.attr( 'data-tab-url' ) );
		if ( 'undefined' === typeof tabUrl || '' === tabUrl ) {
			error( 'Could not initalize tab $section[' + i + ']. tab URL not found.' );
			$section.html( '<div class="error-module"><div class="error-wrap"><p>ERROR: Tab could not be instantiated.</p></div></div>' );
		} else {
			initTabSection( $section );
		}
	} );

	function getCustomizeProductString() {
		var analyticsProductString = $( '#analyticsProductString' ).val();
		var productBundle = analyticsProductString.split( ',;' )[ 0 ].split( "=" )[ 1 ].trim();
		var integrationCode = productBundle.split( "||" )[ 1 ];
		var finalProductString = '';
		//tv equipment checkboxes
		$tvEquipmentDiv.find( 'input:checked' ).each( function( index ) {
			var productId = $( this ).val();
			var productName = $( this ).data( 'name' );
			var modelId = $( this ).parents( '.price-wrap' ).siblings( '.box' ).data( 'modelid' );
			var modelName = $( this ).parents( '.price-wrap' ).siblings( '.box' ).data( 'name' );
			var productString = ';' + ( modelId ? modelId : productId ) + '||' + integrationCode + '||' + ( modelName ? modelName : productName ) + ';;;;eVar46=' + productBundle;
			finalProductString += finalProductString === '' ? productString + ">>add on" : ',' + productString + ">>add on";
		} );
		//premium channel inputs
		$premiumChannelsDiv.find( 'input:checked' ).not( ':disabled, :radio, [data-included=true]' ).each( function( index ) {
			var productId = $( this ).val();
			var productName = $( this ).data( 'name' );
			var productString = ';' + productId + '||' + integrationCode + '||' + productName + ';;;;eVar46=' + productBundle;
			finalProductString += finalProductString === '' ? productString + ">>add on" : ',' + productString + ">>add on";
		} );
		//tv equipment dropdowns
		$( '.quantity option:selected' ).each( function( index ) {
			var $this = $( this );
			if ( $this.val() > 0 ) {
				var $select = $this.closest( 'select' );
				var productId = $select.data( 'selectionid' );
				var productName = $select.data( 'name' );
				var modelId = $( this ).parents( '.body' ).siblings( '.box' ).data( 'modelid' );
				var modelName = $( this ).parents( '.body' ).siblings( '.box' ).data( 'name' );
				var productString = ';' + ( modelId ? modelId : productId ) + '||' + integrationCode + '||' + ( modelName ? modelName : productName ) + ';;;;eVar46=' + productBundle;
				finalProductString += finalProductString === '' ? productString + ">>add on" : ',' + productString + ">>add on";
			}
		} );
		return finalProductString;
	}

	$nextButton.click( function() {
		if ( !$nextButton.hasClass( 'disabled' ) ) { // first, validate with JS.  Then, validate with AJAX
			var messages = [];
			// preform ajax validation
			$nextButton.addClass( 'disabled' );
			Twc.Checkout.Loading.show();
			$.ajaxQueue( {
					url: Twc.Settings.ajaxUrls.ValidateCustomizeTV,
					method: 'get',
					data: {
						'service_id': escape( serviceId )
					}
				} )
				.done( function( data, textStatus, jqXHR ) {
					try { // ensure removePageLoadingBubble() is always called and doesn't block UI
						var formValidation = data.formValidation || {};
						var formIsValid = formValidation.isValid === true;
						if ( !formIsValid ) { // errors in form
							for ( key in formValidation.errors ) { // grab errors only, not keys
								var o = formValidation.errors[ key ];
								if ( typeof o === 'string' ) { // only add strings
									messages.push( unescape( o ) );
								}
							}
						}

						// show/hide errors
						Twc.Checkout.Util.showHideInlineErrorList( $errorModule, messages );
						if ( formIsValid ) {
							Twc.Checkout.Util.isFirstOffer( 'TV', function( isFirst ) {
								if ( isFirst ) {
									Twc.Analytics.dispatch( 'cartOpen', getCustomizeProductString() );
								} else {
									Twc.Analytics.dispatch( 'cartAdd', getCustomizeProductString() );
								}
								window.location.href = $nextButton.attr( 'href' );
							} );
						} else {
							// let users deal with errors/validations
							$nextButton.removeClass( 'disabled' );
							Twc.Checkout.Loading.hide();
						}
					} catch ( e ) {
						Twc.Checkout.Util.catchError( e );
					}
				} )
				.fail( function( jqXHR, textStatus, errorThrown ) {
					if ( textStatus !== 'abort' ) {
						Twc.Checkout.Util.catchError( errorThrown );
						Twc.Checkout.Util.showErrorMessage( errorThrown );
					}
					// let users deal with errors/validations
					$nextButton.removeClass( 'disabled' );
					Twc.Checkout.Loading.hide();
				} )
				.always( function() { // ajax completed; clean up any preventions
				} );
		}
		return false;
	} );
};

/**
 * Initializes customize phone pages
 * @author McGowan
 */
Twc.PageInit.customize_phone = function() {
	log( 'PageInit.customize_phone()' );

	Twc.Components.InputButton.init( $( '.blue-button' ) );

	// init right-rail shopping cart
	Twc.Components.RowExpander.initRows( $( '.cart-module .collapsible' ) );

	// Users will either see 1 or 3 sections.  Code must accomodate both cases
	var $sections = $( '.phone-customize-accordion .page-collapsible:not(.inner-collapse)' );
	var $innerCollapsible = $sections.find( '.page-collapsible' );

	var $sectionHeaders = $sections.find( '> header' );
	var $finalStepButton = $( '.js-next-button' );
	var totalSteps = $sections.length;

	// store ajax requests to limit multiple responses
	var ajaxRequests = {};

	var $section2ErrorDiv = $sections.eq( 1 ).find( '.error-module' );
	var $section2Form = $sections.eq( 1 ).find( 'form:eq(0)' ); // only expecting one form
	if ( totalSteps > 1 && $section2Form.length === 0 ) error( 'Section 2 Form not found' );

	// birth-day should only show maximum days based on birth-month
	var $birthMonth = $( '#birth-month' ).change( adjustBirthMonthDays );
	var $birthDay = $( '#birth-date' );
	var maxDaysPerMonth = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

	function adjustBirthMonthDays() {
		if ( $birthMonth.length === 1 && $birthDay.length === 1 ) {
			var month = parseInt( $birthMonth.val(), 10 ) || -1; // 1-12
			var maxDays = maxDaysPerMonth[ month - 1 ] || 31; // default to 31

			// redraw all days but preserve the day selected before redraw
			var selectedDayVal = $birthDay.val() || '';
			$birthDay.find( 'option' ).remove();
			$birthDay.append( '<option value="dd">Day</option>' );
			for ( var d = 1; d <= maxDays; d++ ) {
				var selected = ( selectedDayVal == d ) ? 'selected="selected"' : '';
				$birthDay.append( '<option ' + selected + ' value="' + d + '">' + d + '</option>' );
			}
		}
	}
	adjustBirthMonthDays();


	function enableFinalStepButton( enabled ) {
		if ( enabled ) {
			$finalStepButton.removeClass( 'disabled' ).removeAttr( "onclick" );
		} else {
			$finalStepButton.addClass( 'disabled' );
		}
	}

	enableFinalStepButton( true );
	Twc.Components.RowExpander.initRows( $innerCollapsible, false );
	// section 1 and 2 and 3 should fire cart updates on radio/checkbox change
	// slice goes from (start, end) EXCLUSIVE, so the object with the zero based index of 3 in not included
	$sections.slice( 0, 3 ).find( ':checkbox, :radio' ).on( "click", function( e ) {
		Twc.Checkout.CSSCall.updateCartCustomizePhone( this, e );
	} );

	// ajax submits form and validates section. runs a callback function if valid
	function submitAndValidateSection( ajaxRequestKey, ajaxUrl, $form, $errorDiv, isValidCallback ) {
		var isFinalUrl = ( ajaxUrl === Twc.Settings.ajaxUrls.UpdatePhoneAuth );
		if ( isFinalUrl ) {
			enableFinalStepButton( false );
			Twc.Checkout.Loading.show();
		}
		// cancel previous ajax request and start new one
		if ( ajaxRequests[ ajaxRequestKey ] && ajaxRequests[ ajaxRequestKey ].abort ) {
			ajaxRequests[ ajaxRequestKey ].abort();
		}
		ajaxRequests[ ajaxRequestKey ] = $.ajax( { //NOT a CSS call, so no need to queue it
			'url': ajaxUrl,
			'type': 'post',
			'data': $form.serialize()
		} ).fail( function() {
			Twc.Checkout.Util.showHideInlineErrorList( $errorDiv, [ 'Unknown system error. Please try your request again.' ] );
			if ( isFinalUrl ) { // let user back to make changes on failures
				enableFinalStepButton( true );
				Twc.Checkout.Loading.hide();
			}
		} ).done( function( data ) {
			var formValidation = data.formValidation || {};
			var errorList = [];

			// remove error labels
			$form.find( '.error' ).removeClass( 'error' );

			var formIsValid = formValidation.isValid === true;
			if ( formIsValid ) {
				isValidCallback();
			} else { // errors in form
				Twc.Checkout.Loading.hide();
				enableFinalStepButton( true );
				for ( key in formValidation.errors ) { // grab errors only, not keys

					var o = formValidation.errors[ key ];
					if ( typeof o === 'string' ) { // only add strings
						errorList.push( unescape( o ) );

						if ( Twc.Checkout.Util.isValidSelector( '#' + key ) ) {
							// set the field fieldset with error
							$form.find( '#' + key ).parents( 'fieldset:eq(0)' ).addClass( 'error' );
						}
					}
				}
				Twc.Checkout.Util.showHideInlineErrorList( $errorDiv, errorList );
				if ( isFinalUrl ) {
					enableFinalStepButton( true );
					Twc.Checkout.Loading.hide();
				}
			}
		} ).always( function() {
			ajaxRequests[ ajaxRequestKey ] = null;
		} );
	}

	function dispatchAnalytics() {
		Twc.Checkout.Util.isFirstOffer( 'Phone', function( isFirst ) {
			var cartAction = isFirst ? 'cartOpen' : 'cartAdd';
			Twc.Analytics.dispatch( cartAction, phoneProductString() );
		} );
	}

	/*
	 * configure Next actions for each section. Final section would use CTA button
	 */
	$finalStepButton.on( "tap", function() { // Complete Digital Phone Authorization

		if ( !$finalStepButton.hasClass( 'disabled' ) ) {
			enableFinalStepButton( false );
			Twc.Checkout.Loading.show();
			if ( totalSteps > 1 ) {
				submitAndValidateSection( 'section2', Twc.Settings.ajaxUrls.UpdatePhoneNumber, $section2Form, $section2ErrorDiv, function() {
					activateSection( 2 );
					dispatchAnalytics();
					window.location.href = $finalStepButton.prop( 'href' );
				} );
			} else {
				dispatchAnalytics();
				window.location.href = $finalStepButton.prop( 'href' );
			}
		}
		return false;
	} );

	$( '#phone-number' ).mask( '000-000-0000' );

	// Configure the section headers to open/close other sections if necessary
	$sectionHeaders.each( function( i ) {
		var $me = $( this );
		var $section = $sections.eq( i );

		// Enable the final button if only section shown or the last step is open
		if ( totalSteps === 1 || i === totalSteps - 1 && $section.is( '.active' ) ) {
			enableFinalStepButton( true );
		}

		$me.on( "tap", function( e ) {
			if ( $section.is( '.complete' ) ) {
				$sections.slice( i ).removeClass( 'complete' ).addClass( 'disabled' );
				$section.removeClass( 'disabled complete' );
				if ( i !== totalSteps - 1 ) {
					enableFinalStepButton( false );
				}
			}
		} );
	} );

	function clearSectionErrors( sectionNum ) {
		switch ( sectionNum ) {
			case 2:
				$section2ErrorDiv.hide().find( 'ul' ).empty().addClass( 'invisible' );
				$section2Form.find( '.error' ).removeClass( 'error' );
				break;
		}
	}

	// show the section and disactivate others
	function activateSection( sectionToActivate ) {
		if ( sectionToActivate <= totalSteps - 1 ) {
			// clear all errors
			clearSectionErrors( 2 );

			$sections.slice( 0, sectionToActivate ).addClass( 'complete' ); // mark this and all previous complete
			$sections.eq( sectionToActivate ).removeClass( 'disabled' ); // allow for opening
			$sectionHeaders.eq( sectionToActivate ).trigger( "tap" ); // open
			if ( sectionToActivate === totalSteps - 1 ) {
				enableFinalStepButton( true );
			}
		}
	}

	function phoneProductString() {
		var analyticsProductString = $( '#analyticsProductString' ).val(),
			productBundle = analyticsProductString.split( ',;' )[ 0 ].split( "=" )[ 1 ].trim(),
			integrationCode = productBundle.split( "||" )[ 1 ],
			productString = [];
		$( '.content-wrap .collapsible input:checked' ).each( function() {
			var $this = $( this );
			productString.push( ';' + $this.data( 'selectionid' ) + '||' + integrationCode + '||' + $this.data( 'shortname' ) + ';;;;eVar46=' + productBundle );
		} );
		return productString.join( ">>add on," ) + ">>add on";
	}

	// if not in author mode, init the show/hide of the transfer number section
	if ( !Twc.Checkout.Util.authorModeInvoked() ) {
		var $selectNumberRadios = $( '#js-phoneNumber-transfer, #js-phoneNumber-new' );
		var $transferNumberRadio = $( '#js-phoneNumber-transfer' );

		if ( $selectNumberRadios.length === 2 ) {
			var transferNumberFormWrapper = $( '.transfer-number' ).hide();
			if ( $transferNumberRadio.is( ':checked' ) ) {
				transferNumberFormWrapper.show();
			}

			$selectNumberRadios.on( 'change', function() {
				transferNumberFormWrapper.stop( true, true );
				if ( $transferNumberRadio.is( ':checked' ) ) {
					clearSectionErrors( 2 );
					transferNumberFormWrapper.slideDown( {
						'duration': Twc.Settings.accordianSlideDuration,
						'easing': Twc.Settings.accordianSlideEasing,
						'step': Twc.Checkout.ShoppingCart.evalPosition
					} );
				} else {
					transferNumberFormWrapper.slideUp( {
						'duration': Twc.Settings.accordianSlideDuration,
						'easing': Twc.Settings.accordianSlideEasing,
						'step': Twc.Checkout.ShoppingCart.evalPosition
					} );
				}
			} );
		}
	}
};

/**
 * Initializes customize internet pages
 * @author McGowan
 */
Twc.PageInit.customize_internet = function() {
	log( 'PageInit.customize_internet()' );

	Twc.Components.InputButton.init( $( '.blue-button' ) );

	// init right-rail shopping cart
	Twc.Components.RowExpander.initRows( $( '.cart-module .collapsible' ) );

	// Init the expand/collapse sections
	Twc.Components.RowExpander.initRows( $( '.internet-customize-accordion .collapsible' ) );

	var $nextButton = $( '.js-next-button' );
	var $form = $( '#js-main-form' );
	var $radios = $form.find( 'header input[type=radio]' ); // ensure 3 main header radios are only validated


	if ( $nextButton.length !== 1 || $form.length !== 1 || $radios.length === 0 ) {
		error( 'PageInit.customize_internet(): required elements not found' );
	}

	$radios.on( "click", function() {
		validatePage();
	} );

	function getCustomizeProductString() {
		var analyticsProductString = $( '#analyticsProductString' ).val();
		var productBundle = analyticsProductString.split( ',;' )[ 0 ].split( "=" )[ 1 ].trim();
		var integrationCode = productBundle.split( "||" )[ 1 ];
		var finalProductString = '';
		//tv equipment checkboxes
		$radios.each( function( index ) {
			if ( this.checked ) {
				var productId = $( this ).val();
				var productName = $( this ).data( 'name' );
				var productString = ';' + productId + '||' + integrationCode + '||' + productName + ';;;;eVar46=' + productBundle;
				finalProductString += finalProductString === '' ? productString + ">>add on" : ',' + productString + ">>add on";
			}
		} );
		return finalProductString;
	}

	$nextButton.click( function() {
		if ( $nextButton.hasClass( 'disabled' ) ) {
			return false;
		}
		Twc.Checkout.Loading.show();
		return Twc.Checkout.Util.isFirstOffer( 'Internet', function( isFirst ) {
			if ( isFirst ) {
				Twc.Analytics.dispatch( 'cartOpen', getCustomizeProductString() );
			} else {
				Twc.Analytics.dispatch( 'cartAdd', getCustomizeProductString() );
			}
			return true;
		} );
	} );

	function enableNextButton( enabled ) {
		$nextButton.toggleClass( 'disabled', !enabled );
	}

	// disable nextButton unless a checkbox is checked
	function validatePage() {
		enableNextButton( false );
		$radios.each( function() {
			if ( this.checked ) {
				enableNextButton( true );
				return false;
			}
		} );
	}

	// run initial validation
	validatePage();

}

/**
 * Initializes Order Review page
 * @author McGowan
 *
 */
Twc.PageInit.order_review = function() {
	log( 'PageInit.order_review()' );

	// change positioning to ensure that calendars and loading messages position themselves correctly
	$( '.solid-column, .service-details-wrapper' ).css( {
		'position': 'relative'
	} );

	var $nextPageButton = $( '.button-nav .js-next-button' );
	if ( $nextPageButton.length !== 1 ) {
		error( 'Twc.PageInit.order_review(): nextPageButton not found' );
	}
	enableNextPageButton( true ); // keep enabled unless error state disables it


	var ajaxRequestSubmitInstallationOption = null; // thread for submitting the info
	var ajaxRequestRefreshServiceDetails = null; // thread for refreshing the view


	var $optionRows = $( '.installation-options .collapsible' );
	Twc.Components.RowExpander.initRows( $optionRows, true ); // restrict to one open

	// we're updating this when users change installation options
	var $serviceDetailsWrapper = $( '.service-details-wrapper' );
	if ( $serviceDetailsWrapper.length !== 1 ) {
		error( 'Twc.PageInit.order_review(): serviceDetailsWrapper not found' );
	}
	var $editLinks = $serviceDetailsWrapper.find( '.head a' );
	$serviceDetailsWrapper.on( 'click', '.head a', function() {
		var lob = $( this ).data( 'lob' );
		var position = $( this ).index( '.service-details-wrapper a' ) + 1;
		Twc.Analytics.dispatch( 'reviewOrderEdit', lob, position );
		upsellBannersAnalytics();
	} );

	var $sectionPickup = $( '#section-pickup' );
	var $sectionMail = $( '#section-mail' );
	var $sectionSchedule = $( '#section-schedule' );

	var $sectionScheduleErrors = $sectionSchedule.find( '.error-module' );

	var $sectionScheduleRadios = $( '.num-visits input' );
	var $serviceCalendars = $( '.option-details .date' );
	var $firstServiceCalendar = $serviceCalendars.eq( 0 );
	var $secondServiceCalendar = $serviceCalendars.eq( 1 );

	var $optionRowRadios = $optionRows.find( 'header input[type=radio]' );
	var $optionRowRadioSchedule = $sectionSchedule.find( 'header input[type=radio]' );

	var $dateBoxes = $sectionSchedule.find( 'input[type=text]' );
	var $dateLabels = $sectionSchedule.find( 'fieldset' );
	var $timeDropdowns = $sectionSchedule.find( 'select' );

	var scheduleData = []; // [1] for single install; [3] for split install.  {calendarOptions, times, lob}

	var $reviewOrderUpsell = $( '.review-order-upsell' );
	var $upsellButton = $( '.upsell-button' );
	var $leftUpsellBannerDesc = $reviewOrderUpsell.find( '.left-banner .upsell-title' );
	var $rightUpsellBannerDesc = $reviewOrderUpsell.find( '.right-banner .upsell-title' );

	$nextPageButton.click( function( e ) { // always return false
		if ( !$nextPageButton.hasClass( 'disabled' ) ) {
			if ( $optionRowRadios.length === 0 ) { // if no installation options, go to next page
				navigateToNextPage();
			} else { // validate page and submit ajax request to update installation options
				var pageValid = validatePage();
				if ( pageValid ) {
					updateInstallationOptions( true );
				}
			}

		}
		return false;
	} );

	//Upsell banners analytics
	Twc.Analytics.dispatch( 'upsellItemBannerViewDetails', getUpsellItemsDescription() );

	//Get upsell banner(s) description for analytics
	function getUpsellItemsDescription() {
		var description = "";
		if ( $leftUpsellBannerDesc.length && $rightUpsellBannerDesc.length ) {
			description = 'review banner 1--' + $leftUpsellBannerDesc.text() + ' : review banner 2--' + $rightUpsellBannerDesc.text();
		} else if ( $leftUpsellBannerDesc.length || $rightUpsellBannerDesc.length ) {
			description = 'review banner 1--' + ( $leftUpsellBannerDesc.text() ? $leftUpsellBannerDesc.text() : $rightUpsellBannerDesc.text() );
		}
		return description;
	}

	$upsellButton.click( function( e ) {
		var $button = $( this );
		var blueButton = $button.find( '.blue-button' );
		var event = e;
		if ( blueButton.hasClass( 'disabled' ) ) {
			return false;
		}
		blueButton.addClass( 'disabled' );
		var actionData = {
			'action': $button.is( '.remove-button' ) ? 'Remove' : 'Add',
			'serviceId': $button.data( 'service-id' ),
			'aspectId': $button.data( 'aspect-id' ),
			'selectionId': $button.data( 'selection-id' )
		};
		Twc.Checkout.Util.showStatusBubble(
			$serviceDetailsWrapper,
			'Updating...', {
				'verticallyCenterOn': '40',
				'cssClass': 'status-bubble-new-services-loading'
			}
		);
		$.ajaxQueue( {
			method: 'post',
			url: Twc.Settings.ajaxUrls.UpdateUpsellItem,
			data: actionData
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			console.log( actionData );
			Twc.Checkout.Util.removeStatusBubble( $serviceDetailsWrapper );
			blueButton.removeClass( 'disabled' );
			handleAjaxError( errorThrown );
		} ).done( function( data ) {
			var button = $button;
			var buttonSpan = $( event.target );
			if ( !buttonSpan.hasClass( 'upsell-button-text' ) ) {
				buttonSpan = buttonSpan.find( '.upsell-button-text' );
			}
			getServiceDetails( data, button, buttonSpan, blueButton, updateUpsellButton );
		} );
		return false;
	} );

	function updateUpsellButton( button, buttonSpan, blueButton ) {
		var $button = button;
		blueButton.removeClass( 'disabled' );

		if ( $button.hasClass( 'remove-button' ) ) {
			$button.removeClass( 'remove-button' );
			moveToFirstNewItemHighlighted( $( '.services-details' ) );
			buttonSpan.html( $( '.upsell-button-add' ).val() );
		} else {
			$button.addClass( 'remove-button' );
			moveToFirstNewItemHighlighted( $( '.highlight-upsell:first' ) );
			buttonSpan.html( $( '.upsell-button-remove' ).val() );
		}
	}

	function moveToFirstNewItemHighlighted( div ) {
		window.setTimeout( function() {
			$( 'html, body' ).animate( {
				scrollTop: div.offset().top
			}, 200 );
		}, 100 );
	}

	//ajax call to validate that there are items in the cart
	function validateCartNotEmpty() {
		$nextPageButton.addClass( 'disabled' );
		Twc.Checkout.Loading.show();
		$.ajaxQueue( {
				url: Twc.Settings.ajaxUrls.StartCheckout,
				dataType: 'json',
				type: 'post',
				data: {}
			} )
			.done( function( data, textStatus, jqXHR ) {
				try {
					if ( data !== null && data.result != "failure" ) {
						//nav to next page functionality
						window.location.href = $nextPageButton.attr( 'href' );
					} else {
						Twc.Checkout.Loading.hide();
						$.cookie( 'emptyCart', null, {} ); // set cookie in order to know not to trigger the empty cart modal
						//open a modal that redirects to the current services page
						showEmptyCartModal();
					}
				} catch ( e ) {
					Twc.Checkout.Util.catchError( e );
				}
			} )
			.fail( function( jqXHR, textStatus, errorThrown ) {
				if ( textStatus !== 'abort' ) {
					Twc.Checkout.Util.catchError( errorThrown );
					Twc.Checkout.Util.showErrorMessage( errorThrown );
				}
				$nextPageButton.removeClass( 'disabled' );
				Twc.Checkout.Loading.hide();
			} )
			.always( function() { // ajax completed; clean up any preventions
			} );
	}


	function showEmptyCartModal() {
		var currentServicesURL = Twc.Settings.currentServicesURL;
		var modalOptions = {
			message: Twc.Settings.messages.cartEmpty,
			title: 'Cart Empty',
			isError: true,
			height: Twc.Settings.errorModalAltHeight,
			confirmCallBack: function() {
				Twc.Checkout.Modal.redirect( currentServicesURL );
			},
			closeCallBack: function() {
				Twc.Checkout.Modal.redirect( currentServicesURL );
			}
		}
		Twc.Checkout.Modal.modalFactory( modalOptions );
	}


	$timeDropdowns.change( function( e ) {
		var pageValid = validatePage( true );
		if ( pageValid ) {
			updateInstallationOptions();
		}
	} );

	// when users change installation option, update cart and display below
	$optionRowRadios.change( function() {
		clearErrors();
		resetDatePickers();
		enableNextPageButton( true );

		updateInstallationOptions();
	} );

	// configure the date scheduling section if present on page
	if ( $sectionSchedule.length === 1 ) {
		function evalScheduleRadioUI() {
			if ( isSplitInstallSelected() ) { // split install
				$scheduleHeaders.eq( 0 ).html( 'Installation 1: TV and/or Internet Service' );
				$scheduleHeaders.eq( 1 ).html( 'Installation 2: Phone Service' );
				$secondServiceCalendar.slideDown( Twc.Settings.accordianSlideDuration, Twc.Settings.accordianSlideEasing );
			} else { // single install
				$scheduleHeaders.eq( 0 ).html( 'Installation: All Services' );
				$secondServiceCalendar.slideUp( Twc.Settings.accordianSlideDuration, Twc.Settings.accordianSlideEasing );
			}
		}


		/** Date selection callback. Update the adjacent times
		 * @param i {Integer} index position of the group
		 * @param val {String} value of the date selection
		 */
		function cbDateSelect( i, val ) {
			var dateInt = Twc.Checkout.Util.getDateInt( new Date( val ) );
			var timeSlots = getScheduleData( i ).times[ dateInt ];
			var $dropdown = $timeDropdowns.eq( i );

			if ( $dropdown.hasClass( 'invisible' ) ) { // prevent unnecessary fade out
				$dropdown.hide();
			}
			$dropdown.fadeOut( function() {
				var $me = $( this );
				$me.empty().removeAttr( 'disabled' ).removeClass( 'invisible' );
				// build the time slots
				$me.append( '<option value="">Select Time...</option><option value=""></option>' );
				for ( var i = 0; i < timeSlots.length; i++ ) {
					var timeSlot = timeSlots[ i ];
					var timeCode = timeSlot[ 2 ] || ''; // this may or may not be provided.  fail-safing to send blank value
					var option = '<option value="' + timeSlot[ 0 ] + ',' + timeSlot[ 1 ] + ',' + timeCode + '">' + Twc.Checkout.Util.getTimeRangeString( timeSlot[ 0 ], timeSlot[ 1 ] ) + '</option>';
					$me.append( option );
				}

				$me.fadeIn();
			} );
		}


		var singleCalendarData; // ajax data
		var splitCalendarData; // ajax data

		var $scheduleHeaders = $sectionSchedule.find( '.date h5' );

		log( 'PageInit.order_review(): ajax call for split_install:false...' );
		singleCalendarData = $( "#singleVisitDatesJson" ).data( 'single-visit-json' );
		log( 'PageInit.order_review(): ajax call for split_install:false DONE' );
		scheduleData[ 0 ] = buildScheduleData( singleCalendarData.installationDates, singleCalendarData.installationDatesLob );


		if ( isSplitInstall() ) {
			log( 'PageInit.order_review(): ajax call for split_install:true...' );
			splitCalendarData = $( "#splitVisitDatesJson" ).data( 'split-visit-json' );
			log( 'PageInit.order_review(): ajax call for split_install:true  DONE' );
			scheduleData[ 1 ] = buildScheduleData( splitCalendarData.installationDates, splitCalendarData.installationDatesLob );
			scheduleData[ 2 ] = buildScheduleData( splitCalendarData.splitInstallDates, splitCalendarData.splitInstallDatesLob );
		}

		// run this here to set calendarOptions after previous ajax requests complete
		evalScheduleRadioUI();

		// configure single/split install radio buttons
		$sectionScheduleRadios.each( function( i ) {
			var $radio = $( this );
			if ( i === 0 && $radio.is( ':checked' ) ) {
				$secondServiceCalendar.hide().removeClass( 'hidden' );
			}

			$radio.click( function() {
				$secondServiceCalendar.stop( true, true );
				resetDatePickers();
				clearErrors();
				evalScheduleRadioUI();
			} );
		} );


		// configure date picker calendar interactivity
		$dateBoxes.each( function( i ) {
			var $dateBox = $( this );

			$dateBox.focus( function() {
				$( this ).trigger( 'blur' ); // hide software keyboard on mobile devices
				var thisScheduleData = getScheduleData( i );
				thisScheduleData.calendarOptions[ 'onDateSelect' ] = function( val ) { // ['dateSelect'] prevents error in JSDoc
					cbDateSelect( i, val );
				}
				Twc.Calendar.show( $( this ), thisScheduleData.calendarOptions );
			} ).click( function( e ) {
				$dateBox.focus();
				e.preventDefault();
			} ).keydown( function( e ) { // disallow manual entry
				if ( e.keyCode !== 27 ) { // allow esc key
					e.preventDefault();
				}
			} );
		} )

		// datepicker buttons should trigger text boxes assuming 1:1 cardinality
		var $dateBoxButtons = $sectionSchedule.find( '.datepicker-link' );
		$dateBoxButtons.each( function( i ) {
			$( this ).click( function( e ) {
				$dateBoxes.eq( i ).focus();
				return false;
			} );
		} );

		resetDatePickers();
	}

	function buildScheduleData( installationDates, installationDatesLob ) {
		return {
			'calendarOptions': getCalendarOptions( installationDates ),
			'lob': installationDatesLob,
			'times': installationDates.timesAvailable
		}
	}

	// @dateBoxIndex is 0-3, representing one of the 4 maximum date boxes on page
	function getScheduleData( dateBoxIndex ) {
		if ( isSplitInstallSelected() ) { // split install
			return ( dateBoxIndex < 2 ) ? scheduleData[ 1 ] : scheduleData[ 2 ]; // dateBoxes(0,1) first installation : dateBoxes (2,3) second installation
		} else { // single install
			return ( scheduleData[ 0 ] );
		}
	}

	// submits ajax POST to update state of installation options on page
	function updateInstallationOptions( isNextPageSubmission ) {
		try {
			log( 'PageInit.order_review(): updateInstallationOptions()' );

			var $selectedInstallationOption = $optionRowRadios.filter( ':checked' );
			var val = $selectedInstallationOption.val() || '';
			// tech visit selected, but isn't split install fix...
			if ( '1-46XHA' === val && !isSplitInstallSelected() ) val = '1-VZVI';

			Twc.Checkout.Util.showStatusBubble(
				$serviceDetailsWrapper,
				'Updating...', {
					'verticallyCenterOn': '40',
					'cssClass': 'status-bubble-new-services-loading'
				}
			);

			abortActiveAjaxRequests();

			// first, submit the data.  when that's done, update the display
			// Always show loading states until the ajax sequence completes.

			var installationInfo = {
				'install_option_id': val
			};

			// send additional data if schedule installation radio is checked.  Only send if isNextPageSubmission, which means the form is valid
			if ( validatePage( true ) && $optionRowRadioSchedule.is( ':checked' ) ) {

				var scheduleInfoList = new Array();

				$serviceCalendars.filter( ":visible" ).each( function( i ) {
					// set default values
					var hasDigitalCable = false;
					var hasHighSpeedData = false;
					var hasVoip = false;

					var thisScheduleData = getScheduleData( i * 2 ); // each $serviceCalendar iteration has 2 date boxes. target first date box;

					// override if provided in AJAX
					if ( 'undefined' !== thisScheduleData.lob ) {
						hasDigitalCable = thisScheduleData.lob.digitalCable || hasDigitalCable;
						hasHighSpeedData = thisScheduleData.lob.highSpeedData || hasHighSpeedData;
						hasVoip = thisScheduleData.lob.voip || hasVoip;
					}

					var scheduleInfo = {};
					scheduleInfo[ 'linesOfBusiness' ] = {
						"digitalCable": hasDigitalCable,
						"highSpeedData": hasHighSpeedData,
						"voip": hasVoip
					};

					var installChoices = [ 'installFirstChoice', 'installSecondChoice' ];
					for ( var c = 0; c < installChoices.length; c++ ) {
						// date sent should be in format: YYYY-MM-DD
						var dateString = Twc.Checkout.Util.getDateStringISO( new Date( $dateBoxes.eq( i * 2 + c ).val() ) );

						var timeString = $timeDropdowns.eq( i * 2 + c ).val() || '';
						var timeArry = timeString.split( ',' );

						var timeStart = timeArry[ 0 ] || '';
						var timeEnd = timeArry[ 1 ] || '';
						var timeCode = timeArry[ 2 ] || '';

						var installChoiceData = {
							"scheduleDate": dateString,
							"scheduleStartTime": timeStart,
							"scheduleEndTime": timeEnd
						};
						if ( timeCode !== '' ) {
							installChoiceData[ 'timeSlotCode' ] = timeCode;
						}
						scheduleInfo[ installChoices[ c ] ] = installChoiceData;
					}

					scheduleInfoList[ i ] = scheduleInfo;
				} );

				installationInfo[ 'schedule_info_list' ] = JSON.stringify( scheduleInfoList );
			}

			ajaxRequestSubmitInstallationOption = $.ajax( {
					url: Twc.Settings.ajaxUrls.UpdateInstallationOptions,
					method: 'post',
					dataType: "json",
					data: installationInfo
				} )
				.fail( function( jqXHR, textStatus, errorThrown ) {
					if ( textStatus !== 'abort' ) {
						handleAjaxError( errorThrown );
					}
				} )
				.done( function( data, textStatus, jqXHR ) {
					if ( isNextPageSubmission ) { // go to next page. keep loading status bubble
						navigateToNextPage();
					} else {
						getServiceDetails( data );
					}
				} );
		} catch ( e ) {
			Twc.Checkout.Util.catchError( e );
		}
	}

	function getServiceDetails( data, button, buttonSpan, blueButton, updateButtonCallback ) { // update the serviceDetails info
		if ( data !== null && data.result != "failure" ) { // run the view refresh ajax request
			ajaxRequestRefreshServiceDetails = $.ajax( {
					url: Twc.Settings.ajaxUrls.GetServiceDetails
				} )
				.fail( function( jqXHR, textStatus, errorThrown ) {
					if ( textStatus !== 'abort' ) {
						handleAjaxError( errorThrown );
					}
					if ( button ) {
						updateButtonCallback( button, buttonSpan, blueButton );
					}
				} )
				.done( function( data, textStatus, jqXHR ) {
					Twc.Checkout.Util.removeStatusBubble( $serviceDetailsWrapper );
					$serviceDetailsWrapper.html( data );
					if ( button ) {
						updateButtonCallback( button, buttonSpan, blueButton );
					}
					Twc.Checkout.Tooltip.init( $( 'a.tooltip' ) );
				} );
		} else {
			handleAjaxError( new Error( 'Failed to update install options' ) );
			if ( button ) {
				updateButtonCallback( button, buttonSpan, blueButton );
			}
		}
	}

	/**
	 * returns true if page is valid. false if errors exist
	 * @param [supressErrorMessageDisplay] if true, don't show error messages/states on page
	 * @author McGowan
	 */
	function validatePage( supressErrorMessageDisplay ) {
		if ( $optionRowRadioSchedule.is( ':checked' ) ) { // validation only needed on this installation option section
			var errors = [];
			if ( !supressErrorMessageDisplay ) {
				$dateLabels.removeClass( 'error' );
			}

			// we're either validating 2 or 4 dates, depending on split install
			var totalDates, dateErrorLabels;

			if ( $sectionScheduleRadios.eq( 1 ).is( ':checked' ) ) {
				totalDates = 4;
				dateErrorLabels = [ 'Installation 1 First Choice', 'Installation 1 Second Choice', 'Installation 2 First Choice', 'Installation 2 Second Choice' ];
			} else {
				totalDates = 2;
				dateErrorLabels = [ 'Your First Choice', 'Your Second Choice' ];
			}

			var dateVals = [];
			var timeVals = [];

			// set date/time vals and show errors for blank values
			for ( var i = 0; i < totalDates; i++ ) {
				dateVals.push( $.trim( $dateBoxes.eq( i ).val() ) );
				timeVals.push( $.trim( $timeDropdowns.eq( i ).val() ) );

				if ( dateVals[ i ] === '' || timeVals[ i ] === '' ) {
					errors.push( dateErrorLabels[ i ] + ': please select a date and time' );
					if ( !supressErrorMessageDisplay ) {
						$dateLabels.eq( i ).addClass( 'error' );
					}
				}
			}

			// loop sequence for matrix comparison.  show errors for duplicate values, comparing one date/time against another date/time (compare variables first vs second)
			var equalValErrors = {}; // tracks errors added for equal values
			for ( var first = 0; first < totalDates - 1; first++ ) {
				for ( var second = first + 1; second < totalDates; second++ ) {
					// only compare if dates/times if all are not blank.  Blank errors already caught above
					if ( dateVals[ first ] !== '' && dateVals[ second ] !== '' && timeVals[ first ] !== '' && timeVals[ second ] !== '' ) {
						if ( dateVals[ first ] === dateVals[ second ] && timeVals[ first ] === timeVals[ second ] ) {
							if ( !supressErrorMessageDisplay ) {
								$dateLabels.eq( first ).addClass( 'error' );
								$dateLabels.eq( second ).addClass( 'error' );
							}
							equalValErrors[ first.toString() ] = dateErrorLabels[ first ] + ' must be different than other chosen dates/times.'
							equalValErrors[ second.toString() ] = dateErrorLabels[ second ] + ' must be different than other chosen dates/times.'
						}
					}
				}
			}
			for ( var key in equalValErrors ) {
				var msg = equalValErrors[ key ];
				if ( 'string' === typeof msg ) {
					errors.push( msg )
				}
			}

			if ( !supressErrorMessageDisplay ) {
				// sort errors to group installation 1 and installation 2 messages together
				errors.sort();

				Twc.Checkout.Util.showHideInlineErrorList( $sectionScheduleErrors, errors );
			}
			return errors.length === 0;
		} else { // no validation needed on other installation option sections
			return true;
		}
	}

	function isSplitInstall() {
		return $sectionSchedule.find( '.num-visits' ).length > 0;
	}

	function isSplitInstallSelected() {
		return $sectionScheduleRadios.eq( 1 ).is( ':checked' );
	}

	function getInstallOption() {
		var installOption = $( '.installation-options input.radio.installation:checked' ).data( 'name' );
		if ( installOption ) {
			return installOption.toLowerCase();
		} else {
			return null;
		}
	}

	function navigateToNextPage() {
		Twc.Analytics.dispatch( 'reviewOrderComplete', getInstallOption(), isSplitInstallSelected() );
		upsellBannersAnalytics();
		//put ajax validation call here
		validateCartNotEmpty();
	}

	// Upsell banners analytics on page transitioning
	function upsellBannersAnalytics() {
		var leftBannerInCart = $( '.left-banner .remove-button' );
		var rightBannerInCart = $( '.right-banner .remove-button' );
		var productString;
		var offerName;
		var offerId;
		if ( leftBannerInCart.length && rightBannerInCart.length ) {
			offerId = $( '.left-banner' ).find( $upsellButton ).data( 'selection-id' ) + '||' + $( '.right-banner' ).find( $upsellButton ).data( 'selection-id' );
			productString = ';' + offerId.trim() + '||' + $rightUpsellBannerDesc.text() + '||' + $leftUpsellBannerDesc.text() + ';;;;eVar46=a la carte';
			offerName = 'review banner 1--' + $rightUpsellBannerDesc.text() + ' : review banner 2--' + $leftUpsellBannerDesc.text();
		} else if ( rightBannerInCart.length || leftBannerInCart.length ) {
			offerId = rightBannerInCart.length ? $( '.right-banner' ).find( $upsellButton ).data( 'selection-id' ) : $( '.left-banner' ).find( $upsellButton ).data( 'selection-id' );
			productString = ';' + offerId.trim() + '||' + ( rightBannerInCart.length ? $rightUpsellBannerDesc.text() : $leftUpsellBannerDesc.text() ) + ';;;;eVar46=a la carte';
			offerName = 'review banner 1--' + ( rightBannerInCart.length ? $rightUpsellBannerDesc.text() : $leftUpsellBannerDesc.text() );
		}
		Twc.Analytics.Dispatchable.Cart.addCartUpsellItem( offerName, productString );
	}

	function handleAjaxError( errorThrown ) {
		// require users to select again before continuing
		$serviceDetailsWrapper.empty();
		$optionRowRadios.prop( 'checked', false ); // force users to choose a radio
		$optionRows.removeClass( 'active' );
		enableNextPageButton( false );

		Twc.Checkout.Util.removeStatusBubble( $serviceDetailsWrapper );
		Twc.Checkout.Util.catchError( errorThrown );
		Twc.Checkout.Util.showErrorMessage( errorThrown );
	}


	function abortActiveAjaxRequests() {
		if ( ajaxRequestSubmitInstallationOption && ajaxRequestSubmitInstallationOption.abort ) {
			ajaxRequestSubmitInstallationOption.abort();
		}
		if ( ajaxRequestRefreshServiceDetails && ajaxRequestRefreshServiceDetails.abort ) {
			ajaxRequestRefreshServiceDetails.abort();
		}
	}

	function enableNextPageButton( enabled ) {
		$nextPageButton.toggleClass( 'disabled', !enabled );
	}

	// clear/reset all errors for all sections
	function clearErrors() {
		$sectionScheduleErrors.hide().find( 'ul' ).empty().addClass( 'invisible' );
		$sectionSchedule.find( '.error' ).removeClass( 'error' );
	}

	// resets the date picker values and such
	function resetDatePickers() {
		$dateBoxes.val( '' );
		$timeDropdowns.find( 'option' ).remove();
		$timeDropdowns.attr( 'disabled', 'disabled' ).addClass( 'invisible' );
	}

	// returns calendar options to be used by calendar plugin. parses the ajaxData usedto generate Calendar.Options
	function getCalendarOptions( installationDatesAjaxData ) {
		var installationDates = installationDatesAjaxData;
		// translate the JSON into the format for the calendar
		var calendarOptions = new Twc.Calendar.Options();
		calendarOptions.dateToday = installationDates.dateToday; // use server-side date
		calendarOptions.appendToSelector = '.solid-column'; // position within here to protect position from window changes
		calendarOptions.excludePreviousMonthNav = 1;
		calendarOptions.restrictToDatesAvailable = 1;
		calendarOptions.restrictToLastDateAvailable = 1;
		calendarOptions.datesAvailable = {};

		// when setting, don't duplicate the entire object, only the keys. ensure each date has times within it
		var sortedDates = [];
		for ( var key in installationDates.timesAvailable ) {
			var timeSlots = installationDates.timesAvailable[ key ];
			if ( timeSlots.length > 0 ) {
				calendarOptions.datesAvailable[ key ] = 1;
				sortedDates.push( key );
			}
		}
		sortedDates.sort();

		if ( sortedDates.length > 0 ) {
			calendarOptions.lastDateAvailable = sortedDates[ sortedDates.length - 1 ];
		}

		return calendarOptions;
	}
}

/**
 * Initializes Order Summary page
 * @author Sir Armstrong of the Cubes
 *
 */
Twc.PageInit.order_summary = function() {
	log( 'PageInit.order_summary()' );

	if ( Modernizr && Modernizr.localstorage && !Twc.Checkout.Util.isIE8OrLower() ) {
		localStorage.setObject( 'cartPersist', null );
	}

	Twc.Components.InputButton.init( $( '.blue-button' ) );

	var $termsForm = $( '#js-terms-form' );
	var $termsRadio = $termsForm.find( 'input' );
	var $submitOrderSummaryForm = $( '#js-ordersummary-form' );
	var $nextButton = $( '.js-next-button' );
	var $termsErrorDiv = $( '.terms-and-conditions' ).find( '.error-module' );

	//Always enable the CTA for this page
	$nextButton.removeClass( 'disabled' );

	if ( $submitOrderSummaryForm.length !== 1 || $termsForm.length !== 1 ) {
		error( 'PageInit.order_summary(): required elements not found' );
	}

	// birth-day should only show maximum days based on birth-month
	var $birthMonth = $( '#birth-month' ).change( adjustBirthMonthDays );
	var $birthDay = $( '#birth-date' );
	var maxDaysPerMonth = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

	function adjustBirthMonthDays() {
		if ( $birthMonth.size() === 1 && $birthDay.size() === 1 ) {
			var month = parseInt( $birthMonth.val(), 10 ) || -1; // 1-12
			var maxDays = maxDaysPerMonth[ month - 1 ] || 31; // default to 31

			// redraw all days but preserve the day selected before redraw
			var selectedDayVal = $birthDay.val() || '';
			$birthDay.find( 'option' ).remove();
			$birthDay.append( '<option value="dd">Day</option>' );
			for ( var d = 1; d <= maxDays; d++ ) {
				var selected = ( selectedDayVal == d ) ? 'selected="selected"' : '';
				$birthDay.append( '<option ' + selected + ' value="' + d + '">' + d + '</option>' );
			}
		}
	}
	adjustBirthMonthDays();

	// set form to <a> value
	$submitOrderSummaryForm.attr( 'action', $nextButton.attr( 'href' ) );

	$nextButton.click( function() {
		// Complete Terms and Cond Authorization
		submitTerms( 'summaryTerms', Twc.Settings.ajaxUrls.UpdatePhoneAuth, $termsForm, $termsErrorDiv, function() {
			$submitOrderSummaryForm.submit();
		} );
		return false;
	} );

	//STore Ajax requests
	var ajaxRequests = {};


	// ajax submits  runs a callback function if valid
	function submitTerms( ajaxRequestKey, ajaxUrl, $form, $errorDiv, isValidCallback ) {
		// cancel previous ajax request and start new one
		if ( ajaxRequests[ ajaxRequestKey ] && ajaxRequests[ ajaxRequestKey ].abort ) {
			ajaxRequests[ ajaxRequestKey ].abort();
		}
		Twc.Checkout.Loading.show();
		ajaxRequests[ ajaxRequestKey ] = $.ajax( {
			'url': ajaxUrl,
			'type': 'post',
			'data': $( '#js-terms-form, #js-phone-form' ).serialize()
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			if ( textStatus !== 'abort' ) {
				//Clear the error status
				$termsErrorDiv.hide().find( 'ul' ).empty().addClass( 'invisible' );
				$termsForm.find( '.error' ).removeClass( 'error' );

				//uncheck the box and make them do it again. 
				$termsRadio.prop( 'checked', false );

				Twc.Checkout.Util.catchError( errorThrown );
				Twc.Checkout.Util.showErrorMessage( errorThrown );
				Twc.Checkout.Loading.hide();
			}
		} ).done( function( data ) {
			var formValidation = data.formValidation || {};
			var errorList = [];

			// remove error labels
			$form.find( '.error' ).removeClass( 'error' );

			var formIsValid = formValidation.isValid === true;
			if ( formIsValid ) {} else { // errors in form
				for ( key in formValidation.errors ) { // grab errors only, not keys
					var o = formValidation.errors[ key ];
					if ( typeof o === 'string' ) { // only add strings
						errorList.push( unescape( o ) );
						// set the field fieldset with error
						$form.find( '#' + key ).parents( 'fieldset:eq(0)' ).addClass( 'error' );
					}
				}
				Twc.Checkout.Loading.hide();
			}

			Twc.Checkout.Util.showHideInlineErrorList( $errorDiv, errorList );
			if ( formIsValid ) {
				isValidCallback();
			}
		} ).always( function() {
			ajaxRequests[ ajaxRequestKey ] = null;
		} );
	}
}

/**
 * Initializes Your Services page
 * @author McGowan
 *
 */
Twc.PageInit.your_services = function() {
	log( 'PageInit.your_services()' );

	if ( $.cookie( 'emptyCart' ) ) {
		$.removeCookie( 'emptyCart' );
	} else {
		// If !CQ.utils, than it means we are on a publish instance.  If we have these namespaces, and we are in preview, also clear cart
		if ( !CQ.utils || ( CQ.utils.WCM && !CQ.utils.WCM.isEditMode() ) ) {
			var cartActionType = "none";
			Twc.Checkout.CSSCall.clearCart( cartActionType );
		}
	}

	Twc.Components.InputButton.init( $( '.blue-button' ) );
	Twc.Components.ViewMore.initObjects( $( '.details' ) );

	var $form = $( '#js-main-form' );
	var $nextButton = $form.find( '.js-next-button' );
	var $checkboxes = $form.find( 'input[type=checkbox]' );

	//analytics for view available packages
	$( '.choosePackages .js-next-button' ).click( function() {
		Twc.Analytics.dispatch( 'nextPageTransition', $( this ) );
	} );

	//setup analytics for modals
	$form.find( 'a.modal' ).click( function() {
		Twc.Analytics.dispatch( 'compareModal', $( this ).data( 'lob' ), 'current services', 'plans' );
	} );

	//setup analytics for schwoop
	$form.find( 'a.view-toggle' ).click( function() {
		Twc.Analytics.dispatch( 'viewMoreOpen', 'current services', $( this ).data( 'lob' ) );
	} );


	if ( $form.length !== 1 || $checkboxes.length === 0 ) {
		error( 'PageInit.your_services(): required elements not found' );
	}

	// set form to <a> value
	$form.attr( 'action', $nextButton.attr( 'href' ) );

	$checkboxes.change( function() {
		validatePage();
		if ( this.checked ) {
			Twc.Analytics.dispatch( 'currentServicesSelect', $( this ) );
		}
	} );

	$nextButton.click( function() {

		// conditionally add current LoS to cart if customize (but not select) checked
		if ( !$nextButton.hasClass( 'disabled' ) ) {
			Twc.Checkout.Loading.show();
			var $cust = $( '[name=customize_tv]' );
			if ( $cust.is( ':checked' ) && !$( '[name=upgrade_tv]' ).is( ':checked' ) ) {
				addCustomizeOffer( $cust );
			}

			$cust = $( '[name=customize_inet]' );
			if ( $cust.is( ':checked' ) && !$( '[name=upgrade_inet]' ).is( ':checked' ) ) {
				addCustomizeOffer( $cust );
			}

			$cust = $( '[name=customize_phone]' );
			if ( $cust.is( ':checked' ) && !$( '[name=upgrade_phone]' ).is( ':checked' ) ) {
				addCustomizeOffer( $cust );
			}
			$form[ 0 ].submit( function() {
				Twc.Checkout.Loading.hide();
			} );
		}
		return false;
	} );

	function addCustomizeOffer( $el ) {
		log( "CustomizeOnly -" + $el.data( 'name' ) );
		var offerId = $el.data( 'curr-los' );
		if ( offerId !== "" && offerId !== "NOTFOUND" )
			Twc.Checkout.CSSCall.addOfferToCart( offerId );
	}

	function enableNextButton( enabled ) {
		$nextButton.toggleClass( 'disabled', !enabled );
	}

	// disable nextButton unless a checkbox is checked
	function validatePage() {
		enableNextButton( false );
		$checkboxes.each( function() {
			if ( this.checked ) {
				enableNextButton( true );
				return false;
			}
		} );
	}

	// run initial validation
	validatePage();
}

/** Date Picker Calendar to show users a month and choose a date
 * @namespace
 * @author McGowan
 */
Twc.Calendar = ( function() {
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

	/** Tracks if the esc key handler has already been bound
	 */
	var escKeyBound = false;

	/** Tracks when a calender is active/shown or not.
	 */
	var calendarActive = false;

	/** Input box related to calendar displayed
	 * @author McGowan
	 */
	var $currentInputBox = null;

	/** Current date what we're showing.  Mainly deals with Month
	 * @author McGowan
	 */
	var currentDate = null;

	/** Current date the user selected or previously selected
	 * @author McGowan
	 */
	var currentDateSelected = null;

	/** @author McGowan
	 * Sets the appropriate Unicode arrow keys based on IE or not
	 * @returns{Array} {left, right}
	 */
	var arrowChars = ( Modernizr.ie7 || Modernizr.ie8 || Modernizr.ie9 ) ? {
		'prev': "&#9668;",
		'next': "&#9658;"
	} : {
		'prev': "&#9664;",
		'next': "&#9654;"
	};

	/** @author McGowan
	 * Binds escape key to closeAll() to quickly close the calendar.  Prevents duplicate binding and only runs if calendarActive
	 */
	function bindEscapeKey() {
		if ( escKeyBound ) return;

		$( document ).keyup( function( e ) {
			if ( e.keyCode === 27 ) // escape
				if ( calendarActive ) {
				Twc.Calendar.closeAll();
			}
		} );
		escKeyBound = true;
	}


	/** updates a calendar with the month and dates for that month.  If options.datesAvailable are provided, calendar restricts display to only show those months
	 * @author McGowan
	 * @param $container{Object} Calender container to write to
	 * @param options {Object} {@link Twc.Calendar.Options}
	 */
	function writeMonth( $cal, options ) {
		var todayDate = Twc.Checkout.Util.getDate( options.dateToday );
		if ( 'undefined' === typeof todayDate || isNaN( todayDate.getTime() ) ) { // revert to computer clock if options date failed
			todayDate = new Date();
		}

		var $calMonth = $cal.find( '.calendar-month' );

		$calMonth.html( monthNames[ currentDate.getMonth() ] + ' ' + currentDate.getFullYear() );
		var $calDays = $cal.find( '.calendar-month-dates' ).html( '' );

		// the date we'll use to output. Set to the first of the month
		var writeDate = new Date( currentDate.getFullYear(), currentDate.getMonth(), 1, 0, 0, 0, 0 );
		var writeDay = writeDate.getDay();

		// hide prev month nav if settings dictate. Always allow users to navigate back to current month
		var $prevMonthButton = $cal.find( '.calendar-button-prev' );
		if ( options.excludePreviousMonthNav && (
				writeDate.getFullYear() < todayDate.getFullYear() ||
				( writeDate.getFullYear() === todayDate.getFullYear() && writeDate.getMonth() <= todayDate.getMonth() ) ) ) {
			$prevMonthButton.hide();
		} else {
			$prevMonthButton.show();
		}

		// hide next month nav if settings dictate.  Always allow users to navigate forward to current month
		var $nextMonthButton = $cal.find( '.calendar-button-next' );
		if ( options.restrictToLastDateAvailable && ( writeDate.getFullYear() >= todayDate.getFullYear() ) ) {
			$nextMonthButton.hide();

			var lastDateAvailable = Twc.Checkout.Util.getDate( options.lastDateAvailable );
			if ( 'undefined' !== typeof( lastDateAvailable ) ) {
				if ( writeDate.getFullYear() < lastDateAvailable.getFullYear() ) {
					$nextMonthButton.show();
				} else if ( writeDate.getFullYear() == lastDateAvailable.getFullYear() && writeDate.getMonth() < lastDateAvailable.getMonth() ) {
					$nextMonthButton.show();
				}
			}
		} else {
			$nextMonthButton.show();
		}

		// before iterating, adjust the day so that we're writing starting at Sunday of the current week, or sunday of prev week if we're on a sunday
		writeDate.setDate( writeDay == 0 ? -6 : ( -writeDay + 1 ) );


		// write up to 6 weeks of dates and break if writing a new week of the first week of third month
		var dayMarkup = '';
		var firstMonthDaysWritten = 0;
		for ( var d = 0; d < 42; d++ ) {
			if ( firstMonthDaysWritten === 2 && writeDate.getDay() === 0 ) {
				break;
			}
			if ( writeDate.getDate() === 1 ) {
				firstMonthDaysWritten++;
			}

			var classes = ''; // classes to append to <div>
			if ( currentDate.getMonth() !== writeDate.getMonth() ) {
				classes += ' out'
			}; // flag dates outside of current month
			if ( d > 0 && writeDate.getDay() === 0 ) {
				classes += ' newline'
			}; // write a new line for week

			// flag unavailable dates
			if ( options && options.restrictToDatesAvailable ) {
				if ( !options.datesAvailable[ Twc.Checkout.Util.getDateInt( writeDate ) ] ) {
					classes += ' day-unavail';
				}
			}
			//if (writeDate.getDay() == 0 || writeDate.getDay() == 6) {classes+=' day-unavail';}


			if ( currentDateSelected != null && writeDate.getFullYear() === currentDateSelected.getFullYear() // flag current date selected by user
				&& writeDate.getMonth() === currentDateSelected.getMonth() && writeDate.getDate() === currentDateSelected.getDate()
			) {
				classes += ' day-selected';
			}
			if ( writeDate.getFullYear() === todayDate.getFullYear() // flag today's date
				&& writeDate.getMonth() === todayDate.getMonth() && writeDate.getDate() === todayDate.getDate()
			) {
				classes += ' day-today';
			}

			// set rel and don't use JQuery.data() for performance reasons
			var dateVal = ( writeDate.getMonth() + 1 ) + '/' + writeDate.getDate() + '/' + writeDate.getFullYear();
			dayMarkup += '<div rel="' + dateVal + '" class="day' + classes + '">' + writeDate.getDate() + '</div>';
			writeDate.setHours( 24 ); // increment by one day
		}
		$calDays.append( dayMarkup );
	}

	/** Callback for when users click the date wrapper.  detects which date was clicked and fires function if specified in Options
	 * @author McGowan
	 * @param e{Event} event of click
	 * @param options {Object} {@link Twc.Calendar.Options}
	 */
	function cbDateClick( e, options ) {
		var $dateEl = $( e.target );
		if ( $dateEl.is( '.day-unavail' ) ) {
			return;
		}
		var dateVal = $dateEl.attr( 'rel' );
		$( '.calendar-month-dates .day' ).removeClass( 'day-selected' );
		$dateEl.addClass( 'day-selected' );

		// delay closing so users see date selected
		window.setTimeout( function() {
			$currentInputBox[ 0 ].value = dateVal;
			Twc.Calendar.closeAll();

			if ( 'function' === typeof options.onDateSelect ) {
				options.onDateSelect( dateVal );
			}
		}, Twc.Settings.dateSelectionHideDelay );
	}

	return {

		/** @returns {Boolean} indicates if the calendar is active
		 */
		isActive: function() {
			return calendarActive;
		},

		/** Shows a calendar popup, pre-populates date if one is present in @inputBox.  Upon date selection, sets @inputBox value or the current date provided in options
		 * @author McGowan
		 * @param inputBox {Object} This box will be populated with date value upon selction in mm/dd/yyyy format.  Pre-selects calendar with
		 * this date if one exists
		 * @param [options] provide an object identical to {@link Twc.Calendar.Options} to override default options
		 */
		show: function( inputBox, options ) {
			try {
				options = options || new Twc.Calendar.Options();

				var $appendTo = $( options.appendToSelector );
				if ( $appendTo.length === 0 ) {
					error( "Empty appendToSelector element: " + options.appendToSelector );
					return;
				}

				// get top/left positions of that we're appending to
				var appendToLeft = $appendTo.offset().left;
				var appendToTop = $appendTo.offset().top;

				Twc.Calendar.closeAll();
				bindEscapeKey();
				calendarActive = true;

				// set global vars
				$currentInputBox = $( inputBox );
				var dateVal = $.trim( $currentInputBox[ 0 ].value );

				// set to today's date if no date is set
				currentDate = new Date( dateVal );
				if ( 'undefined' === typeof( currentDate ) || isNaN( currentDate.getTime() ) ) { // get date from input box or set to current date in options
					currentDate = Twc.Checkout.Util.getDate( options.dateToday );
				}
				if ( 'undefined' === typeof( currentDate ) || isNaN( currentDate.getTime() ) ) { // last-resort, set to date of user's computer/browser
					currentDate = new Date();
				}

				currentDateSelected = new Date( currentDate );

				var $calOverlayOrig = $( '<div class="calendar-overlay-bkg"></div>' );
				var $calOrig = $( '<div class="calendar clearfix"><div class="calendar-nav clearfix"><div class="calendar-button-month calendar-button-prev">' + arrowChars.prev + '</div><span class="calendar-month"></span><div class="calendar-button-month calendar-button-next">' + arrowChars.next + '</div><div class="calendar-day-labels clearfix"><div class="day">Sun</div><div class="day">Mon</div><div class="day">Tue</div><div class="day">Wed</div><div class="day">Thu</div><div class="day">Fri</div><div class="day">Sat</div></div></div><div class="calendar-month-dates clearfix"></div></div>' );


				var $calOverlay = $calOverlayOrig.clone().click( function() {
					Twc.Calendar.closeAll();
				} );
				var $cal = $calOrig.clone();
				/* McGowan - for performance, bind clicks to the container of the days and not the actual days themselves.  Prevents DOM binding on each day,
				 * and month rendering on iPhone4 went from 75ms to 20ms (73% improvement)
				 */
				var $calDays = $cal.find( '.calendar-month-dates' ).click( function( e ) {
					e.preventDefault();
					cbDateClick( e, options );
				} );

				// position calendar near text box			
				var inputLeft = $currentInputBox.offset().left;
				var inputBottom = $currentInputBox.offset().top + $currentInputBox.outerHeight( true ) + options.topPadding;
				$cal.css( {
					position: 'absolute',
					'left': inputLeft - appendToLeft + 'px',
					'top': inputBottom - appendToTop + 'px',
					'margin': 0
				} );

				function nextButton() {
					currentDate.setDate( 32 ); // set to next month
					writeMonth( $cal, options );
				}

				function prevButton() {
					currentDate.setDate( 0 ); // set to prev month
					writeMonth( $cal, options );
				}

				// bind button actions
				var $buttonPrev = $cal.find( '.calendar-button-prev' ).click( function( e ) {
					e.preventDefault();
					e.stopPropagation();
					prevButton();
				} );
				var $buttonNext = $cal.find( '.calendar-button-next' ).click( function( e ) {
					e.preventDefault();
					e.stopPropagation();
					nextButton();
				} );

				$appendTo.eq( 0 ).append( $calOverlay ).append( $cal );


				writeMonth( $cal, options );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}
		},

		/** @author McGowan
		 * Closes any open calendars
		 */
		closeAll: function() {
			$( '.calendar' ).remove();
			$( '.calendar-overlay-bkg' ).remove();

			// reset global vars
			calendarActive = false;
			$currentInputBox = null;
			currentDate = null;
			currentDateSelected = null;
		}
	}
}() );

/** These options should not be set here and should be overridden with "new Twc.Calendar.Options()"
 * @class
 * @author McGowan
 */
Twc.Calendar.Options = function() {
		return {

			/** Force Calendar to use date provided as the current date.  This overrides users' computer clock
			 * @type String "YYYYMMDD"
			 */
			dateToday: Twc.Checkout.Util.getDateInt( new Date() ),

			/** Don't allow navigation previous months relative to dateToday
			 * @type Boolean
			 */
			excludePreviousMonthNav: 0,

			/** Restrict date selections to those available. 
			 * @type Boolean
			 */
			restrictToDatesAvailable: 0,

			/** should have keys like YYYYMMDD and a boolean value at a minimum.  value is not used.
			 */
			datesAvailable: {},

			/** All users to navigate past the last available date?
			 * @type Boolean
			 */
			restrictToLastDateAvailable: 0,

			/** Provide YYYYMMDD to restrict navigation.  Pre-pouplated for performance and iteration prevention
			 */
			lastDateAvailable: null,


			/** callback for when users select date. see {@link Twc.Calendar} for what is passed
			 */
			onDateSelect: null,

			/** top padding between top of calendar and bottom of text box
			 * @type Number
			 */
			topPadding: 2,

			/**
			 * jQuery selector to which we'll append the calendar elements.  Increase specificity to position
			 * within a div that maintains position on page height/width changes.
			 */
			appendToSelector: 'body'
		}
	}
	/**
	 * Handles green/blue elements that have a checkbox or radio button within
	 * @namespace
	 * @author McGowan
	 */
Twc.Components.InputButton = ( function() {
	/**
	 * marker to indicate container was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-inputButton-initialized';

	// group of radio buttons to operate on
	var radioWrapperGroups = {};

	function set( $o, checked ) {
		if ( checked ) {
			$o.addClass( 'checked' );
		} else {
			$o.removeClass( 'checked' );
		}

		// mcgowan - uncomment below for proposed future implementation. REQUIRES CSS changes
		// var textNode = $o.contents()[0];
		// var label = checked? "Selected " : "Select ";
		// if (textNode && textNode.nodeValue) textNode.nodeValue = label;
	}

	return {
		/** initializes a group of objects for showing blue/green checkboxes/radios.  Prevents double initalization.
		 * @param $objects {Object} jQuery object to iterate over, instantiating each within it.
		 * @author McGowan
		 */
		init: function( $objects ) {
			try {
				if ( typeof $objects === 'undefined' || !( $objects instanceof jQuery ) ) {
					error( '$objects is not a jQuery object' );
					return;
				}

				$objects.each( function( i ) {
					var $this = $( this );

					if ( $this.hasClass( initializedClass ) ) {
						error( 'Object already initialized: ' + initializedClass );
						return true; // continue to next
					}

					var $checkbox = $this.find( 'input[type=checkbox],input[type=radio]' );
					if ( $checkbox.length != 1 ) {
						return true; // continue to next because we need a checkbox
					}

					// group all radio buttons for deselection when one is selected
					if ( 'radio' === $checkbox[ 0 ].type ) {
						var radioName = $checkbox[ 0 ].name;

						var $group = radioWrapperGroups[ radioName ];
						if ( 'undefined' === typeof( $group ) ) {
							radioWrapperGroups[ radioName ] = $this;
						} else {
							radioWrapperGroups[ radioName ] = $group.add( this );
						}
					}

					$checkbox.on( 'change', function() {
						// deselect radios with same name
						if ( 'radio' === this.type ) {
							var $radioGroup = radioWrapperGroups[ this.name ];
							if ( 'undefined' !== typeof $radioGroup ) {
								$radioGroup.removeClass( 'checked' );
							}
						}

						set( $this, this.checked )
					} );

					// set initial color
					set( $this, $checkbox[ 0 ].checked );
					$this.addClass( initializedClass );
				} );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}

		}
	}
} )();


/**
 * @namespace
 * @author McGowan
 * @deprecated Use Twc.Components.InputButton
 */
Twc.Components.Checkbox = ( function() {
	return {
		/**
		 * @author McGowan
		 * @deprecated Please use Twc.Components.InputButton.init();
		 */
		init: function( $objects ) {
			Twc.Components.InputButton.init( $objects );
		}
	}
} )();

/**
 * Manages functionality for expandable/collapsable table row within a table
 * @author McGowan
 * @namespace
 */
Twc.Components.TableRowExpander = ( function() {
	/** 
	 * marker to indicate container was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-table-expander-initialized';

	function setTextNodeValue( $isActiveTest, node, inactiveValue, activeValue ) {
		if ( node && node.nodeValue ) {
			if ( $isActiveTest.hasClass( 'active' ) ) {
				node.nodeValue = activeValue;
			} else {
				node.nodeValue = inactiveValue;
			}
		}
	}

	return {
		/** initializes a table.  Prevents double initalization.
		 * @author McGowan
		 * @param $tables {Object} jQuery object to iterate over, instantiating each table to show/hide the content within it
		 */
		initTable: function( $tables ) {
			try {
				if ( typeof $tables === 'undefined' || !( $tables instanceof jQuery ) ) {
					error( '$tables is not a jQuery object' );
					return;
				}
				$tables.each( function( t ) {
					var $table = $( this );
					if ( $table.hasClass( initializedClass ) ) {
						error( 'table already initialized: ' + initializedClass );
						return true; // continue to next
					}


					var $rows = $table.find( 'tbody > tr' );
					$rows.each( function( i ) {
						var $row = $( this );
						if ( i > 0 && $row.hasClass( 'details' ) ) {
							var $prevRow = $rows.eq( i - 1 );

							// set more/less text for the control button. default to Settings.js file
							var options = Twc.Checkout.Util.safeParseJson( $prevRow.attr( 'data-view-more' ) );

							var viewMore = options.viewMore || Twc.Settings.viewMore.moreHtml;
							var viewLess = options.viewLess || Twc.Settings.viewMore.lessHtml;

							var $rowToggle = $prevRow.find( '.js-toggle' );
							if ( $rowToggle.length > 0 ) {

								var toggleTextNode;
								$rowToggle.find( '.toggle-wrap' ).contents().each( function() {
									if ( this.nodeType === 3 ) { // text node
										toggleTextNode = this;
									}
								} );
								setTextNodeValue( $prevRow, toggleTextNode, viewMore, viewLess );


								$rowToggle.click( function( e ) {
									var $rowContent = $row.find( 'p' );
									if ( $prevRow.hasClass( 'active' ) ) { // close it

										// if the cart is floating, we must eavaluate it's position since the height is changing
										$rowContent.slideUp( {
											'duration': Twc.Settings.accordianSlideDuration,
											'step': Twc.Checkout.ShoppingCart.evalPosition,
											'complete': function() {
												$prevRow.removeClass( 'active' );
												setTextNodeValue( $prevRow, toggleTextNode, viewMore, viewLess );
											}
										} );
									} else { // open it
										$rowContent.hide(); // hide first to prep slide animation
										$prevRow.addClass( 'active' );
										setTextNodeValue( $prevRow, toggleTextNode, viewMore, viewLess );
										$rowContent.slideDown( {
											'duration': Twc.Settings.accordianSlideDuration,
											'step': Twc.Checkout.ShoppingCart.evalPosition
										} );
									}
									return false; // prevent anchor change <a>
								} );
							}
						}
					} );

					$table.addClass( initializedClass );
				} );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}
		}
	}
} )();
/**
 * Manages functionality content with tabs
 * @author McGowan
 * @namespace
 */
Twc.Components.Tabs = ( function() {
	/** 
	 * marker to indicate container was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-tabs-initialized';

	// the tabs users click
	var $tabs;

	// the content panels/sections for each tab
	var $tabSections;

	// Activate a specific tab, but not content
	function activateTab( i ) {
		$tabs.removeClass( 'active' ).eq( i ).addClass( 'active' );
	}

	// Activate specific tab content, but not the tab itself
	function activateTabSection( i, disableTabHeightAnimation ) {
		// don't animate container height changes if not in desktop
		if ( disableTabHeightAnimation || Twc.Breakpoint.which() !== 'desktop' ) {
			$tabSections.removeClass( 'active' ).eq( i ).addClass( 'active' );
			Twc.Checkout.ShoppingCart.evalPosition();
		} else { // animate
			// get height of active tab content. set tab we're showing to be that min-hight, and animate closed.  prevents page jumping.
			var $activeTabContent = $tabSections.filter( '.active' ).find( 'section' );
			var activeTabContentH = $activeTabContent.outerHeight();

			var $tabPanel = $tabSections.removeClass( 'active' ).eq( i );
			var $tabContent = $tabPanel.find( 'section' ).stop( true, false ).css( {
				'min-height': activeTabContentH + 'px',
				opacity: 0
			} );
			$tabPanel.addClass( 'active' );
			$tabContent.animate( {
				'min-height': 0
			}, {
				'queue': false,
				'duration': Twc.Settings.tabShrinkDuration,
				'easing': 'swing',
				'step': Twc.Checkout.ShoppingCart.evalPosition
			} );
			$tabContent.animate( {
				opacity: 1
			}, Twc.Settings.tabFadeInDuration, Twc.Settings.tabFadeInEasing );
		}
	}

	// this runs when layout switches to desktop.
	function changeToDesktop() {
		var activeSection = 0;

		// find the first active tab section and mark that tab active, closing all others
		$tabSections.each( function( i ) {
			if ( $tabSections.eq( i ).hasClass( 'active' ) ) {
				activeSection = i;
				return false;
			}
		} );
		activateTab( activeSection );
		activateTabSection( activeSection, true );
	}

	return {
		/** initializes a container that contains tab rows and tabbed contentPrevents double initalization.  Assumes
		 * this is a responsive design that also handles expand/collapse sections within.
		 * @author McGowan
		 * @param $o {Object} jQuery containing tabs and tabbed content within
		 */
		init: function( $o ) {
			try {
				if ( typeof $o === 'undefined' || !( $o instanceof jQuery ) ) {
					error( '$o is not a jQuery object' );
					return;
				}
				if ( $o.hasClass( initializedClass ) ) {
					error( 'Already initialized: ' + initializedClass );
					return;
				}

				$tabs = $o.find( '.tab-nav li' );
				$tabSections = $o.find( '.collapsible' );

				if ( $tabs.length !== $tabSections.length || $tabs.length === 0 ) {
					error( 'Tabs and tab sections must be equal and greater than zero' );
					return;
				}


				// responsive design shows tabs as expand/collapse.  Make them behave properly
				Twc.Components.RowExpander.initRows( $tabSections );

				$tabs.each( function( i ) {
					var $link = $tabs.eq( i ).find( 'a' );

					$link.click( function( e ) {
						if ( !$tabs.eq( i ).hasClass( 'active' ) ) {
							Twc.Analytics.dispatch( 'tabView', $link.text() );
							activateTab( i );
							activateTabSection( i, false );
						}
						return false; // prevent anchor change
					} );
				} );

				Twc.Breakpoint.init();
				Twc.Breakpoint.onChangeToDesktop( changeToDesktop );

				$o.addClass( initializedClass );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}
		}
	}
} )();

/**
 * Shows a view more/less link with a preview-text and remaining-text section that expands/collapses
 * @namespace
 * @author McGowan
 */
Twc.Components.ViewMore = ( function() {
	/**
	 * marker to indicate container was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-viewMore-initialized';

	return {
		/** initializes a group of objects for view more/less.  Prevents double initalization.
		 * @param $objects {Object} jQuery object to iterate over, instantiating each within it.  Each object must either have .preview-text and .remaining-text or a <ul>
		 * @author McGowan
		 */
		initObjects: function( $objects ) {
			try {
				if ( typeof $objects === 'undefined' || !( $objects instanceof jQuery ) ) {
					error( '$objects is not a jQuery object' );
					return;
				}

				$objects.each( function( i ) {
					var $this = $( this );

					if ( $this.hasClass( initializedClass ) ) {
						warn( 'Twc.Components.ViewMore.initObjects(): Object already initialized: ' + initializedClass );
						return true; // continue to next
					}

					// we're either targeting a section with .remaining-text or a <ul>
					var $content = $this.find( '.remaining-text, .js-view-more-content' );
					if ( $content.length === 0 ) {
						$content = $this.find( 'ul' );
					}

					// control button is either <a> or a <div> wrapping <a>
					var $controlLink = $this.find( '.view-toggle, .js-view-more-toggle' );
					var $controlWrapper = $controlLink;
					if ( !$controlLink.is( 'a' ) ) { // link and wrapper are identical
						$controlLink = $controlWrapper.find( 'a' );
					}


					if ( ( $content.length !== 1 || $controlLink.length !== 1 ) && !document.getElementsByClassName( "packageCompareTable" ) ) {
						error( "Twc.Components.ViewMore.initObjects(): Required elements not found" );
						return true; // continue to next and don't instantiate
					}

					// set more/less text for the control button. default to Settings.js file
					var options = Twc.Checkout.Util.safeParseJson( $this.attr( 'data-view-more' ) );

					var viewMore = options.viewMore || Twc.Settings.viewMore.moreHtml;
					var viewLess = options.viewLess || Twc.Settings.viewMore.lessHtml;


					// set initial button text
					if ( $this.hasClass( 'active' ) ) {
						$controlLink.html( viewLess );
					} else {
						$controlLink.html( viewMore );
					}

					$controlWrapper.on( "tap", function() {
						$content.stop( true, true );
						if ( $this.hasClass( 'active' ) ) { // close it
							$content.slideUp( {
								'duration': Twc.Settings.accordianSlideDuration,
								'easing': Twc.Settings.accordianSlideEasing,
								'step': Twc.Checkout.ShoppingCart.evalPosition,
								'complete': function() {
									$this.removeClass( 'active' );
									$controlLink.html( viewMore );
								}
							} );
						} else { // open it
							$content.slideDown( {
								'duration': Twc.Settings.accordianSlideDuration,
								'easing': Twc.Settings.accordianSlideEasing,
								'step': Twc.Checkout.ShoppingCart.evalPosition,
								'complete': function() {
									$this.addClass( 'active' );
									$controlLink.html( viewLess );
								}
							} );

							if ( Twc.Checkout.Util.getCurrentPageId() === 'new_services' ) {
								Twc.Analytics.dispatch( 'viewMoreLink', viewMore );
							}
						}

						return false; // prevent anchor if href="#"
					} );

					$this.addClass( initializedClass );
				} );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}

		}
	}
} )();

; /* Version 6ed9e8be6594938a3179b249648f60c0 v:4.1.8.7, c:633a5cf8179243e14906a663132c69e8598f7c88, b:13635 n:52-4.1.8.next-controller */
( function() {
	( function() {
		if ( !window.ADRUM && !0 !== window[ "adrum-disable" ] ) {
			var g = window.ADRUM = {};
			window[ "adrum-start-time" ] = window[ "adrum-start-time" ] || ( new Date ).getTime();
			( function( a ) {
				( function( a ) {
					a.tc = function() {
						for ( var a = [], c = 0; c < arguments.length; c++ ) a[ c - 0 ] = arguments[ c ];
						for ( c = 0; c < a.length; c++ ) {
							var b = a[ c ];
							b && b.H()
						}
					}
				} )( a.monitor || ( a.monitor = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				a = a.conf || ( a.conf = {} );
				a.beaconUrlHttp = "http://col.eum-appdynamics.com";
				a.beaconUrlHttps = "https://col.eum-appdynamics.com";
				a.corsEndpointPath = "/eumcollector/beacons/browser/v1";
				a.imageEndpointPath = "/eumcollector/adrum.gif?";
				a.appKey = window[ "adrum-app-key" ] || "AD-AAB-AAB-UYU";
				var d = "https:" === document.location.protocol;
				a.adrumExtUrl = ( d ? "https://cdn.appdynamics.com" : "http://cdn.appdynamics.com" ) + "/adrum-ext.6ed9e8be6594938a3179b249648f60c0.js";
				a.agentVer = "4.1.8.7";
				a.sendImageBeacon = "false";
				if ( window[ "adrum-geo-resolver-url" ] ) {
					var e = window[ "adrum-geo-resolver-url" ],
						c = e.indexOf( "://" ); - 1 != c && ( e = e.substring( c + 3 ) );
					e = ( d ? "https://" : "http://" ) + e
				} else e = d ? "" :
					"";
				a.geoResolverUrl = e;
				a.useStrictDomainCookies = !0 === window[ "adrum-use-strict-domain-cookies" ];
				a.userConf = window[ "adrum-config" ];
				a.jd = 10
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					function e( a ) {
						return "undefined" !== typeof a && null !== a
					}

					function c( a ) {
						return "[object Array]" === Object.prototype.toString.apply( a )
					}

					function b( a ) {
						return "object" == typeof a && !c( a ) && null !== a
					}

					function f( a, h ) {
						for ( var d in h ) {
							var n = h[ d ];
							if ( h.hasOwnProperty( d ) && e( n ) ) {
								var l = a[ d ];
								b( n ) && b( l ) ? f( l, n ) : a[ d ] = c( l ) && c( n ) ? l.concat( n ) :
									n
							}
						}
					}

					function h( a ) {
						return "string" == typeof a ? a.replace( /^\s*/, "" ).replace( /\s*$/, "" ) : a
					}
					d.isDefined = e;
					d.isArray = c;
					d.isObject = b;
					d.isFunction = function( a ) {
						return "function" == typeof a || !1
					};
					d.Ga = function( a ) {
						return "number" == typeof a
					};
					d.qc = function( a ) {
						setTimeout( a, 0 )
					};
					d.addEventListener = function( b, c, h ) {
						function f() {
							try {
								return h.apply( this, Array.prototype.slice.call( arguments ) )
							} catch ( d ) {
								a.exception( d, "M1", c, b, d )
							}
						}
						a.isDebug && a.log( "M0", c, b );
						b.addEventListener ? b.addEventListener( c, f, !1 ) : b.attachEvent && b.attachEvent( "on" +
							c, f )
					};
					d.loadScriptAsync = function( b ) {
						var c = document.createElement( "script" );
						c.async = !0;
						c.src = b;
						var h = document.getElementsByTagName( "script" )[ 0 ];
						h ? ( h.parentNode.insertBefore( c, h ), a.log( "M2", b ) ) : a.log( "M3", b )
					};
					d.Q = f;
					d.Fc = function( a ) {
						var b = [];
						a && ( d.isObject( a ) ? b = [ a ] : d.isArray( a ) && ( b = a ) );
						return b
					};
					d.generateGUID = "undefined" !== typeof window.crypto && "undefined" !== typeof window.crypto.getRandomValues ? function() {
						function a( b ) {
							for ( b = b.toString( 16 ); 4 > b.length; ) b = "0" + b;
							return b
						}
						var b = new Uint16Array( 8 );
						window.crypto.getRandomValues( b );
						return a( b[ 0 ] ) + a( b[ 1 ] ) + "_" + a( b[ 2 ] ) + "_" + a( b[ 3 ] ) + "_" + a( b[ 4 ] ) + "_" + a( b[ 5 ] ) + a( b[ 6 ] ) + a( b[ 7 ] )
					} : function() {
						return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace( /[xy]/g, function( a ) {
							var b = 16 * Math.random() | 0;
							return ( "x" == a ? b : b & 3 | 8 ).toString( 16 )
						} )
					};
					d.parseURI = function( a ) {
						return ( a = String( a ).replace( /^\s+|\s+$/g, "" ).match( /^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/ ) ) ? {
							href: a[ 0 ] || "",
							protocol: a[ 1 ] || "",
							J: a[ 2 ] || "",
							host: a[ 3 ] || "",
							hostname: a[ 4 ] || "",
							port: a[ 5 ] || "",
							pathname: a[ 6 ] || "",
							search: a[ 7 ] || "",
							hash: a[ 8 ] || ""
						} : null
					};
					d.absolutizeURI = function( a, b ) {
						function c( a ) {
							var b = [];
							a.replace( /^(\.\.?(\/|$))+/, "" ).replace( /\/(\.(\/|$))+/g, "/" ).replace( /\/\.\.$/, "/../" ).replace( /\/?[^\/]*/g, function( a ) {
								"/.." === a ? b.pop() : b.push( a )
							} );
							return b.join( "" ).replace( /^\//, "/" === a.charAt( 0 ) ? "/" : "" )
						}
						b = d.parseURI( b || "" );
						a = d.parseURI( a || "" );
						return b && a ? ( b.protocol || a.protocol ) + ( b.protocol || b.J ? b.J : a.J ) + c( b.protocol || b.J || "/" === b.pathname.charAt( 0 ) ? b.pathname : b.pathname ? ( a.J && !a.pathname ?
							"/" : "" ) + a.pathname.slice( 0, a.pathname.lastIndexOf( "/" ) + 1 ) + b.pathname : a.pathname ) + ( b.protocol || b.J || b.pathname ? b.search : b.search || a.search ) + b.hash : null
					};
					d.getFullyQualifiedUrl = function( b ) {
						try {
							return d.absolutizeURI( document.location.href, b )
						} catch ( c ) {
							return a.exception( c, "M4", b, document.location.href ), b
						}
					};
					d.tryExtractingErrorStack = function( a ) {
						return a ? ( a = a.stack ) && "string" === typeof a ? a : null : null
					};
					d.xf = function( a ) {
						var b = {},
							c, f;
						if ( !a ) return b;
						var d = a.split( "\n" );
						for ( f = 0; f < d.length; f++ ) {
							var e = d[ f ];
							c = e.indexOf( ":" );
							a = h( e.substr( 0, c ) ).toLowerCase();
							c = h( e.substr( c + 1 ) );
							a && ( b[ a ] = b[ a ] ? b[ a ] + ( ", " + c ) : c )
						}
						return b
					};
					d.tryPeriodically = function( a, b, c, h ) {
						function f() {
							if ( b() ) c && c();
							else {
								var e = a( ++d );
								0 < e ? setTimeout( f, e ) : h && h()
							}
						}
						var d = 0;
						f()
					}
				} )( a.utils || ( a.utils = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				function d( b, c, f, d ) {
					b = a.conf.beaconUrlHttps + "/eumcollector/error.gif?version=1&appKey=" + f + "&msg=" + encodeURIComponent( b.substring( 0, 500 ) );
					d && ( b += "&stack=", b += encodeURIComponent( d.substring( 0, 1500 - b.length ) ) );
					return b
				}

				function e( b, c ) {
					2 <=
						f || ( ( new Image ).src = d( b, 0, a.conf.appKey, c ), f++ )
				}

				function c( a ) {
					return 0 <= a.location.search.indexOf( "ADRUM_debug=true" ) || 0 <= a.cookie.search( /(^|;)\s*ADRUM_debug=true/ )
				}
				a.iDR = c;
				a.isDebug = c( document );
				var b = [];
				a.log = function( c ) {
					for ( var f = 1; f < arguments.length; f++ );
					a.isDebug && b.push( Array.prototype.slice.call( arguments ).join( " | " ) )
				};
				a.error = function( b ) {
					for ( var c = 1; c < arguments.length; c++ );
					c = Array.prototype.slice.call( arguments ).join( " | " );
					a.log( c );
					e( c, null )
				};
				a.exception = function() {
					for ( var b = [], c = 0; c < arguments.length; c++ ) b[ c -
						0 ] = arguments[ c ];
					1 > arguments.length || ( b = Array.prototype.slice.call( arguments ), c = a.utils.tryExtractingErrorStack( b[ 0 ] ), b = b.slice( 1 ).join( " | " ), a.log( b ), e( b, c ) )
				};
				a.assert = function( b, c ) {
					b || a.error( "Assert fail: " + c )
				};
				a.dumpLog = a.isDebug ? function() {
					for ( var a = "", c = 0; c < b.length; c++ ) a += b[ c ].replace( RegExp( "<br/>", "g" ), "\n\t" ) + "\n";
					return a
				} : function() {};
				a.cIEBU = d;
				var f = 0;
				a.log( "M5" )
			} )( g || ( g = {} ) );
			( function( a ) {
				var d = function() {
						function a( b ) {
							this.max = b;
							this.za = 0
						}
						a.prototype.Re = function() {
							this.ha() || this.za++
						};
						a.prototype.ha = function() {
							return this.za >= this.max
						};
						a.prototype.reset = function() {
							this.za = 0
						};
						return a
					}(),
					e = function() {
						function c() {
							this.ca = [];
							this.Oa = new d( c.xd );
							this.Ja = new d( c.md )
						}
						c.prototype.submit = function( b ) {
							this.push( b ) && a.initEXTDone && this.processQ()
						};
						c.prototype.processQ = function() {
							for ( var b = this.le(), c = 0; c < b.length; c++ ) {
								var h = b[ c ];
								"function" === typeof a.commands[ h[ 0 ] ] ? ( a.isDebug && a.log( "M6", h[ 0 ], h.slice( 1 ).join( ", " ) ), a.commands[ h[ 0 ] ].apply( a, h.slice( 1 ) ) ) : a.error( "M7", h[ 0 ] )
							}
						};
						c.prototype.af =
							function( a ) {
								return "reportXhr" === a || "reportPageError" === a
							};
						c.prototype.push = function( b ) {
							var c = b[ 0 ],
								h = this.af( c ),
								d = h ? this.Oa : this.Ja;
							if ( d.ha() ) return a.log( "M8", h ? "spontaneous" : "non spontaneous", c ), !1;
							this.ca.push( b );
							d.Re();
							return !0
						};
						c.prototype.le = function() {
							var a = this.ca;
							this.reset();
							return a
						};
						c.prototype.size = function() {
							return this.ca.length
						};
						c.prototype.reset = function() {
							this.ca = [];
							this.Oa.reset();
							this.Ja.reset()
						};
						c.prototype.isSpontaneousQueueDead = function() {
							return this.Oa.ha()
						};
						c.prototype.isNonSpontaneousQueueDead =
							function() {
								return this.Ja.ha()
							};
						c.xd = 100;
						c.md = 100;
						return c
					}();
				a.Lc = e
			} )( g || ( g = {} ) );
			( function( a ) {
				a.q = new a.Lc;
				a.command = function( d ) {
					for ( var e = 1; e < arguments.length; e++ );
					a.isDebug && a.log( "M9", d, Array.prototype.slice.call( arguments ).slice( 1 ).join( ", " ) );
					a.q.submit( Array.prototype.slice.call( arguments ) )
				}
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					window.ADRUM.aop = d;
					d.support = function( a ) {
						return !a || "apply" in a
					};
					d.around = function( e, c, b, f ) {
						a.assert( d.support( e ), "aop.around called on a function which does not support interception" );
						e = e || function() {};
						return function() {
							a.isDebug && a.log( "M10", f, Array.prototype.slice.call( arguments ).join( ", " ) );
							var h = Array.prototype.slice.call( arguments ),
								d;
							try {
								c && ( d = c.apply( this, h ) )
							} catch ( k ) {
								a.exception( k, "M11", f, k )
							}
							a.assert( !d || "[object Array]" === Object.prototype.toString.call( d ) );
							var m = void 0;
							try {
								m = e.apply( this, d || h )
							} finally {
								try {
									b && b.apply( this, h )
								} catch ( g ) {
									a.exception( g, "M12", f, g )
								}
							}
							return m
						}
					};
					d.before = function( a, c ) {
						return d.around( a, c )
					};
					d.after = function( a, c ) {
						return d.around( a, null, c )
					}
				} )( a.aop ||
					( a.aop = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {}
						c.prototype.H = function() {
							a.aop.support( window.onerror ) ? ( window.onerror = a.aop.around( window.onerror, function( b, f, h, d, k ) {
								c.Ha || ( c.errorsSent >= a.conf.jd ? a.log( "M13" ) : ( d = a.utils.tryExtractingErrorStack( k ), a.command( "reportPageError", b, f, h, d ), c.errorsSent++, c.Ha = !0 ) )
							}, function() {
								c.Ha = !1
							}, "onerror" ), a.log( "M14" ) ) : a.log( "M15" )
						};
						c.Ha = !1;
						c.errorsSent = 0;
						return c
					}();
					d.ErrorMonitor = e;
					d.te = new d.ErrorMonitor
				} )( a.monitor || ( a.monitor = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				var d = function() {
					function d() {
						this.pa = [];
						this.ja( d.va, 0 )
					}
					d.prototype.nf = function( a ) {
						this.ja( d.qb, a )
					};
					d.prototype.pf = function( a ) {
						this.ja( d.ub, a )
					};
					d.prototype.of = function( a ) {
						this.ja( d.sb, a )
					};
					d.prototype.ja = function( a, b ) {
						this.pa.push( {
							mf: ( new Date ).getTime(),
							lf: b,
							ec: a
						} );
						this.he = a
					};
					d.prototype.getPhaseName = function() {
						return this.he
					};
					d.prototype.getPhaseID = function( a ) {
						for ( var b = 0; b < d.tb.length; b++ )
							if ( d.tb[ b ] === a ) return b;
						return null
					};
					d.prototype.getPhaseCallbackTime = function( a ) {
						for ( var b =
								this.pa, f = 0; f < b.length; f++ )
							if ( b[ f ].ec === a ) return b[ f ].mf;
						return null
					};
					d.prototype.findPhaseAtNominalTime = function( c ) {
						a.assert( 0 <= c );
						for ( var b = this.pa, f = b.length - 1; 0 <= f; f-- )
							if ( c >= b[ f ].lf ) return b[ f ].ec;
						a.error( "M16", c, a.utils.ne( b ) );
						return d.va
					};
					d.va = "AFTER_FIRST_BYTE";
					d.qb = "AFTER_DOM_INTERACTIVE";
					d.ub = "AT_ONLOAD";
					d.sb = "AFTER_ONLOAD";
					d.tb = [ d.va, d.qb, d.ub, d.sb ];
					return d
				}();
				a.gg = d;
				a.lifecycle = new d;
				a.lifecycle = a.lifecycle
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {}
						c.prototype.H =
							function() {
								c.Hf();
								c.Gf()
							};
						c.Gf = function() {
							a.utils.addEventListener( window, "load", c.ka );
							a.utils.addEventListener( window, "load", c.sf )
						};
						c.sf = function( b ) {
							a.lifecycle.pf( b && b.timeStamp );
							a.utils.qc( function() {
								var b = ( new Date ).getTime();
								a.lifecycle.of( b );
								a.command( "mark", "onload", b );
								d.nb.k && ( d.perfMonitor.ee(), d.perfMonitor.fe() );
								a.command( "reportOnload" );
								a.utils.loadScriptAsync( a.conf.adrumExtUrl )
							} );
							a.log( "M17" )
						};
						c.Hf = function() {
							if ( document.addEventListener ) document.addEventListener( "DOMContentLoaded",
								c.Y, !1 );
							else {
								document.attachEvent( "onreadystatechange", c.Y );
								var b = null;
								try {
									b = null === window.frameElement ? document.documentElement : null
								} catch ( d ) {}
								null != b && b.doScroll && function q() {
									if ( !c.isReady ) {
										try {
											b.doScroll( "left" )
										} catch ( a ) {
											setTimeout( q, 10 );
											return
										}
										c.ka()
									}
								}()
							}
							a.log( "M18" )
						};
						c.ka = function( b ) {
							c.$b || ( a.lifecycle.nf( b && b.timeStamp ), a.command( "mark", "onready", ( new Date ).getTime() ), c.$b = !0 )
						};
						c.Y = function( a ) {
							document.addEventListener ? ( document.removeEventListener( "DOMContentLoaded", c.Y, !1 ), c.ka( a ) ) : "complete" ===
								document.readyState && ( document.detachEvent( "onreadystatechange", c.Y ), c.ka( a ) )
						};
						c.isReady = !1;
						c.$b = !1;
						return c
					}();
					d.Mc = e;
					d.ke = new d.Mc
				} )( a.monitor || ( a.monitor = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				var d = function() {
					function a() {
						this.B = {};
						this.ya = function( a ) {
							return e.ya.call( this, a )
						}
					}
					a.prototype.now = function() {
						return e.now()
					};
					a.prototype.mark = function( a, c ) {
						e.mark.apply( this, arguments )
					};
					a.prototype.measure = function( a, c, d ) {
						e.measure.apply( this, arguments )
					};
					a.prototype.getEntryByName = function( a ) {
						return e.getEntryByName.call( this,
							a )
					};
					return a
				}();
				a.Dd = d;
				var e;
				( function( c ) {
					c.now;
					c.mark;
					c.measure;
					c.getEntryByName;
					c.ya;
					var b = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance,
						d = b && b.timing && b.timing.navigationStart ? b.timing.navigationStart : window[ "adrum-start-time" ];
					c.now = b && b.now ? function() {
						return b.now()
					} : function() {
						return ( new Date ).getTime() - d
					};
					c.mark = function( a, b ) {
						this.B[ a ] = {
							name: a,
							entryType: "mark",
							startTime: b ? b : c.now(),
							duration: 0
						}
					};
					c.measure = function( b, q, k ) {
						this.B.hasOwnProperty( q ) &&
							this.B.hasOwnProperty( k ) ? this.B[ b ] = {
								name: b,
								entryType: "measure",
								startTime: q ? this.B[ q ].startTime : d,
								duration: ( k ? this.B[ k ].startTime : c.now() ) - ( q ? this.B[ q ].startTime : 0 )
							} : a.error( "M19" + ( this.B.hasOwnProperty( q ) ? k : q ) + " does not exist. " )
					};
					c.getEntryByName = function( a ) {
						return this.B[ a ] || null
					};
					c.ya = function( a ) {
						return a - d
					}
				} )( e || ( e = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {
							this.navTiming = this.resTiming = null
						}
						c.prototype.H = function() {
							c.k = window.performance || window.mozPerformance ||
								window.msPerformance || window.webkitPerformance
						};
						c.prototype.ee = function() {
							var b = c.k;
							if ( b = b && b.timing )
								if ( b.navigationStart && b.navigationStart <= b.loadEventEnd ) {
									var d = {},
										h;
									for ( h in b ) {
										var q = b[ h ];
										"number" === typeof q && ( d[ h ] = q )
									}
									this.navTiming = d
								} else a.log( "M21" );
							else a.log( "M20" )
						};
						c.prototype.fe = function() {
							this.resTiming = this.Jb()
						};
						c.prototype.Jb = function() {
							var b = c.k,
								d = [];
							b && b.getEntriesByType && ( b = b.getEntriesByType( "resource" ) ) && b.length && 0 < b.length && b.unshift && ( d = b );
							0 == d.length && a.log( "M22" );
							return d
						};
						c.k = null;
						return c
					}();
					d.nb = e;
					d.perfMonitor = new d.nb
				} )( a.monitor || ( a.monitor = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {
							this.conf = null;
							this.Pa = !1;
							this.status = {};
							this.T = {};
							!0 === window[ "adrum-xhr-disable" ] ? a.log( "M23" ) : window.XMLHttpRequest ? ( this.conf = {
									exclude: [ {
										urls: [ {
											pattern: a.conf.beaconUrlHttp + a.conf.corsEndpointPath
										}, {
											pattern: a.conf.beaconUrlHttps + a.conf.corsEndpointPath
										} ]
									} ],
									include: []
								}, c.hc( this.conf, a.conf.userConf && a.conf.userConf.xhr ), ( this.d = window.XMLHttpRequest.prototype ) ?
								"open" in this.d && "send" in this.d ? ( this.Pa = a.aop.support( this.d.open ) && a.aop.support( this.d.send ) ) || a.log( "M27" ) : a.log( "M26" ) : a.log( "M25" ) ) : a.log( "M24" )
						}
						c.hc = function( b, d ) {
							d && ( d.include = a.utils.Fc( d.include ), d.exclude = a.utils.Fc( d.exclude ), a.utils.Q( b, d ) );
							var h = b.exclude;
							if ( h )
								for ( var q = 0; q < h.length; q++ ) {
									var k = h[ q ].urls;
									k && 0 < k.length && ( h[ q ].urls = c.yb( k ) )
								}
							if ( h = b.include )
								for ( q = 0; q < h.length; q++ )( k = h[ q ].urls ) && 0 < k.length && ( h[ q ].urls = c.yb( k ) )
						};
						c.yb = function( b ) {
							for ( var c = [], d = 0; d < b.length; d++ ) {
								var q = b[ d ].pattern;
								if ( "string" === typeof q ) try {
									c.push( new RegExp( q ) )
								} catch ( k ) {
									a.exception( k, "Parse regex pattern failed." )
								} else a.error( "xhr filter pattern should be a string" )
							}
							return c
						};
						c.Kf = function( a, d, h ) {
							var q = h && h.include;
							h = h && h.exclude;
							return q && 0 < q.length && !c.Vb( d, a, q ) || h && 0 < h.length && c.Vb( d, a, h )
						};
						c.prototype.me = function( a ) {
							var c = this.T[ a ];
							delete this.T[ a ];
							return c || []
						};
						c.prototype.set = function( a, c ) {
							this.status[ a ] = c
						};
						c.prototype.H = function() {
							if ( this.Pa ) {
								a.log( "M28" );
								a.xhrConstructor = window.XMLHttpRequest;
								a.xhrOpen =
									this.xhrOpen = this.d.open;
								a.xhrSend = this.xhrSend = this.d.send;
								var b = this;
								this.d.open = a.aop.around( this.d.open, function() {
										var d = 1 <= arguments.length ? String( arguments[ 0 ] ) : "",
											h = 2 <= arguments.length ? String( arguments[ 1 ] ) : "";
										!c.Kf( h, d, b.conf ) && ( this._adrumXhrData = {
											method: d,
											url: h,
											sendTime: null,
											firstByteTime: null,
											respAvailTime: null,
											respProcTime: null,
											parentPhase: null
										}, a.utils.Q( this._adrumXhrData, b.status ), d = this._adrumXhrData.tag ) && ( a.log( "M29" + d + " event with tag " + d ), b.T[ d ] || ( b.T[ d ] = [] ), b.T[ d ].push( this ) )
									},
									null, "XHR.open" );
								this.d.send = a.aop.around( this.d.send, function() {
									var d = this,
										h = d._adrumXhrData;
									if ( h ) {
										var q = ( new Date ).getTime();
										a.assert( null === h.sendTime, "M30" );
										h.sendTime = h.sendTime || q;
										h.parentPhase = a.lifecycle.getPhaseName();
										c.Ze( h.url ) ? d.setRequestHeader( "ADRUM", "isAjax:true" ) : a.log( "M31", document.location.href, h.url );
										var k = 0,
											e = function() {
												if ( 4 == d.readyState ) a.log( "M32" ), b.qa( d );
												else {
													var h = null;
													try {
														h = d.onreadystatechange
													} catch ( q ) {
														a.log( "M33", q );
														b.qa( d );
														return
													}
													k++;
													h ? a.aop.support( h ) ? ( d.onreadystatechange =
														b.zb( h, d, "XHR.onReadyStateChange" ), a.log( "M34", k ) ) : ( a.log( "M35" ), b.qa( d ) ) : k < c.Pd ? a.utils.qc( e ) : ( a.log( "M36" ), b.qa( d ) )
												}
											};
										e()
									}
								}, null, "XHR.send" );
								"addEventListener" in this.d && "removeEventListener" in this.d && a.aop.support( this.d.addEventListener ) && a.aop.support( this.d.removeEventListener ) ? ( this.d.addEventListener = a.aop.around( this.d.addEventListener, this.ge(), null, "XHR.addEventListener" ), this.d.removeEventListener = a.aop.around( this.d.removeEventListener, function( b, d ) {
									if ( this._adrumXhrData ) {
										var c = Array.prototype.slice.call( arguments );
										d.__adrumInterceptor ? ( c[ 1 ] = d.__adrumInterceptor, a.log( "M37" ) ) : a.log( "M38" );
										return c
									}
								}, null, "XHR.removeEventListener" ) ) : a.log( "M39" );
								a.log( "M40" )
							}
						};
						c.jf = function( a, d ) {
							for ( var c = !1, q = 0; q < d.length; q++ ) {
								var k = d[ q ];
								if ( k && k.test( a ) ) {
									c = !0;
									break
								}
							}
							return c
						};
						c.Vb = function( a, d, h ) {
							var q = !1;
							if ( d && h )
								for ( var k = 0; k < h.length; k++ ) {
									var e = h[ k ];
									if ( !( e.method && a !== e.method || e.urls && !c.jf( d, e.urls ) ) ) {
										q = !0;
										break
									}
								}
							return q
						};
						c.Ze = function( a ) {
							var d = document.createElement( "a" );
							d.href = a;
							a = document.location;
							return ":" === d.protocol &&
								"" === d.hostname && "" === d.port || d.protocol === a.protocol && d.hostname === a.hostname && d.port === a.port
						};
						c.Ob = function( b ) {
							var d = b._adrumXhrData;
							if ( d ) {
								var c = ( new Date ).getTime();
								2 == b.readyState ? d.firstByteTime = d.firstByteTime || c : 4 == b.readyState && ( a.assert( null === d.respAvailTime, "M41" ), d.respAvailTime = d.respAvailTime || c, d.firstByteTime = d.firstByteTime || c )
							}
						};
						c.prototype.zb = function( b, d, h ) {
							return c.$f( b, function() {
								c.Ob( this )
							}, function() {
								var b = d._adrumXhrData;
								if ( b && 4 == d.readyState ) {
									var c = ( new Date ).getTime();
									a.assert( null === b.respProcTime, "M42" );
									b.respProcTime = b.respProcTime || c;
									a.utils.isDefined( b.tag ) || a.command( "reportXhr", d, b )
								}
							}, h )
						};
						c.prototype.qa = function( b ) {
							if ( b._adrumXhrData ) {
								var d = ( new Date ).getTime() + 3E4,
									h = function() {
										c.Ob( b );
										var q = b._adrumXhrData;
										if ( q ) {
											var k = ( new Date ).getTime();
											4 == b.readyState ? ( a.assert( null === q.respProcTime, "M43" ), q.respProcTime = q.respProcTime || k, a.log( "M44" ), a.utils.isDefined( q.tag ) || a.command( "reportXhr", b, q ), a.utils.isDefined( b._adrumXhrData.tag ) || delete b._adrumXhrData ) :
												k < d ? setTimeout( h, c.Za ) : ( a.utils.isDefined( b._adrumXhrData.tag ) || delete b._adrumXhrData, a.log( "M45" ) )
										}
									};
								h()
							}
						};
						c.$f = function( b, d, c, q ) {
							var k = b;
							b && "object" === typeof b && "toString" in b && "[xpconnect wrapped nsIDOMEventListener]" === b.toString() && "handleEvent" in b && ( k = function() {
								b.handleEvent.apply( this, Array.prototype.slice.call( arguments ) )
							} );
							return a.aop.around( k, d, c, q )
						};
						c.prototype.ge = function() {
							for ( var b = 0; b < arguments.length; b++ );
							var d = this;
							return function( b, c ) {
								if ( ( "load" === b || "error" === b ) && c && this._adrumXhrData ) {
									var k;
									k = c;
									if ( k.__adrumInterceptor ) k = k.__adrumInterceptor;
									else if ( a.aop.support( k ) ) {
										var e = d.zb( k, this, "XHR.invokeEventListener" );
										k = k.__adrumInterceptor = e
									} else k = null;
									if ( k ) return e = Array.prototype.slice.call( arguments ), e[ 1 ] = k, a.log( "M46" ), e;
									a.log( "M47", b, c )
								}
							}
						};
						c.Pd = 5;
						c.Za = 50;
						return c
					}();
					d.ua = e;
					d.w = new d.ua
				} )( a.monitor || ( a.monitor = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					function e( a, b ) {
						var d = [],
							c = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec( a );
						if ( c ) {
							var e = c[ 1 ],
								c = c[ 2 ].replace( /^"|"$/g, "" ),
								c = decodeURIComponent( c ).split( "|" ),
								g = c[ 0 ].split( ":" );
							if ( "R" === g[ 0 ] && Number( g[ 1 ] ) === b )
								for ( f( e ), e = 1; e < c.length; e++ ) d.push( c[ e ] )
						}
						return d
					}

					function c( a, b ) {
						var d = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec( a );
						if ( d ) {
							var c = d[ 1 ],
								e = d[ 4 ],
								g = d[ 5 ];
							if ( Number( d[ 3 ] ) === b ) return f( c ), {
								index: Number( e ),
								value: g
							}
						}
						return null
					}

					function b( b ) {
						var d = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec( b );
						if ( d ) {
							a.log( "M50", b );
							if ( 3 === d.length ) return f( "ADRUM" ), {
								startTime: Number( d[ 1 ] ),
								startPage: d[ 2 ]
							};
							a.error( "M51", b );
							return null
						}
					}

					function f( b ) {
						a.log( "M49", b );
						var d = new Date;
						d.setTime( d.getTime() - 1E3 );
						document.cookie = b + "=;Expires=" + d.toUTCString()
					}
					d.startTimeCookie = null;
					d.cookieMetadataChunks = null;
					d.Cb = function( h, f ) {
						a.log( "M48" );
						for ( var k = f ? f.length : 0, g = [], n = h.split( ";" ), l = 0; l < n.length; l++ ) {
							var p = n[ l ],
								t = c( p, k );
							t ? g.push( t ) : ( p = b( p ), null != p && ( d.startTimeCookie = p ) )
						}
						Array.prototype.sort.call( g, function( a, b ) {
							return a.index - b.index
						} );
						p = [];
						for ( l = 0; l < g.length; l++ ) p.push( g[ l ].value );
						for ( l = 0; l < n.length; l++ )( g = e( n[ l ], k ) ) && 0 < g.length && ( p = p.concat( g ) );
						d.cookieMetadataChunks = p
					};
					a.correlation.eck =
						d.Cb
				} )( a.correlation || ( a.correlation = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				"APP_KEY_NOT_SET" === a.conf.appKey && "undefined" !== typeof console && "undefined" !== typeof console.log && console.log( "AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']" );
				a.correlation.Cb( document.cookie, document.referrer );
				a.command( "mark", "firstbyte", window[ "adrum-start-time" ] );
				a.monitor.tc( a.monitor.te, a.monitor.ke, a.monitor.perfMonitor, a.monitor.w )
			} )( g || ( g = {} ) );
			( function( a ) {
				a = a.ng || ( a.ng = {} );
				a = a.b ||
					( a.b = {} );
				a.Yb = "locationChangeStart";
				a.df = "locationChangeSuccess";
				a.oc = "routeChangeStart";
				a.pc = "routeChangeSuccess";
				a.uc = "stateChangeStart";
				a.vc = "stateChangeSuccess";
				a.Ac = "viewContentLoaded";
				a.Pe = "includeContentRequested";
				a.Oe = "includeContentLoaded";
				a.da = "digest";
				a.sg = "outstandingRequestsComplete";
				a.vb = "beforeNgXhrRequested";
				a.rb = "afterNgXhrRequested";
				a.rg = "ngXhrLoaded";
				a.wb = "$$completeOutstandingRequest"
			} )( g || ( g = {} ) );
			( function( a ) {
				a = a.ng || ( a.ng = {} );
				a = a.c || ( a.c = {} );
				a.V = "viewChangeStart";
				a.Ua = "viewChangeEnd";
				a.W = "viewDOMLoaded";
				a.Wa = "xhrRequestsCompleted";
				a.Yf = "viewFragmentsLoaded";
				a.Bc = "viewResourcesLoaded";
				a.Dc = "virtualPageStart";
				a.Cc = "virtualPageEnd"
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( a ) {
					function e( b, c, h, q, k, e ) {
						if ( c ) try {
							return c.apply( b, [ h, q, k ].concat( e ) )
						} catch ( g ) {
							return b.error( h, q, k, e, a.$a.Vc, "an exception occurred in a caller-provided callback function", g )
						}
					}

					function c( b, c ) {
						return function() {
							var h = this.current,
								q = c[ h ] || c[ a.aa ] || h,
								k = Array.prototype.slice.call( arguments );
							if ( this.ce( b ) ) return this.error( b,
								h, q, k, a.$a.Wc, "event " + b + " inappropriate in current state " + this.current );
							if ( !1 === e( this, this[ "onbefore" + b ], b, h, q, k ) ) return a.Z.Xa;
							q === a.aa && ( q = h );
							if ( h === q ) return e( this, this[ "onafter" + b ] || this[ "on" + b ], b, h, q, k ), a.Z.zd;
							var g = this;
							this.transition = function() {
								g.transition = null;
								g.current = q;
								e( g, g[ "onenter" + q ] || g[ "on" + q ], b, h, q, k );
								e( g, g[ "onafter" + b ] || g[ "on" + b ], b, h, q, k );
								return a.Z.Hd
							};
							if ( !1 === e( this, this[ "onleave" + h ], b, h, q, k ) ) return this.transition = null, a.Z.Xa;
							if ( this.transition ) return this.transition()
						}
					}
					a.VERSION = "2.3.5";
					a.Z = {
						Hd: 1,
						zd: 2,
						Xa: 3,
						eg: 4
					};
					a.$a = {
						Wc: 100,
						fg: 200,
						Vc: 300
					};
					a.aa = "*";
					a.create = function( b, f ) {
						function h( b ) {
							var c = b.from instanceof Array ? b.from : b.from ? [ b.from ] : [ a.aa ];
							l[ b.name ] = l[ b.name ] || {};
							for ( var h = 0; h < c.length; h++ ) p[ c[ h ] ] = p[ c[ h ] ] || [], p[ c[ h ] ].push( b.name ), l[ b.name ][ c[ h ] ] = b.to || c[ h ]
						}
						var q = "string" == typeof b.initial ? {
								state: b.initial
							} : b.initial,
							k = f || b.target || {},
							e = b.events || [],
							g = b.callbacks || {},
							l = {},
							p = {};
						q && ( q.event = q.event || "startup", h( {
							name: q.event,
							from: "none",
							to: q.state
						} ) );
						for ( var t =
								0; t < e.length; t++ ) h( e[ t ] );
						for ( var u in l ) l.hasOwnProperty( u ) && ( k[ u ] = c( u, l[ u ] ) );
						for ( u in g ) g.hasOwnProperty( u ) && ( k[ u ] = g[ u ] );
						k.current = "none";
						k.og = function( a ) {
							return a instanceof Array ? 0 <= a.indexOf( this.current ) : this.current === a
						};
						k.be = function( b ) {
							return !this.transition && ( l[ b ].hasOwnProperty( this.current ) || l[ b ].hasOwnProperty( a.aa ) )
						};
						k.ce = function( a ) {
							return !this.be( a )
						};
						k.pa = function() {
							return p[ this.current ]
						};
						k.error = b.error || function( a, b, c, d, h, f, q ) {
							throw q || f;
						};
						if ( q && !q.defer ) k[ q.event ]();
						return k
					}
				} )( a.ob ||
					( a.ob = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				var d = a.ng || ( a.ng = {} ),
					d = d.conf || ( d.conf = {} );
				d.disabled = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable;
				d.xhr = {};
				d.metrics = {
					includeResTimingInEndUserResponseTiming: !0
				};
				a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && ( a.conf.userConf.spa.angular.vp.xhr && a.monitor.ua.hc( d.xhr, a.conf.userConf.spa.angular.vp.xhr ), a.conf.userConf.spa.angular.vp.metrics && a.utils.Q( d.metrics,
					a.conf.userConf.spa.angular.vp.metrics ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				a = a.ng || ( a.ng = {} );
				a.cc = {
					qg: {
						start: a.c.Dc,
						end: a.c.Cc,
						name: "PLT"
					},
					kg: {
						start: a.c.V,
						end: a.c.Ua,
						name: "DDT"
					},
					pg: {
						start: a.c.V,
						end: a.c.W,
						name: "DRT"
					},
					bg: {
						start: a.c.Ua,
						end: a.c.W,
						name: "DPT"
					},
					cg: {
						start: a.c.V,
						end: a.c.W,
						name: "DOM"
					}
				}
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c( b ) {
							this.Ub = !0;
							this.identifier = {};
							this.R = {};
							this.resTiming = [];
							this.Bb = this.N = 0;
							this.k = new a.Dd;
							b && ( this.identifier = b );
							this.Me = a.utils.generateGUID()
						}
						c.ue = function( b ) {
							var c = {};
							b && b.g ? ( c.g = {
								vf: ""
							}, a.utils.Q( c.g, {
								vf: b.g.originalPath,
								Of: b.g.template,
								Pf: b.g.templateUrl
							} ) ) : b && b.state && ( c.state = {
								url: ""
							}, a.utils.Q( c.state, {
								url: b.state.url,
								name: b.state.name,
								Of: b.state.template,
								Pf: b.state.templateUrl
							} ) );
							return c
						};
						c.prototype.Wf = function( a ) {
							this.identifier = c.ue( a )
						};
						c.prototype.hf = function() {
							this.mark( d.c.V );
							this.mark( d.c.Dc, this.fa( d.c.V ) )
						};
						c.prototype.gf = function() {
							var b = this.fa( d.c.W ),
								c = this.fa( d.c.Wa ),
								b = Math.max( b, c );
							d.conf.metrics.includeResTimingInEndUserResponseTiming &&
								( c = this.fa( d.c.Bc ), c = Math.max( b, c ), a.log( "adjust vp end from %s to %s", b, c ), b = c );
							this.mark( d.c.Cc, b )
						};
						c.prototype.xa = function() {
							var a = {},
								c;
							for ( c in d.cc ) {
								var h = d.cc[ c ];
								if ( this.k.getEntryByName( h.start ) && this.k.getEntryByName( h.end ) ) {
									this.k.measure( h.name, h.start, h.end );
									var q = this.k.getEntryByName( h.name );
									a[ h.name ] = q && 0 <= q.duration && q.duration || null
								}
							}
							a.PLC = 1;
							a.VDC = this.Bb;
							for ( c in a ) a[ c ] = Math.round( a[ c ] );
							return a
						};
						c.prototype.se = function( b ) {
							var c = this.identifier;
							b = b.identifier;
							var d = !1;
							return d = !a.utils.isDefined( c ) &&
								!a.utils.isDefined( b ) || c === b ? !0 : a.utils.isDefined( c ) && a.utils.isDefined( b ) ? c.state || b.state ? a.utils.isDefined( c.state ) && a.utils.isDefined( b.state ) ? c.state.name === b.state.name && c.state.template === b.state.template && c.state.templateUrl === b.state.templateUrl && c.state.url === b.state.url : !1 : c.g && b.g ? c.g.originalPath === b.g.originalPath && c.g.template === b.g.template && c.g.templateUrl === b.g.templateUrl : c.url === b.url : !1
						};
						c.prototype.mark = function( a, c ) {
							this.k.mark( a, c )
						};
						c.prototype.da = function() {
							this.Bb++
						};
						c.prototype.Qe =
							function() {
								this.N++;
								a.log( "increasing xhr count " + this.N + " pending xhr requests" )
							};
						c.prototype.ie = function() {
							this.N--;
							a.log( "decreasing xhr count " + this.N + " pending xhr requests" )
						};
						c.prototype.Ne = function() {
							var b = this.k.getEntryByName( d.c.Wa );
							a.log( "xhrCount " + this.N + " xhrReuqestCompleted " + b );
							return 0 < this.N
						};
						c.prototype.fa = function( a ) {
							return ( a = this.k.getEntryByName( a ) ) && a.startTime
						};
						c.prototype.$d = function() {
							var a = {
									oa: 0
								},
								d = document.querySelectorAll( "ng-view, [ng-view], .ng-view, [ui-view]" );
							if ( d &&
								0 < d.length )
								for ( var h in c.nc )
									for ( var q = 0; q < d.length; q++ ) {
										var k = angular.element( d[ q ] ).find( h );
										if ( 0 < k.length )
											for ( var e = 0; e < k.length; e++ ) {
												var g = k[ e ][ c.nc[ h ].Sa ];
												( g = g ? decodeURIComponent( g ) : null ) && !a[ g ] && ( a[ g ] = h, a.oa++ )
											}
									}
							this.R = a
						};
						c.prototype.Zd = function( a ) {
							return !!this.R[ decodeURIComponent( a.name ) ]
						};
						c.prototype.ae = function() {
							var b = [],
								c = this;
							0 < this.R.oa && ( b = a.monitor.perfMonitor.Jb().filter( function( a ) {
								return c.Zd( a )
							} ) );
							this.resTiming = b
						};
						c.prototype.Ud = function() {
							if ( 0 < this.R.oa && ( this.ae(), this.resTiming &&
									this.resTiming.length >= this.R.oa ) ) {
								for ( var a = [], c = 0; c < this.resTiming.length; c++ ) a.push( this.resTiming[ c ].responseEnd );
								a = Math.max.apply( Math, a );
								this.k.mark( d.c.Bc, a )
							}
						};
						c.prototype.buildMetrics = function() {
							d.conf.metrics.includeResTimingInEndUserResponseTiming && this.Ud();
							this.gf();
							return this.xa()
						};
						c.prototype.getGUID = function() {
							return this.Me
						};
						c.prototype.getResTiming = function() {
							return this.resTiming
						};
						c.prototype.getPageUrl = function() {
							return this.identifier.url
						};
						c.nc = {
							img: {
								Sa: "src"
							},
							script: {
								Sa: "src"
							},
							link: {
								Sa: "href"
							}
						};
						return c
					}();
					d.VirtualPage = e
				} )( a.ng || ( a.ng = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {
							this.e = new d.VirtualPage
						}
						c.prototype.Cf = function() {
							var b = this;
							d.conf.metrics.includeResTimingInEndUserResponseTiming ? ( a.log( "M52" ), setTimeout( function() {
								b.La()
							}, c.Jd ) ) : setTimeout( function() {
								b.La()
							}, c.Kd )
						};
						c.prototype.La = function() {
							a.log( "M53" );
							for ( var b = a.monitor.w.me( this.e.getGUID() ), c = 0; c < b.length; c++ ) a.command( "reportXhr", b[ c ], b[ c ]._adrumXhrData );
							a.command( "reportEvent",
								"VPLoad", this.e )
						};
						c.If = function( b ) {
							var c = b.getGUID(),
								d = b.getPageUrl();
							a.log( "M54", c, d );
							a.monitor.w.set( "parentGUID", c );
							a.monitor.w.set( "parentType", 3 );
							a.monitor.w.set( "parentUrl", d );
							a.monitor.w.set( "tag", b.getGUID() )
						};
						c.de = function() {
							a.log( "M55" );
							a.monitor.w.set( "parentGUID", null );
							a.monitor.w.set( "parentType", null );
							a.monitor.w.set( "parentUrl", null );
							a.monitor.w.set( "tag", null )
						};
						c.prototype.Ff = function( a ) {
							this.e = a
						};
						c.prototype.mark = function( a ) {
							this.e.mark( a )
						};
						c.Jd = 5E3;
						c.Kd = 2 * a.monitor.ua.Za;
						return c
					}();
					d.VirtualPageStateMachine = e;
					a.ob.create( {
						events: [ {
							name: "start",
							from: "none",
							to: "ChangeView"
						}, {
							name: "viewLoaded",
							from: "ChangeView",
							to: "XhrPending"
						}, {
							name: "xhrCompleted",
							from: "XhrPending",
							to: "End"
						}, {
							name: "abort",
							from: "*",
							to: "none"
						}, {
							name: "init",
							from: "*",
							to: "none"
						}, {
							name: "locChange",
							from: "*",
							to: "*"
						}, {
							name: "beforeXhrReq",
							from: "*",
							to: "*"
						}, {
							name: "afterXhrReq",
							from: "*",
							to: "*"
						} ],
						error: function( c ) {
							a.log( "M56" + c )
						},
						callbacks: {
							onChangeView: function() {
								this.e.hf()
							},
							onviewLoaded: function() {
								this.mark( d.c.W )
							},
							onXhrPending: function() {
								this.e.Ub &&
									this.xhrCompleted()
							},
							onleaveXhrPending: function( a, b, e ) {
								if ( "abort" === a ) return this.La(), !0;
								if ( "xhrCompleted" === a && "End" === e ) {
									if ( this.e.Ne() ) return !1;
									this.mark( d.c.Wa );
									return !0
								}
							},
							onEnd: function() {
								this.e.$d();
								this.Cf()
							},
							oninit: function( a, b, d, h ) {
								this.Ff( h )
							},
							onlocChange: function( a, b, d, h ) {
								this.e.identifier.url = h
							},
							onbeforeXhrReq: function( c, b, g, h ) {
								var q = this.e;
								q.Ub = !1;
								a.log( "M57", h && h[ 1 ] || "", this.e.getGUID() );
								q.Qe();
								e.If( q );
								h[ 3 ] && ( h[ 3 ] = a.aop.before( h[ 3 ], function( b, c, h ) {
									a.log( "M58" );
									q.ie();
									h && ( b = a.utils.xf( h )[ "content-type" ] ) &&
										0 <= b.indexOf( "text/html" ) && q.mark( d.c.Yf )
								} ) );
								return h
							},
							onafterXhrReq: function() {
								e.de()
							}
						}
					}, e.prototype )
				} )( a.ng || ( a.ng = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {
							this.n = new d.VirtualPageStateMachine
						}
						c.prototype.j = function( b, c ) {
							a.log( "M59", b );
							switch ( b ) {
								case d.b.oc:
								case d.b.uc:
									this.n.start();
									var h = new d.VirtualPage( c.next );
									this.n.e.se( h ) ? this.n.e.Wf( c.next ) : this.Nf( h );
									break;
								case d.b.pc:
								case d.b.vc:
									this.n.e.mark( d.c.Ua );
									break;
								case d.b.Ac:
									this.n.viewLoaded();
									break;
								case d.b.vb:
									this.n.beforeXhrReq( c );
									break;
								case d.b.rb:
									this.n.afterXhrReq();
									break;
								case d.b.wb:
									this.n.xhrCompleted();
									break;
								case d.b.Yb:
									this.n.locChange( c.next.url );
									break;
								case d.b.da:
									this.n.e.da()
							}
						};
						c.prototype.Nf = function( a ) {
							this.n.abort();
							this.n.init( a );
							this.n.start()
						};
						return c
					}();
					d.Nd = e
				} )( a.ng || ( a.ng = {} ) )
			} )( g || ( g = {} ) );
			( function( a ) {
				( function( d ) {
					var e = function() {
						function c() {
							this.l = new d.Nd
						}
						c.prototype.H = function() {
							var b = this;
							a.utils.addEventListener( document, "DOMContentLoaded", function() {
								a.log( "M60" );
								b.init()
							} )
						};
						c.prototype.init = function() {
							if ( "undefined" !=
								typeof angular ) {
								a.log( "M61" );
								var b = this,
									c = angular.module( "ng" );
								c.config( [ "$provide", function( a ) {
									b.Ve( a );
									b.Ue( a )
								} ] );
								c.run( [ "$browser", function( a ) {
									b.Te( a )
								} ] );
								a.log( "M62" )
							}
						};
						c.prototype.Ue = function( b ) {
							var c = a.aop,
								h = this;
							b.decorator( "$httpBackend", [ "$delegate", function( a ) {
								return a = c.around( a, function() {
									var a = Array.prototype.slice.call( arguments );
									h.l.j( d.b.vb, a );
									return a
								}, function() {
									h.l.j( d.b.rb )
								} )
							} ] )
						};
						c.prototype.Ve = function( b ) {
							var c = a.aop,
								h = this;
							b.decorator( "$rootScope", [ "$delegate", function( a ) {
								a.$digest =
									c.after( a.$digest, function() {
										h.l.j( d.b.da )
									} );
								a.$on( "$locationChangeStart", function( a, b ) {
									var c = {
											url: b
										},
										e = a && a.P && a.P.$state && a.P.$state.current;
									e && ( c.state = e );
									h.l.j( d.b.Yb, {
										next: c
									} )
								} );
								a.$on( "$locationChangeSuccess", function() {
									h.l.j( d.b.df )
								} );
								a.$on( "$routeChangeStart", function( a, b ) {
									var c = {
											url: location.href
										},
										e = b && b.$$route;
									e && ( c.g = e );
									h.l.j( d.b.oc, {
										next: c
									} )
								} );
								a.$on( "$routeChangeSuccess", function() {
									h.l.j( d.b.pc )
								} );
								a.$on( "$stateChangeStart", function( a, b ) {
									h.l.j( d.b.uc, {
										next: {
											state: b
										}
									} )
								} );
								a.$on( "$stateChangeSuccess",
									function() {
										h.l.j( d.b.vc )
									} );
								a.$on( "$viewContentLoaded", function( a ) {
									var b = {
										url: location.href
									};
									if ( a = a && a.P && a.P.$state && a.P.$state.current ) b.state = a;
									h.l.j( d.b.Ac, {
										next: b
									} )
								} );
								a.$on( "$includeContentRequested", function() {
									h.l.j( d.b.Pe )
								} );
								a.$on( "$includeContentLoaded", function() {
									h.l.j( d.b.Oe )
								} );
								return a
							} ] )
						};
						c.prototype.Te = function( b ) {
							var c = this;
							b.$$completeOutstandingRequest = a.aop.before( b.$$completeOutstandingRequest, function() {
								c.l.j( d.b.wb )
							} )
						};
						return c
					}();
					d.ag = e;
					d.ngMonitor = new e
				} )( a.ng || ( a.ng = {} ) )
			} )( g ||
				( g = {} ) );
			( function( a ) {
				var d = a.ng || ( a.ng = {} );
				d.conf.disabled || a.monitor.tc( d.ngMonitor )
			} )( g || ( g = {} ) )
		}
	} )();
} )();
/**
 * @fileOverview
 * Copyright (c) 2013 Aaron Gloege
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * jQuery Tap Plugin
 * Using the tap event, this plugin will properly simulate a click event
 * in touch browsers using touch events, and on non-touch browsers,
 * click will automatically be used instead.
 *
 * @author Aaron Gloege
 * @version 1.1.0
 */
( function( document, $ ) {
	'use strict';

	/**
	 * Event namespace
	 *
	 * @type String
	 * @final
	 */
	var HELPER_NAMESPACE = '._tap';

	/**
	 * Event namespace
	 *
	 * @type String
	 * @final
	 */
	var HELPER_ACTIVE_NAMESPACE = '._tapActive';

	/**
	 * Event name
	 *
	 * @type String
	 * @final
	 */
	var EVENT_NAME = 'tap';

	/**
	 * Event variables to copy to touches
	 *
	 * @type String[]
	 * @final
	 */
	var EVENT_VARIABLES = 'clientX clientY screenX screenY pageX pageY'.split( ' ' );

	/**
	 * jQuery body object
	 *
	 * @type jQuery
	 */
	var $BODY;

	/**
	 * Last canceled tap event
	 *
	 * @type jQuery.Event
	 * @private
	 */
	var _lastTap;

	/**
	 * Last touchstart event
	 *
	 * @type jQuery.Event
	 * @private
	 */
	var _lastTouch;

	/**
	 * Object for tracking current touch
	 *
	 * @type Object
	 * @static
	 */
	var TOUCH_VALUES = {

		/**
		 * Number of touches currently active on touchstart
		 *
		 * @property count
		 * @type Number
		 */
		count: 0,

		/**
		 * touchstart/mousedown jQuery.Event object
		 *
		 * @property event
		 * @type jQuery.Event
		 */
		event: 0

	};

	/**
	 * Create a new event from the original event
	 * Copy over EVENT_VARIABLES from the original jQuery.Event
	 *
	 * @param {String} type
	 * @param {jQuery.Event} e
	 * @return {jQuery.Event}
	 * @private
	 */
	var _createEvent = function( type, e ) {
		var originalEvent = e.originalEvent;
		var event = $.Event( originalEvent );

		event.type = type;

		var i = 0;
		var length = EVENT_VARIABLES.length;

		for ( ; i < length; i++ ) {
			event[ EVENT_VARIABLES[ i ] ] = e[ EVENT_VARIABLES[ i ] ];
		}

		return event;
	};

	/**
	 * Determine if a valid tap event
	 *
	 * @param {jQuery.Event} e
	 * @return {Boolean}
	 * @private
	 */
	var _isTap = function( e ) {
		if ( e.isTrigger ) {
			return false;
		}

		var startEvent = TOUCH_VALUES.event;
		var xDelta = Math.abs( e.pageX - startEvent.pageX );
		var yDelta = Math.abs( e.pageY - startEvent.pageY );
		var delta = Math.max( xDelta, yDelta );

		return (
			e.timeStamp - startEvent.timeStamp < $.tap.TIME_DELTA &&
			delta < $.tap.POSITION_DELTA &&
			( !startEvent.touches || TOUCH_VALUES.count === 1 ) &&
			Tap.isTracking
		);
	};

	/**
	 * Determine if mousedown event was emulated from the last touchstart event
	 *
	 * @function
	 * @param {jQuery.Event} e
	 * @returns {Boolean}
	 * @private
	 */
	var _isEmulated = function( e ) {
		if ( !_lastTouch ) {
			return false;
		}

		var xDelta = Math.abs( e.pageX - _lastTouch.pageX );
		var yDelta = Math.abs( e.pageY - _lastTouch.pageY );
		var delta = Math.max( xDelta, yDelta );

		return (
			Math.abs( e.timeStamp - _lastTouch.timeStamp ) < 750 &&
			delta < $.tap.POSITION_DELTA
		);
	};

	/**
	 * Normalize touch events with data from first touch in the jQuery.Event
	 *
	 * This could be done using the `jQuery.fixHook` api, but to avoid conflicts
	 * with other libraries that might already have applied a fix hook, this
	 * approach is used instead.
	 *
	 * @param {jQuery.Event} event
	 * @private
	 */
	var _normalizeEvent = function( event ) {
		if ( event.type.indexOf( 'touch' ) === 0 ) {
			event.touches = event.originalEvent.changedTouches;
			var touch = event.touches[ 0 ];

			var i = 0;
			var length = EVENT_VARIABLES.length;

			for ( ; i < length; i++ ) {
				event[ EVENT_VARIABLES[ i ] ] = touch[ EVENT_VARIABLES[ i ] ];
			}
		}

		// Normalize timestamp
		event.timeStamp = Date.now ? Date.now() : +new Date();
	};

	/**
	 * Tap object that will track touch events and
	 * trigger the tap event when necessary
	 *
	 * @class Tap
	 * @static
	 */
	var Tap = {

		/**
		 * Flag to determine if touch events are currently enabled
		 *
		 * @property isEnabled
		 * @type Boolean
		 */
		isEnabled: false,

		/**
		 * Are we currently tracking a tap event?
		 *
		 * @property isTracking
		 * @type Boolean
		 */
		isTracking: false,

		/**
		 * Enable touch event listeners
		 *
		 * @method enable
		 */
		enable: function() {
			if ( Tap.isEnabled ) {
				return;
			}

			Tap.isEnabled = true;

			// Set body element
			$BODY = $( document.body )
				.on( 'touchstart' + HELPER_NAMESPACE, Tap.onStart )
				.on( 'mousedown' + HELPER_NAMESPACE, Tap.onStart )
				.on( 'click' + HELPER_NAMESPACE, Tap.onClick );
		},

		/**
		 * Disable touch event listeners
		 *
		 * @method disable
		 */
		disable: function() {
			if ( !Tap.isEnabled ) {
				return;
			}

			Tap.isEnabled = false;

			// unbind all events with namespace
			$BODY.off( HELPER_NAMESPACE );
		},

		/**
		 * Store touch start values and target
		 *
		 * @method onTouchStart
		 * @param {jQuery.Event} e
		 */
		onStart: function( e ) {
			if ( e.isTrigger ) {
				return;
			}

			_normalizeEvent( e );

			// Ignore non left mouse clicks
			if ( $.tap.LEFT_BUTTON_ONLY && !e.touches && e.which !== 1 ) {
				return;
			}

			if ( e.touches ) {
				TOUCH_VALUES.count = e.touches.length;
			}

			if ( Tap.isTracking ) {
				return;
			}

			if ( !e.touches && _isEmulated( e ) ) {
				return;
			}

			Tap.isTracking = true;

			TOUCH_VALUES.event = e;

			if ( e.touches ) {
				_lastTouch = e;
				$BODY
					.on( 'touchend' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onEnd )
					.on( 'touchcancel' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onCancel );
			} else {
				$BODY.on( 'mouseup' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onEnd );
			}
		},

		/**
		 * If touch has not been canceled, create a
		 * tap event and trigger it on the target element
		 *
		 * @method onTouchEnd
		 * @param {jQuery.Event} e
		 */
		onEnd: function( e ) {
			var event;

			if ( e.isTrigger ) {
				return;
			}

			_normalizeEvent( e );

			if ( _isTap( e ) ) {
				event = _createEvent( EVENT_NAME, e );
				_lastTap = event;
				$( TOUCH_VALUES.event.target ).trigger( event );
			}

			// Cancel active tap tracking
			Tap.onCancel( e );
		},

		/**
		 * Cancel tap and remove event listeners for active tap tracking
		 *
		 * @method onTouchCancel
		 * @param {jQuery.Event} e
		 */
		onCancel: function( e ) {
			if ( e && e.type === 'touchcancel' ) {
				e.preventDefault();
			}

			Tap.isTracking = false;

			$BODY.off( HELPER_ACTIVE_NAMESPACE );
		},

		/**
		 * If tap was canceled, cancel click event
		 *
		 * @method onClick
		 * @param {jQuery.Event} e
		 * @return {void|Boolean}
		 */
		onClick: function( e ) {
			if ( !e.isTrigger &&
				_lastTap &&
				_lastTap.isDefaultPrevented() &&
				_lastTap.target === e.target &&
				_lastTap.pageX === e.pageX &&
				_lastTap.pageY === e.pageY &&
				e.timeStamp - _lastTap.timeStamp < 750
			) {
				_lastTap = null;
				return false;
			}
		}

	};

	// Enable tab when document is ready
	$( document ).ready( Tap.enable );

	// Configurable options
	$.tap = {
		POSITION_DELTA: 10, // Max distance between touchstart and touchend to be considered a tap
		TIME_DELTA: 400, // Max duration between touchstart and touchend to be considered a tap
		LEFT_BUTTON_ONLY: true // Only accept left mouse button actions
	};

}( document, jQuery ) );

/*
 * Config to override default jQuery Tap time delta for iOS devices.
 * Pulled into a config file so it will not be overwritten.
 */
$.tap.TIME_DELTA = 800;

( function( $ ) {

	$.fn.browserAlerts = function() {

		var userAgent = navigator.userAgent;
		init();

		function buildingAlertDome( alertText ) {
			$( ".twc-browser-alert-section:not(.wcm-mode-edit-design) ul" ).append(
				$( "<li>" ).addClass( "--alert twc-full twc-first twc-last" ).append(
					$( "<p>" ).addClass( "twc-container twc-alert-text" ).append(
						alertText
					).append(
						$( "<a>" ).addClass( "twc-icon twc-alert-close twc-show_hide" )
					)
				)
			);
		}

		function init() {
			var allowedBrowsers = {
				"IE": minIEVersion,
				"FF": minFFVersion,
				"Chrome": minGCVersion,
				"Safari": minSafVersion,
				"iOS": minIOSVersion,
				"Android": minAndVersion,
				"UIWebView": "-1"
			};

			var userBrowser = Twc.Checkout.Util.getBrowserAndVersion( userAgent );

			if ( !( userBrowser.name in allowedBrowsers ) ) {
				buildingAlertDome( browserText );
			} else if ( new Number( userBrowser.ver ) < new Number( allowedBrowsers[ userBrowser.name ] ) ) {
				buildingAlertDome( versionText );
			} else if ( !navigator.cookieEnabled ) {
				buildingAlertDome( cookieText );
			}

			$( '.twc-browser-alert-section' ).on( 'click', '.twc-show_hide', function( e ) {
				e.preventDefault();
				$( this ).parent().slideToggle();
			} );
		}
	};
} )( jQuery );

$( document ).ready( function() {
	if ( typeof minIEVersion !== 'undefined' && typeof minFFVersion !== 'undefined' && typeof minGCVersion !== 'undefined' && typeof minSafVersion !== 'undefined' && typeof minIOSVersion !== 'undefined' && typeof minAndVersion !== 'undefined' ) {
		$( '.twc-browser-alert-section' ).browserAlerts();
	}
} );

/**
 * @author McGowan
 * @namespace
 */
var Twc = Twc || {}

/** @author McGowan
 * Logs a message to on-screen console for ipad and stuff
 * @param o {Object} object to show
 * @param isError {Boolean} indicates error message
 */
function logOsd( o, isError ) {
	var $osdConsole = $( '#twcLog' );
	var color = isError ? 'red' : 'lime';
	if ( $osdConsole.length === 0 ) {
		logEl = $( '<div id="twcLog"  style="z-index:5000;font-size: 11px;border-color: #dddddd; border-style: solid; border-width: 1px 1px 0 0; padding: 2px; position: fixed; bottom: 0; right: 0px;background: black !important; color: lime; font-size: 11px; font-family: arial;">\
		           <div style="color: #aaaaaa !important; text-align: right;"><a style="font-size; 9px !important; color: #aaaaaa !important; " href="javascript:void(0)" onclick="$(\'#twcLog\').hide().find(\'.log-entry\').remove();return false;">clear</a></div>\
		           <div id="twcLogContent" style="font-size: 11px; padding: 5px;"></div>\
		         </div>' );
		$( 'body' ).append( logEl );
		$osdConsole = $( '#twcLog' );
	}
	$osdConsole.find( '#twcLogContent' ).append( '<div style="color: ' + color + ';" class="log-entry">' + o + '</div>' );
	$osdConsole.show();
}

/** Try/Catch convenince of console.log(o)
 * @author McGowan
 * @param {Object} o Object to log
 * @param {Boolean} osd use on-screen display (for mobile devices)
 */
function log( o, osd ) {
	var onScreen = osd || Twc.Settings.forceLogOsd;
	try {
		console.log( o )
	} catch ( e ) {}
	if ( onScreen ) {
		logOsd( o, 0 );
	}
}
/** Try/Catch convenince of console.error(o)
 * @author McGowan
 * @param {Object} o Object to log
 * @param {Boolean} osd use on-screen display (for mobile devices)
 */
function error( o, osd ) {
	var onScreen = osd || Twc.Settings.forceErrorOsd;
	try {
		console.error( o )
	} catch ( e ) {}
	if ( onScreen ) {
		logOsd( o, 1 );
	}
}
/** Try/Catch convenince of console.warn(o)
 * @author McGowan
 * @param {Object} o Object to log
 * @param {Boolean} osd use on-screen display (for mobile devices)
 */
function warn( o, osd ) {
	var onScreen = osd || Twc.Settings.forceErrorOsd;
	try {
		console.warn( o )
	} catch ( e ) {}
	if ( onScreen ) {
		logOsd( o, 1 );
	}
}
/** Try/Catch convenince of console.dir(o)
 * @author McGowan
 * @param {Object} o Object to log
 */
function dir( o ) {
	try {
		console.dir( o )
	} catch ( e ) {}
}


if ( Modernizr ) {
	// Ensure IE CSS selector (ie6,ie7,etc...) is set
	// from http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
	if ( Modernizr.addTest ) {
		rv = -1;
		if ( navigator.appName == 'Microsoft Internet Explorer' ) {
			rv = document.documentMode;
			if ( rv == undefined || rv == 0 ) {
				var ua = navigator.userAgent;
				var re = new RegExp( "MSIE ([0-9]{1,}[\.0-9]{0,})" );
				if ( re.exec( ua ) != null )
					rv = parseFloat( RegExp.$1 );
			}
		}
		if ( rv != -1 ) {
			Modernizr.addTest( 'ie' + rv, function() {
				return true;
			} );
		}
	}

	/* Adds setObject and getObject to localStorage prototype
	 * Allows saving and retrieving of JSON objects
	 * Uses short-circuit evaluation and returns null if key does not exist
	 */
	if ( Modernizr.localstorage ) {
		Storage.prototype.setObject = function( key, value ) {
			this.setItem( key, JSON.stringify( value ) );
		}
		Storage.prototype.getObject = function( key ) {
			var value = this.getItem( key );
			return value && JSON.parse( value );
		}
	}
}
/**
 * Contains development-only code and routines that would not run during formal integration and production.  Such
 * code would be used to clean up or prep ingested Siteworx deliverables, or run custom tests during development.
 * Ultimately, we need to separate out non-production code from dev and tests
 * @author McGowan
 * @namespace
 *
 */
Twc.DevOnly = ( function() {

	var urlParams = null;

	if ( Twc.Settings.runDevOnlyCode ) {
		// get query string parameters
		urlParams = Twc.Checkout.Util.getUrlParams();

		// change Settings.js based on URL params

		if ( 'undefined' !== typeof urlParams[ 'qa_force_timeout' ] ) {
			Twc.Settings.sessionTimeout = 0;
			Twc.Settings.sessionTimeoutWarning = -1;
		} else if ( 'undefined' !== typeof urlParams[ 'qa_force_timeout_warning' ] ) {
			Twc.Settings.sessionTimeout = 6 * 1000;
			Twc.Settings.sessionTimeoutWarning = 2 * 1000;
		}

		if ( 'undefined' !== typeof urlParams[ 'qa_force_unknown_error' ] ) {
			$( document ).ready( function() {
				Twc.Checkout.Util.showErrorMessage( new Error( "This is an explicit error thrown for testing" ) );
			} );
		}

		//Set Javascript Disabled Error appropriately
		if ( 'undefined' !== typeof urlParams[ 'qa_force_js_disabled' ] ) {
			$( 'body' ).addClass( 'no-js' );
		}

		// show outdated browser message
		if ( 'undefined' !== typeof urlParams[ 'qa_force_outdated_browser' ] ) {
			$( 'body' ).addClass( 'ie6' );
		}

		if ( 'undefined' !== typeof urlParams[ 'qa_force_billing_iframe_error' ] ) {
			Twc.Settings.ajaxUrls.CSTToken = 'EXPLICIT_NOT_FOUND_URL';
		}
	}




	return {
		/** Prepares a Siteworx Delivery page for us to work with. Should only be called once and is very
		 * specific, so modify the source as you see fit.
		 * @author McGowan
		 */
		prepPage: function() {
			if ( !Twc.Settings.runDevOnlyCode )
				return;

			log( 'DevOnly.prepPage()' );


			// set appropriate progress bar steps
			var stepParam = urlParams[ 'qa_checkout_step' ];
			if ( stepParam ) {
				var $stepsWrapper = $( '.checkout-steps' );
				var $steps = $stepsWrapper.find( '.step-list > li' ).removeClass( 'active' ); // remove SWX active states
				var $step = $steps.eq( stepParam - 1 );
				$step.addClass( 'active' );

				var subStepParam = urlParams[ 'qa_checkout_substep' ];
				if ( subStepParam ) {
					$stepsWrapper.addClass( 'show-sub-steps' );
					$subSteps = $step.find( '.sub-steps ul > li' ).removeClass( 'active' ); // remove SWX active states
					$subSteps.eq( subStepParam - 1 ).addClass( 'active' );
				}

			}


			// collapse disclaimers (before they are initialized)
			$( '.disclaimer' ).removeClass( 'active' );




			// initialize any additions or removal of coupons
			$( '.promo-code .applied-codes li' ).each( function() {
				var $this = $( this );
				$this.find( '.remove' ).click( function() {
					$this.fadeOut();
				} );
			} );



			// disable some things for UI testing
			var $buttons = $( '.collapsible .button' ).click( function( e ) {
				e.stopPropagation();
				alert( '(modal popup to display)' );
			} );
			var $buttons = $( '.collapsible a.toggle' ).click( function( e ) {
				e.preventDefault();
			} );


			// hide Siteworx' collapsible items
			var $collapsible = $( '.plans .collapsible, .internet-customize-accordion .collapsible' ).removeClass( 'active' ); // select plans pages
			var $contentSections = $collapsible.find( 'section' ).hide();


			if ( 'undefined' != typeof urlParams[ 'qa_hide_you_can_get' ] ) {
				$( '.col h3:eq(1)' ).remove();
				$( '.col ul.services:eq(1)' ).remove();
			}

			// hide Terms & Conditions for step 4 of customize phone
			if ( 'undefined' != typeof urlParams[ 'qa_hide_phone_tc' ] ) {
				$( '.js-terms-wrapper' ).addClass( 'hidden' );
			}

			// customize phone requires special treatment
			if ( 'undefined' != typeof urlParams[ 'qa_customize_phone_step' ] ) {
				var step = parseInt( urlParams[ 'qa_customize_phone_step' ], 10 ) - 1;
				if ( step >= 0 && step < 4 ) {
					$( '.phone-customize-accordion .collapsible' ).removeClass( 'active' );
					var $collapsibleTop = $( '.phone-customize-accordion .collapsible:not(.inner-collapse)' ); // top-level

					// format for 1 section or all sections (default)
					if ( 'undefined' != typeof urlParams[ 'qa_customize_phone_step1only' ] ) { // only step 1 shown
						$collapsibleTop.slice( 1 ).remove(); // remove sections 2+
						$collapsibleTop.addClass( 'active' ).find( '.continue' ).remove(); // remove continue button
					} else { // all 4 steps
						$collapsibleTop.filter( ':not(:eq(' + step + '))' ).addClass( 'disabled' ); // disable all but first
						$collapsibleTop.eq( step ).addClass( 'active' ); // open current step
						$collapsibleTop.filter( ':lt(' + step + ')' ).addClass( 'complete' ).removeClass( 'disabled' ); // show previous steps completed

						//select second radio
						$( '.select-or-transfer-option input[type=radio]' ).eq( 1 ).click(); // name them and select first one

						// remove error classes
						$( '.transfer-number fieldset, .customer-authorization label' ).removeClass( 'error' );

						// remove and hide errors until validation shows them
						$( '.transfer-number .error-module, .customer-authorization .error-module' ).hide().find( 'ul' ).remove();

						// provide values for all select lists
						$( '.phone-customize-accordion select' ).each( function( s ) {
							var label = this.id || this.name;
							$( this ).find( 'option' ).each( function( o ) {
								$( this ).attr( 'value', label + '_' + o );
							} );
						} ).slice( 0, 3 ).prepend( '<option value="" selected="selected">Please select</option>' );

						function setBirthdateFieldValues( $select ) {
							$select.find( 'option' ).each( function( i ) {
								var val = ( i === 0 ) ? '' : i;
								$( this ).attr( 'value', val );
							} );
						}
						setBirthdateFieldValues( $( '#birth-month' ) );
						setBirthdateFieldValues( $( '#birth-day' ) );
						setBirthdateFieldValues( $( '#birth-year' ) );

						if ( 'undefined' != typeof urlParams[ 'qa_customize_tv_autocomplete' ] ) {
							$( '#current-provider option' ).eq( 1 ).prop( 'selected', true );
							$( '#current-provider-state option' ).eq( 1 ).prop( 'selected', true );
							$( '#current-provider-state-billing option' ).eq( 1 ).prop( 'selected', true );
							$( '#phone-number, #account-number, #account-name, #address, #city, #zip-code, #full-name1, #full-name2' ).attr( 'value', 'AUTO-COMPLETED' );
							$( '#choose-TWC' ).prop( 'checked', true );

							$( '#birth-month option' ).eq( 1 ).prop( 'selected', true );
							$( '#birth-day option' ).eq( 1 ).prop( 'selected', true );
							$( '#birth-year option' ).eq( 1 ).prop( 'selected', true );
						}
					}
				}
			}

			// customize phone requires special treatment
			if ( 'undefined' != typeof urlParams[ 'qa_customize_tv_step' ] ) {
				var step = parseInt( urlParams[ 'qa_customize_tv_step' ], 10 ) - 1;
				if ( step >= 0 && step < 2 ) {
					$( '.tv-customize-accordion .collapsible:not(.tabs .collapsible)' ).removeClass( 'active' );
					var $collapsibleTop = $( '.tv-customize-accordion > .collapsible' ); // top-level
					$collapsibleTop.eq( step ).addClass( 'active' ); // open current step
				}
			}


			/*******************************************************
			              Installation Options
			*******************************************************/

			// collapsse installation options but keep first open
			$( '#order_review .installation-options .collapsible' ).each( function( i ) {
				if ( i === 0 ) return true; // skip first
				$( this ).removeClass( 'active' );
			} );

			// hide Installation Options and only show 1
			if ( 'undefined' != typeof urlParams[ 'qa_one_installation' ] ) {
				$( '#order_review .num-visits, #order_review .option-details .date:eq(1)' ).remove();
			}

			// make the calendar show during development
			if ( 'undefined' != typeof urlParams[ 'dev_calendar_position' ] ) {
				$( document ).ready( function() {
					var $div = $( '.installation-options > .collapsible:eq(2)' );
					$div.find( 'header' ).click();
					window.setTimeout( function() {
						$div.find( '.datepicker-link:eq(0)' ).click();
					}, 500 );
				} );
			}



			// select packages page
			// remove descoped item not yet removed by siteworx
			if ( Twc.Checkout.Util.getCurrentPageId() === 'select_packages' ) {
				$( '.packages-slider' ).slice( 1 ).remove();
				$( '.whats-included-wrap' ).hide();
				$( '.whats-included' ).slice( 1, 3 ).remove();
				$( '.packages-list, .wrap .error-module' ).remove();

			}
		}
	}
}() );

/* ==========================================================================
    Sticky -- Version: 1.9.0.1 - Updated: 1/6/2014
   ========================================================================== */

Twc.Sticky = {
	init: function() {
		if ( $( '.sticky' ).offset() ) {
			$( function() {
				var stickyTop = $( '.sticky' ).offset().top;

				var stickyNav = function() {
					var scrollTop = $( window ).scrollTop();

					if ( scrollTop > stickyTop ) {
						$( '.sticky' ).addClass( 'js-fixed' );
						$( '.spacer' ).css( {
							'height': $( '.sticky' ).height() + 'px'
						} );
					} else {
						$( '.sticky' ).removeClass( 'js-fixed' );
						$( '.spacer' ).css( {
							'height': '0px'
						} );
					}
				};

				stickyNav();

				$( window ).scroll( function() {
					stickyNav();
				} );
			} );
		}
	}
};

$( document ).load( Twc.Sticky.init() );

/**
 *  Contains code to return templates used with JSON for rendering HTML.  Current implementation is dust.js
 * @author McGowan
 * @namespace
 */
Twc.Templates = ( function() {
	// stores the template ID if compiled
	var compiledTemplates = {};

	/** Compiles a template and loads it into dust's cache
	 * @author McGowan
	 * @param{String} id of template
	 * @returns compiled template
	 */
	function loadTemplate( id ) {
		var templateUrl = Twc.Settings.templateUrls[ id ];
		var template = Twc.Checkout.Util.getUrl( templateUrl, 'text' );
		var templateCompiled = dust.compile( template, id );
		dust.loadSource( templateCompiled );
		compiledTemplates[ id ] = 1;
	}

	return {
		/**
		 * @author McGowan
		 * @returns rendered content string
		 */
		getRenderedOutput: function( templateId, jsonData ) {
			try {
				if ( !compiledTemplates[ templateId ] ) {
					loadTemplate( templateId );
				}
				var rendered;
				dust.render( templateId, jsonData, function( err, out ) {
					rendered = out;
				} );
				return rendered;
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e )
			}
		}
	}
} )();
/**
 * Manages functionality for tooltip display. Tooltips require html attribute data-tooltip on the target tooltip instantiation element.
 * Required data-tooltip JSON is {"heading", "body"}
 * @author McGowan
 * @namespace
 */
Twc.Checkout = Twc.Checkout || {};
Twc.Checkout.Tooltip = ( function() {

	/**
	 * marker to indicate link was initalized
	 * @author McGowan
	 */
	var initializedClass = 'js-tooltip-initialized';

	var tooltipWrapperClass = 'tooltip-popup';

	// using pseudo elements for arrow, so we must override with style tag
	var $arrowStyle = $( '<style type="text/css" title="js-tooltips"></style>' );

	// we must override CSS, so ensure selectors match CSS declaration
	var arrowCSSSelectors = '.tooltip-popup.top .tooltip-content:before, .tooltip-popup.top .tooltip-wrap:before, .tooltip-popup.top .tooltip-wrap:after, ' +
		'.tooltip-popup.bottom .tooltip-content:before, .tooltip-popup.bottom .tooltip-wrap:before, .tooltip-popup.bottom .tooltip-wrap:after';

	function cancelTooltipClose( id ) {
		window.clearTimeout( id );
	}

	return {
		/** initializes a group of elements Prevents double initalization.
		 * @author McGowan
		 * @param $objects {Object} jQuery object to iterate over, instantiating on each()
		 */
		init: function( $objects ) {
			try {
				if ( typeof $objects === 'undefined' || !( $objects instanceof jQuery ) ) {
					error( '$rows is not a jQuery object' );
					return;
				}

				var $window = $( window );

				$( 'head' ).append( $arrowStyle ); // JQuery should only be adding this once, but it's ok to call on init()

				$objects.each( function( i ) {
					var $me = $( this );
					if ( $me.hasClass( initializedClass ) ) {
						error( 'tooltip already initialized' );
						return true; // continue to next
					}

					var data = Twc.Checkout.Util.safeParseJson( $me.attr( 'data-tooltip' ) );
					if ( typeof data.body === 'undefined' ) {
						error( "Cound not instantiate tooltip" );
						return true; // continue to next
					}

					var tooltipOpen = false;
					var tooltipHeading = data.heading ? '<header>' + unescape( data.heading ) + '</header>' : '';
					var tooltipBody = unescape( data.body ) || '';
					var mouseoutTimeoutId; // used to keep tooltip open for a little bit
					var appendedToDom = false;

					// set to .top for accurate height calculation when determining whether to switch to bottom
					var $tooltip = $( '<div class="' + tooltipWrapperClass + ' top"><div class="tooltip-content"><div class="tooltip-wrap"><a href="" class="close learn">Close</a>' + tooltipHeading + tooltipBody + '</div></div></div>' )
						.on( 'mouseover', function( e ) {
							// e.stopPropagation();
							cancelTooltipClose( mouseoutTimeoutId );
						} ).on( 'mouseout', function() {
							startTooltipClose();
						} ).click( function( e ) {
							e.stopPropagation(); // prevent this from being closed by $(document).click()
						} );

					$tooltip.find( '.close' ).click( function( e ) {
						e.preventDefault();
						closeTooltip();
					} );

					function startTooltipClose() {
						mouseoutTimeoutId = window.setTimeout( function() {
							$tooltip.stop( true, true ).fadeOut( 200, function() {
								closeTooltip();
							} );
						}, 500 );
					}

					function closeTooltip() {
						$tooltip.hide();
						tooltipOpen = false;
					}

					function showTooltip() {
						$tooltip.stop( true, true );
						Twc.Checkout.Tooltip.closeAll(); // hide any other open tooltips
						$tooltip.css( 'opacity', 1 );
						var screen = {
							height: $window.height(),
							width: $window.width(),
							scrollTop: $( window ).scrollTop(),
							yBottom: $window.height + $( 'html' ).scrollTop()
						}

						var link = {}; // the link that triggers the tooltip
						link.h = $me.outerHeight( true );
						link.w = $me.outerWidth( true );
						link.top = $me.offset().top;
						link.left = $me.offset().left;

						var tooltip = {}
						tooltip.h = $tooltip.outerHeight( true );
						tooltip.w = $tooltip.outerWidth( true );

						// determine top position.  place above the source if tooltip would be off page.
						var screenBottom = $window.height() + $window.scrollTop();
						var tooltipBottom = ( link.top + link.h ) + tooltip.h;
						tooltip.top = ( tooltipBottom >= screenBottom ) ? link.top - tooltip.h : link.top + link.h;
						$tooltip.removeClass( 'top bottom' ).addClass( ( tooltipBottom >= screenBottom ) ? 'bottom' : 'top' );

						$arrowStyle.empty();
						// determine initial left position and right
						var leftPos = ( link.h > 20 ) ? ( link.left - ( tooltip.w / 2 ) ) : ( link.left - ( tooltip.w / 2 - link.w / 2 ) );

						// adjust the tooltip body, and arrow position if the body is off-screen (mobile devices)
						if ( tooltip.w > screen.width || leftPos < 0 ) { // flush left
							//If it's mobile/two-lines just have the arrow point 1/8 the way from the tooltip body (since we can't reasonably infer the length of the cut-off portion of text)
							if ( link.h > 20 ) {
								$arrowStyle.html( arrowCSSSelectors + ' {left: ' + ( tooltip.w / 8 ) + 'px;}' );
							}
							//Move the body to be fully on-screen (left: 0)
							$tooltip.css( {
								'position': 'absolute',
								'top': tooltip.top,
								'left': 0 + 'px'
							} );
						}
						//If the right corner of the tooltip extends off the right of the screen
						else if ( ( leftPos + tooltip.w ) > screen.width ) { // flush right
							//If the screen is cut off to the right, bring the window in, and adjust the arrow to point 6/8 of the way to the right
							$arrowStyle.html( arrowCSSSelectors + ' {left: ' + ( tooltip.w / 8 ) * 6 + 'px;}' );
							$tooltip.css( {
								'position': 'absolute',
								'top': tooltip.top,
								'left': ( screen.width - tooltip.w ) + 'px'
							} );
						}
						//default, centered behavior
						else {
							$tooltip.css( {
								'position': 'absolute',
								'top': tooltip.top,
								'left': leftPos + 'px'
							} );
						}

						$tooltip.fadeIn( 200, function() {
							$( this ).hover();
						} );
						tooltipOpen = true;
					}

					$me.click( function( e ) {
						e.stopPropagation();
						return false;
					} ).on( 'click mouseover', function() {
						cancelTooltipClose( mouseoutTimeoutId );
						if ( tooltipOpen ) {
							return;
						}
						if ( !appendedToDom ) {
							// ie8 requires show() on dom insert and setTimeout. Otherwise, tooltip arrows don't show until DIV is moused over
							// opacity:0 prevents flash on screen before it's positioned where it should be.
							$( 'body' ).append( $tooltip.css( 'opacity', 0 ).show() );
							appendedToDom = true;
							window.setTimeout( function() {
								showTooltip();
							}, 0 );
						} else {
							showTooltip();
						}
					} ).on( 'mouseout', function() {
						startTooltipClose();
					} );
					$me.addClass( initializedClass );
				} );
			} catch ( e ) {
				Twc.Checkout.Util.catchError( e );
			}

		},

		closeAll: function() {
			$( '.' + tooltipWrapperClass ).hide();
		}
	}
}() );