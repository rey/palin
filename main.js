var app = require('app');
var Tray = require('tray');
var Menu = require('menu');
var path = require('path');
var ping = require("net-ping")
var BrowserWindow = require('browser-window');

var iconPath = path.join(__dirname, 'icon.png');
var appIcon = null;
var win = null;

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Item1',
      type: 'radio',
      icon: iconPath
    },
    {
      label: 'Item2',
      submenu: [
        { label: 'submenu1' },
        { label: 'submenu2' }
      ]
    },
    {
      label: 'Item3',
      type: 'radio',
      checked: true
    },
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        win.show();
        win.toggleDevTools();
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setToolTip('This is my application.');
  appIcon.setContextMenu(contextMenu);

  var count = 0;

  setInterval(function() {

    count++;

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
        appIcon.setImage(__dirname + "/dead.png");
      }

      // success
      else  {
        console.log ("🍏  " + target + " count: " + count +  " delta: " + delta + " sent: " + sent.getUTCMilliseconds() + " rcvd: " + rcvd.getUTCMilliseconds());
        appIcon.setImage(__dirname + "/alive.png");
      }

    });

  }, 1000);

});

