(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/topribbon/topribbon.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.topribbon.helpers({                                           // 1
  studentId: function () {                                             // 2
    return Session.get("student");                                     // 3
  }                                                                    //
});                                                                    //
                                                                       //
Template.topribbon.rendered = function () {};                          // 7
/////////////////////////////////////////////////////////////////////////

}).call(this);
