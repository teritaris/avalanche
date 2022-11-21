import Avalanche, { BinTools, Buffer, BN } from "avalanche"
import {HealthAPI} from "avalanche/dist/apis/health";
import {HealthResponse} from "avalanche/dist/apis/health/interfaces";

const bintools = BinTools.getInstance();
const myNetworkID = 43113 //default is 1, we want to override that for our local network
const avalanche = new Avalanche("4th.vps.deroris.net", 9650, "http", myNetworkID);


(async ()=> {
    const cChain = avalanche.CChain() //returns a reference to the X-Chain used by AvalancheJS

    console.log(cChain.getBlockchainID())
    const encodedAssetId = await cChain.getAVAXAssetID();
    console.log(encodedAssetId);
    console.log(encodedAssetId.toString('hex'));
    console.log(encodedAssetId.toString('utf8'));
    console.log(encodedAssetId.toString('base64'));

    // string → Buffer
    const strBuf = Buffer.from('かぼちゃ');
    console.log(strBuf);
    // かぼちゃ
    console.log(strBuf.toString());

})();
