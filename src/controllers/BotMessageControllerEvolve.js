import { sendMessageToDiscord } from '../services/BotMessageServiceEvolve.js'


export const sendEvolutionDiscordMessage = async(req, res) => {
    try {
        console.log(req.body)
        console.log(req.body.events[0])
        console.log(req.body.events[0].matchReasons[0])
        console.log(req.body.events[0].transaction.from)



        let payload = {
            user_name: "Anonymice Evolution Bot",
            image: `https://raw.githubusercontent.com/saintmaxi/evolved-mice-images/main/png/Evolved%20Mouse%20%23${req.body.events[0].matchReasons[0].params.tokenId}.png`,
            tokenId: req.body.events[0].matchReasons[0].params.tokenId,
            imprisoner: req.body.events[0].transaction.from
        }
        
    
        console.log(payload)
        await sendMessageToDiscord(payload)
        return res.send('Mesage successfully send to channel ')
    } catch (e) {
        console.log(e)
        res.send(e)

    }

}