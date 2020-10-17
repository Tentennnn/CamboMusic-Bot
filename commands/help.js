const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} List of all commands :`)
      .setDescription(`
      [Click here for help, updates & more](https://discord.gg/VYRyTJ3)
      Use ${message.client.prefix}help to get more help!

**help** ¦ Display all commands/descrip
**loop** ¦ Toggle music loop
**lyrics** ¦ Get lyrics the current song
**nowplaying** ¦ Show now playing song
**pause** ¦ Pause the currently  music
**play** ¦ Plays audio from YouTube
**playlist** ¦ Play a playlist from youtube
**pruning** ¦ clear of bot messages
**queue** ¦ Show the music queue.
**remove** ¦ Remove song from the queue 
**resume** ¦ Resume currently playing music
**search** ¦ Search and select videos to play
**skip** ¦ Skip the currently playing song
**stop** ¦ Stops the music
**volume** ¦ Change volume of music

      `)
      .setFooter("")
      .setColor("RANDOM");
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
