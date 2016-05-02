var br_data = dataLayer[0];
br_data.order_id = br_data.OrderID;
br_data.acct_id = "5303";
if(location.href.indexOf('order_complete')>-1){
	br_data.is_conversion = "1";
  
}
if(typeof event25!="undefined"){
if(event25==true){
 br_data.is_buyFlowStart = "1"; 
}
}

  
(function() {
    var brtrk = document.createElement('script');
    brtrk.type = 'text/javascript';
    brtrk.async = true;
    brtrk.src = 'https:' == document.location.protocol ? "https://cdns.brsrvr.com/v1/br-trk-5303.js" : "http://cdn.brcdn.com/v1/br-trk-5303.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(brtrk, s);
})();
