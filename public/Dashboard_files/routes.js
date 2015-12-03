(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/routes.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*                                                                     //
 *  Gets data from address bar using Iron-Router                       //
 *  Sets the session according this data.                              //
 */                                                                    //
                                                                       //
Router.route('/:_id', {                                                // 6
  data: function () {                                                  // 7
    var courses;                                                       // 8
    var student = this.params._id;                                     // 9
                                                                       //
    if (this.params.query.c) courses = _.uniq(this.params.query.c.split(','));
                                                                       //
    Session.set('student', student);                                   // 13
    Session.set('courses', courses);                                   // 14
                                                                       //
    Session.set("cc-compliance", 5);                                   // 16
    Session.set("gc-compliance", 5);                                   // 17
    Session.set("hc-compliance", 5);                                   // 18
                                                                       //
    Session.set("gc-toggle", true);                                    // 20
    Session.set("hc-toggle", true);                                    // 21
    Session.set("sf-toggle", true);                                    // 22
                                                                       //
    if (courses) {                                                     // 24
      Session.set("selected-course", courses[0]);                      // 25
      if (courses.length > 0) Session.set("selected-courses-factor", courses[courses.length - 1]);
    }                                                                  //
                                                                       //
    Meteor.subscribe("grades", courses);                               // 30
    Meteor.subscribe("this_student", student);                         // 31
    Meteor.subscribe("this_courses", courses);                         // 32
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
