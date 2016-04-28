function getPageLoadTime() {
	var a = ( new Date ).getTime(),
		b = ( a - beforeload ) / 1e3;
	$( ".loadtime" ).text( +b + " sec" )
}

function adjustTopicHeight() {
	var a = $( "#topics-container" ).height();
	$( "#topics" ).css( {
		height: a
	} )
}

function popitup( a ) {
	return newwindow = window.open( a, "name", "height=700,width=350,scrollbars=yes,resizable=yes" ), popupBlockerChecker.check( newwindow ), window.focus && newwindow.focus(), !1
}

function submitSurvey() {
	window.self.close()
}

function cancelSurvey() {
	window.self.close()
}

function isIE( a, b ) {
	var c = $( '<div style="display:none;"/>' ).appendTo( $( "body" ) );
	c.html( "<!--[if " + ( b || "" ) + " IE " + ( a || "" ) + "]><a>&nbsp;</a><![endif]-->" );
	var d = c.find( "a" ).length;
	return c.remove(), d
}

function adjustDIVS() {
	$( ".compEritTable li.package" ).each( function( a ) {
		$( this ).addClass( "package" + a )
	} ), $( ".compEritTable ul.table" ).each( function() {
		$( "<span>" + $( this ).find( ".feature" ).text() + "</span>" ).appendTo( $( this ).find( ".package" ) ), $( '<li class="desc-details h6">' + $( this ).find( ".desc" ).text() + "</li>" ).prependTo( $( this ).next( "ul" ) ), $( '<span class="tempBadge">' + $( this ).find( ".badge" ).html() + "</span>" ).prependTo( $( this ).next( "ul" ) )
	} )
}

function adjustSize() {
	$( window ).width() <= mediumBreakPoint ? $( ".compEritTable li.package" ).each( function( a ) {
		$( this ).parent().find( ".feature" ).height( $( ".compEritTable .package" + a ).height() ), $( this ).parent().find( ".order" ).height( $( ".compEritTable .pricing" ).height() ), $( this ).parent().find( ".desc" ).height( $( ".compEritTable .package" + a ).height() )
	} ) : ( $( ".compEritTable.five-column-compare .feature" ).attr( "style", "" ), $( ".compEritTable.five-column-compare .order" ).attr( "style", "" ), $( ".compEritTable.three-column-compare .desc" ).attr( "style", "" ) )
}

function adjustSettings() {
	$( ".compareTable ul.table" ).each( function() {
		$( "<span>" + $( this ).find( ".feature" ).text() + "</span>" ).appendTo( $( this ).find( ".package" ) ).hide(), $( '<li class="desc-details h6">' + $( this ).find( ".desc" ).text() + "</li>" ).prependTo( $( this ).next( "ul" ) ).hide(), $( '<span class="tempBadge">' + $( this ).find( ".badge" ).html() + "</span>" ).prependTo( $( this ).next( "ul" ) ).hide()
	} )
}

function adjustContent() {
	$( window ).width() > mediumBreakPoint ? ( $( ".leftRail-list #topic-content" ).html( "" ), $( ".leftRail-list li.onTopic" ).find( "ul" ).clone().appendTo( "#topic-content" ) ) : ( $( ".leftRail-list li.topic" ).find( "ul" ).hide(), $( ".leftRail-list .js-active" ).find( "ul" ).show() )
}

function loadPopup( a, b ) {
	$( "#modal" + b ).css( {
		display: "none"
	} ), $( "#modal" + a ).css( {
		"margin-top": -$( "#modal" + a ).height() / 2,
		display: "block"
	} ), $( ".modal-next" ).attr( "data-next", a - 1 + 2 ), $( ".modal-prev" ).attr( "data-prev", a - 1 ), $( "#modal" + a ).fadeIn( 320 ), $( ".modal-overlay" ).fadeIn( "normal" )
}

function disablePopup() {
	$( ".modal-container" ).fadeOut( "normal" ), $( ".modal-overlay" ).fadeOut( "normal" )
}

function resizeAccordion() {
	if ( $( window ).width() > mediumBreakPoint ) {
		var a = $( ".sideAccordion .liState" ).next( ".activeContent" ).html();
		if ( void 0 == a ) var a = $( ".sideAccordion .js-first" ).next( ".activeContent" ).html();
		$( ".sideAccordion .activeContent" ).hide(), $( ".sideAccordion .rightContent" ).show(), $( ".sideAccordion .sbs-content" ).show(), $( ".sideAccordion .sbs-clone" ).show(), $( ".sideAccordion .filler" ).show(), $( ".sideAccordion .cloned-block" ).remove(), void 0 != a && $( '<div class="cloned-block">' + a.replace( "display:none", "display:block" ) + "</div>" ).appendTo( ".sideAccordion .rightContent" )
	} else $( ".sideAccordion .rightContent" ).html( "" ), $( ".sideAccordion .sbs-content" ).hide(), $( ".sideAccordion .filler" ).hide()
}

function adjustContent() {
	$( window ).width() < mediumBreakPoint ? $( "[class*=onState_] .tabs ul" ).find( "li.js-active" ).next( "div" ).show() : ( $( ".cloned" ).hide(), $( "[class*=onState_]" ).each( function() {
		var a = $( this ).attr( "class" ),
			b = a.split( " " ),
			c = b.pop(),
			d = $( "." + c + " .js-active a" ).attr( "data-ref" );
		$( "." + c + " .tab-content-container" ).find( d ).show()
	} ) )
}

function buildAccordion() {
	$( ".tab-component .tabs ul li" ).each( function() {
		id = $( this ).find( "a" ).attr( "data-ref" ), $( id ).clone().removeAttr( "id" ).addClass( "cloned" ).insertAfter( $( this ) ).hide(), $( window ).width() < mediumBreakPoint && $( this ).hasClass( "js-active" ) && $( id ).clone().removeAttr( "id" ).addClass( "cloned" ).insertAfter( $( this ) ).show()
	} )
}

function textToCopy() {
	$( "[class^=truncate-]" ).each( function( a ) {
		var b = $( this ).html();
		$( '<div id="copy_' + a + '">' + b + "</div>" ).hide().appendTo( "body" )
	} ), rebuildText()
}

function rebuildText() {
	$( "[class^=truncate-]" ).each( function( a ) {
		var b = $( "#copy_" + a ).clone().addClass( "clone_" + a ).removeAttr( "id" ).show();
		$( this ).html( b )
	} )
}

function resizeText() {
	rebuildText(), $( "[class^=truncate-]" ).each( function( a ) {
		for ( var b = $( ".clone_" + a ).children(), c = $( this ).height(); $( b ).outerHeight() > c; ) $( b ).text( function( a, b ) {
			return b.replace( /\W*\s(\S)*$/, "..." )
		} )
	} )
}
var beforeload = ( new Date ).getTime();
window.onload = getPageLoadTime, $( "#toggleMedia" ).click( function() {
	var a = document.getElementById( "printCSS" );
	return $( this ).text( "print view" === $.trim( $( this ).text() ) ? "web view" : "print view" ), a.media = "all" == a.media ? "print" : "all", !1
} );
var overlay = jQuery( '<div class="fold"> </div>' );
$( window ).resize( function() {
	overlay.appendTo( document.body )
} ).resize(), $( window ).resize( function() {
	$( ".viewport" ).empty().append( $( window ).width(), "x", $( window ).height() )
} ).resize(), $( ".accordion .expandable ul li" ).each( function() {
	$( this ).addClass( $( this ).has( "ul" ).length ? "js-expandable" : "js-notexpandable" ), $.cookie( "js-expand" ) && $( this ).find( ".expandable h6" ).text() === $.cookie( "js-expand" ) && $( this ).find( "ul" ).slideDown()
} ), $.cookie( "js-expand" ) || $( ".accordion .expandable ul .js-expandable" ).first().addClass( "js-active" ).find( "ul" ).slideDown(), $( ".accordion .expandable h6" ).click( function() {
	var a = $( this ).text();
	$( this ).parent().addClass( "js-active" ).find( "ul" ).slideToggle( function() {
		$.cookie( "js-expand", a ), $( this ).is( ":hidden" ) && ( $( this ).parent().removeClass( "js-active" ), $.cookie( "js-expand", null ) )
	} )
} ), $( ".accordionHybrid .expandableHybrid ul li" ).each( function() {
	$( this ).addClass( $( this ).has( "ul" ).length ? "js-expandableHybrid" : $( this ).next().hasClass( "activeContent" ) ? "js-expandableHybridSub" : "js-notexpandableHybrid" ), $.cookie( "js-expandHybrid" ) && $( this ).find( ".js-expandableHybrid h6" ).text() === $.cookie( "js-expandHybrid" ) && ( $( window ).width() < 768 ? $( ".js-expandableHybrid .activeContent" ).show() : $( ".js-expandableHybrid .activeContent" ).hide(), $( this ).find( "ul" ).slideDown() )
} ), $.cookie( "js-expandHybrid" ) ? $( ".accordionHybrid .js-active" ).find( "ul" ).slideDown( function() {} ) : $( ".accordionHybrid .expandableHybrid ul .js-expandableHybrid" ).first().addClass( "js-active" ).find( "ul" ).slideDown(), $( ".accordionHybrid li.js-expandableHybrid h6" ).click( function() {
	var a = $( this ).text();
	$( ".accordionHybrid .activeContent" ).hide(), $( this ).parent().addClass( "js-active" ).find( "ul" ).slideToggle( function() {
		$.cookie( "js-expandHybrid", a ), $( this ).is( ":hidden" ) && ( $( this ).parent().removeClass( "js-active" ), $.cookie( "js-expandHybrid", null ) )
	} )
} ), $( ".accordionHybrid li.js-expandableHybridSub" ).click( function() {
	if ( $( window ).width() < 768 ) {
		{
			$( this ).text()
		}
		$( this ).next( ".activeContent" ).slideToggle( function() {
			$( this ).is( ":hidden" ) ? $( ".accordionHybrid .activeContent" ).hide() : $( ".accordionHybrid .activeContent" ).show()
		} )
	}
	return !1
} );
var windowTimer = null;
$( window ).width() >= mediumBreakPoint && adjustTopicHeight(), $( window ).bind( "resize", function() {
		$( window ).width() >= mediumBreakPoint ? ( windowTimer && clearTimeout( windowTimer ), windowTimer = setTimeout( adjustTopicHeight, 150 ) ) : $( "#topics" ).css( {
			height: "auto"
		} )
	} ), $( ".twc-alert .twc-alert-text:first" ).prepend( '<a class="twc-icon twc-alert-close twc-show_hide" href="" style=""></a>' ), $( ".twc-show_hide" ).click( function( a ) {
		$( this ).parent().slideToggle(), a.preventDefault()
	} ), $( function() {
		$( "label" ).filter( function() {
			return $( this ).find( "input" ).is( ":checked" )
		} ).addClass( "js-checked" ), $( "input" ).click( function() {
			$( "input:not(:checked)" ).parent( "label" ).removeClass( "js-checked" ), $( "input:checked" ).parent( "label" ).addClass( "js-checked" )
		} )
	} ), $( function() {
		$( "#ccPreCheck form#newExisting input[type=radio]" ).on( "change", function() {
			$( "#ccStartChatButton" ).show(), $( ".chatUI-.bottom .language" ).hide(), $( ".chatUI-.bottom .show_transcript" ).show(), $( "#new" ).is( ":checked" ) ? ( $( "#ccPreCheck" ).hide(), $( "#ccPreSurvey" ).show() ) : ( $( "#ccPreCheck" ).hide(), $( "#ccPreSurvey" ).show(), $( ".telephoneInput" ).show(), $( ".chatUI-.footnote" ).show() )
		} ), $( "#ccStartChatButton" ).click( function() {
			$( "#ccPreSurvey" ).hide(), $( ".chatUI-.bottom" ).hide(), $( ".chatUI-.footnote" ).hide(), $( "#hidewindow" ).show(), $( "#ChatDisplay" ).show(), $( "#ccContainer" ).show(), $( ".chatUI-.conversation" ).show(), $.cookie( "chatEnabled", "true" )
		} ), $( "#ccRemoteControl button" ).click( function() {
			$( "#ccRCEnable" ).toggle(), $( "#ccRCDisable" ).toggle()
		} ), $( "#transcript" ).click( function() {
			return $( ".chatUI-.bottom" ).addClass( "active" ), $( ".chatUI-.transcript" ).show(), $( ".chatUI-.footnote" ).show(), !1
		} ), $( "#hide_transcript" ).click( function() {
			return $( ".chatUI-.transcript" ).hide(), $( ".chatUI-.bottom" ).removeClass( "active" ), !1
		} ), $( "#hidewindow" ).click( function() {
			$.cookie( "chatEnabled" ) ? ( $( ".darkOverlay" ).show(), $( "#ccCloseConfirm" ).show(), $.removeCookie( "chatEnabled" ) ) : window.self.close()
		} ), $( "#ccExitChat" ).click( function() {
			$( "#ccCloseConfirm" ).hide(), $( "#ccChatOutput" ).hide(), $( ".darkOverlay" ).hide(), $( ".chatUI-.conversation" ).hide(), $( ".chatUI-.surveyEnd" ).show(), $( "#ccPostSurvey" ).show()
		} ), $( "#ccCancelExit" ).click( function() {
			$( "#ccCloseConfirm" ).hide(), $( ".darkOverlay" ).hide(), $.cookie( "chatEnabled", "true" )
		} ), $( ".chat" ).click( function() {
			popitup( "/TWC/core/includes/popUp" )
		} )
	} ),
	function( a ) {
		a.fn.extend( {
			checkboxMax: function() {
				a( "[class*=max-]" ).click( function() {
					classNames = a( this ).attr( "class" ).split().pop(), limit = classNames.split( "-" ).pop(), a( this ).closest( "ul" ).find( "[class*=max-]:checked" ).length == limit ? a( this ).closest( "ul" ).find( "[class*=max-]:not(:checked)" ).attr( "disabled", "disabled" ) : a( this ).closest( "ul" ).find( "[class*=max-]:not(:checked)" ).removeAttr( "disabled" ).attr( "enabled", "enabled" )
				} )
			}
		} )
	}( jQuery ),
	function( a ) {
		a.fn.extend( {
			checkboxMin: function() {
				a( "#validateMin" ).click( function() {
					return a( "[class*=min-]" ).each( function() {
						allClasses = a( this ).attr( "class" ), classNames = a( this ).attr( "class" ).split().pop(), limit = classNames.split( "-" ).pop(), a( this ).find( "input:checked" ).length >= limit ? a( this ).removeClass( "checkbox-alert" ) : a( this ).removeClass().addClass( "checkbox-alert " + allClasses )
					} ), !1
				} )
			}
		} )
	}( jQuery ), $( document ).on( "click", "body", function() {
		$( ".js-openWindow" ).hide()
	} ), $( function() {
		$( ".clu .viewMore" ).click( function() {
			return "<span>See More Channels</span>" == $( this ).html() ? ( $( this ).html( "<span>See Less Channels</span>" ), $( ".clu table tbody" ).css( {
				"max-height": "100%"
			} ) ) : ( $( this ).html( "<span>See More Channels</span>" ), $( ".clu table tbody" ).css( {
				"max-height": "350px"
			} ), $( "html, body" ).animate( {
				scrollTop: $( "#cluSearchArea" ).offset().top
			}, 500 ) ), !1
		} )
	} ), $( function() {
		( isIE( 8 ) || isIE( 9 ) ) && $( window ).bind( "load", function() {
			$( "[class^=column-count]" ).each( function() {
				var a = $( this ).attr( "class" ).split( " " )[ 0 ],
					b = ( a.slice( -1 ), a.slice( -1 ) - 1 );
				$( ".columnbreak" ).each( function( a ) {
					a != b ? $( this ).removeClass( "columnbreak" ) : b = a + 4
				} ), $( this ).columnize( {
					columns: a.slice( -1 )
				} ).show()
			} ), $( ".no-csscolumns" ).css( {
				visibility: "visible"
			} )
		} )
	} ), $( function() {
		adjustDIVS(), adjustSize(), $( window ).resize( function() {
			adjustSize(), $( window ).width() >= smallBreakPoint ? ( $( ".compEritTable .package" ).find( "span" ).hide(), $( ".compEritTable .desc-details" ).hide(), $( ".compEritTable .tempBadge" ).hide() ) : ( $( ".compEritTable .package" ).find( "span" ).show(), $( ".compEritTable .desc-details" ).show(), $( ".compEritTable .tempBadge" ).show() )
		} ), $( ".compEritTable .view-more" ).click( function() {
			return $( this ).closest( ".compEritTable" ).toggleClass( "js-active" ), $( ".compEritTable .desc-details" ).hide(), $( this ).closest( ".table" ).next( ".details-content" ).slideToggle(), !1
		} ), $( ".compEritTable .viewDetail" ).click( function() {
			return $( window ).width() > smallBreakPoint && ( $( this ).closest( ".compEritTable" ).toggleClass( "js-active" ), $( ".compEritTable .desc-details" ).hide(), $( this ).closest( ".table" ).next( ".details-content" ).slideToggle() ), !1
		} )
	} ), $( function() {
		adjustSettings(), $( ".compareTable .viewDetail" ).click( function() {
			return $( window ).width() <= smallBreakPoint ? ( $( ".compareTable .desc-details" ).show(), $( this ).closest( ".table" ).next( ".details-content" ).slideToggle() ) : ( $( ".compareTable .desc-details" ).hide(), $( this ).closest( ".table" ).next( ".details-content" ).slideToggle() ), $( this ).toggleClass( "active" ), !1
		} ), $( ".compareTable .viewMore" ).click( function() {
			$( this ).find( "div.desc-details" ).slideToggle( function() {
				$( this ).is( ":hidden" ) ? $( this ).parent().removeClass( "js-active" ) : $( this ).parent().addClass( "js-active" )
			} )
		} ), $( window ).resize( function() {
			$( window ).width() >= smallBreakPoint ? ( $( ".compareTable .package" ).find( "span" ).hide(), $( ".compareTable .desc-details" ).hide(), $( ".compareTable .tempBadge" ).hide() ) : ( $( ".compareTable .package" ).find( "span" ).show(), $( ".compareTable .desc-details" ).show(), $( ".compareTable .tempBadge" ).show() )
		} )
	} ), $( function() {
		$( ".contact-us dt:last" ).addClass( "js-last" ), $( ".contact-us h6" ).click( function() {
			$( "html, body" ).animate( {
				scrollTop: $( this ).offset().top
			}, 300 )
		} ), $( ".contact-us li.heading h5" ).click( function() {
			$( this ).toggleClass( "expanded" ), $( ".contact-us .backTo" ).toggle(), $( ".contact-us .twc-step1 .stepButton" ).toggleClass( "inline-block" ), $( this ).parent().siblings().toggle();
			var a = $( this ).text();
			$( ".contact-us .twc-step1 .stepButton" ).text( a + " FAQs" )
		} ), $( ".contact-us .backTo" ).click( function() {
			return $( ".contact-us h5" ).removeClass( "expanded" ), $( ".contact-us .backTo" ).hide(), $( ".contact-us .twc-step1 .stepButton" ).toggle(), $( ".contact-us .twc-step1 .stepButton" ).toggleClass( "inline-block" ), $( ".contact-us .twc-step3 .step-container" ).hide(), $( ".contact-us ul.content" ).hide(), $( ".contact-us li.heading" ).show(), $( ".contact-us ul.content li" ).addClass( "active" ).siblings().removeClass( "active" ), $( ".contact-us h6.active" ).removeClass( "step-completed" ), !1
		} ), $( ".contact-us ul.content li" ).click( function() {
			return $( this ).addClass( "active" ).siblings().removeClass( "active" ), $( ".contact-us div.twc-backgroundGradient-4" ).eq( 0 ).addClass( "active" ), $( ".contact-us h6" ).eq( 0 ).addClass( "step-completed" ), $( ".contact-us h6" ).eq( 1 ).addClass( "active" ), $( ".contact-us span.end-arrow" ).eq( 1 ).addClass( "active" ), $( ".contact-us .twc-step2 dl" ).show().find( ".contact-us .twc-step1 .stepButton" ).show(), $( ".contact-us .twc-step2 .stepButton" ).toggleClass( "inline-block" ), $( ".contact-us .twc-step2 .step-container:hidden" ).addClass( "active" ).toggle(), $( window ).width() <= 768 && $( "html, body" ).animate( {
				scrollTop: $( ".contact-us .twc-step2 h6" ).offset().top
			}, 300 ), !1
		} ), $( ".contact-us dt" ).click( function() {
			return $( ".contact-us h6" ).eq( 1 ).addClass( "step-completed" ), $( ".contact-us a" ).parent().toggleClass( "displayQuestion" ), $( ".contact-us .changeQuestions" ).toggle(), $( this ).siblings( "dt" ).toggle(), $( this ).next( "dd" ).toggle(), $( ".contact-us .twc-step2 .stepButton" ).hide(), $( ".contact-us .twc-step3 .step-container" ).show(), $( ".contact-us div.twc-backgroundGradient-4" ).eq( 1 ).addClass( "active" ), $( ".contact-us h6" ).eq( 2 ).addClass( "active" ), $( ".contact-us .questionsContinue" ).toggle().addClass( "active" ), !1
		} ), $( ".contact-us .changeQuestions" ).click( function() {
			return $( ".contact-us .changeQuestions" ).hide(), $( ".contact-us .questionsContinue" ).hide(), $( ".contact-us dd" ).hide(), $( ".contact-us dt" ).show(), $( ".contact-us dt" ).removeClass( "displayQuestion" ), $( ".contact-us .twc-step3 .step-container" ).hide(), !1
		} ), $( ".contact-us #openStep3,.questionsContinue" ).click( function() {
			return $( ".contact-us .twc-step3 .step-container" ).show(), $( ".contact-us .twc-step1 .step-container.active" ).toggle(), $( ".contact-us .twc-step2 .step-container.active" ).toggle(), $( "html, body" ).animate( {
				scrollTop: $( ".contact-us .twc-step3 h6" ).offset().top
			}, 300 ), !1
		} ), $( ".contact-us .callMeMaybe h5" ).click( function() {
			$( ".contact-us h6" ).eq( 2 ).addClass( "step-completed" ), "callUs" == $( this ).parent().attr( "id" ) ? ( $( this ).toggleClass( "expanded" ), $( this ).siblings( ".content" ).slideToggle(), $( ".contact-us .helpfulLinks" ).toggle() ) : $( ".contact-us .chatUI" ).show()
		} ), $( ".contact-us h6.active" ).click( function() {
			$( ".contact-us .twc-step1 .step-container:hidden" ).addClass( "active" ).toggle()
		} ), $( ".contact-us input:radio" ).attr( "checked", !1 ), $( ".contact-us #ccPreCheck form#newExisting input[type=radio]" ).on( "change", function() {
			$( ".contact-us #ccStartChatButton" ).show(), $( ".contact-us .chatUI-.bottom .language" ).hide(), $( ".contact-us .chatUI-.bottom .show_transcript" ).show(), $( "#new" ).is( ":checked" ) ? ( $( ".contact-us #ccPreCheck" ).hide(), $( ".contact-us #ccPreSurvey" ).show() ) : ( $( ".contact-us #ccPreCheck" ).hide(), $( ".contact-us #ccPreSurvey" ).show(), $( ".contact-us .telephoneInput" ).show(), $( ".contact-us .chatUI-.footnote" ).show() )
		} ), $( ".contact-us #ccStartChatButton" ).click( function() {
			$( ".contact-us #ccPreSurvey" ).hide(), $( ".contact-us .chatUI-.bottom" ).hide(), $( ".contact-us .chatUI-.footnote" ).hide(), $( ".contact-us #ChatDisplay" ).show(), $( ".contact-us #ccContainer" ).show(), $( ".contact-us .chatUI-.conversation" ).show(), $.cookie( "chatEnabled", "true" )
		} ), $( ".contact-us #ccRemoteControl button" ).click( function() {
			$( ".contact-us #ccRCEnable" ).toggle(), $( ".contact-us #ccRCDisable" ).toggle()
		} ), $( ".contact-us #transcript" ).click( function() {
			return $( ".contact-us .chatUI-.bottom" ).addClass( "active" ), $( ".contact-us .chatUI-.transcript" ).show(), $( ".contact-us .chatUI-.footnote" ).show(), !1
		} ), $( ".contact-us #hide_transcript" ).click( function() {
			return $( ".contact-us .chatUI-.transcript" ).hide(), $( ".contact-us .chatUI-.bottom" ).removeClass( "active" ), !1
		} ), $( ".contact-us #hidewindow" ).click( function() {
			$.cookie( "chatEnabled" ) ? ( $( ".contact-us .darkOverlay" ).show(), $( ".contact-us #ccCloseConfirm" ).show(), $.removeCookie( "chatEnabled" ) ) : $( ".contact-us .chatUI" ).hide()
		} ), $( ".contact-us #ccExitChat" ).click( function() {
			$( ".contact-us #ccCloseConfirm" ).hide(), $( ".contact-us #ccChatOutput" ).hide(), $( ".contact-us .darkOverlay" ).hide(), $( ".contact-us .chatUI-.conversation" ).hide(), $( ".contact-us .chatUI-.surveyEnd" ).show(), $( ".contact-us #ccPostSurvey" ).show()
		} ), $( ".contact-us #ccCancelExit" ).click( function() {
			$( ".contact-us #ccCloseConfirm" ).hide(), $( ".contact-us .darkOverlay" ).hide(), $.cookie( "chatEnabled", "true" )
		} )
	} ), $( function() {
		$( "#feedback-survey-feedback" ).click( function() {
			return $( "#feedback-yes" ).is( ":checked" ) ? ( $( ".initiate-feedback" ).hide(), $( ".feedback-survey-yes-response" ).show() ) : ( $( ".improve-feedback" ).show(), $( "#feedback-survey-feedback:first" ).hide() ), !1
		} ), $( 'input[name="YesNo"]' ).click( function() {
			$( "#feedback-survey-feedback" ).removeClass( "disabled" ).addClass( "js-omega" )
		} ), $( "#improve-feedback-survey-feedback" ).click( function() {
			return $( ".initiate-feedback" ).hide(), "" === $( "#fillit input" ).val() && ( $( ".improve-feedback" ).hide(), $( ".feedback-survey-no-response" ).show() ), !1
		} )
	} ),
	function( a ) {
		a.fn.extend( {
			limiter: function( b ) {
				function c( c ) {
					var d = c.value.length;
					if ( d > b ) {
						c.value = c.value.substr( 0, b ), d = b, a( c ).addClass( "max-input" ); {
							setTimeout( function() {
								a( c ).removeClass( "max-input" )
							}, 1500 )
						}
					} else a( c ).removeClass( "max-input" )
				}
				a( this ).on( "keyup focusout", function() {
					c( this )
				} ), c( a( this )[ 0 ] )
			}
		} )
	}( jQuery ), $( function() {
		$( ".flyoutCTA" ).each( function( a ) {
			$( this ).attr( "id", "flyoutCTA" + a )
		} ), $( '[id^="flyoutCTA"]' ).click( function() {
			return $( this ).next().addClass( "js-openWindow" ).toggle(), $( this ).toggleClass( "icon-angle-down" ).toggleClass( "icon-angle-up" ), !1
		} )
	} ), $( 'div[class*="twc-col3_333333-c"]' ).each( function() {
		var a = $( this );
		$( "h3.label", a ).click( function() {
			var b = $( this );
			$( b ).toggleClass( "js-current" ), $( "h3.label" ).not( b ).removeClass( "js-current" );
			var c = $( "ul", a );
			$( "ul" ).not( c ).removeClass( "js-mobile" ), c.toggleClass( "js-mobile" )
		} )
	} ), $( function() {
		function a() {
			for ( var a = document.getElementsByTagName( "textarea" ), d = null, e = 9, f = null, g = 0; g < a.length; g++ ) d = a[ g ], null != d.getAttribute( "maxlength" ) && null == d.getAttribute( "limiterid" ) && ( e = d.getAttribute( "maxlength" ), f = document.createElement( "label" ), f.id = "limitlbl_" + c, f.style.color = "red", f.style.display = "block", f.innerHTML = "Updating...", d.setAttribute( "limiterid", f.id ), d.onkeyup = function() {
				b( this )
			}, d.parentNode.insertBefore( f, d.firstChild ), b( d ) ), c++
		}

		function b( a ) {
			var b = document.getElementById( a.getAttribute( "limiterid" ) ),
				c = a.getAttribute( "maxlength" ),
				d = !1;
			null != a.getAttribute( "lengthcut" ) && "true" == a.getAttribute( "lengthcut" ).toLowerCase() && ( d = !0 );
			var e = a.value.replace( /\u000d\u000a/g, "\n" ).replace( /\u000a/g, "\r\n" ),
				f = e.length,
				g = 0;
			return null == c || null == b ? !1 : ( g = c - f, void( g >= 0 && ( b.style.color = "black", b.innerHTML = g + " character", 1 != g && ( b.innerHTML += "s" ), b.innerHTML += " remaining" ) ) )
		}
		$( ".formValidate form" ).parsley();
		var c = 0;
		a()
	} ), $( ".gallery-viewMore .icon-camera" ).click( function() {
		return $( this ).hasClass( "hide-all" ) ? ( $( this ).removeClass( "hide-all" ), $( "figure" ).show(), htmlText = "Hide" ) : ( $( this ).addClass( "hide-all" ), $( "figure" ).hide(), htmlText = "Show" ), $( this ).html( '<a analyticsname="test" href="#"><span>' + htmlText + " All</span></a>" ), !1
	} );
var contentLen = $( ".gallery-viewMore .25-25-25-25" ).length;
2 > contentLen && $( ".gallery-viewMore .viewMore" ).hide(), $( ".gallery-viewMore .25-25-25-25" ).each( function( a ) {
	a > 2 && $( this ).css( {
		display: "none"
	} )
} ), $( ".gallery-viewMore .viewMore" ).click( function() {
	return $( ".gallery-viewMore .25-25-25-25" ).each( function( a ) {
		a > 1 && $( this ).slideToggle( function() {
			$( this ).is( ":hidden" ) ? ( $( ".gallery-viewMore .viewMore" ).first().text( "View More" ), $( ".gallery-viewMore .viewMore span" ).removeClass( "expanded" ).removeClass( "icon-angle-up" ).addClass( "icon-angle-down" ) ) : ( $( ".gallery-viewMore .viewMore" ).first().text( "View Less" ), $( ".gallery-viewMore .viewMore span" ).addClass( "expanded" ).removeClass( "icon-angle-down" ).addClass( "icon-angle-up" ) )
		} )
	} ), !1
} );
var smallBreakPoint = 640,
	mediumBreakPoint = 768;
$( window ).bind( "load", function() {
		$( ".fouc" ).css( {
			visibility: "visible"
		} )
	} ), $( "li.twc-drop-nav" ).mouseenter( function() {
		$( this ).addClass( "js-persist" )
	} ), $( "a.twc-change" ).click( function() {
		$( "li.twc-drop-nav" ).toggleClass( "js-persist" )
	} ),
	function( a ) {
		a.fn.hideshow = function() {
			a( ".hideshow-link" ).click( function() {
				return a( this ).prev( ".hideshow-container" ).is( ":hidden" ) ? ( a( this ).prev( ".hideshow-container" ).show(), htmlText = "View less" ) : ( a( this ).prev( ".hideshow-container" ).hide(), htmlText = "View more" ), a( this ).html( '<a href=""><span>' + htmlText + "</span></a>" ), !1
			} )
		}
	}( jQuery ), $( ".hideshow" ).hideshow(),
	function( a ) {
		a.fn.hideshow = function() {
			a( ".hideshow-link" ).click( function() {
				return a( this ).parent().prev( ".hideshow-container" ).is( ":hidden" ) ? ( a( this ).parent().removeClass( "icon-angle-down" ).addClass( "icon-angle-up" ), a( this ).parent().prev( ".hideshow-container" ).show(), htmlText = "View less" ) : ( a( this ).parent().prev( ".hideshow-container" ).hide(), a( this ).parent().removeClass( "icon-angle-up" ).addClass( "icon-angle-down" ), htmlText = "View more" ), a( this ).html( '<a href=""><span>' + htmlText + "</span></a>" ), !1
			} )
		}
	}( jQuery ), $( ".hideshow" ).hideshow(), $( function() {
		$( ".icon-camera" ).click( function() {
			return $( this ).parent().next().is( ":hidden" ) ? ( $( this ).parent().next().show(), htmlText = "Hide" ) : ( $( this ).parent().next().hide(), htmlText = "Show" ), $( this ).html( '<a analyticsname="test" href="#"><span>' + htmlText + " All</span></a>" ), !1
		} )
	} ),
	function( a ) {
		a.fn.rwdImageMaps = function() {
			var b = this,
				c = function() {
					b.each( function() {
						if ( "undefined" != typeof a( this ).attr( "usemap" ) ) {
							var b = this,
								c = a( b );
							a( "<img />" ).load( function() {
								var b = "width",
									d = "height",
									e = c.attr( b ),
									f = c.attr( d );
								if ( !e || !f ) {
									var g = new Image;
									g.src = c.attr( "src" ), e || ( e = g.width ), f || ( f = g.height )
								}
								var h = c.width() / 100,
									i = c.height() / 100,
									j = c.attr( "usemap" ).replace( "#", "" ),
									k = "coords";
								a( 'map[name="' + j + '"]' ).find( "area" ).each( function() {
									var b = a( this );
									b.data( k ) || b.data( k, b.attr( k ) );
									for ( var c = b.data( k ).split( "," ), d = new Array( c.length ), g = 0; g < d.length; ++g ) d[ g ] = parseInt( g % 2 === 0 ? c[ g ] / e * 100 * h : c[ g ] / f * 100 * i );
									b.attr( k, d.toString() )
								} )
							} ).attr( "src", c.attr( "src" ) )
						}
					} )
				};
			return a( window ).resize( c ).trigger( "resize" ), this
		}
	}( jQuery ), $( function() {
		$( '<option value="">Jump to…</option>' ).appendTo( "#anchor" ), $( ".jumpTo-anchor" ).each( function() {
			$( '<option value="' + $( this ).attr( "id" ) + '">' + $( this ).text() + "</option>" ).appendTo( "#anchor" )
		} ), $( "#anchor" ).change( function() {
			var a = $( "#" + $( this ).val() ).offset();
			$( "html, body" ).animate( {
				scrollTop: a.top
			}, "slow" )
		} )
	} ), $( function() {
		$( ".sideAccordion .expandableHybrid ul li" ).each( function() {
			$( this ).addClass( $( this ).has( "ul" ).length ? "js-expandable" : "js-notexpandable" )
		} ), $( window ).width() > mediumBreakPoint ? ( $( ".leftRail-list .leftRail-topics ul li:first" ).addClass( "js-active" ).addClass( "js-expanded" ), $( ".leftRail-list .topics-content-container" ).css( {
			display: "block"
		} ), $( ".leftRail-list .leftRail-topics ul li:first" ).find( "ul" ).clone().appendTo( "#topic-content" ) ) : $( ".leftRail-list .leftRail-topics ul li:first" ).addClass( "js-active" ).addClass( "js-expanded" ).next().slideDown(), $( ".leftRail-list li.topic:has(ul li.topic)" ).children( "h5" ).addClass( "arrow" ).parent().addClass( "multi" ), $( ".leftRail-list .topic" ).mouseover( function() {
			$( ".leftRail-list .topic" ).removeClass( "onTopic" ), $( this ).addClass( "onTopic" ), $( window ).width() > mediumBreakPoint && ( $( ".leftRail-list .topic" ).removeClass( "js-expanded" ).removeClass( "js-active" ), $( this ).addClass( "js-active" ), $( this ).hasClass( "multi" ) || ( $( ".leftRail-list #topic-content" ).html( "" ).css( {
				display: "block"
			} ), $( this ).find( "ul:first" ).clone().show().appendTo( "#topic-content" ) ) )
		} ), $( ".leftRail-list .leftRail-topics ul li h5" ).click( function() {
			return $( ".leftRail-list .leftRail-topics li.js-active" ).removeClass( "js-active" ), $( this ).parent( "li" ).addClass( "js-active" ), $( this ).parent( "li" ).toggleClass( "js-expanded" ), $( this ).next( "ul" ).slideToggle(), $( window ).width() <= mediumBreakPoint && ( $( this ).parent().siblings().removeClass( "js-expanded" ).children().next().slideUp(), $( this ).parent().hasClass( "js-expanded" ) || $( this ).siblings( "ul" ).children( "li.topic.js-expanded" ).children( "ul" ).slideUp() ), !1
		} ), $( window ).resize( function() {
			adjustContent()
		} )
	} ), $( function() {
		$( ".listAccordion .listAccordionItem-title" ).click( function() {
			return $( this ).parent().find( "div.details" ).slideToggle( function() {
				$( this ).is( ":hidden" ) ? $( this ).parent().children( ".listAccordionItem-title" ).removeClass( "js-active" ) : $( this ).parent().children( ".listAccordionItem-title" ).addClass( "js-active" )
			} ), !1
		} ), $( ".listAccordion .listAccordionItem .cta" ).click( function( a ) {
			a.stopPropagation()
		} )
	} ), $( function() {
		$( "li:first-child" ).addClass( "js-first" ), $( "li:last-child" ).addClass( "js-last" ), $( "input#custLoc" ).data( "checked", !0 ), $( "input[placeholder]" ).placeholder(), $( ".history_back" ).click( function() {
			window.history.back()
		} )
	} ), $( function() {
		$( document ).on( "click", ".modal-button", function() {
			var a = $( this ).attr( "id" );
			return loadPopup( a ), !1
		} ), $( ".modal-next" ).click( function() {
			var a = $( this ).attr( "data-next" ),
				b = a - 1;
			return loadPopup( a, b ), !1
		} ), $( ".modal-prev" ).click( function() {
			var a = $( this ).attr( "data-prev" ),
				b = a - 1 + 2;
			return loadPopup( a, b ), !1
		} ), $( ".modal-close" ).click( function() {
			return disablePopup(), !1
		} ), $( this ).keyup( function( a ) {
			27 === a.which && disablePopup()
		} ), $( ".modal-overlay" ).click( function() {
			return $( ".modal-overlay" ).hasClass( "disable-close" ) ? !1 : ( disablePopup(), !1 )
		} )
	} ), $( function() {
		$( ".twc-mobile-navigation ul li" ).each( function() {
			$( this ).find( "ul" ).length && $( this ).addClass( "js-expandable" )
		} ), $( ".twc-mobile-navigation .js-expandable .smartLink" ).click( function() {
			return $( this ).parent().hasClass( "js-active" ) ? ( $( ".mobile-megamenu" ).slideUp(), $( this ).parent().removeClass( "js-active" ) ) : ( $( ".twc-mobile-navigation ul li .js-expandable" ).removeClass( "js-active" ), $( ".mobile-megamenu" ).slideUp(), $( this ).parent().find( "ul" ).slideDown(), $( this ).parent().addClass( "js-active" ) ), !1
		} ), $( "input[name=navradio]" ).click( function() {
			var a = $( this ).data( "checked" ) || !1;
			$( "input[name=navradio]" ).data( "checked", !1 ), a ? ( this.checked = !1, $( this ).data( "checked", !1 ) ) : ( this.checked = !0, $( this ).data( "checked", !0 ) )
		} ), $( document ).on( {
			touchstart: function( a ) {
				$( a.target ).closest( ".twc-new-nav" ).length || $( ".twc-new-nav .desktop-hidden" ).not( this ).prop( "checked", !1 )
			}
		} ), $( document ).click( function( a ) {
			$( a.target ).closest( ".twc-new-nav" ).length || $( ".twc-new-nav .desktop-hidden" ).not( this ).prop( "checked", !1 )
		} ), $( ".twc-new-nav .mobile-nav" ).on( "change", function() {
			$( ".twc-new-nav .mobile-nav" ).not( this ).prop( "checked", !1 )
		} ), $( window ).resize( function() {
			$( window ).width() > 768 ? $( ".twc-new-nav .labelList .label" ).next( "ul" ).show() : ( $( ".twc-new-nav .labelList .label" ).next( "ul" ).hide(), $( ".js-active" ).next( "ul" ).show() )
		} ), $( ".twc-new-nav .labelList .label" ).click( function() {
			return $( window ).width() <= 768 && ( $( this ).hasClass( "js-active" ) ? $( ".twc-new-navigation .labelList .label" ).removeClass( "js-active" ).next( "ul" ).slideUp() : ( $( ".twc-new-navigation .labelList .label" ).removeClass( "js-active" ).next( "ul" ).slideUp(), $( this ).addClass( "js-active" ).next( "ul" ).slideToggle() ) ), !1
		} ), $( window ).resize( function() {
			$( '[id^="mobile-menu-"]' ).prop( "checked", !1 )
		} )
	} ), $( function() {
		$( ".closeDropdown" ).click( function() {
			return theClick = $( this ).attr( "data-id" ), $( "." + theClick ).slideToggle(), !1
		} ), $( ".hiddenCheckboxLabel" ).click( function() {
			return theClick = $( this ).attr( "data-id" ), $( ".hiddenCheckboxDropdown" ).not( "." + theClick ).slideUp(), $( "." + theClick ).is( ":visible" ), $( "." + theClick ).slideToggle(), !1
		} ), $( ".closeDropdown" ).on( {
			touchstart: function() {
				return theClick = $( this ).attr( "data-id" ), $( "." + theClick ).slideToggle(), !1
			}
		} ), $( ".hiddenCheckboxLabel" ).on( {
			touchstart: function() {
				return theClick = $( this ).attr( "data-id" ), $( ".hiddenCheckboxDropdown" ).not( "." + theClick ).slideUp(), $( "." + theClick ).is( ":visible" ), $( "." + theClick ).slideToggle(), !1
			}
		} )
	} ), $( ".marquee-messages ul li" ).length > 1 && $( ".controls" ).show(), $( ".marquee-messages ul li" ).first().addClass( "js-selected" ).show(), $( ".marquee-messages ul li:gt(0)" ).addClass( "js-opMessages" ), $( "#marquee-right" ).click( function() {
		-1 === $( ".js-selected" ).next().index() ? $( ".marquee-messages ul li" ).removeClass( "js-selected" ).hide().first().addClass( "js-selected" ).fadeIn() : ( $( ".marquee-messages ul li" ).hide(), $( ".js-selected" ).removeClass( "js-selected" ).next().addClass( "js-selected" ).fadeIn() )
	} ), $( "#marquee-left" ).click( function() {
		-1 === $( ".js-selected" ).prev().index() ? $( ".marquee-messages ul li" ).removeClass( "js-selected" ).hide().last().addClass( "js-selected" ).fadeIn() : ( $( ".marquee-messages ul li" ).hide(), $( ".js-selected" ).removeClass( "js-selected" ).prev().addClass( "js-selected" ).fadeIn() )
	} );
var popupBlockerChecker = {
	check: function( a ) {
		var b = this;
		a ? /chrome/.test( navigator.userAgent.toLowerCase() ) ? setTimeout( function() {
			b._is_popup_blocked( b, a )
		}, 200 ) : a.onload = function() {
			b._is_popup_blocked( b, a )
		} : b._displayError()
	},
	_is_popup_blocked: function( a, b ) {
		b.innerHeight > 0 == 0 && a._displayError()
	},
	_displayError: function() {
		alert( "Popup Blocker is enabled! Please add this site to your exception list." )
	}
};
$( function() {
		$( ".rolloverCaptions figure" ).click( function() {
			$( window ).width() <= mediumBreakPoint && 1 == isTouch && ( $( ".rolloverCaptions" ).addClass( "touch" ), $( this ).children( "figcaption" ).is( ":hidden" ) ? ( $( ".rolloverCaptions figure figcaption" ).hide(), $( this ).children( "figcaption" ).show() ) : $( this ).children( "figcaption" ).hide() )
		} )
	} ), isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints ? !0 : !1, $( function() {
		$( ".scrollTo" ).click( function() {
			var a = $( "#" + $( this ).attr( "data-attribute" ) ).offset();
			return $( "html, body" ).animate( {
				scrollTop: a.top
			}, "slow" ), !1
		} ), $( "#scrollToTop" ).click( function() {
			return $( "html, body" ).animate( {
				scrollTop: 0
			}, 1e3 ), !1
		} ), $( "#modalToTop" ).click( function() {
			return $( ".modal-body" ).animate( {
				scrollTop: 0
			}, 1e3 ), !1
		} )
	} ),
	function( a ) {
		a.fn.selectLink = function() {
			a( ".selectLink" ).change( function() {
				a( this ).val().length && ( window.location.href = a( this ).val() )
			} )
		}
	}( jQuery ), $( ".selectLink" ).selectLink(), $( ".cta#email" ).click( function() {
		return $( ".email-module" ).toggle(), !1
	} ), $( ".email-module .close" ).click( function() {
		$( ".email-module" ).toggle()
	} ), $( function() {
		$( ".sideAccordion .expandableHybrid ul li" ).each( function() {
			$( this ).addClass( $( this ).has( "ul" ).length ? "js-expandable" : "js-notexpandable" )
		} ), $( ".sideAccordion li h6" ).click( function() {
			if ( $( this ).next().has( "ul" ).length && !$( this ).hasClass( "onState" ) ) {
				$( ".sideAccordion li" ).removeClass( "liState" ), $( ".sideAccordion h6" ).removeClass( "onState" ), $( this ).addClass( "onState" ), $( ".sideAccordion li h6" ).parent().removeClass( "js-active" ).find( "ul" ).slideUp(), $( this ).parent().hasClass( "mobileLoaded" ) ? $( this ).parent().removeClass( "mobileLoaded" ) : $( this ).parent().addClass( "js-active" ).find( "ul" ).slideDown(), $( this ).next( "ul" ).find( "li.js-first" ).addClass( "liState" ), $( ".sideAccordion .title" ).text( $( this ).next( "ul" ).find( "li.js-first a" ).text() );
				var a = $( this ).next( "ul" ).find( "li.js-first" ).next().html(),
					a = a.replace( "display:none", "display:block" ).replace( "height: 1px", "" ).replace( "overflow: hidden", "" );
				$( ".sideAccordion .cloned-block" ).remove(), $( '<div class="cloned-block">' + a + "</div>" ).appendTo( ".sideAccordion .rightContent" )
			} else $( this ).next().has( "ul" ).length && $( this ).hasClass( "onState" ) && $( this ).parent().addClass( "js-active" ).find( "ul" ).slideToggle()
		} ), $( ".sideAccordion .js-expandable > ul > li" ).click( function() {
			if ( !$( this ).has( "h6" ).length )
				if ( $( ".sideAccordion li" ).removeClass( "liState" ), $( this ).addClass( "liState" ), $( ".sideAccordion .title" ).text( $( this ).text() ), $( window ).width() <= mediumBreakPoint ) $( ".sideAccordion .activeContent" ).hide(), $( this ).next( ".activeContent" ).show();
				else {
					var a = $( this ).next( ".activeContent" ).html();
					$( ".sideAccordion .cloned-block" ).remove(), $( '<div class="cloned-block">' + a.replace( "display:none", "display:block" ) + "</div>" ).appendTo( ".sideAccordion .rightContent" )
				}
			return $( ".sideAccordion .filler" ).height( $( ".sideAccordion .sbs-content" ).height() - $( ".sideAccordion .expandableHybrid" ).height() ), !1
		} ), $( window ).bind( "load", function() {
			resizeAccordion(), $( ".sideAccordion li.js-first" ).find( "ul" ).slideDown(), $( ".sideAccordion .title" ).text( $( ".sideAccordion li.js-first a" ).first().text() ), $( ".sideAccordion li.js-first" ).find( "ul li.js-first" ).addClass( "liState" ), $( window ).width() <= mediumBreakPoint && $( ".sideAccordion li.js-first" ).addClass( "mobileLoaded" ).addClass( "js-active" )
		} ), $( window ).resize( function() {
			resizeAccordion()
		} )
	} ), $( function() {
		$( window ).bind( "load", function() {
			$( ".filters" ).show()
		} ), $( window ).width() > mediumBreakPoint ? $( ".simpleSearch .filter-list" ).slideDown() : ( $( ".searchInput" ).insertBefore( ".left-rail-content" ), $( ".searchInput" ).clone().addClass( "desktop-hidden" ).insertAfter( ".left-content" ) ), $( ".filter-list ul li" ).click( function() {
			return $( this ).hasClass( "icon-remove-sign" ) ? ( $( ".filter-applied" ).hide(), $( this ).removeClass( "twc-icon-before" ).removeClass( "icon-remove-sign" ), $( ".filter-list ul li" ).show() ) : ( $( ".filter-applied" ).show(), $( ".filter-list ul li" ).hide(), $( this ).addClass( "twc-icon-before" ).addClass( "icon-remove-sign" ).show() ), !1
		} ), $( ".remove-filter" ).click( function() {
			return $( ".filter-applied" ).hide(), $( ".filter-list ul li" ).removeClass( "twc-icon-before" ).removeClass( "icon-remove-sign" ).show(), !1
		} ), $( ".filter-toggle" ).click( function() {
			return $( "body" ).find( ".filter-list" ).slideToggle( function() {
				$( this ).is( ":hidden" ) ? $( ".filter-toggle" ).removeClass( "icon-angle-up" ).addClass( "icon-angle-down" ) : $( ".filter-toggle" ).removeClass( "icon-angle-down" ).addClass( "icon-angle-up" )
			} ), !1
		} )
	} ), $.fn.promoSlider = function() {
		$( this ).data( "initialized", !0 );
		var a = this,
			b = $( "ul.carousel-apps", this ),
			c = 400,
			d = $( "ul.carousel-apps > li", this ).size(),
			e = 274.5,
			f = -9.5,
			g = f - e;
		b.css( "width", e * d ), b.css( "left", f ), d > 2 && ( $( ".btnnext", this ).show(), $( ".btnprev", this ).show(), $( "ul.carousel-apps li:first", this ).before( $( "ul.carousel-apps li:last", this ) ), b.css( "left", g ), $( ".btnprev", this ).click( function() {
			if ( !b.is( ":animated" ) ) {
				var d = parseInt( b.css( "left" ) ) + e;
				b.animate( {
					left: d
				}, c, function() {
					$( "ul.carousel-apps li:first", a ).before( $( "ul.carousel-apps li:last", a ) ), b.css( {
						left: g
					} )
				} )
			}
			return !1
		} ), $( ".btnnext", this ).click( function() {
			if ( !b.is( ":animated" ) ) {
				var d = parseInt( b.css( "left" ) ) - e;
				b.animate( {
					left: d
				}, c, function() {
					$( "ul.carousel-apps li:last", a ).after( $( "ul.carousel-apps li:first", a ) ), b.css( {
						left: g
					} )
				} )
			}
			return !1
		} ) )
	}, $( ".promo-slides" ).each( function() {
		$( this ).data( "initialized" ) !== !0 && $( this ).promoSlider()
	} ), $( ".sticky" ).offset() && $( function() {
		var a = $( ".sticky" ).offset().top,
			b = function() {
				var b = $( window ).scrollTop();
				b > a ? $( ".sticky" ).addClass( "js-sticky" ) : $( ".sticky" ).removeClass( "js-sticky" )
			};
		b(), $( window ).scroll( function() {
			b()
		} )
	} ), $( ".stickyElement" )[ 0 ] && ( $.fn.is_on_screen = function() {
		var a = $( window ),
			b = $( ".sticky" ).height(),
			c = {
				top: a.scrollTop() + b,
				left: a.scrollLeft()
			},
			d = this.offset();
		return c.right = c.left + a.width(), c.bottom = c.top + a.height(), c.height = a.height() - b, d.right = d.left + this.outerWidth(), d.bottom = d.top + this.outerHeight(), !( c.right < d.left || c.left > d.right || c.bottom < d.top || c.top > d.bottom )
	}, $( window ).scroll( function() {
		$( ".sticky" ).length > 0 && ( $( ".stickyElement" ).is_on_screen() ? $( ".sticky" ).removeClass( "js-sticky-past" ) : $( ".sticky" ).addClass( "js-sticky-past" ) )
	} ) ), $( document ).ready( function() {
		var a = $( ".stickyElement" ).width();
		$( window ).width() < 1059 && $( window ).width() > 768 && $( ".sticky" ).css( {
			width: a + "px"
		} )
	} ), $( window ).resize( function() {
		var a = $( ".sticky" ).next( ".stickyElement" ).width();
		$( ".sticky" ).css( $( window ).width() < 1059 && $( window ).width() > 768 ? {
			width: a + "px"
		} : {
			width: "100%"
		} )
	} ), $( document ).ready( function() {
		var a = $( ".sticky" ).outerHeight();
		$( ".stickySpacing" ).height( a ), $( ".scrollTop" ).click( function() {
			return $( "html, body" ).animate( {
				scrollTop: 0
			}, 600 ), !1
		} )
	} ), $( window ).bind( "load", function() {
		function b() {
			$( ".checkboxTables" ).show(), $( window ).width() <= smallBreakPoint ? ( $( ".cloned-button" ).show(), $( ".desktop" ).hide(), $( ".mobile" ).show() ) : ( $( ".cloned-button" ).hide(), $( ".desktop" ).show(), $( ".mobile" ).hide() )
		}
		$( ".checkboxTables" ).addClass( "desktop" );
		var c = $( '<table class="checkboxTables mobile"></table>' ),
			d = $( "<tbody></tbody>" ).appendTo( c );
		for ( $( ".desktop tbody tr" ).each( function( a ) {
				a += 1, $( this ).children( "td" ).each( function( b ) {
					if ( $( this ).hasClass( "row-title" ) ) $( this ).addClass( "rt_" + a );
					else {
						var b = b + 1;
						$( this ).addClass( "td_" + a + "-" + b )
					}
				} )
			} ), $( ".desktop thead tr th span.h5" ).each( function( a ) {
				var a = a + 2;
				$( this ).attr( "id", "th_" + a )
			} ), i = 2; 7 >= i; i++ ) {
			var e = $( '<tr class="column-title"><td colspan="2"><span class="h5">' + $( "#th_" + i ).html() + "</span></td></tr>" ).appendTo( d );
			for ( a = 1; 5 >= a; a++ ) {
				{
					var e = $( '<tr class="row-title"></tr>' ).appendTo( d );
					$( "<td>" + $( ".rt_" + a ).html() + "</td>" ).appendTo( e )
				}
				$( "<td>" + $( ".td_" + a + "-" + i ).html() + "</td>" ).appendTo( e )
			}
			c.append( e )
		}
		$( c ).hide().insertAfter( ".desktop" ), $( ".desktop thead tr th" ).find( "div" ).first().clone().hide().addClass( "cloned-button" ).appendTo( ".column-title td" ), b(), $( window ).bind( "resize", function() {
			b()
		} )
	} ), $( function() {
		tabCount = 1, $( ".tab-component" ).each( function() {
			$( this ).addClass( "onState_" + tabCount ), tabCount++
		} ), buildAccordion(), $( "[class*=onState_] .tabs li" ).click( function() {
			var a = $( this ).find( "a" ).attr( "data-ref" ),
				b = $( this ).parent().parent().parent().attr( "class" ),
				c = b.split( " " ),
				d = c.pop();
			return $( "." + d + " .tabs li" ).removeClass( "js-active" ), $( this ).addClass( "js-active" ), $( window ).width() > mediumBreakPoint ? ( $( "." + d + " .tab-content" ).hide(), $( "." + d + " " + a ).show() ) : ( $( "." + d + " .tab-content" ).slideUp(), $( this ).next().slideDown() ), !1
		} ), $( window ).resize( function() {
			adjustContent()
		} )
	} ), $( window ).width() < 1099 ? $( ".tileList li" ).addClass( "js-mobile" ) : $( ".tileList li" ).hover( function() {
		$( this ).next().toggleClass( "js-nextHover" )
	} ), $( function() {
		$( window ).width() <= mediumBreakPoint && $( ".tooltip-text" ).css( "display", "none" ), $( ".tooltip" ).click( function() {
			return $( window ).width() <= mediumBreakPoint && ( $( this ).find( ".tooltip-text" ).is( ":hidden" ) ? ( $( ".tooltip-text" ).hide(), $( this ).find( ".tooltip-text" ).show(), setTimeout( function() {
				$( ".tooltip-text" ).hide()
			}, 3e3 ) ) : $( this ).find( ".tooltip-text" ).hide() ), !1
		} )
	} );
var ellipsestext = "...",
	moretext = "Read More",
	lesstext = "Read Less";
$( window ).bind( "load", function() {
	$( "[class^=truncate]" ).show()
} ), $( "[class^=truncate]" ).children().each( function( a ) {
	var b = $( this ).html(),
		c = $( this ).parent().attr( "class" ).split( "-" ),
		d = $( this ).parent().attr( "class" ).split( "-" ).pop();
	if ( Number( d ) ) var a = d;
	else var a = 300;
	if ( b.length > a ) {
		var e = b.substr( 0, a ),
			f = b.substr( a, b.length - a );
		if ( 1 == c.indexOf( "readMore" ) ) var g = e + '<span class="moreelipses">' + ellipsestext + '</span>&nbsp;<span class="morecontent"><span>' + f + '</span>&nbsp;<a href="" class="morelink">' + moretext + "</a></span>";
		else var g = e + '<span class="moreelipses">' + ellipsestext + "</span>";
		$( this ).html( g )
	}
} ), $( document ).on( "click", ".morelink", function() {
	return $( this ).hasClass( "less" ) ? ( $( this ).removeClass( "less" ), $( this ).html( moretext ) ) : ( $( this ).addClass( "less" ), $( this ).html( lesstext ) ), $( this ).parent().prev().toggle(), $( this ).prev().toggle(), !1
} );
var windowTimer = null;
textToCopy(), resizeText(), $( window ).resize( function() {
	windowTimer && clearTimeout( windowTimer ), windowTimer = setTimeout( resizeText, 50 )
} );
var Twc = Twc || {};
Twc.Tooltip = function() {
	function a( a ) {
		window.clearTimeout( a )
	}

	function b() {
		$( "." + e ).hide()
	}

	function c( a ) {
		try {
			console.error( a )
		} catch ( b ) {}
	}
	var d = "js-tooltip-initialized",
		e = "tooltip-popup",
		f = $( '<style type="text/css" title="js-tooltips"></style>' ),
		g = ".tooltip-popup.top .tooltip-content:before, .tooltip-popup.top .tooltip-wrap:before, .tooltip-popup.top .tooltip-wrap:after, .tooltip-popup.bottom .tooltip-content:before, .tooltip-popup.bottom .tooltip-wrap:before, .tooltip-popup.bottom .tooltip-wrap:after";
	return {
		init: function( h ) {
			try {
				if ( "undefined" == typeof h || !( h instanceof jQuery ) ) return;
				var i = $( window );
				$( "head" ).append( f ), h.each( function() {
					function c() {
						n = window.setTimeout( function() {
							s.stop( !0, !0 ).fadeOut( 1200, function() {
								h()
							} )
						}, 500 )
					}

					function h() {
						s.hide(), o = !1
					}

					function j( a ) {
						try {
							return "undefined" != typeof a ? $.parseJSON( a ) : {}
						} catch ( b ) {
							return {}
						}
					}

					function k() {
						s.stop( !0, !0 ), b(), s.css( "opacity", 1 );
						var a = {
								height: i.height(),
								width: i.width(),
								scrollTop: $( window ).scrollTop(),
								yBottom: i.height + $( "html" ).scrollTop()
							},
							c = {};
						c.h = l.outerHeight( !0 ), c.w = l.outerWidth( !0 ), c.top = l.offset().top, c.left = l.offset().left;
						var d = {};
						d.h = s.outerHeight( !0 ), d.w = s.outerWidth( !0 );
						var e = i.height() + i.scrollTop(),
							h = c.top + c.h + d.h;
						d.top = h >= e ? c.top - d.h : c.top + c.h, s.removeClass( "top bottom" ).addClass( h >= e ? "bottom" : "top" );
						var j = c.left - ( d.w / 2 - c.w / 2 ),
							k = j + d.w;
						if ( d.w > a.width || 0 > j ) {
							var m = c.left + c.w / 2;
							f.html( g + " {left: " + m + "px;}" ), j = 0
						} else if ( k > a.width ) {
							j = a.width - d.w;
							var m = c.left + c.w / 2 - j;
							f.html( g + " {left: " + m + "px;}" ), j += "px"
						} else f.empty();
						s.css( {
							position: "absolute",
							top: d.top,
							left: j
						} ), s.fadeIn( 200, function() {
							$( this ).hover()
						} ), o = !0
					}
					var l = $( this );
					if ( l.hasClass( d ) ) return !0;
					var m = j( l.attr( "data-tooltip" ) );
					if ( "undefined" == typeof m.body ) return !0;
					var n, o = !1,
						p = m.heading ? "<header>" + unescape( m.heading ) + "</header>" : "",
						q = unescape( m.body ) || "",
						r = !1,
						s = $( '<div class="' + e + ' top"><div class="tooltip-content"><div class="tooltip-wrap">' + p + q + "</div></div></div>" ).on( "mouseover", function() {
							a( n )
						} ).on( "mouseout", function() {
							c()
						} ).click( function( a ) {
							a.stopPropagation()
						} );
					s.find( ".close" ).click( function( a ) {
						a.preventDefault(), h()
					} ), l.click( function( a ) {
						return a.stopPropagation(), !1
					} ).on( "click mouseover", function() {
						a( n ), o || ( r ? k() : ( $( "body" ).append( s.css( "opacity", 0 ).show() ), r = !0, window.setTimeout( function() {
							k()
						}, 0 ) ) )
					} ).on( "mouseout", function() {
						c()
					} ), l.addClass( d )
				} )
			} catch ( j ) {
				console && console.group( j.name + ": " + j.message ), c( j ), c( j.stack ), console && console.groupEnd()
			}
		}
	}
}(), $( function() {
	$( window ).width() > mediumBreakPoint && $( ".columnControl" ).each( function() {
		if ( $( this ).has( "vertical-center" ) ) {
			var a = $( this ).height();
			$( this ).find( ".vertical-center-wrapper" ).css( {
				height: a + "px"
			} )
		}
	} ), $( window ).resize( function() {
		$( ".columnControl" ).each( function() {
			if ( $( window ).width() > mediumBreakPoint ) {
				var a = $( this ).height();
				$( this ).find( ".vertical-center-wrapper" ).css( {
					height: a + "px"
				} )
			} else $( this ).find( ".vertical-center-wrapper" ).css( {
				height: "auto"
			} )
		} )
	} )
} ), $( "video" ).bind( "play", function() {
	activated = this, $( "video" ).each( function() {
		this != activated && this.pause()
	} )
} ), $( function() {
	function a() {
		$( window ).width() <= smallBreakPoint ? ( $( "li.heading h5" ).addClass( "mobile" ).addClass( "expanded" ), $( ".content" ).hide() ) : ( $( ".content" ).show(), $( "li.heading h5" ).removeClass( "mobile" ).removeClass( "expanded" ) )
	}
	a(), $( window ).resize( function() {
		a()
	} ), $( document ).on( "click", ".mobile", function() {
		$( this ).toggleClass( "expanded" ), $( this ).parent().children( "ul" ).slideToggle()
	} )
} );