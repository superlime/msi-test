const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {
    const helpEmbed = {
        color: 0x33cc33,
        title: 'Informations',
        author: {
            name: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Some useful informations about the bot and the server',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [
            {
                name: 'Server\'s administrators',
                value: 'Hoopa#4832\nBunnyFace#3294\n-----',
            },
            {
                name: 'Server\'s moderators',
                value: 'Mr.elite#0519\n -----',
            },
            {
                name: 'Bot\'s creator',
                value: 'Zurix#3717',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };
    
    message.channel.send({ embed: helpEmbed });
}