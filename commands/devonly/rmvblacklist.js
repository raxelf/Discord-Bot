const blacklist = require('../../models/userBlacklist')

module.exports = {
  name: 'rmvblacklist',
  run: async (client, message, args, Discord) => {
    if (message.author.id !== '690437978186711121') return message.reply({ content: 'Maaf kak, hanya developer yang bisa menggunakan command ini. :/'})
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.reply({ content: 'Tolong masukkan siapa yang akan di keluarkan dari blacklist.'})

    blacklist.findOne({
      ID: user.user.id
    }, async (err, data) => {
      if (err) throw err
      if (data) {
        await blacklist.findOneAndDelete({
          ID: user.user.id
        }).catch(err => console.log(err))

        message.channel.send({ content: `${user.user.tag} telah dikeluarkan dari blacklist.`})
      } else {
        message.reply({ content: `${user.user.tag} tidak di dalam blacklist.`})
      }
    })
  }
}