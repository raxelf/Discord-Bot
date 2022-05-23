const Schema = require('../../models/welcomeChannel')

module.exports = {
  name: 'setwelcome',
  UserPerms: ['ADMINISTRATOR'],
  description: 'Menetapkan channel welcome',
  cooldown: 1000 * 5 * 1,
  run: async (client, message, args , Discord) => {
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply({ content: 'Tolong masukkan channel yang akan ditetapkan.'})

    Schema.findOne({ Guild: message.guild.id}, async (err, data) => {
      if(data) {
        data.Channel = channel.id
        data.save()
      } else {
        new Schema ({
          Guild: message.guild.id,
          Channel: channel.id
        }).save()
      }
      message.reply({ content: `${channel} telah ditetapkan sebagai welcome channel.`})
    })
  }
}