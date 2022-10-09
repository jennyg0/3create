# Welcome to 3create

URL: https://3create.vercel.app/

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Technical Bounties

## Ethereum Foundation Inclusion

## Polygon ID

Once logged in, the dApp checks their wallet for a 3create token to see if they are verified 'Proof of Childhood' using polygonID. Children can verify their identity from a local library (issuer) to ensure that they are under 14 and no bad actors are able to access certain features in the dApp such as chat, certain courses and monetary awards.
Issuer verification QR: https://github.com/jennyg0/3create/blob/main/src/components/AgeVerification.js
Proof of childhood check: https://github.com/jennyg0/3create/blob/main/src/components/HeaderLoggedIn.js
Smart contract with 3create tokens: https://mumbai.polygonscan.com/token/0x45c53da2Af0a7e7d818a494576a9E2C57E811f36

## Wallet Connect

We use wallet connect as way children can connect to our app
https://github.com/jennyg0/3create/blob/main/src/index.js

## Optimism NFT Games

We used Optimism Layer 2 in order to issue NFT badges after kids complete certain courses - or "levels" - to keep the security of Ethereum and give children a chance to familiarize themselves with wider Ethereum ecosystem while also decreasing the costs and increasing the responsiveness of gamified NFT rewards inside our app.
https://github.com/janlanecki/3create-airdrop/
