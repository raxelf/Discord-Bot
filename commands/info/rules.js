const { MessageEmbed } = require ("discord.js")

module.exports = {
  name: "rules",
  aliases: ['rule', 'aturan', 'peraturan'],
  description: "Menunjukkan list peraturan yang tersedia.",
  cooldown: 1000 * 8 * 1,
  run: async (client, message, args, Discord) => {
    const embed = new Discord.MessageEmbed();
    embed
      .setTitle("Rules")
      .setURL('https://discord.gg/UhRQD3UJEQ')
      .setColor("PURPLE")
      .setDescription("Subject to changes")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setFooter("Pastikan untuk cek juga #rules")
			.addFields(
				{
					name: "Rule 1",
					value: "Don’t be rude, bully other members, etc."
				},
				{
					name: "Rule 2",
					value: "Respect each others!"
				},
        {
					name: "Rule 3",
					value: "Use channels for their purposes!"
				},
        {
					name: "Rule 4",
					value: "Dont mass ping!"
				},
        {
					name: "Rule 5",
					value: "No spamming!"
				},
        {
					name: "Rule 6",
					value: "Enjoy Your time and have FUN!"
				}
			);
    message.channel.send({ embeds: [embed] });
  }
}