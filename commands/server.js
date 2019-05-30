const Discord = require('discord.js')

exports.run = (client, message, args, config) => {
    let member = message.member;

    let serverNumber = args[0];

    if (isNaN(serverNumber)) {
        if (serverNumber.toLowerCase().startsWith("s")) {
            serverNumber = serverNumber.replace(/s/i, "");
            if (isNaN(serverNumber)) {
                return message.channel.send({
                    embed: {
                        color: 0x33cc33,
                        description: `Invalid server '${args[0]}'.  Command example: ?server 7`
                    }
                });
            }
        }
    }

    // Get new server role
    let serverRole = message.guild.roles.find(function(role) { return role.name == `S${serverNumber}`; });

    if (null == serverRole) {
        return message.channel.send({
            embed: {
                color: 0x33cc33,
                description: `Unable to locate role for server '${serverNumber}'.  Please contact the admin if this is a valid server.`
            }
        });
    }

    // Get current server roles, other than new one
    let currentServers = member.roles.filter(function(role) { return /S\d+/.test(role.name) && role.name != serverRole.name; });

    // Remove all other server roles (if any)
    if (null != currentServers && currentServers.length > 0) {
        currentServers.forEach(function(role) { member.removeRole(role); });
    }

    // If they're not in the new role, add them
    if (!member.roles.some(function(role) { return role.name == serverRole.name; })) {
        member.addRole(serverRole);
    }

    // Update username
    let snRegex = /\[S\d+\]\s*/;
    let matches = member.displayName.match(new RegExp(snRegex, "g"));
    let nameTemp = member.displayName;

    // No S tag in username, add to beginning
    if (matches == null || matches.length == 0) {
        nameTemp = `[S${serverNumber}] ${member.displayName}`;
        // S tag in username, replace
    } else if (matches.length == 1) {
        nameTemp = member.displayName.replace(snRegex, `[S${serverNumber}] `);
        // Multiple S tags in username, remove and re-add
    } else {
        nameTemp = member.displayName.replace(new RegExp(snRegex, "g"), "");
        nameTemp = `[S${serverNumber}] ${nameTemp}`;
    }

    console.log(`Changing ${member.displayName} to ${nameTemp}`);

    // Skip nickname update if administrator due to API limitation
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send({
            embed: {
                color: 0x33cc33,
                description: `Sorry, unfortunately discord API doesn't let me update the nickname for the server administrator.  :/  Your new nickname would have been '${nameTemp}'.  I've updated your Server number role, though!`
            }
        });
    } else {
        member.setNickname(nameTemp, `Server number updated to ${serverNumber}`);
    }

    message.channel.send({
        embed: {
            color: 0x33cc33,
            description: `You are now part of **S${serverNumber}**!`
        }
    });
};