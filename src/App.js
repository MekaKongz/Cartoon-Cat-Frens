import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main"
import MintingDapp from "./pages/MintingDapp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/minting-dapp" element={<MintingDapp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
