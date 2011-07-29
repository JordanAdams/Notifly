/*
 * jQuery Notifly - v1.0
 * Copyright (c) 2011 Jordan Adams
 * Licensed under the MIT license.
 *   http://www.opensource.org/licenses/mit-license.php
 *
*/

(function($){

	$.notifly = function(options) {

		//Default settings
		var settings = {
			
			"header"  : "",
			"content" : "",
			"delay"   : 2000,
			"inout"   : 500,
			"corner"	: "br",
			
		}
		
		//If options is set...
		if(options) {
			
			//Merge it with settings
			$.extend(settings, options);
			
		}
			
		//Add Notifly Div
		$("body").append(
			'<div class="notifly">' +
				'<div class="notiflyHeader"></div>' +
				'<div class="notiflyContent"></div>' +
			'</div>'
		);
			
		//Assign the default "corner" class
		$(".notifly").addClass("corner");
		
		//Set Corner {default => br}
		switch(settings.corner) {
			
			case 'tl': 
				$('.notifly').css("top", "20px");
				$('.notifly').css("left", "20px");
				break;

			case 'tr': 
				$('.notifly').css("top", "20px");
				$('.notifly').css("right", "20px");
				break;

			case 'bl': 
				$('.notifly').css("bottom", "20px");
				$('.notifly').css("left", "20px");
				break;

			case 'br': 
				$('.notifly').css("bottom", "20px");
				$('.notifly').css("right", "20px");
				break;

			default:
				console.error(settings.corner + 'is invalid. Expected "tl", "tr", "bl" or "br"')
				break;

		}
			
		//Apply header to .notiflyHeader
		$(".notiflyHeader").html(settings.header);
		
		//Apply content to .notiflyContent
		$(".notiflyContent").html(settings.content);
		
		//fadeIn notifly (inout determines length)
		$(".notifly").fadeIn(settings.inout);
		
		//Delay notifly (delay determines length)
		$(".notifly").delay(settings.delay);
		
		//fadeOut notifly (inout determines length)
		$(".notifly").fadeOut(settings.inout, function() {
			
			$(".notifly").detach();
			
		});
			
	};

})(jQuery);