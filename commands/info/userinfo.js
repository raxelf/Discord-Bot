const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'userinfo',
  aliases: ['info'],
  description: 'Menunjukkan info dari seseorang.',
  cooldown: 1000 * 3 * 1,
  run: async (client, message, args, Discord) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new MessageEmbed()
    .setTitle(`${member.user.username}'s Info`)
    .setColor('GREEN')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addFields(
      {
        name: '🔖 **__Name:__**',
        value: member.user.username,
        inline: true
      },
      {
        name: '🏷️ **__Server Nickname:__**',
        value: member.displayName || 'None'
      },
      {
        name: '#️⃣ **__Tags:__**',
        value: `#${member.user.discriminator}`,
        inline: true
      },
      {
        name: '💳 **__User ID:__**',
        value: member.user.id,
        inline: true
      },
      {
        name: '✅ **__Creation Date:__**',
        value: member.user.createdAt.toLocaleDateString("en-us"),
        inline: true
      },
      {
        name: '*️⃣ **__Joined Date:__**',
        value: member.joinedAt.toLocaleDateString("en-us"),
        inline: true
      },
      {
        name: '🌀 **__User Roles:__**',
        value: member.roles.cache.map(role => role.toString()).join(', '),
        inline: true
      }
    )

    await message.channel.send({ embeds: [embed] })
  }
}