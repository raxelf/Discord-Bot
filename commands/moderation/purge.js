const { Client, Message } = require("discord.js")

module.exports = {
  name: 'purge',
  aliases: ['clear', 'cc', 'clearchat'],
  description: 'Membersihkan Pesan',
  cooldown: 1000 * 6 * 1,
  UserPerms: ['MANAGE_MESSAGES'],
  BotPerms: ['MANAGE_MESSAGES'],
  run: async (client, message, args, Discord) => {
    try {
      let delamount = args[0]
      if (!args[0]) return message.channel.send({ content: "Tolong masukkan jumlah pesan yang akan dihapus kak.. :/" })
      if (isNaN(delamount)) return message.channel.send({ content: "Tolong masukkan dalam bentuk angka kak.. :/" })
      if (parseInt(delamount) > 25) return message.channel.send({ content: "Kakak tidak bisa menghapus lebih dari 25 pesan :/" })
      await message.channel.bulkDelete(parseInt(delamount) + 1, true)

      await message.channel.send({ content: `${delamount} pesan telah dibersihkan :)` }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 5000)
      })
    } catch (e) {
      message.channel.send({ content: "Yah... kakak tidak bisa menghapus pesan yang umurnya lebih dari 14 hari" })
    }
  }
}