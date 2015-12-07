/*
* Template life Cycle (Events)
*/
Template.missingcourses.events({
  "click .gc-toggle": function(event,template) {
    if(template.$(".sc-toggle").attr("checked")){
      Session.set("sc-toggle",true);
    } else {
      Session.set("sc-toggle",false);
    }
  },
  "click .radio-green": function(event,template) {
    Session.set("showRadioSC", {passed: true, failed: false, other: false});
  },
  "click .radio-red": function(event,template) {
    Session.set("showRadioSC", {passed: false, failed: true, other: false});
  },
  "click .radio-gray": function(event,template) {
    Session.set("showRadioSC", {passed: false, failed: false, other: true});
  },
  "click .sc-course": function(event,template) {
    var parent = $(event.target).parents(".sc-course");
    template.$(".sc-course").css("background","#fafafa");
    parent.css("background","#eeeeee");
  }
});

/*
* Display data from helpers
*/
Template.missingcourses.helpers({
  passedCourses: function() {
    return Grades.find({"student": Session.get("student"), "status": "AP"}, {skip: 0, limit: 12}).fetch();
  },
  failedCourses: function() {
    return Grades.find({"student": Session.get("student"), "status": "RP"}, {skip: 0, limit: 12}).fetch();
  },
  showPassed: function() {
    return Session.get("showRadioSC").passed;
  },
  showFailed: function() {
    return Session.get("showRadioSC").failed;
  },
  isOn: function() {
    return Session.get("sc-toggle");
  },
  student: function() {
    return Session.get("student");
  }
});


Template.riskwidget.rendered = function () {};