ev=null; tp=null;
var sc=null;  myPieChart=null;



 /* Inspired by Lee Byron's test data generator. */
 function stream_layers(n, m, o) {
   if (arguments.length < 3) o = 0;
   function bump(a) {
     var x = 1 / (.1 + Math.random()),
         y = 2 * Math.random() - .5,
         z = 10 / (.1 + Math.random());
     for (var i = 0; i < m; i++) {
       var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
     }
   }
   return d3.range(n).map(function() {
       var a = [], i;
       for (i = 0; i < m; i++) a[i] = o + o * Math.random();
       for (i = 0; i < 5; i++) bump(a);
       return a.map(stream_index);
     });
 }
 
 /* Another layer generator using gamma distributions. */
 function stream_waves(n, m) {
   return d3.range(n).map(function(i) {
     return d3.range(m).map(function(j) {
         var x = 20 * j / m - i / 3;
         return 2 * x * Math.exp(-.5 * x);
       }).map(stream_index);
     });
 }
 
function stream_index(d, i) {
   return {x: i, y: Math.max(0, d)};
 }





Template.socialFactorsCard.rendered = function(){
	console.log('Hello from social');
    setTimeout(function() {
       
 var n = 2, // number of layers
     m = 4, // number of samples per layer
      data = d3.layout.stack()(stream_layers(n, m, .1)),
      color = d3.interpolateRgb("#aad", "#556");
  
  var p = 20,
      w = 350,
      h = 190 - .5 - p,
      mx = m,
      my = d3.max(data, function(d) {
        return d3.max(d, function(d) {
          return d.y0 + d.y;
        });
      }),
      mz = d3.max(data, function(d) {
        return d3.max(d, function(d) {
          return d.y;
        });
      }),
      x = function(d) { return d.x * w / mx; },
      y0 = function(d) { return h - d.y0 * h / my; },
      y1 = function(d) { return h - (d.y + d.y0) * h / my; },
      y2 = function(d) { return d.y * h / mz; }; // or `my` to not rescale
  
  var vis = d3.select("#chart2")
    .append("svg:svg")
      .attr("width", w)
      .attr("height", h + p);
  
  var layers = vis.selectAll("g.layer")
      .data(data)
    .enter().append("svg:g")
      .style("fill", function(d, i) { return color(i / (n - 1)); })
      .attr("class", "layer");
  
  var bars = layers.selectAll("g.bar")
      .data(function(d) { return d; })
    .enter().append("svg:g")
      .attr("class", "bar")
      .attr("transform", function(d) { return "translate(" + x(d) + ",0)"; });
  
  bars.append("svg:rect")
      .attr("width", x({x: .9}))
      .attr("x", 0)
      .attr("y", h)
      .attr("height", 0)
    .transition()
      .delay(function(d, i) { return i * 10; })
      .attr("y", y1)
      .attr("height", function(d) { return y0(d) - y1(d); });
  /*
  var labels = vis.selectAll("text.label")
      .data(data[0])
    .enter().append("svg:text")
      .attr("class", "label")
      .attr("x", x)
      .attr("y", h + 6)
      .attr("dx", x({x: .45}))
      .attr("dy", ".71em")
     .attr("text-anchor", "middle")
      .text(function(d, i) { return i; });*/
  
  vis.append("svg:line")
      .attr("x1", 0)
      .attr("x2", w - x({x: .1}))
      .attr("y1", h)
      .attr("y2", h);


    },2500);      
};



Template.socialFactorsCard.events({
  "change .checkSocial": function(event,template){
    console.log(event.target.id);
   switch (event.target.id) {
	    case "nationality":
	        $("#pie-title").text('Nationality');
	        break;
	    case "gender":
	       $("#pie-title").text('Gender');
	        break;
	    case "marital":
	        $("#pie-title").text('Marital Status');
	        break;
	    case "residence":
		   $("#pie-title").text('Residence');
	        break;
	    case "disability":
	        $("#pie-title").text('Disability');
	        break;
	}
    drawChartSocial(event.target.id);
   $("."+event.target.id).attr("disabled",!event.target.checked);

  },

"change .showPieSocial": function(event,template){
    console.log(event.target.name);
   
   

	switch (event.target.name) {
	    case "nationality":
	        $("#pie-title").text('Nationality');
	        break;
	    case "gender":
	       $("#pie-title").text('Gender');
	        break;
	    case "marital":
	        $("#pie-title").text('Marital Status');
	        break;
	    case "residence":
		   $("#pie-title").text('Residence');
	        break;
	    case "disability":
	        $("#pie-title").text('Disability');
	        break;
	}
	 drawChartSocial(event.target.name);


  },

});