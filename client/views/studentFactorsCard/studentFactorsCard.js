Template.studentFactorsCard.helpers({
  isOn: function() {
    return Session.get("sf-toggle");
  },
});





Template.studentFactorsCard.rendered=function(){



setTimeout(function() {
  /*
var margin = {top: 30, right: 20, bottom: 20, left: 30},
    width = 350 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

var parseDate = d3.time.format("%y-%b-%d").parse,
    formatPercent = d3.format(".0%");

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category20();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(function(d) { return y(d.y0); })
    .y1(function(d) { return y(d.y0 + d.y); });

var stack = d3.layout.stack()
    .values(function(d) { return d.values; });

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

  data.forEach(function(d) {
    d.date = parseDate(d.date);
  });

  var browsers = stack(color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {date: d.date, y: d[name] / 100};
      })
    };
  }));

  x.domain(d3.extent(data, function(d) { return d.date; }));

  var browser = svg.selectAll(".browser")
      .data(browsers)
    .enter().append("g")
      .attr("class", "browser");

  browser.append("path")
      .attr("class", "area")
      .attr("d", function(d) { return area(d.values); })
      .style("fill", function(d) { return color(d.name); });

  browser.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y0 + d.value.y / 2) + ")"; })
      .attr("x", -6)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
});*/

var format = d3.time.format("%m/%d/%y");

var margin = {top: 30, right: 45, bottom: 60, left: 45},
    width = 380 - margin.left - margin.right,
    height = 230 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .domain(["Level-100", "Level-200", "Level-300", "Level-400","Level-500"])
    .rangePoints([0, width]);



var y = d3.scale.linear()
    .range([height, 0]);

var z = d3.scale.category20b();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
    /*.scale(x)
    .orient("bottom")
    .ticks(d3.time.days);*/

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var stack = d3.layout.stack()
    .offset("zero")
    .values(function(d) { return d.values; })
    .x(function(d) { return d.date; })
    .y(function(d) { return d.value; });

var nest = d3.nest()
    .key(function(d) { return d.key; });

var area = d3.svg.area()
    .interpolate("cardinal")
    .x(function(d) { return x(d.date); })
    .y0(function(d) { return y(d.y0); })
    .y1(function(d) { return y(d.y0 + d.y); });

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d) {
    d.date = d.date;
    d.value = +d.value;
  });

  var layers = stack(nest.entries(data));

  x.domain(["Level-100", "Level-200", "Level-300", "Level-400","Level-500"]);
  y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

  svg.selectAll(".layer")
      .data(layers)
    .enter().append("path")
      .attr("class", "layer")
      .attr("d", function(d) { return area(d.values); })
      .style("fill", function(d, i) { return z(i); });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);


svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width +15)
    .attr("y", height + 30)
    .text("Student's Level");

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", "-3.95em")
    .attr("transform", "rotate(-90)")
    .text("Number of Students");

var coordinateX0=width/2; // Esta se debe calcular dinamicamente
var coordinateY0=0;
var coordinateX1=coordinateX0;
var coordinateY1=height;

svg.append("line")          // attach a line
    .style("stroke", "black")  // colour the line
    .attr("x1", coordinateX0)     // x position of the first end of the line
    .attr("y1", coordinateY0)      // y position of the first end of the line
    .attr("x2", coordinateX1)     // x position of the second end of the line
    .attr("y2", coordinateY1);

svg.append("text")
    .attr("x", coordinateX0+10)
    .attr("y",coordinateY0 +10)
    .attr("dy", ".35em")
    .text("This student");


});


   },2500);  




};





/**************************************
 * Simple test data generator
 */
function sinAndCos() {
  var sin = [],sin2 = [],
      cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Sine Wave', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}
