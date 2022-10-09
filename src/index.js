import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3Modal } from "@web3modal/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const config = {
  projectId: "9338b83ff89083cd0ee7da8cea475c23",
  theme: "light",
  accentColor: "teal",
  ethereum: {
    appName: "3create",
    chains: [
      {
        id: 80001,
        name: "Polygon Testnet Mumbai",
        network: "mumbai",
        rpcUrls: {
          default: "https://rpc-mumbai.maticvigil.com",
        },
      },
    ],
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />

      <Web3Modal config={config} />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
