if(location.href.indexOf('cablecard.html')>-1){
	chathtml='<div id="lpButtonDivCableCard"></div>';

}else if(location.href.indexOf('/intelligenthome')>-1){
  chathtml='<div id="lpButtonDiv"></div>';
}else{
	chathtml = '';
}

p_path = document.location.pathname.indexOf("channels-lineup.html");

path_service = document.location.pathname;

if(p_path > -1){

jQuery('body').append("<style>@media (min-width: 769px) {  #side-chat {position: fixed; display: none; bottom: 10%;right: 0px;height: 93px;width: 80px;z-index:9999}  }    @media (max-width: 768px) {#side-chat {position: fixed;  display: none; top: 50%;right: 0px;}}</style><div id='side-chat'>&nbsp;"+chathtml+"</div>");
}

else if(path_service == "/residential/order") {
jQuery('body').append("<style>@media (min-width: 769px) {  #side-chat {position: fixed; bottom: 10%;right: 0px;height: 93px;width: 80px;z-index:9999}  }    @media (max-width: 768px) {#side-chat {position: fixed;top: 50%;right: 0px;}}</style><div id='side-chat'>&nbsp;"+chathtml+"</div>");

if(_satellite.getVar('IsMobile') == "true"){

jQuery('#side-chat').append("<style>#lp-mobile-chat-button-tab.min-chat {position: fixed;left: 0px;height: 24px;width: 24px;background-image: url('//www.timewarnercable.com/content/dam/residential/images/support/live-chat/Chat-vert-bubble.png');background-position-y: -76px;background-position-x: left;float: left;background-repeat: no-repeat;}#lp-mobile-chat-button-tab.full-chat {    position: fixed;left: 0px;height: 72px;width: 24px;background-image: url('//www.timewarnercable.com/content/dam/residential/images/support/live-chat/Chat-vert-chat.png');background-position-y: -30px;background-position-x: left;float: left;margin-top: 20px;background-repeat: no-repeat;}#min-chat {position: fixed;left: 0px;height: 23px;width: 24px;background-image: url('//www.timewarnercable.com/content/dam/residential/images/support/live-chat/Chat-vert-close.png');background-position-y: -9px;background-position-x: left;float: left;background-repeat: no-repeat;}</style><div id='min-chat' style='display:none'>&nbsp;</div><div id='lp-mobile-chat-button-tab' class='full-chat' style='display:none'>&nbsp</div>");
jQuery('#min-chat').click(function(){jQuery(this).hide(); jQuery('#lp-mobile-chat-button-tab').addClass('min-chat').removeClass('full-chat')});
jQuery(document).ready(function(){
  
  jQuery("#lp-mobile-chat-button-tab").click(function(){
	
  //_satellite.track("chatBtnTrack");

  });
});
}
}

else{
jQuery('body').append("<style>@media (min-width: 769px) {  #side-chat {position: fixed; bottom: 10%;right: 0px;height: 93px;width: 80px;z-index:9999}  }    @media (max-width: 768px) {#side-chat {position: fixed;top: 50%;right: 0px;}}</style><div id='side-chat'>&nbsp;"+chathtml+"</div>");

if(_satellite.getVar('IsMobile') == "true"){

jQuery('#side-chat').append("<style>#lp-mobile-chat-button-tab.min-chat {position: fixed;left: 0px;height: 24px;width: 24px;background-image: url('//www.timewarnercable.com/content/dam/residential/images/support/live-chat/Chat-vert-bubble.png');background-position-y: -76px;background-position-x: left;float: left;background-repeat: no-repeat;}#lp-mobile-chat-button-tab.full-chat {    position: fixed;left: 0px;height: 72px;width: 24px;background-image: url('//www.timewarnercable.com/content/dam/residential/images/support/live-chat/Chat-vert-chat.png');background-position-y: -30px;background-position-x: left;float: left;margin-top: 20px;background-repeat: no-repeat;}#min-chat {position: fixed;left: 0px;height: 23px;width: 24px;background-image: url('//www.timewarnercable.com/content/dam/residential/images/support/live-chat/Chat-vert-close.png');background-position-y: -9px;background-position-x: left;float: left;background-repeat: no-repeat;}</style><div id='min-chat' style='display:block'>&nbsp;</div><div id='lp-mobile-chat-button-tab' class='full-chat' style='display:block'>&nbsp</div>");
jQuery('#min-chat').click(function(){jQuery(this).hide(); jQuery('#lp-mobile-chat-button-tab').addClass('min-chat').removeClass('full-chat')});
jQuery(document).ready(function(){
  
  jQuery("#lp-mobile-chat-button-tab").click(function(){
	
  //_satellite.track("chatBtnTrack");

  });
});
}
}
