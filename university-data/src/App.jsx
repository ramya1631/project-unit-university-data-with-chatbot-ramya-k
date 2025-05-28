
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import UniversityData from "./pages/UniversityData";
import Register from "./pages/Register";
import Chatbot from "./components/Chatbot";
import Content from "./components/Content";
import "./style.css";


function App() {
  return (
      <Router>
    <div className="App">
           <Navbar/>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student" element={<Students />} />
          <Route path="/uni" element={<UniversityData />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
     </Router>
  );
}

export default App;
