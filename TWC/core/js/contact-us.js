/* ==========================================================================
   jQuery code for Contact Us

   Author: Max Quattromani
   Version: 1.5.4 - Updated: 9/3/13
   ========================================================================== */

$(function() {
	$('.contact-us dt:last').addClass('js-last');
	// Scroll Section to top when selected/clicked
	$('.contact-us h6').click(function() {
		$('html, body').animate({
			scrollTop: $(this).offset().top
		}, 300);
	});

	// Step 1
	// Show section li content, hide other sections, and reveal back to link
	$('.contact-us li.heading h5').click(function() {
		$(this).toggleClass('expanded');
		$('.contact-us .backTo').toggle();
		$('.contact-us .twc-step1 .stepButton').toggleClass('inline-block');
		//$(this).parent().children('ul').toggle();
		$(this).parent().siblings().toggle();
		// Get value of selected section and amend button
		var selected = $(this).text();
		$('.contact-us .twc-step1 .stepButton').text(selected + ' FAQs');
	});
	// Hide back to link, hide li content and return all sections
	$('.contact-us .backTo').click(function() {
		$('.contact-us h5').removeClass('expanded');
		$('.contact-us .backTo').hide();
		$('.contact-us .twc-step1 .stepButton').toggle();
		$('.contact-us .twc-step1 .stepButton').toggleClass('inline-block');
		$('.contact-us .twc-step3 .step-container').hide();
		$('.contact-us ul.content').hide();
		$('.contact-us li.heading').show();
		$('.contact-us ul.content li').addClass('active').siblings().removeClass('active');
		$('.contact-us h6.active').removeClass('step-completed');
		return false;
	});
	// highlight selected sub-section and place checkbox next to step 1
	$('.contact-us ul.content li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.contact-us div.twc-backgroundGradient-4').eq(0).addClass('active');
		$('.contact-us h6').eq(0).addClass('step-completed');
		$('.contact-us h6').eq(1).addClass('active');
		$('.contact-us span.end-arrow').eq(1).addClass('active');
		$('.contact-us .twc-step2 dl').show().find('.contact-us .twc-step1 .stepButton').show();
		$('.contact-us .twc-step2 .stepButton').toggleClass('inline-block');
		// Mobile
		$('.contact-us .twc-step2 .step-container:hidden').addClass('active').toggle();
		if ($(window).width() <= 768) {
			$('html, body').animate({
				scrollTop: $('.contact-us .twc-step2 h6').offset().top
			}, 300);
		}
		return false;
	});
	// Step 2
	// Show sub-section answer content, and reveal change questions link
	$('.contact-us dt').click(function() {
		$('.contact-us h6').eq(1).addClass('step-completed'); // good
		$('.contact-us a').parent().toggleClass('displayQuestion'); // good
		$('.contact-us .changeQuestions').toggle(); // good
		$(this).siblings('dt').toggle();
		$(this).next('dd').toggle();
		inli
		$('.contact-us .twc-step2 .stepButton').hide();
		$('.contact-us .twc-step3 .step-container').show();
		$('.contact-us div.twc-backgroundGradient-4').eq(1).addClass('active');
		$('.contact-us h6').eq(2).addClass('active')
		// Mobile
		$('.contact-us .questionsContinue').toggle().addClass('active');
		return false;
	});
	// Hide chage questions link, hide answer, and return all questions
	$('.contact-us .changeQuestions').click(function() {
		$('.contact-us .changeQuestions').hide();
		$('.contact-us .questionsContinue').hide();
		$('.contact-us dd').hide();
		$('.contact-us dt').show();
		$('.contact-us dt').removeClass('displayQuestion');
		$('.contact-us .twc-step3 .step-container').hide();
		return false;
	});
	// Open Step 3
	$('.contact-us #openStep3,.questionsContinue').click(function() {
		$('.contact-us .twc-step3 .step-container').show();
		// Mobile
		$('.contact-us .twc-step1 .step-container.active').toggle();
		$('.contact-us .twc-step2 .step-container.active').toggle();
		$('html, body').animate({
			scrollTop: $('.contact-us .twc-step3 h6').offset().top
		}, 300);
		return false;
	});
	// Step 3
	// Show section li content, hide other sections, or reveal chat ui
	$('.contact-us .callMeMaybe h5').click(function() {
		$('.contact-us h6').eq(2).addClass('step-completed');
		if ($(this).parent().attr("id") == 'callUs') {
			$(this).toggleClass('expanded');
			$(this).siblings('.content').slideToggle();
			$('.contact-us .helpfulLinks').toggle();
		} else {
			$('.contact-us .chatUI').show();
		}
	});
	// Mobile
	$('.contact-us h6.active').click(function() {
		$('.contact-us .twc-step1 .step-container:hidden').addClass('active').toggle();
	});
	// Chat UI
	// Uncheck radio buttons
	$(".contact-us input:radio").attr("checked", false);
	// Listen for which radio button is selected, then do a thing
	$('.contact-us #ccPreCheck form#newExisting input[type=radio]').on('change', function() {
		// Show Start Chat button
		$('.contact-us #ccStartChatButton').show();
		// Hide language link & show transcipt link
		$('.contact-us .chatUI-.bottom .language').hide();
		$('.contact-us .chatUI-.bottom .show_transcript').show();
		if ($('#new').is(':checked')) {
			$('.contact-us #ccPreCheck').hide();
			$('.contact-us #ccPreSurvey').show();
		} else {
			$('.contact-us #ccPreCheck').hide();
			$('.contact-us #ccPreSurvey').show();
			$('.contact-us .telephoneInput').show();
			$('.contact-us .chatUI-.footnote').show();
		}
	});
	$('.contact-us #ccStartChatButton').click(function() {
		$('.contact-us #ccPreSurvey').hide();
		$('.contact-us .chatUI-.bottom').hide();
		$('.contact-us .chatUI-.footnote').hide();
		$(".contact-us #ChatDisplay").show();
		$('.contact-us #ccContainer').show();
		$('.contact-us .chatUI-.conversation').show();
		$.cookie('chatEnabled', 'true');
	});

	$('.contact-us #ccRemoteControl button').click(function() {
		$('.contact-us #ccRCEnable').toggle();
		$('.contact-us #ccRCDisable').toggle();
	});

	$('.contact-us #transcript').click(function() {
		$('.contact-us .chatUI-.bottom').addClass('active');
		$('.contact-us .chatUI-.transcript').show();
		$('.contact-us .chatUI-.footnote').show();
		return false;
	});

	$('.contact-us #hide_transcript').click(function() {
		$('.contact-us .chatUI-.transcript').hide();
		$('.contact-us .chatUI-.bottom').removeClass('active');
		return false;
	});

	$('.contact-us #hidewindow').click(function() {
		if ($.cookie('chatEnabled')) {
			$('.contact-us .darkOverlay').show();
			$('.contact-us #ccCloseConfirm').show();
			$.removeCookie('chatEnabled');
		} else {
			$('.contact-us .chatUI').hide();
		}
	});

	$('.contact-us #ccExitChat').click(function() {
		$('.contact-us #ccCloseConfirm').hide();
		$('.contact-us #ccChatOutput').hide();
		$('.contact-us .darkOverlay').hide();
		$('.contact-us .chatUI-.conversation').hide();
		$('.contact-us .chatUI-.surveyEnd').show();
		$('.contact-us #ccPostSurvey').show();
	});

	$('.contact-us #ccCancelExit').click(function() {
		$('.contact-us #ccCloseConfirm').hide();
		$('.contact-us .darkOverlay').hide();
		$.cookie('chatEnabled', 'true')
	});
});