/*
 * jQuery Notifly - v1.0
 * Copyright (c) 2011 Jordan Adams
 * Licensed under the MIT license.
 *   http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Notifly is a single function plugin which allows the quick display
 * of a customised notification.
 *
 * GitHub Repository: https://github.com/JordanAdams/Notifly
 *
 * Changelog:
 *     1.0 - First realease
 *
 * Support:
 *     - jQuery versions 1.4+
 *     - Tested and working in chrome 10, ie7, safari 5, opera 10.
*/

(function($){

	$.notifly = function(options) {

		//Default settings
		var settings = {
			
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
			
		//Assign the default "corner" class
		$("#notifly").addClass("corner");
			
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