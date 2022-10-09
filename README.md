# Welcome to 3create

Currently, as a parent, it is almost impossible to find any web3 education suitable for kids.

At 3Create, we aim to fill this gap.

We’re creating an environment where mistakes are turned into opportunities. We’re giving kids the chance to get lots of things wrong so that they can figure out what it means to be right. We’re designing experiences that are complex yet welcoming, collaborative yet competitive. Experiences that are highly engaging, centered on the student, and designed to help kids understand high-level concepts while navigating the complexities of web3.

Our goal is to help students collaborate more effectively and become better equipped to solve complex web3 problems than anyone (adults included).

By applying an easy-to-use blockchain wallet, programmable digital objects, and 3D virtual spaces where students can collaborate and play, we are creating the next generation of web3 builders.

Through transferrable credentials, the learning is fractionalized and kids now can build their portfolio and proof of skills. Publishing an article, coding, writing, giving a talk, etc. A portfolio of skills can be made and updated in real time.

Finally, the whole process is gamified with on-chain badges that show progress and unlock new tracks as you not only complete the challenges but also support and help other kids. Once you earn enough badges qualifying you for "mastery", you can start earning social tokens by mentoring other learners.

URL: https://3create.vercel.app/

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Socials

Instagram & Twitter: @3create\_

Article: https://medium.com/@vaidasa/3create-1st-web3-education-platform-for-kids-60c5415097a4

### Technical Bounties

## Ethereum Foundation Inclusion

The Next Billion of users will be children. We enable access to the for a previously unserved group that will be the future of Web3 through Proof of Childhood (privacy) and scaling to new groups of users.

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
Smart Contracts with creator NFTs:https://goerli-optimism.etherscan.io/address/0x1488175cbe4fb04e90e11785589a74ffb33cd025

## Livepeer

Livepeer is used to host videos for our educational content and live streaming for mentors to teach groups of students. It is important to have this for learners to access the most up to date content.
https://github.com/jennyg0/3create/blob/main/src/PPlayer.js
https://github.com/janlanecki/3create-livepeer-poc
