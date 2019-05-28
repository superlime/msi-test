const Discord = require('discord.js')

exports.run = (client, message, args, config) => {
    const error = {
        color: 0x33cc33,
        title: message.author.tag,
        description: "You made a mistake in the command. Please try again. If the problem problem persists you can contact an Administrator, a Moderator or @Zurix#3717. \n Syntax of the commande: **__?rank cl xx__ or __?rank commander xx__** (xx is your commander level).",
        timestamp: new Date(),
        footer: {
            text: `@Bot ${config.botName}`,
            icon_url: message.author.avatarURL,
        },
    };

    let member = message.member;
    let memberU = message.author.tag;

    let memberM = message.mentions.members.first();
    if (memberM) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            member = memberM;
            memberU = memberM.user.tag;
        } else
            return message.channel.send("Permissions");
    }

    // Process commander/cl command
    if (args[0] == "commander" || args[0] == "cl") {
        let commanderLevel = args[1];

        if (isNaN(commanderLevel)) {
            return message.channel.send({
                embed: {
                    color: 0x33cc33,
                    description: `You made a mistake in the command.  '${commanderLevel}' is not a number. Do ?rank cl xx (xx is your commander level).`
                }
            });
        }

        // Compute which grouping of commander levels
        let commanderGroup = Math.trunc(args[1] / 10) * 10;

        // Find the role they now fit in
        let commanderRole = message.guild.roles.find(function(role) { return role.name == `Commander ${commanderGroup}`; });

        if (commanderRole == null) {
            return message.channel.send({
                embed: {
                    color: 0x33cc33,
                    description: `Error, role 'Commander ${commanderLevel}' could not be located.  Please contact the server administrator.`
                }
            });
        }

        // Find any current commander level roles, other than the one they're now in
        let currentRoles = member.roles.filter(
            function(role) { return role.name.startsWith("Commander ") && role.name != commanderRole.name; });

        // Remove all other roles
        if (currentRoles.size > 0) {
            currentRoles.forEach(function(role) {
                console.log(`Removing ${role.name} from ${member.displayName}`);
                member.removeRole(role).then(result => {
                    console.log(result);
                });
            });
        }

        // If they're not in the new role, add them
        if (!member.roles.some(function(role) { return role.name == commanderRole.name; })) {
            console.log(`Adding ${commanderRole.name} to ${member.displayName}`);
            member.addRole(commanderRole);
        }

        // Update displayName with new level
        let clRegex = /\s*\[CL\s*\d+\]/;
        let matches = member.displayName.match(new RegExp(clRegex, "g"));
        let nameTemp = member.displayName;

        if (matches == null || matches.length == 0) { // No CL tag in username, add to end
            nameTemp = `${member.displayName} [CL ${commanderLevel}]`;
        } else if (matches.length == 1) { // CL tag in username, replace
            nameTemp = member.displayName.replace(clRegex, ` [CL ${commanderLevel}]`);
        } else { // Multiple CL tags in username, remove and re-add
            nameTemp = member.displayName.replace(new RegExp(clRegex, "g"), "");
            nameTemp = `${nameTemp} [CL ${commanderLevel}]`;
        }

        console.log(`Changing ${member.displayName} to ${nameTemp}`);
        member.setNickname(nameTemp, `CL update to ${commanderLevel}`);

        message.channel.send({
            embed: {
                color: 0x33cc33,
                fields: [{
                    name: message.author.tag,
                    value: `You are **__Commander ${commanderLevel}__**`,
                }, ],
                timestamp: new Date(),
                footer: {
                    text: `@Bot ${config.botName}`,
                    icon_url: message.author.avatarURL,
                },
            }
        });
    }

    if (args[0] == "server") {
        let serverNumber = args[1];

        if (isNaN(serverNumber)) {
            if (serverNumber.toLowerCase().startsWith("s")) {
                serverNumber = serverNumber.replace(/s/i, "");
                if (isNaN(serverNumber)) {
                    return message.channel.send({
                        embed: {
                            color: 0x33cc33,
                            description: "You made a mistake in the command. Do ?rank server xx (xx is your server)."
                        }
                    });
                }
            }
        }

        // Get new server role
        let serverRole = message.guild.roles.find(function(role) { return role.name == `S${serverNumber}`; });

        // Get current server roles, other than new one
        let currentServers = member.roles.filter(function(role) { return /S\d+/.test(role.name) && role.name != serverRole.name; });

        // Remove all other roles
        if (currentServers.length > 0) {
            currentServers.forEach(function(role) { member.removeRole(role); });
        }

        // If they're not in the new role, add them
        if (!member.roles.some(function(role) { return role.name == serverRole.name; })) {
            member.addRole(serverRole);
        }

        // Update username
        let snRegex = /\[S\d+\]\s*/;
        let matches = member.displayName.match(new RegExp(snRegex, "g"));
        if (matches == null || matches.length == 0) { // No S tag in username, add to end
            member.setNickname(`[S${serverNumber}] ${member.displayName}`);
        } else if (matches.length == 1) { // S tag in username, replace
            member.setNickname(member.displayName.replace(snRegex, `[S${serverNumber}] `));
        } else { // Multiple S tags in username, remove and re-add
            let nameTemp = member.displayName.replace(snRegex, "");
            member.setNickname(`[S${serverNumber}] ${nameTemp}`);
        }

        message.channel.send({
            embed: {
                color: 0x33cc33,
                description: `You are **S${serverNumber}**!`
            }
        });
    }
};