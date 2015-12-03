(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/aspectswidget/aspectswidget.js                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.aspectswidget.events({                                        // 1
  "click .courses-aspect": function (event, template) {                // 2
    var animationName = "animated pulse";                              // 3
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $(".coursescard-paper").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);                              // 6
    });                                                                //
  },                                                                   //
  "click .grades-aspect": function (event, template) {                 // 9
    var animationName = "animated pulse";                              // 10
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $(".gradescard-paper").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);                              // 13
    });                                                                //
  },                                                                   //
  "click .history-aspect": function (event, template) {                // 16
    var animationName = "animated pulse";                              // 17
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $(".historicalcard-paper").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);                              // 20
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.aspectswidget.helpers({                                       // 25
  historyOn: function () {                                             // 26
    return Session.get("hc-toggle");                                   // 27
  },                                                                   //
  gradesOn: function () {                                              // 29
    return Session.get("gc-toggle");                                   // 30
  }                                                                    //
});                                                                    //
                                                                       //
Template.aspectswidget.rendered = function () {};                      // 34
/////////////////////////////////////////////////////////////////////////

}).call(this);
