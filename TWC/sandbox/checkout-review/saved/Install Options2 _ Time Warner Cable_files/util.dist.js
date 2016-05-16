/* patch IE */
if ( !Array.prototype.indexOf ) {
	Array.prototype.indexOf = function( obj, start ) {
		for ( var i = ( start || 0 ), j = this.length; i < j; i++ ) {
			if ( this[ i ] === obj ) {
				return i;
			}
		}
		return -1;
	}
}
/**
 * Records a user interaction in the a ClientContext store (by default
 * EventDataManager) to be picked up by the used analytics solution for
 * further processing.
 * 
 * @param event
 *            {String} Tracking event name.
 * @param values
 *            {Object} Tracking values.
 * @param collect
 *            {Boolean} Flag which indicates if event and values should be
 *            collected (optional).
 * @param opt
 *            {Object} Tracking options (optional).
 *            
 * @param componentPath
 *            {String} Resource path of component issuing the call (optional).
 *            
 * @returns {Array} An array holding the event and values if <code>collect</code>
 *          is <code>true</code>, otherwise nothing is returned.
 * @since 5.4
 * 
 * @deprecated Use CQ_Analytics.record(options) instead.
 */
function record( event, values, collect, opt, componentPath ) {
	var options = {};
	options.event = event;
	options.values = values;
	options.collect = collect;
	options.options = opt;
	options.componentPath = componentPath;
	//backwards compatibility flag
	options.compatibility = true

	//add old record callbacks to after callbacks
	var f = function( callback ) {
		return function( options ) {
			callback.call( this, options.event, options.values );
			return false;
		};
	};

	for ( var i = record.callbacks.length - 1; i >= 0; i-- ) {
		CQ_Analytics.registerAfterCallback( f( record.callbacks[ i ] ), 150 - i );
		record.callbacks.pop();
	}

	return CQ_Analytics.record( options );
}

record.callbacks = [];
CQ_Analytics.Sitecatalyst = {

	events: [],

	trackVars: [],

	settings: [],

	stores: CQ_Analytics.StoreRegistry.getStores(),

	hasEvent: function( event ) {
		var store = CQ_Analytics.StoreRegistry.getStore( "eventdata" );
		if ( store ) {
			if ( !store.getProperty( "events" ) ) { // TWC Customization WEBCMS-14314
				store.setProperty( "events", "" );
			}
			var a = store.getProperty( "events" ).split( "\u2026" );
			var i = a.length;
			while ( i-- ) {
				if ( a[ i ] === event ) {
					return true;
				}
			}
		}
		return false;
	},

	setEvar: function( mapping ) {
		var evar = mapping.scVar;
		var value = mapping.cqVar;
		var isEvent = evar.match( /^(event\d+|prodView|purchase|scView|scOpen|scAdd|scRemove|scCheckout)$/ );
		//Generic product data uses prefixed eVars, merchandise data uses product object.
		var isProduct = evar.match( /^product\./ ) || value.match( /product\./ );

		// set up direct references to datastores for use in expressions
		for ( var store in this.stores ) {
			try {
				eval( "var " + store + "=this.stores[store].data" );
			} catch ( e ) {}
		}

		if ( isEvent ) {
			if ( this.hasEvent( value.replace( /.+\./, "" ) ) ) {
				if ( this.events.indexOf( evar ) < 0 ) {
					this.events.push( evar );
					this.updateLinkTrackEvents();
				}
			}
			return;
		} else {
			if ( value == '' ) return;
			try {
				if ( isProduct ) {
					if ( !evar.match( /^eVar\d+/ ) ) {
						s[ "products" ] = eval( "eventdata.products" );
						if ( this.trackVars.indexOf( "products" ) < 0 ) {
							this.trackVars.push( "products" );
						}
					}
				} else {
					// evaluate expression using direct references to stores
					var tmpEvar = CQ_Analytics.Variables.replaceVariables( eval( value ) );
					if ( typeof( tmpEvar ) !== "undefined" ) {
						//Analytics API 1.4 changed the evars IDs from eVar to evar, but the s object still needs to be populated with eVar
						var eVar = evar.replace( 'evar', 'eVar' );
						s[ eVar ] = tmpEvar;
						if ( this.trackVars.indexOf( eVar ) < 0 ) {
							this.trackVars.push( eVar );
						}
					}
				}
			} catch ( e ) {
				console.log( "Could not set " + evar + ": " + e );
			}
		}
	},

	updateLinkTrackEvents: function() {
		s.events = this.events.join( "," );
		s.linkTrackEvents = s.events;
	},

	updateLinkTrackVars: function() {
		s.linkTrackVars = this.trackVars.join( "," );
	},

	eraseTrackVars: function( saved ) {
		for ( var i = 0; i < this.trackVars.length; i++ ) {
			var evar = this.trackVars[ i ];
			if ( evar !== 'events' ) {
				if ( saved )
					saved[ evar ] = s[ evar ];
				delete s[ evar ];
			}
		}
		this.trackVars = [];
	},

	saveEvars: function() {
		var saved = {
			events: this.events,
			trackVars: this.trackVars,
			linkTrackVars: s.linkTrackVars,
			linkTrackEvents: s.linkTrackEvents
		};
		//clear events cache
		this.events = [];
		this.eraseTrackVars( saved );
		this.settings.push( saved );
	},

	restoreEvars: function() {
		var former = this.settings.pop();
		this.events = former.events;
		delete former.events;
		this.trackVars = former.trackVars;
		delete former.trackVars;
		this.updateLinkTrackEvents();
		this.eraseTrackVars();
		for ( var prop in former ) {
			s[ prop ] = former[ prop ];
		}
	},

	stopTrackingTemporarily: function() {
		// Disable tracking temporarily, so automatic link tracking is bypassed
		var old_s = {
			trackDownloadLinks: s.trackDownloadLinks,
			trackExternalLinks: s.trackExternalLinks
		};
		s.trackDownloadLinks = false;
		s.trackExternalLinks = false;
		setTimeout( function() {
			for ( var prop in old_s ) {
				s[ prop ] = old_s[ prop ];
			}
		}, 200 );
	},

	trackLink: function( options ) {
		var obj = options.options.obj;
		var el = ( obj && obj.href ) ? obj : true,
			name = ( obj && obj.name ) ? obj.name : "",
			defaultLinkType = options.options.defaultLinkType || "o",
			linkType = ( el && el.href ) ? s.lt( el.href ) : "";
		var variableOverrides = options.options.variableOverrides || null;
		var doneAction = options.options.doneAction || null;

		if ( linkType === "" ) {
			linkType = defaultLinkType;
		}

		// make sure the s.tl goes through even if there's no link name
		name = name || options.options.linkName || "default-link-name";

		var s_code = s.tl( el, linkType, name, variableOverrides, doneAction );
		if ( s_code ) {
			document.write( s_code );
		}
		this.stopTrackingTemporarily();
	},

	customTrack: function( obj ) {
		var events = obj.getAttribute( 'adhocevents' ) || "";
		var evars = obj.getAttribute( 'adhocevars' ) || "";
		if ( events || evars ) {
			// set up direct references to datastores for use in expressions
			for ( var store in this.stores )
				try {
					eval( "var " + store + "=this.stores[store].data" );
				} catch ( e ) {}
				// evaluate evars using direct references to stores
			try {
				eval( "evars = {" + evars + "}" );
			} catch ( e ) {}
			CQ_Analytics.Sitecatalyst.saveEvars();
			try {
				var linkTrackVars = [];
				if ( events.length > 0 ) {
					s.linkTrackEvents = s.events = events;
					linkTrackVars.push( 'events' );
				}
				for ( var key in evars ) {
					linkTrackVars.push( key );
					var value = "'" + escape( evars[ key ] ) + "'";
					this.setEvar( {
						'scVar': key,
						'cqVar': value
					} );
				}
				if ( linkTrackVars.length > 0 ) {
					s.linkTrackVars = linkTrackVars.join( ',' );
				}
				this.trackLink( {
					options: {
						obj: obj
					}
				} );
			} finally {
				CQ_Analytics.Sitecatalyst.restoreEvars();
			}
		}
	},

	/**
	 * Collects 'data-track' attributes from the documents elements and maps
	 * them to CQ_Analytics.record function calls. For backwards
	 * compatibility the 'record' attribute is processed as well. In case of
	 * the record attribute the old record method is called with the collect
	 * flag set to <code>true</code> collecting all record attributes on a
	 * page.
	 * 
	 * @param {Boolean}
	 *            forceCollect Forces collect option (optional). Default is
	 *            <code>true</code>.
	 */
	collect: function( forceCollect ) {
		var elements = document.getElementsByTagName( "*" );
		for ( var i = 0; i < elements.length; i++ ) {
			if ( elements[ i ].getAttribute( "data-tracking" ) ) {
				this.processDataAttribute( elements[ i ].getAttribute( "data-tracking" ), forceCollect );
			} else
			/* keep for backwards compatibility */
			if ( elements[ i ].getAttribute( "record" ) ) {
				this.processRecordAttribute( elements[ i ].getAttribute( "record" ), forceCollect );
			}
		}
	},

	/**
	 * Process DOM 'record' attribute and store event and data to the
	 * 'eventdata' store.
	 * 
	 * @param {String}
	 *            DOM attribute value.
	 */
	processRecordAttribute: function( attribute, forceCollect ) {
		try {
			if ( forceCollect === undefined ) {
				forceCollect = true;
			}
			var result = eval( "record(" + attribute + "," + forceCollect + ")" );
			if ( result ) {
				this.storeTrackingData( result );
			}
		} catch ( err ) {
			if ( window.console ) window.console.error( err.message );
		}
	},

	/**
	 * Process DOM 'data-track' attribute and store event and data to the
	 * 'eventdata' store.
	 * 
	 * @param {String}
	 *            DOM attribute value.
	 */
	processDataAttribute: function( attribute, forceCollect ) {
		try {
			var json = eval( "(" + attribute + ")" );
			if ( forceCollect ) {
				json[ "collect" ] = true;
			}
			var result = CQ_Analytics.record( json );
			if ( result ) {
				this.storeTrackingData( result );
			}
		} catch ( err ) {
			if ( window.console ) window.console.error( err.message );
		}
	},

	/**
	 * Collects the tracking data and stores it into the 'eventdata' store.
	 * 
	 * @param {Array}
	 *            Array holding the tracking data.
	 */
	storeTrackingData: function( trackingdata ) {
		var eventdata = CQ_Analytics.StoreRegistry.getStore( "eventdata" );
		if ( eventdata ) {
			if ( !eventdata.getProperty( "events" ) ) { // TWC Cusomtization WEBCMS-4314
				eventdata.setProperty( "events", "" );
			}
			var evnts = this.toObj( eventdata.getProperty( "events" ).split( "\u2026" ) );
			var event = trackingdata[ 0 ];
			evnts[ event ] = event;
			var data = trackingdata[ 1 ];
			var store = eventdata;
			CQ_Analytics.storeData( store, data );
			eventdata.setProperty( "events", this.toArr( evnts ).join( "\u2026" ) );
		} else {
			if ( window.console ) window.console.warn( "EventData Store is not defined" );
		}
	},

	toArr: function( obj ) {
		var arr = [];
		for ( property in obj ) {
			arr.push( obj[ property ] );
		}
		return arr;
	},

	toObj: function( arr ) {
		var o = {};
		for ( var i = 0; i < arr.length; i++ ) {
			var key = arr[ i ];
			o[ key ] = key;
		}
		return o;
	}

};