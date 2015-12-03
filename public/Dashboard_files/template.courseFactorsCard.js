(function(){
Template.__checkName("courseFactorsCard");
Template["courseFactorsCard"] = new Template("Template.courseFactorsCard", (function() {
  var view = this;
  return HTML.getTag("paper-material")({
    "class": "card-content"
  }, "\n    ", HTML.DIV({
    "class": "chart-content"
  }, "\n      ", HTML.DIV({
    "class": "card-content-top"
  }, "\n        ", HTML.DIV({
    "class": "card-content-top-text"
  }, "\n          ", HTML.DIV({
    "class": "card-title"
  }, "\n            ", HTML.DIV({
    "class": "card-title-text"
  }, "\n              Course Factors\n            "), "\n            ", HTML.getTag("iron-icon")({
    icon: "icons:info"
  }), "\n          "), "\n          ", HTML.DIV({
    "class": "card-subtitle"
  }, "\n            Weak Influence\n          "), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "card-settings-icon"
  }, "\n        ", HTML.getTag("iron-icon")({
    "class": "settings-icon",
    icon: "icons:settings"
  }), "\n        ", HTML.getTag("paper-toggle-button")({
    checked: ""
  }), "\n      "), "\n      ", HTML.Comment(" Middle Content "), "\n      ", HTML.DIV({
    "class": "card-content-middle"
  }, "\n\n", HTML.CANVAS({
    id: "myChart",
    width: "340",
    height: "250"
  }), "\n\n      "), "\n      ", HTML.Comment(" Bottom Content "), "\n      ", HTML.DIV({
    "class": "card-content-bottom"
  }, "\n        ", HTML.DIV({
    "class": "card-content-control0"
  }, "\n          ", HTML.DIV({
    "class": "control-title"
  }, "Courses"), "\n          ", HTML.DIV({
    "class": "card-content-columns"
  }, "\n\n", HTML.DIV({
    "class": "horizontal-section",
    style: "flex-direction: row;"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("selectedCoursesFactor"));
  }, function() {
    return [ "            \n              ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("sessionCourses"));
    }, function() {
      return [ "\n                 \n              ", HTML.DIV("\n                  \n                  ", HTML.getTag("paper-checkbox")({
        id: function() {
          return [ "courseFactor", Spacebars.mustache(Spacebars.dot(view.lookup("first"), "id")) ];
        },
        "class": function() {
          return [ "check", Spacebars.mustache(Spacebars.dot(view.lookup("first"), "order")), " coursefactor" ];
        },
        checked: "",
        change: function() {
          return Spacebars.mustache(view.lookup("checkedIfChecked"), Spacebars.kw({
            id: Spacebars.dot(view.lookup("first"), "id")
          }));
        }
      }, " \n                    ", HTML.DIV({
        "class": "label-checkbox-courses"
      }, Blaze.View("lookup:first.name", function() {
        return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("first"), "name")));
      })), "\n                  "), "\n                   ", Blaze.If(function() {
        return Spacebars.call(view.lookup("second"));
      }, function() {
        return [ "    \n                      ", HTML.getTag("paper-checkbox")({
          id: function() {
            return [ "courseFactor", Spacebars.mustache(Spacebars.dot(view.lookup("second"), "id")) ];
          },
          "class": function() {
            return [ "check", Spacebars.mustache(Spacebars.dot(view.lookup("second"), "order")), " coursefactor" ];
          },
          checked: "",
          change: function() {
            return Spacebars.mustache(view.lookup("checkedIfChecked"), Spacebars.kw({
              id: Spacebars.dot(view.lookup("second"), "id")
            }));
          }
        }, " \n                      ", HTML.DIV({
          "class": "label-checkbox-courses"
        }, Blaze.View("lookup:second.name", function() {
          return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("second"), "name")));
        })), "\n                      "), "\n                \n                    " ];
      }), "\n                "), "\n              " ];
    }), "                   \n      " ];
  }, function() {
    return "\n            No Selected Courses\n      ";
  }), "\n        "), "\n            \n          "), "\n        "), "\n        ", HTML.DIV({
    "class": "card-content-control1"
  }, "\n          ", HTML.DIV({
    "class": "control-title"
  }, "Compliance"), "\n          ", HTML.getTag("paper-slider")({
    pin: "",
    value: "20"
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "card-fullscreen-icon"
  }, "\n          ", HTML.getTag("iron-icon")({
    icon: "icons:fullscreen"
  }), "\n        "), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
