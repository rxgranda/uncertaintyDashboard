(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/gradescard/gradescard.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*                                                                     //
 * Event Handling:                                                     //
 */                                                                    //
                                                                       //
Template.gradescard.events({                                           // 5
  "click .good-grades": function (event, template) {                   // 6
    var id = template.$(".sg-good").attr("class").split(" ")[0];       // 7
    if (template.$(".good-grades").attr("checked")) {                  // 8
      template.$(".sg-good").attr("class", id + " sg-good animated fadeInLeft");
    } else {                                                           //
      template.$(".sg-good").attr("class", id + " sg-good animated fadeOutLeft");
    }                                                                  //
  },                                                                   //
  "click .best-grades": function (event, template) {                   // 14
    var id = template.$(".sg-excellent").attr('class').split(' ')[0];  // 15
    if (template.$(".best-grades").attr("checked")) {                  // 16
      template.$(".sg-excellent").attr("class", id + " sg-excellent animated fadeInLeft");
    } else {                                                           //
      template.$(".sg-excellent").attr("class", id + " sg-excellent animated fadeOutLeft");
    }                                                                  //
  },                                                                   //
  "click .bad-grades": function (event, template) {                    // 22
    var id = template.$(".sg-bad").attr('class').split(' ')[0];        // 23
    if (template.$(".bad-grades").attr("checked")) {                   // 24
      template.$(".sg-bad").attr("class", id + " sg-bad animated fadeInLeft");
    } else {                                                           //
      template.$(".sg-bad").attr("class", id + " sg-bad animated fadeOutLeft");
    }                                                                  //
  },                                                                   //
  "click .lazy-grades": function (event, template) {                   // 30
    var id = template.$(".sg-lazy").attr('class').split(' ')[0];       // 31
    if (template.$(".lazy-grades").attr("checked")) {                  // 32
      template.$(".sg-lazy").attr("class", id + " sg-lazy animated fadeInLeft");
    } else {                                                           //
      template.$(".sg-lazy").attr("class", id + " sg-lazy animated fadeOutLeft");
    }                                                                  //
  },                                                                   //
  "click .regular-grades": function (event, template) {                // 38
    var id = template.$(".sg-regular").attr('class').split(' ')[0];    // 39
    if (template.$(".regular-grades").attr("checked")) {               // 40
      template.$(".sg-regular").attr("class", id + " sg-regular animated fadeInLeft");
    } else {                                                           //
      template.$(".sg-regular").attr("class", id + " sg-regular animated fadeOutLeft");
    }                                                                  //
  },                                                                   //
  "click .student-grades": function (event, template) {                // 46
    if (template.$(".student-grades").attr("checked")) {               // 47
      template.$(".sg-this").attr("class", "sg-this animated fadeIn");
    } else {                                                           //
      template.$(".sg-this").attr("class", "sg-this animated fadeOut");
    }                                                                  //
  },                                                                   //
  "click .gc-toggle": function (event, template) {                     // 53
    var time = 300;                                                    // 54
    if (template.$(".gc-toggle").attr("checked")) {                    // 55
      Session.set("gc-toggle", true);                                  // 56
    } else {                                                           //
      Session.set("gc-toggle", false);                                 // 58
      template.$(".gradescard-paper").css("opacity", "1");             // 59
      Session.set("gc-compliance", 5);                                 // 60
    }                                                                  //
  },                                                                   //
  "change .gc-paper-slider": function (event, template) {              // 63
    var n = template.$(".gc-paper-slider").attr("value");              // 64
    Session.set("gc-compliance", n);                                   // 65
    Websocket.send('{"reuqestId": "5645f7f7ef0bde57344c84de"}');       // 66
    if (n == 5) template.$(".gradescard-paper").css("opacity", "1");   // 67
    if (n == 4) template.$(".gradescard-paper").css("opacity", "0.85");
    if (n == 3) template.$(".gradescard-paper").css("opacity", "0.75");
    if (n == 2) template.$(".gradescard-paper").css("opacity", "0.65");
    if (n == 1) template.$(".gradescard-paper").css("opacity", "0.55");
    if (n == 0) template.$(".gradescard-paper").css("opacity", "0.45");
  }                                                                    //
});                                                                    //
                                                                       //
/*                                                                     //
 *  Check for courses                                                  //
 */                                                                    //
Template.registerHelper('isCourse', function (input) {                 // 79
  return Session.get("courses");                                       // 80
});                                                                    //
                                                                       //
/*                                                                     //
 * Render Data from helpers                                            //
 */                                                                    //
Template.gradescard.helpers({                                          // 86
  excellent: function () {                                             // 87
    var sc = Grades.find({ gp: { $gte: "9" } }).fetch();               // 88
    for (i = 0; i < sc.length; i++) {                                  // 89
      sc[i].gp = "#25a085";                                            // 90
      sc[i].grade = (sc[i].grade - 5.7) * 350 / 4.5;                   // 91
      sc[i].performance = (1.0 - sc[i].performance) * 190 + 10;        // 92
    }                                                                  //
    return sc;                                                         // 94
  },                                                                   //
  good: function () {                                                  // 96
    var sc = Grades.find({ gp: { $gte: "8", $lt: "9" } }).fetch();     // 97
    for (i = 0; i < sc.length; i++) {                                  // 98
      sc[i].gp = "#27ae60";                                            // 99
      sc[i].grade = (sc[i].grade - 5.7) * 350 / 4.5;                   // 100
      sc[i].performance = (1.0 - sc[i].performance) * 190 + 10;        // 101
    }                                                                  //
    return sc;                                                         // 103
  },                                                                   //
  regular: function () {                                               // 105
    var sc = Grades.find({ gp: { $gte: "7", $lt: "8" } }).fetch();     // 106
    for (i = 0; i < sc.length; i++) {                                  // 107
      sc[i].gp = "#f0c30e";                                            // 108
      sc[i].grade = (sc[i].grade - 5.7) * 350 / 4.5;                   // 109
      sc[i].performance = (1.0 - sc[i].performance) * 190 + 10;        // 110
    }                                                                  //
    return sc;                                                         // 112
  },                                                                   //
  lazy: function () {                                                  // 114
    var sc = Grades.find({ gp: { $gte: "6", $lt: "7" } }).fetch();     // 115
    for (i = 0; i < sc.length; i++) {                                  // 116
      sc[i].gp = "#e67d22";                                            // 117
      sc[i].grade = (sc[i].grade - 5.7) * 350 / 4.5;                   // 118
      sc[i].performance = (1.0 - sc[i].performance) * 190 + 10;        // 119
    }                                                                  //
    return sc;                                                         // 121
  },                                                                   //
  bad: function () {                                                   // 123
    var sc = Grades.find({ gp: { $lt: "6" } }).fetch();                // 124
    for (i = 0; i < sc.length; i++) {                                  // 125
      sc[i].gp = "#e74c3c";                                            // 126
      sc[i].grade = (sc[i].grade - 5.7) * 350 / 4.5;                   // 127
      sc[i].performance = (1.0 - sc[i].performance) * 190 + 10;        // 128
    }                                                                  //
    return sc;                                                         // 130
  },                                                                   //
  thisStudent: function () {                                           // 132
    var sc = Students.findOne({});                                     // 133
    if (sc) {                                                          // 134
      sc.gpa = (sc.gpa - 5.7) * 350 / 4.5;                             // 135
      sc.performance = (1.0 - sc.performance) * 190 + 10;              // 136
    }                                                                  //
    return sc;                                                         // 138
  },                                                                   //
  isOn: function () {                                                  // 140
    return Session.get("gc-toggle");                                   // 141
  },                                                                   //
  compliance: function () {                                            // 143
    return Session.get("gc-compliance");                               // 144
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
