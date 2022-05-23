const client = require('../index')
const Schema = require('../models/welcomeChannel')
const { MessageEmbed } = require('discord.js')

client.on('guildMemberAdd', async (member) => {
  Schema.findOne({ Guild: member.guild.id}, async (e, data) => {
    if (!data) return
    const user = member.user
    const embed = new MessageEmbed()
    .setTitle('Anggota Baru telah bergabung')
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .setAuthor(member.user.tag)
    .setDescription(`${user}, Selamat Datang di ${member.guild.name}`)
    .setColor("GREEN")
    .setTimestamp()
    .addFields(
			{
				name: "Bergabung pada",
				value: member.joinedAt.toUTCString(),
				inline: true
			}
		)

    const channel = member.guild.channels.cache.get(data.Channel)
    channel.send({ embeds: [embed] })
    channel.send({ content: `${user}`})
  })
})