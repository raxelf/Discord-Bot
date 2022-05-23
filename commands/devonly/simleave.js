const client = require('../../index')

module.exports = {
  name: 'simleave',
  description: 'Simulasi guildMemberRemove event',
  run: async (client, message, args, Discord) => {
    if (message.author.id !== '690437978186711121') return message.reply({ content : 'Maaf kak, hanya developer yang bisa menggunakan command ini. :/' })
    client.emit('guildMemberRemove', message.member)
  }
}