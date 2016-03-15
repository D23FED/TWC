/* ==========================================================================
    Prototype Tools -- Version: 1.9.0.2 - Updated: 1/20/2014
   ========================================================================== */

// For DEMO site only - DO NOT EVER INGEST THESE !!

//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

function getPageLoadTime() {
    //calculate the current time in afterload
    var afterload = (new Date()).getTime();
    // now use the beforeload and afterload to calculate the seconds
    var seconds = (afterload - beforeload) / 1000;
    // Place the seconds in the innerHTML to show the results
    $('.loadtime').text( + seconds + ' sec');
}
window.onload = getPageLoadTime;

// Toggle between print view and web view
$('#toggleMedia').click(function() {
    var currCSS = document.getElementById('printCSS');
    if ($.trim($(this).text()) === 'print view') {
        $(this).text('web view');
    } else {
        $(this).text('print view');
    }
    if (currCSS.media == 'all') {
        currCSS.media = 'print';
    } else {
        currCSS.media = 'all';
    }
    return false;
});

// Add a 'fold' line to prototype in mobile only
var overlay = jQuery('<div class="fold"> </div>');
$(window).resize(function() {
    overlay.appendTo(document.body);
}).resize();

// Calculate the viewport size on prototype site
$(window).resize(function() {
    $('.viewport').empty().append($(window).width(), "x", $(window).height());
}).resize();
/* ==========================================================================
    ComponentName -- Version: 1.9.0.2 - Updated: 3/21/2014
   ========================================================================== */

(function($) {

  $.fn.componentName = function() {

  }

}(jQuery));

$('.componentName').componentName();
/* ==========================================================================
    Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$('.accordion .expandable ul li').each(function() {
	if ($(this).has('ul').length) {
		$(this).addClass('js-expandable');
	} else {
		$(this).addClass('js-notexpandable');
	}
	//check for expand cookie and slideDown() active
	if ($.cookie('js-expand') && $(this).find('.expandable h6').text() === $.cookie('js-expand')) {
		$(this).find('ul').slideDown();
	}
});
//open first nav item if no cookie exists
if (!$.cookie('js-expand')) {
	$('.accordion .expandable ul .js-expandable').first().addClass('js-active').find('ul').slideDown();
}
$('.accordion .expandable h6').click(function() {
	var categoryText = $(this).text();
	$(this).parent().addClass('js-active').find('ul').slideToggle(function() {
		$.cookie('js-expand', categoryText);
		if ($(this).is(':hidden')) {
			$(this).parent().removeClass('js-active');
			$.cookie('js-expand', null);
		}
	});
});
/* ==========================================================================
    Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$('.accordionHybrid .expandableHybrid ul li').each(function() {
	if ($(this).has('ul').length){
		$(this).addClass('js-expandableHybrid');
	} else if($(this).next().hasClass('activeContent')){
		$(this).addClass('js-expandableHybridSub');
	} else {
		$(this).addClass('js-notexpandableHybrid');
	}
	//check for expand cookie and slideDown() active
	if ($.cookie('js-expandHybrid') && $(this).find('.js-expandableHybrid h6').text() === $.cookie('js-expandHybrid')) {
		if($(window).width() < 768){
			$('.js-expandableHybrid .activeContent').show();
		} else {
			$('.js-expandableHybrid .activeContent').hide();
		}
		$(this).find('ul').slideDown();
	}
});

//open first nav item if no cookie exists
if (!$.cookie('js-expandHybrid')) {
	$('.accordionHybrid .expandableHybrid ul .js-expandableHybrid').first().addClass('js-active').find('ul').slideDown();
} else {
	$('.accordionHybrid .js-active').find('ul').slideDown(function(){
	});
}

$('.accordionHybrid li.js-expandableHybrid h6').click(function() {
	var categoryText = $(this).text();
	$('.accordionHybrid .activeContent').hide();
	$(this).parent().addClass('js-active').find('ul').slideToggle(function() {
		$.cookie('js-expandHybrid', categoryText);
		if ($(this).is(':hidden')) {
			$(this).parent().removeClass('js-active');
			$.cookie('js-expandHybrid', null);
		}
	});
});

$('.accordionHybrid li.js-expandableHybridSub').click(function() {
	if($(window).width() < 768){
		var categoryText = $(this).text();
		$(this).next('.activeContent').slideToggle(function(){
			if($(this).is(":hidden")){
				$('.accordionHybrid .activeContent').hide();
			} else {
				$('.accordionHybrid .activeContent').show();
			}
		});
	}

	return false;
});
/* ==========================================================================
    Adjust Topic Height -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
function adjustTopicHeight() {
	var topicHeight = $('#topics-container').height();
	$('#topics').css({
		'height': topicHeight
	});
}
var windowTimer = null;
if ($(window).width() >= mediumBreakPoint) {
	adjustTopicHeight();
}
$(window).bind('resize', function() {
	if ($(window).width() >= mediumBreakPoint) {
		if (windowTimer) clearTimeout(windowTimer);
		windowTimer = setTimeout(adjustTopicHeight, 150);
	} else {
		$('#topics').css({
			'height': 'auto'
		});
	}
});
/* ==========================================================================
    Alerts -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
$('.twc-alert .twc-alert-text:first').prepend('<a class="twc-icon twc-alert-close twc-show_hide" href="" style=""></a>');
$('.twc-show_hide').click(function(e) {
	$(this).parent().slideToggle();
	e.preventDefault();
});
/* ==========================================================================
    Button Checkbox -- Version: 1.9.0.1 - Updated: 2/4/2014
   ========================================================================== */
$(function() {
	// Determine if input is already 'checked' on page load/reload
	$('label').filter(function() {
		return $(this).find('input').is(':checked');
	}).addClass('js-checked');
	$('input').click(function() {
		$('input:not(:checked)').parent('label').removeClass("js-checked");
		$('input:checked').parent('label').addClass("js-checked");
	});
});
/* ==========================================================================
    Chat -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function() {
	// Chat UI
	// Listen for which radio button is selected, then do a thing
	$('#ccPreCheck form#newExisting input[type=radio]').on('change', function() {
		// Show Start Chat button
		$('#ccStartChatButton').show();
		// Hide language link & show transcipt link
		$('.chatUI-.bottom .language').hide();
		$('.chatUI-.bottom .show_transcript').show();
		if ($('#new').is(':checked')) {
			$('#ccPreCheck').hide();
			$('#ccPreSurvey').show();
		} else {
			$('#ccPreCheck').hide();
			$('#ccPreSurvey').show();
			$('.telephoneInput').show();
			$('.chatUI-.footnote').show();
		}
	});
	$('#ccStartChatButton').click(function() {
		$('#ccPreSurvey').hide();
		$('.chatUI-.bottom').hide();
		$('.chatUI-.footnote').hide();
		$("#hidewindow").show();
		$("#ChatDisplay").show();
		$('#ccContainer').show();
		$('.chatUI-.conversation').show();
		$.cookie('chatEnabled', 'true');
	});

	$('#ccRemoteControl button').click(function() {
		$('#ccRCEnable').toggle();
		$('#ccRCDisable').toggle();
	});

	$('#transcript').click(function() {
		$('.chatUI-.bottom').addClass('active');
		$('.chatUI-.transcript').show();
		$('.chatUI-.footnote').show();
		return false;
	});

	$('#hide_transcript').click(function() {
		$('.chatUI-.transcript').hide();
		$('.chatUI-.bottom').removeClass('active');
		return false;
	});

	$('#hidewindow').click(function() {
		if($.cookie('chatEnabled')) {
			$('.darkOverlay').show();
			$('#ccCloseConfirm').show();
			$.removeCookie('chatEnabled');
		} else {
			window.self.close();
		}
	});

	$('#ccExitChat').click(function() {
		$('#ccCloseConfirm').hide();
		$('#ccChatOutput').hide();
		$('.darkOverlay').hide();
		$('.chatUI-.conversation').hide();
		$('.chatUI-.surveyEnd').show();
		$('#ccPostSurvey').show();
	});

	$('#ccCancelExit').click(function() {
		$('#ccCloseConfirm').hide();
		$('.darkOverlay').hide();
		$.cookie('chatEnabled', 'true');
	});

	$('.chat').click(function(){
		popitup('/TWC/bc/core/includes/popUp');
	});
});

function popitup(url) {
	newwindow=window.open(url,'name','height=700,width=350,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
	return false;
}

function submitSurvey(){
	window.self.close();
}

function cancelSurvey(){
	window.self.close();
}
(function($) {
    $.fn.extend( {
        checkboxMax: function() {
        	$('[class*=max-]').click(function(){
        		classNames = $(this).attr('class').split().pop();
        		limit = classNames.split('-').pop();

        		if($(this).closest('ul').find('[class*=max-]:checked').length == limit){
        			$(this).closest('ul').find('[class*=max-]:not(:checked)').attr('disabled','disabled');
        		} else {
        			$(this).closest('ul').find('[class*=max-]:not(:checked)').removeAttr('disabled').attr('enabled','enabled');
        		}
        	});
        }
    });
})(jQuery);

(function($) {
    $.fn.extend( {
        checkboxMin: function() {
        	$('#validateMin').click(function(){
        		$('[class*=min-]').each(function(index){
        			allClasses = $(this).attr('class');
        			classNames = $(this).attr('class').split().pop();
        			limit = classNames.split('-').pop();

        			if($(this).find('input:checked').length >= limit){
        				$(this).removeClass('checkbox-alert');
        			} else {
        				$(this).removeClass().addClass('checkbox-alert '+allClasses);
        			}
        		});

        		return false;
        	});
        }
    });
})(jQuery);
/* ==========================================================================
    Close Window -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
$(document).on('click', 'body', function() {
	$('.js-openWindow').hide();
});
/* ==========================================================================
    Channel Line Up -- Version: 1.0.0.0 - Updated: 3/6/2014
   ========================================================================== */
 $(function(){
    $('.clu .viewMore').click(function() {
      if ($(this).html() == "<span>See More Channels</span>") {
        $(this).html("<span>See Less Channels</span>");
        $('.clu table tbody').css({'max-height':'100%'});
      } else {
        $(this).html("<span>See More Channels</span>");
        $('.clu table tbody').css({'max-height':'350px'});
      }

      return false;
    });
  });
// Page Specific JS Functions

$(function() {
    if(isIE(8)){
        $(window).bind("load", function() {
            $('[class^=column-count] > ul').each(function(){
                var splitClass = $(this).attr('class').split('-').pop();
                $(this).columnize({ columns: splitClass }).show();
            });

            $('.no-csscolumns').css({'visibility':'visible'});
        });
    }
});

function isIE( version, comparison ){
    var $div = $('<div style="display:none;"/>').appendTo($('body'));
    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
    var ieTest = $div.find('a').length;
    $div.remove();
    return ieTest;
}
/* ==========================================================================
    CompEritTable -- Version: 1.9.0.4 - Updated: 3/3/2014
   ========================================================================== */

$(function(){
	$(window).bind("load", function(){
		adjustSize();
		adjustSettings();
	});

	$(window).resize(function(){
		adjustSize();

		if($(window).width() >= smallBreakPoint){
			$('.compEritTable .package').find('span').hide();
			$('.compEritTable .desc-details').hide();
			$('.compEritTable .tempBadge').hide();
		} else {
			$('.compEritTable .package').find('span').show();
			$('.compEritTable .desc-details').show();
			$('.compEritTable .tempBadge').show();
		}
	});

	$('.compEritTable .viewDetail').click(function(){
		$(this).closest('.compEritTable').toggleClass('js-active');

		if($(window).width() <= smallBreakPoint){
			$('.compEritTable .desc-details').show();
			$(this).closest('.table').next('.details-content').slideToggle();
		} else {
			$('.compEritTable .desc-details').hide();
			$(this).closest('.table').next('.details-content').slideToggle();
		}
		return false;
	});
});

function adjustSettings(){
	$('.compEritTable ul.table').each(function(){
		$('<span>'+$(this).find('.feature').text()+'</span>').appendTo($(this).find('.package'));
		$('<li class="desc-details h6">'+$(this).find('.desc').text()+'</li>').prependTo($(this).next('ul'));
		$('<span class="tempBadge">'+$(this).find('.badge').html()+'</span>').prependTo($(this).next('ul'));
	});
}

function adjustSize(){
	if($(window).width() <= mediumBreakPoint){
		$('.compEritTable.five-column-compare .feature').height($('.compEritTable.five-column-compare .package').height());
		$('.compEritTable.five-column-compare .order').height($('.compEritTable.five-column-compare .pricing').height());
		$('.compEritTable.three-column-compare .desc').height($('.compEritTable.three-column-compare .package').height());
	} else {
		$('.compEritTable.five-column-compare .feature').attr('style','');
		$('.compEritTable.five-column-compare .order').attr('style','');
		$('.compEritTable.three-column-compare .desc').attr('style','');
	}
}
$(function(){
	adjustSettings();

	$('.compareTable .viewDetail').click(function(){
		if($(window).width() <= smallBreakPoint){
			$('.compareTable .desc-details').show();
			$(this).closest('.table').next('.details-content').slideToggle();
		} else {
			$('.compareTable .desc-details').hide();
			$(this).closest('.table').next('.details-content').slideToggle();
		}

		$(this).toggleClass('active');

		return false;
	});

	$('.compareTable .viewMore').click(function() {
		$(this).find('div.desc-details').slideToggle(function() {
			if ($(this).is(':hidden')) {
				$(this).parent().removeClass('js-active');
			} else {
				$(this).parent().addClass('js-active');
			}
		});
	});

	$(window).resize(function(){
		if($(window).width() >= smallBreakPoint){
			$('.compareTable .package').find('span').hide();
			$('.compareTable .desc-details').hide();
			$('.compareTable .tempBadge').hide();
		} else {
			$('.compareTable .package').find('span').show();
			$('.compareTable .desc-details').show();
			$('.compareTable .tempBadge').show();
		}
	});
});

function adjustSettings(){
	$('.compareTable ul.table').each(function(){
		$('<span>'+$(this).find('.feature').text()+'</span>').appendTo($(this).find('.package')).hide();
		$('<li class="desc-details h6">'+$(this).find('.desc').text()+'</li>').prependTo($(this).next('ul')).hide();
		$('<span class="tempBadge">'+$(this).find('.badge').html()+'</span>').prependTo($(this).next('ul')).hide();
	});
}
/* ==========================================================================
    Feedback Survey -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
 $(function(){
	$("#feedback-survey-feedback").click(function() {
		if ($('#feedback-yes').is(':checked')) {
			$('.initiate-feedback').hide();
			$('.feedback-survey-yes-response').show();
		} else {
			$('.improve-feedback').show();
			$('#feedback-survey-feedback:first').hide();
		}
		return false;
	});
	$('input[name="YesNo"]').click(function() {
		$('#feedback-survey-feedback').removeClass('disabled').addClass('js-omega');
	});
	$('#improve-feedback-survey-feedback').click(function() {
		$('.initiate-feedback').hide(); /* Honeypot validation */
		if ($('#fillit input').val() === '') {
			$('.improve-feedback').hide();
			$('.feedback-survey-no-response').show();
		} else {}
		return false;
	});
 });
(function($) {
    $.fn.extend( {
        limiter: function(limit) {
            $(this).on("keyup focusout", function() {
                setCount(this);
            });

            function setCount(src) {
                var chars = src.value.length;

                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;

                    $(src).addClass('max-input');

                    var delay = setTimeout(function(){
                            $(src).removeClass('max-input');
                        }, 1500);
                } else {
                	$(src).removeClass('max-input');
               	}
            }

            setCount($(this)[0]);
        }
    });
})(jQuery);
/* ==========================================================================
    Flyout -- Version: 1.9.0.0 - Updated: 1/31/2014
   ========================================================================== */
$(function(){
	$('.flyoutCTA').each(function(index){
		$(this).attr('id','flyoutCTA'+index);
	});

	$('[id^="flyoutCTA"]').click(function(){
		$(this).next().addClass('js-openWindow').toggle();
    $(this).toggleClass('icon-angle-down').toggleClass('icon-angle-up');
		return false;
	});
});
/* ==========================================================================
    Footer(mobile) Toggle -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
$('div[class*="twc-col3_333333-c"]').each(function() {
	var dropdown = $(this);
	$('h3.label', dropdown).click(function() {
		var label = $(this);
		$(label).toggleClass('js-current');
		$('h3.label').not(label).removeClass('js-current');
		var menu = $('ul', dropdown);
		$('ul').not(menu).removeClass('js-mobile');
		menu.toggleClass('js-mobile');
	});
});
$(function(){
	$('.formValidate form').parsley();
	$('.formValidate input[name="zip2"]').autotab();

var LabelCounter = 0;

function parseCharCounts()
{
	//Get Everything...
	var elements = document.getElementsByTagName('textarea');
	var element = null;
	var maxlength = 9;
	var newlabel = null;

	for(var i=0; i < elements.length; i++)
	{
		element = elements[i];

		if(element.getAttribute('maxlength') != null && element.getAttribute('limiterid') == null)
		{
			maxlength = element.getAttribute('maxlength');

			//Create new label
			newlabel = document.createElement('label');
			newlabel.id = 'limitlbl_' + LabelCounter;
			newlabel.style.color = 'red';
			newlabel.style.display = 'block'; //Make it block so it sits nicely.
			newlabel.innerHTML = "Updating...";

			//Attach limiter to our textarea
			element.setAttribute('limiterid', newlabel.id);
			element.onkeyup = function(){ displayCharCounts(this); };

			//Append element
			element.parentNode.insertBefore(newlabel, element.firstChild);

			//Force the update now!
			displayCharCounts(element);
		}

		//Push up the number
		LabelCounter++;
	}
}

function displayCharCounts(element)
{
	var limitLabel = document.getElementById(element.getAttribute('limiterid'));
	var maxlength = element.getAttribute('maxlength');
	var enforceLength = false;
	if(element.getAttribute('lengthcut') != null && element.getAttribute('lengthcut').toLowerCase() == 'true')
	{
		enforceLength = true;
	}

	//Replace \r\n with \n then replace \n with \r\n
	//Can't replace \n with \r\n directly because \r\n will be come \r\r\n

	//We do this because different browsers and servers handle new lines differently.
	//Internet Explorer and Opera say a new line is \r\n
	//Firefox and Safari say a new line is just a \n
	//ASP.NET seems to convert any plain \n characters to \r\n, which leads to counting issues
	var value = element.value.replace(/\u000d\u000a/g,'\u000a').replace(/\u000a/g,'\u000d\u000a');
	var currentLength = value.length;
	var remaining = 0;

	if(maxlength == null || limitLabel == null)
	{
		return false;
	}
	remaining = maxlength - currentLength;

	if(remaining >= 0)
	{
		limitLabel.style.color = 'black';
		limitLabel.innerHTML = remaining + ' character';
		if(remaining != 1)
			limitLabel.innerHTML += 's';
		limitLabel.innerHTML += ' remaining';
	}
}

//Go find our textareas with maxlengths and handle them when we load!
parseCharCounts();

});
	$('.gallery-viewMore .icon-camera').click(function(){
		if($(this).hasClass('hide-all')){
			$(this).removeClass('hide-all');
			$('figure').show();
			htmlText = 'Hide';
		} else {
			$(this).addClass('hide-all');
			$('figure').hide();
			htmlText = 'Show';
		}

		$(this).html('<a analyticsname="test" href="#"><span>'+htmlText+' All</span></a>');
		return false;
	});

	var contentLen = $('.gallery-viewMore .25-25-25-25').length;

	if(contentLen < 2){
		$('.gallery-viewMore .viewMore').hide();
	}

	$('.gallery-viewMore .25-25-25-25').each(function(i){
		if(i > 2){
			$(this).css({'display':'none'});
		}
	});

	$('.gallery-viewMore .viewMore').click(function(){
		$('.gallery-viewMore .25-25-25-25').each(function(i){
			if(i > 1){
				$(this).slideToggle(function(){
					if($(this).is(':hidden')){
						$('.gallery-viewMore .viewMore').first().text('View More');
						$('.gallery-viewMore .viewMore span').removeClass('expanded').removeClass('icon-angle-up').addClass('icon-angle-down');
					} else {
						$('.gallery-viewMore .viewMore').first().text('View Less');
						$('.gallery-viewMore .viewMore span').addClass('expanded').removeClass('icon-angle-down').addClass('icon-angle-up');
					}
				});
			}
		});
		return false;
	});

var smallBreakPoint = 640;
var mediumBreakPoint = 768;

$(window).bind("load", function(){
	$('.fouc').css({'visibility':'visible'});
});
/* ==========================================================================
    Header -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
$('li.twc-drop-nav').mouseenter(function() {
	$(this).addClass('js-persist');
});
$('a.twc-change').click(function() {
	$('li.twc-drop-nav').toggleClass('js-persist');
});
/* ==========================================================================
    Hide / Show -- Version: 1.9.0.2 - Updated: 3/21/2014
    ========================================================================== */

(function($) {

  $.fn.hideshow = function() {
    $('.hideshow-link').click(function(){
      if($(this).prev('.hideshow-container').is(':hidden')){
        $(this).prev('.hideshow-container').show();
        htmlText = 'View less';
      } else {
        $(this).prev('.hideshow-container').hide();
        htmlText = 'View more';
      }

      $(this).html('<a href=""><span>'+htmlText+'</span></a>');
      return false;
    });
  }

}(jQuery));

$('.hideshow').hideshow();
/* ==========================================================================
    Hide / Show -- Version: 1.9.0.2 - Updated: 3/21/2014
    ========================================================================== */

(function($) {

  $.fn.hideshow = function() {
    $('.hideshow-link').click(function(){
      if($(this).parent().prev('.hideshow-container').is(':hidden')){
        $(this).parent().removeClass('icon-angle-down').addClass('icon-angle-up');
        $(this).parent().prev('.hideshow-container').show();
        htmlText = 'View less';
      } else {
        $(this).parent().prev('.hideshow-container').hide();
        $(this).parent().removeClass('icon-angle-up').addClass('icon-angle-down');
        htmlText = 'View more';
      }

      $(this).html('<a href=""><span>'+htmlText+'</span></a>');
      return false;
    });
  }

}(jQuery));

$('.hideshow').hideshow();
/* ==========================================================================
    Images - Hide/Show -- Version: 1.9.0.0 - Updated: 3/5/2014
   ========================================================================== */

$(function(){
	$('.icon-camera').click(function(){
		if($(this).parent().next().is(':hidden')){
	      $(this).parent().next().show();
	      htmlText = 'Hide';
	    } else {
	      $(this).parent().next().hide();
	      htmlText = 'Show';
	    }

		$(this).html('<a analyticsname="test" href="#"><span>'+htmlText+' All</span></a>');
		return false;
	});
});
// (function($) {
//     $.fn.extend( {
//         importMessages: function(form) {
//         	var page = location.href;
//             if(page.indexOf('forms') != -1){
// 	            $.ajax({
// 					url: 'includes/validate-messages.txt',
// 				  	success: function(data){
// 				  		$($.parseJSON(data)).each(function() {
// 					    	// loop messages targeted to formfield IDs
// 					    	$('body').find('#'+this.id).next('span').attr('title',this.message);
// 						});
// 				  	},
// 				  	error: function(data){
// 				    	alert('File Does Not Exists!');
// 				  	}
// 				});
// 	        }
//         }
//     });
// })(jQuery);
$(function(){
	$('<option value="">Jump to…</option>').appendTo('#anchor');
	$('.jumpTo-anchor').each(function(index){
		$('<option value="'+$(this).attr('id')+'">'+$(this).text()+'</option>').appendTo('#anchor');
	});

	$('#anchor').change(function(){
		var divPosition = $('#'+$(this).val()).offset();
		$('html, body').animate({scrollTop: divPosition.top}, "slow");
	});
});
/* ==========================================================================
    Left Rail List to Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function() {
	$('.sideAccordion .expandableHybrid ul li').each(function() {
		if ($(this).has('ul').length) {
		$(this).addClass('js-expandable');
		} else {
			$(this).addClass('js-notexpandable');
		}
	});

	if($(window).width() > smallBreakPoint){
		$('.leftRail-list .leftRail-topics ul li:first').addClass('js-active').addClass('js-expanded');
		$('.leftRail-list .topics-content-container').css({'display':'block'});
		$('.leftRail-list .leftRail-topics ul li:first').find('ul').clone().appendTo('#topic-content');
	} else {
    	$('.leftRail-list .leftRail-topics ul li:first').addClass('js-active').addClass('js-expanded').next().slideDown();
	}

    $('.leftRail-list li.topic:has(ul li.topic)').children('h5').addClass('arrow').parent().addClass('multi');
    //$('.multi').find('li:not(.topic)').addClass('subNav');

    $('.leftRail-list .topic').mouseover(function() {
    	$('.leftRail-list .topic').removeClass('onTopic');
    	$(this).addClass('onTopic');
    	if($(window).width() > smallBreakPoint){
    		$('.leftRail-list .topic').removeClass('js-expanded').removeClass('js-active');
			$(this).addClass('js-active');

			if(!$(this).hasClass('multi')){
				$('.leftRail-list #topic-content').html('').css({'display':'block'});
				$(this).find('ul:first').clone().show().appendTo('#topic-content');
			} else {
				//$(this).find('ul').clone().hide('.topic').show('.subNav').appendTo('#topic-content');
			}
		}
	});

    $('.leftRail-list .leftRail-topics ul li h5').click(function(){
    	$('.leftRail-list .leftRail-topics li.js-active').removeClass('js-active');

		$(this).parent('li').addClass('js-active');
		$(this).parent('li').toggleClass('js-expanded');
		$(this).next('ul').slideToggle();

		if($(window).width() <= smallBreakPoint){
			$(this).parent().siblings().removeClass('js-expanded').children().next().slideUp();

			if(!$(this).parent().hasClass('js-expanded')){
	    		$(this).siblings('ul').children('li.topic.js-expanded').children('ul').slideUp();
			}
		}

        return false;
	});

	$(window).resize(function(){
		adjustContent();
	});
});

function adjustContent(){
	if($(window).width() > smallBreakPoint){
		$('.leftRail-list #topic-content').html('');
		$('.leftRail-list li.onTopic').find('ul').clone().appendTo('#topic-content');
	} else {
		$('.leftRail-list li.topic').find('ul').hide();
		$('.leftRail-list .js-active').find('ul').show();
	}
}
/* ==========================================================================
    List Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$(function(){
	$('.listAccordion .listAccordionItem').click(function() {
		$(this).find('div.details').slideToggle(function() {
			if ($(this).is(':hidden')) {
				$(this).parent().children('.listAccordionItem-title').removeClass('js-active');
			} else {
				$(this).parent().children('.listAccordionItem-title').addClass('js-active');
			}
		});
		return false;
	});
	// Prevent button click from toggling details
	$('.listAccordion .listAccordionItem .cta').click(function(event) {
		event.stopPropagation();
	});
});
/* ==========================================================================
    Main -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function() {
	// Add classes to first and last of each list
	$('li:first-child').addClass('js-first');
	$('li:last-child').addClass('js-last');
	// set #custLoc checkbox :checked
	$('input#custLoc').data('checked', true);
	// Get current year
	//$('#year').text(('+new Date+').getFullYear());
	// Placeholder Support
	$('input[placeholder]').placeholder();

	$('.history_back').click(function(){
		window.history.back();
	});
});
/* ==========================================================================
    Modal -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function(){
	$('.modal-button').click(function() {
		var modal = $(this).attr('id');
		loadPopup(modal);
		return false;
	});
	$('.modal-next').click(function() {
		var modal = $(this).attr('data-next');
		var currModal = modal - 1;
		loadPopup(modal, currModal);
		return false;
	});
	$('.modal-prev').click(function() {
		var modal = $(this).attr('data-prev');
		var currModal = modal - 1 + 2;
		loadPopup(modal, currModal);
		return false;
	});
	// event for modal close the popup
	$('.modal-close').click(function() {
		disablePopup();
		return false;
	});
	// event for modalChat close the popup
	$('.modalChat-close').click(function() {
		disableChatPopup();
		return false;
	});
	$(this).keyup(function(event) {
		if (event.which === 27) {
			disablePopup();
		}
	});
	$('.modal-overlay').click(function() {
		disablePopup();
		return false;
	});
	$('.modalChat-overlay').click(function() {
		disableChatPopup();
		return false;
	});
});

function loadPopup(modal, currModal) {
	$('#modal' + currModal).css({
		'display': 'none'
	});
	$('#modal' + modal).css({
		// 'margin-top': -$('#modal' + modal).height() / 4,
		'display': 'block'
	});
	$('.modal-next').attr('data-next', modal - 1 + 2);
	$('.modal-prev').attr('data-prev', modal - 1);
	$('#modal' + modal).fadeIn(0500);
	$('.modal-overlay').fadeIn('normal');
	$('.modalChat-overlay').fadeIn('normal');
}

function disablePopup() {
	$('.modal-container').fadeOut('normal');
	$('.modal-overlay').fadeOut('normal');
}
function disableChatPopup() {
	$('.modalChat-container').fadeOut('normal');
	$('.modalChat-overlay').fadeOut('normal');
}
/* ==========================================================================
    Nav(mobile) -- Version: 2.0.0.0 - Updated: 8/18/2014
   ========================================================================== */
$(function(){
	$('.twc-mobile-navigation ul li').each(function(index){
		if($(this).find('ul').length){
			$(this).addClass('js-expandable');
		}
	});

	$('.twc-mobile-navigation .js-expandable .smartLink').click(function(){
		if(!$(this).parent().hasClass('js-active')){
			$('.twc-mobile-navigation ul li .js-expandable').removeClass('js-active');
			$('.mobile-megamenu').slideUp();
			$(this).parent().find('ul').slideDown();
			$(this).parent().addClass('js-active');
		} else {
			$('.mobile-megamenu').slideUp();
			$(this).parent().removeClass('js-active');
		}

		return false;
	});
	$('input[name=navradio]').click(function(e) {
		var radChecked = $(this).data('checked') || false;
		$('input[name=navradio]').data('checked', false);
		if (radChecked) {
				this.checked = false;
				$(this).data('checked', false);
		} else {
			 this.checked = true;
			 $(this).data('checked', true);
		}
	});

  $(document).on({ 'touchstart' : function(event){
    if(!$(event.target).closest('.twc-new-nav').length){
      $('.twc-new-nav .desktop-hidden').not(this).prop('checked', false);
    }}
  });

  $(document).click(function(event){
    if(!$(event.target).closest('.twc-new-nav').length){
      $('.twc-new-nav .desktop-hidden').not(this).prop('checked', false);
    }
  });

  $('.twc-new-nav .mobile-nav').on('change', function() {
    $('.twc-new-nav .mobile-nav').not(this).prop('checked', false);
  });

// Desktop display for menu items
  $(window).resize(function(){
    if($(window).width() > 768){
      $('.twc-new-nav .labelList .label').next('ul').show();
    } else {
      $('.twc-new-nav .labelList .label').next('ul').hide();
      $('.js-active').next('ul').show();
    }
  });

// Mobile accordion for menu items
  $('.twc-new-nav .labelList .label').click(function(){
    if($(window).width() <= 768){
      if($(this).hasClass('js-active')){
        $('.twc-new-navigation .labelList .label').removeClass('js-active').next('ul').slideUp();
      } else {
        $('.twc-new-navigation .labelList .label').removeClass('js-active').next('ul').slideUp();
        $(this).addClass('js-active').next('ul').slideToggle();
      }
    }
    return false;
  });

// Close all menus on orientation change
  $(window).resize(function(){
    $('[id^="mobile-menu-"]').prop('checked', false);
    // alert("Test");
  });
});

// New Header JS

$(function(){
  // Click Device JS
  $('.closeDropdown').click(function(){
    theClick = $(this).attr('data-id');
    $('.'+theClick).slideToggle();
    return false;
  });

  $('.hiddenCheckboxLabel').click(function(){
    theClick = $(this).attr('data-id');
    $('.hiddenCheckboxDropdown').not('.'+theClick).slideUp();
    if($('.'+theClick).is(':visible')){
      $('.'+theClick).slideToggle();
    } else {
      $('.'+theClick).slideToggle();
    }

    return false;
  });

  // Touch Device JS
  $('.closeDropdown').on({ 'touchstart' : function(){
    theClick = $(this).attr('data-id');
    $('.'+theClick).slideToggle();
    return false;
  }
  });

  $('.hiddenCheckboxLabel').on({ 'touchstart' : function(){
    theClick = $(this).attr('data-id');
    $('.hiddenCheckboxDropdown').not('.'+theClick).slideUp();
    if($('.'+theClick).is(':visible')){
      $('.'+theClick).slideToggle();
    } else {
      $('.'+theClick).slideToggle();
    }

    return false;
    }
  });
});
/* ==========================================================================
    Operational Message -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
// if more than 1 marquee message, show left/right nav
if ($('.marquee-messages ul li').length > 1) {
	$('.controls').show();
}
$('.marquee-messages ul li').first().addClass('js-selected').show();
$('.marquee-messages ul li:gt(0)').addClass('js-opMessages');
$('#marquee-right').click(function() {
	if ($('.js-selected').next().index() === -1) {
		$('.marquee-messages ul li').removeClass('js-selected').hide().first().addClass('js-selected').fadeIn();
	} else {
		$('.marquee-messages ul li').hide();
		$('.js-selected').removeClass('js-selected').next().addClass('js-selected').fadeIn();
	}
});
$('#marquee-left').click(function() {
	if ($('.js-selected').prev().index() === -1) {
		$('.marquee-messages ul li').removeClass('js-selected').hide().last().addClass('js-selected').fadeIn();
	} else {
		$('.marquee-messages ul li').hide();
		$('.js-selected').removeClass('js-selected').prev().addClass('js-selected').fadeIn();
	}
});
$(function(){
  if($(window).width() >= mediumBreakPoint){
    console.log('inside');
    var arrHeight = [];

    $('.qr-row').each(function() {
      $(this).children('.qr-wrapper').each(function(){
        arrHeight.push($(this).height());
        });

      // add 32 for 1em padding
      var m = Math.max.apply(Math, arrHeight) + 32;
      $(this).children('.qr-wrapper').css({'padding':'1em','height':m+"px" });

        //clear array
        arrHeight.length = 0;
    });
  }
});
$(function(){
	$('.rolloverCaptions figure').click(function(){
		if($(window).width() <= mediumBreakPoint && isTouch == true){
			$('.rolloverCaptions').addClass('touch');

			if($(this).children('figcaption').is(':hidden')){
				$('.rolloverCaptions figure figcaption').hide();
				$(this).children('figcaption').show();
			} else {
				$(this).children('figcaption').hide();
			}
		}
	});
});

//detect for touch
if("ontouchstart" in window || navigator.msMaxTouchPoints){
	isTouch = true;
} else {
    isTouch = false;
}
$(function(){
	$('.scrollTo').click(function(){
		var divPosition = $('#'+$(this).attr('data-attribute')).offset();
		$('html, body').animate({scrollTop: divPosition.top}, "slow");
		return false;
	});

	$('#scrollToTop').click(function() {
    $('html, body').animate({'scrollTop' : 0},1000);
    return false;
  });

  $('#modalToTop').click(function() {
    $('.modal-body').animate({'scrollTop' : 0},1000);
    return false;
  });
});
/* ==========================================================================
    Select with Link -- Version: 1.9.0.2 - Updated: 3/24/2014
   ========================================================================== */

(function($) {

  $.fn.selectLink = function() {
  	$('.selectLink').change(function(){
  		// Ignore null value -- shown at top of dropdown
  		if ($(this).val().length){
  			window.location.href = $(this).val();
  		}
  	});
  }

}(jQuery));

$('.selectLink').selectLink();
/* ==========================================================================
    Share -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

//$(function(){
	//adjustContent();

	$('.cta#email').click(function(){
			$('.email-module').toggle();
			return false;
	});

	$('.email-module .close').click(function() {
		$('.email-module').toggle();
	});

/*
	$(window).resize(function(){
		adjustContent();
	});

	function adjustContent(){
		if($(window).width() <= smallBreakPoint){
			$('.share-emailPrint').each(function(index){
				//$(this).find('.text').text('');
			});*
		}
	}
	/
});
/* ==========================================================================
    Side Accordion -- Version: 1.0.0.0 - Updated: 1/7/2014
   ========================================================================== */
$(function(){
  $('.sideAccordion .expandableHybrid ul li').each(function() {
    if ($(this).has('ul').length) {
      $(this).addClass('js-expandable');
    } else {
      $(this).addClass('js-notexpandable');
    }
  });

  $('.sideAccordion li h6').click(function(){
      if($(this).next().has('ul').length && !$(this).hasClass('onState')){
          $('.sideAccordion li').removeClass('liState');
          $('.sideAccordion h6').removeClass('onState');
          $(this).addClass('onState');
          $('.sideAccordion li h6').parent().removeClass('js-active').find('ul').slideUp();
          $(this).parent().addClass('js-active').find('ul').slideDown();
          $(this).next('ul').find('li.js-first').addClass('liState');
          $('.sideAccordion .title').text($(this).next('ul').find('li.js-first a').text());
          var html2 = $(this).next('ul').find('li.js-first').next().html();
          var html2 = html2.replace('display:none','display:block').replace('height: 1px','').replace('overflow: hidden','');
          $('.sideAccordion .cloned-block').remove();
          $('<div class="cloned-block">'+html2+'</div>').appendTo('.sideAccordion .rightContent');
      } else if($(this).next().has('ul').length && $(this).hasClass('onState')){
        $(this).parent().addClass('js-active').find('ul').slideToggle();
      }
  });

  $('.sideAccordion .js-expandable > ul > li').click(function(){
      if(!$(this).has('h6').length){
        $('.sideAccordion li').removeClass('liState');
        $(this).addClass('liState');
        $('.sideAccordion .title').text($(this).text());
        if($(window).width() <= smallBreakPoint){
          $('.sideAccordion .activeContent').hide();
          $(this).next('.activeContent').show();
        } else {
          var html = $(this).next('.activeContent').html();
          $('.sideAccordion .cloned-block').remove();
          $('<div class="cloned-block">'+html.replace('display:none','display:block')+'</div>').appendTo('.sideAccordion .rightContent');
        }
      }
    return false;
  });

  $(window).bind("load", function(){
    resizeAccordion();
    $('.sideAccordion li.js-first').find('ul').slideDown();
    $('.sideAccordion .title').text($('.sideAccordion li.js-first a').first().text());
    $('.sideAccordion li.js-first').find('ul li.js-first').addClass('liState');
  });

  $(window).resize(function(){
    resizeAccordion();
  });
});

function resizeAccordion(){
  if($(window).width() >= mediumBreakPoint){
    var html = $('.sideAccordion .liState').next('.activeContent').html();
    if(html == undefined){
      var html = $('.sideAccordion .js-first').next('.activeContent').html();
    }

    $('.sideAccordion .activeContent').hide();
    $('.sideAccordion .rightContent').show();
    $('.sideAccordion .sbs-content').show();
    $('.sideAccordion .sbs-clone').show();
    $('.sideAccordion .cloned-block').remove();
    if(html != undefined){
      $('<div class="cloned-block">'+html.replace('display:none','display:block')+'</div>').appendTo('.sideAccordion .rightContent');
    }
  } else {
    $('.sideAccordion .rightContent').html('');
    $('.sideAccordion .sbs-content').hide();
  }
}
$(function(){
	$(window).bind("load", function(){
		$('.filters').show();
	});

	if($(window).width() > mediumBreakPoint){
		$('.simpleSearch .filter-list').slideDown();
	} else {
		$(".searchInput").insertBefore('.left-rail-content');
		$(".searchInput").clone().addClass('desktop-hidden').insertAfter('.left-content');
	}

	$('.filter-list ul li').click(function(){
		if(!$(this).hasClass('icon-remove-sign')){
			$('.filter-applied').show();
			$('.filter-list ul li').hide();
			$(this).addClass('twc-icon-before').addClass('icon-remove-sign').show();
		} else {
			$('.filter-applied').hide();
			$(this).removeClass('twc-icon-before').removeClass('icon-remove-sign');
			$('.filter-list ul li').show();
		}
		return false;
	});

	$('.remove-filter').click(function(){
		$('.filter-applied').hide();
		$('.filter-list ul li').removeClass('twc-icon-before').removeClass('icon-remove-sign').show();

		return false;
	});

	$('.filter-toggle').click(function(){
		$('body').find('.filter-list').slideToggle(function(){
			if($(this).is(":hidden")){
				$('.filter-toggle').removeClass('icon-angle-up').addClass('icon-angle-down');
			} else {
				$('.filter-toggle').removeClass('icon-angle-down').addClass('icon-angle-up');
			}
		});
		return false;
	});
});
/* ==========================================================================
    Promo Slider -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$.fn.promoSlider = function(opts) {
    $(this).data('initialized', true);
    var $that = this;
    var slider = $("ul.carousel-apps", this);
    var speed = 400;
    var num_items = $("ul.carousel-apps > li", this).size();
    var item_width = 274.5;
    var left_offset = -9.5;
    var left_value = left_offset - item_width;
    slider.css('width', (item_width * num_items));
    slider.css('left', left_offset);

    if (num_items > 2) {
        $('.btnnext', this).show();
        $('.btnprev', this).show();
        $("ul.carousel-apps li:first", this).before($("ul.carousel-apps li:last", this));
        slider.css('left', left_value);
        $('.btnprev', this).click(function() {
            if (!slider.is(':animated')) {
                var left_indent = parseInt(slider.css('left')) + item_width;
                slider.animate({
                    'left': left_indent
                }, speed, function() {
                    $("ul.carousel-apps li:first", $that).before($("ul.carousel-apps li:last", $that));
                    slider.css({
                        'left': left_value
                    });
                });
            }
            return false;
        });
        $('.btnnext', this).click(function() {
            if (!slider.is(':animated')) {
                var left_indent = parseInt(slider.css('left')) - item_width;
                slider.animate({
                    'left': left_indent
                }, speed, function() {
                    $("ul.carousel-apps li:last", $that).after($("ul.carousel-apps li:first", $that));
                    slider.css({
                        'left': left_value
                    });
                });
            }
            return false;
        });
    }
}
$('.promo-slides').each(function() {
    if ($(this).data('initialized') !== true) {
        $(this).promoSlider();
    }
});
/* ==========================================================================
    Sticky -- Version: 1.9.0.1 - Updated: 1/6/2014
   ========================================================================== */
if (!!$('.sticky').offset()) {
	$(function(){
		var stickyTop = $('.sticky').offset().top;

		var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyTop){
			$('.sticky').addClass('js-fixed');
			$('.spacer').css({'height':$('.sticky').height()+'px'});
		} else {
			$('.sticky').removeClass('js-fixed');
			$('.spacer').css({'height':'0px'});
		}
	};

	stickyNav();

		$(window).scroll(function(){
			stickyNav();
		});
	});
}
/* ==========================================================================
    Stores -- Version: 1.0.0.0 - Updated: 3/7/2014
   ========================================================================== */

/* ==========================================================================
    Tables -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(window).bind("load", function(){
    $('.checkboxTables').addClass('desktop');

    var table = $('<table class="checkboxTables mobile"></table>');
    var tbody = $('<tbody></tbody>').appendTo(table);

    $('.desktop tbody tr').each(function(a){
        a = a + 1;
       $(this).children('td').each(function(i){
          if(!$(this).hasClass('row-title')){
            var i = i + 1;
            $(this).addClass('td_'+a+'-'+i);
           } else {
            $(this).addClass('rt_'+a);
           }
       });
    });

    $('.desktop thead tr th span.h5').each(function(index){
        var index = index + 2;
        $(this).attr('id','th_'+index);
    });

    for(i=2; i<=7; i++){
        var row = $('<tr class="column-title"><td colspan="2"><span class="h5">'+$('#th_'+i).html()+'</span></td></tr>').appendTo(tbody);

        for(a=1; a<=5; a++){
            var row = $('<tr class="row-title"></tr>').appendTo(tbody);
            var rowTitle = $('<td>'+$('.rt_'+a).html()+'</td>').appendTo(row);
            $('<td>'+$('.td_'+a+'-'+i).html()+'</td>').appendTo(row);
        }

        table.append(row);
    }

    $(table).hide().insertAfter('.desktop');
    $('.desktop thead tr th').find('div').first().clone().hide().addClass('cloned-button').appendTo('.column-title td');

    resizeTable();

    $(window).bind('resize', function() {
        resizeTable();
    });

    function resizeTable() {
        $('.checkboxTables').show();

        if ($(window).width() <= smallBreakPoint) {
            $('.cloned-button').show();
            $('.desktop').hide();
            $('.mobile').show();
        } else {
            $('.cloned-button').hide();
            $('.desktop').show();
            $('.mobile').hide();
        }
    }
});
/* ==========================================================================
    Tabs to Accordion -- Version: 1.9.0.2 - Updated: 1/7/2013
   ========================================================================== */
$(function() {
    tabCount = 1;
    $('.tab-component').each(function(index){
        $(this).addClass('onState_'+tabCount);
        tabCount++;
    });

    buildAccordion();

    $(window).bind("load", function(){
        adjustContent();
    });

    $('[class*=onState_] .tabs li').click(function() {
        var selected_tab = $(this).find('a').attr('data-ref');
        var onState =  $(this).parent().parent().parent().attr('class');
        var className = onState.split(" ");
        var finalName = className.pop();

        $('.'+finalName+' .tabs li').removeClass('js-active');
        $(this).addClass('js-active');

        if ($(window).width() > mediumBreakPoint) {
            $('.'+finalName+' .tab-content').hide();
            $('.'+finalName+' '+selected_tab).show();
        } else {
            $('.'+finalName+' .tab-content').slideUp();
            $(this).next().slideDown();
        }

        return false;
    });

    $(window).resize(function() {
       adjustContent();
    });
});

function adjustContent() {
    if ($(window).width() < mediumBreakPoint) {
        $('[class*=onState_] .tabs ul').find('li.js-active').next('div').show();
    } else {
        $('.cloned').hide();
        $('[class*=onState_]').each(function(index){
            var onState =  $(this).attr('class');
            var className = onState.split(" ");
            var finalName = className.pop();
            var toShow = $('.'+finalName+' .js-active a').attr('data-ref');
            $('.'+finalName+' .tab-content-container').find(toShow).show();
        });
    }
}

function buildAccordion(){
    $('.tab-component .tabs ul li').each(function(){
        id = $(this).find('a').attr('data-ref');
        $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).hide();

        if ($(window).width() < mediumBreakPoint && $(this).hasClass('js-active')) {
            $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).show();
        }
    });
}
/* ==========================================================================
    Tile List -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
if ($(window).width() < 1099) {
	$('.tileList li').addClass('js-mobile');
} else {
	$('.tileList li').hover(function() {
		$(this).next().toggleClass('js-nextHover');
	});
}
$(function(){
	$('.tooltip').click(function(){
		return false;
	});
});
/* ==========================================================================
    Truncate Text -- Version: 1.9.0.1 - Updated: 1/14/2014
   ========================================================================== */

    var ellipsestext = "...";
    var moretext = "Read More";
    var lesstext = "Read Less";

    $(window).bind("load", function(){
        $('[class^=truncate]').show();
    });

    $('[class^=truncate]').children().each(function(showChar) {
        var content = $(this).html();
        var compareChar = $(this).parent().attr('class').split('-');
        var compareCharLast = $(this).parent().attr('class').split('-').pop();

        if(Number(compareCharLast)){
            var showChar = compareCharLast;
        } else {
            var showChar = 300;
        }

        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            if(compareChar.indexOf('readMore') == 1){
                var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';
            } else {
                var html = c + '<span class="moreelipses">'+ellipsestext+'</span>';
            }

            $(this).html(html);
        }
    });

    $(document).on("click", ".morelink", function() {
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    var windowTimer = null;
    textToCopy();
    resizeText();

    $(window).resize(function() {
        if (windowTimer) clearTimeout(windowTimer);
        windowTimer = setTimeout(resizeText, 50);
    });

function textToCopy() {
    $('[class^=truncate-]').each(function(i) {
        var chgText = $(this).html();
        $('<div id="copy_' + i + '">' + chgText + '</div>').hide().appendTo('body');
    });

    rebuildText();
}

function rebuildText() {
    $('[class^=truncate-]').each(function(i) {
        var adjText = $('#copy_' + i).clone().addClass('clone_' + i).removeAttr('id').show();
        $(this).html(adjText);
    });
}

function resizeText() {
    rebuildText();

    $('[class^=truncate-]').each(function(i) {
        var p = $('.clone_' + i).children();
        var divh = $(this).height();

        while ($(p).outerHeight() > divh) {
            $(p).text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });
}
$(function(){
	 if($(window).width() > mediumBreakPoint){
		$('.columnControl').each(function(index){
			if($(this).has('vertical-center')){
				var columnHeight = $(this).height();
				$(this).find('.vertical-center-wrapper').css({'height':columnHeight+'px'});
			}
		});
	 }

	$(window).resize(function(){
		$('.columnControl').each(function(index){
			if($(window).width() > mediumBreakPoint){
				var columnHeight = $(this).height();
				$(this).find('.vertical-center-wrapper').css({'height':columnHeight+'px'});
			} else {
				$(this).find('.vertical-center-wrapper').css({'height':'auto'});
			}
		});
	});
});
/* ==========================================================================
    Videos -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
// Allow only one video to play at a time
$('video').bind('play', function() {
	activated = this;
	$('video').each(function() {
			if(this != activated) this.pause();
	});
});
/* ==========================================================================
    Wrapping Columns -- Version: 1.9.0.1 - Updated: 2/12/2014
   ========================================================================== */

$(function() {
	adjustContent();

	$(window).resize(function(){
		adjustContent();
	});

	$(document).on("click", ".mobile", function() {
		$(this).toggleClass('expanded');
		$(this).parent().children('ul').slideToggle();
	});

	function adjustContent(){
		if($(window).width() <= smallBreakPoint){
			$('li.heading h5').addClass('mobile').addClass('expanded');
			$('.content').hide();
		} else {
			$('.content').show();
			$('li.heading h5').removeClass('mobile').removeClass('expanded');
		}
	}
});