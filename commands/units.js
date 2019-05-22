const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {
    const unitsEmbed = {
        color: 0x33cc33,
        title: 'Units',
        author: {
            name: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the Units.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [
            {
                name: '?units physic',
                value: 'Show units of physical type',
                inline: true,
            },
            {
                name: '?units fire',
                value: 'Show units of fire type',
                inline: true,
            },
            {
                name: '?units lightning',
                value: 'Show units of lightning type \n --------------------------------------',
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const phyUnitsEmbed = {
        color: 0xffcc00,
        title: 'Physical units',
        author: {
            name: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the physical units.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [
            //=============================REGULAR=============================
            {
                name: 'MARCO - H',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'MUMMY FIO',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'FIO- 2H',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'TREVOR',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'NADIA',
                value: 'REGULAR ARMY \n --------------------',
                inline: true,
            },
            {
                name: 'MADOKA AIKAWA',
                value: 'REGULAR ARMY',
                inline: true,
            },
            //=============================REBEL=============================
            {
                name: 'GATLING SOLDIER',
                value: 'REBEL ARMY',
                inline: true,
            },
            {
                name: 'ARABIAN SOLDIER',
                value: 'REBEL ARMY',
                inline: true,
            },           
            {
                name: 'GUERILLA',
                value: 'REBEL ARMY \n --------------------',
                inline: true,
            },
            {
                name: 'REBEL RIFLEMAN',
                value: 'REBEL ARMY',
                inline: true,
            },
            //=============================ANOTHER=============================
            {
                name: 'INVADER',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'OHUMEIN-CONGA(RED)',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'SMASHER',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'CHOWMEIN-CONGA',
                value: 'ANOTHER FORCE',
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const fireUnitsEmbed = {
        color: 0xff6600,
        title: 'Fire units',
        author: {
            name: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the fire units.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [
            //=============================REGULAR=============================
            {
                name: 'FAT TARMA',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'TARMA - c',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'ERI',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'FAT NADIA',
                value: 'REGULAR ARMY',
                inline: true,
            },
            {
                name: 'RALF',
                value: 'REGULAR ARMY \n --------------------',
            },
            //=============================REBEL=============================
            {
                name: 'SHIELDED SOLDIER',
                value: 'REBEL ARMY',
                inline: true,
            },
            {
                name: 'BAZOOKA SOLDIER',
                value: 'REBEL ARMY',
                inline: true,
            },
            {
                name: 'AMADEUS SOLDIER',
                value: 'REBEL ARMY',
                inline: true,
            },
            {
                name: 'MORTAR',
                value: 'REBEL ARMY',
                inline: true,
            },
            {
                name: 'DONALD MORDEN',
                value: 'REBEL ARMY \n --------------------',
            },
            //=============================ANOTHER=============================
            {
                name: 'NATIVE',
                value: 'ANOTHER FORCE',
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const lightUnitsEmbed = {
        color: 0x0066ff,
        title: 'Lightning units',
        author: {
            name: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the lightning units.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [
            //=============================REGULAR=============================
            {
                name: 'ZOMBIE MARCO',
                value: 'REGULAR ARMY \n --------------------',
            },
            //=============================REBEL=============================
            {
                name: 'SPECIAL FORCE',
                value: 'REBEL ARMY \n --------------------',
            },
            //=============================ANOTHER=============================
            {
                name: 'MARS PEOPLE',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'MUMMY',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'ZOMBIE(FATTISH MAN)',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'TINY UFO TYPE:A',
                value: 'ANOTHER FORCE',
                inline: true,
            },
            {
                name: 'DOG MUMMY',
                value: 'ANOTHER FORCE',
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: '@Bot MSI#9822',
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    switch(args[0]){
        case('physic'):
            message.channel.send({ embed: phyUnitsEmbed });
            break;
        case('fire'):
            message.channel.send({ embed: fireUnitsEmbed });
            break;
        case('lightning'):
            message.channel.send({ embed: lightUnitsEmbed });
            break;
        default:
            message.channel.send({ embed: unitsEmbed });
            break;
    }

}