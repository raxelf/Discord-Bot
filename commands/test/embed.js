const { MessageEmbed } = require ("discord.js")

module.exports = {
  name: "embed",
  description: "Menunjukkan embed",
  cooldown: 1000 * 8 * 1,
  run: async (client, message, args, Discord) => {
    const embed = new Discord.MessageEmbed();
    embed
      .setTitle("Disini tidak ada apa-apa")
      .setDescription(
				"tidak ada,\nLink Discord: [Click ini](https://discord.gg/X3VtpYNYmT)"
			)
      .setColor("ORANGE")
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setImage(
				"https://i.pinimg.com/originals/64/f6/39/64f639b5da4985fab50d472d5f43f71b.jpg"
			)
			.addFields(
				{
					name: "Versi Bot",
					value: "2.0.0",
					inline: true
				},
				{
					name: "Nama Bot",
					value: client.user.username,
					inline: true
				}
			);
    message.channel.send({ embeds: [embed] });
  }
}