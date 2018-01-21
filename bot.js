const Discord = require('discord.io');
const _ = require('lodash');
require('dotenv').config();

// Initiate Discord Bot
const bot = new Discord.Client({
  token: process.env.TOKEN,
  autorun: true
});

bot.on('ready', (event) => {
  console.log(`Conected as ${bot.username}(${bot.id})`);
  console.log(event.t);
});
bot.on('message', (user, userID, channelID, message, event) => {
  if (message.includes('@404425082434486302')) {
    console.log(event.d.timestamp, user, userID, message);
    bot.sendMessage({
      to: channelID,
      message: `Hello ${user}`
    });
  }
});
bot.on('presence', (user, userID, status, game, event) => {
  console.log(event.d.timestamp, user, userID, status, game);
  if ((userID === '149583537237000193') && (game)) {
    bot.sendMessage({
      to: userID,
      message: `Hey everyone look at ${user} playing that terrible ${game.name} game`
    });
  }
});
