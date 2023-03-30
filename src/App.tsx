//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import components
import { MainPage } from "./Components/Templates/MainPage";
import { EasyPage } from "./Components/Templates/EasyPage";
import { NormalPage } from "./Components/Templates/NormalPage";
import { HardPage } from "./Components/Templates/HardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/easy" element={<EasyPage/>} />
        <Route path="/normal" element={<NormalPage/>} />
        <Route path="/hard" element={<HardPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
