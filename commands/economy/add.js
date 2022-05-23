module.exports = {
  name: 'add',
  description: 'Menambah jumlah uang seseorang',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first() || message.member

    client.add(member.id, parseInt(args[0]))

    message.reply({ content: `Berhasil menambahkan <:rupiah:946298133183365152>${args[0]}`})
  }
}