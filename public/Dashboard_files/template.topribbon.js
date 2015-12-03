(function(){
Template.__checkName("topribbon");
Template["topribbon"] = new Template("Template.topribbon", (function() {
  var view = this;
  return HTML.DIV({
    "class": "top-ribbon"
  }, "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("studentId"));
  }, function() {
    return [ "\n    Student: ", HTML.SPAN(Blaze.View("lookup:studentId", function() {
      return Spacebars.mustache(view.lookup("studentId"));
    })), "\n    ", HTML.getTag("iron-icon")({
      icon: "icons:arrow-drop-down"
    }), "\n    " ];
  }, function() {
    return [ "\n    Working without a\n    ", HTML.SPAN("Student Profile"), "\n    ", HTML.getTag("iron-icon")({
      icon: "icons:arrow-drop-down"
    }), "\n    " ];
  }), "\n  ");
}));

}).call(this);
