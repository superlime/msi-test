const Discord = require('discord.js')

    let role10 = "Commander 10"
    let role20 = "Commander 20"
    let role30 = "Commander 30"
    let role40 = "Commander 40"
    let role50 = "Commander 50"
    let role60 = "Commander 60"
    let role70 = "Commander 70"
    let role80 = "Commander 80"
    let role90 = "Commander 90"
    let role100 = "Commander 100"
    let role110 = "Commander 110"
    let role120 = "Commander 120"
    let role130 = "Commander 130"
    let role140 = "Commander 140"
    let role150 = "Commander 150"

    let server1 = "S1"
    let server2 = "S2"
    let server3 = "S3"
    let server4 = "S4"
    let server5 = "S5"
    let server5 = "S6"
    let server5 = "S7"

    let retour = "\n"

exports.run = (client, message, args, guild) => {
    const listEmbed = new Discord.RichEmbed()
        .setTitle("List of the self attributable roles")
        .setAuthor("@Bot MSI#9822", "https://i.imgur.com/U8L4NR8.jpg")
        .setColor(0x00AE86)
        .setDescription(role10 + retour + role20 + retour + role30 + retour + role40 + retour + role50 + retour + role60 + retour + role70 + retour + role80 + retour + role90 + retour + role100 + retour + role110 + retour + role120 + retour + role130 + retour + role140 + retour + role150 + retour + server1 + retour + server2 + retour + server3 + retour + server4 + retour + server5)
        .setFooter("@Bot MSI#9822", "https://i.imgur.com/U8L4NR8.jpg")
            
    message.channel.send({ embed: listEmbed });
}