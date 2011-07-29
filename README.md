#Notifly

Notifly is a simple plugin for jQuery which allows the quick display of on-the-fly notifications.

##Usage

Include the css and javascript files in the &lt;head&gt;

	<head>
		<link href="jquery.notifly.css" type="text/css" rel="stylesheet" />

		<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
		<script src="jquery.notifly.js" type="text/javascript"></script>
	</head>

Call Notifly anywhere using $.notifly()

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

* Notification stacking.
* Addition of a top notification.
* Selection of which corner to show notification.
* Option to slide the notification into view.
* A click event callback.
* A destroy method.
* Optional close button on hover.
* Pause delay when hovered over.
* Constant notifications (no fadeout).

##Issues

**Known Issues:**

* None yet.

Please report any issues using github's issue system.

##Changelog

* **1.0** - First release
* **1.0.1** - [Bug Fix] Notifications didn't stick when scrolling.
* **1.0.2** - Fresh new design