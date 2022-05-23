const db = require('quick.db')

module.exports = {
  name: 'setsuggestions',
  description: 'Menetapkan suggestions channel.',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

    if (!Channel) return message.reply({ content: 'Tolong masukkan channel yang akan ditetapkan!'})

    await db.set(`suggestion_${message.guild.id}`, Channel.id)

    message.channel.send({ content: `Berhasil menetapkan ${Channel} sebagai suggestions channel.`})
  }
}