const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'suggest',
  aliases: ['sug'],
  description: 'Suggest something',
  run: async (client, message, args, Discord) => {
    let channel = await db.fetch(`suggestion_${message.guild.id}`)
    if (channel === null) return message.reply({ content: 'Channel suggestions belum ditetapkan!'})

    const suggestionQ = args.join(' ')
    if (!suggestionQ) return message.reply({ content: 'Tolong masukkan apa yang akan di sarankan'})

    const embed = new MessageEmbed()
    .setDescription('Processing.....')

    message.channel.send({ content: `Channel suggestionmu ditetapkan di <#${channel}>.`})

    let msgEmbed = await message.guild.channels.cache.get(channel).send({ embeds: [embed] })
    await msgEmbed.edit({ embeds: [
      new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true} ))
      .setDescription(`${suggestionQ}`)
      .setColor('00ffff')
      .setFooter(`Status: pending`)
      .setTimestamp()
    ]})

    await msgEmbed.react('<:upvote:859688577150615552>')
    await msgEmbed.react('<:downvote:859688629369962506>')
  }
}