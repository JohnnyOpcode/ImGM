/*
  ImGM Zynq-Emu camera websocket emulation
  GMHackAI June 2017

  (c) 2017 John Kost (johnnyopcode@gmail.com)
 */

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9966 });

console.log('Zynq Camera Emulation Running..');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send(JSON.stringify(genAIresponse()));
});

function genAIresponse() {
    // We model the AI output as a JSON object for easy consumption by the Head Unit
    var ojson = {"Awareness":100, "Engagement":100, "UpsetEvt":false};

    // Add some randomness to help the animation in the UI
    ojson.Awareness = 40 + 60 * Math.random();
    ojson.Engagement = 40 + 60 * Math.random();

    if (Math.round(Math.random()) > 0){
      ojson.UpsetEvt = true;
    } else {
      ojson.UpsetEvt = false;
    }

  return ojson;
}