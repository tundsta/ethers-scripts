import { ethers } from "ethers";

const infuraId; 
const infuraUrl = `https://mainnet.infura.io/v3/${infuraId}`
const provider = new ethers.providers.JsonRpcProvider(infuraId);