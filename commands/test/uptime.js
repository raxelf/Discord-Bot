const { MessageEmbed } = require ("discord.js")

module.exports = {
  name: 'uptime',
  aliases: ['ut', 'up'],
  description: 'Menunjukkan Uptime bot',
  cooldown: 1000 * 8 * 1,
  run: async (client, message, args, Discord) => {
    let totalSec = (client.uptime / 1000)
    let days = Math.floor(totalSec / 86400)
    totalSec %= 86400
    let hours = Math.floor(totalSec / 3600)
    totalSec %= 3600
    let minutes = Math.floor(totalSec / 60)
    let seconds = Math.floor(totalSec % 60)
    const upEmbed = new MessageEmbed()
            .setAuthor(
            client.user.username,
            client.user.avatarURL({ dynamic: true })
            )
            .setTimestamp()
            .setColor('#f082ff')
            .setFooter(
            `Requested by ${message.author.username}`,
            message.author.displayAvatarURL()
            )
            .setDescription(`
              Uptime-ku :
              \`${days}\` Hari \`${hours}\` Jam \`${minutes}\` Menit \`${seconds}\` Detik
            `);
    message.channel.send({ embeds: [upEmbed] });
  }
}