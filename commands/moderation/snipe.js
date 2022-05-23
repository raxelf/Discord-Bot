const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'snipe',
  description: 'Menunjukkan pesan terakhir yang dihapus',
  cooldown: 1000 * 3 * 1,
  run: async (client, message, args, Discord) => {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send({ content: 'Tidak ada yang bisa di snipe kak :/.' })
    const embed = new MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if (msg.image) embed
    .setImage(msg.image)
    .setColor('ff0000')
    .setTimestamp()

    message.delete()
    message.channel.send({ embeds: [embed] })
  }
}