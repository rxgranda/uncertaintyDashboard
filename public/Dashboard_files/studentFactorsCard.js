(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/studentFactorsCard/studentFactorsCard.js               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.studentFactorsCard.helpers({                                  // 1
  isOn: function () {                                                  // 2
    return Session.get("sf-toggle");                                   // 3
  }                                                                    //
});                                                                    //
                                                                       //
Template.studentFactorsCard.rendered = function () {                   // 11
                                                                       //
  d3.json('stackedAreaData.json', function (data) {                    // 14
    nv.addGraph(function () {                                          // 15
      var chart = nv.models.stackedAreaChart().margin({ right: 100 }).x(function (d) {
        return d[0];                                                   // 18
      }) //We can modify the data accessor functions...                //
      .y(function (d) {                                                //
        return d[1];                                                   // 19
      }) //...in case your data is formatted differently.              //
      .useInteractiveGuideline(true) //Tooltips which show all data points. Very nice!
      .rightAlignYAxis(true) //Let's move the y-axis to the right side.
      .transitionDuration(500).showControls(true) //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
      .clipEdge(true);                                                 //
                                                                       //
      //Format x-axis labels with custom function.                     //
      chart.xAxis.tickFormat(function (d) {                            // 27
        return d3.time.format('%x')(new Date(d));                      // 29
      });                                                              //
                                                                       //
      chart.yAxis.tickFormat(d3.format(',.2f'));                       // 32
                                                                       //
      d3.select('#chart svg').datum(data).call(chart);                 // 35
                                                                       //
      nv.utils.windowResize(chart.update);                             // 39
                                                                       //
      return chart;                                                    // 41
    });                                                                //
  });                                                                  //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
