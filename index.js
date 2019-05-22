const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const fileExists = require('file-exists');


client.on("ready", function () {
    client.user.setPresence({ game: { name: 'Command ?help', type: 0} });
    console.log(`Bot Ready !`);
});

client.on('message', message => {
    if (message.author.bot) return
    if (!message.content.startsWith(config.prefix)) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    
    if (command == 'test') {
      message.channel.sendMessage('Ok :white_check_mark:')
    }
    try {
      let commandFile = require(`./commands/${command}.js`)
      fileExists(`./commands/${command}.js`).then(exists => {
        if (exists) commandFile.run(client, message, args)
      })
    } catch(err) {
      if (command != 'test') message.channel.send('Unknown or corrupted command. Please contact an administrator if the error persists.')
    }
});
client.login(config.token);
//bot.login(process.env.token);