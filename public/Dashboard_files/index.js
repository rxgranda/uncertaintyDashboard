(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/index.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Students = new Meteor.Collection('students');                          // 1
Courses = new Meteor.Collection('courses');                            // 2
Grades = new Meteor.Collection('studentscourses');                     // 3
/////////////////////////////////////////////////////////////////////////

}).call(this);
