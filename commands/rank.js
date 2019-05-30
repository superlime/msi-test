const Discord = require('discord.js')

exports.run = (client, message, args, config) => {

    // Notify user about new simplified level/server commands
    return message.channel.send({
        embed: {
            color: 0x33cc33,
            description: `Commander level and server commands have been simplified.  Please use ?level xx (where xx is your commander level) to set your commander level, or ?server x (where x is your server number) to set your server.`
        }
    });
};