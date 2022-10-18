import 'dotenv/config';
import { ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);