var Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready', () => {
    console.log('Bot Launched...')

    bot.user.setStatus('online')
    bot.user.setActivity('fontys.nl/uitschrijven')

});

bot.login(proces.env.BOT_TOKEN)
