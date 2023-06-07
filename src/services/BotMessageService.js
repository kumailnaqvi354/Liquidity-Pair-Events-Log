import { Webhook, MessageBuilder } from 'discord-webhook-node';
import { AlchemyProvider } from 'ethers';

import { Client, GatewayIntentBits } from "discord.js";

// const { Client, GatewayIntentBits } = require("discord.js");

export const sendMessageToDiscord = async(body) => {
    
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    
      
      client.login(process.env.DISCORD_BOT_AUTH_TOKEN);
    
    let channelUrl = 'https://discord.com/api/webhooks/1111293206445949058/iWvrX4CvY8O33f-XQMY5JVOze_UeMdNxmneu2SkKy8lGNV41cAhW-pX4DbHaCORY5TXi'

    let hook = new Webhook(channelUrl);

    let embed;
    if (
      body.transactionType ==
      "mint((address,address,uint24,int24,int24,uint256,uint256,uint256,uint256,address,uint256))"
    ) {
      embed = new MessageBuilder()
        .setTitle("Transaction :" + body.transactionType + " was initiated!")
        .setColor("#00b0f4")
        .addField("Token 0", body.token0)
        .addField("Token 1", body.token1)
        .addField("Fees", body.fees)
        .addField("Sender", body.from)
        .setFooter("Powered by NXT3.com");
    } else {
      embed = new MessageBuilder()
        .setTitle("Transaction : " + body.transactionType + " was initiated!")
        .setColor("#00b0f4")
        .addField("Pool Id", body.poolId)
        .addField("Amount 0", body.amount0)
        .addField("Amount 1", body.amount1)
        .addField("Ratio", body.ratio)
        .addField("Sender", body.from)
        // .setTimestamp()
        .setFooter("Powered by NXT3.com");
    }


    hook.setUsername(body.user_name);
    hook.send(embed);

// const address = body.imprisoner;
// const provider = new AlchemyProvider('goerli',"hK1w_lNLh9MOTnr5iZm2K_vOT8ZNYeXM")
// var name = await provider.lookupAddress(address);
let imprisoner;
// console.log("debugger 5",body.imprisoner)
// Check to be sure the reverse record is correct. skip check if the name is null
// if(name == null) {
//   imprisoner = address;
// }
// else{
//     imprisoner = name
// }
// console.log("debugger 6",imprisoner)
// client.send(body.imprisoner);

//     let channelUrl = 'https://discord.com/api/webhooks/1071049624724439040/vnoKxDksIpBGKnAMig2MO-CkjE-xgX4BGnMq28ChmRuMFmFSbNADUdXYWwodHgkOXbZN'

//     let hook = new Webhook(channelUrl);
//    let embed = new MessageBuilder()
//     .setTitle('Anonymice #' + body.tokenId + " was imprisoned!")
//     .setColor('#00b0f4')
//     .setImage(body.image)
//     .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toLocaleDateString("en-US"),false)
//     .setDescription("By: " + imprisoner )
//     .setFooter('Powered by NXT3.com')
//     hook.setUsername(body.user_name);
//     hook.send(embed);


    // channelUrl = 'https://discord.com/api/webhooks/1071049624724439040/vnoKxDksIpBGKnAMig2MO-CkjE-xgX4BGnMq28ChmRuMFmFSbNADUdXYWwodHgkOXbZN'

    // hook = new Webhook(channelUrl);
    // embed = new MessageBuilder()
    // .setTitle('Anonymice #' + body.tokenId + " was imprisoned!")
    // .setColor('#00b0f4')
    // .setImage(body.image)
    // .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toLocaleDateString("en-US"))
    // .setDescription("By: " + imprisoner)
    // .setFooter('Powered by NXT3.com')
    // hook.setUsername(body.user_name);
    // hook.send(embed);

    // channelUrl = 'https://discord.com/api/webhooks/1093579086401646742/mxLKGsqYm1S8RlJEzrgZqDuJzPvg9H9htxpSw_g3M1_68oz2Zd5Hx_Ttge5zf0KZdw6b'

    // hook = new Webhook(channelUrl);
    // embed = new MessageBuilder()
    // .setTitle('Anonymice #' + body.tokenId + " was imprisoned!")
    // .setColor('#00b0f4')
    // .setImage(body.image)
    // .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toLocaleDateString("en-US"))
    // .setDescription("By: " + imprisoner)
    // .setFooter('Powered by NXT3.com')
    // hook.setUsername(body.user_name);
    // hook.send(embed);

    // channelUrl = 'https://discord.com/api/webhooks/1097145053404725339/mZlvYkSjJLygXvaW4V6D2qSgHEtjPgFX7In6fm_p4So1ujRapLXWwTrTZi50LQKzr7Ar'

    // hook = new Webhook(channelUrl);
    // embed = new MessageBuilder()
    // .setTitle('Anonymice #' + body.tokenId + " was imprisoned!")
    // .setColor('#00b0f4')
    // .setImage(body.image)
    // .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toLocaleDateString("en-US"))
    // .setDescription("By: " + imprisoner)
    // .setFooter('Powered by NXT3.com')
    // hook.setUsername(body.user_name);
    // hook.send(embed);

    

}