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
		      header  : "Notifly",
		      content : "Look how easy it is."		
        });

    });

##Example

[Main example](http://jordanadams.github.com/Notifly/)

##Settings

**header** - The title of the notification. Accepts any string (can include html but not advised).

**content** - The body of the notification. Accepts any string (can include html but not advised).

**type** - What type of notification to show. Accepts 'top' or 'corner' and defaults to 'corner'

**delay** - How long the notification shows for. Accepts a number of milliseconds and defaults to 2000.

**inout** - How long the notification takes to fade in and out. Accepts a number of milliseconds and defaults to 500. 

**corner** - Which corner to show the notification in. Accepts 'tl', 'tr', 'bl', 'br' and defaults to 'br'.

**hoverPause** - Pauses the notification when the user hovers over it. The notification then closes 1 second after the user moves their cursor off of the notification.

##Issues

Please report any issues using one of the following

* [Github's issue tracker](https://github.com/JordanAdams/Notifly/issues)
* [Twitter](http://twitter.com/JordanCallumA)
* Email: jordan_callum@live.co.uk