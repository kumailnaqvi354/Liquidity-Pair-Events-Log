import dotenv from 'dotenv'
import {getAllSubscribedChannelToSendMesssage} from './services/BotMessageService.js'
import {  Client, Events, GatewayIntentBits, Partials, MessageCollector  } from 'discord.js';
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent], 'partials': [Partials.Channel, Partials.Message] });
  
  
  /* client.once(Events.ClientReady, c => {
      console.log(`Ready! Logged in as ${c.user.tag}`);
  }) */
  
  
  client.on('messageCreate', async (message) => {
    console.log(message);
    if(!message.author.bot){
      let messageBody = {
        user_name: message.author.username,
        message: message.content,
        channel_id: message.channelId,
      }
      getAllSubscribedChannelToSendMesssage(messageBody)
    }
    
    /* let collector = new MessageCollector(message.channel, true);
    collector.on('collect', async(mess, col) => {
      console.log('--------------->>>>>>>>>>', mess)
    }) */
  });
  
  client.login(process.env.DISCORDJS_BOT_TOKEN);
