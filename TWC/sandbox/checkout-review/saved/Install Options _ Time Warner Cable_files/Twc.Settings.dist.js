/**
 * Contains all settings used within application
 * @namespace
 */

var Twc = Twc || {};

Twc.Settings = ( function() {

	var sessionId = $.trim( $( 'meta[name=sessionid]' ).attr( 'content' ) ) || '';

	return {
		billing: {
			// The URL for the billing iframe page.  Requires an auth token cookie to be set prior to fetching
			billingIframeUrl: "https://payments.timewarnercable.com/paymentgateway/abf",

			// The URL for the second billing iframe page for ABF.  Requires an auth token cookie to be set prior to fetching
			abfBillingIframePaymentUrl: "https://payments.timewarnercable.com/paymentgateway/abf/payment",

			// The URL for the credit error page.
			creditErrorUrl: "/residential/order/session/assistanceRequired",

			// Timeout value to check if iFrame loaded
			iframeTimeoutForSLA: 10000,

			// Timeout value to redirect to splash if iframe hasn't loaded
			iframeTimeoutForSplash: 20000
		},

		/** URLs for AJAX REST calls.
		 */
		ajaxUrls: {
			'CustomerProfile': '/residential/buyflow/profile/session/' + sessionId + '/',
			'CSTToken': '/residential/buyflow/paymentGateway/session/' + sessionId + '/',
			'CustomizeTVTabUpdate': '/residential/buyflow/tvtabcontents/session/' + sessionId + '/',
			'GetCondensedCart': '/residential/buyflow/condensedCart/session/' + sessionId + '/',
			'GetServiceDetails': '/content/twc/en/checkout/installation/jcr:content/par-content/installoptionswrappe/service-details.html?sessionid=' + sessionId + "&" + window.location.search.replace( "?", "" ),
			'GetPackages': '/residential/buyflow/packages/session/' + sessionId + '/',
			'GetSyosUpsellOffers': '/residential/buyflow/offers/upsell/session/' + sessionId + '/',
			'Session': '/residential/buyflow/session/' + sessionId + '/',
			'UpdateCart': '/residential/buyflow/cart/session/' + sessionId + '/',
			'UpdatePhoneNumber': '/residential/buyflow/transfer/session/' + sessionId + '/',
			'UpdatePhoneAuth': '/residential/buyflow/terms/session/' + sessionId + '/',
			'UpdateInstallationOptions': '/residential/buyflow/installation/session/' + sessionId + '/',
			'ValidateCustomizeTV': '/residential/buyflow/cartService/session/' + sessionId + '/',
			'StartCheckout': '/residential/buyflow/phase/checkout/session/' + sessionId + '/',
			'ProductSummaries': '/residential/buyflow/util/products',
			'DivisionForZipcode': '/residential/buyflow/util/division',
			'UpdateUpsellItem': '/residential/buyflow/items/upsell/session/' + sessionId + '/',

			'Logger': '/residential/buyflow/util/logger/session/' + sessionId + '/'
		},

		// The default value set for a string setting
		defaultStringValue: "NO_VALUE_SET",

		/** Urls for Dust.js templates to be compiled and cached for rendering
		 */
		templateUrls: {
			primaryEquipmentHtml: '/content/twc/en/checkout/tv-config/jcr:content/checkout-plans/customize_tv/primary-tv-equipment.html?sessionid=' + sessionId
		},

		/** CST Token service needs this value posted during Billing page iFrame inclusion
		 * Provide absolute path beginning with "/", but exclude protocol and hostname (http://hostname..../), which are dynamically added during ajax
		 */
		termsAndConditionsPath: '/content/residential-admin/legal/termsAndConditions/billing/jcr:content/terms.json',

		/** The default URL for the application
		 */
		loginUrl: "/residential/order",

		/** The URL for redirecting to the current services page
		 * @author McKnight
		 */
		currentServicesURL: window.location.protocol + '//' + window.location.host + '/residential/order/session/' + sessionId + '?current_services',

		/** messages shown to users
		 */
		messages: {
			signingOut: '<p>We are signing you out.</p><p>Thank you for choosing Time Warner Cable.</p>',
			systemError: "<p>We're experiencing difficulties with your order.</p><p>Please call 1-855-243-8892 for further assistance.</p>",
			clearCartTitle: " ",
			clearCartMessage: "<p>To clear your cart and begin again, select <b>Start Over</b>. To keep your current choices, select <b>Continue Order</b>. If you need further assistance, please call 1-855-243-8892.<br> </p> ",
			clearCartConfirm: "Start Over",
			clearCartCancel: "Continue Order",
			cartEmpty: '<p>Your cart is currently empty.</p><p>Click OK to return to Your Current Services, where you can select and order TWC service(s).</p>'
		},

		/** Is customer Maxx eligible based on customer profile service address
		 */
		isMaxxEligible: "true",

		/** Session ID is set from page's <meta name="sessionid"> tag
		 */
		sessionId: sessionId,

		/**
		 * Force on-screen display of log messages.  Otherwise use default parameter passed by code
		 */
		forceLogOsd: 0,

		/**
		 * Force on-screen display of error messages.  Otherwise use default parameter passed by code
		 */
		forceErrorOsd: 0,

		/**
		 * Should we run DevOnly code? Limit to http://checkout.* and otherwise don't run
		 */
		runDevOnlyCode: /^checkout\./.test( window.location.hostname ) || 0,

		breakpoint: {
			tablet: 501,
			desktop: 1100
		},

		/**
		 * MS delay for hiding calendar after date selection.  Delay provides user visual of accurate date selection
		 */
		dateSelectionHideDelay: 200,


		/**
		 *
		 */
		modalFadeOutDuration: 400,

		/** MS for ajax timeout of non-modal functions
		 */
		ajaxTimeout: 60000,


		/**
		 * MS for Top Questions answer slide in/out
		 */
		topQuestionsSlideDuration: 200,

		/**
		 * MS for sliding down accordian section
		 */
		accordianSlideDuration: 200,

		/**
		 * Animation easing value
		 */
		accordianSlideEasing: 'linear',

		/**
		 * MS for fading in/out accordian content
		 */
		accordianFadeDuration: 200,

		/**
		 * MS for fading in/out accordian content
		 */
		accordianFadeEasing: 'swing',

		/**
		 * MS for fading in/out accordian content
		 */
		tabFadeInDuration: 400,

		/**
		 * MS for fading in/out accordian content
		 */
		tabFadeInEasing: 'swing',

		/**
		 * MS for shrinking the tab if the previous selected tab had heigher height.
		 * Prevents page jumping when screen shrinks
		 */
		tabShrinkDuration: 800,

		/** MS for fading the shoping cart on data updates
		 */
		shoppingCartUpdateFadeDuration: 300,


		viewMore: {
			moreHtml: "View More",
			lessHtml: "View Less"
		},

		/** Disable this if you wish to supress session timeouts and timeout warning features.
		 * We're currently disabling in CQ Author mode via @link Twc.Checkout.Util.invokeEditMode;
		 */
		sessionTimeoutEnabled: 1,

		/** MS of when session times out.
		 */
		sessionTimeout: 19 * 60 * 1000,

		/** MS at when we warn users that session will time out
		 */
		sessionTimeoutWarning: 17 * 60 * 1000,

		/** Applies to desktop breakpoint only
		 */
		sessionModalWidth: '450px',

		/** Applies to desktop breakpoint only
		 */
		sessionModalHeight: '300px',

		/** Applies to desktop breakpoint only
		 */
		errorModalHeight: '280px',

		/** Applies to desktop breakpoint only
		 */
		errorModalAltHeight: '320px',

		/** MS to delay showing Customize TV "please wait..." message
		 */
		tabContentLoadingMessageDelay: 1500,


		/** page scrolls to error screen if errors are not shown
		 */
		errorListScrollTopPadding: 10,

		/**
		 * Not used.  prevents trailing comma accidents while coding
		 */
		_END: null
	}
} )();

/**
 * Bind a function to window.load to check if any of the dynamic JS settings were not set correctly in Twc.Settings
 * This can be updated, enhanced at a later time to go through all the Settings,
 * as we have more use cases of Dynamic JS Settings.
 **/
$( window ).load( function() {
	if ( [ Twc.Settings.loginUrl, Twc.Settings.billing.creditErrorUrl ].indexOf( Twc.Settings.defaultStringValue ) != -1 ) {
		error( "NO_VALUE_SET for Dynamic JS variables in Twc.Settings" );
		Twc.Checkout.Util.showErrorMessage();
	}
} );


/** add global AJAX handlers to filter for valid/invalid session responses. Cancel pending/future AJAX actions if session is invalid
 */
$.ajaxSetup( {
	cache: false,
	timeout: Twc.Settings.ajaxTimeout,
	beforeSend: function( jqXHR, settings ) {
		jqXHR.done( function( data, textStatus, jqXHR ) {
			Twc.Checkout.Util.processAjaxResponse( jqXHR );
		} ).fail( function( jqXHR, textStatus, errorThrown ) {
			Twc.Checkout.Util.processAjaxResponse( jqXHR );
		} )
	}
} );

window.onerror = function() {};