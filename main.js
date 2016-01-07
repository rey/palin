var app = require('app');
var Tray = require('tray');
var Menu = require('menu');
var path = require('path');
var ping = require("net-ping")
var BrowserWindow = require('browser-window');

var iconPath = path.join(__dirname, 'icon.png');
var appIcon = null;
var win = null;

var package = require('./package.json');

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Palin ' + package.version,
      role: 'help',
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);

  appIcon.setToolTip('Palin is starting...');
  appIcon.setContextMenu(contextMenu);

  var count = 0;

  setInterval(function() {

    var target="8.8.8.8";
    // var target="127.0.0.1";
    var options = {
      timeout: 500
      // timeout: 2000
    };

    var session = ping.createSession (options);
    session.pingHost (target, function (error, target, sent, rcvd) {

      var delta = rcvd - sent;

      // error
      if (error) {
        console.log ("🍎  " + target + " count: " + count + " error: " + error.toString ());
        appIcon.setToolTip('Internet is unavailable');
        appIcon.setImage(__dirname + "/dead.png");
      }

      // success
      else  {
        console.log ("🍏  " + target + " count: " + count +  " delta: " + delta + " sent: " + sent.getUTCMilliseconds() + " rcvd: " + rcvd.getUTCMilliseconds());
        appIcon.setToolTip('Internet is available');
        appIcon.setImage(__dirname + "/alive.png");
      }

      count++;
    });

  }, 1000);

});

