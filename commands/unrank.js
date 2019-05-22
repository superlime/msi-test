const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {

    let server1 = message.guild.roles.find("name", "S1");
    let server2 = message.guild.roles.find("name", "S2");
    let server3 = message.guild.roles.find("name", "S3");
    let server4 = message.guild.roles.find("name", "S4");
    let server5 = message.guild.roles.find("name", "S5");
    let server6 = message.guild.roles.find("name", "S6");
    let server7 = message.guild.roles.find("name", "S7");

    const nearestDozen = (n) => {
        const str = n.toString()
        const withoutLast = str.slice(0, str.length - 1)
        return Number(withoutLast + 0)
    }

    let member = message.member
    let memberU = message.author.tag

    let memberM = message.mentions.members.first();
        if (memberM) {
            if (message.member.hasPermission('ADMINISTRATOR')) {
            member = memberM
            memberU = memberM.user.tag
            } else
            return message.channel.send("Permissions")
        }


    if(args[0] == "server"){
        switch(args[1]) {
            case "1":
            member.removeRole(server1)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S1** anymore !"
                                }});
            break;

            case "2":
            member.removeRole(server2)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S2** anymore !"
                                }});
            break;

            case "3":
            member.removeRole(server3)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S3** anymore !"
                                }});
            break;

            case "4":
            member.removeRole(server4)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S4** anymore !"
                                }});
            break;

            case "5":
            member.removeRole(server5)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S5** anymore !"
                                }});
            break;
            case "6":
            member.removeRole(server6)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S6** anymore !"
                                }});
            break;  
            case "7":
            member.removeRole(server7)
            message.channel.send({embed: {
                                    color: 0x33cc33,
                                    description: "You aren't **S7** anymore !"
                                }});
            break;             
            default:
                return message.channel.send({embed: {
                        color: 0x33cc33,
                        description: "You made a mistake in the command. Do ?rank server xx (xx is your server)."
                        }})
        }          
    }else if(args[0] == "s1"){
        member.removeRole(server1)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S1** anymore !"
                            }});
    }else if(args[0] == "s2"){
        member.removeRole(server2)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S2** anymore !"
                            }});
    }else if(args[0] == "s3"){
        member.removeRole(server3)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S3** anymore !"
                            }});
    }else if(args[0] == "s4"){
        member.removeRole(server4)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S4** anymore !"
                            }});
    }else if(args[0] == "s5"){
        member.removeRole(server5)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S5** anymore !"
                            }});    
    }else if(args[0] == "s6"){
        member.removeRole(server6)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S6** anymore !"
                            }});   
    }else if(args[0] == "s7"){
        member.removeRole(server7)
        message.channel.send({embed: {
                                color: 0x33cc33,
                                description: "You aren't **S7** anymore !"
                            }});   
    }

}