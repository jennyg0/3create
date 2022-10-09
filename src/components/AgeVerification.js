import React from "react";
import { render } from "react-dom";
import { QRCodeSVG } from "qrcode.react";

const styles = {
  root: {
    color: "#2C1752",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  title: {
    color: "#7B3FE4",
  },
};

// update with your contract address
const deployedContractAddress = "0x45c53da2Af0a7e7d818a494576a9E2C57E811f36";

// more info on query based requests: https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request
const qrProofRequestJson = {
  id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  body: {
    transaction_data: {
      contract_address: deployedContractAddress,
      method_id: "b68967e2",
      chain_id: 80001,
      network: "polygon-mumbai",
    },
    reason: "airdrop participation",
    scope: [
      {
        id: 1,
        circuit_id: "credentialAtomicQuerySig",
        rules: {
          query: {
            allowed_issuers: ["*"],
            req: {
              birthday: {
                $gt: 20080101,
              },
            },
            schema: {
              url: "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v2.json-ld",
              type: "KYCAgeCredential",
            },
          },
        },
      },
    ],
  },
};

export default class VerifyAge extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.root}>
        <h2 style={styles.title}>
          Claim an ERC20 zk airdrop on Polygon Mumbai
        </h2>
        <p>Age verification: You must prove you are under 14 to claim</p>
        <p>
          Complete age verification by issuing yourself a Polygon ID claim via{" "}
          <a
            href="https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea"
            target="_blank"
          >
            KYC Age Credentials
          </a>
          then scan QR code within Polygon ID app to claim your 3create token!
        </p>

        <div>
          <QRCodeSVG level="Q" value={JSON.stringify(qrProofRequestJson)} />
        </div>
        <br />
        <p>
          Github:{" "}
          <a
            href="https://github.com/oceans404/tutorial-examples/tree/main/on-chain-verification"
            target="_blank"
          >
            On-chain verification tutorial
          </a>
        </p>
        <p>
          Polygonscan:{" "}
          <a
            href={`https://mumbai.polygonscan.com/token/${deployedContractAddress}`}
            target="_blank"
          >
            Token 3create
          </a>
        </p>
      </div>
    );
  }
}

render(<VerifyAge />, document.getElementById("root"));
