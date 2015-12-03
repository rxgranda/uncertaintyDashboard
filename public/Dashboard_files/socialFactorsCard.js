(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/socialFactorsCard/socialFactorsCard.js                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
ev = null;tp = null;                                                   // 1
var sc = null;myPieChart = null;                                       // 2
                                                                       //
function drawChartSocial(tipo) {                                       // 5
	var data;                                                             // 6
	switch (tipo) {                                                       // 7
		case "nationality":                                                  // 8
			data = [{                                                           // 9
				value: 300,                                                        // 11
				color: "#F7464A",                                                  // 12
				highlight: "#FF5A5E",                                              // 13
				label: "Brasil"                                                    // 14
			}, {                                                                //
				value: 50,                                                         // 17
				color: "#46BFBD",                                                  // 18
				highlight: "#5AD3D1",                                              // 19
				label: "Ecuador"                                                   // 20
			}, {                                                                //
				value: 100,                                                        // 23
				color: "#FDB45C",                                                  // 24
				highlight: "#FFC870",                                              // 25
				label: "Belgium"                                                   // 26
			}];                                                                 //
			break;                                                              // 28
		case "gender":                                                       // 29
			data = [{                                                           // 30
				value: 300,                                                        // 32
				color: "#46BFBD",                                                  // 33
				highlight: "#46BFBD",                                              // 34
				label: "Male"                                                      // 35
			}, {                                                                //
				value: 50,                                                         // 38
				color: "#FDB45C",                                                  // 39
				highlight: "#FDB45C",                                              // 40
				label: "Female"                                                    // 41
			}, {                                                                //
				value: 100,                                                        // 44
				color: "#F7464A",                                                  // 45
				highlight: "#FFC870",                                              // 46
				label: "Other"                                                     // 47
			}];                                                                 //
			break;                                                              // 49
		case "marital":                                                      // 49
			data = [{                                                           // 51
				value: 300,                                                        // 53
				color: "#F7464A",                                                  // 54
				highlight: "#FF5A5E",                                              // 55
				label: "Married"                                                   // 56
			}, {                                                                //
				value: 50,                                                         // 59
				color: "#46BFBD",                                                  // 60
				highlight: "#5AD3D1",                                              // 61
				label: "Single"                                                    // 62
			}, {                                                                //
				value: 100,                                                        // 65
				color: "#FDB45C",                                                  // 66
				highlight: "#FFC870",                                              // 67
				label: "Other"                                                     // 68
			}];                                                                 //
			break;                                                              // 70
		case "residence":                                                    // 71
			data = [{                                                           // 72
				value: 300,                                                        // 74
				color: "#F7464A",                                                  // 75
				highlight: "#FF5A5E",                                              // 76
				label: "Guayaquil"                                                 // 77
			}, {                                                                //
				value: 50,                                                         // 80
				color: "#46BFBD",                                                  // 81
				highlight: "#5AD3D1",                                              // 82
				label: "Duran"                                                     // 83
			}, {                                                                //
				value: 100,                                                        // 86
				color: "#FDB45C",                                                  // 87
				highlight: "#FFC870",                                              // 88
				label: "Naranjito"                                                 // 89
			}];                                                                 //
			break;                                                              // 91
		case "disability":                                                   // 91
			data = [{                                                           // 93
				value: 300,                                                        // 95
				color: "#F7464A",                                                  // 96
				highlight: "#FF5A5E",                                              // 97
				label: "Visual"                                                    // 98
			}, {                                                                //
				value: 50,                                                         // 101
				color: "#46BFBD",                                                  // 102
				highlight: "#5AD3D1",                                              // 103
				label: "Arms"                                                      // 104
			}, {                                                                //
				value: 100,                                                        // 107
				color: "#FDB45C",                                                  // 108
				highlight: "#FFC870",                                              // 109
				label: "Legs"                                                      // 110
			}];                                                                 //
			break;                                                              // 112
	}                                                                     // 112
                                                                       //
	var ctx = document.getElementById("socialChart").getContext("2d");    // 117
	if (myPieChart) myPieChart.destroy();                                 // 118
                                                                       //
	// try{                                                               //
                                                                       //
	myPieChart = new Chart(ctx).Pie(data, {                               // 124
                                                                       //
		//Boolean - Whether we should show a stroke on each segment          //
		segmentShowStroke: true,                                             // 127
                                                                       //
		//String - The colour of each segment stroke                         //
		segmentStrokeColor: "#fff",                                          // 130
                                                                       //
		//Number - The width of each segment stroke                          //
		segmentStrokeWidth: 2,                                               // 133
                                                                       //
		//Number - The percentage of the chart that we cut out of the middle
		percentageInnerCutout: 0, // This is 0 for Pie charts                // 136
                                                                       //
		//Number - Amount of animation steps                                 //
		animationSteps: 100,                                                 // 139
                                                                       //
		//String - Animation easing effect                                   //
		animationEasing: "easeOutBounce",                                    // 142
                                                                       //
		//Boolean - Whether we animate the rotation of the Doughnut          //
		animateRotate: true,                                                 // 145
                                                                       //
		//Boolean - Whether we animate scaling the Doughnut from the centre  //
		animateScale: false,                                                 // 148
                                                                       //
		legendTemplate: '<ul>' + '<li>' + '<span style=\"background-color:rgb(39,174,96)>\">Programming</span>' + '</li>' + '</ul>'
                                                                       //
	});                                                                   //
	//}                                                                   //
	//catch(error){                                                       //
	//     var a =0;                                                      //
	// }                                                                  //
	console.log('Done chart');                                            // 165
}                                                                      //
                                                                       //
Template.socialFactorsCard.rendered = function () {                    // 170
	console.log('Hello from social');                                     // 171
	setTimeout(function () {                                              // 172
		console.log('Rendering');                                            // 173
                                                                       //
		drawChartSocial('nationality');                                      // 176
	}, 2500);                                                             //
};                                                                     //
                                                                       //
Template.socialFactorsCard.events({                                    // 183
	"change .checkSocial": function (event, template) {                   // 184
		console.log(event.target.id);                                        // 185
		switch (event.target.id) {                                           // 186
			case "nationality":                                                 // 187
				$("#pie-title").text('Nationality');                               // 188
				break;                                                             // 189
			case "gender":                                                      // 189
				$("#pie-title").text('Gender');                                    // 191
				break;                                                             // 192
			case "marital":                                                     // 193
				$("#pie-title").text('Marital Status');                            // 194
				break;                                                             // 195
			case "residence":                                                   // 196
				$("#pie-title").text('Residence');                                 // 197
				break;                                                             // 198
			case "disability":                                                  // 199
				$("#pie-title").text('Disability');                                // 200
				break;                                                             // 201
		}                                                                    // 201
		drawChartSocial(event.target.id);                                    // 203
		$("." + event.target.id).attr("disabled", !event.target.checked);    // 204
	},                                                                    //
                                                                       //
	"change .showPieSocial": function (event, template) {                 // 208
		console.log(event.target.name);                                      // 209
                                                                       //
		switch (event.target.name) {                                         // 213
			case "nationality":                                                 // 214
				$("#pie-title").text('Nationality');                               // 215
				break;                                                             // 216
			case "gender":                                                      // 217
				$("#pie-title").text('Gender');                                    // 218
				break;                                                             // 219
			case "marital":                                                     // 219
				$("#pie-title").text('Marital Status');                            // 221
				break;                                                             // 222
			case "residence":                                                   // 223
				$("#pie-title").text('Residence');                                 // 224
				break;                                                             // 225
			case "disability":                                                  // 225
				$("#pie-title").text('Disability');                                // 227
				break;                                                             // 228
		}                                                                    // 228
		drawChartSocial(event.target.name);                                  // 230
	}                                                                     //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
