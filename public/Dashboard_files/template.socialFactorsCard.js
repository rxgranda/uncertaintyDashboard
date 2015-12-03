(function(){
Template.__checkName("socialFactorsCard");
Template["socialFactorsCard"] = new Template("Template.socialFactorsCard", (function() {
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
  }, "\n              Social Factors\n            "), "\n            ", HTML.getTag("iron-icon")({
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
  }, "\n        ", HTML.DIV({
    style: "display:block;"
  }, "\n          ", HTML.DIV({
    id: "pie-title",
    "class": "pie-title"
  }, "Nationality"), "\n", HTML.CANVAS({
    id: "socialChart",
    width: "200",
    height: "140"
  }), "\n\n", HTML.DIV({
    "class": "horizontal-section"
  }, "\n          ", HTML.getTag("paper-radio-group")({
    "class": "showPieSocial",
    selected: "nationality"
  }, "\n            ", HTML.getTag("paper-radio-button")({
    "class": "gender radio1",
    name: "gender"
  }), "\n            ", HTML.getTag("paper-radio-button")({
    "class": "nationality radio2",
    name: "nationality"
  }), "\n            ", HTML.getTag("paper-radio-button")({
    "class": "residence radio3",
    name: "residence"
  }), "\n            ", HTML.getTag("paper-radio-button")({
    "class": "marital radio4",
    name: "marital"
  }), "\n            ", HTML.getTag("paper-radio-button")({
    "class": "disability radio5",
    name: "disability"
  }), "\n          "), "\n        "), "\n"), "\n\n      "), "\n      ", HTML.Comment(" Bottom Content "), "\n      ", HTML.DIV({
    "class": "card-content-bottom"
  }, "\n        ", HTML.DIV({
    "class": "card-content-control0"
  }, "\n          ", HTML.DIV({
    "class": "control-title"
  }, "Courses"), "\n          ", HTML.DIV({
    "class": "card-content-columns"
  }, "\n\n\n", HTML.DIV({
    "class": "horizontal-section",
    style: "flex-direction: row;"
  }, "                 \n                 \n              ", HTML.DIV("\n                  \n                  ", HTML.getTag("paper-checkbox")({
    id: "gender",
    "class": "check1 checkSocial",
    checked: ""
  }, " \n                    ", HTML.DIV({
    "class": "label-checkbox-courses"
  }, "Gender"), "\n                  "), "\n                  ", HTML.getTag("paper-checkbox")({
    id: "nationality",
    "class": "check2 checkSocial",
    checked: ""
  }, " \n                    ", HTML.DIV({
    "class": "label-checkbox-courses"
  }, "Nationality"), "\n                  "), "\n                   \n                "), "\n\n                 ", HTML.DIV("\n                  \n                  ", HTML.getTag("paper-checkbox")({
    id: "residence",
    "class": "check3 checkSocial",
    checked: ""
  }, " \n                    ", HTML.DIV({
    "class": "label-checkbox-courses"
  }, "Residence"), "\n                  "), "\n                  ", HTML.getTag("paper-checkbox")({
    id: "marital",
    "class": "check4 checkSocial",
    checked: ""
  }, " \n                    ", HTML.DIV({
    "class": "label-checkbox-courses"
  }, "Marital Status"), "\n                  "), "\n                   \n                "), "\n\n       ", HTML.DIV("\n                  \n                  ", HTML.getTag("paper-checkbox")({
    id: "disability",
    "class": "check5 checkSocial",
    checked: ""
  }, " \n                    ", HTML.DIV({
    "class": "label-checkbox-courses"
  }, "Disability"), "\n                  "), "\n                 \n                   \n                "), "\n\n                          \n      \n        "), "\n\n          \n          "), "\n        "), "\n        ", HTML.DIV({
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
