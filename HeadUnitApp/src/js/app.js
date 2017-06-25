/*
  ImGM Head Unit Application
  GMHackAI June 2017

  (c) 2017 John Kost (johnnyopcode@gmail.com)
 */

// AI Smart Camera device discovery (tbd)
var AI = "ws://localhost:9966";

console.log("Connecting to AI");

// Websocket connection handler
var ws = new WebSocket(AI);
    ws.onmessage = function(msg) {
        console.log(msg.data);

        setTimeout(function()
        {
            // keep the message flow going 
            ws.send("OK")
        }, 1000);
    };
