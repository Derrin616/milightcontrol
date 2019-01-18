//De packets ophalen en de bot starten
var Milight = require('../src/index');
var commands = Milight.commandsV6;
const Discord = require('discord.js');
const bot = new Discord.Client();







//Als de bot gestart is dan stuurt de bot een MSG in de console
bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    console.log('');
    console.log('Coded by @Derrin616')
    bot.user.setActivity('CloudCraft', { type: 'WATCHING' });
});

//Dit is de var voor de messages

bot.on("message", async message => {



    //Dit zijn de vars voor de prefix bijvoorbeeld
    var msg = message.content;
    var prefix = '>'
    var NewLine = '\n'
    const args = message.content.split(" ").slice(1);


    if (msg.startsWith('!off')) {

    var light = new Milight.MilightController({
        ip: "192.168.10.179",
        type: 'v6'
      }),
      zone = 1;
    
    light.ready().then(function() {
    
        light.sendCommands(commands.fullColor.rgb(zone, 0, 0, 255));
    
    
      light.close().then(function () {
        console.log("sluiten");
      });
      console.log("klaar");
    }).catch(function(error) {
      console.log(error);
      light.close();
    });
}




}); 
bot.login('NDU0MzY0NDQ0Mzk1MzA3MDQw.Df2Aug.2ffzwAKTVWUvcQVzCBdhfduumQY');
