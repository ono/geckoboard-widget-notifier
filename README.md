# Geckoboard Widget Notifier

Geckoboard Widget Notifier is a sample bookmarklet notifying widget update.
Hack the sample script as you want.

## Demo

1. Copy [widget_event_bml_sample.js](https://github.com/ono/geckoboard-widget-notifier/blob/master/widget_event_bml_sample.js)
1. Create a bookmarklet from it<br>
   e.g. Paste the code on http://mrcoles.com/bookmarklet/ and register the bookmarklet in your bookmark
1. Open developer tool and visit: https://tatsuyatest.geckoboard.com/dashboards/8280C1B78C1D7FB7
1. Click the bookmarklet

You will see some messages in console and get an alert when VISITOR widget is
updated.

(Confirmed OS X Chrome.)

## Hacking

Hope sample bookmarklet has already gave you some idea, though, I put some tips that may help your hacking.

#### Selecting Widget

The sample code shows you a way selecting a widgt by title.

You can also use widget\_id to match that you can find in article tag in
dashboard html.

```
<article class="widget ..." id="widget-15095312" style="...">
```

If the widget html element is like above, the widget\_id would be `15095312`.

Then you can get a widget in bookmarklet code:

```
var widget = _(GB.models.widgets.models).find(
  function(model) { return model.id == 15095312 }
);
```

#### Alerting

I haven't tried but you should be able to use html5 audio API instead of alert
function.
You can also manipulate DOM: changing background colour, playing with html5
amimation, showing a funny animated gif etc.


#### Developer tool

Develop your script on developer tool before creating a bookmarklet.
Once you confirm everything works on developer tool, you can create the bookmarklet and it should
work straight away.


## Disclaimer

It does not use any official API.
When Geckoboard upgrade front-end code, it may stop working suddenly.
Geckoboard will not guarantee that the sample bookmarklet continues to work in the future.

Although I am working for Geckoboard, please understand I maintain this repo personaly.
I try my best to keep update though.


## License

MIT

