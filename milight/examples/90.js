var Milight = require('node-milight-promise');
var commands = Milight.commandsV6;
const ip = require('./ip.json')
const z = require('./zone.json')

// Important Notes:
// *  Instead of providing the global broadcast address which is the default, you should provide the IP address
//    of the Milight Controller for unicast mode. Don't use the global broadcast address on Windows as this may give
//    unexpected results. On Windows, global broadcast packets will only be routed via the first network adapter. If
//    you want to use a broadcast address though, use a network-specific address, e.g. for `192.168.0.1/24` use
//    `192.168.0.255`.
// *  Note, for the V6 command set each command must be provided with a zone parameter as shown in the example below!

var light = new Milight.MilightController({
    ip: ip.prefix,
    type: 'v6'
  }),
  zone = z.prefix;

light.ready().then(function() {

    light.sendCommands(commands.rgbw.brightness(zone, 90))


  light.close().then(function () {
    console.log("sluiten");
  });
  console.log("klaar");
}).catch(function(error) {
  console.log(error);
  light.close();
});