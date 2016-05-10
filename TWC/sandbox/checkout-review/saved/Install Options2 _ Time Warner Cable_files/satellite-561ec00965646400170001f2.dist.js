switch ( _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'bfVisitorType' ] ) {
	case 'EBF Visitor':
		var eCommerceSite_var = 'ebf';
		var skill_var = 'mobile-ecommerce-ebf-english';
		var vt = 'EBF Visitor';
		break;
	default:
		var eCommerceSite_var = 'abf';
		var skill_var = 'mobile-ecommerce-abf-english';
		var vt = 'ABF Visitor';
		break;

}

if ( window.location.href.indexOf( "lp_test" ) > -1 ) {


	document.getElementsByClassName( "chat" )[ 0 ].innerHTML = '<style>#lpButtonDiv a{padding-top: 5px;padding-bottom: 5px;}</style><div id="lpButtonDiv"><a href="#" id="lpButtonDiv" style="">Chat</a></div>';
} else {
	if ( typeof document.getElementsByClassName( "chat" )[ 0 ] != "undefined" ) {
		document.getElementsByClassName( "chat" )[ 0 ].innerHTML = '<style>#lpButtonDiv a{padding-top: 5px;padding-bottom: 5px;}@media screen and (max-width: 1099px) {.chat{margin:0px !important;height:46px !important;}#lpButtonDiv{  text-align:center; text-indent: 0px;padding: 7px;}}"</style><div id="lpButtonDiv"></div>';
	} else {
		jQuery( '.callToOrder' ).parent().prepend( '<li class="chat"><style>.header .chat a {background-image: url("//www.timewarnercable.com/etc/designs/buyflow/clientlibs/images/icons/icon-chat.png");background-repeat: no-repeat; background-position: 5px center; padding-left: 40px; }#lpButtonDiv a{padding-top: 5px;padding-bottom: 5px;}@media screen and (max-width: 1099px) {.chat{margin:0px !important;height:46px !important;}#lpButtonDiv{  text-align:center; text-indent: 0px;padding: 7px 0px;}}"</style><div id="lpButtonDiv"></div></li>' );
		jQuery( '.callToOrder' ).parent().find( '.twc-first' ).remove();
	}
}
if ( dataLayer[ 0 ].region == "" ) {
	if ( typeof s.eVar6 != "undefined" ) {
		region_store = s.eVar6.toUpperCase();
	} else {
		region_store = dataLayer[ 0 ].region;
	}
} else {
	region_store = dataLayer[ 0 ].region;
}
switch ( region_store ) {
	case "DAL":
		region_test = "TX";
		break;
	case "KC":
		region_test = "MW";
		break;
	case "NAT":
		region_test = "WEST";
		break;
	default:
		region_test = region_store;
		break;


}
switch ( region_test ) {
	case "CAR":
	case "HI":
	case "LA":
	case "MW":
	case "NE":
	case "TX":
	case "NYC":
	case "SD":
	case "WEST":
		console.log( 'running' );

		// ########################################################################
		// ================== 1: VARIABLE DEFINITION =============================
		// ########################################################################
		// Variables are JavaScript objects that are passed in an array
		// Each object must contain: scope, name, value
		// Names and values should be strings
		// A LivePerson variable can be defined in one of three different scopes:
		//   'page' - exists on the current page only
		//   'session' - exists for the current visitor session
		//   'visitor' - persists between browser sessions
		// Not all variables will be required/used by the LP Mobile deployment, use the mobile:true/false flag to specify this
		var arrLPvars = [
			// 'unit' and 'language' are required in most deployments
			// Due to the setup for TWC's ecommerce site, we will require the eCommerceSite variable to be passed with an appropriate value as well
			{
				scope: 'page',
				name: 'unit',
				value: 'ecommerce',
				mobile: true
			}, {
				scope: 'page',
				name: 'eCommerceSite',
				value: eCommerceSite_var,
				mobile: true
			}, {
				scope: 'page',
				name: 'pageType',
				value: eCommerceSite_var,
				mobile: true
			}, //Potential Values: learn, abf, ebf
			{
				scope: 'session',
				name: 'language',
				value: 'english',
				mobile: true
			},

			// Pass variables below as available on page load - potential/likely values in comment
			{
				scope: 'page',
				name: 'Section',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'Page Name' ],
				mobile: true
			},
			//{ scope:'page', name:'ErrorName', value:'VARIABLE_VALUE', mobile:true }, //List of Errors
			//{ scope:'page', name:'ErrorCounter', value:'VARIABLE_VALUE', mobile:true }, //Current numerical count of errors
			//{ scope:'page', name:'errorFlag', value:'VARIABLE_VALUE', mobile:true }, //Pass 1 on a page to indicate an error that blocks order completion
			{
				scope: 'page',
				name: 'ConversionStage',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'Page Name' ],
				mobile: true
			}, //Name of current page in checkout flow: i.eretc.
			{
				scope: 'page',
				name: 'CartTotal',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'transactionValue' ],
				mobile: true
			}, //Value of cart contents

			{
				scope: 'session',
				name: 'UserType',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'VisitorLoginState' ],
				mobile: true
			}, //authenticated or unauthenticated 
			{
				scope: 'session',
				name: 'Bfvisitortype',
				value: vt,
				mobile: true
			}, //abfvisitor,ebfvisitor
			{
				scope: 'session',
				name: 'customerRegion',
				value: region_test,
				mobile: true
			}, //nyc,tx,los angeles, san diego, out of footprint
			//Confirmation Page variables
			{
				scope: 'page',
				name: 'OrderNumber',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'OrderID' ],
				mobile: true
			}, //Unique order number
			{
				scope: 'page',
				name: 'OrderTotal',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'transactionValueMonthly' ],
				mobile: true
			}, //Final value of order
			{
				scope: 'page',
				name: 'PSUTotal',
				value: _satellite.getVar( 'GTM-DataLayer' )[ 0 ][ 'PSU' ],
				mobile: true
			} //PSU Count for order just placed
		];

		if ( _satellite.getVar( 'lpClone' ) == "true" ) {
			appid = _satellite.getVar( 'LP Clone Account' );
		} else {
			appid = _satellite.getVar( 'LP Prod Account' );
		}
		// ########################################################################
		// ==================== 2: LP MOBILE CONFIG ===============================
		// ########################################################################
		var _LP_CFG_ = {
			app_id: appid, // Only required for accounts that already have an app_id, it is not required for new LP Mobile deployments
			options: {
				skill: skill_var, // set the mobile chat skill
				triggerSelector: [ "#lp-mobile-chat-button-tab", "#lpButtonDiv" ], // optional CSS selector to provide a button on the page

				// the following function is for sending custom variables + values to the LivePerson Servers when the chat begins
				extras: function() { // A static dictionary or a function that returns a dictionary of custom variables 

					var extras = {};
					var i, varsCount = arrLPvars.length;

					// This will run through the array of variables and add those flagged with mobile:true to the dictionary
					if ( arrLPvars ) {
						for ( i = 0; i < varsCount; i++ ) {
							if ( arrLPvars[ i ].mobile ) {
								extras[ arrLPvars[ i ].name ] = arrLPvars[ i ].value;
							}
						};
					}

					return extras;
				},
				onChatNotAnswered: function( messages ) {
					console.log( 'chat not answered' );

				},
				onChatDisabled: function( els ) {
					console.log( 'chat disabled!' );
					// Change the LP Mobile button to an offline state, for example:
					var lpMobileButton = document.getElementById( 'lpButtonDiv' );
					var lpMobileButton2 = document.getElementById( 'lp-mobile-chat-button-tab' );
					lpMobileButton.style.display = "none";
					lpMobileButton.setAttribute( "disabled", "true" );
					lpMobileButton2.style.display = "none";
					lpMobileButton2.setAttribute( "disabled", "true" );
					lpMobileButton.innerHTML = "Chat unavailable";
				},
				onChatEnabled: function( els ) {
					console.log( 'chat enabled!' );
					// Change the LP Mobile button to an online state, for example
					var lpMobileButton = document.getElementById( 'lpButtonDiv' );
					var lpMobileButton2 = document.getElementById( 'lp-mobile-chat-button-tab' );
					lpMobileButton.style.display = "block";
					lpMobileButton.removeAttribute( "disabled" );
					lpMobileButton2.style.display = "block";
					lpMobileButton2.removeAttribute( "disabled" );
					lpMobileButton.innerHTML = "<img src='/etc/designs/buyflow/clientlibs/images/icons/icon-chat.png' align='cehter'/><span class='mobile-hidden'>Chat</span>";
				}
			}
		};

		// ########################################################################
		// ==================== 2: LP DESKTOP SETUP ===============================
		// ########################################################################
		// Start by defining the required objects
		var lpTag = lpTag || {},
			lpMTagConfig = lpMTagConfig || {};
		lpTag.vars = lpTag.vars || [];
		lpTag.dbs = lpTag.dbs || [];
		lpTag.section = 'ecommerce';


		// ---------- i: Sending variable array when the page loads --------------
		lpTag.vars.push( arrLPvars );

		// ======================= DYNAMIC BUTTONS ============================
		// Define a default dynamic button on the page, specifying the following parameters
		//   name: the name of the dynamic button in the LivePerson Admin Console
		//   pid: the id of the div that the button will be injected into
		lpTag.dbs.push( {
			name: 'chat-ecommerce-english',
			pid: 'lpButtonDiv'
		} );


		// ########################################################################
		// ===================== 3: IN PAGE ACTIONS ===============================
		// ########################################################################


		// -------- Sending variables on demand (e.g. after a click event) --------
		var sendVarsOnClick = function() {
			// create the variables array the same as for the onload variables
			var arrNewVars = [
				//Example variables for passing after page load - if there are variables you don't want sent in the mobile version, specify them using mobile:false
				{
					scope: 'page',
					name: 'PAGE_VARIABLE_NAME',
					value: 'changed by onclick',
					mobile: true
				}, {
					scope: 'page',
					name: 'ONCLICK_PAGE_VARIABLE_NAME',
					value: 'VARIABLE_VALUE',
					mobile: true
				}, {
					scope: 'session',
					name: 'ONCLICK_SESSION_VARIABLE_NAME',
					value: 'VARIABLE_VALUE',
					mobile: true
				}, {
					scope: 'visitor',
					name: 'ONCLICK_VISITOR_VARIABLE_NAME',
					value: 'VARIABLE_VALUE',
					mobile: false
				}
			];
			// The push methods are different for Mobile and Standard chat for technical reasons
			// For LP Mobile loop through and send the variables as events
			if ( typeof( LPMobile ) !== "undefined" ) {
				for ( var i = 0; i < arrNewVars.length; i++ ) {
					if ( arrNewVars[ i ].mobile ) {
						LPMobile.reportEvent( arrNewVars[ i ].name, arrNewVars[ i ].value );
					}
				}

			} else {
				// For stand monitoring push to the vars queue
				lpTag.vars.push( arrNewVars );
				// This 'try' block is here because the LP code must be instantiated on the page
				// before the lpTag.vars.send() method can be called
				// If the method fails for this reason the variables in the queue will be picked
				// up when the LP code initiates
				try {
					// Send waiting variables immediately
					lpTag.vars.send();
				} catch ( e ) {}
			}
		};

		_satellite.track( 'chatCode' );
		break;
}