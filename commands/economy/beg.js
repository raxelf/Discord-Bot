const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'beg',
  description: 'Meminta uang',
  cooldown: 1000 * 20 * 1,
  run: async (client, message, args, Discord) => {
    const ppl = ['Kozanagi', 'Erika', 'Santa', 'Ibu mu', 'Ayah mu']
    const pplIn = Math.floor(Math.random() * ppl.length)
    const No = ['Berhenti meminta!', 'No!', 'Kerja!']
    const NoIn = Math.floor(Math.random() * No.length)
    const Yes = ['Fine', 'Sure', 'Ok']
    const YesIn = Math.floor(Math.random() * Yes.length)

    function random() {
      const num = Math.floor(Math.random() * 2)
      return num === 1
    } 
    if (random() === true) {
      let amount = Math.floor(Math.random() * Math.floor(100)) // random number from 1 - 100
      const yesE = new MessageEmbed()
      .setTitle(`${ppl[pplIn]} mengatakan...`)
      .setDescription(`${Yes[YesIn]} Here\'s <:rupiah:946298133183365152>**${amount}**`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true} ))
      .setColor('GREEN')
      message.channel.send({ embeds: [yesE] })
      client.add(message.author.id, amount)
    } else {
      const noE = new MessageEmbed()
      .setTitle(`${ppl[pplIn]} mengatakan...`)
      .setDescription(`${No[NoIn]}`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true} ))
      .setColor('RED')
      message.channel.send({ embeds: [noE] })
    }
  }
}