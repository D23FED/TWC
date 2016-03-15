var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : 	document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {

	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#overlay button");
	
	function vidFade() {
		vid.classList.add("stopfade");
	}
	
	vid.addEventListener('ended', function() {
		// only functional if "loop" is removed 
		vid.pause();
		// to capture IE10
		vidFade();
	}); 
	
	
	pauseButton.addEventListener("click", function() {
		vid.classList.toggle("stopfade");
		if (vid.paused) {
	    	vid.play();
	    	pauseButton.innerHTML = "Pause Video";
	  	} else {
	    	vid.pause();
	    	pauseButton.innerHTML = "Paused - click to play";
		}
	});

});
