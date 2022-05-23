const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
  name: 'remind',
  aliases: ['alarm'],
  description: 'Menetapkan reminder',
  run: async (client, message, args, Discord) => {
    let reminder = args.slice(1).join(' ')
    let time = args[0]

    if(!time) return message.reply({ content : 'Tolong masukkan waktu yang di inginkan!' })
    if(!reminder) return message.reply({ content: 'Tolong masukkan apa yang akan di remind!' })
    if(reminder.length > 200) return message.reply({ content : 'Kamu telah mencapai batas jumlah maksimal huruf!' })

    const embed = new MessageEmbed()
    .setTitle('Reminder telah ditetapkan!')
    .setColor('GREEN')
    .setDescription(`Berhasil menetapkan reminder untuk <@${message.author.id}>!`)
    .addFields(
      {
        name: 'Reminded In:',
        value: `__${time}__`
      },
      {
        name: 'Reminder:',
        value: `__${reminder}__`
      }
    )
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

    setTimeout(async function() {
      message.channel.send({ content: `<@${message.author.id}> timer selesai! Jangan lupa!` })

      const done = new MessageEmbed()
      .setColor('RED')
      .setTitle('Reminder')
      .setDescription(`Dont forget!\n${reminder}`)
      .setTimestamp()

      message.channel.send({ embeds: [done] })
    }, ms (time))
  }
}