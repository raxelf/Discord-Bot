const client = require('../index')

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return
  if (message.content.includes('halo')) {
    message.channel.send({ content: 'Halo kak! ^^'})
  }
})