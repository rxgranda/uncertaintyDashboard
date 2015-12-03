(function(){
Template.__checkName("historicalcard");
Template["historicalcard"] = new Template("Template.historicalcard", (function() {
  var view = this;
  return HTML.getTag("paper-material")({
    "class": "card-content historicalcard-paper"
  }, "\n    ", HTML.DIV({
    "class": "chart-content hc-card-content"
  }, "\n      ", HTML.Comment(" Top Content "), "\n      ", HTML.DIV({
    "class": "card-content-top"
  }, "\n        ", HTML.DIV({
    "class": "card-content-top-text"
  }, "\n          ", HTML.DIV({
    "class": "card-title"
  }, "\n            ", HTML.DIV({
    "class": "card-title-text"
  }, "\n              Historical Data\n            "), "\n            ", HTML.getTag("iron-icon")({
    icon: "icons:info"
  }), "\n          "), "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOn"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "card-subtitle"
    }, "\n            Strong Influence\n          "), "\n          " ];
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "card-settings-icon"
  }, "\n        ", HTML.Comment(' <iron-icon class="settings-icon" icon="icons:settings"></iron-icon> '), "\n        ", HTML.getTag("paper-toggle-button")({
    "class": "hc-toggle",
    checked: ""
  }), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOn"));
  }, function() {
    return [ "\n      ", HTML.Comment(" Middle Content "), "\n      ", HTML.DIV({
      "class": "card-content-middle"
    }, "\n        ", HTML.DIV({
      "class": "sg-chart-container"
    }, "\n          ", HTML.DIV({
      "class": "sg-vertical-axis"
    }, "\n            ", HTML.DIV({
      "class": "sg-vertical-axis-title"
    }, "Consistency"), "\n          "), "\n          ", HTML.DIV({
      "class": "hc-svg-container"
    }, "\n            ", HTML.SVG({
      id: "area"
    }, "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "0",
      x2: "0",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "24",
      x2: "24",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "48",
      x2: "48",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "72",
      x2: "72",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "96",
      x2: "96",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "120",
      x2: "120",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "144",
      x2: "144",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "168",
      x2: "168",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "192",
      x2: "192",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "216",
      x2: "216",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "240",
      x2: "240",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "264",
      x2: "264",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "288",
      x2: "288",
      y1: "15",
      y2: "170",
      stroke: "#9e9e9e",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "312",
      x2: "312",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n              ", HTML.LINE({
      "class": "animated fadeIn",
      x1: "335",
      x2: "335",
      y1: "15",
      y2: "170",
      stroke: "#BDBDBD",
      "stroke-width": "1",
      "stroke-dasharray": "1,3"
    }), "\n            "), "\n          "), "\n          ", HTML.INPUT({
      type: "text",
      id: "selector",
      name: "example_name",
      value: "",
      style: "display: none;"
    }), "\n        "), "\n      "), "\n      ", HTML.Comment(" Bottom Content "), "\n      ", HTML.DIV({
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
