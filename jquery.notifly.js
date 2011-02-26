(function($){

	//Main function
	$.notifly = function(options) {

		//Default settings
		var settings = {
			
			"type"    : "corner",
			"header"  : "",
			"content" : "",
			"delay"   : 2000,
			"inout"   : 500
			
		}
		
		//If options is set...
		if(options) {
			
			//Merge it with settings
			$.extend(settings, options);
			
		}
			
		//Add Notifly Div
		$("body").append(
			'<div id="notifly">' +
				'<div id="notiflyHeader"></div>' +
				'<div id="notiflyContent"></div>' +
			'</div>'
		);
			
		//Check for non-default type (top)
		if(settings.type.toLowerCase() == "top") {
			
			$("#notifly").addClass("top");
			
		} else {
			
			$("#notifly").addClass("corner");
			
		}
			
		//Apply header to #notiflyHeader
		$("#notiflyHeader").html(settings.header);
		
		//Apply content to #notiflyContent
		$("#notiflyContent").html(settings.content);
		
		//fadeIn notifly (inout determines length)
		$("#notifly").fadeIn(settings.inout);
		
		//Delay notifly (delay determines length)
		$("#notifly").delay(settings.delay);
		
		//fadeOut notifly (inout determines length)
		$("#notifly").fadeOut(settings.inout, function() {
			
			$("#notifly").detach();
			
		});
			
	};

})(jQuery);