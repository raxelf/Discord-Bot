const { MessageEmbed } = require ("discord.js")

module.exports = {
  name: "ping",
  description: "Menunjukkan ping bot",
  cooldown: 1000 * 5 * 1,
  run: async (client, message, args, Discord) => {
    const embed = new MessageEmbed()
    .setTitle("🏓 Pong!")
    .setDescription(`**${client.ws.ping}ms** Latency!`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(
    `Requested by ${message.author.username}`,
    message.author.displayAvatarURL()
    );
    message.channel.send({ embeds: [embed] })
  }
}