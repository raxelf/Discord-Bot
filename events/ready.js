const client = require('../index')

client.on("ready", () => {
  console.log(`Discord Bot ${client.user.tag} is online!`);

  client.user.setStatus("idle");
  let ourstatusarray = [
    `8 Bit Community`,
    `,help`
  ]
  setInterval(() => {
      client.user.setActivity(`${ourstatusarray[Math.floor(Math.random() * ourstatusarray.length)]}`, {type : "WATCHING"})
  }, 30000);
});