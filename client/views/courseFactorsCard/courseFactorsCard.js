
function drawChart(){

	var data = {
    labels: ["Programming", "Advanced\nComputing", "Customer\nInteraction", "Unrelated\nCourses", "Engineering"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 214, 196, 0.50)",
            strokeColor: "rgba(220,220,220,0.2)",
            pointColor: "rgb(94, 207, 200)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56]
        },
        
    ]
};
	var ctx = document.getElementById("myChart").getContext("2d");
    var myRadarChart = new Chart(ctx).Radar(data, {

    //Boolean - Whether to show lines for each scale point
    scaleShowLine : true,

    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut : true,

   
    //String - Colour of the angle line
    angleLineColor : "rgba(0,0,0,.1)",

    //Number - Pixel width of the angle line
    angleLineWidth : 1,

    //String - Point label font declaration
    pointLabelFontFamily : "'Arial'",

    //String - Point label font weight
    pointLabelFontStyle : "normal",

    //Number - Point label font size in pixels
    pointLabelFontSize : 11,

    //String - Point label font colour
    pointLabelFontColor : "#666",

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,


    showScale: true,

     //Boolean - Whether to show labels on the scale
    scaleShowLabels : true,

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    // Number - Scale label font size in pixels
    scaleFontSize: 10,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#BBB",





    });
    console.log('Done chart');
}



Template.courseFactorsCard.rendered = function(){
    console.log('Rendering');

	drawChart();
};
