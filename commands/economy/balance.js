const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'balance',
  aliases: ['bal'],
  description: 'Cek jumlah uang seseorang.',
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first() || message.author
    const bal = await client.bal(member.id)
    const bankBal = await client.bankBal(member.id)
    
    const embed = new MessageEmbed()
    .setTitle(`Uang ${member.tag}`)
    .setColor('WHITE')
    .setDescription(`Dompet: <:rupiah:946298133183365152>**${parseInt(bal)}** \nBank: <:rupiah:946298133183365152>**${parseInt(bankBal)}**`)

    message.channel.send({ embeds: [embed] })
  }
}