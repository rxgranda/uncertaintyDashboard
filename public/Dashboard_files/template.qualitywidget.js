(function(){
Template.__checkName("qualitywidget");
Template["qualitywidget"] = new Template("Template.qualitywidget", (function() {
  var view = this;
  return HTML.DIV({
    "class": "quality-content"
  }, "\n    ", HTML.DIV({
    "class": "quality-content-viz"
  }, "\n      ", HTML.getTag("progress-bubble")({
    "class": "quality-bubble",
    value: function() {
      return Spacebars.mustache(view.lookup("quality"));
    },
    max: "100"
  }, "\n        ", HTML.DIV({
    "class": "progress-title"
  }, Blaze.View("lookup:quality", function() {
    return Spacebars.mustache(view.lookup("quality"));
  })), "\n        ", HTML.DIV({
    "class": "progress-subtitle"
  }, "Cases"), "\n      "), "\n    "), "\n    ", HTML.DIV({
    "class": "widget-title"
  }, "\n      ", HTML.Raw('<div class="widget-title-text">Prediction Quality</div>'), "\n      ", HTML.getTag("iron-icon")({
    "class": "widget-title-icon",
    icon: "icons:info"
  }), "\n    "), HTML.Raw('\n    <div class="widget-subtitle">Trustworthy</div>\n  '));
}));

}).call(this);
