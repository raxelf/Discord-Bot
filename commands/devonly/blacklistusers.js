const blacklist = require('../../models/userBlacklist')

module.exports = {
  name: 'blacklist',
  aliases: ['bl'],
  run: async (client, message, args, Discord) => {
    if (message.author.id !== '690437978186711121') return message.reply({ content : 'Maaf kak, hanya developer yang bisa menggunakan command ini. :/' })
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!user) return message.reply({ content: 'Tolong masukkan siapa yang akan di blacklist.' })

    blacklist.findOne({
      ID: user.user.id
    }, async (err, data) => {
      if (err) throw err
      if (data) {
        message.reply({ content: `${user.user.tag} sudah di dalam blacklist.` })
      } else {
        data = new blacklist({ ID: user.user.id })
        data.save().catch(err => console.log(err))

        message.reply({ content: `${user.user.tag} berhasil di blacklist.` })
      }
    })
  }
}