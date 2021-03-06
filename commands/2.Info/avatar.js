const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  //option
  let mention = message.mentions.users.first()
  let userID = message.guild.members.cache.get(args[0])
  let self = !args[0]
  let server = args[0] === "server"

  //embed
  let embed = new Discord.MessageEmbed().setColor(client.warna.kato)

  //get avatar and send to user
  if (mention) {
    embed.setAuthor(mention.tag, mention.displayAvatarURL({ size: 4096, dynamic: true }))   //author embed
    embed.setDescription(`[Avatar URL](${mention.displayAvatarURL({ size: 4096, dynamic: true })})`) //redirect to avatar link
    embed.setImage(mention.displayAvatarURL({ size: 4096, dynamic: true }).replace('.webp', '.png')) //image of avatar
  } else;
  if (userID) {
    embed.setAuthor(userID.user.tag, userID.user.displayAvatarURL({ size: 4096, dynamic: true }))
    embed.setDescription(`[Avatar URL](${userID.user.displayAvatarURL({ size: 4096, dynamic: true })})`)
    embed.setImage(userID.user.displayAvatarURL({ size: 4096, dynamic: true }).replace('.webp', '.png'))
  } else;
  if (self) {
    embed.setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
    embed.setDescription(`[Avatar URL](${message.author.displayAvatarURL({ size: 4096, dynamic: true })})`)
    embed.setImage(message.author.displayAvatarURL({ size: 4096, dynamic: true }).replace('.webp', '.png'))
  } else;
  if (server) {
    embed.setAuthor(message.guild.name, message.guild.iconURL())
    embed.setDescription(`[Avatar URL Link](${message.guild.iconURL({ size: 4096, dynamic: true })})`)
    embed.setImage(message.guild.iconURL({ size: 4096, dynamic: true }).replace('.webp', '.png'))
  }

  return message.channel.send(embed); //send this message to user
};

exports.conf = {
  aliases: [],
  cooldown: 5

};

exports.help = {
  name: 'avatar',
  description: 'melihat avatar',
  usage: 'avatar [@mention | userID | server]>',
  example: 'avatar @juned'
}