module.exports = {
  name: 'donate',
  aliases: ['donasi'],
  description: 'Mendonasikan uang',
  run: async (client, message, args, Discord) => {
    const user = message.mentions.users.first()
    if (!user) return message.reply({ content: 'Tolong Masukkan siapa yang akan didonasikan.'})

    const donation = args[1]
    if (!donation) return message.reply({ content: 'Tolong masukkan jumlah yang akan didonasikan'})

    if (isNaN(donation)) return message.reply({ content: 'Tolong masukkan donasi dalam bentuk angka'})

    const cDonation = parseInt(donation)
    if ((await client.bal(message.author.id)) < donation) return message.reply({ content: 'Kamu tidak memiliki cukup uang untuk didonasikan'})

    await client.rmv(message.author.id, donation)
    await client.add(user.id, donation)

    message.reply({ content: `Kamu telah memberi <:rupiah:946298133183365152>${donation} kepada ${user}! Baik sekali :)`})
  }
}