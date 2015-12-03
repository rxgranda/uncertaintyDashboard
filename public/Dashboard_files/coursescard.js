(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/coursescard/coursescard.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*                                                                     //
* Instant search (Global values for client, NOT part of this template life cycle)
*/                                                                     //
var fields = ['name'];                                                 // 4
var options = { keepHistory: 1000, localSearch: true };                // 5
PackageSearch = new SearchSource('courses', fields, options);          // 6
                                                                       //
/*                                                                     //
* Template life Cycle (Events)                                         //
*/                                                                     //
Template.coursescard.events({                                          // 11
  "click .clear-search": function (event, template) {                  // 12
    template.$("#search-box").find("#input").val('');                  // 13
  },                                                                   //
  "click .settings-icon, click .cc-nothing-add": function (event, template) {
    if (!template.$(".card-settings-icon").hasClass("opened")) {       // 16
      template.$(".card-settings-icon").addClass("opened");            // 17
      template.$(".card-content").animate({ "min-width": "+=350px" }, "slow", function () {
        template.$(".settings-content").css("display", "flex");        // 19
        template.$(".card-settings-icon > iron-icon").fadeOut(300, function () {
          template.$(".card-settings-icon > iron-icon").attr("icon", "icons:close").fadeIn(300);
        });                                                            //
      });                                                              //
    } else {                                                           //
      template.$(".card-settings-icon").removeClass("opened");         // 25
      template.$(".settings-content").hide();                          // 26
      template.$(".card-content").animate({ "min-width": "-=350px" }, "slow ", function () {
        template.$(".card-settings-icon > iron-icon").fadeOut(300, function () {
          template.$(".card-settings-icon > iron-icon").attr("icon", "icons:settings").fadeIn(300);
        });                                                            //
      });                                                              //
    }                                                                  //
  },                                                                   //
  "keyup #search-box, click #input": _.throttle(function (e, template) {
    template.$(".search-results").show();                              // 35
    var text = $(e.target).val().trim();                               // 36
    PackageSearch.search(text);                                        // 37
  }, 200),                                                             //
  "click": function (event, template) {                                // 39
    template.$(".search-results").hide();                              // 40
  },                                                                   //
  "click .result-course": function (event, template) {                 // 42
    var course = this;                                                 // 43
    var courses = _.uniq(Session.get('courses'));                      // 44
    if (courses.length < 7) {                                          // 45
      courses = _.extend([], courses);                                 // 46
      courses.push(course._id);                                        // 47
      Session.set("courses", courses);                                 // 48
      Meteor.subscribe("this_courses", courses);                       // 49
      Meteor.subscribe("grades", courses);                             // 50
    } else {                                                           //
      $("#paperToast").attr("text", "Can't add more courses.");        // 52
      document.querySelector('#paperToast').show();                    // 53
    }                                                                  //
  },                                                                   //
  "click .remove-selected-course": function (event, template) {        // 56
    var id = this._id;                                                 // 57
    $(event.target).parent().fadeOut('slow', function () {             // 58
      var a = Session.get("courses");                                  // 59
      for (var i = a.length; i--;) {                                   // 60
        if (a[i] === id) {                                             // 61
          a.splice(i, 1);                                              // 62
        }                                                              //
      }                                                                //
      Session.set("courses", a);                                       // 65
      $(this).remove();                                                // 66
    });                                                                //
  },                                                                   //
  "click .cc-squares, click .cc-meta": function (event, template) {    // 69
    var id = this._id;                                                 // 70
    $(".gradescard-paper").find("circle").css("fill-opacity", "0.15");
    $(".gradescard-paper").find("circle").css("stroke", "none");       // 72
                                                                       //
    $("." + id).css("fill-opacity", "1");                              // 74
    $(".sg-this").css("fill-opacity", "1");                            // 75
    $("." + id).css("stroke", "#ececec");                              // 76
                                                                       //
    var parent = $(event.target).parents(".cc-course");                // 78
    template.$(".cc-squares").css("background", "#fafafa");            // 79
    template.$(".cc-meta").css("background", "#fafafa");               // 80
    parent.find(".cc-squares").css("background", "#EEEEEE");           // 81
    parent.find(".cc-meta").css("background", "#EEEEEE");              // 82
    Session.set("selected-course", id);                                // 83
  },                                                                   //
  "change .cc-paper-slider": function (event, template) {              // 85
    var n = template.$(".cc-paper-slider").attr("value");              // 86
    if (n == 5) template.$(".coursescard-paper").css("opacity", "1");  // 87
    if (n == 4) template.$(".coursescard-paper").css("opacity", "0.85");
    if (n == 3) template.$(".coursescard-paper").css("opacity", "0.75");
    if (n == 2) template.$(".coursescard-paper").css("opacity", "0.65");
    if (n == 1) template.$(".coursescard-paper").css("opacity", "0.55");
    if (n == 0) template.$(".coursescard-paper").css("opacity", "0.45");
    Session.set("cc-compliance", n);                                   // 93
    Websocket.send('{"reuqestId": "5645f7f7ef0bde57344c84de"}');       // 94
  }                                                                    //
});                                                                    //
                                                                       //
/*                                                                     //
* Display data from helpers                                            //
*/                                                                     //
Template.coursescard.helpers({                                         // 101
  getCourses: function () {                                            // 102
    return PackageSearch.getData({                                     // 103
      transform: function (matchText, regExp) {                        // 104
        // return matchText.replace(regExp, "<b>$&</b>")               //
        return matchText;                                              // 106
      },                                                               //
      sort: { isoScore: -1 }                                           // 108
    });                                                                //
  },                                                                   //
  isLoading: function () {                                             // 111
    return PackageSearch.getStatus().loading;                          // 112
  },                                                                   //
  courses: function () {                                               // 114
    return Courses.find({});                                           // 115
  },                                                                   //
  sessionCourses: function () {                                        // 117
    var courses = Session.get("courses");                              // 118
    var sc;                                                            // 119
    if (courses) {                                                     // 120
      sc = Courses.find({ "_id": { $in: courses } }).fetch();          // 121
      for (i = 0; i < sc.length; i++) {                                // 122
        sc[i].students = sc[i].students > 999 ? (sc[i].students / 1000).toFixed(1) + 'k' : sc[i].students;
      }                                                                //
    }                                                                  //
    return sc;                                                         // 126
  },                                                                   //
  compliance: function () {                                            // 128
    return Session.get("cc-compliance");                               // 129
  },                                                                   //
  selectedCourse: function () {                                        // 131
    return Courses.findOne({ "_id": Session.get("selected-course") });
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
