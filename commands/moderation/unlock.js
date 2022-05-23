module.exports = {
  name: 'unlock',
  description: 'Membuka kunci channel.',
  UserPerms: ['MANAGE_CHANNELS'],
  BotPerms: ['MANAGE_CHANNELS'],
  run: async (client, message, args, Discord) => {
    const channel = message.channel || message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find((u) => u.name === args[0])
    if (!channel) return message.reply({ content: 'Tidak bisa menemukan channel yang dimaksud.'})

    let msg = await message.channel.send('Membuka Kunci...')

    try {
      channel.permissionOverwrites.edit(message.guild.roles.cache.find((e) => e.name.toLowerCase().trim() === '@everyone'),
      {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true,
      })
      msg.edit({ content: `${channel.name} telah terbuka kembali.`})
    } catch (e) {
      message.channel.send({ content: 'Error telah terjadi :('})
    }
  }
}