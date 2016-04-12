const palin = require("app");
const Menu = require("menu");
const Tray = require("tray");
const Ping = require("net-ping")

palin.on("ready", function(){
  var appIcon = new Tray(__dirname + "/images/menu/standby@2x.png");
  var contextMenu = Menu.buildFromTemplate([
    {
      label: "Palin " + palin.getVersion(),
      role: "help",
    },
    {
      label: "Quit",
      accelerator: "Command+Q",
      selector: "terminate:",
    }
  ]);
  appIcon.setToolTip("Palin is starting...");
  appIcon.setContextMenu(contextMenu);

  var count = 1;
  var target="8.8.8.8";
  var options = { timeout: 500 };

  setInterval(function() {
    var session = Ping.createSession (options);
    session.pingHost (target, function (error, target, sent, rcvd) {

      // Calculate a rough ping time
      var delta = rcvd - sent;

      // If ping isn"t successful
      if (error) {
        // console.log ("🍎  " + target + " count: " + count + " error: " + error.toString ());
        appIcon.setToolTip("Internet is unavailable");
        appIcon.setImage(__dirname + "/images/menu/dead@2x.png");
      }

      // Ping is successful!
      else  {
        // console.log ("🍏  " + target + " count: " + count +  " delta: " + delta + " sent: " + sent.getUTCMilliseconds() + " rcvd: " + rcvd.getUTCMilliseconds());
        appIcon.setToolTip("Internet is available");
        appIcon.setImage(__dirname + "/images/menu/alive@2x.png");
      }

      count++;
    });

  }, 1000);
});
