(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.getTag("paper-toast")({
    id: "paperToast",
    text: ""
  }), "\n  ", HTML.getTag("paper-header-panel")({
    mode: "seamed"
  }, "\n    ", HTML.getTag("paper-toolbar")({
    "class": "tall"
  }, "\n      ", HTML.DIV({
    "class": "top"
  }, "\n        ", Spacebars.include(view.lookupTemplate("topribbon")), "\n      "), "\n      ", HTML.DIV({
    "class": "middle"
  }, "\n        ", Spacebars.include(view.lookupTemplate("riskwidget")), "\n        ", Spacebars.include(view.lookupTemplate("qualitywidget")), "\n        ", Spacebars.include(view.lookupTemplate("aspectswidget")), "\n      "), "\n      ", HTML.getTag("paper-tabs")({
    selected: "0",
    "class": "bottom self-end",
    style: "width: 300px;"
  }, "\n        ", HTML.getTag("paper-tab")("CALCULATOR"), "\n        ", HTML.getTag("paper-tab")("EXPLORER"), "\n      "), "\n    "), "\n    ", HTML.DIV({
    "class": "content"
  }, "\n      ", Spacebars.include(view.lookupTemplate("coursescard")), "\n      ", Spacebars.include(view.lookupTemplate("gradescard")), "\n      ", Spacebars.include(view.lookupTemplate("historicalcard")), "\n\n      ", Spacebars.include(view.lookupTemplate("courseFactorsCard")), "\n      ", Spacebars.include(view.lookupTemplate("studentFactorsCard")), "\n      ", Spacebars.include(view.lookupTemplate("socialFactorsCard")), "\n\n\n     \n    \n    "), "\n  ") ];
}));
Meteor.startup(Template.body.renderToDocument);

Meteor.startup(function() { $('body').attr({"class":"fullbleed layout vertical"}); });

}).call(this);
