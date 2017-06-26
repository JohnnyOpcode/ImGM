/*
  ImGM Head Unit Application
  GMHackAI June 2017

  (c) 2017 John Kost (johnnyopcode@gmail.com)
*/

var Awareness;
var Engagement;
var UpsetEvt;
var EventCount = 0;

var AlertAwareness = false;

// AI Smart Camera device discovery (tbd)
var AI = "ws://localhost:9966";

console.log("Connecting to AI");
var id = gm.voice.startTTS(success, "The future is here today. Drive safe.");

function success() {
  // let it roll
}

// Websocket connection handler
var ws = new WebSocket(AI);
    ws.onmessage = function(msg) {
        console.log(msg.data);

        deserializedata(msg.data)

        setTimeout(function()
        {
            // keep the message flow going 
            ws.send("OK")
        }, 1000);
    };

function deserializedata(data) {
    var AIobject = JSON.parse(data);

    // the AIobject can contain a multitude of data, some of which we ignore
    Awareness = Math.ceil(AIobject.Awareness);
    Engagement = Math.ceil(AIobject.Engagement);
    UpsetEvt = AIobject.UpsetEvt;
    if (UpsetEvt) {
        EventCount++;
    }

    updatescreen();
    announcement();
}

function updatescreen() {
    document.getElementById("Awareness").innerHTML = "Awareness: " + Awareness; 
    document.getElementById("Engagement").innerHTML = "Engagement: " + Engagement;
    document.getElementById("UpsetEvt").innerHTML = "UpsetEvt: " + UpsetEvt;

    TagCanvas.Update("myCanvas");
}

function announcement() {
    if (Awareness < 45 && !AlertAwareness) {
        var id = gm.voice.startTTS(okfine, "Please focus on driving. The life you save may be your own.");

        function okfine() {
            AlertAwareness = true;
        }
    }

    // deadband around awareness reset
    if (Awareness > 95) {
        AlertAwareness = false;
    }
}