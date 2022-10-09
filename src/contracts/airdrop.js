import { ethers } from "ethers";
//require("dotenv").config();
const contract = require("./Airdrop.json");
// TODO before presentation! Add the kid's wallet address below!
const userAddresses = [
  "0xf7Ae91DA4d191451c726c9bB59c22a1B0a527Db1",
  "0xAE2db56a326a097c7184154C867fB36959DF05f2",
  "0x75a1e0a311a2486217d94c716d3f48861b54a753",
];

const provider = new ethers.providers.getDefaultProvider(
  "https://goerli.optimism.io"
);

// Create a signer
const privateKey = `0x3355ee99681173cc7dff1048c13d2bb47e112279149c0bd1c8c5900ddfac5612`;
const signer = new ethers.Wallet(privateKey, provider);

// Get contract ABI and address
const abi = contract.abi;
const contractAddress = "0x1488175CBe4FB04e90e11785589a74FFb33cD025";

// Create a contract instance
const airdropContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPFS URL
const tokenUri =
  "https://gateway.pinata.cloud/ipfs/QmWSvsioSdh9KkdgR1EUFB2ts7wCM44Cn4LBkqxTxdDUhY"; // TODO: function call param

// Call mintNFT function
const airdropNFT = async () => {
  let nftTxn = await airdropContract.airdropNfts(userAddresses, tokenUri);
  await nftTxn.wait();
  console.log(
    `NFT Airdropped! Check it out at: https://goerli-optimism.etherscan.io/tx/${nftTxn.hash}`
  );
};

export default airdropNFT;
