# Geckoboard Widget Notifier

Geckoboard Widget Notifier is a sample bookmarklet notifying widget update.
Hack the sample script as you want.

## Demo

1. Copy [widget_event_bml_sample.js]()
1. Paste the code on http://mrcoles.com/bookmarklet/ and register the
   bookmarklet in your bookmark
1. Open developer tool and visit: https://tatsuyatest.geckoboard.com/dashboards/8280C1B78C1D7FB7
1. Click the bookmarklet

You will see some messages in console and get an alert when VISITOR widget is
updated.

(Confirmed OS X Chrome. Hope it works on other browsers too)

## Hacking

#### Selecting Widget

The sample code shows you a way selecting a widgt by title.

You can also use widget\_id to match that you can find in article tag in
dashboard html.

```
<article class="widget ..." id="widget-15095312" style="...">
```

If the widget has that html, the widget\_id would be `15095312`.
So you can get a widget like below:

```
var widget = _(GB.models.widgets.models).find(
  function(model) { return model.id == 15095312 }
);
```

#### Alerting

I haven't tried but you should be able to use html5 audio API instead of alert
function.
You can also manipulate DOM: changing background colour, playing with html5
amimation, showing a funny animated gif.

Enjoy hacking!

#### Tip

Develop your script on developer tool (console) before creating a bookmarklet.
When you confirm everything works, you can create the bookmarklet and it should
work straight away.


## Disclaimer

It is a hack and does not use any official API.
When Geckoboard upgrade front-end code, it may stop working suddenly.

Geckoboard do not guarantee this hack works in the future.
Although I am working for Geckoboard, please understand I maintain this repo personaly.
I try my best to keep update though.


## License

MIT

