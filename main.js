'use strict';

var menubar = require("menubar")
var ping = require("net-ping")

var mb = menubar(
  {
    dir: __dirname + "/app",
    icon: __dirname + "/app/images/icon.png"
  }
)


mb.on("ready", function() {

  console.log("app is ready");
  console.log(__dirname);

  setInterval(function() {

    // var target="8.8.8.8";
    var target="127.0.0.1";
    var options = {
      timeout: 2000
    };

    var session = ping.createSession (options);
    session.pingHost (target, function (error, target, sent, rcvd) {

      var delta = rcvd - sent;

      // error
      if (error) {
        console.log (target + ": " + error.toString ());
        mb.tray.setImage(__dirname + "/app/images/dead.png");
      }

      // success
      else  {
        console.log (target + " delta: " + delta + " sent: " + sent.getUTCMilliseconds() + " rcvd: " + rcvd.getUTCMilliseconds());
        mb.tray.setImage(__dirname + "/app/images/alive.png");
      }
    });

  }, 1000);
});

// mb.on("after-create-window", function() {
//   mb.window.openDevTools();
// });
