(function($){

	$.notifly = function(options) {

		//Default settings
		var defaults = {
			
			'header'  		: '',
			'content' 		: '',
			'delay'   		: 2000,
			'inout'   		: 500,
			'corner'			: 'br',
			'type'				: 'corner',
			'hoverPause'	: true,
			
		};

		// Helper methods
		var methods = {
			
			destroy : function() {

				if (settings.type === 'corner') {

					$('.notifly').fadeOut(settings.inout, function() {
						$('.notifly').detach();
					});

				} else if (settings.type === 'top') {
					
					$('.notifly').slideUp(settings.inout, function() {
						$('.notifly').detach();
					});		

				}

			},

		};
		
		//Merge Options and Settings
		var settings = $.extend({}, defaults, options);


		// Add notification to DOM
		$('body').append('<div class="notifly"></div>');

		
		// Bind hover event
		if (settings.hoverPause) {

			$('.notifly').hover(function() {

				$(this).clearQueue();

			}, function() {
				
				setTimeout(function() {
					methods.destroy();
				}, 1000);

			});

		} //hover


		// Apply relevant type
		if (settings.type === 'corner') { 

			$('.notifly').addClass('corner');

		} else if (settings.type === 'top') {
			
			$('.notifly').addClass('top')

		} //apply type


		// Set corner
		if (settings.type === 'corner') {
			switch(settings.corner) {
				
				case 'tl': 
					$('.notifly').css('top', '20px');
					$('.notifly').css('left', '20px');
					break;

				case 'tr': 
					$('.notifly').css('top', '20px');
					$('.notifly').css('right', '20px');
					break;

				case 'bl': 
					$('.notifly').css('bottom', '20px');
					$('.notifly').css('left', '20px');
					break;

				case 'br': 
					$('.notifly').css('bottom', '20px');
					$('.notifly').css('right', '20px');
					break;

				default:
					console.error(settings.corner + 'is invalid. Expected "tl", "tr", "bl" or "br"')
					break;

			}
		} //set corner


		// Populate notification
		if (settings.type === 'corner') {

			if (settings.header) {
				$('.notifly').append('<div class="notiflyHeader">' + settings.header + '</div>');
			}

			$('.notifly').append('<div class="notiflyContent">' + settings.content + '</div>');

		} else if (settings.type === 'top') {
			
			$('.notifly').append('<b>' + settings.header + ': </b>' + settings.content)
			
		} //populate


		// Display it
		if (settings.type === 'corner') {

			$('.notifly').fadeIn(settings.inout);

		} else if (settings.type === 'top') {

			$('.notifly').slideDown(settings.inout);

		}


		// Delay it
		$('.notifly').delay(settings.delay);
		

		// Kill it
		methods.destroy();
			
	};

})(jQuery);