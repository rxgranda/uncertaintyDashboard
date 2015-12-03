(function(){
Template.__checkName("gradescard");
Template["gradescard"] = new Template("Template.gradescard", (function() {
  var view = this;
  return HTML.getTag("paper-material")({
    "class": "card-content gradescard-paper"
  }, "\n    ", HTML.DIV({
    "class": "chart-content gc-card-content"
  }, "\n      ", HTML.DIV({
    "class": "card-content-top"
  }, "\n        ", HTML.DIV({
    "class": "card-content-top-text"
  }, "\n          ", HTML.DIV({
    "class": "card-title"
  }, "\n            ", HTML.DIV({
    "class": "card-title-text"
  }, "\n              Students Grades\n            "), "\n            ", HTML.getTag("iron-icon")({
    icon: "icons:info"
  }), "\n          "), "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOn"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "card-subtitle"
    }, "\n            Weak Influence\n          "), "\n          " ];
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "card-settings-icon"
  }, "\n        ", HTML.Comment(' <iron-icon class="settings-icon" icon="icons:settings"></iron-icon> '), "\n        ", HTML.getTag("paper-toggle-button")({
    "class": "gc-toggle",
    checked: ""
  }), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOn"));
  }, function() {
    return [ "\n      ", HTML.Comment(" Middle Content "), "\n      ", HTML.DIV({
      "class": "card-content-middle"
    }, "\n        ", Blaze.If(function() {
      return Spacebars.call(view.lookup("isCourse"));
    }, function() {
      return [ "\n        ", HTML.DIV({
        "class": "sg-chart-container"
      }, "\n          ", HTML.DIV({
        "class": "sg-vertical-axis"
      }, "\n            ", HTML.DIV({
        "class": "sg-vertical-axis-title"
      }, "Performance"), "\n          "), "\n          ", HTML.DIV({
        "class": "sg-horizontal-axis"
      }, "\n            ", HTML.DIV({
        "class": "sg-horizontal-axis-title"
      }, "Grades"), "\n          "), "\n          ", HTML.SVG({
        height: "175",
        width: "350",
        style: "overflow: inherit;"
      }, "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "20",
        x2: "20",
        y1: "5",
        y2: "175",
        stroke: "#9e9e9e",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "18",
        y: "180",
        fill: "#424242"
      }, "6"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "60",
        x2: "60",
        y1: "5",
        y2: "175",
        stroke: "#BDBDBD",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "54",
        y: "180",
        fill: "grey"
      }, "6.5"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "100",
        x2: "100",
        y1: "5",
        y2: "175",
        stroke: "#9e9e9e",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "98",
        y: "180",
        fill: "#424242"
      }, "7"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "140",
        x2: "140",
        y1: "5",
        y2: "175",
        stroke: "#BDBDBD",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "134",
        y: "180",
        fill: "grey"
      }, "7.5"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "180",
        x2: "180",
        y1: "5",
        y2: "175",
        stroke: "#9e9e9e",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "178",
        y: "180",
        fill: "#424242"
      }, "8"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "220",
        x2: "220",
        y1: "5",
        y2: "175",
        stroke: "#BDBDBD",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "214",
        y: "180",
        fill: "grey"
      }, "8.5"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "260",
        x2: "260",
        y1: "5",
        y2: "175",
        stroke: "#9e9e9e",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "258",
        y: "180",
        fill: "#424242"
      }, "9"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "300",
        x2: "300",
        y1: "5",
        y2: "175",
        stroke: "#BDBDBD",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "294",
        y: "180",
        fill: "grey"
      }, "9.5"), "\n            ", HTML.LINE({
        "class": "animated fadeIn",
        x1: "340",
        x2: "340",
        y1: "5",
        y2: "175",
        stroke: "#9e9e9e",
        "stroke-width": "1",
        "stroke-dasharray": "1,3"
      }), "\n            ", HTML.TEXT({
        x: "334",
        y: "180",
        fill: "#424242"
      }, "10"), "\n            ", Blaze.Each(function() {
        return Spacebars.call(view.lookup("excellent"));
      }, function() {
        return [ "\n            ", HTML.CIRCLE({
          cx: function() {
            return Spacebars.mustache(view.lookup("grade"));
          },
          cy: function() {
            return Spacebars.mustache(view.lookup("performance"));
          },
          r: "4",
          fill: function() {
            return Spacebars.mustache(view.lookup("gp"));
          },
          "class": function() {
            return [ Spacebars.mustache(view.lookup("course")), " sg-excellent animated fadeInLeft" ];
          }
        }), "\n            " ];
      }), "\n            ", Blaze.Each(function() {
        return Spacebars.call(view.lookup("good"));
      }, function() {
        return [ "\n            ", HTML.CIRCLE({
          cx: function() {
            return Spacebars.mustache(view.lookup("grade"));
          },
          cy: function() {
            return Spacebars.mustache(view.lookup("performance"));
          },
          r: "4",
          fill: function() {
            return Spacebars.mustache(view.lookup("gp"));
          },
          "class": function() {
            return [ Spacebars.mustache(view.lookup("course")), " sg-good animated fadeInLeft" ];
          }
        }), "\n            " ];
      }), "\n            ", Blaze.Each(function() {
        return Spacebars.call(view.lookup("regular"));
      }, function() {
        return [ "\n            ", HTML.CIRCLE({
          cx: function() {
            return Spacebars.mustache(view.lookup("grade"));
          },
          cy: function() {
            return Spacebars.mustache(view.lookup("performance"));
          },
          r: "4",
          fill: function() {
            return Spacebars.mustache(view.lookup("gp"));
          },
          "class": function() {
            return [ Spacebars.mustache(view.lookup("course")), " sg-regular animated fadeInLeft" ];
          }
        }), "\n            " ];
      }), "\n            ", Blaze.Each(function() {
        return Spacebars.call(view.lookup("lazy"));
      }, function() {
        return [ "\n            ", HTML.CIRCLE({
          cx: function() {
            return Spacebars.mustache(view.lookup("grade"));
          },
          cy: function() {
            return Spacebars.mustache(view.lookup("performance"));
          },
          r: "4",
          fill: function() {
            return Spacebars.mustache(view.lookup("gp"));
          },
          "class": function() {
            return [ Spacebars.mustache(view.lookup("course")), " sg-lazy animated fadeInLeft" ];
          }
        }), "\n            " ];
      }), "\n            ", Blaze.Each(function() {
        return Spacebars.call(view.lookup("bad"));
      }, function() {
        return [ "\n            ", HTML.CIRCLE({
          cx: function() {
            return Spacebars.mustache(view.lookup("grade"));
          },
          cy: function() {
            return Spacebars.mustache(view.lookup("performance"));
          },
          r: "4",
          fill: function() {
            return Spacebars.mustache(view.lookup("gp"));
          },
          "class": function() {
            return [ Spacebars.mustache(view.lookup("course")), " sg-bad animated fadeInLeft" ];
          }
        }), "\n            " ];
      }), "\n            ", Blaze.If(function() {
        return Spacebars.call(view.lookup("thisStudent"));
      }, function() {
        return [ "\n            ", HTML.LINE({
          "class": "sg-this animated fadeIn",
          x1: "20",
          x2: "345",
          y1: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thisStudent"), "performance"));
          },
          y2: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thisStudent"), "performance"));
          },
          stroke: "rgba(178, 93, 126, 0.65)",
          "stroke-width": "1"
        }), "\n            ", HTML.LINE({
          "class": "sg-this animated fadeIn",
          x1: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thisStudent"), "gpa"));
          },
          x2: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thisStudent"), "gpa"));
          },
          y1: "0",
          y2: "170",
          stroke: "rgba(178, 93, 126, 0.65)",
          "stroke-width": "1"
        }), "\n            ", HTML.CIRCLE({
          cx: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thisStudent"), "gpa"));
          },
          cy: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thisStudent"), "performance"));
          },
          r: "5",
          fill: "#b25d7e",
          "class": "sg-this animated fadeIn"
        }), "\n            ", HTML.Comment(' <text x="{{thisStudent.gpa}}" y="203" fill="#424242"></text> '), "\n            " ];
      }), "\n          "), "\n        "), "\n        " ];
    }, function() {
      return [ "\n        ", HTML.DIV({
        "class": "cc-nothing animated fadeIn"
      }, "\n          ", HTML.DIV({
        "class": "cc-nothing-message"
      }, "You haven't selected any courses"), "\n          ", HTML.DIV({
        "class": "cc-nothing-add"
      }), "\n        "), "\n        " ];
    }), "\n      "), "\n      ", HTML.Comment(" Bottom Content "), "\n      ", HTML.DIV({
      "class": "card-content-bottom"
    }, "\n        ", HTML.DIV({
      "class": "card-content-control0"
    }, "\n          ", HTML.DIV({
      "class": "control-title"
    }, "Students"), "\n          ", HTML.DIV({
      "class": "card-content-columns"
    }, "\n            ", HTML.DIV("\n              ", HTML.getTag("paper-checkbox")({
      "class": "good-grades",
      checked: ""
    }, "Good"), "\n              ", HTML.getTag("paper-checkbox")({
      "class": "bad-grades",
      checked: ""
    }, "Bad"), "\n            "), "\n            ", HTML.DIV("\n              ", HTML.getTag("paper-checkbox")({
      "class": "best-grades",
      checked: ""
    }, "Excellent"), "\n              ", HTML.getTag("paper-checkbox")({
      "class": "lazy-grades",
      checked: ""
    }, "Lazy"), "\n            "), "\n            ", HTML.DIV("\n              ", HTML.getTag("paper-checkbox")({
      "class": "student-grades",
      checked: ""
    }, "This Student"), "\n              ", HTML.getTag("paper-checkbox")({
      "class": "regular-grades",
      checked: ""
    }, "Regular"), "\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
      "class": "card-content-control1"
    }, "\n          ", HTML.DIV({
      "class": "control-title"
    }, "Compliance: ", HTML.DIV({
      "class": "control-subtitle"
    }, Blaze.View("lookup:compliance", function() {
      return Spacebars.mustache(view.lookup("compliance"));
    }))), "\n          ", HTML.getTag("paper-slider")({
      "class": "gc-paper-slider",
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
