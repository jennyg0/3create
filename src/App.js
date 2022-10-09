import "./App.css";
import WithSubnavigation from "./components/Header";
import SidebarWithHeader from "./components/HeaderLoggedIn";
import { useAccount } from "@web3modal/react";
import VerifyAge from "./components/AgeVerification";
import { Network, Alchemy } from "alchemy-sdk";
import SplitScreen from "./components/Hero";

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(settings);

const userAddress = "0x31e2D52aE5A0760E2f9cab4D388Ba1F457814275";
const createTokenContract = "0x45c53da2Af0a7e7d818a494576a9E2C57E811f36";

let value = alchemy.core
  .getTokenBalances(userAddress, [createTokenContract])
  .then(console.log);

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="App">
      <WithSubnavigation />
      <SplitScreen />
      {/* <VerifyAge /> */}
    </div>
  );
}

export default App;
