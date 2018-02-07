var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

bot.user.setGame('fontys.nl/uitschrijven')

//functions
var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');

//Listener Event: Message Received (this will run every time a message is received)
bot.on('message', message => {

  var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');

    //Variables
    var sender = message.author; //the person who sent the message
    var msg = message.content.toUpperCase(); //takes message and makes it all uppercase
    var prefix = '!'; //the text before commands
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);

    if (sender.id === '410348764788817920'){
      return;
    }

    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if(err) console.error(err);
    })

    //help command
    if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS')
    {
      message.channel.send(commandsList);
    }

    //ping/pong command
    if(msg === prefix + 'PING')
    {
        message.channel.send('Pong! Ping = **' + bot.ping + '**');
    }
});

//Listener even: Bot Launched
bot.on('ready', () => {
    console.log('Bot Launched...')

    bot.user.setStatus('online')
    bot.user.setGame('fontys.nl/uitschrijven')

});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
