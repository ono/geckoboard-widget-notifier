var title = "VISITOR";
var widget = _(GB.models.widgets.models).find(
  function(model) { return model.configuration().title.toUpperCase() == title }
);
widget.on("change", function() {
  console.debug("data fetched!!");
  if (+widget.data.item[0].value > 10000) {
    alert('yay!');
  }
});

console.debug("start monitoring the widget...");

