(function(){
Template.__checkName("riskwidget");
Template["riskwidget"] = new Template("Template.riskwidget", (function() {
  var view = this;
  return HTML.DIV({
    "class": "risk-content"
  }, "\n    ", HTML.DIV({
    "class": "risk-content-viz"
  }, "\n      ", HTML.getTag("progress-bubble")({
    "class": "risk-bubble",
    value: function() {
      return Spacebars.mustache(view.lookup("risk"));
    }
  }, "\n        ", HTML.DIV({
    "class": "progress-title"
  }, Blaze.View("lookup:risk", function() {
    return Spacebars.mustache(view.lookup("risk"));
  })), "\n        ", HTML.DIV({
    "class": "progress-subtitle"
  }, Blaze.View("lookup:riskText", function() {
    return Spacebars.mustache(view.lookup("riskText"));
  })), "\n        ", HTML.DIV({
    style: "display: none"
  }, Blaze.View("lookup:riskColor", function() {
    return Spacebars.mustache(view.lookup("riskColor"));
  })), "\n      "), "\n    "), "\n    ", HTML.DIV({
    "class": "widget-title"
  }, "\n      ", HTML.Raw('<div class="widget-title-text">Chance of Success</div>'), "\n      ", HTML.getTag("iron-icon")({
    "class": "widget-title-icon",
    icon: "icons:info"
  }), "\n    "), HTML.Raw('\n    <div class="risk-slider slider-tray"></div>\n  '));
}));

}).call(this);
