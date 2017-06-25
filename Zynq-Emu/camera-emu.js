/*
  ImGM Zynq-Emu camera websocket emulation
  GMHackAI June 2017

  John Kost (johnnyopcode@gmail.com)
 */

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 6666 });

console.log('Zynq Camera Emulation Running..');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});