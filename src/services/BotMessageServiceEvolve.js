import { Webhook, MessageBuilder } from 'discord-webhook-node';
import { AlchemyProvider } from 'ethers';
export const sendMessageToDiscord = async(body) => {

//     let channelUrl = 'https://discord.com/api/webhooks/1071049624724439040/vnoKxDksIpBGKnAMig2MO-CkjE-xgX4BGnMq28ChmRuMFmFSbNADUdXYWwodHgkOXbZN'

//     let hook = new Webhook(channelUrl);
//    let embed = new MessageBuilder()
//     .setTitle('Anonymice #' + body.tokenId + " was imprisoned!")
//     .setColor('#00b0f4')
//     .setImage(body.image)
//     .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toLocaleDateString("en-US"))
//     .setDescription("By: " + body?.imprisoner)
//     .setFooter('Powered by NXT3.com')
//     hook.setUsername(body.user_name);
//     hook.send(embed);

const address = body.imprisoner;
const provider = new AlchemyProvider('goerli',"hK1w_lNLh9MOTnr5iZm2K_vOT8ZNYeXM")
var name = await provider.lookupAddress(address);
let imprisoner;
console.log(name)
// Check to be sure the reverse record is correct. skip check if the name is null
if(name == null) {
  imprisoner = address;
}
else{
    imprisoner = name
}
console.log(imprisoner)

    let channelUrl = 'https://discord.com/api/webhooks/1071049624724439040/vnoKxDksIpBGKnAMig2MO-CkjE-xgX4BGnMq28ChmRuMFmFSbNADUdXYWwodHgkOXbZN'

    let hook = new Webhook(channelUrl);
   let embed = new MessageBuilder()
    .setTitle('Anonymice #' + body.tokenId + " was evolved!")
    .setColor('#00b0f4')
    .setImage(body.image)
    // .addField('Date of Evolve: ',(new Date(new Date().setFullYear(new Date().getFullYear()))).toLocaleDateString("en-US"),false)
    .setDescription("By: " + imprisoner )
    .setFooter('Powered by NXT3.com')
    hook.setUsername(body.user_name);
    hook.send(embed);


    channelUrl = 'https://discord.com/api/webhooks/1093579086401646742/mxLKGsqYm1S8RlJEzrgZqDuJzPvg9H9htxpSw_g3M1_68oz2Zd5Hx_Ttge5zf0KZdw6b'

    hook = new Webhook(channelUrl);
    embed = new MessageBuilder()
    .setTitle('Anonymice #' + body.tokenId + " was evolved!")
    .setColor('#00b0f4')
    .setImage(body.image)
    // .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear()))).toLocaleDateString("en-US"),false)
    .setDescription("By: " + imprisoner )
    .setFooter('Powered by NXT3.com')
    hook.setUsername(body.user_name);
    hook.send(embed);


    channelUrl = 'https://discord.com/api/webhooks/1097145053404725339/mZlvYkSjJLygXvaW4V6D2qSgHEtjPgFX7In6fm_p4So1ujRapLXWwTrTZi50LQKzr7Ar'

    hook = new Webhook(channelUrl);
    embed = new MessageBuilder()
    .setTitle('Anonymice #' + body.tokenId + " was evolved!")
    .setColor('#00b0f4')
    .setImage(body.image)
    // .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear()))).toLocaleDateString("en-US"),false)
    .setDescription("By: " + imprisoner )
    .setFooter('Powered by NXT3.com')
    hook.setUsername(body.user_name);
    hook.send(embed);
//     channelUrl = 'https://discord.com/api/webhooks/1075007218757423215/lxQRm3QopoIq9OgxVDYB32RoP2IhQdNm7cb3iVyjmSmQCCDByc5WNxydzm4Vafq-pxFV'

//     hook = new Webhook(channelUrl);
//     embed = new MessageBuilder()
//     .setTitle('Anonymice #' + body.tokenId + " was imprisoned!")
//     .setColor('#00b0f4')
//     .setImage(body.image)
//     .addField('Date of release: ',(new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toLocaleDateString("en-US"))
//     .setDescription("By: " + imprisoner)
//     .setFooter('Powered by NXT3.com')
//     hook.setUsername(body.user_name);
//     hook.send(embed);

    

    

}