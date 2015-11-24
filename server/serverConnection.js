

function RemoteServer(host, port, namespace){
    WebSocketClient =  Npm.require('websocket').client;
    this.connection=null;
    this.client=null;
    this.reconnectInterval = 1000;
    this.host=host;
    this.port=port;
    this.namespace=namespace;
}



RemoteServer.prototype.startConnection=function (){
    var reference=this;
    this.client= new WebSocketClient();
    
     
    this.client.on('connectFailed', function(error) {
        console.log('Connect Error: ' + error.toString());
        setTimeout(reference.startConnection, reference.reconnectInterval);
    });
     
    this.client.on('connect', function(connection) {
        console.log('WebSocket Client Connected');
        
        connection.on('error', function(error) {
            console.log("Connection Error: " + error.toString());
            setTimeout(reference.startConnection, reference.reconnectInterval);
        });
        
        connection.on('close', function() {
            console.log('echo-protocol Connection Closed');
            setTimeout(reference.startConnection, reference.reconnectInterval);
        });
        
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
            }
       
    });
        
     reference.connection=connection;
     console.log('Hell0');
  });
   
  this.client.connect('ws://'+this.host+':'+this.port+'/'+this.namespace);
 
};

RemoteServer.prototype.query=function (matricula){
  if (this.connection.connected) {    
      this.connection.sendUTF({datos:'1'});
  }
};



server=new RemoteServer('localhost',9000,'test');
server.startConnection();


var request=[{"reuqestId": "5645f7f7ef0bde57344c84de"}];
request=JSON.stringify(request);
  /*  "student": [
      {
        "id": "5645f7f70a7cd6ab830e8722",
        "gpa": 7.0793,
        "performance": 0.6,
        "compliance": 3
      }
    ],
    "courses": [
      {
        "id": "5645f7f73077f65af76df45a",
        "compliance": 2
      },
      {
        "id": "5645f7f7fccab1b5dd662a4b",
        "compliance": 5
      },
      {
        "id": "5645f7f7e7b8050367ef5cff",
        "compliance": 5
      },
      {
        "id": "5645f7f70ea9b237c0039330",
        "compliance": 5
      }
    ],
    "data": [
      {
        "from": 2009,
        "to": 2015,
        "program": true,
        "sylabus": true,
        "evaluation": false,
        "instructors": true,
        "compliance": 2
      }
    ]
  }
];*/
//server.query( request);
