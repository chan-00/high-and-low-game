//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import components
import { MainPage } from "./Components/Templates/MainPage";
import { EasyPage } from "./Components/Templates/EasyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/easy" element={<EasyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
