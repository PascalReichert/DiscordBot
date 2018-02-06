var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');

bot.on('message', message => {
    
    var sender = message.author; //the person who sent the message
    var msg = message.content.toUpperCase(); //takes message and makes it all uppercase
    var prefix = '!'
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    
    if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS')
    {
      message.channel.send(commandsList)
    }
    
    if(msg === prefix + 'PING')
    {
        message.channel.send('Pong! Ping = **' + bot.ping + '**')
    }
}

bot.on('ready', () => {
    console.log('Bot Launched...')

    bot.user.setStatus('online')
    bot.user.setActivity('fontys.nl/uitschrijven')

});

bot.login(process.env.BOT_TOKEN);
