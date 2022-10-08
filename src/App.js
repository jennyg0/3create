import "./App.css";
import WithSubnavigation from "./components/Header";
import SidebarWithHeader from "./components/HeaderLoggedIn";
import { useAccount } from "@web3modal/react";

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="App">
      <WithSubnavigation />
      <header className="App-header">Learn Create Solve</header>
    </div>
  );
}

export default App;
