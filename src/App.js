import "./App.css";
import WithSubnavigation from "./components/Header";
import SidebarWithHeader from "./components/HeaderLoggedIn";
import { useAccount } from "@web3modal/react";

import SplitScreen from "./components/Hero";
import SplitWithImage from "./components/Features";

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="App">
      {isConnected ? (
        <div>
          <SidebarWithHeader />
        </div>
      ) : (
        <div>
          <WithSubnavigation />
          <SplitScreen />
          <SplitWithImage />
        </div>
      )}
    </div>
  );
}

export default App;
