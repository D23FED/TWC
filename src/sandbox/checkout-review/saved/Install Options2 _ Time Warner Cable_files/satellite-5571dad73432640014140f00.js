if (typeof FSR !=="undefined"){
if (typeof _satellite.getVar('OnNetwork') !== "undefined") {FSR.CPPS.set('On_Network',_satellite.getVar('OnNetwork'));}
if (typeof _satellite.getVar('Curcust') !== "undefined") {FSR.CPPS.set('Current_Customer',_satellite.getVar('Curcust'));}
if (typeof _satellite.getVar('GTM-DataLayer')[0].visitorType !== "undefined") {FSR.CPPS.set('GTM_Visitor_Type',_satellite.getVar('GTM-DataLayer')[0].visitorType);}
  if (typeof s_tnt !== "undefined") {FSR.CPPS.set('Target Campaign',window.ttMETA[0].campaign+": "+window.ttMETA[0].experience);}
if (typeof _satellite.getVar('GTM-DataLayer')[0].region !== "undefined") {FSR.CPPS.set('GTM_Region',_satellite.getVar('GTM-DataLayer')[0].region);}
if (typeof _satellite.getVar('CQ Onnetwork') !== "undefined") {FSR.CPPS.set('CQ OnNetwork',_satellite.getVar('CQ Onnetwork'));}
}

if(typeof ClickTaleEvent !=="undefined"){

if (typeof _satellite.getVar('OnNetwork') !== "undefined") {
  ClickTaleEvent('On_Network', _satellite.getVar('OnNetwork'));
}
if (typeof _satellite.getVar('Curcust') !== "undefined") {
  ClickTaleEvent('Current_Customer', _satellite.getVar('Curcust'));
}
if (typeof _satellite.getVar('GTM-DataLayer')[0].visitorType !== "undefined") {
  ClickTaleEvent('GTM_Visitor_Type', _satellite.getVar('GTM-DataLayer')[0].visitorType);
}
if (typeof s_tnt !== "undefined") {
  ClickTaleEvent('Target Campaign', window.ttMETA[0].campaign + ": " + window.ttMETA[0].experience);
}
if (typeof _satellite.getVar('GTM-DataLayer')[0].region !== "undefined") {
  ClickTaleEvent('GTM_Region', _satellite.getVar('GTM-DataLayer')[0].region);
}
if (typeof _satellite.getVar('CQ Onnetwork') !== "undefined") {
  ClickTaleEvent('CQ OnNetwork', _satellite.getVar('CQ Onnetwork'));
}
}

if(location.href.indexOf('residential/order/session')>-1){
  var brloading = '';

brloading = setInterval(function(){ brtimer(); }, 500);
    
    
event25="";

function brtimer() {
  event25=OmniturePageViewHasFired();
  if(event25){
          clearInterval(brloading);
    if(event25.indexOf('event25')>-1){
     event25=true;
    }
      _satellite.track('br');
  
  
  }}
}else{
  
_satellite.track('br');
}

////
////
////

/*function trlf() {
  event23=OmniturePageViewHasFired();
  if(event23){
          clearInterval(trl);
    		sval = _satellite.getVar('sessioncookie');
console.log(sval);
if(sval.length==16){
s.prop62 = _satellite.getVar('sessioncookie');
}else if(sval){
  s.prop62= "nds:"+_satellite.getVar('sessioncookie');
}else{
 s.prop62 = "No Cookie"; 
}

    }
}
if(location.pathname=='/residential/order'||location.pathname=='/residential/order/'){
  var trl = '';

trl = setInterval(function(){ trlf(); }, 500);
    
    
event23="";

}*/


function OmniturePageViewHasFired() {
  var i=document.images;
  for (var c=0,l=i.length;c<l;c++) {
    if ( (i[c].src.indexOf('/b/ss/')>=0)
         && (!i[c].src.match(/[&?]pe=/))

    ) return i[c].src;
  }
  for (var o in window) {
    if ( (o.substring(0,4)=='s_i_')
         && (window[o].src)
         && (window[o].src.indexOf('/b/ss/')>=0)
         && (!window[o].src.match(/[&?]pe=/))
    ) return window[o].src;
  }
  return false;
}
