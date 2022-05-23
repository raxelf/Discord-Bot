module.exports = {
  name: 'work',
  aliases: ['kerja'],
  description: 'Bekerja untuk mendapatkan sepeser uang',
  cooldown: 1000 * 60 * 30,
  run: async (client, message, args, Discord) => {
    const jobs = ['Pelayan Restoran', 'Sopir', 'Ojek-Online', 'Kasir minimarket']
    
    const jobIn = Math.floor(Math.random() * jobs.length)
    const money = Math.floor(Math.random() * 800) + 1

    message.reply({ content: `Kamu bekerja sebagai **${jobs[jobIn]}** dan mendapat gaji <:rupiah:946298133183365152>${money}!`})
    client.add(message.author.id, money)
  }
}