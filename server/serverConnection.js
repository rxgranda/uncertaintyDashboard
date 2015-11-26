

function RemoteServer(host, port, namespace){
    WebSocketClient =  Npm.require('websocket').client;
    this.connection=null;
    this.client=null;
    this.reconnectInterval = 1000;
    this.host=host;
    this.port=port;
    this.namespace=namespace;
    RemoteServer.reference=this;
}



RemoteServer.prototype.startConnection=function (){
    this.client= new WebSocketClient();
    
     
    this.client.on('connectFailed', function(error) {

        console.log('Connect Error: ' + error.toString());
        setTimeout(RemoteServer.reference.startConnection, RemoteServer.reference.reconnectInterval);
    });
     
    this.client.on('connect', function(connection) {
        console.log('WebSocket Client Connected');
        
        connection.on('error', function(error) {
            console.log("Connection Error: " + error.toString());
            setTimeout(RemoteServer.reference.startConnection, RemoteServer.reference.reconnectInterval);
        });
        
        connection.on('close', function() {
            console.log('echo-protocol Connection Closed');
            setTimeout(RemoteServer.reference.startConnection, RemoteServer.reference.reconnectInterval);
        });
        
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
            }
       
    });
        
     RemoteServer.reference.connection=connection;
     //console.log('Helo');
  });
  console.log('Conectando a : ws://'+RemoteServer.reference.host+':'+RemoteServer.reference.port+'/'+RemoteServer.reference.namespace);
  this.client.connect('ws://'+RemoteServer.reference.host+':'+RemoteServer.reference.port+'/'+RemoteServer.reference.namespace);
 
};

RemoteServer.prototype.query=function (data){
  if (this.connection.connected) {    
      this.connection.sendUTF(data);
  }else
    console.log('websocket not connected')
};



server=new RemoteServer('localhost',9000,'test');
server.startConnection();

myjson = {};
myjson = JSON.parse(Assets.getText("myjson.json"));
request=[{"reuqestId": "5645f7f7ef0bde57344c84de"}];
request=JSON.stringify(myjson);
 