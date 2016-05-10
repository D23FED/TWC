// 9/16 previousPage logic for tabs in dataLayer; only set v57 from dataLayer if it already exists (tab flipping)
// 10/5 added test for s.events in removing events from modal page views
// 10/14 added v12 and removed from framework; context variable with p65;  cleaned up prop60 if not defined; added to prop65 array
// 10/30 added default bundleType to pick up products on CIC pages; updated DIL code snippet; added missing semicolons per linter; robustness in DIL snippet - needs to go with updated dependent_code.js
// 1/25 added s.server; prop62 logic
// 3/9 add clickTale into context variable; added event953 to time to complete; CAPE and  mappings in framework
// 1 4/15/16 add RSC logic WEBCMS-20349; WEBCMS-20578 save address; CAPE temp workaround WEBCMS-20554; fingerprint; added port numbers to isDev test; change new version number scheme; added marketing cloud envrionment (mce) check
// 2 4/27/16 correction to MCE check for AAM

/* Page Name Plugin Config */
s.siteID = ""; // leftmost value in pagename
s.defaultPage = "overview"; // filename to add when none exists
s.queryVarsList = ""; // query parameters to keep
s.pathExcludeDelim = ";"; // portion of the path to exclude
s.pathConcatDelim = " > "; // page name component separator
s.pathExcludeList = "twctsg,content,twc,en,es"; // elements to exclude from the path

/* DynamicObjectIDs config */
function s_getObjectID( o ) {
	var ID = o.href;
	return ID;
}
s.getObjectID = s_getObjectID;

/* added for CQ */
/* change to prod report suite if necessary */
var isDev = ( /webapps/.test( document.domain ) || /localhost/.test( document.domain ) || /twcable\.com/.test( document.domain ) ||
	/contentmanager/.test( document.domain ) || /preview/.test( document.domain ) || /:4502\//.test( document.URL ) || /:4503\//.test( document.URL ) );

if ( !isDev ) {
	s.sa( 'tsg2resglobal' );
	s_account = "tsg2resglobal";
}
/* end added for CQ */

/* Plugin Config */
s.usePlugins = true;
var noneIndex;
var oldPageName;
var bundleType = 'bundle'; // use as default for CIC pages
var pageNameTemp;
var isModal = false; // used to detect modals
var tabNameTemp;

function s_doPlugins( s ) {

	/*s_code date*/
	s.prop48 = "2|04/27/2016|AEM";

	// added 11/17/2014 to address timing issue on region not being set in checkout
	/* if we're in checkout use service region rather than twc profile region */
	if ( !s.eVar6 && window.Twc && Twc.Analytics && Twc.Analytics.serviceRegion ) {
		s.eVar6 = s.prop3 = Twc.Analytics.serviceRegion;
	}


	if ( !s.eVar6 ) {
		s.eVar6 = s.prop3 = ClientContext.get( '/twcprofile/region' );
		if ( !s.eVar6 ) {
			s.eVar6 = s.prop3 = "corporate"; // out of footprint
		}
	}

	// if not set in checkout, get from ClientContext
	if ( !s.eVar12 ) {
		s.eVar12 = ClientContext.get( '/twcprofile/zipcode' );
	}


	// added 4/29/15  AL
	s.prop15 = ( /residential\/order/.test( document.URL ) ) ? 'checkout' : 'omega';

	// find out which server instance we're on
	s.server = s.eVar180 = s.c_r( "SERVERID" );

	// fingerprint
	var idTemp = ClientContext.get( '/twcprofile/hasTwcid' ) ? ClientContext.get( '/twcprofile/hasTwcid' ) : 'not defined';
	var vTemp = ClientContext.get( '/twcprofile/hasTv' ) ? ClientContext.get( '/twcprofile/hasTv' ) : 'not defined';
	var iTemp = ClientContext.get( '/twcprofile/hasInternet' ) ? ClientContext.get( '/twcprofile/hasInternet' ) : 'not defined';
	var pTemp = ClientContext.get( '/twcprofile/hasPhone' ) ? ClientContext.get( '/twcprofile/hasPhone' ) : 'not defined';
	var eaiTemp = ClientContext.get( '/twcprofile/accountID' ) ? ClientContext.get( '/twcprofile/accountID' ) : 'not defined'; // need the proper cc name
	s.contextData.fp = 'hid:' + ( typeof idTemp === 'undefined' ? "not defined" : idTemp ) + '|hv:' + ( typeof vTemp === 'undefined' ? "not defined" : vTemp ) + '|hi:' + ( typeof iTemp === 'undefined' ?
		"not defined" : iTemp ) + '|hp:' + ( typeof pTemp === 'undefined' ? "not defined" : pTemp ) + '|eai:' + ( typeof eaiTemp === 'undefined' ? "not defined" : eaiTemp ) + '|';


	/*  clean up modalPath for proper pageName, related to x-ref components  6/11/2014  AL */
	// 12/2/14 added error page exclusion

	if ( s.pageName && ( s.pageName.indexOf( 'error:404:' ) < 0 ) ) {
		var regEx = new RegExp( [ "/content/modals/", "/content/admin/" ].join( "|" ), "gi" );
		if ( s.pageName.match( regEx ) ) {
			isModal = true;
		}
		s.pageName = s.pageName.replace( regEx, "" ).split( "/" ).join( " > " );
	}
	if ( !s.pageType && !s.pageName ) s.pageName = s.getPageName();
	if ( !s.pageType ) {
		s.pageName = s.repl( s.pageName, " > default.html", "" );
		s.pageName = s.repl( s.pageName, "default", "overview" );
		s.pageName = s.repl( s.pageName, ".html", "" );
	}

	// Gatewaypage troubleshooting
	if ( s.pageName && ( s.pageName.match( "ebf > services > common login > signin" ) || ( s.pageName.match( "bf > check availability > enter your address" ) ) ) ) {
		s.prop62 = s.c_r( "TWC-analytics-session" );
		if ( s.prop62 ) {
			s.prop62 = s.prop62.length === 16 ? 'valid session id' : s.prop62;
		} // we don't need the specific value, just that it was legit
		if ( !s.prop62 ) {
			s.prop62 = "cookie does not exist";
		}
	}


	// dataLayer items
	if ( typeof window.digitalData !== 'undefined' ) {
		if ( !pageNameTemp ) {
			pageNameTemp = s.pageName;
		}
		if ( digitalData.page && digitalData.page.attributes ) {
			s.prop9 = digitalData.page.attributes.faqTitle;
			s.contextData.FAQTitle = digitalData.page.attributes.faqTitle;
		}
		if ( digitalData.page && digitalData.page.attributes && digitalData.page.attributes.analyticsTabName && !isModal ) {
			tabNameTemp = digitalData.page.attributes.analyticsTabName == "bundle" ? "" : ( digitalData.page.attributes.analyticsTabName == "singlePlay" ? "alacarte" : "" );
			s.eVar59 = ''; // reset this so that previous page will work
			s.pageName = tabNameTemp ? pageNameTemp + " - " + tabNameTemp : pageNameTemp;
			bundleType = digitalData.page.attributes.analyticsTabName;
		}
		// pageName - this will override what was set from the tab name immediately above
		if ( digitalData.page && digitalData.page.attributes && digitalData.page.attributes.analyticsPageName && !isModal ) {
			s.pageName = digitalData.page.attributes.analyticsPageName;
		}
		// checkout type
		if ( digitalData.page && digitalData.page.attributes && digitalData.page.attributes.checkoutType ) {
			s.eVar19 = digitalData.page.attributes.checkoutType;
		}
		// breadcrumb
		if ( digitalData.page && digitalData.page.attributes && digitalData.page.attributes.breadCrumb && typeof digitalData.page.attributes.breadCrumb !== "object" ) {
			s.prop60 = digitalData.page.attributes.breadCrumb;
		}
		// houseStatus, use below in eVar28
		if ( digitalData.user && digitalData.user[ 0 ] && digitalData.user[ 0 ].segment && digitalData.user[ 0 ].segment.houseServiceStatus ) {
			var houseStatusTemp = digitalData.user[ 0 ].segment.houseServiceStatus;
		}
		// serviceRegion and zip
		if ( digitalData.user && digitalData.user[ 0 ] && digitalData.user[ 0 ].profile[ 0 ] && digitalData.user[ 0 ].profile[ 0 ].address && digitalData.user[ 0 ].profile[ 0 ].address.serviceRegion ) {
			s.prop3 = s.eVar6 = digitalData.user[ 0 ].profile[ 0 ].address.serviceRegion;
		}
		if ( digitalData.user && digitalData.user[ 0 ] && digitalData.user[ 0 ].profile[ 0 ] && digitalData.user[ 0 ].profile[ 0 ].address && digitalData.user[ 0 ].profile[ 0 ].address.serviceZip ) {
			s.eVar12 = digitalData.user[ 0 ].profile[ 0 ].address.serviceZip;
		}

		// loop through products array - page load only
		if ( !s.linkType && !isModal ) {
			s.products = getProductsFromDataLayer( bundleType, "products" );
		}
		// loop through events array
		if ( checkEventsInDataLayer( "pageLoad", "impression" ) && ( !s.linkType ) && !isModal ) {
			s.events = s.apl( s.events, "event84", ",", 2 );
		}
		if ( checkEventsInDataLayer( "pageLoad", "buyFlowStart" ) && ( !s.linkType ) && !isModal ) {
			s.events = s.apl( s.events, "event25", ",", 2 );
		}
		// capture clicking between tabs
		if ( !s.linkType && digitalData.page && digitalData.page.attributes ) {
			if ( digitalData.page.attributes.analyticsLinkName ) {
				if ( s.eVar57 ) {
					s.eVar57 = digitalData.page.attributes.analyticsLinkName;
				} // only set this if we are flipping tabs and no page load
			}
		}

	} // end dataLayer
	/* remove page load values that shouldn't persist into a modal page view */
	if ( isModal ) {
		// clear out products
		s.products = "";
		// remove impression event from data layer
		if ( s.events && s.inList( "event84", s.events ) ) {
			s.events = s.repl( s.events, ",event84", "" );
			s.events = s.repl( s.events, "event84,", "" );
			s.events = s.repl( s.events, "event84", "" );
			s.events = s.repl( s.events, ",,", "," );
		}
		// reset this in case we do more tab switching
		isModal = false;
	}


	/*  handling of page view call from framework on checkout pages  */
	// 8/28 changes this logic a bit
	if ( ( s.pageName.indexOf( "residential > order" ) > -1 || s.pageName.indexOf( ':' ) > -1 ) && ( document.URL.indexOf(
			"residential/order" ) > -1 ) ) {
		if ( ( location.search.indexOf( "new_services" ) != -1 || location.search.indexOf( "show_packages" ) != -1 || location.search.indexOf( "compare_package" ) != -1 ) && document.URL.indexOf(
				"residential/order/cic" ) != -1 ) {
			s.abort = false;
		} else {
			s.abort = true;
		}
		if ( typeof oldPageName !== 'undefined' ) {
			s.pageName = oldPageName;
		}
	} else { // closing brace at end of do_plugins
		oldPageName = s.pageName;

		/* MOD cleanup */
		if ( /\/rent./.test( document.URL ) ) {
			if ( s.pageName.indexOf( "rent." ) >= 0 ) {
				var modPath = s.pageName.split( "." );
				var modId = modPath[ 1 ];
				s.pageName = "rent > " + modId;
			}
			if ( typeof s.events !== "undefined" && s.inList( "event66", s.events ) ) {
				var modPath2 = s.pageName.split( " > " );
				var modId2 = modPath2[ 1 ];
				s.eVar7 = s.eVar7 + "|" + modId2;
			}
		}
		/* end MOD cleanup */

		/* Populate the Additional variables  */
		if ( s.pageName && s.pageName !== '' ) {
			var str = s.pageName.split( " > " );
			s.channel = str[ 0 ];
			if ( str.length == 1 ) {
				s.prop1 = s.prop2 = str[ 0 ];
			}
			if ( str.length == 2 ) {
				s.prop1 = s.prop2 = str[ 0 ] + " > " + str[ 1 ];
			}
			if ( str.length > 2 ) {
				s.prop1 = str[ 0 ] + " > " + str[ 1 ];
				s.prop2 = str[ 0 ] + " > " + str[ 1 ] + " > " + str[ 2 ];
			}
			if ( s.pageName ) {
				s.hier1 = s.repl( s.pageName, " > ", "|" );
			}
			if ( s.prop3 ) {
				s.prop5 = s.prop3 + ": " + s.pageName;
			}
			if ( s.prop9 ) {
				s.prop16 = s.prop1 + ": " + s.prop9;
				s.eVar49 = s.prop16;
			}
		}


		//  AAM banner impressions - CQ specific   11/17/14  AL
		// added tv and internet 1/20/15  AL
		// cleaned up code and added nav-megamenu  4/29/15  AL
		if ( CQ_Analytics.loadedTeasersStack ) {
			var lts = CQ_Analytics.loadedTeasersStack;
			var stringsToMatch = [ 'home/hero', '/home/offer-strip', 'nav-megamenu-2-1/top-nav', 'nav-megamenu-2-1/megamenu', 'global/header-icons' ];
			var stringsMatched = [];

			for ( var j = 0; j <= stringsToMatch.length - 1; j++ ) {
				for ( var i = lts.length - 1; i >= 0; i-- ) {
					var st = lts[ i ];
					if ( st.indexOf( stringsToMatch[ j ] ) > -1 ) {
						stringsMatched.push( st.substring( st.indexOf( stringsToMatch[ j ] ) ) );
						i = lts.length - 1;
						break;
					}
				}
			}
			s.contextData.TeaserImpression = s.prop65 = stringsMatched.join( '|' );
		} // end if loadedTeasersStack


		//  eVar28  logic - CQ specific  11/17/14  AL
		//  moved this out of the framework
		//  resi MAXX flag  11/17/14  AL
		//  checkout MAXX flag  12/2/14  AL
		//  houseStatus added  1/21/2015  AL
		s.eVar28 =
			'|' + ( ClientContext.get( '/twcprofile/onNetwork' ) == 'true' ? 'net:on network' : 'net:off network' ) +
			'|' + ( ClientContext.get( '/twcprofile/customerStatus' ) == 'new' ? 'cus:not customer' : 'cus:customer' ) +
			'|' + ( ClientContext.get( '/twcprofile/maxxEligible' ) == 'true' ? 'resi-maxx:yes' : 'resi-maxx:no' ) +
			'|' + ( ( window.Twc && Twc.Settings ) ? ( Twc.Settings.isMaxxEligible == 'true' ? 'ckt-maxx:yes' : 'ckt-maxx:no' ) : '' ) +
			'|' + ( ( window.Twc && Twc.Analytics ) ? ( ( Twc.Analytics.houseStatus ) ? 'serviceabillity=' + Twc.Analytics.houseStatus : ( houseStatusTemp ? 'serviceabillity=' + houseStatusTemp : '' ) ) : '' ) +
			'|';



		/*Add eVar6 to all hits*/
		noneIndex = s.linkTrackVars.indexOf( "None" );
		if ( noneIndex >= 0 ) s.linkTrackVars = "prop50,eVar75,eVar6,list1";
		if ( noneIndex < 0 ) {
			s.linkTrackVars = s.apl( s.linkTrackVars, "prop50,eVar75,list1", ",", 2 );
			s.linkTrackVars = s.apl( s.linkTrackVars, "eVar6", ",", 2 );
		}
		s.prop50 = s_account;

		/* Call to Days Since LastVisit Plugin */
		if ( s.c_r( 's_lastvisit' ) ) {
			if ( !s.c_r( 's_lastvisit_s' ) ) {
				var e = new Date();
				e.setTime( e.getTime() + 1800000 );
				s.c_w( 's_lastvisit_s', 'migrate', e );
			}
		}
		s.eVar20 = s.getDaysSinceLastVisit( 's_lastvisit' );

		/* Call to get time to complete Plugin */
		if ( s.events ) {
			if ( s.events.indexOf( 'event23' ) > -1 ) s.prop13 = 'start';
			if ( s.events.indexOf( 'purchase' ) > -1 || s.events.indexOf( 'event953' ) > -1 ) s.prop13 = 'stop';
			s.prop13 = s.getTimeToComplete( s.prop13, 'ttc', 0 );
		}

		/* Getting the Off-site campaign code */
		if ( !s.campaign ) s.campaign = s.getQueryParam( 'cid' );
		if ( !s.campaign ) s.campaign = s.getHashParam( 'cid', '', '', 1 );
		/*Get Light Server call cookie*/
		if ( !s.campaign ) {
			s.campaign = s.getLightCookie( "s_mtd", "v13" );
			//account for URL encoding.
			if ( s.campaign && s.campaign.indexOf( '%3A' ) > -1 ) s.campaign = s.repl( s.campaign, "%3A", ":" );
		}
		/*get it from the referrer*/
		if ( !s.campaign ) {
			if ( document.URL.indexOf( "ids.rr.com" ) > 0 ) {
				s.campaign = s.getQueryParam( 'cid', '', document.referrer );
			}
		}
		/*Get ValOnce on Campaign*/
		s.campaign = s.getValOnce( s.campaign, 'cid_cookie', 0 );

		// initialize to empty string
		s.contextData.checkoutFeatures = '';
		/* Getting the internal campaign code */
		if ( !s.eVar52 ) s.eVar52 = s.getQueryParam( 'qso' ).toLowerCase();
		if ( !s.eVar52 ) s.eVar52 = s.getHashParam( 'qso', '', '', 1 ).toLowerCase();
		if ( ( s.eVar52 ) && ( s.eVar52 == "qsosuccess" ) ) {
			s.eVar52 = "";
		}

		if ( s.getQueryParam( 'addOffers' ) ) {
			s.eVar52 = ( s.eVar52 && !s.eVar52.match( 'add offers checkout flow' ) ) ? s.eVar52 + ' : add offers checkout flow' : 'add offers checkout flow';
			s.contextData.checkoutFeatures += 's1:cic|';
		}

		// CAPE WEBCMS-19909 and WEBCMS-20554
		if ( s.getQueryParam( 'cape' ) == '1' || s.getQueryParam( 'cape' ) == 'learn' ) {
			s.eVar52 = 'cape';
			s.contextData.checkoutFeatures += 's2:cape|';
		}
		if ( s.getQueryParam( 'cape' ) == 'buyflow' ) {
			s.eVar52 = 'capebuyflow';
			s.contextData.checkoutFeatures += 's2:capebuyflow|';
		}


		// cape error
		if ( s.linkType == 'o' && s.eVar54 == 'capeerror' && s.inList( "event82", s.events ) ) {
			s.events = s.apl( s.events, 'event109', ',', 2 );
			s.linkTrackEvents = s.linkTrackEvents + ',event109';
		}

		s.eVar52 = s.getValOnce( s.eVar52, 'qso_cookie', 0 );

		// more CAPE WEBCMS-20554
		if ( s.events && s.linkType == 'o' && ( s.inList( "event107", s.events ) || s.inList( "event108", s.events ) ) ) {
			s.linkTrackVars = s.apl( s.linkTrackVars, "eVar19", ",", 2 );
		}

		// WEBCMS-20349 RSC
		if ( s.events && !isModal && ( s.inList( "event210", s.events ) || s.inList( "event120", s.events ) || ( s.inList( "event24", s.events ) ) && !s.pageName.match(
				"bf > check availability > enter your address" ) ) ) {
			s.eVar19 = 'bf';
			s.contextData.checkoutFeatures += 'rsc:' + s.pageName + '|';
			if ( s.linkType ) {
				s.linkTrackVars = s.apl( s.linkTrackVars, "eVar19,contextData.checkoutFeatures", ",", 2 );
			}
		}

		// WEBCMS-20578 save address
		s.contextData.checkoutFeatures += s.c_r( 'save-address' ) ? ( 's3:saveadrs|' ) : ( 's3:nosaveadrs|' );


		if ( !s.eVar17 ) s.eVar17 = s.getQueryParam( 'iid' );
		if ( !s.eVar17 ) s.eVar17 = s.getHashParam( 'iid', '', '', 1 );

		if ( !s.eVar17 ) {
			if ( document.URL.indexOf( "ids.rr.com" ) > 0 ) {
				s.eVar17 = s.getQueryParam( 'iid', '', document.referrer );
			}
		}
		s.eVar17 = s.getValOnce( s.eVar17, 'iid_cookie', 0 );

		if ( s.getQueryParam( 'iidpos' ) ) {
			s.eVar53 = s.getValOnce( s.getQueryParam( 'iidpos' ), 'iidpos_cookie', 0 );
		}

		/* s.crossVisitParticipation Example: 1.2 */
		if ( s.campaign ) {
			s.eVar21 = s.crossVisitParticipation( s.campaign, 's_cpm', '90', '5', ' > ', '' );
		}

		/* Call to New vs. Repeat Visitors Plugin */
		s.eVar22 = s.getNewRepeat();

		/* Track the pathing by Returning Visitors */
		if ( s.eVar22 == 'Repeat' ) {
			s.prop20 = s.getAndPersistValue( s.eVar22, 'repeat_path', 0 ) + ": " + s.pageName;
		}

		/* Track the pathing by New Visitors */
		if ( s.eVar22 == 'New' ) {
			s.prop21 = s.getAndPersistValue( s.eVar22, 'new_path', 0 ) + ": " + s.pageName;
		}

		/* Render the page view event*/
		if ( s.pageName ) {
			s.events = s.apl( s.events, 'event49', ',', 2 );
			s.eVar47 = s.pageName;
			/*Omega pathing */
			if ( !s.prop54 ) s.prop54 = "D=pageName";
		}

		/* clear out event92 from appearing without v63/p63 .  8/3/2015  AL */
		if ( s.inList( "event92", s.events ) && !s.linkType ) {
			s.events = s.repl( s.events, ",event92", "" );
			s.events = s.repl( s.events, "event92,", "" );
			s.events = s.repl( s.events, ",,", "," );
		}

		/*add sub pageviews in Omega Pathing*/
		if ( s.inList( "event92", s.events ) && typeof s.eVar63 != "undefined" && s.linkType ) {
			s.prop54 = "D=v63";
		}



		/* Populate prop11 based on either prop7 or prop8 */
		if ( typeof( s.prop7 ) != "undefined" ) {
			s.prop11 = s.prop7;
		} else if ( typeof( s.prop8 ) != "undefined" ) {
			s.prop11 = s.prop8;
		}

		/*Generating Unique Searches
		Code must be after appending event49 for a page view event*/
		if ( s.prop18 ) {
			s.eVar18 = s.prop18;
			s.eVar18 = s.getValOnce( s.eVar18, 'query_cookie', 0 );
			if ( s.eVar18 ) s.events = s.apl( s.events, "event50", ",", 2 );
			if ( s.inList( "event50", s.events ) && !s.eVar18 ) {
				s.events = s.repl( s.events, ",event50", "" );
				s.events = s.repl( s.events, "event50", "" );
				s.events = s.repl( s.events, ",,", "," );
			}
		}


		if ( s.inList( "event7", s.events ) || s.inList( "event9", s.events ) || s.inList( "event1", s.events ) ) s.eVar40 = s.getQueryParam(
			"Target" );

		s.eVar40 = s.getAndPersistValue( s.eVar40, 'target_val', 0 );

		/* Plugin Example: linkHandler v0.5*/
		var url = s.linkHandler( '?eid=|&eid=|?EID=|&EID=', 'e' );
		if ( url ) {
			s.linkName = url.toString().toLowerCase();
			if ( s.linkName.indexOf( "javascript:void(window.open('" ) >= 0 ) {
				s.linkName = s.repl( s.linkName, "javascript:void(window.open('", "" );
				s.linkName = s.repl( s.linkName, "','','').focus())", "" );
			}
			s.linkName = "eid:" + s.linkName;
			noneIndex = s.linkTrackVars.indexOf( "None" );
			if ( noneIndex >= 0 ) s.linkTrackVars = "prop43,prop54";
			if ( noneIndex < 0 ) s.linkTrackVars = s.apl( s.linkTrackVars, "prop43,prop54", ",", 2 );
			s.prop43 = s.pageName;
			s.prop54 = "exit:" + url.toString().toLowerCase();
			if ( s.prop19 ) {
				s.linkTrackVars = s.apl( s.linkTrackVars, "prop19", ",", 2 );

				s.prop54 = s.prop19;
			}
		}

		/* exitLinkHandler v0.5 */
		var url2 = s.exitLinkHandler();
		if ( url2 ) {
			noneIndex = s.linkTrackVars.indexOf( "None" );
			if ( noneIndex >= 0 ) s.linkTrackVars = "prop43,prop54";
			if ( noneIndex < 0 ) s.linkTrackVars = s.apl( s.linkTrackVars, "prop43,prop54", ",", 2 );
			s.prop43 = s.pageName;
			s.prop54 = "exit:" + url2.toString().toLowerCase();
			if ( s.prop19 ) {
				s.linkTrackVars = s.apl( s.linkTrackVars, "prop19", ",", 2 );

				s.prop54 = s.prop19;
			}
		}

		/* Used to map divisions to evar*/
		s.eVar6 = s.prop3;
		/*used to map language to evar */
		s.eVar29 = s.prop29;

		/*previous page*/
		if ( !s.eVar59 ) s.eVar59 = s.getPreviousValue( s.pageName, 'gpv_ev59', '' );


		/*Custom Link Tracking*/
		if ( !s.eVar57 ) {
			s.eVar57 = s.readCookieLink();
			if ( s.eVar57 ) s.events = s.apl( s.events, "event86", ",", 2 );
		}

		/*Custom pop/click to chat*/
		if ( s.inList( 'event97', s.events ) || s.inList( 'event81', s.events ) ) {
			if ( s.eVar67 && s.eVar68 ) s.c_w( 'popPage', s.eVar68 + '|' + s.eVar67, 0 );
		}
		if ( s.inList( 'event77', s.events ) ) {
			var popPage = s.c_r( 'popPage' ).split( '|' );
			if ( popPage.length == 2 ) {
				s.linkTrackVars = s.apl( s.linkTrackVars, "eVar67,eVar68", ",", 2 );
				s.eVar68 = popPage[ 0 ];
				s.eVar67 = popPage[ 1 ];
			}
			s.c_w( 'popPage', '' );
		}

		/*Get and persist 75*/
		s.eVar75 = s.getAndPersistValue( s.eVar75, 's_v75', 365 );

		/*Live Person Measurement*/
		if ( s.inList( "event8", s.events ) ) {
			var e = new Date();
			e.setTime( e.getTime() + 86400000 );
			s.c_w( 'sc_liveperson', 'true', e );
		}

		if ( s.inList( "purchase", s.events ) ) {
			if ( s.c_r( 'sc_liveperson' ) ) {
				s.prop73 = s.purchaseID;
				s.c_w( 'sc_liveperson', '', -1 );
			}
		}

		/*socialPlatforms v1.0 - used for SocialAnalytics*/
		s.socialPlatforms();

		/**get Responsive Web Design Values**/
		s.eVar55 = s.getRwd( true, 600, 1100 );

		/* set event79 if EBF checkout flow was autologin */
		if ( !( /residential\/order/.test( document.referrer ) ) && s.inList( "event25", s.events ) ) {
			s.events = s.apl( s.events, 'event79', ',', 2 );
		}

		//ClickTale Integration Start
		// want this in v77 when switch to AppMeasurement
		s.contextData.ClickTaleId = ( function() {
			if ( document.cookie.indexOf( "WRUID" ) > -1 && document.cookie.indexOf( "WRIgnore=true" ) == -1 ) {
				var ca = document.cookie.split( ';' );
				var PID = 0,
					UID = 0;
				for ( var i = 0; i < ca.length; i++ ) {
					var c = ca[ i ];
					while ( c.charAt( 0 ) == ' ' ) c = c.substring( 1, c.length );
					if ( c.indexOf( "CT_Data" ) > -1 ) PID = c.substring( c.indexOf( "apv_" ) ).split( "_" )[ 1 ];
					if (
						( ( document.cookie.match( /WRUID/g ) || [] ).length == 1 && c.indexOf( "WRUID" ) > -1 ) ||
						( c.indexOf( "WRUID" ) > -1 && ( document.cookie.match( /WRUID/g ) || [] ).length > 1 && c.indexOf( "WRUID=" ) == -1 )
					)
						UID = c.split( "=" )[ 1 ];
				}
				return ( UID == 0 || PID == 0 ) ? null : ( UID + "." + PID );
			} else return null;
		} )();
		//ClickTale Integration End

		// marketing cloud environment check
		var aCheck = "unknown"; // add this in when available
		var dCheck = typeof _satellite === 'undefined' ? "no" : "yes";
		var gtmCheck = typeof google_tag_manager === 'object' ? "yes" : "no";
		var aamCheck = "unknown"; // leave it out for now due to inability to read wonky cookie.


		s.contextData.mceCheck = 's:yes|ab:' + aCheck + '|dm:' + dCheck + '|gm:' + gtmCheck + '|dmp:' + aamCheck + '|'; // if this executes, then s is yes. Alternate case will be handled on page

		//Keep eVar75 Casing
		tempEvar75 = s.eVar75;

		/*Lowercasing Variables*/
		for ( var n in s ) {
			if ( n.indexOf( 'prop' ) > -1 ) {
				if ( !( n.indexOf( 'prop51' ) > -1 ) && !( n.indexOf( 'prop52' ) > -1 ) ) {
					if ( s[ n ] ) {
						s[ n ] = s[ n ].toString();
						if ( s[ n ].indexOf( 'D=' ) == -1 ) s[ n ] = s[ n ].toLowerCase();
					}
				}
			}
		}

		for ( n in s ) {
			if ( n.indexOf( 'eVar' ) > -1 ) {
				if ( s[ n ] ) {
					s[ n ] = s[ n ].toString();
					if ( s[ n ].indexOf( 'D=' ) == -1 ) s[ n ] = s[ n ].toLowerCase();
				}
			}
		}

		/* make all variables lowercase*/
		if ( s.pageName ) s.pageName = s.pageName.toLowerCase();
		if ( s.channel ) s.channel = s.channel.toLowerCase();
		if ( s.hier1 ) s.hier1 = s.hier1.toLowerCase();
		if ( s.state ) s.state = s.state.toLowerCase();
		if ( s.products ) s.products = s.products.toLowerCase();
		if ( s.purchaseID ) s.transactionID = s.purchaseID;

		//Keep eVar75 Casing
		s.eVar75 = tempEvar75;

		/*Send TnT data to SiteCat */
		s.tnt = s.trackTNT();


		/*Send AAM Segments to SiteCat */
		if ( typeof demdex_seg != "undefined" && demdex_seg !== "" ) {
			for ( var i = 0; i < demdex_seg.length; i++ ) {
				if ( demdex_seg[ i ].cn == "aam_sc" ) {
					if ( demdex_seg[ i ].cv.split( "," ) ) {
						var _i = demdex_seg[ i ].cv.replace( 'aam=', '' );
						if ( _i ) s.list1 = _i;
					}
				}
			}
		}

		if ( s.eVar75 ) {
			var twcObj = {
				partner: 'twc',
				uuidCookie: {
					name: 'aam_uuid',
					days: 30
				},
				declaredId: {
					dpid: "1037",
					dpuuid: s.eVar75
				},
				visitorService: {
					namespace: '5BB1123F5245AE4E0A490D45@AdobeOrg'
				},
			};
		} else {
			var twcObj = {
				partner: 'twc',
				uuidCookie: {
					name: 'aam_uuid',
					days: 30
				},
				visitorService: {
					namespace: '5BB1123F5245AE4E0A490D45@AdobeOrg'
				},
			};
		}

		var twcDil = DIL.create( twcObj );

		var _scDilObj = s_gi( s_account );
		DIL.modules.siteCatalyst.init( _scDilObj, twcDil, {
			names: [ 'pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID',
				'zip', 'state'
			],
			iteratedNames: [ {
				name: 'eVar',
				maxIndex: 75
			}, {
				name: 'prop',
				maxIndex: 75
			}, {
				name: 'pev',
				maxIndex: 3
			}, {
				name: 'hier',
				maxIndex: 4
			} ]
		} );

		var b = "";
		try {
			b = twcDil.helpers.getCookie( "s_vi" );
		} catch ( err ) {
			console.log( "Undefined DIL.create.getCookie()" );
		}
		if ( b ) {
			b = b.split( "|" )[ 1 ].split( "[" )[ 0 ];
			twcDil.api.aamIdSync( {
				dpid: '1036',
				dpuuid: b,
				minutesToLive: 20160
			} );
		}

	} // end abort flag else


}
s.doPlugins = s_doPlugins;

function getProductsFromDataLayer( bundleType, returnType ) {
	var result = "";
	if ( window.digitalData && digitalData.product ) {
		for ( var prop in digitalData.product ) {
			if ( digitalData.product[ prop ].productInfo && digitalData.product[ prop ].productInfo.productName === undefined ) {
				continue;
			}
			if ( digitalData.product[ prop ].productInfo && digitalData.product[ prop ].attributes.bundleType === undefined ) {
				continue;
			}
			if ( prop != "prune" && digitalData.product[ prop ].attributes && digitalData.product[ prop ].attributes.bundleType && digitalData.product[ prop ].attributes.enrichedDescription && digitalData.product[
					prop ].attributes.bundleType == bundleType && returnType ==
				"products" ) {
				result += ';' + digitalData.product[ prop ].productInfo.productID + '||' + digitalData.product[ prop ].productInfo.productName + '||' + digitalData.product[ prop ].attributes.enrichedDescription + ',';
			}
			if ( prop != "prune" && digitalData.product[ prop ].attributes && digitalData.product[ prop ].attributes.bundleType && digitalData.product[ prop ].attributes.enrichedDescription && digitalData.product[
					prop ].attributes.bundleType == bundleType && returnType ==
				"v57" ) {
				result += digitalData.product[ prop ].productInfo.productID + '||' + digitalData.product[ prop ].productInfo.productName + '||' + digitalData.product[ prop ].attributes.enrichedDescription + ',';
			}
		}
		return result.replace( /,\s*$/, '' ).replace( /;\s*$/, '' );
	}
}

function checkEventsInDataLayer( eventType, eventAction ) { // eventType will be "pageLoad", eventAction will be "impression"
	var result = "";
	if ( window.digitalData && digitalData.event ) {
		for ( var prop in digitalData.event ) {
			if ( digitalData.event[ prop ].eventInfo === undefined ) continue;
			if ( prop != "prune" && digitalData.event[ prop ].eventInfo.eventType === undefined || digitalData.event[ prop ].eventInfo.eventAction === undefined ) continue;
			if ( prop != "prune" && digitalData.event[ prop ].eventInfo.eventType == eventType && digitalData.event[ prop ].eventInfo.eventAction == eventAction ) {
				result = true;
			}
		}
		return result;
	}
}