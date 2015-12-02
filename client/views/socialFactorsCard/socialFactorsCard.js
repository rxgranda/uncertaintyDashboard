ev=null; tp=null;
var sc=null;  myPieChart=null;


function drawChartSocial( tipo){
	var data ;
	switch (tipo) {
	    case "nationality":
	        data = [
		    {
		        value: 300,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Brasil"
		    },
		    {
		        value: 50,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Ecuador"
		    },
		    {
		        value: 100,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Belgium"
		    }]
	        break;
	    case "gender":
	       data = [
		    {
		        value: 300,
		        color:"#46BFBD",
		        highlight: "#46BFBD",
		        label: "Male"
		    },
		    {
		        value: 50,
		        color: "#FDB45C",
		        highlight: "#FDB45C",
		        label: "Female"
		    },
		    {
		        value: 100,
		        color: "#F7464A",
		        highlight: "#FFC870",
		        label: "Other"
		    }]
	        break;
	    case "marital":
	        data = [
		    {
		        value: 300,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Married"
		    },
		    {
		        value: 50,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Single"
		    },
		    {
		        value: 100,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Other"
		    }]
	        break;
	    case "residence":
	       data = [
		    {
		        value: 300,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Guayaquil"
		    },
		    {
		        value: 50,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Duran"
		    },
		    {
		        value: 100,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Naranjito"
		    }]
	        break;
	    case "disability":
	        data = [
			    {
			        value: 300,
			        color:"#F7464A",
			        highlight: "#FF5A5E",
			        label: "Visual"
			    },
			    {
			        value: 50,
			        color: "#46BFBD",
			        highlight: "#5AD3D1",
			        label: "Arms"
			    },
			    {
			        value: 100,
			        color: "#FDB45C",
			        highlight: "#FFC870",
			        label: "Legs"
			    }]
	        break;
	}
    


	var ctx = document.getElementById("socialChart").getContext("2d");
    if(myPieChart)
        myPieChart.destroy();

   // try{


    myPieChart = new Chart(ctx).Pie(data, {

      //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 0, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,


legendTemplate : '<ul>'
                  
                    +'<li>'
                    +'<span style=\"background-color:rgb(39,174,96)>\">Programming</span>'
                  +'</li>'               
              +'</ul>'
  


    });
 //}
    //catch(error){
   //     var a =0;
   // }
    console.log('Done chart');
}



Template.socialFactorsCard.rendered = function(){
	console.log('Hello from social');
    setTimeout(function() {
        console.log('Rendering');
        
      
            drawChartSocial('nationality');
        
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