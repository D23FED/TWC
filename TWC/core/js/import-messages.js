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