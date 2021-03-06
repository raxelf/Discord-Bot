const client = require('../index')
const prefix = process.env['prefix']
const { Collection, Discord } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const Timeout = new Collection()
const ms = require('ms')
const blacklist = require('../models/userBlacklist')

client.on('messageCreate', async (message) => {
  blacklist.findOne({ ID: message.author.id}, async (err, data) => {
    if (err) throw err
    if (!data) {
      
  if (message.author.bot || !message.guild) return;
  
  if (!message.content.startsWith(prefix)) return

  const [cmd, ...args] = message.content
  .slice(prefix.length)
  .trim()
  .split(" ")
  const Discord = require('discord.js')
  let command = client.commands.get(cmd)

  if (!command) command = client.commands.get(client.aliases.get(cmd))
  if (command) {
    if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send({ content: `Maaf Kak, kakak tidak memiliki izin untuk menjalankan command ini.. :/`})

    if (!message.member.permissions.has(command.BotPerms || [])) return message.channel.send({ content: `Maaf Kak, saya tidak memiliki izin untuk menjalankan command di server ini.. :/`})

    if (command.cooldown) {
      if (Timeout.has(`${command.name}${message.author.id}`)) return message.reply({ content: `Yah.. Kakak terkena ${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {lomg : true})} cooldown.`})
      command.run(client, message, args, Discord) 
      Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
      setTimeout (() => {
        Timeout.delete(`${command.name}${message.author.id}`)
      }, command.cooldown)
    } else command.run(client, message, args, Discord)
    }
  } else {
    const blist = new MessageEmbed()
    .setColor('RED')
    .setDescription('**Yah... Kakak telah di blaklist dari command-ku**')
    message.channel.send({ embeds: [blist] })
  }
  })
      })
client.snipes = new Map();
client.on('messageDelete', async function (message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})
client.esnipes = new Collection()
client.on('messageUpdate', async (oldMes, newMes) => {
  let esnipes = client.esnipes.get(oldMes.channel.id) || [];
  if(esnipes.length > 5) esnipes = esnipes.slice(0, 4)
  esnipes.unshift({
    msg: oldMes,
    newc: newMes,
    author: oldMes.author
  })
  client.esnipes.set(oldMes.channel.id, esnipes)
})