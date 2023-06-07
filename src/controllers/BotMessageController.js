import { sendMessageToDiscord } from "../services/BotMessageService.js";
import axios from "axios";

export const sendImprisonDiscordMessage = async (req, res) => {
  console.log("===== here new log data ======");
  try {
    console.log("debugger 1", req.body.events[0]);
    console.log("debugger 2", req.body.events[0].matchReasons[0]);
    // console.log("debugger 3",req.body.events[0].transaction.from)
    // console.log("debugger r",req.body.events[0].transaction.logs)

    let payload;
    if (
      req.body.events[0].matchReasons[0].signature ===
      "mint((address,address,uint24,int24,int24,uint256,uint256,uint256,uint256,address,uint256))"
    ) {
      payload = {
        transactionType: req.body.events[0].matchReasons[0].signature,
        token0: req.body.events[0].args[0][0],
        token1: req.body.events[0].args[0][1],
        fees: req.body.events[0].args[0][2],
        from: req.body.events[0].transaction.from,
      };
    } else {
      payload = {
        transactionType: req.body.events[0].matchReasons[0].signature,
        poolId: req.body.events[0].matchReasons[0].params.tokenId,
        amount0: req.body.events[0].matchReasons[0].params.amount0,
        amount1: req.body.events[0].matchReasons[0].params.amount1,
        ratio: req.body.events[0].matchReasons[0].params.liquidity,
        from: req.body.events[0].transaction.from,
      };
    }

    console.log("debugger 4", payload);
    await sendMessageToDiscord(payload)
    return res.send("Mesage successfully send to channel ");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
