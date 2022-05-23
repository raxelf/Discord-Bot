const { MessageEmbed } = require ('discord.js')

module.exports = {
  name: 'esnipe',
  description: 'Menunjukkan pesan terakhir yang di-edit',
  cooldown: 1000 * 3 * 1,
  run: async (client, message, args, Discord) => {
    const esnipes = client.esnipes.get(message.channel.id)
    if(!esnipes) return message.channel.send({ content: 'Tidak ada yang bisa di snipe kak :/' })

    const esnipe = +args[0] - 1 || 0
    const target = esnipes[esnipe]
    if (!target) {
      message.channel.send(`Ada ${snipes.length} untuk di snipe.`)
    }
    const { newc, msg } = target
    message.channel.send({
      embeds: [
        new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
        .addField('Old Message', msg.content)
        .addField('New Content', newc.content)
        .setFooter(`Message sniped ${esnipe + 1} out of ${esnipes.length}`)
      ]
    })
  }
}