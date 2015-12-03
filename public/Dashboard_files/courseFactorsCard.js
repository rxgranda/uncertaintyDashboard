(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/courseFactorsCard/courseFactorsCard.js                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
ev = null;tp = null;                                                   // 1
var sc = null;myRadarChart = null;                                     // 2
function constructDataset(course) {                                    // 3
    var dataset;                                                       // 4
    var index_ = course.index % 6;                                     // 5
    if (!course.data) console.log('ERRORRRRR');                        // 6
    dataset = {                                                        // 8
        label: course.name,                                            // 9
                                                                       //
        data: course.data                                              // 11
                                                                       //
    };                                                                 //
    switch (index_) {                                                  // 14
        case 1:                                                        // 15
                                                                       //
            dataset["fillColor"] = "rgba(39,174,96,0.5)";              // 17
            dataset["strokeColor"] = "rgba(39,174,96,0.8)";            // 18
            dataset["pointColor"] = "rgb(39,174,96)";                  // 19
            dataset["pointHighlightStroke"] = "rgb(255,255,255)";      // 20
            dataset["pointStrokeColor"] = "rgb(39,174,96)";            // 21
            dataset["pointHighlightFill"] = "rgb(39,174,96)";          // 22
                                                                       //
            break;                                                     // 25
        case 2:                                                        // 25
            dataset["fillColor"] = "rgba(37,160,133,0.5)";             // 27
            dataset["strokeColor"] = "rgba(37,160,133,0.8)";           // 28
            dataset["pointColor"] = "rgb(37,160,133)";                 // 29
            dataset["pointHighlightStroke"] = "rgb(255,255,255)";      // 30
            dataset["pointStrokeColor"] = "rgb(37,160,133)";           // 31
            dataset["pointHighlightFill"] = "rgb(37,160,133)";         // 32
                                                                       //
            break;                                                     // 34
                                                                       //
        case 3:                                                        // 34
            dataset["fillColor"] = "rgba(231,76,60,0.5)";              // 38
            dataset["strokeColor"] = "rgba(231,76,60,0.8)";            // 39
            dataset["pointColor"] = "rgb(231,76,60)";                  // 40
            dataset["pointHighlightStroke"] = "rgb(255,255,255)";      // 41
            dataset["pointStrokeColor"] = "rgb(231,76,60)";            // 42
            dataset["pointHighlightFill"] = "rgb(231,76,60)";          // 43
                                                                       //
            break;                                                     // 45
        case 4:                                                        // 46
            dataset["fillColor"] = "rgba(230,125,34,0.5)";             // 47
            dataset["strokeColor"] = "rgba(230,125,34,0.8)";           // 48
            dataset["pointColor"] = "rgb(230,125,34)";                 // 49
            dataset["pointHighlightStroke"] = "rgb(255,255,255)";      // 50
            dataset["pointStrokeColor"] = "rgb(230,125,34)";           // 51
            dataset["pointHighlightFill"] = "rgb(230,125,34)";         // 52
                                                                       //
            break;                                                     // 54
        case 5:                                                        // 54
            dataset["fillColor"] = "rgba(240,195,1,0.5)";              // 56
            dataset["strokeColor"] = "rgba(240,195,1,0.8)";            // 57
            dataset["pointColor"] = "rgb(240,195,1)";                  // 58
            dataset["pointHighlightStroke"] = "rgb(255,255,255)";      // 59
            dataset["pointStrokeColor"] = "rgb(240,195,1)";            // 60
            dataset["pointHighlightFill"] = "rgb(240,195,1)";          // 61
                                                                       //
            break;                                                     // 63
                                                                       //
        default:                                                       // 63
            dataset["fillColor"] = "rgba(39,174,96,0.5)";              // 67
            dataset["strokeColor"] = "rgba(39,174,96,0.8)";            // 68
            dataset["pointColor"] = "rgb(39,174,96)";                  // 69
            dataset["pointHighlightStroke"] = "rgb(255,255,255)";      // 70
            dataset["pointStrokeColor"] = "rgb(39,174,96)";            // 71
            dataset["pointHighlightFill"] = "rgb(39,174,96)";          // 72
                                                                       //
    }                                                                  // 72
    return dataset;                                                    // 75
};                                                                     //
                                                                       //
function drawChart() {                                                 // 79
                                                                       //
    var datos = [];                                                    // 81
    datos.length = 0;                                                  // 82
                                                                       //
    for (var k = 0; k < sc.length; k++) {                              // 84
        if (sc[k].visible) {                                           // 85
            datos.push(constructDataset(sc[k]));                       // 86
            console.log("Construir datasets ");                        // 87
        }                                                              //
    }                                                                  //
                                                                       //
    /*                                                                 //
    [                                                                  //
            {                                                          //
                label: "My First dataset",                             //
                fillColor: "rgba(0, 214, 196, 0.50)",                  //
                strokeColor: "rgba(220,220,220,0.2)",                  //
                pointColor: "rgb(94, 207, 200)",                       //
                pointStrokeColor: "#fff",                              //
                pointHighlightFill: "#fff",                            //
                pointHighlightStroke: "rgba(220,220,220,1)",           //
                data: [65, 59, 90, 81, 56]                             //
            },                                                         //
                                                                       //
        ]                                                              //
                                                                       //
    */                                                                 //
                                                                       //
    var data = {                                                       // 113
        labels: ["Programming", "Advanced\nComputing", "Customer\nInteraction", "Unrelated\nCourses", "Engineering"],
        datasets: datos                                                // 115
    };                                                                 //
    var ctx = document.getElementById("myChart").getContext("2d");     // 117
    if (myRadarChart) myRadarChart.destroy();                          // 118
                                                                       //
    try {                                                              // 121
                                                                       //
        myRadarChart = new Chart(ctx).Radar(data, {                    // 124
                                                                       //
            //Boolean - Whether to show lines for each scale point     //
            scaleShowLine: true,                                       // 127
                                                                       //
            //Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut: true,                                    // 130
                                                                       //
            //String - Colour of the angle line                        //
            angleLineColor: "rgba(0,0,0,.1)",                          // 134
                                                                       //
            //Number - Pixel width of the angle line                   //
            angleLineWidth: 1,                                         // 137
                                                                       //
            //String - Point label font declaration                    //
            pointLabelFontFamily: "'Arial'",                           // 140
                                                                       //
            //String - Point label font weight                         //
            pointLabelFontStyle: "normal",                             // 143
                                                                       //
            //Number - Point label font size in pixels                 //
            pointLabelFontSize: 11,                                    // 146
                                                                       //
            //String - Point label font colour                         //
            pointLabelFontColor: "#666",                               // 149
                                                                       //
            //Boolean - Whether to show a dot for each point           //
            pointDot: true,                                            // 152
                                                                       //
            //Number - Radius of each point dot in pixels              //
            pointDotRadius: 3,                                         // 155
                                                                       //
            //Number - Pixel width of point dot stroke                 //
            pointDotStrokeWidth: 1,                                    // 158
                                                                       //
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,                               // 161
                                                                       //
            //Boolean - Whether to show a stroke for datasets          //
            datasetStroke: true,                                       // 164
                                                                       //
            //Number - Pixel width of dataset stroke                   //
            datasetStrokeWidth: 2,                                     // 167
                                                                       //
            //Boolean - Whether to fill the dataset with a colour      //
            datasetFill: true,                                         // 170
                                                                       //
            showScale: true,                                           // 173
                                                                       //
            //Boolean - Whether to show labels on the scale            //
            scaleShowLabels: true,                                     // 176
                                                                       //
            // Boolean - Whether the scale should begin at zero        //
            scaleBeginAtZero: true,                                    // 179
                                                                       //
            // Number - Scale label font size in pixels                //
            scaleFontSize: 10,                                         // 182
                                                                       //
            // String - Scale label font weight style                  //
            scaleFontStyle: "normal",                                  // 185
                                                                       //
            // String - Scale label font colour                        //
            scaleFontColor: "#BBB",                                    // 188
                                                                       //
            legendTemplate: '<ul>' + '<li>' + '<span style=\"background-color:rgb(39,174,96)>\">Programming</span>' + '</li>' + '</ul>'
                                                                       //
        });                                                            //
    } catch (error) {                                                  //
        var a = 0;                                                     // 203
    }                                                                  //
    console.log('Done chart');                                         // 205
}                                                                      //
                                                                       //
Template.courseFactorsCard.rendered = function () {                    // 210
    setTimeout(function () {                                           // 211
        console.log('Rendering');                                      // 212
                                                                       //
        var cc = Session.get("courses");                               // 214
        if (cc) {                                                      // 215
            sc = Courses.find({ "_id": { $in: cc } }).fetch();         // 216
            console.log("Busqueda de cursos afuera");                  // 217
            for (var i = 0; i < sc.length; i++) {                      // 218
                sc[i].data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
                sc[i].index = i + 1;                                   // 220
                sc[i].visible = true;                                  // 221
                sc[i].id = "courseFactor" + sc[i]._id;                 // 222
                console.log(sc[i].id);                                 // 223
            }                                                          //
            drawChart();                                               // 226
        }                                                              //
    }, 2500);                                                          //
};                                                                     //
                                                                       //
Template.courseFactorsCard.helpers({                                   // 232
                                                                       //
    sessionCourses: function () {                                      // 235
        console.log('Iniciando');                                      // 236
        var courses = Session.get("courses");                          // 237
        var selectedCourses = null;                                    // 238
        if (courses) {                                                 // 239
            selectedCourses = Courses.find({ "_id": { $in: courses } }).fetch();
            console.log("Busqueda de cursos en el helper");            // 241
        }                                                              //
        var pares = [];                                                // 243
        if (selectedCourses) {                                         // 244
            var j = 0;                                                 // 245
            for (var i = 0; i < selectedCourses.length; i = i + 2) {   // 246
                                                                       //
                var first, second;                                     // 248
                                                                       //
                first = {                                              // 250
                    'id': selectedCourses[i]._id,                      // 251
                    'name': selectedCourses[i].name,                   // 252
                    'order': (i + 1) % 6                               // 253
                };                                                     //
                                                                       //
                if (selectedCourses[i + 1]) {                          // 256
                    second = {                                         // 257
                        'id': selectedCourses[i + 1]._id,              // 258
                        'name': selectedCourses[i + 1].name,           // 259
                        'order': (i + 2) % 6                           // 260
                    };                                                 //
                } else second = null;                                  //
                pares[j] = { "first": first, "second": second };       // 265
                j++;                                                   // 266
            }                                                          //
        }                                                              //
        return pares;                                                  // 269
    },                                                                 //
                                                                       //
    selectedCoursesFactor: function () {                               // 272
        return Courses.findOne({ "_id": Session.get("selected-courses-factor") });
    },                                                                 //
                                                                       //
    checkedIfChecked: function (id) {                                  // 277
        console.log(id);                                               // 278
        return "";                                                     // 279
    }                                                                  //
                                                                       //
});                                                                    //
                                                                       //
Template.courseFactorsCard.events({                                    // 288
    "change .coursefactor": function (event, template) {               // 289
        console.log(event.target.id);                                  // 290
                                                                       //
        var result = $.grep(sc, function (e) {                         // 292
            return e.id == event.target.id;                            // 292
        });                                                            //
                                                                       //
        if (result.length == 0) {                                      // 294
            console.log('Invalid Selection');                          // 295
        } else if (result.length == 1) {                               //
            result[0].visible = event.target.checked;                  // 297
            console.log('curso: ' + result[0].id + ' visible:' + result[0].visible);
            for (var i = sc.length - 1; i >= 0; i--) {                 // 299
                console.log('curso: ' + sc[i].id + 'visible: ' + sc[i].visible);
            };                                                         //
            drawChart();                                               // 302
        } else {                                                       //
            console.log('Invalid Selection. Multiple');                // 304
        }                                                              //
                                                                       //
        Session.set(event.target.id, event.target.checked);            // 307
    }                                                                  //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
