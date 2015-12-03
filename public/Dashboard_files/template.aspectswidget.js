(function(){
Template.__checkName("aspectswidget");
Template["aspectswidget"] = new Template("Template.aspectswidget", (function() {
  var view = this;
  return HTML.DIV({
    "class": "aspects-content"
  }, "\n    ", HTML.DIV({
    "class": "aspects-wrapper"
  }, "\n      ", HTML.Raw('<div class="aspects-bar"></div>'), "\n      ", HTML.Raw('<div style="width: 10px"></div>'), "\n\n      ", HTML.DIV({
    "class": "aspects-list"
  }, "\n        ", HTML.DIV({
    "class": "aspect courses-aspect animated fadeIn"
  }, "\n          ", HTML.Raw('<div class="aspect-bullet">1</div>'), "\n          ", HTML.Raw('<div class="aspect-text">Course Overview</div>'), "\n          ", HTML.getTag("paper-ripple")(), "\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("gradesOn"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "aspect grades-aspect animated fadeIn"
    }, "\n          ", HTML.DIV({
      "class": "aspect-bullet"
    }, "2"), "\n          ", HTML.DIV({
      "class": "aspect-text"
    }, "Students Grades"), "\n          ", HTML.getTag("paper-ripple")(), "\n        "), "\n        " ];
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "aspect grades-aspect animated fadeIn"
    }, "\n          ", HTML.DIV({
      "class": "aspect-bullet",
      style: "opacity: 0.15"
    }, "2"), "\n          ", HTML.DIV({
      "class": "aspect-text",
      style: "opacity: 0.15"
    }, "Students Grades"), "\n          ", HTML.getTag("paper-ripple")(), "\n        "), "\n        " ];
  }), "\n\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("historyOn"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "aspect history-aspect animated fadeIn"
    }, "\n          ", HTML.DIV({
      "class": "aspect-bullet"
    }, "3"), "\n          ", HTML.DIV({
      "class": "aspect-text"
    }, "Historical Data"), "\n          ", HTML.getTag("paper-ripple")(), "\n        "), "\n        " ];
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "aspect history-aspect animated fadeIn"
    }, "\n          ", HTML.DIV({
      "class": "aspect-bullet",
      style: "opacity: 0.15"
    }, "3"), "\n          ", HTML.DIV({
      "class": "aspect-text",
      style: "opacity: 0.15"
    }, "Historical Data"), "\n          ", HTML.getTag("paper-ripple")(), "\n        "), "\n        " ];
  }), "\n        ", HTML.Raw('<!-- <div class="aspect">\n          <div class="aspect-bullet">4</div>\n          <div class="aspect-text">Students Factors</div>\n          <paper-ripple></paper-ripple>\n        </div>\n        <div class="aspect">\n          <div class="aspect-bullet">5</div>\n          <div class="aspect-text">Course Factors</div>\n          <paper-ripple></paper-ripple>\n        </div> -->'), "\n      "), "\n    "), "\n    ", HTML.DIV({
    "class": "widget-title"
  }, "\n      ", HTML.Raw('<div class="widget-title-text">Strongest Aspects</div>'), "\n      ", HTML.getTag("iron-icon")({
    "class": "widget-title-icon",
    icon: "icons:info"
  }), "\n    "), "\n  ");
}));

}).call(this);
