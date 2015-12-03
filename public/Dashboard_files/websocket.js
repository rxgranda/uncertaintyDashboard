(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/websocket.js                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Websocket = new WebSocket("ws://localhost:9000/test");                 // 1
Websocket.onopen = function (evt) {                                    // 2
  onOpen(evt);                                                         // 2
};                                                                     //
Websocket.onclose = function (evt) {                                   // 3
  onClose(evt);                                                        // 3
};                                                                     //
Websocket.onmessage = function (evt) {                                 // 4
  onMessage(evt);                                                      // 4
};                                                                     //
Websocket.onerror = function (evt) {                                   // 5
  onError(evt);                                                        // 5
};                                                                     //
                                                                       //
function onOpen(evt) {                                                 // 7
  console.log("ws:online");                                            // 8
  doSend('{"reuqestId": "5645f7f7ef0bde57344c84de"}');                 // 9
}                                                                      //
                                                                       //
function onClose(evt) {                                                // 12
  console.log("ws:offline");                                           // 13
}                                                                      //
                                                                       //
function onMessage(evt) {                                              // 16
  var r = Math.random() * (1 - 0) + 0;                                 // 17
  console.log("ws:recieved: " + r);                                    // 18
  Session.set("riskValue", r);                                         // 19
  return r;                                                            // 20
}                                                                      //
                                                                       //
function onError(evt) {                                                // 23
  console.log("ws:error: " + evt.data);                                // 24
}                                                                      //
                                                                       //
function doSend(message) {                                             // 27
  console.log("ws:doSend: " + message);                                // 28
  Websocket.send(message);                                             // 29
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
