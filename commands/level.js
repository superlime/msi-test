const Discord = require('discord.js')

exports.run = (client, message, args, config) => {

    let member = message.member;

    // Determine new commanderLevel
    let commanderLevel = args[0];

    if (isNaN(commanderLevel)) {
        return message.channel.send({
            embed: {
                color: 0x33cc33,
                description: `Error, '${commanderLevel}' is not a number. Please use ?level xx (where xx is your commander level).`
            }
        });
    }

    // Compute which grouping of commander levels
    let commanderGroup = Math.trunc(commanderLevel / 10) * 10;

    // Find the role they now fit in
    let commanderRole = message.guild.roles.find(function(role) { return role.name == `Commander ${commanderGroup}`; });

    if (commanderRole == null) {
        return message.channel.send({
            embed: {
                color: 0x33cc33,
                description: `Error, role 'Commander ${commanderGroup}' could not be located.  Please contact the server administrator.`
            }
        });
    }

    // Find any current commander level roles, other than the one they're now in
    let currentRoles = member.roles.filter(
        function(role) { return role.name.startsWith("Commander ") && role.name != commanderRole.name; });

    // Remove all other roles
    if (null != currentRoles && currentRoles.size > 0) {
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

    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send({
            embed: {
                color: 0x33cc33,
                description: `Sorry, unfortunately discord API doesn't let me update the nickname for the server administrator.  :/  Your new nickname would have been '${nameTemp}'.  I've updated your commander level role, though!`
            }
        });
    } else {
        member.setNickname(nameTemp, `Commander Level updated to ${commanderLevel}`);
    }

    message.channel.send({
        embed: {
            color: 0x33cc33,
            fields: [{
                name: nameTemp,
                value: `You are now **__Commander Level ${commanderLevel}__**`,
            }, ],
            timestamp: new Date(),
            footer: {
                text: `@Bot ${config.botName}`,
                icon_url: message.author.avatarURL,
            },
        }
    });
};