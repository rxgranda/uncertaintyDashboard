(function(){
Template.__checkName("coursescard");
Template["coursescard"] = new Template("Template.coursescard", (function() {
  var view = this;
  return HTML.getTag("paper-material")({
    "class": "card-content coursescard-paper"
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
  }, "\n              Courses Overview\n            "), "\n            ", HTML.getTag("iron-icon")({
    icon: "icons:info"
  }), "\n          "), "\n          ", HTML.DIV({
    "class": "card-subtitle"
  }, "\n            Strong Influence\n          "), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "card-settings-icon"
  }, "\n        ", HTML.getTag("iron-icon")({
    "class": "settings-icon",
    icon: "icons:settings"
  }), "\n      "), "\n      ", HTML.Comment(" Middle Content "), "\n      ", HTML.DIV({
    "class": "card-content-middle"
  }, "\n        ", HTML.DIV({
    "class": "cc-chart-container"
  }, "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("sessionCourses"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "sg-vertical-axis"
    }, "\n            ", HTML.DIV({
      "class": "sg-vertical-axis-title",
      style: "left: -12px;"
    }, "Students"), "\n          "), "\n          ", HTML.DIV({
      "class": "cc-hline"
    }), "\n          " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "cc-nothing animated fadeIn"
    }, "\n            ", HTML.DIV({
      "class": "cc-nothing-message"
    }, "No Courses to Show"), "\n            ", HTML.DIV({
      "class": "cc-nothing-add"
    }, "Add Courses"), "\n          "), "\n          " ];
  }), "\n\n          ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("sessionCourses"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "cc-course animated fadeIn"
    }, "\n            ", HTML.DIV({
      "class": "cc-squares"
    }, "\n              ", HTML.DIV({
      "class": "cc-square",
      style: function() {
        return [ "height:", Spacebars.mustache(view.lookup("percent")), "%" ];
      }
    }, "\n                ", HTML.getTag("paper-badge")({
      "class": "cc-badge",
      label: function() {
        return Spacebars.mustache(view.lookup("students"));
      }
    }), "\n                ", HTML.getTag("paper-ripple")(), "\n              "), "\n              ", HTML.getTag("paper-ripple")({
      style: "color: #eeeeee;"
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "cc-meta"
    }, "\n              ", HTML.DIV({
      "class": "cc-name"
    }, Blaze.View("lookup:name", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("name")));
    })), "\n              ", HTML.DIV({
      "class": "cc-id  "
    }, Blaze.View("lookup:_id", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_id")));
    })), "\n            "), "\n          "), "\n          " ];
  }), "\n\n        "), "\n      "), "\n      ", HTML.Comment(" Bottom Content "), "\n      ", HTML.DIV({
    "class": "card-content-bottom"
  }, "\n        ", HTML.DIV({
    "class": "card-content-control0"
  }, "\n          ", HTML.DIV({
    "class": "control0-course-details"
  }, "\n            ", HTML.DIV({
    "class": "control-title"
  }, "Course Details"), "\n            ", HTML.DIV({
    "class": "course-details-content"
  }, "\n              ", Blaze.If(function() {
    return Spacebars.call(view.lookup("sessionCourses"));
  }, function() {
    return [ "\n              ", HTML.DIV("\n                ", HTML.DIV({
      "class": "course-details course-details-name"
    }, "\n                  ", HTML.DIV({
      "class": "detail-title"
    }, "Name:", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    })), "\n                  ", HTML.DIV({
      "class": "detail-sub"
    }, Blaze.View("lookup:selectedCourse.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("selectedCourse"), "name"));
    })), "\n                "), "\n                ", HTML.DIV({
      "class": "course-details course-details-id"
    }, "\n                  ", HTML.DIV({
      "class": "detail-title"
    }, "ID:", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    })), "\n                  ", HTML.DIV({
      "class": "detail-sub"
    }, Blaze.View("lookup:selectedCourse._id", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("selectedCourse"), "_id"));
    })), "\n                "), "\n              "), "\n              ", HTML.DIV("\n                ", HTML.DIV({
      "class": "course-details course-details-students"
    }, "\n                  ", HTML.DIV({
      "class": "detail-title animated fadeIn"
    }, "Students:", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    })), "\n                  ", HTML.DIV({
      "class": "detail-sub animated fadeIn"
    }, Blaze.View("lookup:selectedCourse.students", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("selectedCourse"), "students"));
    })), "\n                "), "\n                ", HTML.DIV({
      "class": "course-details course-details-difficulty"
    }, "\n                  ", HTML.DIV({
      "class": "detail-title"
    }, "Difficulty:", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    })), "\n                  ", HTML.DIV({
      "class": "detail-sub"
    }, "Easy"), "\n                "), "\n              "), "\n              " ];
  }, function() {
    return "\n                No Selected Courses\n              ";
  }), "\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
    "class": "card-content-control1"
  }, "\n          ", HTML.DIV({
    "class": "control-title"
  }, "Compliance: ", HTML.DIV({
    "class": "control-subtitle"
  }, Blaze.View("lookup:compliance", function() {
    return Spacebars.mustache(view.lookup("compliance"));
  }))), "\n          ", HTML.getTag("paper-slider")({
    "class": "cc-paper-slider",
    pin: "",
    snaps: "",
    max: "5",
    step: "1",
    value: "5"
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "card-fullscreen-icon"
  }, "\n          ", HTML.getTag("iron-icon")({
    icon: "icons:fullscreen"
  }), "\n        "), "\n      "), "\n    "), "\n    ", HTML.DIV({
    "class": "settings-content"
  }, "\n      ", HTML.DIV({
    "class": "card-content-top"
  }, "\n        ", HTML.DIV({
    "class": "card-content-top-text"
  }, "\n          ", HTML.DIV({
    "class": "card-title"
  }, "\n            ", HTML.DIV({
    "class": "card-title-text"
  }, "\n              Settings\n            "), "\n            ", HTML.getTag("iron-icon")({
    icon: "icons:info"
  }), "\n          "), "\n          ", HTML.DIV({
    "class": "card-subtitle-tool"
  }, "\n            ", HTML.getTag("paper-input")({
    label: "Search for a Course",
    id: "search-box"
  }, "\n              ", HTML.getTag("iron-icon")({
    icon: "search",
    prefix: ""
  }), "\n              ", HTML.Comment(' <paper-icon-button suffix class="clear-search" icon="clear" alt="clear" title="clear" tabindex="0" style="color: red;"></paper-icon-button> '), "\n            "), "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getCourses"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      "class": "search-results"
    }, "\n              ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getCourses"));
    }, function() {
      return [ "\n              ", HTML.DIV({
        "class": "result-course",
        style: "position: relative"
      }, "\n                ", HTML.DIV({
        "class": "result-name"
      }, Blaze.View("lookup:name", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("name")));
      })), "\n                ", HTML.DIV({
        "class": "result-desc"
      }, Blaze.View("lookup:_id", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_id")));
      })), "\n                ", HTML.getTag("paper-ripple")(), "\n              "), "\n              " ];
    }), "\n            "), "\n            " ];
  }), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Comment(' <div class="card-content-middle"></div> '), "\n      ", HTML.DIV({
    "class": "card-content-bottom"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("sessionCourses"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "control-title"
    }, "Selected Courses"), "\n        ", HTML.DIV({
      "class": "selected-courses"
    }, "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("sessionCourses"));
    }, function() {
      return [ "\n          ", HTML.DIV({
        "class": "selected-container animated fadeIn"
      }, "\n            ", HTML.getTag("paper-checkbox")({
        "class": "selected-course",
        checked: ""
      }, "\n              ", HTML.DIV({
        id: "checkboxLabel",
        "class": "selected-course-meta"
      }, "\n                ", HTML.DIV({
        "class": "course-name"
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "\n                ", HTML.DIV({
        "class": "course-id"
      }, Blaze.View("lookup:_id", function() {
        return Spacebars.mustache(view.lookup("_id"));
      })), "\n              "), "\n            "), "\n            ", HTML.getTag("iron-icon")({
        "class": "remove-selected-course",
        icon: "icons:close"
      }), "\n          "), "\n          " ];
    }), "\n        "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
