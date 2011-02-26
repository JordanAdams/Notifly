#Notifly

Notifly is a small plugin for jQuery which allows the quick display of customised notifications.

##Usage

Include the css and javascript files in your &lt;head&gt; like so:

	<head>
		<link href="jquery.notifly.css" type="text/css" rel="stylesheet" />

		<script type="text/javascript" src="http://code.jquery.com/jquery-1.5.1.min.js"></script>

		<script src="jquery.notifly.js" type="text/javascript"></script>
	</head>

Call Notifly anywhere using $.notifly() like this:

    $("#someLink").click(function() {

        $.notifly({
		    "header"  : "Notifly",
		    "content" : "Look how easy it is."		
        });

    });

##Example

[Main example](http://jordan-adams.co.uk/notifly)

##Settings

**header** - The title of the notification.

**content** - The body of the notification.

**delay** - How long the notification shows for.

**inout** - How long the notification takes to fade in and out.

##Planned Updates

* Addition of a top notification.
* Selection of which corner to show notification.
* Option to slide the notification into view.
* Option to link the notification to a url.
* Optional close button on hover.
* Pause the delay when hovered over.
* Option for colour scheme.
* Option for width.

##Issues

**Known Issues:**

* Notification doesn't stick when scrolling.

Please report any issues you have with this plugin to me.