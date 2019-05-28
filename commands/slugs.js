const Discord = require('discord.js')

exports.run = (client, message, args, config) => {
    const slugEmbed = {
        color: 0x33cc33,
        title: 'Slugs',
        author: {
            name: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the slugs.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [{
                name: '?slugs n',
                value: 'Show slugs of N rarity',
                inline: true,
            },
            {
                name: '?slugs r',
                value: 'Show slugs of R rarity',
                inline: true,
            },
            {
                name: '?slugs sr',
                value: 'Show slugs of SR rarity \n --------------------------------------',
                inline: true,
            },
            {
                name: '?slugs ssr',
                value: 'Show slugs of SSR rarity \n --------------------------------------',
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const slugNEmbed = {
        color: 0x663300,
        title: 'Slugs N',
        author: {
            name: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the slugs of N rarity.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [{
                name: 'Battered MINI U.F.O',
                value: 'ANOTHER FORCE',
            },
            {
                name: 'Battered Bradley',
                value: 'REBEL ARMY',
            },
            {
                name: 'Weak Donkey Slug',
                value: 'REGULAR ARMY',
            },
            {
                name: 'Battered Di-Cokka',
                value: 'REBEL ARMY',
            },
            {
                name: 'Battered MH-6 s',
                value: 'REBEL ARMY',
            },
            {
                name: 'Battered Girida-O',
                value: 'REBEL ARMY',
            },
            {
                name: 'Battered T-2B Melty Honey',
                value: 'REBEL ARMY',
            },
            {
                name: 'Battered Bradley VER.P.M',
                value: 'REBEL ARMY',
            },
            {
                name: 'Battered DMV-280B',
                value: 'REBEL ARMY',
            },
            {
                name: 'Battered Hover Unit',
                value: 'REBEL ARMY',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const slugREmbed = {
        color: 0x3399ff,
        title: 'Slugs R',
        author: {
            name: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the slugs of R rarity.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [{
                name: 'DI-COKKA',
                value: 'REBEL ARMY',
            },
            {
                name: 'MH-6 s',
                value: 'REBEL ARMY',
            },
            {
                name: 'HOVER VEHICLE',
                value: 'REBEL ARMY',
            },
            {
                name: 'BRADLEY',
                value: 'REBEL ARMY',
            },
            {
                name: 'GIRIDA-O(PM)',
                value: 'REBEL ARMY',
            },
            {
                name: 'GIRIDA-O',
                value: 'REBEL ARMY',
            },
            {
                name: 'DI-COKKA(PM)',
                value: 'REBEL ARMY',
            },
            {
                name: 'HOVER UNIT',
                value: 'REBEL ARMY',
            },
            {
                name: 'MELTY HONEY',
                value: 'REBEL ARMY',
            },
            {
                name: 'BRADLEY(PM)',
                value: 'REBEL ARMY',
            },
            {
                name: 'MV-280B',
                value: 'REBEL ARMY',
            },
            {
                name: 'DONKEY SLUG',
                value: 'REGULAR ARMY',
            },
            {
                name: 'MH-6 s(PM)',
                value: 'REBEL ARMY',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const slugSREmbed = {
        color: 0x9900ff,
        title: 'Slugs SR',
        author: {
            name: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the slugs of SR rarity.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [{
                name: 'IRON ISO',
                value: 'REBEL ARMY',
            },
            {
                name: 'MINI U.F.O',
                value: 'ANOTHER FORCE',
            },
            {
                name: 'R-SHOBU',
                value: 'REBEL ARMY',
            },
            {
                name: 'PARACHUETRUCK',
                value: 'REBEL ARMY',
            },
            {
                name: 'SLUGNOID',
                value: 'REGULAR ARMY',
            },
            {
                name: 'NOP-03 SARUBIA',
                value: 'REBEL ARMY',
            },
            {
                name: 'METAL CLAW',
                value: 'REBEL ARMY',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    const slugSSREmbed = {
        color: 0xff9900,
        title: 'Slugs SSR',
        author: {
            name: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Commands for the slugs of SSR rarity.',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [{
                name: 'SHOE',
                value: 'REBEL ARMY',
            },
            {
                name: 'SV-001 TYPE-R',
                value: 'REGULAR ARMY',
            },
            {
                name: 'DAI-MANJI',
                value: 'ANOTHER FORCE',
            },
            {
                name: 'LV ARMOR',
                value: 'REBEL ARMY',
            },
            {
                name: 'SV-CAMEL',
                value: 'REGULAR ARMY',
            },
            {
                name: 'ELEPHANT SLUG',
                value: 'REGULAR ARMY',
            },
            {
                name: 'MARS MECHA',
                value: 'ANOTHER FORCE',
            },
            {
                name: 'SLUG FLYER',
                value: 'REGULAR ARMY',
            },
            {
                name: 'SV-001',
                value: 'REGULAR ARMY',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    switch (args[0]) {
        case ('n'):
            message.channel.send({ embed: slugNEmbed });
            break;
        case ('r'):
            message.channel.send({ embed: slugREmbed });
            break;
        case ('sr'):
            message.channel.send({ embed: slugSREmbed });
            break;
        case ('ssr'):
            message.channel.send({ embed: slugSSREmbed });
            break;
        default:
            message.channel.send({ embed: slugEmbed });
            break;
    }

}