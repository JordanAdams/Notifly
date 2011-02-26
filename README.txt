#Notifly

Notifly is a small plugin for jQuery which allows the quick display of customised notifications.

##Usage

Include the css and javascript files in your &lt;head&gt; like so:

	<head>
		<link href="jquery.notifly.css" type="text/css" rel="stylesheet" />
		<script src="jquery.notifly.js" type="text/javascript"></script>
	</head>

Call Notifly anywhere using $.notifly() like this:

    $("#someLink").click(function() {

        $.notifly({
		    "header"  : "Notifly",
		    "content" : "Look how easy it is."		
        });

    });

##Settings

**header** - The title of the notification.
**content** - The body of the notification.
**delay** - How long the notification shows for.
**inout** - How long the notification takes to fade in and out.

##Issues

Please report any issues you have with this plugin to me.