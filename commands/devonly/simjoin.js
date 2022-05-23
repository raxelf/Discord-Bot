const client = require('../../index')

module.exports = {
  name: 'simjoin',
  description: 'Simulasi guildMemberAdd event',
  run: async (client, message, args, Discord) => {
    if (message.author.id !== '690437978186711121') return message.reply({ content : 'Maaf kak, hanya developer yang bisa menggunakan command ini. :/' })
    client.emit('guildMemberAdd', message.member)
  }
}