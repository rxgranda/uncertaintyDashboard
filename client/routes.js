/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/
Router.route('/:_id', {
  data: function () {
    var courses;
    var student = Router.current().params._id;
    if(Router.current().params.query.c) courses = _.uniq(Router.current().params.query.c.split(','));
    Session.set('student', student);
    Session.set('courses', courses);
    Session.set("cc-compliance", 5);
    Session.set("gc-compliance", 5);
    Session.set("hc-compliance", 5);
    Session.set("hc-toggle", true);
    Session.set("gc-toggle", true);
    Session.set("sc-toggle", false);
    Session.set("data-from",1999);
    Session.set("data-to",2013);
    Session.set("studentdata","redo");

    if(courses) Session.set("selected-course", courses[0]);
    var grades = {courses: courses, student: student};

    /*
    * Handling suscriptions (Start)
    */
    Meteor.subscribe("this_student", student, function() {
        Meteor.subscribe("this_courses", courses, function(){
          Meteor.subscribe("grades", grades, function() {
            if($(".loading-screen")) $(".loading-screen").remove();
          });
        });
    });
    /*
    * Handling suscriptions (End)
    */
  }
});
