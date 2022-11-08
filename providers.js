import "dotenv/config";
import { ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

console.log("Current block number", await provider.getBlockNumber());

console.log("atg.eth is", await provider.resolveName("atg.eth"));

console.log("0x34aA3F359A9D614239015126635CE7732c18fDF3 is ",
await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3"))

console.log("vitalik.eth has", await provider.getBalance("vitalik.eth"));

console.log("vitalik.eth has", (await provider.getBalance("vitalik.eth")).toString()); //balance in wei

const vitalikBalance = await provider.getBalance("vitalik.eth");
let atgBalance = await provider.getBalance("atg.eth");

atgBalance = atgBalance.add(ethers.utils.parseEther("5000"));

console.log("atg balance", ethers.utils.formatEther(atgBalance));
console.log("vitalki balance", ethers.utils.formatEther(vitalikBalance));

if(vitalikBalance.gt(atgBalance)) {
    console.log("Vitalik has more ETH than atg");
} else {
    console.log("atg has more ETH than Vitalik");
}


console.log("vitalik.eth has", ethers.utils.formatEther(vitalikBalance));

console.log(
    "1.5 ETH is",
    ethers.utils.formatEther(ethers.utils.parseEther("1.5"))
);