(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/riskwidget/riskWidget.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.riskwidget.helpers({                                          // 1
  risk: function () {                                                  // 2
    return Math.round(Session.get("riskValue") * 100);                 // 3
  },                                                                   //
  riskText: function () {                                              // 5
    var risk = Session.get("riskValue");                               // 6
    var text;                                                          // 7
    if (risk >= 0.0) text = "Very Hard";                               // 8
    if (risk >= 0.2) text = "Hardwork";                                // 9
    if (risk >= 0.4) text = "Regular";                                 // 10
    if (risk >= 0.6) text = "Easy";                                    // 11
    if (risk >= 0.8) text = "Very Easy";                               // 12
    return text;                                                       // 13
  },                                                                   //
  riskColor: function () {                                             // 15
    var risk = Session.get("riskValue");                               // 16
    if (risk >= 0.0) $("#svgCircle").css("stroke", "#e74c3c");         // 17
    if (risk >= 0.2) $("#svgCircle").css("stroke", "#e67e22");         // 18
    if (risk >= 0.4) $("#svgCircle").css("stroke", "#f1c40f");         // 19
    if (risk >= 0.6) $("#svgCircle").css("stroke", "#27ae60");         // 20
    if (risk >= 0.8) $("#svgCircle").css("stroke", "#25a085");         // 21
    return risk;                                                       // 22
  }                                                                    //
});                                                                    //
                                                                       //
Template.riskwidget.rendered = function () {                           // 26
  setTimeout(function () {                                             // 27
    var risk = Session.get("riskValue");                               // 28
    if (risk >= 0.0) $("#svgCircle").css("stroke", "#e74c3c");         // 29
    if (risk >= 0.2) $("#svgCircle").css("stroke", "#e67e22");         // 30
    if (risk >= 0.4) $("#svgCircle").css("stroke", "#f1c40f");         // 31
    if (risk >= 0.6) $("#svgCircle").css("stroke", "#27ae60");         // 32
    if (risk >= 0.8) $("#svgCircle").css("stroke", "#25a085");         // 33
  }, 1300);                                                            //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
