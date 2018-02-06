var Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready', () => {
    console.log('Bot Launched...')

    bot.user.setStatus('online')
    bot.user.setActivity('fontys.nl/uitschrijven')

});

bot.login('NDEwMzQ4NzY0Nzg4ODE3OTIw.DVr3iw.FKER_BCVjXAzGHHppWKQAA7WuSQ')
