var menubar = require('menubar')
var ping = require('net-ping')

console.log(__dirname);

var mb = menubar(
  {
    icon: "images/icon.png"
  }
)

mb.on('ready', function() {

  console.log("app is ready");

  setInterval(function() {

    var target="8.8.8.8";
    var options = {
      timeout: 2000
    };

    var session = ping.createSession (options);
    session.pingHost (target, function (error, target, sent, rcvd) {

      var delta = rcvd - sent;

      // error
      if (error) {
        console.log (target + ": " + error.toString ());
        mb.tray.setImage("images/dead.png");
      }

      // success
      else  {
        console.log (target + " delta: " + delta + " sent: " + sent.getUTCMilliseconds() + " rcvd: " + rcvd.getUTCMilliseconds());
        mb.tray.setImage("images/alive.png");
        console.log
      }
    });

  }, 1000);
});

mb.on("after-create-window", function() {
  mb.window.openDevTools();
});
