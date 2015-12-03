(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/qualitywidget/qualitywidget.js                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.qualitywidget.helpers({                                       // 1
  quality: function () {                                               // 2
    Session.get("riskValue");                                          // 3
    return Math.round(Math.random() * (100 - 0) + 0);                  // 4
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
