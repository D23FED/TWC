// Raymond Heredia
// 12-9-15
// This script automates table cell coloring based on the URL including CSS media queries for mobile.

// checks if the page is loaded
var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : 	document.addEventListener("DOMContentLoaded", callback);
};

// runs when the page is loaded
domReady(function() {
		
		// BARS AND RESTAURANT TV
		var tr = document.getElementsByTagName("tr");
		var table = document.getElementsByTagName("table");
		
		if(window.location.href.indexOf("bar-and-restaurant-tv.") > -1) {	
			
			//color table column titles
			var allTitles = tr[1];
			allTitles.className = allTitles.className + "mainRow";
			
			//highlight proper column
			for (i=1;i<tr.length;i++) {
				var child = tr[i].children[1];
				child.className = child.className + " active";
			}
			
			//highlight title that matches URL
			var businessTVTitle = tr[1].children[1];
			businessTVTitle.className = businessTVTitle.className + " activeTitle";
			
			//appends additional CSS to <head>
			var sheet = function() {
				var style = document.createElement("style");
				
				/* This can get tricky because there is no way for me to call specific media queries based on the URL with CSS alone. So, the needed media query is appended inline here. It's crucial to know which numbers correspond to which columns. This will help to understand what is happening with all the "nth-child" tags in the following statements.
				
				.lineup td:nth-child(1) = "Channel Networks" (always present)
				.lineup td:nth-child(2) = "Bar & Restaurant TV"
				.lineup td:nth-child(3) = "Business TV"
				.lineup td:nth-child(4) = "Business TV Prime"
				.lineup td:nth-child(5) = "College TV"
				.lineup td:nth-child(6) = "Healthcare TV"
				.lineup td:nth-child(7) = "News TV"
				.lineup td:nth-child(8) = "Deluxe" (always present)
				.lineup td:nth-child(9) = "Sports Pass" (always present)
				
				 */
				
				style.appendChild(document.createTextNode("@media only screen and (max-width:600px) {.lineup table {width:100%;max-width:500px;}.lineup td:nth-child(3),.lineup td:nth-child(4),.lineup td:nth-child(5),.lineup td:nth-child(6),.lineup td:nth-child(7) {display:none;}.lineup tr:nth-child(even) {background-color:#FAFAFA;}.lineup td:nth-child(1),.lineup td:nth-child(2){width:33.333%;}.lineup td:nth-child(8),.lineup td:nth-child(9){width:16.6665%;}}"));
				document.head.appendChild(style);
				return style.sheet;
			}();
		};
		
		// BUSINESS TV
		if(window.location.href.indexOf("business-tv.") > -1) {	
			
			var allTitles = tr[1];
			allTitles.className = allTitles.className + "mainRow";
			
			for (i=1;i<tr.length;i++) {
				var child = tr[i].children[2];
				child.className = child.className + " active";
			}
			
			var businessTVTitle = tr[1].children[2];
			businessTVTitle.className = businessTVTitle.className + " activeTitle";
			
			var sheet = function() {
				var style = document.createElement("style");
				style.appendChild(document.createTextNode("@media only screen and (max-width:600px) {.lineup table {width:100%;max-width:500px;}.lineup td:nth-child(2),.lineup td:nth-child(4),.lineup td:nth-child(5),.lineup td:nth-child(6),.lineup td:nth-child(7) {display:none;}.lineup tr:nth-child(even) {background-color:#FAFAFA;}.lineup td:nth-child(1),.lineup td:nth-child(3){width:33.333%;}.lineup td:nth-child(8),.lineup td:nth-child(9){width:16.6665%;}}"));
				document.head.appendChild(style);
				return style.sheet;
			}();
		};
		
		// BUSINESS TV PRIME
		if(window.location.href.indexOf("business-tv-prime.") > -1) {	
			
			var allTitles = tr[1];
			allTitles.className = allTitles.className + "mainRow";
			
			for (i=1;i<tr.length;i++) {
				var child = tr[i].children[3];
				child.className = child.className + " active";
			}
			
			var businessTVTitle = tr[1].children[3];
			businessTVTitle.className = businessTVTitle.className + " activeTitle";
			
			var sheet = function() {
				var style = document.createElement("style");
				style.appendChild(document.createTextNode("@media only screen and (max-width:600px) {.lineup td:nth-child(2),.lineup td:nth-child(3),.lineup td:nth-child(5),.lineup td:nth-child(6),.lineup td:nth-child(7) {display:none;}.lineup tr:nth-child(even) {background-color:#FAFAFA;}.lineup td:nth-child(1),.lineup td:nth-child(4){width:33.333%;}.lineup td:nth-child(8),.lineup td:nth-child(9){width:16.6665%;}}"));
				document.head.appendChild(style);
				return style.sheet;
			}();
		};
		
		// COLLEGE TV
		if(window.location.href.indexOf("college-tv.") > -1) {	
			
			var allTitles = tr[1];
			allTitles.className = allTitles.className + "mainRow";
			
			for (i=1;i<tr.length;i++) {
				var child = tr[i].children[4];
				child.className = child.className + " active";
			}
			
			var businessTVTitle = tr[1].children[4];
			businessTVTitle.className = businessTVTitle.className + " activeTitle";
			
			var sheet = function() {
				var style = document.createElement("style");
				style.appendChild(document.createTextNode("@media only screen and (max-width:600px) {.lineup td:nth-child(2),.lineup td:nth-child(3),.lineup td:nth-child(4),.lineup td:nth-child(6),.lineup td:nth-child(7) {display:none;}.lineup tr:nth-child(even) {background-color:#FAFAFA;}.lineup td:nth-child(1),.lineup td:nth-child(5){width:33.333%;}.lineup td:nth-child(8),.lineup td:nth-child(9){width:16.6665%;}}"));
				document.head.appendChild(style);
				return style.sheet;
			}();
		};
		
		// HEALTHCARE TV
		if(window.location.href.indexOf("healthcare-tv.") > -1) {	
			
			var allTitles = tr[1];
			allTitles.className = allTitles.className + "mainRow";
			
			for (i=1;i<tr.length;i++) {
				var child = tr[i].children[5];
				child.className = child.className + " active";
			}
			
			var businessTVTitle = tr[1].children[5];
			businessTVTitle.className = businessTVTitle.className + " activeTitle";
			
			var sheet = function() {
				var style = document.createElement("style");
				style.appendChild(document.createTextNode("@media only screen and (max-width:600px) {.lineup td:nth-child(2),.lineup td:nth-child(3),.lineup td:nth-child(4),.lineup td:nth-child(5),.lineup td:nth-child(7) {display:none;}.lineup tr:nth-child(even) {background-color:#FAFAFA;}.lineup td:nth-child(1),.lineup td:nth-child(6){width:33.333%;}.lineup td:nth-child(8),.lineup td:nth-child(9){width:16.6665%;}}"));
				document.head.appendChild(style);
				return style.sheet;
			}();
		};
		
		// NEWS TV
		if(window.location.href.indexOf("news-tv.") > -1) {	
			
			var allTitles = tr[1];
			allTitles.className = allTitles.className + "mainRow";
			
			for (i=1;i<tr.length;i++) {
				var child = tr[i].children[6];
				child.className = child.className + " active";
			}
			
			var businessTVTitle = tr[1].children[6];
			businessTVTitle.className = businessTVTitle.className + " activeTitle";
			
			var sheet = function() {
				var style = document.createElement("style");
				style.appendChild(document.createTextNode("@media only screen and (max-width:600px) {.lineup td:nth-child(2),.lineup td:nth-child(3),.lineup td:nth-child(4),.lineup td:nth-child(5),.lineup td:nth-child(6) {display:none;}.lineup tr:nth-child(even) {background-color:#FAFAFA;}.lineup td:nth-child(1),.lineup td:nth-child(7){width:33.333%;}.lineup td:nth-child(8),.lineup td:nth-child(9){width:16.6665%;}}"));
				document.head.appendChild(style);
				return style.sheet;
			}();
		};
		
	$(function(){
		$('.lineup .viewMore').click(function() {
			if ($(this).html() == "See More Channels") {
				$(this).html("See Less Channels");
				$('.lineup .wrap').css({'height':'100%'});
			} else {
    			$(this).html("See More Channels");
				$('.lineup .wrap').css({'height':'0'});
				/*$('html, body').animate({
				  scrollTop: $("#cluSearchArea").offset().top
				}, 500);*/
      		}
      		return false;
		});
	});
  
});