const { afk } = require('../../Collection')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'afk',
  aliases: ['away'],
  description: 'Masuk ke dalam status AFK.',
  run: async (client, message, args, Discord) => {
    const reason = args.join(' ') || '`Tidak ada alasan yang diberikan.`'
    const user = message.member
    afk.set(message.author.id, [Date.now(), reason])
    const embed = new MessageEmbed()
    .setTitle(`Kamu telah masuk ke dalam status AFK.`)
    .setDescription(`Alasan: ${reason}`)
    .setTimestamp()
    .setColor('ff0000')
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    message.channel.send({ embeds: [embed] })
  }
}