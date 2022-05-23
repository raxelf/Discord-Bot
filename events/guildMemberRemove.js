const client = require('../index')
const Schema = require('../models/leavechannel')
const { MessageEmbed } = require('discord.js')

client.on('guildMemberRemove', async (member) => {
  Schema.findOne({ Guild: member.guild.id }, async (e, data) => {
    if (!data) return
    const user = member.user
    const embed = new MessageEmbed()
    .setTitle("Telah perginya :(")
		.setColor("RED")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.addField("Begabung pada", member.joinedAt.toUTCString())
		.setTimestamp();

    const channel = member.guild.channels.cache.get(data.Channel)
    channel.send({ embeds: [embed] })
  })
})