(function(){
Template.__checkName("studentFactorsCard");
Template["studentFactorsCard"] = new Template("Template.studentFactorsCard", (function() {
  var view = this;
  return HTML.getTag("paper-material")({
    "class": "hc-card-content card-content"
  }, "\n    ", HTML.DIV({
    "class": "chart-content"
  }, "\n      ", HTML.Comment(" Top Content "), "\n      ", HTML.DIV({
    "class": "card-content-top"
  }, "\n        ", HTML.DIV({
    "class": "card-content-top-text"
  }, "\n          ", HTML.DIV({
    "class": "card-title"
  }, "\n            ", HTML.DIV({
    "class": "card-title-text"
  }, "\n              Student Factors\n            "), "\n            ", HTML.getTag("iron-icon")({
    icon: "icons:info"
  }), "\n          "), "\n      \n          ", HTML.DIV({
    "class": "card-subtitle"
  }, "\n            Strong Influence\n          "), "\n         \n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "card-settings-icon"
  }, "\n        ", HTML.Comment(' <iron-icon class="settings-icon" icon="icons:settings"></iron-icon> '), "\n        ", HTML.getTag("paper-toggle-button")({
    "class": "sf-toggle"
  }), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOn"));
  }, function() {
    return [ "\n      ", HTML.Comment(" Middle Content "), "\n      ", HTML.DIV({
      "class": "card-content-middle"
    }, "\n        ", HTML.DIV({
      "class": "sg-chart-container"
    }, "\n          ", HTML.DIV({
      style: "height: 135px;"
    }), "\n\n", HTML.DIV({
      id: "chart"
    }, "\n  ", HTML.SVG(), "\n"), "\n\n\n\n        "), "\n      "), "\n      ", HTML.Comment(" Bottom Content "), "\n      ", HTML.DIV({
      "class": "card-content-bottom"
    }, "\n        ", HTML.DIV({
      "class": "card-content-control0"
    }, "\n          ", HTML.DIV({
      "class": "control-title"
    }, "Records"), "\n          ", HTML.DIV({
      "class": "card-content-columns"
    }, "\n            ", HTML.DIV("\n              ", HTML.getTag("paper-checkbox")({
      checked: ""
    }, "Program"), "\n              ", HTML.getTag("paper-checkbox")({
      checked: ""
    }, "Sylabus"), "\n            "), "\n            ", HTML.DIV("\n              ", HTML.getTag("paper-checkbox")({
      checked: ""
    }, "Evaluation"), "\n              ", HTML.getTag("paper-checkbox")({
      checked: ""
    }, "Instructors"), "\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
      "class": "card-content-control1"
    }, "\n          ", HTML.DIV({
      "class": "control-title"
    }, "Compliance: ", HTML.DIV({
      "class": "control-subtitle"
    }, Blaze.View("lookup:compliance", function() {
      return Spacebars.mustache(view.lookup("compliance"));
    }))), "\n          ", HTML.getTag("paper-slider")({
      "class": "hc-paper-slider",
      pin: "",
      snaps: "",
      max: "5",
      step: "1",
      value: "5"
    }), "\n        "), "\n        ", HTML.DIV({
      "class": "card-fullscreen-icon"
    }, "\n          ", HTML.getTag("iron-icon")({
      icon: "icons:fullscreen"
    }), "\n        "), "\n      "), "\n      " ];
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "card-content-middle"
    }, "\n        ", HTML.DIV({
      "class": "cc-nothing animated fadeIn",
      style: "background: none; height: 400px;"
    }, "\n          ", HTML.DIV({
      "class": "cc-nothing-message"
    }, "This Card is Turned Off"), "\n        "), "\n      "), "\n      " ];
  }), "\n    "), "\n  ");
}));

}).call(this);
