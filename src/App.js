import "./App.css";
import WithSubnavigation from "./components/Header";
import SidebarWithHeader from "./components/HeaderLoggedIn";
import { useAccount } from "@web3modal/react";

import SplitScreen from "./components/Hero";
import SplitWithImage from "./components/Features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifyAge from "./components/AgeVerification";
import Complete from "./components/Complete";

function App() {
  const { isConnected } = useAccount();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/library" element={<VerifyAge />} />
        <Route path="/mint" element={<Complete />} />
      </Routes>
    </Router>
  );
}

export default App;
