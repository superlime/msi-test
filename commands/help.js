const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {
    const helpEmbed = {
        color: 0x33cc33,
        title: 'Help',
        author: {
            name: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'prefix : ?',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [
            {
                name: '?list',
                value: 'Show you the list of the auto-attributable roles. \n -----',
            },
            {
                name: '?rank commander x / clx',
                value: 'Change your role according to your level of commander. \n -----',
            },
            {
                name: '?rank server x / sx',
                value: 'Change your role according to your server. \n -----',
            },
            {
                name: '?unrank server x / sx',
                value: 'Delete your role according to your server. \n -----',
            },
            {
                name: '?slugs',
                value: 'List of the slugs and some tips for a good use of them. \n -----',
            },
            {
                name: '?units',
                value: 'List of the units and some tips for good use of them. \n -----',
            },
            {
                name: '?infos',
                value: 'Some useful informations about the bot and the server. \n -----',
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