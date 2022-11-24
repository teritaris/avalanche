import Avalanche, { BinTools, Buffer, BN } from "avalanche"
import {
    UTXOSet as PlatformUTXOSet,
    UTXO as PlatformUTXO,
    UnsignedTx as PlatformUnsignedTx,
    Tx as PlatformTx,
    PlatformVMConstants,
    StakeableLockOut, PlatformVMAPI,
} from 'avalanche/dist/apis/platformvm';
import { EVMAPI, KeyChain } from "avalanche/dist/apis/evm";
import { SingletonWallet } from "@avalabs/avalanche-wallet-sdk";

const HOST = "4th.vps.deroris.net";
const PORT = 9650;
const PROTOCOL = "http";
// const NETWORK_ID = 43113; // 43113はchainIdだった
const NETWORK_ID = 1;
const avalanche = new Avalanche(HOST, PORT, PROTOCOL, NETWORK_ID);

const main = async () => {

    const pChain: PlatformVMAPI = avalanche.PChain();

    const PRIVATE_KEY = "PrivateKey-2acWSDw3h7eXkJFzqZCNWWnaPYa1hwBGJbLvoDLtzNE6vUk9pD"; // メタマスクで作ってウォレットにインポートしてウォレット画面からとれたやつ。頭にPrivate-Keyがつくのが正しい。
    //const wallet = new SingletonWallet(PRIVATE_KEY);
    const wallet = new SingletonWallet(PRIVATE_KEY);

    const utxosP: PlatformUTXOSet = new PlatformUTXOSet();
    const stakeReturnAddr = wallet.getAddressP();
    const pAddressStrings = await wallet.getAllAddressesP();
    const changeAddress = wallet.getAddressP();
    const NODE_ID = "NodeID-2pPHh62vcxcs2UTtujL1HdAVJAT1u1XNs";
    const startDateTime = new Date("2022/11/23 00:00:00"); // TODO: 適宜変えること
    const endDateTime = new Date("2022/12/23 23:59:59");
    // const stakeAmount = new BN(1000000000);
    const stakeAmount: any = await pChain.getMinStake()
    const rewardAddress = wallet.getAddressP();

    // Convert dates to unix time
    let startTime = new BN(Math.round(startDateTime.getTime() / 1000));
    let endTime = new BN(Math.round(endDateTime.getTime() / 1000));

    const unsignedTx = await pChain.buildAddDelegatorTx(utxosP, [stakeReturnAddr], pAddressStrings, [changeAddress], NODE_ID, startTime, endTime, stakeAmount.minDelegatorStake, [rewardAddress])
    console.log(unsignedTx);
}

main();
