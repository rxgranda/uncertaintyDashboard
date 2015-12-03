(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/historicalcard/historicalcard.js                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.historicalcard.events({                                       // 1
  "click .settings-icon": function (event, template) {                 // 2
    if (!template.$(".card-settings-icon").hasClass("opened")) {       // 3
      template.$(".card-settings-icon").addClass("opened");            // 4
      template.$(".card-content").animate({ "min-width": "+=350px" }, "slow", function () {
        template.$(".card-settings-icon > iron-icon").fadeOut(300, function () {
          template.$(".card-settings-icon > iron-icon").attr("icon", "icons:close").fadeIn(300);
        });                                                            //
      });                                                              //
    } else {                                                           //
      template.$(".card-settings-icon").removeClass("opened");         // 11
      template.$(".card-content").animate({ "min-width": "-=350px" }, "slow ", function () {
        template.$(".card-settings-icon > iron-icon").fadeOut(300, function () {
          template.$(".card-settings-icon > iron-icon").attr("icon", "icons:settings").fadeIn(300);
        });                                                            //
      });                                                              //
    }                                                                  //
  },                                                                   //
  "click .hc-toggle": function (event, template) {                     // 19
    if (template.$(".hc-toggle").attr("checked")) {                    // 20
      Session.set("hc-toggle", true);                                  // 21
      setTimeout(function () {                                         // 22
        $("#selector").ionRangeSlider({                                // 23
          type: 'double ',                                             // 24
          min: 1999,                                                   // 25
          max: 2013,                                                   // 26
          step: 1,                                                     // 27
          grid: true,                                                  // 28
          grid_snap: true                                              // 29
        });                                                            //
                                                                       //
        var data = [{ x: 0, y: 8 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 9 }, { x: 6, y: 9 }, { x: 7, y: 8 }, { x: 8, y: 8 }, { x: 9, y: 9 }, { x: 10, y: 9 }, { x: 11, y: 8 }, { x: 12, y: 8 }, { x: 13, y: 10 }, { x: 14, y: 10 }, { x: 15, y: 10 }];
        var margin = { top: 20, right: 20, bottom: 30, left: 50 },     // 50
            width = 335,                                               //
            height = 170;                                              //
                                                                       //
        var x = d3.scale.linear().domain([0, d3.max(data, function (d) {
          return d.x;                                                  // 55
        })]).range([0, width]);                                        //
                                                                       //
        var y = d3.scale.linear().domain([0, d3.max(data, function (d) {
          return d.y;                                                  // 59
        })]).range([height, 0]);                                       //
                                                                       //
        var xAxis = d3.svg.axis().scale(x).orient("bottom");           // 62
                                                                       //
        var yAxis = d3.svg.axis().scale(y).orient("left");             // 66
                                                                       //
        var area = d3.svg.area().x(function (d) {                      // 70
          return x(d.x);                                               // 71
        }).y0(height).y1(function (d) {                                //
          return y(d.y);                                               // 73
        });                                                            //
                                                                       //
        var svg = d3.select("svg#area").attr("width", width).attr("height", height).insert("g").attr("transform", "translate(0,0)").attr("class", "animated flipInX");
                                                                       //
        svg.append("path").datum(data).attr("class", "area").attr("d", area);
      }, 250);                                                         //
    } else {                                                           //
      Session.set("hc-toggle", false);                                 // 89
      template.$(".historicalcard-paper").css("opacity", "1");         // 90
      Session.set("hc-compliance", 5);                                 // 91
    }                                                                  //
  },                                                                   //
  "change .hc-paper-slider": function (event, template) {              // 94
    var n = template.$(".hc-paper-slider").attr("value");              // 95
    Session.set("hc-compliance", n);                                   // 96
    Websocket.send('{"reuqestId": "5645f7f7ef0bde57344c84de"}');       // 97
    if (n == 5) template.$(".historicalcard-paper").css("opacity", "1");
    if (n == 4) template.$(".historicalcard-paper").css("opacity", "0.85");
    if (n == 3) template.$(".historicalcard-paper").css("opacity", "0.75");
    if (n == 2) template.$(".historicalcard-paper").css("opacity", "0.65");
    if (n == 1) template.$(".historicalcard-paper").css("opacity", "0.55");
    if (n == 0) template.$(".historicalcard-paper").css("opacity", "0.45");
  },                                                                   //
  "click": function (event, template) {                                // 105
    var slider = $("#selector").data("ionRangeSlider");                // 106
    if (slider) {                                                      // 107
      // console.log(slider.result.from);                              //
      // console.log(slider.result.to);                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.historicalcard.helpers({                                      // 114
  isOn: function () {                                                  // 115
    return Session.get("hc-toggle");                                   // 116
  },                                                                   //
  compliance: function () {                                            // 118
    return Session.get("hc-compliance");                               // 119
  }                                                                    //
});                                                                    //
                                                                       //
Template.historicalcard.rendered = function () {                       // 123
  setTimeout(function () {                                             // 124
    $("#selector").ionRangeSlider({                                    // 125
      type: 'double ',                                                 // 126
      min: 1999,                                                       // 127
      max: 2013,                                                       // 128
      step: 1,                                                         // 129
      grid: true,                                                      // 130
      grid_snap: true                                                  // 131
    });                                                                //
                                                                       //
    var data = [{ x: 0, y: 8 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 9 }, { x: 6, y: 9 }, { x: 7, y: 8 }, { x: 8, y: 8 }, { x: 9, y: 9 }, { x: 10, y: 9 }, { x: 11, y: 8 }, { x: 12, y: 8 }, { x: 13, y: 10 }, { x: 14, y: 10 }, { x: 15, y: 10 }];
                                                                       //
    var margin = { top: 20, right: 20, bottom: 30, left: 50 },         // 153
        width = 335,                                                   //
        height = 170;                                                  //
                                                                       //
    var x = d3.scale.linear().domain([0, d3.max(data, function (d) {   // 157
      return d.x;                                                      // 158
    })]).range([0, width]);                                            //
                                                                       //
    var y = d3.scale.linear().domain([0, d3.max(data, function (d) {   // 161
      return d.y;                                                      // 162
    })]).range([height, 0]);                                           //
                                                                       //
    var xAxis = d3.svg.axis().scale(x).orient("bottom");               // 165
                                                                       //
    var yAxis = d3.svg.axis().scale(y).orient("left");                 // 169
                                                                       //
    var area = d3.svg.area().x(function (d) {                          // 173
      return x(d.x);                                                   // 174
    }).y0(height).y1(function (d) {                                    //
      return y(d.y);                                                   // 176
    });                                                                //
                                                                       //
    var svg = d3.select("svg#area").attr("width", width).attr("height", height).insert("g").attr("transform", "translate(0,0)").attr("class", "animated flipInX");
                                                                       //
    svg.append("path").datum(data).attr("class", "area").attr("d", area);
  }, 250);                                                             //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
