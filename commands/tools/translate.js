const { MessageEmbed } = require('discord.js')
const translate = require('@iamtraction/google-translate')
const client = require('../../index')

module.exports = {
  name: 'translate',
  aliases: ['trans'],
  description: 'Menerjemahkan sesuatu',
  cooldown: 1000 * 5 * 1,
  run: async (client, message, args, Discord) => {
    try {
      const query = args.slice(1).join(' ')
      if (!query) return message.reply({ content: 'Masukkan kata yang ingin di terjemahkan' })
      
      const arg =args[0]

      const translated = await translate(query, { to: `${arg}` })
      const embed = new MessageEmbed()
      .setTitle('Translated!')
      .addField('Phrase: ', query)
      .addField('Selected Language: ', arg)
      .addField('Translation', translated.text)

      message.channel.send({ embeds: [embed] })
    } catch (error) {
      return message.channel.send({ content: 'Terjadi kesalahan dalam menerjemahkan :/' }).then(() => console.log(error))
    }
  }
}