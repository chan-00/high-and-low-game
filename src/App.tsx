//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import components
import { MainPage } from "./Components/Templates/MainPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
