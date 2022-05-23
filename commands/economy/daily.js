const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'daily',
  cooldown: 1000 * 60 * 60 * 24,
  description: 'Mengambil hadiah harian.',
  run: async (client, message, args, Discord) => {
    const money = Math.floor(Math.random() * 2000) + 1

    const embed = new MessageEmbed()
    .setTitle("Hadiah harian!")
    .setDescription(`Kamu mendapat <:rupiah:946298133183365152>${money} sebagai hadiah harian`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor('GREEN')
    .setFooter('Kembali lagi besok kak ^^')

    message.channel.send({ embeds: [embed] })
    client.add(message.author.id, money)
  }
}