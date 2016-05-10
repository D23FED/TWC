var serverURL = "www.cablemover.com/";

function CallService( service, param, bg, successfun ) {
	jQuery.ajax( {
		type: "POST",
		url: this.server + "Search/G2BService.asmx/" + service,
		data: param,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function( response ) {
			successfun( response, bg )
		}
	} );
}

function AfterGetForm( response, bg ) {
	$( bg.id ).html( response.d )
	bg.sCount++;
	$( bg.id + ' input[type=submit]#form_see_offers' ).click( function() {
		bg.doSearch()
	} )

	$( ".result_link" ).click( function( e ) {
		e.preventDefault();
		var url = this.href;
		var mso = $( this ).attr( "data-mso" );
		$.getScript( 'https://js.dmtry.com/channel.js#gid:3999;advid:1002;pid:1103706;cus.mso:' + mso, setTimeout( function() {
			// callback function
			window.location.href = url;
		}, 200 ) ).fail( function( e ) {
			window.location.href = url;
		} );
	} );

	$( ".fullClick" ).click( function( e ) {
		e.preventDefault();
		var url = this.href;
		var mso = $( this ).attr( "data-mso" );
		$.getScript( 'https://js.dmtry.com/channel.js#gid:3999;advid:1002;pid:1103706;cus.mso:' + mso, setTimeout( function() {
			// callback function
			window.location.href = url;
		}, 200 ) ).fail( function( e ) {
			window.location.href = url;
		} );
	} );



	//add noscript tag
	if ( !$( "#nost" ).length ) {
		$( "body" ).append( "<noscript id='nost'><img width='0' height='0' src='https://log.dmtry.com/redir/1/0/3999/1103706/0/1/3/0/1002/1.ver?at=v&d=PxConv'></noscript>" );
	}

}

function doSearch() {
	add = $( this.id + ' input#cablemoversearch_add' ).val();
	zip = $( this.id + ' input#cablemoversearch_zip' ).val();
	apt = $( this.id + ' input#cablemoversearch_apt' ).val();
	var isEmpty = false;

	if ( add == "" || zip == "" )
		return;

	var searchline = "<div class='search_process " + ( this.mobile ? "view_3" : "view_2" ) + "' style='text-align: center;' >Search<br/><img src='" + this.server + "images/loading' id='ctam_img_loading' />" +
		"<br/>We are now searching for services available at:</br><b>" + add + ( apt != "" ? " Apt: " + apt : "" ) + "<br/>Zip Code:" + zip + "</b></div>"
	$( this.id ).html( searchline )

	this.CallService( "G2BSearch", "{'sMSO':'" + this.mso + "','Address':'" + add + "','Apt':'" + apt + "','Zip':'" + zip + "','mobile':'" + this.mobile + "','c':'" + this.sCount + "','server':'" + this.server + "'}",
		this, AfterGetForm );

}

function ctam( id, mso, mobile, https, add, apt, zip ) {
	this.id = id;
	this.mso = mso;
	this.mobile = mobile;
	this.server = ( https ? "https://" : "http://" ) + serverURL;
	this.sCount = 0;

	this.doSearch = doSearch;
	this.CallService = CallService;

	$( 'head' ).append( '<link rel="stylesheet" type="text/css" href="' + this.server + 'Widget/style.css">' );
	$( 'head' ).append( '<link rel="stylesheet" type="text/css" href="' + this.server + 'Widget/cleanslate.css">' );


	if ( add == "" || zip == "" )
		this.CallService( "GetForm", "{'mso':'" + this.mso + "','Address':'" + add + "','Apt':'" + apt + "','Zip':'" + zip + "','mobile':'" + this.mobile + "'}", this, AfterGetForm );
	else {
		var searchline = "<div class='search_process " + ( this.mobile ? "view_3" : "view_2" ) + "' style='text-align: center;' >Search<br/><img src='" + this.server + "images/loading' id='ctam_img_loading' />" +
			"<br/>We are now searching for services available at:</br><b>" + add + ( apt != "" ? " Apt: " + apt : "" ) + "<br/>Zip Code:" + zip + "</b></div>"
		$( this.id ).html( searchline )
		this.CallService( "G2BSearch", "{'sMSO':'" + this.mso + "','Address':'" + add + "','Apt':'" + apt + "','Zip':'" + zip + "','mobile':'" + this.mobile + "','c':'" + this.sCount + "','server':'" + this.server + "'}",
			this, AfterGetForm );
	}
}

function ctam_widget_initialization( id, mso, mobile, https, add, apt, zip ) {
	$( id ).html( "<div id='ctam_widget_container'></div>" );
	$( '#ctam_widget_container' ).addClass( mobile ? "view_3" : "view_2" )
	return new ctam( '#ctam_widget_container', mso, mobile, https, add, apt, zip );
}