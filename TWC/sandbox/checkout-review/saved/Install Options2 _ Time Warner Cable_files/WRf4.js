/*! Copyright 2006-2015 ClickTale Ltd. */ ! function() {
	! function() {
		var bN = !0,
			bK = null,
			bJ = !1;

		function bI( ca ) {
			return function() {
				return ca
			}
		}
		var bG;
		var bF;

		function cs( cI ) {
			var ca = cI instanceof Array ? [] : {},
				cK, cJ;
			for ( cJ in cI ) {
				cI.hasOwnProperty( cJ ) && ( ( cK = cI[ cJ ] ) && "object" === typeof cK && ( cK instanceof Boolean || cK instanceof Number || cK instanceof String || ( cK = cs( cK ) ) ), ca[ cJ ] = cK )
			}
			return ca
		}

		function bE() {
			if ( bF ) {
				return bF
			}
			var ca = window.ClickTaleGlobal;
			ca || ( ca = {}, window.ClickTaleGlobal = ca );
			ca.exports = ca.exports || {};
			ca.symbols = ca.symbols || {};
			return bF = ca
		}
		var bD;
		bE().symbols.WREI = b4;

		function bC( ca ) {
			if ( !bD ) {
				ca = ca.ClickTaleSettings;
				if ( "object" !== typeof ca ) {
					return bK
				}
				bD || ( bD = cs( ca ) )
			}
			return bD
		}

		function b4() {
			bD = bK
		}

		function bB( cI, ca, cJ ) {
			return "function" === typeof cI ? cI : typeof cI === ca ? function() {
				return cI
			} : cJ || bK
		}

		function bH( cI ) {
			var cI = ( bC( cI ) || {} ).Persistence || {},
				ca = cI.EnableStorage,
				cM = cI.EnableStreams,
				cL = cI.EnableDispatch,
				cK = cI.AutoDispatch,
				cJ = cI.Providers;
			cI.EnableStorage = function() {
				var cN = "function" === typeof ca ? !!ca() : ca;
				return "boolean" === typeof cN ? cN : bJ
			};
			cI.EnableStreams = function() {
				var cN = "function" === typeof cM ? !!cM() : cM;
				return "boolean" === typeof cN ? cN : bJ
			};
			cI.EnableDispatch = function() {
				var cN = "function" === typeof cL ? !!cL() : cL;
				return "boolean" === typeof cN ? cN : bJ
			};
			cI.AutoDispatch = function() {
				var cN = "function" === typeof cK ? !!cK() : cK;
				return "boolean" === typeof cN ? cN : bN
			};
			cI.Providers = cJ instanceof Array ? cJ : [];
			return cI
		}
		var bA;

		function bo() {
			if ( !bA ) {
				var ca = bE();
				ca.exports.persistence = ca.exports.persistence || {};
				bA = ca.exports.persistence
			}
			return bA
		}

		function bz( cI, ca, cJ ) {
			this.key = cI;
			this.item = ca || {};
			this.u = cJ || bJ
		}

		function by( cI, ca, cJ ) {
			this.key = cI;
			this.a = ca;
			this.L = cJ;
			this.T = bJ
		}
		try {
			Object.defineProperty( {}, "x", {
				get: bI( bN )
			} )
		} catch ( bi ) {}

		function bx( cI, ca ) {
			this.ra = cI;
			this.la = ca
		}( function( cI, ca ) {
			function cJ() {
				this.constructor = cI
			}
			cJ.prototype = ca.prototype;
			cI.prototype = new cJ
		} )( bx, Error.prototype );
		bx.prototype.name = "PersistenceMechanismException";

		function cC( cI, ca ) {
			this.j = cI;
			this.G = cI.localStorage;
			this.B = ca
		}
		bG = cC.prototype;
		bG.q = function( cI, ca, cL ) {
			var cK = this.B.stringify( cI.item );
			try {
				this.G.setItem( cI.key, cK ), cL = ca
			} catch ( cJ ) {
				throw new bx( bN, this )
			} finally {
				cL && cL( cI.key )
			}
		};
		bG.remove = function( cI, ca, cJ ) {
			try {
				this.G.removeItem( cI.key ), cJ = ca
			} finally {
				cJ && cJ( cI.key )
			}
		};
		bG.get = function( cI, ca ) {
			ca && ca( new bz( cI.key, this.B.parse( this.G.getItem( cI.key ) ) ) )
		};
		bG.all = function( cI, ca, cL ) {
			var cK = [],
				cJ;
			for ( cJ in this.G ) {
				bv( cJ, ca, cL ) && cK.push( new bz( cJ, this.B.parse( this.G.getItem( cJ ) ) ) )
			}
			cI && cI( cK )
		};
		bG.clear = function( cI ) {
			for ( var ca in this.G ) {
				bv( ca ) && this.G.remove( ca )
			}
			cI && cI( bN )
		};
		bG.w = function( ca ) {
			this.clear( ca )
		};

		function bu( cI, ca ) {
			var cK;
			this.k = bJ;
			try {
				if ( cK = cI.localStorage, this.k = !!cK ) {
					cK.setItem( "ct.p.k", "ct.p.d" ), "ct.p.d" === cK.getItem( "ct.p.k" ) && cK.removeItem( "ct.p.k" ), cn || ( cn = new cC( cI, ca ) )
				}
			} catch ( cJ ) {
				this.k = bJ
			}
		}
		bu.prototype.$ = bI( bN );
		bu.prototype.get = function() {
			return cn
		};
		var cn = bK;

		function cm() {
			this.db = bK;
			this.r = []
		}
		cm.prototype.qa = 1;
		cm.prototype.pa = "ct.db";
		cm.prototype.ha = "ct.db.os";
		cm.prototype.A = function( cI, ca, cJ ) {
			this.r.push( function() {
				ca.apply( cI, cJ )
			} )
		};

		function ct( cI ) {
			for ( var ca = 0, cJ; ca < cI.r.length; ca++ ) {
				( cJ = cI.r[ ca ] ) && cJ()
			}
		}

		function cl( cI, ca, cJ ) {
			this.j = cI;
			this.l = ca;
			this.i = cJ
		}
		bG = cl.prototype;
		bG.q = function( cI, ca, cJ ) {
			this.i.A( this.l, this.l.q, arguments )
		};
		bG.remove = function( cI, ca, cJ ) {
			this.i.A( this.l, this.l.remove, arguments )
		};
		bG.get = function( cI, ca ) {
			this.i.A( this.l, this.l.get, arguments )
		};
		bG.all = function( cI, ca, cJ ) {
			this.i.A( this.l, this.l.all, arguments )
		};
		bG.clear = function( ca ) {
			this.i.A( this.l, this.l.clear, arguments )
		};
		bG.w = function( ca ) {
			ca && ca( bN )
		};

		function cb( cI, ca, cJ ) {
			this.j = cI;
			this.l = ca;
			this.I = cJ.db;
			this.t = cJ.ha
		}
		bG = cb.prototype;
		bG.q = function( cP, cO, cN ) {
			var cM, cL, cK, cJ = cP.key,
				cI = bN;
			try {
				cM = this.I.transaction( this.t, "readwrite" ), cL = cM.objectStore( this.t ), cM.onabort = cM.onerror = function() {
					cN && cN( cJ )
				}, cM.oncomplete = function() {
					var cQ = cI ? cO : cN;
					cQ && cQ( cJ )
				}, cK = ck( cJ ) ? cL.put( cP.item, cJ ) : cL.add( cP.item, cJ ), cK.onerror = function() {
					cI = bJ
				}
			} catch ( ca ) {
				throw cI = bJ, ch( this, ca )
			}
		};
		bG.remove = function( cI, ca, cN ) {
			var cM, cL, cK = bN;
			try {
				cM = this.I.transaction( this.t, "readwrite" ), cM.onabort = cM.onerror = function() {
					cN && cN( cI.key )
				}, cM.oncomplete = function() {
					var cO = cK ? ca : cN;
					cO && cO( cI.key )
				}, cL = cM.objectStore( this.t )[ "delete" ]( cI.key ), cL.onerror = function() {
					cK = bJ
				}
			} catch ( cJ ) {
				throw cK = bJ, ch( this, cJ )
			}
		};
		bG.get = function( cI, ca ) {
			var cK;
			try {
				cK = this.I.transaction( this.t, "readonly" ), cK.onabort = cK.onerror = function() {
					ca && ca( cI )
				}, cK.oncomplete = function( cL ) {
					cI.item = cL.target.result;
					ca && ca( cI )
				}, cK.objectStore( this.t ).get( cI.key )
			} catch ( cJ ) {
				throw ch( this, cJ )
			}
		};
		bG.all = function( cP, cO, cN ) {
			function cM() {
				cP && cP( cL )
			}
			var cL = [],
				cK, cJ, cI;
			try {
				cK = this.I.transaction( this.t, "readonly" ), cK.onabort = cK.onerror = cK.oncomplete = cM, cJ = cK.objectStore( this.t ).openCursor(), cJ.onsuccess = function( cQ ) {
					if ( cI = cQ.target.result ) {
						bv( cI.key, cO, cN ) && cL.push( new bz( cI.key, cI.value ) ), cI[ "continue" ]()
					}
				}
			} catch ( ca ) {
				throw ch( this, ca )
			}
		};
		bG.clear = function( cI ) {
			var ca;
			try {
				ca = this.I.transaction( this.t, "readwrite" ), ca.onabort = ca.onerror = function() {
					cI && cI( bJ )
				}, ca.oncomplete = function() {
					cI && cI( bN )
				}, ca.objectStore( this.t ).clear()
			} catch ( cJ ) {
				throw ch( this, cJ )
			}
		};
		bG.w = function( cI ) {
			var ca = bN;
			try {
				this.I.close()
			} catch ( cJ ) {
				ca = bJ
			}
			cI && cI( ca )
		};

		function ch( cI, ca ) {
			var cJ = bJ;
			ca instanceof DOMException && "InvalidStateError" === ca.name && ( cJ = bN );
			return new bx( cJ, cI )
		}

		function bL() {}
		bG = bL.prototype;
		bG.q = function( cI, ca, cJ ) {
			( ca = cJ || ca ) && ca( cI.key )
		};
		bG.remove = function( cI, ca, cJ ) {
			( ca = cJ || ca ) && ca( cI.key )
		};
		bG.get = function( cI, ca ) {
			cI && ( cI.item = bK );
			ca && ca( cI )
		};
		bG.all = function( ca ) {
			ca && ca( [] )
		};
		bG.clear = function( ca ) {
			ca && ca( bJ )
		};
		bG.w = function( ca ) {
			ca && ca( bN )
		};

		function bp( ca ) {
			this.j = ca;
			this.Q = bJ;
			this.i = new cm;
			this.z = new cl( ca, this, this.i );
			bj( this )
		}

		function bj( cI ) {
			var ca, cJ;
			ca = cI.j.indexedDB.open( cI.i.pa, cI.i.qa );
			ca.onupgradeneeded = function( cK ) {
				( cJ = cK.target.result ) ? ( cJ.onerror = cJ.onabort = function() {
					cg( cI )
				}, cJ.onversionchange = function() {
					cg( cI )
				}, cJ.onclose = function() {
					cI.Q && ( cI.Q = bJ, cI.i.db = bK, cI.z = new cl( cI.j, cI, cI.i ) )
				}, cJ.objectStoreNames.contains( cI.i.ha ) || ( cK = cJ.createObjectStore( cI.i.ha ), cK.createIndex( "s", "s", {
					unique: bJ
				} ), cK.transaction.oncomplete = function() {
					cE( cI, cJ )
				} ) ) : cg( cI )
			};
			ca.onsuccess = function( cK ) {
				( cJ = cK.target.result ) ? cE( cI, cJ ): cg( cI )
			};
			ca.onerror = function() {
				cg( cI )
			};
			ca.onblocked = function() {
				cg( cI )
			}
		}

		function cg( ca ) {
			ca.z = new bL;
			ct( ca.i )
		}

		function cE( cI, ca ) {
			var cJ;
			cI.Q || ( cI.Q = bN, cI.i.db = ca, cI.z = new cb( cI.j, cI, cI.i ), cJ = setTimeout( function() {
				clearTimeout( cJ );
				ct( cI.i )
			}, 0 ) )
		}
		bG = bp.prototype;
		bG.q = function( cI, ca, cJ ) {
			this.z.q( cI, ca, cJ )
		};
		bG.remove = function( cI, ca, cJ ) {
			this.z.remove( cI, ca, cJ )
		};
		bG.get = function( cI, ca ) {
			this.z.get( cI, ca )
		};
		bG.all = function( cI, ca, cJ ) {
			this.z.all( cI, ca, cJ )
		};
		bG.clear = function( ca ) {
			this.z.clear( ca )
		};
		bG.w = function( ca ) {
			this.z.w( ca )
		};

		function cf( cI ) {
			var ca, cK;
			if ( this.k = cI.indexedDB && ( ca = cI.IDBFactory ) && ( cK = ca.prototype ) && "function" === typeof cK.open && ( ca = cI.IDBDatabase ) && ( cK = ca.prototype ) && "function" === typeof cK.transaction ) {
				try {
					ce || ( ce = new bp( cI ) )
				} catch ( cJ ) {
					this.k = bJ
				}
			}
		}
		cf.prototype.$ = bI( bN );
		cf.prototype.get = function() {
			return ce
		};
		var ce = bK;

		function cv( cI, ca, cJ ) {
			this.j = cI;
			this.K = ca;
			this.J = cJ
		}
		bG = cv.prototype;
		bG.q = function( cI, ca, cJ ) {
			( cI.u ? this.J : this.K ).q( cI, ca, cJ )
		};
		bG.remove = function( cI, ca, cJ ) {
			( cI.u ? this.J : this.K ).remove( cI, ca, cJ )
		};
		bG.get = function( cI, ca ) {
			( cI.u ? this.J : this.K ).get( cI, ca )
		};
		bG.all = function( cI, ca, cM ) {
			function cL() {
				cK && cJ && cI && cI( cK.concat( cJ ) )
			}
			var cK, cJ;
			this.K.all( function( cN ) {
				cK = cN;
				cL()
			}, ca, cM );
			this.J.all( function( cN ) {
				cJ = cN;
				cL()
			}, ca, cM )
		};
		bG.clear = function( cI ) {
			function ca( cM ) {
				cM || ( cJ = bJ );
				cL && cK && cI && cI( cJ )
			}
			var cL, cK, cJ = bN;
			this.K.clear( function( cM ) {
				cL = bN;
				ca( cM )
			} );
			this.J.clear( function( cM ) {
				cK = bN;
				ca( cM )
			} )
		};
		bG.w = function( cI ) {
			function ca( cM ) {
				cM || ( cJ = bJ );
				cL && cK && cI && cI( cJ )
			}
			var cL, cK, cJ = bN;
			this.K.w( function( cM ) {
				cL = bN;
				ca( cM )
			} );
			this.J.w( function( cM ) {
				cK = bN;
				ca( cM )
			} )
		};

		function cc( cI, ca ) {
			var cN = new bu( cI, ca ),
				cM = new cf( cI );
			if ( this.k = cN.k && cM.k ) {
				try {
					if ( !b9 ) {
						var cL = cN.get(),
							cK = cM.get();
						cL && cK ? b9 = new cv( cI, cL, cK ) : this.k = bJ
					}
				} catch ( cJ ) {
					this.k = bJ
				}
			}
		}
		cc.prototype.$ = bI( bJ );
		cc.prototype.get = function() {
			return b9
		};
		var b9 = bK;

		function b8( cI, ca, cK ) {
			this.j = cI;
			this.B = cK;
			this.O = {};
			this.O.hybrid = "hybrid";
			this.O.indexedDB = "indexedDB";
			this.O.localStorage = "localStorage";
			if ( !b7.length ) {
				if ( ca.length ) {
					for ( cI = 0; cI < ca.length; cI++ ) {
						ci( this, ca[ cI ], bN )
					}
				}
				for ( var cJ in this.O ) {
					ci( this, cJ, bJ )
				}
			}
			return this
		}
		var b7 = [];

		function ci( cI, ca, cK ) {
			var cJ = bK;
			if ( "string" === typeof ca ) {
				cK && delete cI.O[ ca ];
				cI: {
					cK = cI.j;cI = cI.B;
					switch ( ca ) {
						case "hybrid":
							cJ = new cc( cK, cI );
							break cI;
						case "indexedDB":
							cJ = new cf( cK );
							break cI;
						case "localStorage":
							cJ = new bu( cK, cI );
							break cI
					}
					cJ = bK
				}
			} else {
				ca && ( cJ = "function" === typeof ca.get && "function" === typeof ca.isSpecified && ca )
			}
			cJ && cJ.k && b7.push( cJ )
		}
		b8.prototype.top = function() {
			return b7.length ? b7[ 0 ] : bK
		};

		function bO() {
			for ( var cI, ca = [], cJ = 0; cJ < b7.length; cJ++ ) {
				cI = b7[ cJ ], cI.$() && ca.push( cI )
			}
			return ca
		}

		function br( cI, ca ) {
			this.h = cI;
			this.key = ca;
			this.oa = 1
		}

		function bk() {}
		bk.prototype.R = bI( 1 );

		function cG() {}
		cG.prototype.R = bI( 3 );

		function cy( cI, ca ) {
			this.h = cI;
			this.key = ca
		}
		cy.prototype.R = bI( 4 );
		var b6, b5;
		( function() {
			var ca = {};
			b6 = function( cI, cJ ) {
				ca[ cI ] = ca[ cI ] || [];
				ca[ cI ].push( cJ )
			};
			b5 = function( cI ) {
				var cK = ca[ cI.R() ];
				if ( cK ) {
					for ( var cJ = 0; cJ < cK.length; cJ++ ) {
						cK[ cJ ].call( this, cI )
					}
				}
			}
		} )();

		function b3() {
			this.aa = 0;
			this.g = {};
			this.r = []
		}
		b3.prototype.set = function( ca ) {
			this.g[ ca.key ] || this.aa++;
			this.g[ ca.key ] = ca;
			this.A( ca )
		};
		b3.prototype.ca = function() {
			return !!this.aa
		};
		b3.prototype.next = function() {
			var ca = bK;
			this.r.length && ( ca = this.r[ 0 ], this.r.splice( 0, 1 ) );
			this.r.length || b5( new co );
			return ca
		};

		function b2( cI, ca ) {
			cI.g[ ca ] && ( delete cI.g[ ca ], cI.aa-- );
			cI.ca() || b5( new cG )
		}
		b3.prototype.A = function( cI ) {
			var ca = this.r.length;
			this.r.push( cI );
			ca || b5( new bk )
		};
		var bv, ck, bQ, bt, bm;

		function bg() {
			return Array.prototype.slice.call( arguments ).join( "." )
		}
		var b1 = Date.now || function() {
			return +new Date
		};
		bQ = function( ca ) {
			return bg( "ct.p.s", "V1", ca )
		};
		bt = function( cI, ca ) {
			return bg( "ct.p.m", "V1", cI, ca )
		};
		ck = function( ca ) {
			return 0 === ca.indexOf( "ct.p.s" )
		};
		bm = function( ca ) {
			return 0 === ca.indexOf( "ct.p.m" )
		};
		bv = function( cI, ca, cJ ) {
			ca = ca || "ct.p";
			switch ( cJ || 2 ) {
				case 0:
					return cI === ca;
				case 1:
					return -1 < cI.indexOf( ca );
				case 2:
					return 0 === cI.indexOf( ca )
			}
			return bJ
		};

		function b0( cI, ca, cN, cM, cL, cK, cJ ) {
			this.path = cI;
			this.ga = ca;
			this.data = cN;
			this.u = cM;
			this.ja = cL;
			this.ba = cK;
			this.ea = cJ;
			this.P = self && self.Uint8Array
		}
		b0.prototype.Y = function() {
			return {
				p: this.path,
				sd: this.ga,
				d: this.P && this.data instanceof this.P ? Array.apply( [], this.data ) : this.data,
				sm: this.u,
				b: this.ja,
				f: this.ba,
				m: this.ea
			}
		};
		b0.prototype.M = function() {
			return !!this.path && !isNaN( this.ga ) && ( "string" === typeof this.data || this.P && this.data instanceof this.P ) && "boolean" === typeof this.u && "boolean" === typeof this.ja && !isNaN( this.ba ) && !isNaN( this.ea )
		};

		function bZ( cI, ca, cJ ) {
			this.h = cI;
			this.D = ca;
			this.H = cJ
		}
		bZ.prototype.Y = function() {
			return {
				s: this.h,
				p: this.D.Y(),
				c: this.H
			}
		};
		bZ.prototype.M = function() {
			return !isNaN( this.h ) && this.D && this.D instanceof b0 && this.D.M() && !isNaN( this.H )
		};

		function bY() {
			this.g = {}
		}
		bG = bY.prototype;
		bG.set = function( cI, ca ) {
			this.g[ cI ] = ca
		};
		bG.get = function( ca ) {
			return this.g[ ca ]
		};
		bG.all = function() {
			var cI, ca = [];
			for ( cI in this.g ) {
				ca.push( this.g[ cI ] )
			}
			return ca
		};
		bG.remove = function( ca ) {
			delete this.g[ ca ]
		};
		bG.clear = function() {
			this.g = {}
		};
		bG.ca = function() {
			for ( var ca in this.g ) {
				return bN
			}
			return bJ
		};

		function bX( cI, ca, cJ ) {
			this.h = cI;
			this.H = ca;
			this.S = cJ || this.H + 420000;
			this.n = new bY
		}
		bX.prototype.Y = function() {
			return {
				s: this.h,
				c: this.H,
				e: this.S
			}
		};
		bX.prototype.M = function() {
			return !isNaN( this.h ) && !isNaN( this.H ) && !isNaN( this.S ) && !( new Date > this.S )
		};
		bX.prototype.W = function( ca ) {
			ca || ( ca = b1() + 420000 );
			this.S = ca
		};

		function co() {}
		co.prototype.R = bI( 2 );
		var bW;

		function cA() {
			if ( !bW ) {
				var ca = bE();
				ca.exports.transport = ca.exports.transport || {};
				bW = ca.exports.transport
			}
			return bW
		}

		function cq( cI, ca, cK ) {
			var cJ = cA();
			this.j = cI;
			this.B = ca;
			this.Z = cK;
			this.X = [];
			this.ma = 0;
			this.U = [];
			this.V = bN;
			this.C = new bY;
			this.g = new b3;
			this.ta = cJ.getMaxConcurrentRequests();
			this.sa = cJ.getTransportInterval;
			this.ia = this.Z.AutoDispatch();
			this.F = bJ;
			this.ia && this.ka()
		}
		cq.prototype.ka = function() {
			var cI = this;
			if ( this.Z.EnableDispatch() ) {
				this.X = bO( new b8( this.j, this.Z.Providers, this.B ) );
				for ( var ca = 0; ca < this.X.length; ca++ ) {
					( function( cJ ) {
						cJ.get().all( function( cT ) {
							for ( var cS = 0; cS < cT.length; cS++ ) {
								var cQ = cT[ cS ].key,
									cP = cT[ cS ].item,
									cN;
								if ( ck( cQ ) ) {
									cN = new bX( cP.s, cP.c, cP.e ), cQ = new by( cQ, cN, cJ ), cI.C.set( cN.h, cQ )
								} else {
									if ( bm( cQ ) ) {
										cN = cP.c;
										var cK = cP.s,
											cM = cP.p,
											cP = cM.p,
											cR = cM.sd,
											cU = cM.d,
											cL = cM.sm,
											cO = cM.b,
											cV = cM.f,
											cM = cM.m;
										cO && cU instanceof Array && self.Uint8Array && ( cU = new self.Uint8Array( cU ) );
										cN = new bZ( cK, new b0( cP, cR, cU, cL, cO, cV, cM ), cN );
										cQ = new by( cQ, cN, cJ );
										cI.U.push( cQ )
									}
								}
							}
							cI.ma++;
							cD( cI )
						} )
					} )( this.X[ ca ] )
				}
			}
		};

		function cD( cI ) {
			var ca, cN, cM, cL, cK;
			if ( cI.ma === cI.X.length ) {
				cK = {};
				for ( var cJ = 0; cJ < cI.U.length; cJ++ ) {
					cM = cI.U[ cJ ], ca = cM.a.h, cN = cI.C.get( cM.a.h ), cK[ ca ] || ( cN ? ( cK[ ca ] = cL = cN.a.M() ) || cu( cI, cN.L, cN.a.h, cN.key ) : cK[ ca ] = bJ ), cK[ ca ] && cM.a.M() ? ( cN.a.n.set( cM.key, cM ), cI.g.set( new br( cM.a.h, cM.key ) ) ) : cd( cI, cM, bJ )
				}
				cI.U = [];
				b6( 1, function() {
					cI.V = bJ;
					bV( cI, 0 )
				} );
				b6( 2, function() {
					cI.V = bN
				} );
				b6( 3, function() {
					var cO, cS, cR;
					if ( bM( cI ) ) {
						cO = cI.C.all();
						for ( var cQ = 0; cQ < cO.length; cQ++ ) {
							if ( cS = cO[ cQ ] ) {
								cS = cS.a.n.all();
								for ( var cP = 0; cP < cS.length; cP++ ) {
									( cR = cS[ cP ] ) && cI.g.set( new br( cR.a.h, cR.key ) )
								}
							}
						}
					}
				} );
				b6( 4, function( cO ) {
					var cP = cI.C.get( cO.h );
					( cP = cP && cP.a.n.get( cO.key ) ) ? cd( cI, cP, bN ): b2( cI.g, cO.key )
				} );
				cI.V = bJ;
				cI.F = bN;
				bV( cI, 0 )
			}
		}

		function bV( cI, ca ) {
			cI.V || bM( cI ) && bq( cI, ca )
		}

		function bM( cI ) {
			for ( var ca = cI.C.all(), cL, cK = bJ, cJ = 0; cJ < ca.length; cJ++ ) {
				if ( cL = ca[ cJ ] ) {
					if ( cL.a.n.ca() ) {
						cK = bN;
						break
					} else {
						cu( cI, cL.L, cL.a.h, cL.key )
					}
				}
			}
			return cK
		}

		function bq( cI, ca, cL, cK ) {
			var cJ = setTimeout( function() {
				var cN = cK,
					cP = cL,
					cO = cN && cP,
					cQ = bK,
					cM;
				clearTimeout( cJ );
				if ( !cO && ( cM = cI.g.next() ) ) {
					cN = cM.h, cP = cM.key
				}
				if ( cN = cI.C.get( cN ) ) {
					cQ = cN.a.n.get( cP )
				}
				cQ ? cQ.T ? bV( cI, 0 ) : cF( cI, cQ ) : ( b2( cI.g, cP ), bV( cI, 0 ) )
			}, ca || 0 )
		}

		function cF( cI, ca ) {
			var cJ = ca.a.D;
			ca.T = bN;
			a5.WRC3 < cI.ta ? a5.WRCl( cJ.path, cJ.ga, cJ.data, cJ.ba, cJ.ea, function( cM, cL, cK ) {
				cd( cI, ca, bN );
				bV( cI, cI.da( cM, cL, cK ) )
			}, function( cO, cN, cM ) {
				ca.T = bJ;
				var cL = cI.g,
					cK = cL.g[ ca.key ];
				cK && ( --cK.oa ? cL.A( cK ) : b5( new cy( cK.h, cK.key ) ) );
				bV( cI, cI.da( cO, cN, cM ) )
			} ) : ( ca.T = bJ, bq( cI, cI.da(), ca.key, ca.a.h ) )
		}
		cq.prototype.da = function( cI, ca, cJ ) {
			return this.sa.apply( this, arguments ) || 0
		};

		function cu( cI, ca, cK, cJ ) {
			cJ = new bz( cJ );
			ca && ca.get().remove( cJ );
			cI.C.remove( cK.toString() )
		}

		function cd( cI, ca, cL ) {
			var cK = ca.key,
				cJ = new bz( cK, bK, ca.a.D.u );
			cL && ( cL = cI.C.get( ca.a.h ) ) && cL.a.n.remove( cK );
			b2( cI.g, ca.key );
			ca.L.get().remove( cJ )
		}

		function bU( cI, ca, cL, cK ) {
			var cJ = this;
			this.j = cI;
			this.B = ca;
			this.Z = cL;
			this.fa = cK;
			this.N = this.o = bK;
			this.na = cL.EnableStreams();
			this.F = bJ;
			if ( cL.EnableStorage() && cJ.fa && ( this.N = ( new b8( cI, cL.Providers, ca ) ).top() ) ) {
				cI = bQ( cJ.fa ), ca = new bX( cJ.fa, b1() ), cJ.o = new by( cI, ca, this.N ), bS( cJ, cJ.o, bJ, function() {
					cJ.F = bN
				}, function() {} )
			}
		}
		bU.prototype.q = function( cQ, cP, cO, cN, cM ) {
			var cL = this,
				cK, cJ, cP = cP || b1(),
				ca = new b0( cO.path, cO.stid, cO.data, cO.stream, cO.binary, cO.flag, cO.mid ),
				cI = this.F && this.N;
			ca.u && ( cI = this.na );
			if ( !cI ) {
				return cM && cM( cO ), bK
			}
			cK = bt( cQ, cP );
			cJ = new by( cK, new bZ( cQ, ca, cP ), this.N );
			bS( this, cJ, ca.u, function() {
				cL.o.a.n.set( cJ.key, cJ );
				cN && cN( cK )
			}, function( cR ) {
				cL.o.a.n.remove( cR );
				cM && cM( cO )
			} );
			this.o.a.W();
			bS( this, this.o, bJ );
			return cJ.key
		};

		function bS( cI, ca, cM, cL, cK ) {
			cM = new bz( ca.key, ca.a.Y(), cM );
			try {
				ca.L ? ca.L.get().q( cM, cL, cK ) : cK( ca.key )
			} catch ( cJ ) {
				cJ.la && cJ.ra && ( cI.F = bJ, cJ.la.w( function() {
					this.o.a.n.clear()
				} ) )
			}
		}
		bU.prototype.remove = function( cI, ca, cM ) {
			var cL = this,
				cK, cJ = cL.o.a.n.get( cI );
			cJ && ( cK = new bz( cI, bK, cJ.a.D.u ), cJ.L.get().remove( cK, function() {
				cL.o.a.n.remove( cI );
				ca && ca( cI )
			}, cM ) )
		};
		bU.prototype.W = function( cI, ca ) {
			this.o.a.W();
			bS( this, this.o, bJ, cI, ca )
		};
		( function( cI ) {
			var ca = bo(),
				cJ = bH( cI );
			ca.ua = cJ.EnableStorage;
			ca.va = cJ.EnableStreams;
			ca.wa = cJ.EnableDispatch;
			ca.createPersistenceDispatchService = function( cL, cK ) {
				var cM = new cq( cL, cK, cJ );
				return {
					dispatchMessages: function() {
						return cM.ka.apply( cM )
					},
					serviceEnabled: function() {
						return cM.F
					},
					autoDispatch: function() {
						return cM.ia
					}
				}
			};
			ca.createPersistenceStorageService = function( cL, cK, cN ) {
				var cM = new bU( cL, cK, cJ, cN );
				return {
					storeMessage: function() {
						return cM.q.apply( cM, arguments )
					},
					removeMessage: function() {
						cM.remove.apply( cM, arguments )
					},
					prolongSession: function() {
						cM.W.apply( cM, arguments )
					},
					serviceEnabled: function() {
						return cM.F
					},
					streamsEnabled: function() {
						return cM.na
					}
				}
			}
		} )( window );

		function cw( cI ) {
			var cI = ( bC( cI ) || {} ).Transport || {},
				ca = cI.LastMessage || {},
				cJ = cI.Reliability || {};
			cI.Interval = bB( cI.Interval, "number", bI( 0 ) );
			cI.MaxConcurrentRequests = bB( cI.MaxConcurrentRequests, "number", bI( 5 ) );
			ca.RegisterToOnBeforeUnload = bB( ca.RegisterToOnBeforeUnload, "boolean", bI( bJ ) );
			cI.LastMessage = function() {
				return ca
			};
			cJ.Load = {
				Retries: cJ.Load && "number" === typeof cJ.Load.Retries ? cJ.Load.Retries : 2,
				Persist: cJ.Load && "boolean" === typeof cJ.Load.Persist ? cJ.Load.Persist : bJ
			};
			cI.Reliability = function( cK ) {
				return cJ[ cK ]
			};
			return cI
		}( function( cI ) {
			var ca = cA(),
				cI = cw( cI ),
				cJ = cI.Legacy === bN;
			ca.isLegacy = function() {
				return cJ
			};
			ca.getTransportInterval = cI.Interval;
			ca.getTransportLastMessage = cI.LastMessage;
			ca.getMaxConcurrentRequests = cI.MaxConcurrentRequests;
			ca.getTransportReliability = cI.Reliability
		} )( window );
		var cj;
		var bP = window,
			cx;
		if ( !cj ) {
			var bs = bE();
			bs.exports.proxy = bs.exports.proxy || {};
			cj = bs.exports.proxy
		}
		cx = cj;
		var bl = ( bC( bP ) || {} ).Proxy || {},
			cH = bl.ImageFlag,
			cz = bl.WR;
		cx.wrMessagesHandler = cx.authenticationHandler = bK;
		"string" === typeof cH && cH.length && ( cx.authenticationHandler = cH );
		"string" === typeof cz && cz.length && ( cx.wrMessagesHandler = cz );
		var cp;
		var bR = ( bC( window ) || {} ).RecordingThresholds || {};
		if ( !cp ) {
			var cB = bE();
			cB.exports.recordingThresholds = cB.exports.recordingThresholds || {};
			cp = cB.exports.recordingThresholds
		}
		cp.maxMid = "number" === typeof bR.MaxMessageId ? bR.MaxMessageId : 3000;
		var cr;
		var bT = window,
			bw;
		if ( !cr ) {
			var bn = bE();
			bn.exports.protocol = bn.exports.protocol || {};
			cr = bn.exports.protocol
		}
		bw = cr;
		var bh = ( ( bC( bT ) || {} ).Protocol || {} ).Method;
		bw.method = bK;
		"string" === typeof bh && bh.length && ( bw.method = bh )
	}();
	! function() {
		function bF( bH, bG ) {
			bE.symbols[ bH ] = bG
		}
		var bD;

		function bC() {
			if ( bD ) {
				return bD
			}
			var bG = window.ClickTaleGlobal;
			bG || ( bG = {}, window.ClickTaleGlobal = bG );
			bG.exports = bG.exports || {};
			bG.symbols = bG.symbols || {};
			return bD = bG
		}
		var bB;

		function bA() {
			if ( !bB ) {
				var bG = bC();
				bG.exports.persistence = bG.exports.persistence || {};
				bB = bG.exports.persistence
			}
			return bB
		}
		var bz, by;
		( function() {
			var bG = bA();
			bz = function( bH, bI ) {
				return bG.createPersistenceDispatchService( bH, bI )
			};
			by = function( bH, bJ, bI ) {
				return bG.createPersistenceStorageService( bH, bJ, bI )
			}
		} )();
		var bE = bC();
		bF( "WREL", bz );
		bF( "WREM", by );
		var bx;

		function bw() {
			if ( !bx ) {
				var bG = bC();
				bG.exports.transport = bG.exports.transport || {};
				bx = bG.exports.transport
			}
			return bx
		}
		var bv, bu, bt, br, bp;
		( function() {
			var bG = bw();
			bv = bG.isLegacy;
			bu = function( bH, bJ, bI ) {
				return bG.getTransportInterval.apply( this, arguments )
			};
			bt = bG.getTransportLastMessage;
			br = bG.getMaxConcurrentRequests;
			bp = bG.getTransportReliability
		} )();
		bF( "WRCv", bv );
		bF( "WRCz", bu );
		bF( "WRDe", bt );
		bF( "WRC6", br );
		bF( "WREn", bp );
		var bn;
		var bl, bk, bj;
		if ( !bn ) {
			var bi = bC();
			bi.exports.proxy = bi.exports.proxy || {};
			bn = bi.exports.proxy
		}
		bj = bn;
		bl = bj.wrMessagesHandler;
		bk = bj.authenticationHandler;
		bF( "WRDp", bl );
		bF( "WRDv", bk );
		var bh;
		if ( !bh ) {
			var bg = bC();
			bg.exports.recordingThresholds = bg.exports.recordingThresholds || {};
			bh = bg.exports.recordingThresholds
		}
		bF( "WRDr", bh.maxMid );
		var bs;

		function bq() {
			if ( !bs ) {
				var bG = bC();
				bG.exports.xhr = bG.exports.xhr || {};
				bs = bG.exports.xhr
			}
			return bs
		}
		bF( "WRBY", function( bH ) {
			var bH = bH || window,
				bG = bq();
			return bG.originalXHR ? bG.originalXHR : "undefined" != typeof bH.XMLHttpRequest && ( "function" == typeof bH.XMLHttpRequest.OriginalXMLHttpRequest || "object" == typeof bH.XMLHttpRequest.OriginalXMLHttpRequest ) ? bH.XMLHttpRequest.OriginalXMLHttpRequest : bH.XMLHttpRequest
		} );
		bF( "WRCC", function( bH ) {
			var bH = bH || window,
				bG = bq();
			return bG.registerRecorderFunctionAPI ? bG.registerRecorderFunctionAPI : bH.XMLHttpRequest && bH.XMLHttpRequest.RegisterRecorderFunction ? bH.XMLHttpRequest.RegisterRecorderFunction : null
		} );
		bF( "WRCD", function( bH ) {
			var bH = bH || window,
				bG = bq();
			return bG.v ? bG.v : bH.XMLHttpRequest && "number" == typeof bH.XMLHttpRequest.ClickTaleWrapperVersion ? bH.XMLHttpRequest.ClickTaleWrapperVersion : null
		} );
		var bo;
		if ( !bo ) {
			var bm = bC();
			bm.exports.protocol = bm.exports.protocol || {};
			bo = bm.exports.protocol
		}
		bF( "WREP", bo.method )
	}();
	var aW = ClickTaleGlobal.api;
	if ( aW && aW.ClickTaleOnReadyInvoked ) {
		return
	}
	aW = ClickTaleGlobal.api = {};
	var a2 = void 0,
		a5 = ClickTaleGlobal.symbols,
		aZ = "Copyright 2006-2015 ClickTale Ltd., US Patent and US Patent Pending",
		Z, aH, O, W = false,
		c = false,
		R = false,
		aL, K = false,
		N = "",
		M = {},
		L = {},
		v = "&",
		u = "=",
		o = false,
		n, aU, a0, aV = "ImpactRecorder";
	a5.WRD = document;
	a5.WRE = "https://wr.clicktale.net/v1/";
	a5.WRDy = "https://wr.clicktale.net/v1/";
	a5.WRAJ = ".clicktale.net/";
	a5.WRD0 = false;
	a5.WRBU = aD;
	a5.WRBS = aD();
	a5.WRm = a5.WRBS.a;
	a5.WRB = [];
	a5.WRBP = true, a5.WRDg = false;
	a5.WRDh = false;
	a5.WRBT = U();
	a5.WRCS = false;
	a5.WRCb = "";
	a5.WRCX = false;
	a5.WRC8 = false;
	a5.WRC9 = false;
	a5.WRDA = false;
	a5.WRJ = 0;
	a5.WRC3 = 0;
	a5.WRDx = a5.WRDv;
	a5.WRDo = a5.WRDp;
	a5.WRn = X;
	a5.WREK = null;
	a5.WRBn = af;
	a5.WREv = a5.WREP !== aV;
	a5.WRa = at;
	a5.WRCN = ah;
	a5.WRCl = A;
	a5.WRc = ar;
	a5.WREm = a4;
	a5.WRG = aJ;
	a5.WRH = aI;
	a5.WRr = T;
	a5.WRs = Q;
	a5.WRAS = aP;
	a5.WRAT = aO;
	a5.WRBj = ao;
	a5.WRBi = aq;
	a5.WRBl = ak;
	a5.WRBm = ai;
	a5.WRCK = ap;
	a5.WRBk = am;
	a5.WRAs = aF;
	a5.WRDV = w;
	a5.WRE1 = y;
	ClickTaleUnloadPause = 200;
	ClickTaleEventsMask = 511 - 128;
	ClickTaleCookieExpiryDays = 365;
	ClickTaleIgnoreCookieName = "WRIgnore";
	ClickTaleUIDCookieName = "WRUID";
	ClickTaleLog = aW.ClickTaleLog = J;
	window.ClickTale = aW.ClickTale = Y;
	window.ClickTaleUploadPage = aW.ClickTaleUploadPage = a;
	window.ClickTaleSetAllSensitive = aW.ClickTaleSetAllSensitive = aQ;
	window.ClickTaleResetAllSensitive = aW.ClickTaleResetAllSensitive = P;
	window.ClickTaleIgnore = aW.ClickTaleIgnore = r;
	window.ClickTaleRegisterFormSubmitFailure = aW.ClickTaleRegisterFormSubmitFailure = au;
	window.ClickTaleGetVersion = aW.ClickTaleGetVersion = f;
	window.ClickTaleSetCustomElementID = aW.ClickTaleSetCustomElementID = x;
	window.ClickTaleRegisterFormSubmitSuccess = aW.ClickTaleRegisterFormSubmitSuccess = az;
	window.ClickTaleExec = aW.ClickTaleExec = G;
	window.ClickTaleField = aW.ClickTaleField = b;
	window.ClickTaleNote = aW.ClickTaleNote = S;
	window.ClickTaleEvent = window.ClickTaleTag = aW.ClickTaleTag = aW.ClickTaleEvent = l;
	window.ClickTaleGetPID = aW.ClickTaleGetPID = s;
	window.ClickTaleSetUID = aW.ClickTaleSetUID = aT;
	window.ClickTaleGetUID = aW.ClickTaleGetUID = ba;
	window.ClickTaleGetSID = aW.ClickTaleGetSID = d;
	window.ClickTaleLogical = aW.ClickTaleLogical = aY;
	window.ClickTaleDetectAgent = aW.ClickTaleDetectAgent = aS;
	window.ClickTaleIsPlayback = aW.ClickTaleIsPlayback = aR;
	window.ClickTaleCookieExpiryDays = aW.ClickTaleCookieExpiryDays = ClickTaleCookieExpiryDays;
	window.ClickTaleIsSavedRecording = aW.ClickTaleIsSavedRecording = a1;
	window.ClickTaleIsRecording = aW.ClickTaleIsRecording = V;
	window.ClickTaleSendJsonMessage = aW.ClickTaleSendJsonMessage = aM;
	window.ClickTaleDispatchPersistedMessages = aW.ClickTaleDispatchPersistedMessages = aA;

	function y() {
		if ( window.ClickTaleIncludedOnDOMReady || /complete|interactive/.test( document.readyState ) ) {
			return true
		}
		return false
	}

	function V() {
		return a5.WREQ.WREG()
	}

	function J( bg, bi, bk ) {
		bk = bk || {};
		bk.module = ( bg || "" ).toString();
		bk.type = ( bi || "" ).toString();
		for ( var bj in L ) {
			if ( !!bj ) {
				var bh = L[ bj ];
				if ( !!bh ) {
					bh( bk )
				}
			}
		}
	}

	function aI() {
		return ( new Date() ).getTime() - window.WRInitTime
	}

	function aJ() {
		return Math.floor( Math.random() * 2147483647 )
	}

	function a3() {
		if ( typeof window.WRInitTime === "undefined" ) {
			window.WRInitTime = ( new Date() ).getTime();
			return false
		}
		return true
	}

	function a4( bn ) {
		if ( typeof bn === "object" && "length" in bn ) {
			var bm = bn.length;
			for ( var bi = 0; bi < bm; bi++ ) {
				var bk = bn[ bi ],
					bh = {},
					bl, bj, bg;
				if ( typeof bk === "string" ) {
					bl = window[ bk ];
					if ( !bl ) {
						continue
					}
					bh.func = bl;
					bh.scope = window;
					bh.args = []
				} else {
					if ( typeof bk === "function" ) {
						bh.func = bk;
						bh.scope = window;
						bh.args = []
					} else {
						if ( typeof bk === "object" ) {
							bl = bk.fn;
							if ( typeof bl !== "function" ) {
								continue
							}
							bh.func = bl;
							bh.scope = bk.scope || window;
							bh.args = bk.args || []
						}
					}
				}
				bh.func.apply( bh.scope, bh.args )
			}
		}
	}

	function ar() {
		var bg = a5.WREn( "Load" );
		a5.WRAG = {
			a: "load",
			w: T(),
			h: Q(),
			sw: aP(),
			sh: aO(),
			cw: aq(),
			ch: ao(),
			lw: ak(),
			lh: ai(),
			o: am(),
			t: aI(),
			persist: bg.Persist,
			retries: bg.Retries
		};
		at( a5.WRAG )
	}

	function A( bh, bg, bj, bm, bn, bl, bk ) {
		var bi, bo = !!window.Uint8Array && bj instanceof window.Uint8Array;
		if ( bo ) {
			bm |= 64
		}
		if ( n ) {
			z( bh, bg, bj, bm, bn, bo, bl, bk );
			return
		}
		bi = {
			isBinaryStream: bo,
			onSuccess: bl,
			onError: bk,
			onBeforeSend: function() {
				++a5.WRC3;
				this.startTime = new Date()
			},
			onComplete: function( bq, br, bp ) {
				--a5.WRC3
			},
			startTime: null
		};
		bb( bi, bh, bm, bj, bg )
	}

	function z( bh, bg, bm, bp, bq, br, bo, bn ) {
		var bk, bi, bs, bl = ( bg === 0 && ( bp & 3 ) ),
			bj = a7( br, bm, bl );
		if ( bj ) {
			bs = "&" + bm + "&" + aJ();
			if ( bl ) {
				bh = bh + ( bp | 16 ) + bs;
				bk = new XDomainRequest();
				bk.open( "GET", bh );
				bk.onload = function() {
					bk.onerror = bk.ontimeout = bk.onload = null;
					--a5.WRC3;
					if ( bo ) {
						bo( bh.length, new Date() - bi, br )
					}
				};
				bk.onerror = bk.ontimeout = bn ? function() {
					bk.onerror = bk.ontimeout = bk.onload = null;
					--a5.WRC3;
					if ( bn ) {
						bn( bh.length, new Date() - bi, br )
					}
				} : bk.onload;
				bk.onprogress = function() {
					return
				};
				bk.timeout = 30000;
				++a5.WRC3;
				bi = new Date();
				bk.send()
			} else {
				bk = new Image();
				bh = bh + bp + bs;
				bi = new Date();
				bk.src = bh;
				++a5.WRC3;
				bk.onload = bk.onerror = function() {
					bk.onerror = bk.onload = null;
					--a5.WRC3;
					if ( bo ) {
						bo( bh.length, new Date() - bi, br )
					}
				}
			}
		} else {
			bh = bh + ( bp | 16 );
			bk = new XDomainRequest();
			bk.open( "POST", bh );
			bk.onload = function() {
				bk.onerror = bk.ontimeout = bk.onload = null;
				--a5.WRC3;
				if ( bo ) {
					bo( bh.length, new Date() - bi, br )
				}
			};
			bk.onerror = bk.ontimeout = bn ? function() {
				bk.onerror = bk.ontimeout = bk.onload = null;
				--a5.WRC3;
				if ( bn ) {
					bn( bh.length, new Date() - bi, br )
				}
			} : bk.onload;
			bk.onprogress = function() {};
			bk.timeout = 30000;
			++a5.WRC3;
			bi = new Date();
			bk.send( bm )
		}
	}

	function ah( bh, bn ) {
		var bk = ac( bh );
		if ( !bk ) {
			return null
		}
		var bg = bk.split( v ),
			bl = [];
		for ( var bj = 0; bj < bg.length; bj++ ) {
			var bm = bg[ bj ];
			var bi = bm.split( u );
			if ( bi.length == 2 ) {
				bl.push( bi )
			}
		}
		if ( !bn ) {
			return bl
		}
		for ( var bj = 0; bj < bl.length; bj++ ) {
			if ( bl[ bj ][ 0 ] == bn ) {
				return bl[ bj ][ 1 ]
			}
		}
		return null
	}

	function at( bg ) {
		if ( V() ) {
			a5.WRCa( bg )
		} else {
			if ( a5.WRB.push ) {
				a5.WRB.push( bg )
			}
		}
		if ( a5.WRJ === a5.WRDr && !a5.WRDg ) {
			a5.WRDg = true;
			aW.ClickTaleSendThresholdExceededEvent();
			aW.ClickTaleStop()
		}
	}

	function T() {
		return self.innerWidth || a5.WRu.offsetWidth
	}

	function Q() {
		return self.innerHeight || a5.WRu.offsetHeight
	}

	function aP() {
		return a5.WRu.scrollWidth
	}

	function aO() {
		if ( a5.WRD.documentElement ) {
			return Math.max( a5.WRD.body.scrollHeight, a5.WRD.documentElement.scrollHeight )
		}
		return a5.WRu.scrollHeight
	}

	function am() {
		return window.orientation | 0
	}

	function aq() {
		return a5.WRBS.m ? self.innerWidth : a5.WRu.clientWidth
	}

	function ao() {
		return a5.WRBS.m ? self.innerHeight : a5.WRu.clientHeight
	}

	function ak() {
		return a5.WRu.clientWidth
	}

	function ai() {
		return a5.WRu.clientHeight
	}

	function ap( bi, bj, bg ) {
		var bh = parseInt( ah( bi, bj ) ) || 0;
		al( bi, bj, bh + 1, bg )
	}

	function ad() {}
	ad.prototype = {
		WRD4: function( bg ) {
			if ( bg == undefined ) {
				bg = 1
			}
			aL = bg;
			if ( bg == 1 ) {
				aF( "note3: recording all visitors to this page (" + bg + ")" )
			} else {
				aF( "note3: recording approximately 1 of every " + Math.ceil( 1 / bg ) + " visitors to this page (" + bg + ")" )
			}
		},
		WRD5: function( bg ) {
			a5.WRBu = true;
			if ( Math.random() < bg ) {
				a5.WRK = aN()
			} else {
				a5.WRK = 0
			}
		},
		WRD6: function( bg ) {
			ae( ClickTaleUIDCookieName, a5.WRK, aW.ClickTaleCookieExpiryDays );
			if ( a5.WRK == 0 || ( ac( ClickTaleUIDCookieName ) == null && bg != 1 ) ) {
				aF( "warning4: the current machine/user is disabled for recording" );
				return true
			}
			return false
		},
		WRD7: function( bg ) {
			if ( bg == null || bg === "0" ) {
				ae( ClickTaleUIDCookieName, aN(), aW.ClickTaleCookieExpiryDays )
			}
		},
		WRD8: function() {
			if ( !W ) {
				var bh = this;
				W = true;
				var bg = new Image();
				bg.src = a5.WRDy + "i/" + a5.WRA + ".gif?r=" + aL + "&UID=" + a5.WRK + ( a5.WRBu ? "&new" : "" ) + ( a5.WRBP ? "&as=1" : "" ) + ( a5.WRBS.m ? "&m=1" : "" ) + "&" + aJ();
				bg.onerror = function() {
					bg.onload = null;
					bg.onerror = null;
					W = false;
					aE( 'unable to record because either there are no credits for project, the domain is not checked in the account\'s "Manage Domains" section or communication is down' )
				};
				bg.onload = function() {
					bg.onload = null;
					bg.onerror = null;
					W = false;
					bh.WRD9( bg )
				}
			}
		},
		WRD9: function( bg ) {
			if ( bg.width == 2 && bg.height == 1 ) {
				aE( 'unable to record because either there are no credits for project, the domain is not checked in the account\'s "Manage Domains" section or communication is down' );
				return
			}
			aK( bg )
		},
		WREG: function() {
			return typeof a5.WRDw == "number"
		},
		WREA: function() {
			return typeof a5.WRDw == "number" ? a5.WRDw : null
		},
		WREB: function( bg ) {
			if ( bg > 0 || bg === 0 || bg === "0" ) {
				ae( ClickTaleUIDCookieName, bg, aW.ClickTaleCookieExpiryDays )
			} else {
				an( ClickTaleUIDCookieName )
			}
		},
		WREC: function( bg ) {
			a5.WRE = a5.WRDy = "https://" + bg + a5.WRAJ;
			a5.WRE = aj( a5.WRE );
			a5.WRDy = aj( a5.WRDy )
		},
		WRED: function() {
			Y( a5.WRA, aL, a5.WRCP )
		},
		WREE: function() {
			a5.WRDw = aJ();
			return a5.WRDw
		},
		WREx: function() {
			return this.WREG()
		}
	};

	function ab() {}
	ab.prototype = {
		WRD4: function() {
			return
		},
		WRD5: function() {
			a5.WRBu = true
		},
		WRD6: function() {
			return false
		},
		WRD7: function( bg ) {
			if ( bg == null || bg === "0" ) {
				an( ClickTaleUIDCookieName )
			}
		},
		WREC: function() {
			a5.WRE = aj( a5.WRE );
			a5.WRDy = aj( a5.WRDy )
		},
		WRD8: function() {
			var bg, bi = a5.WRDy + "auth/",
				bh = a5.WRA,
				bj = a5.WRK,
				bk = this;
			if ( c || bj === "0" ) {
				return
			}
			c = true;
			bi = bj ? bi + "?pid=" + bh + "&uid=" + bj : bi + "?pid=" + bh;
			bi += a5.WRBP ? "&as=1" : "";
			bi += a5.WRBS.m ? "&m=1" : "";
			bi += "&" + aJ();
			if ( n ) {
				bg = new XDomainRequest();
				bg.open( "GET", bi );
				bg.onerror = bg.ontimeout = bg.onload = function() {
					bg.onerror = bg.ontimeout = bg.onload = null;
					a5.WREQ.WREF( bg.responseText )
				};
				bg.onprogress = function() {
					return
				};
				bg.timeout = 30000;
				bg.send();
				return
			}
			var bl = {
				onSuccess: function( bp, bm, bo, bn ) {
					a5.WREQ.WREF( bn.responseText )
				},
				url: bi,
				method: "GET"
			};
			m( bl )
		},
		WREF: function( bg ) {
			var bh;
			try {
				bg = JSON.parse( bg );
				if ( bg.authorized ) {
					bh = bg.userTrackingState;
					a5.WREy = bh === "EventTriggeredRecording" || bh === "Recording";
					a5.WRK = bg.uid || a5.WRK;
					a5.WRDw = bg.sid || a5.WRDw;
					aK()
				} else {
					a5.WRK = bg.skipRecording ? 0 : a5.WRK;
					aE( "User rejected for recording [reason: " + bg.rejectReason + "]" )
				}
				if ( a5.WRK !== null ) {
					ae( ClickTaleUIDCookieName, a5.WRK, aW.ClickTaleCookieExpiryDays )
				}
				if ( a5.WRK === 0 || ac( ClickTaleUIDCookieName ) === null ) {
					aF( "warning4: the current machine/user is disabled for recording" )
				}
			} catch ( bi ) {
				aE( "Authentication process failed" )
			}
			c = false
		},
		WREG: function() {
			return a5.WRD0
		},
		WREA: function() {
			return typeof a5.WRDw === "string" && a5.WRDw.length ? a5.WRDw : null
		},
		WREB: function() {
			aF( "ClickTaleSetUID is obselete in this version" )
		},
		WRED: function() {
			Y( a5.WRA, 1, a5.WRCP )
		},
		WREE: function() {
			a5.WRD0 = true;
			return a5.WRDw
		},
		WREx: function() {
			return !!a5.WREy
		}
	};

	function a1() {
		return a5.WREQ.WREx()
	}
	a5.WREQ = aa();
	( function( bg ) {
		if ( !window.ClickTaleCookieDomain ) {
			if ( bg.search( /www\.\w+([\-]{1}\w+)*\.\w+/i ) == 0 ) {
				ClickTaleCookieDomain = bg.substring( 4, bg.length )
			}
		}
	} )( a5.WRD.domain );

	function aa() {
		if ( a5.WREv ) {
			return new ad()
		}
		return new ab()
	}
	I();
	H();
	aG();
	J( "recorder", "loaded" );
	aF( "note1: entering debug mode, ClickTale script is installed" );
	if ( !a3() ) {
		aF( "warning1: top ClickTale script is missing in the page" )
	}
	n = ( a5.WRBS.t === a5.WRBS.IE && a5.WRBS.v < 10 );
	a0 = a5.WRBS.XDR && ( a5.WRBS.t == a5.WRBS.FF || ( a5.WRBS.t == a5.WRBS.IE && a5.WRBS.v >= 9 ) );
	var ax = av();
	O = ( a5.WRD.compatMode == "BackCompat" );
	a5.WRu = ( O ? a5.WRD.body : a5.WRD.documentElement );
	if ( a5.WRBS ) {
		a5.WRCQ = ( window.ClickTaleSettings && typeof ClickTaleSettings.CookieName != "undefined" ) ? ClickTaleSettings.CookieName : "__CT_Data";
		if ( window.ClickTaleSettings && window.ClickTaleSettings.SubCookieSeperator ) {
			v = window.ClickTaleSettings.SubCookieSeperator
		}
		if ( window.ClickTaleSettings && window.ClickTaleSettings.SubCookieEquator ) {
			u = window.ClickTaleSettings.SubCookieEquator
		}
		if ( a5.WRCQ ) {
			ap( a5.WRCQ, "gpv", aW.ClickTaleCookieExpiryDays )
		}
	}
	if ( window.ClickTaleIncludedOnWindowLoad ) {
		window.ClickTaleIncludedOnDOMReady = true
	}
	if ( !y() ) {
		if ( a5.WRD.addEventListener ) {
			a5.WRD.addEventListener( "DOMContentLoaded", aX, false )
		} else {
			if ( a5.WRBS && a5.WRBS.t == a5.WRBS.IE ) {
				a5.WRD.write( '<script id="ClickTaleDefer" defer="defer" src=//:><\/script>' );
				( function( bg ) {
					if ( bg ) {
						bg.onreadystatechange = function() {
							if ( this.readyState == "complete" ) {
								aX()
							}
						}
					}
				} )( a5.WRD.getElementById( "ClickTaleDefer" ) )
			}
		}
	} else {
		aX()
	}
	if ( !window.ClickTaleIncludedOnWindowLoad ) {
		a5.WRn( window, "load", ar )
	} else {
		ar()
	}
	p();

	function p() {
		a5.WREK = a5.WREL( window, window.JSON )
	}

	function av() {
		var bg = document.getElementsByTagName( "script" );
		if ( bg.length ) {
			var bh = bg[ bg.length - 1 ];
			if ( bh.src ) {
				return bh.src
			}
		}
		return false
	}

	function aj( bg ) {
		var bh = window.ClickTaleSSL;
		if ( typeof bh !== "undefined" ) {
			if ( bh === 0 || ( bh === 1 && location.protocol == "http:" ) ) {
				bg = bg.replace( /^https/, "http" )
			}
		}
		if ( a5.WRBS.t === a5.WRBS.IE && a5.WRBS.v < 10 && location.protocol === "http:" ) {
			bg = bg.replace( /^https/, "http" )
		}
		return bg
	}

	function Y( bj, bk, bg ) {
		function bi() {
			if ( typeof ClickTaleScriptSource != "undefined" && ClickTaleScriptSource !== null ) {
				if ( typeof ClickTaleScriptSource == "string" ) {
					return ClickTaleScriptSource
				} else {
					return a5.WRAJ
				}
			}
			var bm = bg.substr( 0, 3 ) == "www" ? bg : "www";
			if ( ax ) {
				var bl = [ "http://s.clicktale.net/", "https://s2.clicktale.net/", "https://clicktale.pantherssl.com/", "https://clicktalecdn.sslcs.cdngc.net/" + bm + "/" ];
				for ( var bn = 0; bn < bl.length; bn++ ) {
					if ( ax.substr( 0, bl[ bn ].length ) == bl[ bn ] ) {
						return bl[ bn ]
					}
				}
			}
			if ( a5.WRBS.t === a5.WRBS.IE && a5.WRBS.v < 10 && location.protocol === "http:" ) {
				return "http://cdn.clicktale.net/" + bm + "/"
			}
			if ( typeof clickTaleSSL !== "undefined" ) {
				if ( clickTaleSSL === 0 || ( clickTaleSSL === 1 && location.protocol == "http:" ) ) {
					return "http://cdn.clicktale.net/" + bm + "/"
				}
			}
			return "https://cdnssl.clicktale.net/" + bm + "/"
		}
		if ( a5.WRAU ) {
			aF( "CT: Monitoring has already started" );
			return
		}
		if ( aR() ) {
			return
		}
		a5.WRA = bj;
		if ( !bg ) {
			bg = "www"
		}
		a5.WRCP = bg;
		aF( "note2: preparing to record (ver " + 15 + "." + 4 + "." + 12 + ") for project id " + bj + " and partition " + bg );
		a5.WREQ.WRD4( bk );
		if ( !a5.WRm ) {
			aF( "warning2: the current browser is not supported" );
			return
		}
		if ( location.protocol == "file:" ) {
			aF( "warning3: the current protocol is not supported" );
			return
		}
		var bh = "_" + a5.WRA + "_" + a5.WRCP;
		if ( a5.WRCQ ) {
			ap( a5.WRCQ, "apv" + bh, aW.ClickTaleCookieExpiryDays )
		}
		if ( !ClickTaleIgnoreCookieName || !ClickTaleUIDCookieName || !a5.WRCQ ) {
			aF( "warning9: can't record when cookies are not specified" );
			return
		}
		if ( ac( ClickTaleIgnoreCookieName ) ) {
			aF( "warning6: the current machine/user is temporarily disabled for recording" );
			return
		}
		a5.WRK = ac( ClickTaleUIDCookieName );
		a5.WRBu = false;
		if ( a5.WRK == null ) {
			a5.WREQ.WRD5( bk )
		}
		o = a5.WREQ.WRD6( bk );
		if ( o ) {
			return
		}
		aF( "note3b: visitor id " + a5.WRK );
		a5.WREQ.WREC( bg );
		if ( !a5.WREv && !a5.WRAN ) {
			aF( "can't record when protocol is set to " + aV + " and ClickTaleUpload was not called" );
			return
		}
		if ( a5.WRDo && a5.WRDx ) {
			a5.WRDo = "https://" + a5.WRDo;
			a5.WRDx = "https://" + a5.WRDx;
			a5.WRDo = aj( a5.WRDo );
			a5.WRDy = aj( a5.WRDx )
		} else {
			a5.WRDo = a5.WRE
		}
		if ( !a5.WRCS ) {
			a5.WRAJ = bi()
		}
		a5.WRAU = true;
		J( "recorder", "initialized", {
			projectId: a5.WRA,
			recordingRatio: aL || null,
			partition: a5.WRCP,
			version: aW.ClickTaleGetVersion(),
			fetchFromUrl: window.ClickTaleFetchFrom,
			isSslDefined: !!window.ClickTaleSSL,
			userId: a5.WRK,
			isLogical: a5.WRCS
		} );
		at( {
			a: "start",
			t: aI()
		} );
		if ( a5.WRCQ ) {
			ap( a5.WRCQ, "cpv" + bh, aW.ClickTaleCookieExpiryDays )
		}
		a5.WREQ.WRD8()
	}

	function aS() {
		return ay( navigator.userAgent )
	}

	function aR() {
		if ( typeof ClickTaleContext == "object" ) {
			return true
		}
		try {
			return parent && parent != window && parent.WebPlayer
		} catch ( bg ) {}
		return false
	}

	function aK() {
		if ( a5.WRCS && !a5.WRCX ) {
			a5.WRCX = true;
			ar()
		}
		if ( U() ) {
			aF( "note4: preparing for stage 2" );
			a5.WRV()
		} else {
			if ( !R ) {
				R = true;
				var bh = a5.WRD.createElement( "script" );
				bh.src = a5.WRAJ + "WRf4b.js";
				var bg = a5.WRD.getElementById( "ClickTaleDiv" );
				if ( !bg ) {
					bg = a5.WRD.getElementById( "ClickTale" )
				}
				if ( bg ) {
					aF( "note4: preparing for stage 2" );
					bg.appendChild( bh )
				} else {
					aF( "error1: no 'ClickTale' DIV element found in this page" )
				}
			}
		}
	}

	function U() {
		return a5.WRBT || typeof a5.WRV !== "undefined"
	}

	function aE( bg ) {
		aF( "error2: " + bg );
		ae( ClickTaleIgnoreCookieName, true, aW.ClickTaleCookieExpiryDays ? 0.007 : false );
		a5.WRAU = false;
		J( "recorder", "recording rejected" )
	}

	function aN() {
		a3();
		return aJ() + "." + ( window.WRInitTime & 2147483647 )
	}

	function aM( bg, bh ) {
		bh.type = ( bg || "" ).toString();
		w( bh )
	}

	function w( bi ) {
		if ( !bi.type ) {
			aF( "CT: Invalid JSON object. No type was specified." );
			return
		}
		var bh = JSON.stringify( bi );
		var bg = {
			a: "json",
			t: aI()
		};
		if ( bi.type !== "LogicalFormDeclaration" && bh.length > 2000 && a5.WRBS.XDR ) {
			bg.streamval = bh
		} else {
			bg.c = bh
		}
		at( bg )
	}

	function ae( bi, bj, bk ) {
		if ( bk ) {
			var bh = new Date();
			bh.setTime( bh.getTime() + ( bk * 86400000 ) );
			var bg = "; expires=" + bh.toGMTString()
		} else {
			var bg = ""
		}
		a5.WRD.cookie = bi + "=" + bj + bg + "; path=/;" + ( window.ClickTaleCookieDomain ? " domain=" + ClickTaleCookieDomain + ";" : "" )
	}

	function an( bg ) {
		ae( bg, null, -1 )
	}

	function ac( bh ) {
		var bj = bh + "=";
		var bg = a5.WRD.cookie.split( ";" );
		for ( var bi = 0; bi < bg.length; bi++ ) {
			var bk = bg[ bi ];
			bk = bk.replace( /^\s\s*/, "" );
			if ( bk.indexOf( bj ) == 0 ) {
				return bk.substring( bj.length, bk.length )
			}
		}
		return null
	}

	function al( bi, bl, bk, bg ) {
		var bh = ah( bi );
		if ( !bh ) {
			bh = []
		}
		for ( var bj = 0; bj < bh.length; bj++ ) {
			if ( bh[ bj ][ 0 ] == bl ) {
				bh[ bj ][ 1 ] = bk;
				break
			}
		}
		if ( bj == bh.length ) {
			bh.push( [ bl, bk ] )
		}
		var bm = [];
		for ( var bj = 0; bj < bh.length; bj++ ) {
			if ( bh[ bj ][ 1 ] !== null ) {
				bm.push( bh[ bj ].join( u ) )
			}
		}
		ae( bi, bm.join( v ), bg )
	}

	function ag( bh, bi, bg ) {
		al( bh, bi, null, bg )
	}

	function d() {
		return a5.WREQ.WREA()
	}

	function ba() {
		var bg = ac( ClickTaleUIDCookieName );
		return bg > 0 ? bg : null
	}

	function aT( bg ) {
		a5.WREQ.WREB( bg )
	}

	function s() {
		return typeof a5.WRA == "number" ? a5.WRA : null
	}

	function l( bg ) {
		at( {
			a: "tag",
			c: bg,
			t: aI()
		} )
	}

	function S( bg ) {
		at( {
			a: "note",
			c: bg,
			t: aI()
		} )
	}

	function b( bh, bg ) {
		at( {
			a: "field",
			f: bh,
			v: bg,
			t: aI()
		} )
	}

	function G( bg ) {
		if ( bg.length > 2000 && a5.WRBS.XDR ) {
			at( {
				a: "exec",
				streamval: bg,
				t: aI()
			} )
		} else {
			at( {
				a: "exec",
				c: bg,
				t: aI()
			} )
		}
	}

	function az( bg ) {
		if ( V() ) {
			a5.WRBz( bg )
		} else {
			if ( bg == null ) {
				at( {
					a: "submitsuccess",
					i: false,
					t: aI()
				} )
			}
		}
	}

	function au( bg ) {
		if ( V() ) {
			a5.WRB0( bg )
		} else {
			if ( bg == null ) {
				at( {
					a: "submitfail",
					i: false,
					t: aI()
				} )
			}
		}
	}

	function r( bg ) {
		ae( ClickTaleUIDCookieName, 0, bg )
	}

	function a( bg, bh ) {
		if ( a5.WRAU ) {
			aF( "CTUP: Monitoring has already started" )
		}
		a5.WRAN = true;
		a5.WRAP = bg;
		a5.WRAQ = bh;
		if ( a5.WRAW ) {
			a5.WRAW()
		}
	}

	function aQ() {
		a5.WRBP = true
	}

	function P() {
		a5.WRBP = false
	}

	function f() {
		return [ 15, 4, 12 ]
	}

	function x( bg, bh ) {
		bg.ClickTale = bg.ClickTale || {};
		bg.ClickTale.CustomID = bh
	}

	function aX() {
		if ( aR() || a5.WRC9 ) {
			return
		}
		a5.WRC9 = true;
		var bg = a5.WRD.getElementById( "ClickTaleDefer" );
		if ( bg ) {
			bg.parentNode.removeChild( bg )
		}
		at( {
			a: "domload",
			t: aI()
		} );
		if ( a5.WRAW ) {
			a5.WRAW()
		}
	}

	function aG() {
		if ( aR() ) {
			return
		}
		aC( location.hash.substr( 1 ) );
		aC( location.search.substr( 1 ) )
	}

	function aC( bj ) {
		var bi = bj.split( "&" );
		for ( var bh = 0; bh < bi.length; bh++ ) {
			var bk = bi[ bh ].split( "=" );
			var bg = decodeURIComponent( bk[ 0 ] ).toLowerCase();
			if ( bk.length == 2 && ( bg == "ct" || bg == "clicktale" ) ) {
				aB( bk[ 1 ] )
			}
		}
	}

	function aB( bj ) {
		var bi = bj.split( "," );
		for ( var bh = 0; bh < bi.length; bh++ ) {
			switch ( bi[ bh ].toLowerCase() ) {
				case "debug":
					if ( !y() ) {
						a5.WRD.write( '<textarea id="ClickTaleDebugDump" rows="5" cols="80" style="position: absolute; left:10px; top:10px; border: solid #6C358D;"></textarea>' )
					}
					aH = a5.WRD.getElementById( "ClickTaleDebugDump" );
					if ( aH ) {
						aH.value = ""
					}
					F( "inPage" );
					F( "console" );
					break;
				case "enable":
					an( ClickTaleIgnoreCookieName );
					var bg = ac( ClickTaleUIDCookieName );
					a5.WREQ.WRD7( bg );
					break;
				case "disable":
					ae( ClickTaleUIDCookieName, 0, aW.ClickTaleCookieExpiryDays );
					break;
				case "reset":
					an( ClickTaleUIDCookieName );
					break;
				case "uaskipcheck":
					a5.WRBS = aD( true );
					aF( "warning8: skipping userAgent support check, running as: " + a5.WRBS.a );
					break;
				default:
					ts = bi[ bh ].match( /^(\w+)(\(|%28)(.+)(\)|%29)$/i );
					if ( ts && ts.length == 5 ) {
						var bg = decodeURIComponent( ts[ 3 ] ),
							bk = ts[ 1 ];
						switch ( bk.toLowerCase() ) {
							case "t":
								aW.ClickTaleTag( bg );
								break;
							case "u":
								a5.WREQ.WREB( bg );
								break;
							case "ua":
								a5.WRm = decodeURIComponent( bg );
								aF( "warning7: forcing userAgent type: " + a5.WRm );
								break;
							case "uao":
								a5.WRBS = JSON.parse( bg );
								aF( "warning7: forcing userAgentObj type: " + bg );
								break;
							case "report":
								if ( /test|subs\d?\d?/.test( bg ) ) {
									F( "crossDomainMessaging" );
									Z = "http://" + ( bg == "test" ? "ct.test" : ( bg + ".app.clicktale.com" ) )
								}
								break;
							default:
								aF( "warning5: unknown parameter in URL: " + bk );
								break
						}
					}
					break
			}
		}
	}

	function aF( bg ) {
		var bh = {
			message: bg
		};
		aW.ClickTaleLog( "recorder", "debug", bh )
	}

	function I() {
		M.inPage = E;
		M.crossDomainMessaging = C;
		M.console = B
	}

	function H() {
		if ( window.ClickTaleSettings && window.ClickTaleSettings.LogHandlers && window.ClickTaleSettings.LogHandlers instanceof window.Array ) {
			var bi = window.ClickTaleSettings.LogHandlers;
			for ( var bg = 0; bg < bi.length; bg++ ) {
				var bh = bi[ bg ];
				if ( bh ) {
					F( bh )
				}
			}
		}
	}

	function F( bg ) {
		if ( bg in M && !( bg in L ) ) {
			L[ bg ] = M[ bg ]
		}
	}

	function E( bg ) {
		if ( aH && bg.type == "debug" && bg.module == "recorder" ) {
			N += ( bg.message + "\n" );
			aH.value = N
		}
	}

	function C( bi ) {
		if ( !!Z ) {
			try {
				var bg = JSON.stringify( bi );
				if ( parent && parent != window ) {
					if ( parent.postMessage ) {
						parent.postMessage( bg, Z )
					} else {
						console && console.log( "CT: Browser doesn't support cross domain logging." )
					}
				} else {
					console && console.log( "CT: " + bg )
				}
			} catch ( bh ) {
				console && console.log( "CT: exception trying to communicate cross domain log information." )
			}
		}
	}

	function B( bg ) {
		if ( console && console.log ) {
			console.log( bg.module + " ", bg.type + " ", bg )
		}
	}

	function aY( bi, bg ) {
		var bh = aW.ClickTaleStop || window.ClickTaleStop;
		if ( ClickTaleIsRecording() && bh ) {
			bh()
		}
		window.WRInitTime = ( new Date() ).getTime();
		a5.WRCS = true;
		a5.WRCb = bi;
		a5.WRAU = false;
		if ( bg ) {
			a5.WRCT = bg
		}
		if ( window.WRA0 ) {
			WRA0( true )
		}
		p();
		a5.WREQ.WRED()
	}

	function aA() {
		a5.WREK && a5.WREK.dispatchMessages()
	}

	function bb( bi, bh, bo, bl, bg ) {
		var bm = ( bg === 0 && ( bo & 3 ) ),
			bk = a7( bi.isBinaryStream, bl, bm ),
			bp = bc( bm ),
			bj, bn;
		if ( bk && bp ) {
			bi.url = a6( bh + bo, bl );
			bi.onError = bi.onSuccess;
			a9( bi )
		} else {
			bn = n ? 16 : 8;
			bj = bh + ( bo | bn );
			a8( bk, bi, bj, bl )
		}
	}

	function a8( bj, bi, bg, bh ) {
		if ( bj ) {
			bi.url = a6( bg, bh );
			bi.method = "GET"
		} else {
			bi.data = bh;
			bi.url = bg;
			bi.method = "POST"
		}
		m( bi )
	}

	function a6( bg, bh ) {
		return bg + "&" + bh + "&" + aJ()
	}

	function a9( bg ) {
		var bh = new Image();
		i( bh, bg );
		bh.src = bg.url
	}

	function a7( bh, bi, bg ) {
		return !bh && ( bi.length <= 1500 || bg || !a5.WRBS.XDR )
	}

	function bc( bg ) {
		return ( bg || a5.WRDh ) && !a0
	}

	function m( bh ) {
		var bg;
		if ( n ) {
			bg = setTimeout( function() {
				clearTimeout( bg );
				bd( k( bh ), bh )
			}, 0 )
		} else {
			bd( j( bh ), bh )
		}
	}

	function k( bh ) {
		var bg = new XDomainRequest();
		bg.open( bh.method, bh.url );
		bg.onprogress = bh.method === "GET" ? function() {
			return
		} : function() {};
		i( bg, bh );
		return bg
	}

	function j( bg ) {
		var bh = a5.WRBY();
		var bi = new bh();
		bi.open( bg.method, bg.url, true );
		if ( bg.method === "POST" ) {
			g( bi, bg.isBinaryStream )
		}
		e( bi, bg );
		i( bi, bg );
		return bi
	}

	function g( bh, bg ) {
		if ( bg ) {
			return
		}
		bh.setRequestHeader( "Content-Type", "text/plain" )
	}

	function i( bg, bh ) {
		bf( bg, bh );
		be( bg, bh );
		bg.timeout = 30000
	}

	function e( bg, bh ) {
		bg.onreadystatechange = function() {
			if ( bg.readyState === 4 ) {
				var bi, bj = new Date() - bh.startTime;
				h( bg );
				bi = bh.onError || bh.onSuccess;
				if ( bg.status === 200 && bh.onSuccess ) {
					bh.onSuccess( bh.url.length, bj, bh.isBinaryStream, bg )
				} else {
					if ( bi ) {
						bi( bh.url.length, bj, bh.isBinaryStream, bg )
					}
				}
				if ( bh.onComplete ) {
					bh.onComplete()
				}
			}
		}
	}

	function bf( bg, bh ) {
		bg.onload = function() {
			h( bg );
			if ( bh.onSuccess ) {
				bh.onSuccess( bh.url.length, new Date() - bh.startTime, bh.isBinaryStream, bg )
			}
			if ( bh.onComplete ) {
				bh.onComplete()
			}
		}
	}

	function be( bg, bh ) {
		bg.onerror = bg.ontimeout = function() {
			var bj, bi = new Date() - bh.startTime;
			h( bg );
			bj = bh.onError || bh.onSuccess;
			if ( bj ) {
				bj( bh.url.length, bi, bh.isBinaryStream, bg )
			}
			if ( bh.onComplete ) {
				bh.onComplete( bh.url.length, bi, bh.isBinaryStream )
			}
		}
	}

	function h( bg ) {
		bg.ontimeout = bg.onerror = bg.onload = bg.onreadystatechange = null
	}

	function bd( bh, bg ) {
		if ( bg.onBeforeSend ) {
			bg.onBeforeSend()
		}
		if ( bg.data ) {
			bh.send( bg.data );
			return
		}
		bh.send()
	}

	function aD( bg ) {
		var bh = ay( navigator.userAgent );
		if ( !bg ) {
			if ( window.ClickTaleSettings && ClickTaleSettings.CheckAgentSupport ) {
				bh = ClickTaleSettings.CheckAgentSupport( aw, bh )
			} else {
				bh = aw( bh )
			}
		}
		return bh
	}

	function aw( bg ) {
		if ( !bg ) {
			return false
		}
		if ( ( bg.t == bg.IE && bg.v >= 9 && bg.v <= 11 && !bg.m ) || ( bg.t == bg.FF && bg.v >= 25 && bg.v <= 70 && !bg.m ) || ( bg.t == bg.Ch && bg.v >= 9 && bg.v <= 70 ) || ( bg.t == bg.Sa && bg.v >= 5.1 && bg.v <= 10 ) || ( bg.t == bg.WK && bg.v >= 534 && bg.v <= 550 ) ) {
			return bg
		}
		return false
	}

	function af( bh ) {
		var bj = {};
		var bk = " " + bh + " ";
		var bi = / (\w+)(?:\/([\w\.]+))? (?:(\([^\)]+\)) )?/img;
		var bg;
		while ( ( bg = bi.exec( bk ) ) != null ) {
			bj[ bg[ 1 ] ] = {
				value: bg[ 2 ],
				extra: bg[ 3 ]
			};
			bi.lastIndex--
		}
		return bj
	}

	function ay( bh ) {
		var bi = {
			IE: 0,
			FF: 1,
			Ch: 2,
			Sa: 3,
			Op: 4,
			WK: 5
		};
		var bk = af( bh );
		if ( bk.Opera ) {
			bi.t = bi.Op;
			bi.v = 0;
			bi.a = "Op";
			bi.m = false;
			return bi
		}
		if ( bk.Mozilla && bk.Mozilla.extra ) {
			var bj = bk.Mozilla.extra;
			var bg = bj.indexOf( "MSIE " );
			if ( bg != -1 ) {
				bi.t = bi.IE;
				bi.v = parseFloat( bj.substr( bg + 5, 3 ) );
				bi.a = "IE" + bi.v;
				bi.m = ( bj.indexOf( "; Touch" ) != -1 ) || ( bj.indexOf( "; IEMobile/" ) != -1 );
				if ( bi.v >= 8 ) {
					bi.XDR = true
				}
				if ( window.Uint8Array ) {
					bi.XHRBin = true
				}
				return bi
			} else {
				if ( bj.indexOf( "; Trident/" ) != -1 ) {
					var bg = bj.indexOf( "; rv:" );
					if ( bg != -1 ) {
						bi.t = bi.IE;
						bi.v = parseFloat( bj.substr( bg + 5, 3 ) );
						bi.a = "IE" + bi.v;
						bi.m = ( bj.indexOf( "; Touch" ) != -1 ) || ( bj.indexOf( "; IEMobile/" ) != -1 );
						bi.XDR = true;
						if ( window.Uint8Array ) {
							bi.XHRBin = true
						}
						return bi
					}
				}
			}
		}
		if ( bk.Firefox && bk.Firefox.value ) {
			bi.t = bi.FF;
			bi.v = parseFloat( bk.Firefox.value );
			if ( bi.v < 10 ) {
				bi.a = "FF" + ( bi.v * 10 )
			} else {
				bi.a = "FF" + bi.v
			}
			bi.m = ( bk.Mozilla && bk.Mozilla.extra && bk.Mozilla.extra.indexOf( "Android; " ) != -1 );
			if ( bi.v >= 3.5 ) {
				bi.XDR = true
			}
			if ( window.Uint8Array ) {
				bi.XHRBin = true
			}
			return bi
		}
		if ( ( ( bk.Chrome && bk.Chrome.value ) || ( bk.CriOS && bk.CriOS.value ) ) && !bk.Version ) {
			bi.t = bi.Ch;
			bi.v = parseFloat( bk.Chrome ? bk.Chrome.value : bk.CriOS.value );
			bi.a = "Ch" + bi.v;
			bi.m = ( !( !bk.CriOS ) ) || ( bk.Mozilla && bk.Mozilla.extra && bk.Mozilla.extra.indexOf( "; Android " ) != -1 );
			if ( bi.v >= 9 ) {
				bi.XDR = true
			}
			if ( window.Uint8Array ) {
				bi.XHRBin = true
			}
			return bi
		}
		if ( bk.Safari ) {
			if ( bk.Mozilla && bk.Mozilla.extra && bk.Mozilla.extra.indexOf( "; Android " ) != -1 && bk.AppleWebKit && bk.AppleWebKit.value ) {
				bi.t = bi.WK;
				bi.v = parseFloat( bk.AppleWebKit.value );
				bi.a = "WK" + parseInt( bi.v );
				bi.m = true;
				if ( bi.v >= 5 ) {
					bi.XDR = true
				}
				if ( window.Uint8Array && bi.v >= 535 ) {
					bi.XHRBin = true
				}
				return bi
			}
			if ( bk.Mozilla && bk.Mozilla.extra && bk.Mozilla.extra.indexOf( "Windows" ) === -1 && bk.Version && bk.Version.value ) {
				bi.t = bi.Sa;
				bi.v = parseFloat( bk.Version.value );
				bi.a = "Sa" + bi.v;
				bi.m = !( !bk.Mobile );
				if ( bi.v >= 5 ) {
					bi.XDR = true
				}
				if ( window.Uint8Array && parseFloat( bk.AppleWebKit.value ) >= 535 ) {
					bi.XHRBin = true
				}
				return bi
			}
		}
		return false
	}

	function X( bi, bg, bh ) {
		if ( bi.attachEvent ) {
			bi.attachEvent( "on" + bg, bh )
		} else {
			if ( bi.addEventListener ) {
				bi.addEventListener( bg, bh, false )
			}
		}
	}
	window.ClickTaleFetchFromWithCookies = aW.ClickTaleFetchFromWithCookies = ( function() {
		var bh = [],
			bk, bn, bj, bg, bm, bi;
		bg = function( br, bq ) {
			bq = bq || bh;
			for ( var bp = 0, bo = bh.length; bp < bo; bp++ ) {
				if ( br.call( bq, bh[ bp ], bp ) ) {
					return true
				}
			}
			return false
		};
		bk = function( bo ) {
			return bg( function( bq, bp ) {
				return bq.k == bo
			} )
		};
		bn = function( bo ) {
			var bp = null;
			bg( function( br, bq ) {
				if ( br.k == bo ) {
					bp = br;
					return true
				}
				return false
			} );
			return bp
		};
		bi = function( bo, bp ) {
			var bq = bn( bo );
			if ( bq ) {
				bq.v = bp
			} else {
				bh.push( {
					k: bo,
					v: bp
				} )
			}
		};
		bm = function( bq ) {
			var bp = arguments.callee;
			if ( !bp.sRE ) {
				var bo = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\" ];
				bp.sRE = new RegExp( "(\\" + bo.join( "|\\" ) + ")", "g" )
			}
			return bq.replace( bp.sRE, "\\$1" )
		};
		bj = function( bo ) {
			if ( bo instanceof String || bo instanceof Boolean || bo instanceof Number ) {
				bo = bo.valueOf()
			} else {
				if ( bo === null ) {
					return "null"
				}
			}
			switch ( typeof bo ) {
				case "number":
					bo = isFinite( bo ) ? String( bo ) : "null";
					break;
				case "boolean":
					bo = String( bo );
					break;
				case "object":
					if ( typeof bo.toString == "function" ) {
						bo = bo.toString()
					} else {
						bo = "[Object]"
					}
					break
			}
			return bo
		};
		var bl = {
			_URL_PARAM_NAME: "CTFetchCookies",
			cookieNameDecoder: decodeURIComponent,
			cookieValueDecoder: function( bo ) {
				return bo
			},
			clear: function() {
				bh = []
			},
			set: function( bp, bo ) {
				if ( bo === null || typeof bo == "undefined" ) {
					bl.setFromCookie( bp );
					return
				}
				bo = bj( bo );
				bi( bp, bo )
			},
			setFromCookie: function( bo ) {
				var bv, bu, bp, bs, bt = document.cookie.split( /;\s/g ),
					br;
				if ( typeof bo == "string" ) {
					bv = function( bw ) {
						return bw == bo
					}
				} else {
					if ( typeof bo.test == "function" ) {
						bv = function( bw ) {
							return bo.test( bw )
						}
					} else {
						bv = function() {
							return false
						}
					}
				}
				for ( br = 0; br < bt.length; br++ ) {
					bp = bt[ br ].match( /([^=]+)=/i );
					if ( bp instanceof Array ) {
						try {
							bu = bl.cookieNameDecoder( bp[ 1 ] );
							bs = bl.cookieValueDecoder( bt[ br ].substring( bp[ 1 ].length + 1 ) )
						} catch ( bq ) {}
					} else {
						bu = bl.cookieNameDecoder( bt[ br ] );
						bs = bu
					}
					if ( bv( bu ) ) {
						bi( bu, bs )
					}
				}
			},
			constructCookiesParam: function() {
				var bo = [];
				bg( function( bq, bp ) {
					bo.push( bq.k );
					bo.push( "=" );
					bo.push( bq.v );
					bo.push( ";" );
					return false
				} );
				return bl._URL_PARAM_NAME + "=" + encodeURIComponent( bo.join( "" ) )
			},
			constructCookiesHash: function() {
				return "#" + bl.constructCookiesParam()
			},
			constructFetchFromUrl: function( bo ) {
				bo = bo || window.location.href;
				if ( !( bo.indexOf( "#" ) >= 0 ) ) {
					bo += "#"
				} else {
					bo += "&"
				}
				bo += bl.constructCookiesParam();
				return bo
			}
		};
		return bl
	} )();
	( function() {
		var b4 = !0,
			b3 = null,
			b2 = !1;

		function b1( b7, b8, b6 ) {
			return b7.call.apply( b7.bind, arguments )
		}

		function bH( b7, b9, b6 ) {
			if ( !b7 ) {
				throw Error()
			}
			if ( 2 < arguments.length ) {
				var b8 = Array.prototype.slice.call( arguments, 2 );
				return function() {
					var ca = Array.prototype.slice.call( arguments );
					Array.prototype.unshift.apply( ca, b8 );
					return b7.apply( b9, ca )
				}
			}
			return function() {
				return b7.apply( b9, arguments )
			}
		}

		function b0( b7, b8, b6 ) {
			b0 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf( "native code" ) ? b1 : bH;
			return b0.apply( b3, arguments )
		}
		var bZ;
		var bY;

		function bX() {
			if ( !bY ) {
				var b6;
				bZ ? b6 = bZ : ( b6 = window.ClickTaleGlobal, b6 || ( b6 = {}, window.ClickTaleGlobal = b6 ), b6.exports = b6.exports || {}, bZ = b6 );
				b6.exports.xhr = b6.exports.xhr || {};
				bY = b6.exports.xhr
			}
			return bY
		}

		function b5( b7, b8, b6 ) {
			Object.prototype.__defineGetter__ && !bW ? ( "get" in b6 && b7.__defineGetter__( b8, b6.get ), "set" in b6 && b7.__defineSetter__( b8, b6.set ) ) : Object.defineProperty && Object.defineProperty( b7, b8, b6 )
		}
		var bW;
		try {
			bW = Object.defineProperty( {}, "x", {
				get: function() {
					return b4
				}
			} ).x
		} catch ( bL ) {
			bW = b2
		}
		var bV;

		function bU() {}
		var bT = b3,
			bS = b3,
			bR = 50000,
			bQ = bW || Object.prototype.__defineGetter__ ? 1 : 2;
		var bM = 0,
			bP = b3;

		function bO( b7, b9, b6 ) {
			try {
				return b7[ b9 ]
			} catch ( b8 ) {
				return b6
			}
		}
		var bG = b2,
			bF = "";

		function bE() {}
		var bD = {};

		function bC( b6, b7 ) {
			b5( b7, b6, {
				get: function() {
					return this.x[ b6 ]
				},
				set: function( b8 ) {
					this.x[ b6 ] = b8
				},
				enumerable: b4,
				configurable: b4
			} )
		}

		function bB( b7, b9 ) {
			var b6 = new Function( "a", "b", "c", "d", "e", "f", "g", "h", 'return this["x"].' + b7 + "(a,b,c,d,e,f,g,h);" );
			if ( 2 == bQ ) {
				var b8 = b6,
					b6 = function( cc, cb, ch, cf, ca, cg, cd, ce ) {
						bA( this, this.x, bz );
						return b8.call( this, cc, cb, ch, cf, ca, cg, cd, ce )
					}
			}
			b9[ b7 ] = b6
		}

		function by( b7 ) {
			var b9 = bx.prototype,
				b6;
			for ( b6 in b7 ) {
				if ( "string" == typeof b6 && bD[ b6 ] !== bE ) {
					try {
						"function" == typeof b7[ b6 ] ? ( bB( b6, b9 ), bD[ b6 ] = bE ) : 1 === bQ && ( bC( b6, b9 ), bD[ b6 ] = bE )
					} catch ( b8 ) {
						bD[ b6 ] = bE, 1 === bQ && bC( b6, b9 )
					}
				}
			}
		}

		function bA( b7, cb, b6 ) {
			for ( var ca = b6.length, b9, b8; ca--; ) {
				b8 = b6[ ca ], b9 = b8[ 0 ], b8 = bO( b7, b9, b8[ 1 ] ), cb[ b9 ] = b8
			}
		}
		var bw = [
				[ "status", "" ],
				[ "timeout", 0 ],
				[ "responseXML", b3 ],
				[ "responseBody", b3 ],
				[ "readyState", 0 ],
				[ "responseText", b3 ],
				[ "statusText", b3 ]
			],
			bz = [
				[ "ontimeout", b3 ]
			];

		function bv() {
			var b6 = bV;
			return !!b6 && !!b6.g && 0 < b6.g.length
		}

		function bx() {
			var b6 = new bx.OriginalXMLHttpRequest;
			this.x = b6;
			this.q = bM++;
			b6.onreadystatechange = b0( bI, this );
			bG || ( by( b6 ), bG = b4 );
			2 == bQ && ( bA( b6, this, bw ), bA( b6, this, bz ) )
		}

		function bI() {
			var cf = this.x,
				cd = this.B,
				ce = this.skip;
			2 == bQ && bA( cf, this, bw );
			var cc = bO( cf, "readyState", 0 ),
				cb = bO( cf, "status", 0 ),
				ca = bO( cf, "statusText", "" ),
				b7 = bO( cf, "responseText", "" ),
				b9 = this.headersToRecord;
			if ( !ce && cd != cc ) {
				if ( 0 < cc && 4 > cc ) {
					bP.readyState( this.q, cc )
				} else {
					if ( 4 == cc ) {
						var b6 = [];
						if ( b9 && "number" == typeof b9.length ) {
							for ( ce = b9.length; 0 < ce--; ) {
								cd = b9[ ce ], b6.push( cd + ":" + cf.getResponseHeader.call( cf, cd ) )
							}
						} else {
							b9 = b3;
							try {
								b9 = this.getAllResponseHeaders()
							} catch ( b8 ) {}
							b6 = b9 != b3 && 0 < b9.length ? b9.split( "\n" ) : [ "Error: headers are null" ]
						}
						cb = {
							status: cb,
							statusText: ca,
							headers: b6,
							responseText: b7
						};
						bT && bT( cb );
						cb.responseText && cb.responseText.length > bR && ( cb.responseText = "", cb.statusText = "responseText is larger than MaxResponseSize" );
						ca = b3;
						b7 = b2;
						b9 = this.urlRule;
						bv() && b9 && ( ca = cf.getResponseHeader.call( cf, "X-ClickTale-IMToken" ), b7 = b9.w );
						bP.i( this.q, cb.status, cb.statusText, cb.headers, cb.responseText, ca, b7 )
					}
				}
			}
			this.B = cc;
			return "function" != typeof this.onreadystatechange ? void 0 : this.onreadystatechange.apply( this, [] )
		}
		bx.prototype.open = function( b7, cb, b6, ca, b9 ) {
			var b8 = this.x;
			"undefined" == typeof b6 && ( b6 = b4 );
			bS && bS( b7, cb ) == b2 ? this.skip = b4 : bP.open( this.q, cb, b7.toUpperCase() );
			b7 = b8.open( b7, cb, b6, ca, b9 );
			this.urlRule = b3;
			if ( bv() ) {
				b6 = b3;
				ca = bV.g;
				for ( b9 = 0; b9 < ca.length; b9++ ) {
					if ( b8 = ca[ b9 ], b8.n instanceof RegExp && b8.n.test( cb ) || cb == b8.n ) {
						b6 = b8;
						break
					}
				}
				if ( cb = b6 ) {
					this.urlRule = cb, b6 = this.x, b6.setRequestHeader.call( b6, "X-ClickTale-IMCache", "1" ), cb.s && b6.setRequestHeader.call( b6, "X-ClickTale-IMRuleSet", cb.s )
				}
			}
			return b7
		};
		bD.open = bE;
		bD.onreadystatechange = bE;
		bx.prototype.skip = b2;

		function bu() {
			this.b = b3;
			this.d = []
		}
		bu.prototype.b = b3;
		bu.prototype.open = function( b7, b8, b6 ) {
			this.b != b3 ? this.b.open( b7, b8, b6 ) : this.d.push( [ this.open, [ b7, b8, b6 ] ] )
		};
		bu.prototype.readyState = function( b6, b7 ) {
			this.b != b3 ? this.b.readyState( b6, b7 ) : this.d.push( [ this.readyState, [ b6, b7 ] ] )
		};
		bu.prototype.i = function( b8, cc, b6, cb, ca, b9, b7 ) {
			this.b != b3 ? this.b.i( b8, cc, b6, cb, ca, b9, b7 ) : this.d.push( [ this.i, [ b8, cc, b6, cb, ca, b9, b7 ] ] )
		};
		bu.prototype.d = [];

		function bt( b7, b9, b6, b8 ) {
			this.p = b7;
			this.o = b9;
			this.z = b6;
			this.A = b8
		}
		bt.GET = 1;
		bt.HEAD = 2;
		bt.POST = 3;
		bt.OPTIONS = 4;
		bt.PUT = 5;
		bt.DELETE = 6;
		bt.prototype.open = function( b7, b9, b6 ) {
			var b6 = bt[ b6 ],
				b8 = {
					a: "xhropen"
				};
			b8.xhrid = b7;
			b8.u = b9;
			b8.methodid = b6;
			b8.t = this.o();
			this.p( b8 )
		};
		bt.prototype.readyState = function( b7, b8 ) {
			var b6 = {
				a: "xhrstate"
			};
			b6.xhrid = b7;
			b6.stateid = b8;
			b6.t = this.o();
			this.p( b6 )
		};
		bt.prototype.i = function( ce, cc, cd, cb, ca, b9, b7 ) {
			var b8 = b9 && b9.length,
				b6 = {
					v: 1
				};
			b6.h = cb;
			b8 || ( b6.c = ca );
			ca = this.z( this.A( b6 ) );
			cb = {
				a: "xhrstatedone"
			};
			cb.xhrid = ce;
			cb.status = cc;
			cb.statusText = cd;
			cb.streamid = ca;
			cb.t = this.o();
			if ( b8 ) {
				cb.a = "xhrstatedoneim";
				if ( !bF || 0 == bF.length ) {
					if ( ( ce = window.ClickTaleFetchFrom ) && 0 < ce.length ) {
						( cc = /\?[th]=(\w+)/ig.exec( ce ) ) && ( cc = cc[ 1 ] ), bF = ce = ce.replace( cc, "" )
					}
				}
				cb.fetchUrl = bF + b9;
				cb.fetcherDoRewriteRules = !!b7
			}
			this.p( cb )
		};

		function bg() {
			var b6 = bs;
			bx.OriginalXMLHttpRequest = br;
			bx.RegisterRecorderFunction = b6;
			bx.ClickTaleWrapperVersion = 1;
			bx.addMethodDelegation = function( b7 ) {
				bB( b7, bx.prototype )
			}
		}

		function bN( b6 ) {
			bB( b6, bx.prototype )
		}
		var bq = b3;

		function bp() {
			bq === b3 && ( bq = new bu );
			return bq
		}

		function bJ() {
			var b6 = bo,
				b7 = bn.f,
				b6 = b6 || window;
			if ( b6.XMLHttpRequest ) {
				if ( !b7 ) {
					return b6 = b6.XMLHttpRequest.toString(), -1 === b6.indexOf( "[native code]" ) && -1 === b6.indexOf( "[object XMLHttpRequestConstructor]" ) && -1 === b6.indexOf( "[object XMLHttpRequest]" ) ? b2 : b4
				}
			} else {
				return b2
			}
			return !!b7()
		}

		function bs( b7, ca, b6 ) {
			ca = new bt( b7, ca, b6, bU );
			b7 = bp();
			b7.b = ca;
			for ( var ca = b7.d.length, b6 = b7.d, b9, b8 = 0; b8 < ca; b8++ ) {
				b9 = b6[ b8 ], b9[ 0 ].apply( b7, b9[ 1 ] )
			}
		}
		var bo = window,
			bn = void 0,
			bn = function() {
				var b7 = bo,
					cb = b7.ClickTaleSettings,
					b6 = {};
				"object" != typeof cb && ( cb = {} );
				"object" != typeof cb.XHRWrapper && ( cb.XHRWrapper = {} );
				cb = cb.XHRWrapper;
				b6.e = cb.Enable;
				b6.k = cb.MaxResponseSize;
				b6.l = cb.RequestFilter;
				b6.m = cb.ResponseFilter;
				b6.j = cb.JSONStringify;
				b6.f = cb.Override;
				var ca = b3;
				if ( ca = cb.IM ) {
					if ( b6.r = {
							g: []
						}, cb = b3, ( cb = ca.Urls ) && cb.length ) {
						for ( ca = 0; ca < cb.length; ca++ ) {
							var b9 = cb[ ca ];
							b6.r.g.push( {
								n: b9.UrlRule,
								w: b9.FetcherDoRewriteRules,
								s: b9.IMRewriteRulesSet
							} )
						}
					}
				}
				var b8 = b6.f;
				"boolean" === typeof b8 ? b6.f = function() {
					return b8
				} : "function" !== typeof b8 && ( b6.f = b3 );
				"boolean" != typeof b6.e && ( b6.e = b2 );
				"number" != typeof b6.k && ( b6.k = 50000 );
				"function" != typeof b6.l && ( b6.l = function() {
					return b4
				} );
				"function" != typeof b6.m && ( b6.m = function() {} );
				"function" != typeof b6.j && ( b7.JSON && "function" == typeof b7.JSON.stringify ? b6.j = b7.JSON.stringify : b6.e = b2 );
				return b6
			}();
		if ( bn.e && bJ() ) {
			var bj = bo;
			if ( !( "number" == typeof bX().v || "number" == typeof( bj || window ).XMLHttpRequest.ClickTaleWrapperVersion ) && bn.e ) {
				for ( var bm = bo, bl = bn, br = bm.XMLHttpRequest, bk = bx.prototype, bi = [ "setRequestHeader", "send", "abort", "getAllResponseHeaders", "getResponseHeader" ], bh = bi.length; bh--; ) {
					bB( bi[ bh ], bk ), bD[ bi[ bh ] ] = bE
				}
				if ( 1 === bQ ) {
					bi = "responseXML,responseText,statusText,status,readyState,responseType".split( "," );
					for ( bh = bi.length; bh--; ) {
						bC( bi[ bh ], bk ), bD[ bi[ bh ] ] = bE
					}
				}
				by( bm.XMLHttpRequest.prototype );
				bP = bp();
				bT = bl.m;
				bS = bl.l;
				bR = bl.k;
				bU = bl.j;
				bV = bl.r;
				var bK = bX();
				bK.v = 1;
				bK.registerRecorderFunctionAPI = bs;
				bK.originalXHR = br;
				bK.addMethodDelegation = bN;
				bg();
				bo.XMLHttpRequest = bx
			}
		}
	} )();
	if ( !aW.ClickTaleOnReadyInvoked ) {
		aW.ClickTaleOnReadyInvoked = true;
		var t, D = ClickTaleGlobal.scripts,
			q = function() {
				if ( typeof ClickTaleOnReady == "function" ) {
					ClickTaleOnReady()
				}
				a5.WREm( window.ClickTaleOnReadyList )
			};
		if ( D ) {
			t = D.dependencies;
			t && t.onDependencyResolved( q );
			t.notifyScriptLoaded( "wr" )
		} else {
			q()
		}
	}
}();