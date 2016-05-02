cmloading = '';
serload =0;
jQuery(document).ready(function(){

     jQuery('body').append('<script type="text/javascript" src="https://www.cablemover.com/Widget/cablemoversearch.js"></script>');
  jQuery('.NoSupportZip span').remove();                                  
jQuery('button[value="Submit"]').click(function(){
jQuery('#cablemover_container').remove();
jQuery('.gateway-form:visible').parent().find('.NoSupportZip').append('<div id="cablemover_container"></div>');

  var address = jQuery('input[name="st_address"]:visible').val();
  var apt = jQuery('input[name="unit_number"]:visible').val();
  var zip = jQuery('input[name="zip_code"]:visible').val();

  var mob = (_satellite.getVar("IsMobile")=="true"? true : false);
  _satellite.notify(address+" "+apt+' '+zip);
  ctam('#cablemover_container', 1002, mob, true, address, apt, zip);
  jQuery('.NoSupportZip').append('<style>body{margin:0px !important;}.base-errors { padding: 0 !important;}/* The below two items should only be loaded IF the cablemover widget is being utilized *//* If this is loaded when the user is not out of footprint, this may break other error-module design */.error-module .errorcolumn.left {    display: none;}.error-module .errorcolumn.right {    width: 100%;}/* Begin CableMover specific styling */.error #ctam_widget_container {    border: none;    background-color: transparent;    max-width: 100%;}.error #ctam_widget_container {     min-height: 0 !important;margin: 0 auto !important;    margin-left: auto !important;    padding: 0;}.error #cablemover_container {    width: 100%;    display: inline-block;}.error #inject_results .inject_result_item {    margin-top: 0 !important;}.error #inject_results .results_content {    border-left: 0 !important;    padding-left: 0 !important;}.error #inject_results .results_content {    border-left: none !important;    padding-left: 0 !important;}@media (max-width: 768px) {    .error #ctam_widget_container {        width: 100% !important;    }    .error a#ctl00_offerList_ctl00_link {        margin: 0 auto !important;        text-align: center !important;        width: 100% !important;        padding: 0 !important;    }}</style>');
  cmloading = setInterval(function(){ cmTimer(address,apt,zip); }, 500);
});
 


                                 });

function cmTimer(address,apt,zip) {        
        lo = jQuery('#cablemover_container img[alt="Logo"]:visible').attr('src');
  if(typeof lo!="undefined"){
    
    if(lo.length>0&&serload==0){
      serload =1;
      clearInterval(cmloading);    
      dataLayer.push({event:'serv_test',"element URL":lo,"address":"address:"+address+" apt:"+apt+" zip:"+zip});
          
        }
  }
    }

