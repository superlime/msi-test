const Discord = require('discord.js')

let role10 = "Commander 10";
let role20 = "Commander 20";
let role30 = "Commander 30";
let role40 = "Commander 40";
let role50 = "Commander 50";
let role60 = "Commander 60";
let role70 = "Commander 70";
let role80 = "Commander 80";
let role90 = "Commander 90";
let role100 = "Commander 100";
let role110 = "Commander 110";
let role120 = "Commander 120";
let role130 = "Commander 130";
let role140 = "Commander 140";
let role150 = "Commander 150";

let server1 = "S1";
let server2 = "S2";
let server3 = "S3";
let server4 = "S4";
let server5 = "S5";
let server6 = "S6";
let server7 = "S7";

let retour = "\n";

exports.run = (client, message, args, config) => {

    let commanderRoles = message.guild.roles.filter(function(role) { return role.name.startsWith("Commander "); });
    let serverRoles = message.guild.roles.filter(function(role) { return /S\d+/.test(role.name); });

    let listEmbed = {
        color: 0x00AE86,
        title: 'Commander and Server Roles supported',
        author: {
            name: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        description: 'Valid Commander and Server Roles currently supported by this Discord',
        thumbnail: {
            url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
        fields: [{
                name: 'Commander Roles',
                value: commanderRoles.map(function(role) { return role.name; }).join("\n"),
            },
            {
                name: 'Server Roles',
                value: serverRoles.map(function(role) { return role.name; }).join("\n"),
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: 'https://i.imgur.com/U8L4NR8.jpg',
        },
    };

    message.channel.send({ embed: listEmbed });
}