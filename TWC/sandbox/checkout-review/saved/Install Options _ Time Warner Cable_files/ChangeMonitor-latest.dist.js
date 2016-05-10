/*! Copyright 2006-2015 ClickTale Ltd.
    mutation-summary library, Apache License. Copyright 2011 Google Inc. https://code.google.com/p/mutation-summary/
 */
( function( p ) {
	if ( !p.Element ) {
		return
	}
	var a = "matchesSelector";
	if ( "webkitMatchesSelector" in Element.prototype ) {
		a = "webkitMatchesSelector"
	} else {
		if ( "mozMatchesSelector" in Element.prototype ) {
			a = "mozMatchesSelector"
		}
	}
	var e = p.MutationObserver || p.WebKitMutationObserver || p.MozMutationObserver;
	if ( typeof e === "undefined" ) {
		return
	}
	var k = "__mutation_summary_node_map_id__";
	var i = 1;

	function o( v ) {
		if ( !v[ k ] ) {
			v[ k ] = i++;
			return true
		}
		return false
	}

	function l() {
		this.map_ = {}
	}
	l.prototype = {
		set: function( v, w ) {
			o( v );
			this.map_[ v[ k ] ] = {
				k: v,
				v: w
			}
		},
		get: function( w ) {
			if ( o( w ) ) {
				return
			}
			var v = this.map_[ w[ k ] ];
			if ( v ) {
				return v.v
			}
		},
		has: function( v ) {
			return !o( v ) && v[ k ] in this.map_
		},
		"delete": function( v ) {
			if ( o( v ) ) {
				return
			}
			delete this.map_[ v[ k ] ]
		},
		keys: function() {
			var v = [];
			for ( var w in this.map_ ) {
				v.push( this.map_[ w ].k )
			}
			return v
		}
	};

	function g( w, v ) {
		return Object.prototype.hasOwnProperty.call( w, v )
	}
	var d = 0;
	var h = 1;
	var u = 2;
	var j = 3;
	var m = 4;
	var f = 5;

	function q( v ) {
		return v == h || v == j
	}
	var r = Array.prototype.forEach.call.bind( Array.prototype.forEach );

	function b( v, x, w ) {
		this.rootNode = v;
		this.elementFilter = x;
		this.calcReordered = w
	}
	b.prototype = {
		getChange: function( v ) {
			var w = this.changeMap.get( v );
			if ( !w ) {
				w = {
					target: v
				};
				this.changeMap.set( v, w )
			}
			if ( v.nodeType == Node.ELEMENT_NODE ) {
				w.matchCaseInsensitive = v instanceof HTMLElement && v.ownerDocument instanceof HTMLDocument
			}
			return w
		},
		getParentChange: function( v ) {
			var w = this.getChange( v );
			if ( !w.childList ) {
				w.childList = true;
				w.oldParentNode = null
			}
			return w
		},
		handleChildList: function( v ) {
			this.childListChanges = true;
			r( v.removedNodes, function( w ) {
				var x = this.getParentChange( w );
				if ( x.added || x.oldParentNode ) {
					x.added = false
				} else {
					x.oldParentNode = v.target
				}
			}, this );
			r( v.addedNodes, function( w ) {
				var x = this.getParentChange( w );
				x.added = true
			}, this )
		},
		handleAttributes: function( w ) {
			this.attributesChanges = true;
			var x = this.getChange( w.target );
			if ( !x.attributes ) {
				x.attributes = true;
				x.attributeOldValues = {}
			}
			var v = x.attributeOldValues;
			if ( !g( v, w.attributeName ) ) {
				v[ w.attributeName ] = w.oldValue
			}
		},
		handleCharacterData: function( v ) {
			this.characterDataChanges = true;
			var w = this.getChange( v.target );
			if ( w.characterData ) {
				return
			}
			w.characterData = true;
			w.characterDataOldValue = v.oldValue
		},
		processMutations: function( w ) {
			this.mutations = w;
			this.changeMap = new l;
			this.mutations.forEach( function( F ) {
				switch ( F.type ) {
					case "childList":
						this.handleChildList( F );
						break;
					case "attributes":
						this.handleAttributes( F );
						break;
					case "characterData":
						this.handleCharacterData( F );
						break
				}
			}, this );
			var z = this.entered = [];
			var D = this.exited = [];
			var B = this.stayedIn = new l;
			if ( !this.childListChanges && !this.attributesChanges ) {
				return
			}
			var y = this.matchabilityChange.bind( this );
			var x = this.reachabilityChange.bind( this );
			var C = this.wasReordered.bind( this );
			var A = new l;
			var E = this;

			function v( I, G ) {
				if ( A.has( I ) ) {
					return
				}
				A.set( I, true );
				var K = E.changeMap.get( I );
				var H = G;
				if ( ( K && K.childList ) || H == undefined ) {
					H = x( I )
				}
				if ( H == d ) {
					return
				}
				y( I );
				if ( H == h ) {
					z.push( I )
				} else {
					if ( H == j ) {
						D.push( I )
					} else {
						if ( H == u ) {
							var F = u;
							if ( K && K.childList ) {
								if ( K.oldParentNode !== I.parentNode ) {
									F = m
								} else {
									if ( E.calcReordered && C( I ) ) {
										F = f
									}
								}
							}
							B.set( I, F )
						}
					}
				}
				if ( H == u ) {
					return
				}
				for ( var J = I.firstChild; J; J = J.nextSibling ) {
					v( J, H )
				}
			}
			this.changeMap.keys().forEach( function( F ) {
				v( F )
			} )
		},
		getChanged: function( w ) {
			var v = this.matchabilityChange.bind( this );
			this.entered.forEach( function( x ) {
				var y = v( x );
				if ( y == h || y == u ) {
					w.added.push( x )
				}
			} );
			this.stayedIn.keys().forEach( function( y ) {
				var z = v( y );
				if ( z == h ) {
					w.added.push( y )
				} else {
					if ( z == j ) {
						w.removed.push( y )
					} else {
						if ( z == u && ( w.reparented || w.reordered ) ) {
							var x = this.stayedIn.get( y );
							if ( w.reparented && x == m ) {
								w.reparented.push( y )
							} else {
								if ( w.reordered && x == f ) {
									w.reordered.push( y )
								}
							}
						}
					}
				}
			}, this );
			this.exited.forEach( function( x ) {
				var y = v( x );
				if ( y == j || y == u ) {
					w.removed.push( x )
				}
			} )
		},
		getOldParentNode: function( w ) {
			var x = this.changeMap.get( w );
			if ( x && x.childList ) {
				return x.oldParentNode ? x.oldParentNode : null
			}
			var v = this.reachabilityChange( w );
			if ( v == d || v == h ) {
				return null
			}
			return w.parentNode
		},
		getOldPreviousSibling: function( v ) {
			var w = this.childlistChanges.get( v.parentNode );
			if ( !w || !this.wasReordered( v ) ) {
				throw Error( "getOldPreviousSibling requested on invalid node." )
			}
			return w.oldPreviousSibling.get( v )
		},
		getOldAttribute: function( w, v ) {
			var x = this.changeMap.get( w );
			if ( !x || !x.attributes ) {
				throw Error( "getOldAttribute requested on invalid node." )
			}
			if ( x.matchCaseInsensitive ) {
				v = v.toLowerCase()
			}
			if ( !g( x.attributeOldValues, v ) ) {
				throw Error( "getOldAttribute requested for unchanged attribute name." )
			}
			return x.attributeOldValues[ v ]
		},
		getAttributesChanged: function() {
			if ( !this.attributesChanges ) {
				return {}
			}
			var v = {};
			var x = this.changeMap.keys();
			for ( var z = 0; z < x.length; z++ ) {
				var A = x[ z ];
				var B = this.changeMap.get( A );
				if ( !B.attributes ) {
					continue
				}
				if ( u != this.reachabilityChange( A ) || u != this.matchabilityChange( A ) ) {
					continue
				}
				var y = A;
				var w = B.attributeOldValues;
				Object.keys( w ).forEach( function( D ) {
					var C = D;
					if ( y.getAttribute( D ) == w[ D ] ) {
						return
					}
					if ( !v[ C ] ) {
						v[ C ] = []
					}
					v[ C ].push( y )
				} )
			}
			return v
		},
		getOldCharacterData: function( v ) {
			var w = this.changeMap.get( v );
			if ( !w || !w.characterData ) {
				throw Error( "getOldCharacterData requested on invalid node." )
			}
			return w.characterDataOldValue
		},
		getCharacterDataChanged: function() {
			if ( !this.characterDataChanges ) {
				return []
			}
			var w = this.changeMap.keys();
			var v = [];
			for ( var x = 0; x < w.length; x++ ) {
				var y = w[ x ];
				if ( u != this.reachabilityChange( y ) || u != this.matchabilityChange( y ) ) {
					continue
				}
				var z = this.changeMap.get( y );
				if ( !z.characterData || y.textContent == z.characterDataOldValue ) {
					continue
				}
				v.push( y )
			}
			return v
		},
		reachabilityChange: function( y ) {
			this.reachableCache = this.reachableCache || new l;
			this.wasReachableCache = this.wasReachableCache || new l;
			var w = this.rootNode;
			var x = this.changeMap;
			var C = this.reachableCache;
			var z = this.wasReachableCache;

			function v( D ) {
				var E = x.get( D );
				if ( E && E.childList ) {
					if ( E.oldParentNode ) {
						return E.oldParentNode
					}
					if ( E.added ) {
						return null
					}
				}
				return D.parentNode
			}

			function B( D ) {
				if ( D === w ) {
					return true
				}
				if ( !D ) {
					return false
				}
				var E = C.get( D );
				if ( E === undefined ) {
					E = B( D.parentNode );
					C.set( D, E )
				}
				return E
			}

			function A( D ) {
				if ( D === w ) {
					return true
				}
				if ( !D ) {
					return false
				}
				var E = z.get( D );
				if ( E === undefined ) {
					E = A( v( D ) );
					z.set( D, E )
				}
				return E
			}
			if ( B( y ) ) {
				return A( y ) ? u : h
			} else {
				return A( y ) ? j : d
			}
		},
		matchabilityChange: function( v ) {
			if ( this.filterCharacterData ) {
				switch ( v.nodeType ) {
					case Node.COMMENT_NODE:
					case Node.TEXT_NODE:
						return u;
					default:
						return d
				}
			}
			return u
		},
		processChildlistChanges: function() {
			if ( this.childlistChanges ) {
				return
			}
			var w = this.childlistChanges = new l;

			function v( y ) {
				var z = w.get( y );
				if ( !z ) {
					z = {
						added: new l,
						removed: new l,
						maybeMoved: new l,
						oldPrevious: new l
					};
					w.set( y, z )
				}
				return z
			}
			var x = this.reachabilityChange.bind( this );
			this.mutations.forEach( function( z ) {
				if ( z.type != "childList" ) {
					return
				}
				if ( x( z.target ) != u ) {
					return
				}
				var B = v( z.target );
				var y = z.previousSibling;

				function A( D, C ) {
					if ( !D || B.oldPrevious.has( D ) || B.added.has( D ) || B.maybeMoved.has( D ) ) {
						return
					}
					if ( C && ( B.added.has( C ) || B.maybeMoved.has( C ) ) ) {
						return
					}
					B.oldPrevious.set( D, C )
				}
				r( z.removedNodes, function( C ) {
					A( C, y );
					if ( B.added.has( C ) ) {
						B.added[ "delete" ]( C )
					} else {
						B.removed.set( C, true );
						B.maybeMoved[ "delete" ]( C, true )
					}
					y = C
				} );
				A( z.nextSibling, y );
				r( z.addedNodes, function( C ) {
					if ( B.removed.has( C ) ) {
						B.removed[ "delete" ]( C );
						B.maybeMoved.set( C, true )
					} else {
						B.added.set( C, true )
					}
				} )
			} )
		},
		wasReordered: function( w ) {
			if ( !this.childListChanges ) {
				return false
			}
			this.processChildlistChanges();
			var A = this.childlistChanges.get( w.parentNode );
			if ( A.moved ) {
				return A.moved.get( w )
			}
			var B = A.moved = new l;
			var v = new l;

			function x( F ) {
				while ( F = F.previousSibling ) {
					if ( v.has( F ) ) {
						return false
					}
				}
				return true
			}

			function z( F ) {
				if ( !F ) {
					return false
				}
				if ( !A.maybeMoved.has( F ) ) {
					return false
				}
				var G = B.get( F );
				if ( G !== undefined ) {
					return G
				}
				if ( v.has( F ) ) {
					G = x( F )
				} else {
					v.set( F, true );
					G = E( F ) !== D( F )
				}
				if ( v.has( F ) ) {
					v[ "delete" ]( F );
					B.set( F, G )
				} else {
					G = B.get( F )
				}
				return G
			}
			var C = A.oldPreviousSibling = new l;

			function D( G ) {
				var F = C.get( G );
				if ( F !== undefined ) {
					return F
				}
				F = A.oldPrevious.get( G );
				while ( F && ( A.removed.has( F ) || z( F ) ) ) {
					F = D( F )
				}
				if ( F === undefined ) {
					F = G.previousSibling
				}
				C.set( G, F );
				return F
			}
			var y = new l;

			function E( G ) {
				if ( y.has( G ) ) {
					return y.get( G )
				}
				var F = G.previousSibling;
				while ( F && ( A.added.has( F ) || z( F ) ) ) {
					F = F.previousSibling
				}
				y.set( G, F );
				return F
			}
			A.maybeMoved.keys().forEach( z );
			return A.moved.get( w )
		}
	};

	function c( v ) {
		var x = {
			callback: true,
			queries: true,
			rootNode: true,
			observeOwnChanges: true
		};
		var w = {
			callback: v.callback,
			rootNode: v.rootNode || document,
			observeOwnChanges: v.observeOwnChanges
		};
		w.queries = [ {
			all: true
		} ];
		return w
	}

	function n( v ) {
		return {
			childList: true,
			subtree: true,
			attributes: true,
			attributeOldValue: true,
			characterData: true
		}
	}

	function s( v, w, A ) {
		v.elementFilter = A.elementFilter;
		v.filterCharacterData = A.characterData;
		var x = {
			target: w,
			type: "summary",
			added: [],
			removed: []
		};
		x.getOldParentNode = v.getOldParentNode.bind( v );
		if ( A.all || A.element ) {
			x.reparented = []
		}
		if ( A.all ) {
			x.reordered = []
		}
		v.getChanged( x );
		if ( A.all || A.attribute || A.elementAttributes ) {
			var z = A.attribute ? [ A.attribute ] : A.elementAttributes;
			var y = v.getAttributesChanged();
			if ( A.attribute ) {
				x.valueChanged = [];
				if ( y[ A.attribute ] ) {
					x.valueChanged = y[ A.attribute ]
				}
				x.getOldAttribute = function( C ) {
					return v.getOldAttribute( C, A.attribute )
				}
			} else {
				x.attributeChanged = y;
				if ( A.elementAttributes ) {
					A.elementAttributes.forEach( function( C ) {
						if ( !x.attributeChanged.hasOwnProperty( C ) ) {
							x.attributeChanged[ C ] = []
						}
					} )
				}
				x.getOldAttribute = v.getOldAttribute.bind( v )
			}
		}
		if ( A.all || A.characterData ) {
			var B = v.getCharacterDataChanged();
			x.getOldCharacterData = v.getOldCharacterData.bind( v );
			if ( A.characterData ) {
				x.valueChanged = B
			} else {
				x.characterDataChanged = B
			}
		}
		if ( x.reordered ) {
			x.getOldPreviousSibling = v.getOldPreviousSibling.bind( v )
		}
		return x
	}

	function t( w ) {
		var x = false;
		var E = c( w );
		var v = n( E.queries );
		var B = E.rootNode;
		var C = E.callback;
		var D = true;

		function y( G ) {
			if ( !G || !G.length ) {
				return []
			}
			var F = new b( B, void 0, D );
			F.processMutations( G );
			return E.queries.map( function( H ) {
				return s( F, B, H )
			} )
		}

		function A( F ) {
			return F.some( function( G ) {
				var I = [ "added", "removed", "reordered", "reparented", "valueChanged", "characterDataChanged" ];
				if ( I.some( function( J ) {
						return G[ J ] && G[ J ].length
					} ) ) {
					return true
				}
				if ( G.attributeChanged ) {
					var H = Object.keys( G.attributeChanged ).some( function( J ) {
						return G.attributeChanged[ J ].length
					} );
					if ( H ) {
						return true
					}
				}
				return false
			} )
		}
		var z = new e( function( F ) {
			if ( !E.observeOwnChanges ) {
				z.disconnect()
			}
			var G = y( F );
			if ( A( G ) ) {
				C( G )
			}
			if ( !E.observeOwnChanges ) {
				z.observe( B, v )
			}
		} );
		this.reconnect = function() {
			if ( x ) {
				throw Error( "Already connected" )
			}
			z.observe( B, v );
			x = true
		};
		this.disconnect = function() {
			if ( !x ) {
				throw Error( "Not connected" )
			}
			var F;
			if ( typeof z.takeRecords == "function" ) {
				F = z.takeRecords()
			} else {
				console.log( "Warning: MutationObserver.takeRecords not implemented. Current changes cannot be reported." )
			}
			z.disconnect();
			x = false;
			var G = y( F );
			if ( A( G ) ) {
				return G
			}
		};
		this.reconnect()
	}
	p.MutationSummary = t;
	p.MutationSummary.NodeMap = l
} )( this );
! function( window ) {
	var j = void 0,
		k = !0,
		m = null,
		o = !1;

	function p( a ) {
		return function() {
			return this[ a ]
		}
	}

	function r( a ) {
		return function() {
			return a
		}
	}
	var s;
	var t, aa, ba, u;
	( function() {
		var a = {};
		t = function( b, c ) {
			a[ b ] = a[ b ] || [];
			a[ b ].push( c )
		};
		aa = function( b, c ) {
			var d = a[ b ];
			if ( d )
				for ( var e = 0; e < d.length; e++ ) d[ e ] === c && d.splice( e, 1 )
		};
		ba = function() {
			a = {}
		};
		u = function( b ) {
			var c = a[ b.w() ];
			if ( c )
				for ( var d = 0; d < c.length; d++ ) c[ d ].call( this, b )
		}
	} )();
	var v = function() {
		var a = /^\s+|\s+$/g;
		return String.prototype.trim ? function( a ) {
			return a ? a.trim() : ""
		} : function( b ) {
			return b ? b.replace( a, "" ) : ""
		}
	}();
	var ca = {
			id: "i",
			"class": "c",
			node: "n",
			style: "s",
			attributes: "a",
			value: "v"
		},
		da = {
			"alignment-baseline": "ab",
			background: "bac",
			"background-attachment": "ba",
			"background-color": "bc",
			"background-image": "bi",
			"background-origin": "bo",
			"background-position": "bp",
			"background-repeat": "br",
			"background-size": "bs",
			"baseline-shift": "bsh",
			"border-bottom-color": "bbc",
			"border-bottom-left-radius": "bblr",
			"border-bottom-right-radius": "bbrr",
			"border-bottom-style": "bbs",
			"border-bottom-width": "bbw",
			"border-collapse": "bco",
			"border-image-outset": "bio",
			"border-image-repeat": "bir",
			"border-image-slice": "bis",
			"border-image-source": "biso",
			"border-image-width": "biw",
			"border-left-style": "bls",
			"border-left-width": "blw",
			"border-right-color": "brc",
			"border-right-style": "brs",
			"border-right-width": "brw",
			"border-top-color": "btc",
			"border-top-left-radius": "btlr",
			"border-top-right-radius": "btrr",
			"border-top-style": "bts",
			"border-top-width": "btw",
			bottom: "b",
			"box-shadow": "bsh",
			"box-sizing": "bsi",
			"buffered-rendering": "bre",
			"caption-side": "cs",
			clear: "cl",
			clip: "cli",
			"clip-path": "cp",
			"clip-rule": "cr",
			color: "c",
			"color-interpolation": "ci",
			"color-interpolation-filters": "cif",
			"color-rendering": "cre",
			cursor: "cu",
			direction: "di",
			display: "d",
			"dominant-baseline": "db",
			"empty-cells": "ec",
			fill: "fi",
			"fill-opacity": "fop",
			"fill-rule": "fr",
			filter: "fil",
			"float": "f",
			"flood-color": "fc",
			"flood-opacity": "fo",
			"font-family": "ff",
			"font-kerning": "fk",
			"font-size": "fs",
			"font-stretch": "fsr",
			"font-style": "fst",
			"font-variant": "fv",
			"font-variant-ligatures": "fvl",
			"font-weight": "fw",
			"glyph-orientation-horizontal": "goh",
			"glyph-orientation-vertical": "gov",
			height: "h",
			"image-rendering": "ir",
			isolation: "is",
			left: "l",
			"lighting-color": "lc",
			"letter-spacing": "ls",
			"line-height": "lh",
			"list-style-image": "lsi",
			"list-style-position": "lsp",
			"list-style-type": "lst",
			"margin-bottom": "mb",
			"margin-left": "ml",
			"margin-right": "mr",
			"margin-top": "mt",
			"marker-end": "me",
			"marker-mid": "mm",
			"marker-start": "ms",
			mask: "ma",
			"mask-type": "mty",
			"max-height": "mah",
			"max-width": "maw",
			"min-height": "mih",
			"min-width": "miw",
			"mix-blend-mode": "mbm",
			"object-fit": "of",
			"object-position": "op",
			opacity: "o",
			orphans: "or",
			"outline-color": "oc",
			"outline-offset": "oo",
			"outline-style": "os",
			"outline-width": "ow",
			"overflow-wrap": "ovw",
			"overflow-x": "ovx",
			"overflow-y": "ovy",
			"padding-bottom": "pb",
			"padding-left": "pl",
			"padding-right": "pr",
			"padding-top": "pt",
			"page-break-after": "pba",
			"page-break-before": "pbb",
			"page-break-inside": "pbi",
			"paint-order": "po",
			"pointer-events": "pe",
			position: "p",
			resize: "re",
			right: "r",
			"shape-rendering": "sr",
			speak: "sp",
			"stop-color": "sc",
			"stop-opacity": "so",
			stroke: "s",
			"stroke-dasharray": "sda",
			"stroke-dashoffset": "sdo",
			"stroke-linecap": "sl",
			"stroke-linejoin": "sli",
			"stroke-opacity": "sop",
			"stroke-width": "sw",
			"table-layout": "tl",
			"stroke-miterlimit": "sm",
			"tab-size": "ts",
			"text-align": "ta",
			"text-anchor": "tan",
			"text-decoration": "td",
			"text-indent": "ti",
			"text-rendering": "tr",
			"text-shadow": "ts",
			"text-overflow": "to",
			"text-transform": "tt",
			top: "t",
			"touch-action": "ta",
			"transition-delay": "td",
			"transition-duration": "tdu",
			"transition-property": "tp",
			"transition-timing-function": "ttf",
			"unicode-bidi": "ub",
			"vector-effect": "ve",
			"vertical-align": "va",
			visibility: "v",
			"white-space": "ws",
			windows: "wi",
			width: "w",
			"will-change": "wc",
			"word-break": "wb",
			"word-spacing": "ws",
			"word-wrap": "ww",
			"writing-mode": "wm",
			x: "x",
			y: "y",
			"z-index": "zi",
			zoom: "z"
		};

	function ea( a ) {
		var b, c, d = {},
			e;
		for ( e in a )
			if ( c = ca[ e ] ) {
				if ( b = d[ c ] = a[ e ] || "", "style" === e ) {
					var f = d,
						h = j,
						i = j,
						l = j,
						g = [],
						h = i = j;
					if ( b = v( b ) ) {
						l = b.split( /((?!(;base64)));/g );
						for ( b = 0; b < l.length; b++ )
							if ( i = l[ b ] ) h = i.split( /:(.+)?/ ), 1 < h.length && ( i = v( h[ 0 ] ), h = v( h[ 1 ] ), i && ( h += ";", i = ( da[ i ] || i ) + ":", g.push( i ), g.push( h ) ) )
					}
					f[ c ] = g.join( "" )
				}
			} else d[ e ] = a[ e ];
		return d
	};

	function fa( a ) {
		this.p = a
	}
	fa.prototype.w = r( 12 );

	function ga( a ) {
		this.j = a
	}
	ga.prototype.w = r( 6 );

	function ha( a ) {
		this.j = a
	}
	ha.prototype.w = r( 8 );

	function w( a ) {
		return a.ClickTale
	}

	function ia( a ) {
		a.ClickTale && delete a.ClickTale
	};

	function y( a ) {
		for ( a = a.previousSibling; a && a.nodeType === z; ) a = a.previousSibling;
		return a
	}

	function ja( a ) {
		for ( a = a.nextSibling; a && a.nodeType === z; ) a = a.nextSibling;
		return a
	};
	var z = 3;
	var A = function() {
		var a = document.documentElement;
		return a.compareDocumentPosition || a.contains ? function( a, c ) {
			var d = 9 === a.nodeType ? a.documentElement : a;
			return a === c || d.contains && d.contains( c ) || a.compareDocumentPosition && a.compareDocumentPosition( c ) & 16
		} : function( a, c ) {
			if ( c )
				for ( ; c = c.parentNode; )
					if ( c === a ) return k;
			return o
		}
	}();
	var ka;

	function la( a ) {
		var b = a instanceof Array ? [] : {},
			c, d;
		for ( d in a ) a.hasOwnProperty( d ) && ( ( c = a[ d ] ) && "object" === typeof c && ( c instanceof Boolean || c instanceof Number || c instanceof String || ( c = la( c ) ) ), b[ d ] = c );
		return b
	}

	function B() {
		if ( ka ) return ka;
		var a = window.ClickTaleGlobal;
		a || ( a = {}, window.ClickTaleGlobal = a );
		a.exports = a.exports || {};
		a.symbols = a.symbols || {};
		return ka = a
	};
	var C = {
		Ta: 1,
		Kb: function( a, b ) {
			return ( 1 === b.nodeType ? a.B : a.qa ).apply( a, b )
		}
	};
	C.ab = function( a ) {
		return ( 1 === a.nodeType ? C.B : C.Ma ).call( C, a )
	};
	C.bb = function( a, b, c, d ) {
		for ( var e = 0; e < b.length; e++ ) {
			var f = b[ e ],
				h = c[ f.Pa ] || ( c[ f.Pa ] = f.u() );
			if ( C.wb( a, h ) ) return f.transform( a )
		}
		return d( a )
	};
	C.wb = function( a, b ) {
		for ( var c, d = 0; d < b.length; d++ )
			if ( ( c = b[ d ] ) && a === c || A( c, a ) ) return k;
		return o
	};
	C.B = function( a ) {
		for ( var a = a.attributes, b = {}, c = 0; c < a.length; c++ ) {
			var d = a.item( c );
			b[ d.name ] = d.value
		}
		return b
	};
	C.Ma = function( a ) {
		var b = [],
			c = y( a ),
			c = c && c.nextSibling ? c.nextSibling : a.parentNode.firstChild;
		do b.push( c.textContent || c.nodeValue ), c = c.nextSibling; while ( c && c.nodeType === z );
		return b.join( "" )
	};

	function ma() {}
	ma.prototype.B = function( a, b ) {
		return b || C.B( a )
	};
	ma.prototype.qa = function( a ) {
		return C.Ma( a )
	};

	function D() {
		var a = this;
		this.va = [];
		this.fa = [];
		this.xa = {};
		t( 12, function() {
			a.xa = {}
		} )
	}
	D.prototype.clear = function() {
		this.va.length = this.fa.length = 0
	};
	D.prototype.B = function( a, b ) {
		return C.bb( a, this.fa, this.xa, function() {
			return b || C.B( a )
		} )
	};
	D.prototype.qa = function( a ) {
		return C.bb( a, this.va, this.xa, C.Ma )
	};

	function na( a, b ) {
		this.u = a;
		this.transform = b;
		this.Pa = ++C.Ta
	}
	na.prototype.u = m;
	na.prototype.transform = m;

	function oa( a, b ) {
		this.u = a;
		this.transform = b;
		this.Pa = ++C.Ta
	}
	oa.prototype.u = m;
	oa.prototype.transform = m;

	function pa( a ) {
		var b = a.C,
			c = b.selector;
		return "string" === typeof c ? ( a.C = {
			transform: b.transform,
			selector: qa( c, a.Eb )
		}, k ) : o
	}

	function qa( a, b ) {
		return function() {
			return b.select( a )
		}
	}

	function ra( a ) {
		var b = a.C,
			c = b.selector;
		if ( c instanceof Array && c.length && ( a.C = {
				selector: c[ 0 ],
				transform: b.transform
			}, pa( a ) ) ) {
			if ( 1 < c.length ) {
				var d = c[ 1 ];
				if ( "function" === typeof d ) {
					var e = a.C.selector;
					a.C.selector = function() {
						return d( e() )
					}
				}
			}
			return a.C
		}
		return m
	};

	function sa( a, b, c ) {
		ta( b, c, function( b ) {
			b = new na( b.selector, b.transform );
			a.va.splice( a.va.length, 0, b )
		} )
	}

	function ua( a, b, c ) {
		ta( b, c, function( b ) {
			b = new oa( b.selector, b.transform );
			a.fa.splice( a.fa.length, 0, b )
		} )
	}

	function ta( a, b, c ) {
		if ( a instanceof Array )
			for ( var d = 0; d < a.length; d++ ) {
				var e;
				e = a[ d ];
				var f = {
					C: e,
					Eb: b
				};
				( e = "selector" in e && "transform" in e && "function" === typeof e.transform && ( pa( f ) || ra( f ) ) ? f.C : m ) && c( e )
			}
	};

	function va( a, b, c ) {
		this.j = a;
		this.qb = b;
		this.zb = c
	}
	va.prototype.w = r( 18 );

	function wa( a, b, c, d ) {
		this.p = 0;
		this.gb = c.JSON;
		this.l = o;
		this.Qa = a;
		this.Gb = /^[A-Za-z]+.*/i;
		this.c = b;
		this.H = new xa( c.Filters );
		( a = c.PII ) ? ( b = new D, sa( b, a.Text, d ), ua( b, a.Attributes, d ), d = b ) : d = new ma;
		this.da = d
	}
	wa.prototype.ab = function( a ) {
		var b, c, d, e, f, h, i, l;
		d = {};
		this.p++;
		this.l = o;
		i = a.ra;
		b = a.ma;
		l = a.attributes;
		c = a.text;
		f = {
			removed: a.ra,
			moved: a.ma,
			attributes: l,
			text: c
		};
		h = new E;
		if ( f = G( f, this.p, "Before processing", this.H.Ua ) ) {
			a: if ( e = [], this.l ) i = [];
				else {
					for ( f = 0; f < i.length; f++ ) {
						var g = i[ f ],
							n = this.c.getData( g ),
							q = g,
							F = g,
							x;
						u( new ya( q ) );
						do {
							if ( !F ) {
								g = k;
								break
							}
							g = F;
							x = this.c.getData( g );
							F = x.aa;
							g = !x.la || za( this.Qa, F )
						} while ( !g && ( !F || !A( document.documentElement, F ) ) );
						if ( !g ) {
							if ( !H( this.H, q, this.p ) ) {
								this.l = k;
								i = [];
								break a
							}
							x.I || ( q.nodeType ===
								z ? Aa( this, n, h, e ) : e.push( n.f ) )
						}
						u( new ha( q ) )
					}
					i = e
				}b = Ba( this, b, h, i, !a.Ca );a: if ( a = [], this.l ) l = [];
				else {
					for ( e = 0; e < l.length; e++ )
						if ( f = l[ e ], n = {}, q = f.node, this.c.getData( q, o, Ca ).la ) {
							if ( !H( this.H, q, this.p ) ) {
								this.l = k;
								l = [];
								break a
							}
							g = this.da.B( q, f.attributes );
							x = this.c.getData( q ).f;
							n.a = ea( g );
							n.n = x;
							a.push( n );
							u( new va( q, x, f ) )
						}
					l = a
				}a: if ( c = c.concat( I( h ) ), this.l ) c = [];
				else {
					h = {};
					a = [];
					for ( x = 0; x < c.length; x++ ) {
						e = c[ x ];
						f = this.c.getData( e );
						n = y( e );
						n = !n ? "" : this.c.getData( n ).f;
						if ( !n ) {
							if ( q = e.parentNode ) {
								if ( "SCRIPT" === q.tagName ) continue;
								n = this.c.getData( q ).f
							} else f.aa && ( n = this.c.getData( f.aa ).f );
							if ( !n ) continue
						}
						if ( !( n in h ) && f.la ) {
							if ( !H( this.H, e, this.p ) ) {
								this.l = k;
								c = [];
								break a
							}
							a.push( Da( this, e ) );
							h[ n ] = k
						}
					}
					c = a
				}e = {
				removed: i,
				moved: b,
				attributes: l,
				text: c
			}
		}
		u( new fa( this.p ) );
		if ( e && ( e.removed.length || e.moved.length || e.attributes.length || e.text.length ) && !this.l )
			if ( b = e, G( b, this.p, "On projection", this.H.cb ) && ( J( d, b, "attributes", "a" ), J( d, b, "removed", "r" ), J( d, b, "moved", "m" ), J( d, b, "text", "t" ), d = {
					projection: b,
					buffer: this.gb.stringify( d )
				}, f = G( d, this.p,
					"After processing", this.H.ea ) ) ) return d.buffer;
		return m
	};

	function J( a, b, c, d ) {
		( b = b[ c ] ) && b.length && ( a[ d ] = b )
	}

	function Aa( a, b, c, d ) {
		for ( var e = b.previousElementSibling, b = b.aa, f; e && ( !e || !A( document.documentElement, e ) ); ) e = a.c.getData( e ).previousElementSibling;
		f = e ? e.nextSibling : b.firstChild;
		if ( !f || f && A( document.documentElement, f ) ) f && f.nodeType === z ? c.set( f, f ) : ( c = {
			t: k,
			pn: a.c.getData( b ).f
		}, e && ( c.pes = a.c.getData( e ).f ), d.push( c ) )
	}

	function Ea( a, b, c, d, e ) {
		var f = b.previousSibling,
			h = b.nextSibling,
			i = a.c.getData( b ),
			l = i.I,
			g = o;
		if ( b.nodeType === z ) {
			if ( f && f.nodeType === z ? ( c.set( f, f ), g = k ) : h && h.nodeType === z && ( c.set( b, b ), g = k ), l || Aa( a, i, c, e ), g ) return
		} else h && h.nodeType === z && f && f.nodeType === z && ( e = a.c.getData( f ), a = a.c.getData( h ), !e.I && !a.I && ( c.set( f, f ), d.set( h, k ) ) );
		d.set( b, k )
	}

	function Ba( a, b, c, d, e ) {
		var f = new E,
			h = [],
			i, l, g, n = new E;
		if ( a.l ) return h;
		for ( var q = 0; q < b.length; q++ )
			if ( g = b[ q ], l = g.parentNode, a.c.getData( g ), !( 3 === g.nodeType && "SCRIPT" === l.tagName ) && a.c.getData( g, o, j ).la ) {
				if ( !H( a.H, g, a.p ) ) return a.l = k, [];
				l && ( i = f.get( l ), i || ( i = new E, f.set( l, i ) ), Ea( a, g, c, i, d ) )
			}
		b = f.keys();
		for ( d = 0; d < b.length; d++ ) {
			l = b[ d ];
			i = f.get( l );
			for ( g = i.keys(); g.length; ) {
				for ( g = g[ 0 ]; g.previousSibling && i.has( g.previousSibling ); ) g = g.previousSibling;
				for ( ; g && i.has( g ); ) {
					if ( !n.has( g ) && !c.has( g ) ) {
						if ( l = Fa( a, g, e,
								function( b ) {
									var c = a.c.getData( b );
									n.set( b, k );
									return !c.I && b.nodeType !== z ? c.f : m
								} ) ) l = {
							n: l,
							t: g.nodeType === z,
							pn: !g.parentNode ? "" : a.c.getData( g.parentNode ).f
						}, Ga( a, g, l ), h.push( l );
						u( new ga( g ) )
					}
					i.remove( g );
					g = g.nextSibling
				}
				g = i.keys()
			}
		}
		n = m;
		return h
	}

	function Fa( a, b, c, d ) {
		var e, f = {};
		if ( !b ) return m;
		if ( d && ( f = d( b ) ) ) return u( new Ha( b, f ) ), f;
		f = {
			nt: b.nodeType
		};
		switch ( b.nodeType ) {
			case 10:
				f.na = b.name;
				f.pi = b.publicId;
				f.si = b.systemId;
				break;
			case z:
				if ( "SCRIPT" === b.parentNode.tagName ) return m;
				f.tc = v( a.da.qa( b ) );
				break;
			case 1:
				if ( !a.Gb.test( b.tagName ) ) return m;
				f.tn = b.tagName;
				e = a.da.B( b );
				f.a = ea( e );
				if ( c && b.childNodes.length ) {
					f.cn = c = [];
					for ( e = b.firstChild; e; e = e.nextSibling )
						if ( a.c.getData( e ).I ) {
							var h = Fa( a, e, k, d );
							h && c.push( h )
						}
				}
		}
		u( new Ha( b, f ) );
		return f
	}

	function Da( a, b ) {
		var c = b.parentNode,
			c = {
				tc: v( a.da.qa( b ) ),
				pn: !c ? "" : a.c.getData( c ).f
			};
		Ga( a, b, c );
		return c
	}

	function Ga( a, b, c ) {
		var d = b.previousSibling;
		d && ( d.nodeType === z ? ( d = y( b ) ) ? c.pes = a.c.getData( d ).f : b.nodeType !== z && ( c.pt = k ) : c.ps = a.c.getData( d ).f )
	};
	var K;
	B().symbols.WRResetSettingsCache = Ia;

	function Ja( a ) {
		if ( !K ) {
			a = a.ClickTaleSettings;
			if ( "object" !== typeof a ) return m;
			K || ( K = la( a ) )
		}
		return K
	}

	function Ia() {
		K = m
	};
	var Ka = Array.prototype.indexOf ? function( a, b ) {
		return a.indexOf( b )
	} : function( a, b ) {
		for ( var c = a.length, d = 0; d < c; d++ )
			if ( a[ d ] === b ) return d;
		return -1
	};

	function L() {
		this.g = []
	}
	L.prototype.add = function( a ) {
		this.g.push( a )
	};
	L.prototype.remove = function( a ) {
		a = this.indexOf( a );
		0 <= a && this.g.splice( a, 1 )
	};
	L.prototype.indexOf = function( a ) {
		return Ka( this.g, a )
	};
	L.prototype.Aa = function( a ) {
		for ( var b = this.g, c = 0; c < b.length; c++ ) b[ c ].apply( b[ c ], arguments )
	};

	function La() {
		this.xb = 0
	}
	La.prototype.Xa = function() {
		return ++this.xb
	};
	var Ma = 1;

	function E( a ) {
		this.s = {};
		this.K = "__node_map_id_" + Ma++ + "__";
		this.tb = a || new La
	}
	s = E.prototype;
	s.clear = function( a ) {
		for ( var a = a || this.keys(), b = 0; b < a.length; b++ ) this.remove( a[ b ] )
	};
	s.set = function( a, b, c ) {
		M( this, a, o, c );
		this.s[ w( a )[ this.K ] ] = {
			rb: a,
			v: b
		}
	};
	s.get = function( a ) {
		return M( this, a ) ? m : ( a = this.s[ w( a )[ this.K ] ] ) ? a.v : m
	};
	s.has = function( a ) {
		return !M( this, a, k ) && w( a )[ this.K ] in this.s
	};
	s.remove = function( a ) {
		M( this, a ) || delete this.s[ w( a )[ this.K ] ]
	};
	s.count = function() {
		return this.keys().length
	};
	s.keys = function() {
		var a = [],
			b;
		for ( b in this.s ) a.push( this.s[ b ].rb );
		return a
	};
	s.key = function( a ) {
		M( this, a );
		return w( a )[ this.K ]
	};

	function M( a, b, c, d ) {
		var e;
		b.ClickTale = b.ClickTale || {};
		e = w( b );
		return !e[ a.K ] && !c ? ( e[ a.K ] = d || a.tb.Xa( b ), k ) : o
	}

	function I( a ) {
		for ( var b = [], c = a.keys(), d = 0; d < c.length; d++ ) b.push( a.get( c[ d ] ) );
		return b
	};

	function N() {
		this.D = new L;
		this.o = new E;
		this.Ka = {};
		this.Bb = [ {
			all: k
		} ]
	}
	N.prototype.description = r( "observers" );
	N.prototype.Sa = function( a, b ) {
		this.D.add( function() {
			a.apply( b, arguments )
		} )
	};
	N.prototype.observe = function( a ) {
		if ( !this.o.has( a ) ) {
			this.o.set( a, k );
			var b = this,
				c = new MutationSummary( {
					rootNode: a,
					callback: function( a ) {
						return Na( b, a )
					},
					queries: this.Bb,
					observeOwnChanges: k
				} );
			this.Ka[ this.o.key( a ) ] = c
		}
	};

	function Na( a, b ) {
		var c = b[ 0 ];
		a.D.Aa( {
			Ca: k,
			ra: c.removed,
			ma: c.added.concat( c.reparented ).concat( c.reordered ),
			attributes: Oa( c.attributeChanged ),
			text: c.characterDataChanged
		}, {
			Ba: function( a ) {
				return c.getOldParentNode( a )
			}
		} )
	}
	N.prototype.disconnect = function( a ) {
		var b = this.o.key( a );
		if ( b ) {
			var c = this.Ka[ b ];
			c && ( c.disconnect(), delete this.Ka[ b ], this.o.remove( a ) )
		}
	};

	function Oa( a ) {
		if ( a ) {
			var b = new E,
				c;
			for ( c in a )
				for ( var d = a[ c ], e = 0; e < d.length; e++ ) {
					var f = d[ e ],
						h = b.get( f ) || {
							node: f,
							attributes: {}
						};
					b.set( f, h );
					h.attributes[ c ] = f.getAttribute( c )
				}
			return b.keys().map( function( a ) {
				return b.get( a )
			} )
		}
		return []
	};

	function O( a ) {
		var b = m;
		this.m = a;
		this.J = o;
		this.A = m;
		if ( b = "ontouchstart" in a || a.DocumentTouch && a.document instanceof a.DocumentTouch ? a.MutationObserver : a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver ) a = b.prototype, this.J = "function" === typeof a.observe && "function" === typeof a.disconnect
	}
	O.prototype.P = O.prototype.getObserver = function() {
		return this.A || ( this.A = new N )
	};
	O.prototype.Da = O.prototype.isSpecified = p( "J" );

	function Pa() {
		this.g = {}
	}
	Pa.prototype.add = function( a, b, c ) {
		Qa( this, a, k )[ c ] = b
	};
	Pa.prototype.remove = function( a, b ) {
		var c = Qa( this, a );
		c && c[ b ] && delete c[ b ]
	};

	function Qa( a, b, c ) {
		if ( !a.g[ b ] ) {
			if ( !c ) return m;
			a.g[ b ] = {}
		}
		return a.g[ b ]
	};

	function P() {
		this.pa = new E
	}
	new P;
	P.prototype.Ba = function( a ) {
		return this.pa.get( a )
	};
	P.prototype.map = function( a, b ) {
		this.pa.has( a ) || this.pa.set( a, b )
	};
	P.prototype.clear = function() {
		this.pa.clear()
	};

	function Ra( a ) {
		this.m = a;
		this.G = o;
		this.sa = new Pa;
		this.D = new L;
		this.r = new P;
		this.o = new E;
		this.z()
	}
	s = Ra.prototype;
	s.Sa = function( a, b ) {
		this.D.add( function() {
			a.apply( b, arguments )
		} )
	};
	s.disconnect = function( a ) {
		var b = this.o.key( a ).toString();
		if ( b ) {
			var c = Qa( this.sa, b ),
				b = c.handleChildListChange,
				d = c.handleAttributesChange,
				c = c.handleCharctersDataChange;
			a.removeEventListener( "DOMNodeRemoved", b, o );
			a.removeEventListener( "DOMNodeInserted", b, o );
			a.removeEventListener( "DOMAttrModified", d, o );
			a.removeEventListener( "DOMCharacterDataModified", c, o )
		}
	};
	s.observe = function( a ) {
		if ( !this.o.has( a ) ) {
			var b;
			this.o.set( a, k );
			b = this.o.key( a ).toString();
			Sa( this, b, a );
			Ta( this, b, a );
			Ua( this, b, a )
		}
	};
	s.description = r( "events" );

	function Sa( a, b, c ) {
		function d() {
			a.nb.apply( a, arguments );
			Va( a )
		}
		a.sa.add( b, d, "handleAttributesChange" );
		c.addEventListener( "DOMAttrModified", d, o )
	}

	function Ta( a, b, c ) {
		function d() {
			a.pb.apply( a, arguments );
			Va( a )
		}
		a.sa.add( b, d, "handleChildListChange" );
		c.addEventListener( "DOMNodeRemoved", d, o );
		c.addEventListener( "DOMNodeInserted", d, o )
	}

	function Ua( a, b, c ) {
		function d() {
			a.ob.apply( a, arguments );
			Va( a )
		}
		a.sa.add( b, d, "handleCharctersDataChange" );
		c.addEventListener( "DOMCharacterDataModified", d, k )
	}
	s.pb = function( a ) {
		var b = a.target;
		"DOMNodeInserted" === a.type ? ( this.e.has( b ) && this.e.remove( b ), this.k.set( b, b ) ) : ( this.r.map( b, a.relatedNode ), this.k.has( b ) && this.k.remove( b ), this.O.has( b ) && this.O.remove( b ), this.d.has( b ) && this.d.remove( b ), this.e.set( b, b ) )
	};
	s.ob = function( a ) {
		a = a.target;
		this.O.set( a, a )
	};
	s.nb = function( a ) {
		var b = a.target,
			c = this.d.get( b ) || {
				node: b,
				attributes: {}
			},
			a = a.attributeName || a.attrName;
		c.attributes[ a ] = b.getAttribute( a );
		this.d.set( b, c )
	};

	function Va( a ) {
		a.G || ( a.G = k, setTimeout( function() {
			a.G = o;
			a.Na();
			a.z()
		}, 0 ) )
	}
	s.Na = function() {
		var a = I( this.k ),
			b = I( this.e ),
			c = I( this.d ),
			d = I( this.O );
		this.D.Aa( {
			Ca: o,
			ma: a,
			ra: b,
			attributes: c,
			text: d
		}, this.r );
		this.r.clear()
	};
	s.z = function() {
		this.k = new E;
		this.e = new E;
		this.d = new E;
		this.O = new E
	};

	function Q( a ) {
		var b = a.document;
		this.m = a;
		this.A = m;
		this.J = k;
		this.V = b;
		this.J = this.V.addEventListener && Wa( this ) && Xa( this ) && Ya( this )
	}
	Q.prototype.P = Q.prototype.getObserver = function() {
		return this.A || ( this.A = new Ra( this.m ) )
	};
	Q.prototype.Da = Q.prototype.isSpecified = p( "J" );

	function Wa( a ) {
		var b, c = a.V.createElement( "div" ),
			a = c.id,
			d = o;
		b = function() {
			c.removeEventListener( "DOMAttrModified", b, o );
			d = k
		};
		c.addEventListener( "DOMAttrModified", b, o );
		c.id = "ctobserve";
		c.id = a;
		c = m;
		return d
	}

	function Xa( a ) {
		var b, c = a.V.createElement( "div" ),
			a = a.V.createElement( "input" ),
			d = o;
		a.type = "hidden";
		b = function() {
			c.removeEventListener( "DOMNodeInserted", b, o );
			d = k
		};
		c.addEventListener( "DOMNodeInserted", b, o );
		c.appendChild( a );
		c = a = m;
		return d
	}

	function Ya( a ) {
		var b, c = a.V,
			d = c.createElement( "div" ),
			a = c.createElement( "div" ),
			c = c.createTextNode( "text" ),
			e = o;
		a.appendChild( c );
		d.appendChild( a );
		b = function() {
			d.removeEventListener( "DOMCharacterDataModified", b, o );
			e = k
		};
		d.addEventListener( "DOMCharacterDataModified", b, o );
		a.firstChild.nodeValue = "ctobserve";
		d.removeChild( a );
		d = a = c = m;
		return e
	};

	function R( a ) {
		this.Va = a || window.jQuery
	}
	R.prototype.select = R.prototype.select = function( a, b ) {
		return b ? this.Va( b ).find( a ).get() : this.Va( a ).get()
	};
	R.prototype.description = r( "jQuery" );

	function S() {
		this.W = [];
		this.ya = window.document
	}
	S.prototype.select = S.prototype.select = function( a, b ) {
		if ( a ) {
			if ( a.nodeType ) return [ a ]
		} else return this.W;
		b = b || this.ya;
		if ( "string" === typeof a ) {
			"string" === typeof b ? b = this.ya.querySelector( b ) : b.nodeType || ( b = this.ya );
			try {
				return Array.prototype.slice.call( b.querySelectorAll( a ) )
			} catch ( c ) {
				a = this.W
			}
		} else a = this.W;
		return a
	};
	S.prototype.description = r( "css" );

	function Za() {}
	Za.prototype.select = Za.prototype.select = function( a ) {
		if ( !a || "string" === typeof a ) return [];
		a.length || ( a = a.nodeType ? [ a ] : [] );
		return a
	};
	Za.prototype.description = r( "identity" );

	function $a( a, b ) {
		this.m = a;
		this.ka = this.G = o;
		this.b = b || a.jQuery;
		this.D = new L;
		this.r = new P;
		this.$ = new E;
		this.O = [];
		this.z();
		this.Oa = {};
		this.Ya = parseFloat( this.b.fn.jquery );
		ab || ( bb( this ), cb( this ), this.W(), db( this ), eb( this ), fb( this ), gb( this ), hb( this ), ib( this ), jb( this ), kb( this ), lb( this ), mb( this ), nb( this ), ab = k )
	}
	var ab = o,
		ob = o,
		pb = {
			htmlFor: "for",
			className: "class",
			maxLength: "maxlength",
			cellSpacing: "cellspacing",
			cellPadding: "cellpadding",
			rowSpan: "rowspan",
			colSpan: "colspan",
			useMap: "usemap",
			frameBorder: "frameborder"
		};

	function bb( a ) {
		jQuery.each( "wrapAll,domManip,remove,empty,html,clone,css,animate,show,hide,addClass,removeClass,removeAttr,removeProp".split( "," ), function( b, c ) {
			a.Oa[ c ] = {
				Wa: a.b.fn,
				Za: c,
				method: a.b.fn[ c ]
			}
		} );
		jQuery.each( [ "prop", "attr" ], function( b, c ) {
			a.Oa[ c ] = {
				Wa: a.b,
				Za: c,
				method: a.b.fn[ c ]
			}
		} )
	}
	s = $a.prototype;
	s.Sa = function( a, b ) {
		this.D.add( function() {
			a.apply( b, arguments )
		} )
	};
	s.disconnect = function( a ) {
		this.$.has( a ) || this.$.remove( a );
		this.$.count() || qb( this )
	};

	function qb( a ) {
		jQuery.each( a.Oa, function( a, c ) {
			c.Wa[ c.Za ] = c.method
		} );
		ab = o
	}
	s.observe = function( a ) {
		this.$.has( a ) || ( ob = k, this.$.set( a, k ) )
	};
	s.description = r( "jQuery" );

	function rb( a, b ) {
		var c, d = 0;
		if ( !b ) return o;
		c = b.beforeunload;
		if ( a.b.isArray( c ) ) return 0 < c.length;
		if ( !c ) return o;
		a.b.each( c, function() {
			d++;
			return o
		} );
		return 0 < d
	}

	function nb( a ) {
		function b() {
			qb( a )
		}
		var c;
		c = 1.8 <= a.Ya ? a.b._data( a.m, "events" ) : a.b( a.m ).data( "events" );
		if ( rb( a, c ) )
			if ( c = c.beforeunload, a.b.isArray( c ) ) a.b( a.m ).bind( "beforeunload", b ), c.unshift( c.pop() );
			else {
				var d = [],
					e = 1;
				a.b.each( c, function( a, b ) {
					d.push( {
						key: parseInt( a, 10 ),
						value: b
					} )
				} );
				for ( var f = d.length - 1; 0 <= f; f-- ) {
					var h = d[ f ];
					c[ h.key ] = function() {};
					c[ h.key + 1 ] = h.value;
					0 === f && ( e = h.key )
				}
				c[ e - 1 ] = b
			}
		else a.b( a.m ).bind( "beforeunload", b )
	}

	function T( a ) {
		a.G || ( a.G = k, setTimeout( function() {
			a.G = o;
			a.Na();
			a.z()
		}, 0 ) )
	}
	s.Na = function() {
		var a = this,
			b = I( this.k ),
			c = I( this.e ),
			d = I( this.d ),
			e = I( this.ba ),
			f = I( this.S ),
			h = I( this.M ),
			b = b.concat( this.b.grep( e, function( a ) {
				return !!a.parentNode && U( a )
			} ) ),
			c = c.concat( this.b.grep( f, function( b ) {
				return ( b = a.r.Ba( b ) ) ? U( b ) : o
			} ) ),
			d = d.concat( this.b.grep( h, function( a ) {
				return U( a.node )
			} ) ),
			e = 0 === b.length + c.length + d.length,
			b = {
				Ca: o,
				ma: b,
				ra: c,
				attributes: d,
				text: this.O
			};
		ob && !e && this.D.Aa( b, this.r );
		this.r.clear()
	};

	function eb( a ) {
		var b = a.b.fn.wrapAll;
		a.b.fn.wrapAll = function() {
			T( a );
			this.each( function() {
				a.r.map( this, this.parentNode )
			} );
			return b.apply( this, arguments )
		}
	}

	function fb( a ) {
		var b = a.b.fn.domManip;
		a.b.fn.domManip = function() {
			var c = Array.prototype.slice.call( arguments ),
				d = c[ c.length - 1 ];
			if ( !a.b.isFunction( d ) || a.ka ) return b.apply( this, arguments );
			T( a );
			if ( 1.4 >= a.Ya && 1 < this.length )
				for ( var e = Array.prototype.slice.call( c[ 0 ] ), f = 0; f < e.length; f++ ) a.b.each( e[ f ], function() {
					a.e.set( this, this )
				} );
			c[ c.length - 1 ] = function( b ) {
				var c = 11 === b.nodeType ? jQuery.map( b.childNodes, function( a ) {
						return a
					} ) : [ b ],
					e = c.length;
				d.call( this, b );
				if ( e )
					for ( var b = U( this ) ? a.k : a.ba, f = 0; f < e; f++ ) {
						var n = c[ f ];
						a.e.has( n ) ? a.e.remove( n ) : a.S.has( n ) && a.S.remove( n );
						b.set( n, n )
					}
			};
			return b.apply( this, c )
		}
	}

	function db( a ) {
		var b = a.b.fn.remove;
		a.b.fn.remove = function( c ) {
			var d = !!c;
			this.each( function() {
				( !d || a.b.filter( c, [ this ] ).length ) && sb( a, U( this ) ? a.e : a.S, a.b( this ) )
			} );
			return b.apply( this, arguments )
		}
	}
	s.W = function() {
		var a = this,
			b = a.b.fn.empty;
		a.b.fn.empty = function() {
			if ( !a.ka ) {
				var c = [],
					d = [];
				this.each( function() {
					jQuery.merge( U( this ) ? c : d, this.childNodes )
				} );
				c.length && sb( a, a.e, a.b( c ) );
				d.length && sb( a, a.S, a.b( c ) )
			}
			return b.apply( this, arguments )
		}
	};

	function cb( a ) {
		var b = a.b.fn.html;
		a.b.fn.html = function() {
			return arguments.length && this.length ? ( T( a ), a.ka = k, this.each( function() {
				sb( a, U( this ) ? a.e : a.S, a.b( this.childNodes ) )
			} ), b.apply( this, arguments ).each( function() {
				for ( var b = this.childNodes, d = U( this ) ? a.k : a.ba, e, f = 0; f < b.length; f++ ) e = b[ f ], d.set( e, e )
			} ), a.ka = o, this ) : b.apply( this, arguments )
		}
	}

	function hb( a ) {
		var b = a.b.clone,
			c = a.b.fn.clone;
		a.b.fn.clone = function() {
			var a = c.apply( this, arguments );
			b || a.each( function() {
				ia( this )
			} );
			return a
		};
		b && ( a.b.clone = function( a ) {
			if ( a ) {
				var c = b.apply( a, arguments );
				ia( c );
				return c
			}
		} )
	}

	function gb( a ) {
		var b = a.b.fn.css;
		a.b.fn.css = function() {
			T( a );
			if ( 1 < arguments.length || 1 == arguments.length && "object" === typeof arguments[ 0 ] ) {
				var c = b.apply( this, arguments );
				this.each( function() {
					V( a, a.d, this )
				} );
				return c
			}
			return b.apply( this, arguments )
		}
	}

	function ib( a ) {
		var b = a.b.fn.animate;
		a.b.fn.animate = function( c, d, e, f ) {
			d = a.b.speed( d, e, f );
			e = 1 < this.size();
			T( a );
			if ( e || U( this[ 0 ] ) ) {
				if ( e = d.step ) var h = e,
					e = function() {
						h.apply( this, arguments );
						T( a );
						V( a, a.d, this )
					};
				else e = function() {
					T( a );
					V( a, a.d, this )
				};
				d.step = e
			} else {
				if ( e = d.complete ) var i = e,
					e = function() {
						i.apply( this, arguments );
						V( a, a.d, this )
					};
				else e = function() {
					V( a, a.d, this )
				};
				d.complete = e
			}
			return b.apply( this, [ c, d ] )
		}
	}

	function jb( a ) {
		a.b.each( [ "attr", "prop" ], function( b, c ) {
			if ( a.b.fn[ c ] ) {
				var d = a.b[ c ];
				a.b[ c ] = function( b, f, h ) {
					if ( "undefined" !== typeof h ) {
						var i;
						i = b;
						var l = f,
							g = m,
							n = k;
						i.getAttribute && ( g = i.getAttribute( l ), g || ( ( g = i.attributes[ l ] ) ? g = g.value : n = o ) );
						i = {
							has: n,
							value: g
						};
						n = "attr" === c;
						l = U( this ) ? a.d : a.M;
						T( a );
						if ( i.has || n ) return g = d.apply( this, arguments ), n = n ? f : pb[ f ] || f, "undefined" !== typeof g && i !== g && tb( l, b, n, g ), g
					}
					return d.apply( this, arguments )
				}
			}
		} )
	}

	function kb( a ) {
		a.b.each( [ "show", "hide" ], function( b, c ) {
			if ( a.b.fn[ c ] ) {
				var d = a.b.fn[ c ];
				a.b.fn[ c ] = function() {
					T( a );
					return !arguments.length ? d.apply( this, arguments ).each( function() {
						V( a, U( this ) ? a.d : a.M, this )
					} ) : d.apply( this, arguments )
				}
			}
		} )
	}

	function lb( a ) {
		a.b.each( [ "addClass", "removeClass" ], function( b, c ) {
			var d = a.b.fn[ c ];
			a.b.fn[ c ] = function( b ) {
				T( a );
				return a.b.isFunction( b ) ? b.apply( this, arguments ) : d.apply( this, arguments ).each( function() {
					tb( U( this ) ? a.d : a.M, this, "class", a.b.attr( this, "class" ) )
				} )
			}
		} )
	}

	function mb( a ) {
		a.b.each( [ "removeAttr", "removeProp" ], function( b, c ) {
			var d = a.b.fn[ c ];
			a.b.fn[ c ] = function( b ) {
				T( a );
				this.each( function() {
					tb( U( this ) ? a.d : a.M, this, pb[ b ] || b, m )
				} );
				d.apply( this, arguments );
				return this
			}
		} )
	}
	s.z = function() {
		this.k = new E;
		this.e = new E;
		this.d = new E;
		this.ba = new E;
		this.S = new E;
		this.M = new E
	};

	function sb( a, b, c ) {
		c.length && ( T( a ), c.each( function() {
			a.r.map( this, this.parentNode );
			a.k.has( this ) ? a.k.remove( this ) : a.ba.has( this ) && a.ba.remove( this );
			a.d.has( this ) ? a.d.remove( this ) : a.M.has( this ) && a.M.remove( this );
			b.set( this, this )
		} ) )
	}

	function V( a, b, c ) {
		c.style && 3 !== c.nodeType && 8 !== c.nodeType && ( a = a.b( c ).attr( "style" ) ) && tb( b, c, "style", a )
	}

	function tb( a, b, c, d ) {
		var e = a.get( b ) || {
			node: b,
			attributes: {}
		};
		e.attributes[ c ] = d;
		a.set( b, e )
	}

	function U( a ) {
		var b;
		if ( a ) a: {
			b = document.documentElement;do
				if ( b === a ) {
					b = k;
					break a
				}
			while ( a = a.parentNode );
			b = o
		}
		else b = o;
		return b
	};

	function ub( a, b ) {
		this.m = a;
		this.A = m;
		this.b = b || a.jQuery;
		this.J = "function" === typeof this.b && !!this.b.prototype.jquery
	}
	ub.prototype.P = ub.prototype.getObserver = function() {
		return this.A || ( this.A = new $a( this.m, this.b ) )
	};
	ub.prototype.Da = ub.prototype.isSpecified = p( "J" );

	function Ha( a, b ) {
		this.j = a;
		this.kb = b
	}
	Ha.prototype.getData = p( "kb" );
	Ha.prototype.w = r( 9 );

	function W() {
		this.g = []
	}
	s = W.prototype;
	s.add = function( a ) {
		return -1 === this.indexOf( a ) ? ( this.g.push( a ), k ) : o
	};
	s.removeAt = function( a ) {
		a <= this.g.length - 1 && this.g.splice( a, 1 )
	};
	s.length = function() {
		return this.g.length
	};
	s.indexOf = function( a ) {
		return Ka( this.g, a )
	};
	s.toArray = p( "g" );

	function ya( a ) {
		this.j = a
	}
	ya.prototype.w = r( 17 );

	function vb( a, b ) {
		var c = this;
		this.Db = 0;
		this.Ra = {};
		this.Fa = a;
		this.Ga = {};
		this.N = b;
		this.ta = new E;
		this.X = new W;
		this.Ha = new W;
		t( 12, function() {
			c.Ga = {}
		} );
		t( 17, function( a ) {
			a = a.j;
			1 === a.nodeType && wb( c, a )
		} )
	}

	function xb( a, b, c ) {
		var d;
		a.ta.has( b ) || ( d = ++a.Db, a.Ra[ d ] = {
			Jb: b,
			type: c,
			id: d
		}, a.ta.set( b, d ), c === X && a.X.add( b ) )
	}

	function wb( a, b ) {
		var c = a.ta.get( b );
		if ( c ) {
			var d = a.Ra[ c ].type;
			a.ta.remove( b );
			delete a.Ra[ c ];
			d === X && ( c = a.X.indexOf( b ), -1 !== c && a.X.removeAt( c ) )
		}
	}

	function za( a, b ) {
		for ( var c = a.X.toArray(), d = 0; d < c.length; d++ )
			if ( A( c[ d ], b ) ) return k;
		if ( c = a.Fa ) a: {
			var e;
			if ( 1 === b.nodeType )
				for ( var c = a.Ha.toArray(), f = 0; f < c.length; f++ ) {
					e = c[ f ];
					for ( var d = a.Ga[ e.u ] || ( a.Ga[ e.u ] = a.N.select( e.u ) ), h = 0; h < d.length; h++ ) {
						var i = d[ h ];
						if ( !e.multiple ) {
							var l = a,
								g = l.X.indexOf( e ); - 1 !== g && l.Ha.removeAt( g )
						}
						if ( A( i, b ) ) {
							xb( a, i, X );
							c = k;
							break a
						}
					}
				}
			c = o
		}
		return c
	};
	var Ca = 4;

	function yb( a ) {
		this.Ja = m;
		this.jb = a;
		this.ga = new E
	}
	yb.prototype.getData = function( a, b, c ) {
		var d = {};
		if ( !b && this.ga.has( a ) ) return this.ga.get( a );
		for ( b = 0; b < this.Ja.length && this.Ja[ b ].U( a, d, c ); b++ );
		this.ga.set( a, d );
		return d
	};
	yb.prototype.reset = function( a ) {
		var a = new zb( a ),
			b = this.jb.slice( 0 );
		this.ga = new E;
		b.splice( 1, 0, a );
		this.Ja = b
	};

	function zb( a ) {
		this.sb = a
	}
	zb.prototype.U = function( a, b ) {
		var c = m;
		a && ( c = this.sb.Ba( a ) );
		b.aa = c;
		return k
	};

	function Ab( a ) {
		this.Qa = a
	}
	Ab.prototype.U = function( a, b ) {
		return b.la = !za( this.Qa, a )
	};

	function Bb( a, b ) {
		this.h = -1;
		this.Q = "";
		this.za = 0;
		this.F = a;
		this.L = b
	}
	Bb.prototype.filter = function( a, b, c ) {
		if ( this.h !== b || this.Q !== c ) this.za = 0;
		this.h = b;
		this.Q = c;
		this.za++;
		return this.za <= this.F
	};
	Bb.prototype.ia = function() {
		return "change monitor notification: element count is greater then the threshold of " + this.F + " for " + this.Q + " operation in session " + this.h
	};
	Bb.prototype.R = function( a ) {
		return this.L( a )
	};

	function Cb( a, b ) {
		this.h = "";
		this.F = a;
		this.L = b
	}
	Cb.prototype.filter = function( a, b, c ) {
		this.h = b;
		this.Ea = c;
		return this.F < a.buffer.length ? o : k
	};
	Cb.prototype.ia = function() {
		return "change monitor notification: buffer size exceeded the threshold of " + this.F + " for " + this.Ea + " operation in session " + this.h
	};
	Cb.prototype.R = function( a ) {
		return this.L( a )
	};

	function Db( a, b ) {
		this.h = "";
		this.F = a;
		this.wa = 0;
		this.L = b
	}
	Db.prototype.filter = function( a, b, c ) {
		this.h = b;
		this.Ea = c;
		this.wa += a.buffer.length;
		return this.F < this.wa ? o : k
	};
	Db.prototype.ia = function() {
		return "change monitor notification: capacity sum exceeded the threshold of " + this.F + " for " + this.Ea + " operation in session " + this.h
	};
	Db.prototype.R = function( a ) {
		return this.L( a )
	};

	function Eb( a, b ) {
		this.lb = a;
		this.h = -1;
		this.Q = "";
		this.L = b
	}
	Eb.prototype.filter = function( a, b, c ) {
		this.h = b;
		this.Q = c;
		return this.lb( a, b, c )
	};
	Eb.prototype.ia = function() {
		return "change monitor notification: filter detected a deviation for " + this.Q + " operation in session " + this.h
	};
	Eb.prototype.R = function( a ) {
		return this.L( a )
	};

	function xa( a ) {
		this.Ua = [];
		this.$a = [];
		this.cb = [];
		this.ea = [];
		this.yb = a.OnFilterError;
		a && ( Fb( this, a.Before, this.Ua ), Gb( a, "MaxBufferSize", this.ea ), Gb( a, "MaxBufferSum", this.ea ), Gb( a, "MaxElementCount", this.$a ), Fb( this, a.OnProjection, this.cb ), Fb( this, a.After, this.ea ) )
	}

	function Gb( a, b, c ) {
		if ( b in a ) {
			var d = a[ b ];
			a: {
				a = d.Fb;d = d.R;
				switch ( b ) {
					case "MaxElementCount":
						b = new Bb( a, d );
						break a;
					case "MaxBufferSize":
						b = new Cb( a, d );
						break a;
					case "MaxBufferSum":
						b = new Db( a, d );
						break a
				}
				b = m
			}
			b && c.push( b )
		}
	}

	function Fb( a, b, c ) {
		if ( b && b.length )
			for ( var d = 0; d < b.length; d++ ) {
				var e = b[ d ];
				"function" === typeof e && c.push( new Eb( e, a.yb ) )
			}
	}

	function H( a, b, c ) {
		return G( b, c, "On execute", a.$a )
	}

	function G( a, b, c, d ) {
		for ( var e, f, h = 0; h < d.length; h++ )
			if ( f = d[ h ], e = f.filter( a, b, c ), !e ) return a = f.ia(), f.R( a ), o;
		return k
	};

	function Hb() {}
	Hb.prototype.w = r( 2 );
	var X = "exclude";

	function Jb( a, b ) {
		var c = this;
		this.Y = {};
		this.Cb = b;
		this.vb = a.Repeats;
		this.ub = a.Interval;
		t( 18, function( a ) {
			a: {
				var b, f = a.zb.attributes,
					h = a.qb,
					i = c.Y[ h ] || {},
					l, g;
				for ( g in f )
					if ( l = f[ g ] || "", b = i[ g ] || {}, b.attr )
						if ( new Date - b.fb > c.ub ) i[ g ] = {
							fb: new Date,
							eb: 1,
							attr: l
						};
						else {
							if ( ++b.eb >= c.vb ) {
								delete c.Y[ h ];
								xb( c.Cb, a.j, X );
								break a
							}
							b.attr = l
						}
				else i[ g ] = {
					fb: new Date,
					eb: 1,
					attr: l
				};c.Y[ h ] = i
			}
		} )
	}
	Jb.prototype.U = function( a, b, c ) {
		c === Ca && ( this.Y[ b.f ] || ( this.Y[ b.f ] = {} ) );
		return k
	};

	function Kb( a ) {
		this.j = a
	}
	Kb.prototype.w = r( 7 );

	function Lb() {
		this.Ia = {}
	}
	Lb.prototype.Xa = function( a ) {
		var b = "";
		switch ( a.nodeType ) {
			case 1:
				b = a.tagName;
				break;
			case 8:
				b = "comment";
				break;
			case z:
				b = "text";
				break;
			case 10:
				b = "docType"
		}
		a = b.toLowerCase();
		b = this.Ia[ a ] || ( this.Ia[ a ] = 0 );
		this.Ia[ a ] = ++b;
		return a + b
	};
	var Mb;

	function Nb() {
		if ( !Mb ) {
			var a = B();
			a.exports.changeMonitor = a.exports.changeMonitor || {};
			Mb = a.exports.changeMonitor
		}
		return Mb
	};

	function Ob( a ) {
		var b = this,
			c;
		this.q = a;
		c = function() {
			b.s( document.documentElement );
			aa( 2, c )
		};
		t( 2, c );
		t( 9, function( b ) {
			var c = b.j,
				b = b.getData();
			"object" === typeof b && ( b.i = a.getOrAdd( c ) )
		} );
		t( 17, function( a ) {
			b.q.remove( a.j )
		} )
	}
	Ob.prototype.s = function( a ) {
		this.q.getOrAdd( a );
		u( new Kb( a ) );
		if ( !( 1 === a.nodeType && "script" === a.tagName.toLowerCase() ) )
			for ( a = a.firstChild; a; a = a.nextSibling ) this.s( a )
	};
	Ob.prototype.U = function( a, b ) {
		b.I = o;
		b.f = "";
		a && ( b.I = !this.q.has( a ), b.f = this.q.getOrAdd( a ) );
		return k
	};

	function Pb() {
		function a( a ) {
			var d = b.ca.get( a ),
				a = b.oa.get( a );
			d && b.Z.add( d );
			a && b.Z.add( a )
		}
		var b = this;
		this.oa = new E;
		this.Z = new W;
		this.e = new W;
		this.ca = new E;
		this.La = new E;
		t( 7, function( a ) {
			a = a.j;
			a.nodeType === z && Qb( b, a );
			Rb( b, a );
			b.oa.set( a, ja( a ) )
		} );
		t( 6, function( c ) {
			c = c.j;
			b.Z.add( c );
			a( c )
		} );
		t( 8, function( c ) {
			c = c.j;
			a( c );
			b.e.add( c )
		} );
		t( 12, function() {
			for ( var a = b.Z.toArray(), d = 0; d < a.length; d++ ) {
				var e = b,
					f = a[ d ];
				e.oa.set( f, ja( f ) );
				e.ca.set( f, y( f ) )
			}
			a = b.e.toArray();
			for ( d = 0; d < a.length; d++ ) e = b, f = a[ d ], e.La.remove( f ), e.ca.remove( f ),
				e.oa.remove( f );
			b.Z = new W;
			b.e = new W
		} )
	}
	Pb.prototype.U = function( a, b ) {
		var c = this.ca.get( a ) || Rb( this, a );
		c && ( b.previousElementSibling = c );
		if ( a.nodeType === z && ( c = this.La.get( a ) || Qb( this, a ) ) ) b.aa = c;
		return k
	};

	function Rb( a, b ) {
		var c = y( b );
		a.ca.set( b, c );
		return c
	}

	function Qb( a, b ) {
		var c = b.parentNode;
		a.La.set( b, c );
		return c
	};

	function Sb() {
		this.z()
	}
	s = Sb.prototype;
	s.getOrAdd = function( a, b ) {
		this.q.set( a, k, b );
		return b ? b : this.q.key( a )
	};
	s.has = function( a ) {
		return this.q.has( a )
	};
	s.remove = function( a ) {
		this.q.remove( a )
	};
	s.z = function() {
		this.q = new E( new Lb )
	};
	s.reset = function() {
		this.z()
	};

	function Tb() {}

	function Ub( a, b ) {
		try {
			if ( !a.ja ) {
				a.T = [];
				a.ha = m;
				a.Fa = b.LiveExclude;
				a.mb = b.FlushMethod;
				a.ib = b.AutoExclude;
				var c = b.SelectorEngine;
				if ( c )
					if ( "string" === typeof c ) a: {
						switch ( c ) {
							case "jQuery":
								c = new R;
								break a;
							case "css":
								c = new S;
								break a
						}
						c = m
					}
					else {
						if ( !( "select" in c ) ) throw Error( "no matching selector engine has been found" );
					} else c = window.document.querySelector ? new S : window.Ib ? new R : new Za;
				a.N = c;
				var d = b.NodeMapper,
					e = new vb( !!b.LiveExclude, a.N ),
					f = [ new Ab( e ) ];
				a.ua = e;
				d = d || new Sb;
				f.push( new Ob( d ) );
				a.ib.Enable && f.push( new Jb( b.AutoExclude,
					e ) );
				f.push( new Pb );
				a.c = new yb( f );
				var h;
				var i = b.Providers;
				if ( i instanceof Array ) {
					c = o;
					for ( d = 0; d < i.length; d++ ) {
						var l;
						b: {
							var e = a,
								g = i[ d ];
							if ( "string" === typeof g ) {
								f = j;
								c: {
									switch ( g ) {
										case "observers":
											f = new O( window );
											break c;
										case "events":
											f = new Q( window );
											break c
									}
									f = m
								}
								if ( f ) {
									e.T.push( f );
									l = k;
									break b
								}
							} else if ( g && "getObserver" in g && "isSpecified" in g ) {
								e.T.push( g );
								l = k;
								break b
							}
							l = o
						}
						l && ( c = k )
					}
					h = c
				} else h = o;
				h || ( a.T.push( new O( window ) ), a.T.push( new Q( window ) ) );
				var n;
				h = o;
				for ( i = 0; i < a.T.length; i++ )
					if ( n = a.T[ i ], n.Da() ) {
						a.ha = n;
						a.observer = n.P().description();
						h = k;
						break
					}
				if ( !h ) throw Error( "no matching provider has been found" );
				a.ha.P().Sa( a.hb, a );
				a.Ab = new wa( a.ua, a.c, b, a.N );
				u( new Hb );
				return a.ja = k
			}
		} catch ( q ) {
			console && console.log( q )
		}
		return o
	}
	s = Tb.prototype;
	s.hb = function( a, b ) {
		this.c.reset( b );
		var c = this.Ab.ab( a );
		c && this.mb( "_(" + c + ")" )
	};
	s.observe = function() {
		Vb( this, [ document.documentElement ], o )
	};
	s.exclude = function( a, b ) {
		if ( a.nodeType || "string" === typeof a ) {
			var c = this.N.select( a, b );
			c.length && Vb( this, c, k )
		} else if ( this.Fa )
			if ( "identity" === this.N.description() ) console && console.log( "live exclusion can only be called with queryable selector engine" );
			else {
				var c = typeof a,
					d;
				"string" === c ? d = {
					u: a,
					multiple: o,
					Hb: o
				} : "object" === c && "selector" in a && ( d = {
					u: a.selector,
					multiple: !!a.multiple
				} );
				d && this.ua.Ha.add( d )
			}
	};

	function Vb( a, b, c ) {
		for ( var d = a.ha.P(), e = 0; e < b.length; e++ ) {
			var f = b[ e ],
				h = X;
			c || ( h = "include", d.observe( f ) );
			xb( a.ua, f, h )
		}
	}
	s.observer = "";
	s.disconnect = function( a, b ) {
		var c, d, e;
		if ( this.ja ) {
			e = this.ha.P();
			d = a ? this.N.select( a, b ) : [ document.documentElement ];
			for ( var f = 0; f < d.length; f++ ) c = d[ f ], c === document.documentElement && ( this.ja = o, ba() ), e.disconnect( c ), wb( this.ua, c )
		}
	};
	s.isObserving = function() {
		return !!this.ja
	};

	function Wb() {}

	function Y( a, b, c, d ) {
		return ( c = Z( a, c ) ) ? c : ( c = Z( a, b ) ) ? c : d || Wb
	}

	function Z( a, b ) {
		return "function" === typeof b ? b : "string" === typeof b ? Z( a, a[ b ] ) : m
	};

	function Xb( a, b ) {
		this.Fb = a;
		this.R = b
	};

	function Yb( a, b, c, d ) {
		d = Z( a, d );
		return "object" === typeof b ? new Xb( "number" === typeof b.Threshold ? b.Threshold : c, Z( a, b.OnError ) || d ) : "number" === typeof b ? new Xb( b, d ) : new Xb( c, d )
	};

	function Zb( a, b, c, d ) {
		var e = la( d ),
			d = e.Filters || {},
			f = e.AutoExclude || {},
			h = Y( a, "ClickTaleNote", d.OnFilterError ),
			i = Y( a, "", a.ClickTaleSendThresholdExceededEvent, function() {
				return a.ClickTaleEvent( "CT_ERROR_SIZE_EXCEEDED" )
			} ),
			l = B().exports.nodeIdMapper;
		d.OnFilterError = h;
		d.MaxElementCount = Yb( a, d.MaxElementCount, 3E3, h );
		d.MaxBufferSize = Yb( a, d.MaxBufferSize, 3E5, h );
		d.MaxBufferSum = Yb( a, d.MaxBufferSum, 5E6, function() {
			i();
			c.disconnect()
		} );
		f.Enable = !!f.Enable;
		f.Repeats = f.Repeats || 10;
		f.Interval = f.Interval || 200;
		e.JSON =
			e.JSON || a.JSON;
		e.OnBeforeReadyHandler = Y( a, "changeMonitorBeforeReady", e.OnBeforeReadyHandler, function() {
			return e
		} );
		e = e.OnBeforeReadyHandler( e ) || e;
		e.OnReadyHandler = Y( a, "changeMonitorReady", e.OnReadyHandler );
		e.FlushMethod = Y( a, "ClickTaleExec", e.FlushMethod );
		e.LiveExclude = !!e.LiveExclude;
		e.AutoExclude = f;
		e.Filters = d;
		l && ( e.NodeMapper = l.createNodeMapper() );
		e.Enable && Ub( c, e ) && ( b.observer = c.observer, e.OnReadyHandler( b ) )
	}

	function $b( a, b, c, d ) {
		var e = window.ClickTaleOnUploadPageContentFetched || ( window.ClickTaleOnUploadPageContentFetched = [] ),
			f = window.ClickTaleOnStop || ( window.ClickTaleOnStop = [] );
		e.push( function() {
			Zb( a, b, c, d )
		} );
		f.push( function() {
			c.disconnect()
		} )
	};
	( function( a ) {
		var b = ( Ja( a ) || {} ).ChangeMonitor || {};
		if ( b && b.Enable ) {
			var c = Nb(),
				d = new Tb;
			c.version = "1.3.3.1";
			c.observe = function() {
				d.observe.apply( d, arguments )
			};
			c.exclude = function() {
				d.exclude.apply( d, arguments )
			};
			c.disconnect = function() {
				d.disconnect.apply( d, arguments )
			};
			c.isObserving = function() {
				return d.isObserving.apply( d, arguments )
			};
			c.forceInitialize = function( e ) {
				Zb( a, c, d, e || b )
			};
			$b( a, c, d, b )
		}
	} )( window );
	var ac = B().scripts;
	ac && ac.dependencies.notifyScriptLoaded( "cm" );
}( window );