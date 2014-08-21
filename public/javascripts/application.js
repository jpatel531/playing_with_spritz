(function() {

	var onFetchSuccessController = function(spritzText) {
		startSpritzing(spritzText);
	};
	
	var onFetchError = function(error) {
		alert("Unable to Spritz: " + error.message);
	};
	
	var onStartSpritzControllerClick = function(event) {
		var element = $(event.currentTarget);
		var url = element.data("url");
		SpritzClient.fetchContents(url, onFetchSuccessController, onFetchError);
	};
	
	/**
	 * Start spritzing
	 */
	function startSpritzing(spritzText) {
		// Pull the SpritzerController from this page's spritzer container and call start 
		$(".spritzer").data("controller").startSpritzing(spritzText);
	};

	function showProgress(completed) {
		$("#completedText").val(Math.round(completed));
	}

	var init = function() {
		
		// Get this page's Spritzer container
		var container = $(".spritzer");

		// Attach the controller's container to this page's "spritzer" container
		// new SPRITZ.spritzinc.SpritzerController({placeholderText:{startText:'Click Spritz! Button'}}).attach(container);
		
		// Bind spritzer notification event listeners
		container.on("onSpritzPlay", function(event, position) {console.log("onSpritzPlay: " + position);});
		container.on("onSpritzPause", function(event, position) {console.log("onSpritzPause: " + position);});
		container.on("onSpritzRewind", function(event, position, pausePos) {console.log("onSpritzRewind: " + position + "/" + pausePos);});
		container.on("onSpritzBack", function(event, position, pausePos) {console.log("onSpritzBack: " + position + "/" + pausePos);});
		container.on("onSpritzForward", function(event, position, pausePos) {console.log("onSpritzForward: " + position + "/" + pausePos);});
		container.on("onSpritzComplete", function(event) {alert("Spritz Completed");});
		container.on("onSpritzSpeedChange", function(event, speed) {console.log("onSpritzSpeedChange: " + speed);});
		container.on("onProgressChange", function(event, completed) {showProgress(completed);});
		
		// Bind start button handler
		// $("#startSpritzing").on("click", onStartSpritzControllerClick);
		// $("#startSpritzing").on("click", function(){console.log("hello")});
	};
	
	
	$(document).ready(function() {
		init();
	});
})();
