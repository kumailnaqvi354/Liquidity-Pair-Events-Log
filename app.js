import express from 'express';
import bodyParser from 'body-parser';
import { sendImprisonDiscordMessage } from './src/controllers/BotMessageController.js';
import { sendEvolutionDiscordMessage } from './src/controllers/BotMessageControllerEvolve.js';
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import cors from 'cors'
dotenv.config();


const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors({
  origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.options('*', cors());


/* app.get('/channels', async function (req, res) {
  
  res.send({mess: mess, message});
}); */

// send discordd mmessage 
app.post('/imprisonbot', jsonParser, sendImprisonDiscordMessage);
app.post('/evolvebot', jsonParser, sendEvolutionDiscordMessage);
app.get('/bot-test', (req, res, next) => {
  res.send("Working")
});

app.post('/app', (request)=>{
  console.log("here resquest =======",request);
})


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
    
});