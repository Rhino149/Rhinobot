exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "Administrator"); 
        if (!modRole)
          return console.log("The Mods role does not exist");
      
        if (!message.member.roles.has(modRole.id))
          return message.reply("You can't use this command.");
      
        if (message.mentions.members.size === 0)
          return message.reply("Please mention a user to kick");
      
        if (!message.guild.me.hasPermission("KICK_MEMBERS"))
          return message.reply("");
      
        const kickMember = message.mentions.members.first();
      
        kickMember.kick(reason.join(" ")).then(member => {
          message.reply(`${member.user.username} was succesfully kicked.`);
        });
    };
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ["ak"],
            permLevel: "Administrator"
          };
          
    exports.help = {
      name: "akick",
      category: "Moderation",
      description: "Kicks a user.",
      usage: "kick [mention]"
    };
    
     