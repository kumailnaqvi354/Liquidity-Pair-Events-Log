import { sendMessageToDiscord } from '../services/BotMessageService.js'
import axios from 'axios';


export const sendImprisonDiscordMessage = async(req, res) => {
    try {
        console.log("debugger 1",req.body.events[0])
        console.log("debugger 2",req.body.events[0].matchReasons[0])
        console.log("debugger 3",req.body.events[0].transaction.from)



        let payload = {
            user_name: "Anonymice Imprisonment Bot",
            image: `https://raw.githubusercontent.com/jozanza/anonymice-images/main/${req.body.events[0].matchReasons[0].params.genesisId}.png`,
            tokenId: req.body.events[0].matchReasons[0].params.genesisId,
            imprisoner: req.body.events[0].transaction.from
        }
        
    
        console.log("debugger 4",payload)
        await sendMessageToDiscord(payload)
        return res.send('Mesage successfully send to channel ')
    } catch (e) {
        console.log(e)
        res.send(e)

    }

}