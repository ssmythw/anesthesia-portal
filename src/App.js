import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import General from "./pages/General/General";
import Home from "./pages/Home/Home";
import QA from "./pages/Q&A/QA";
import Staff from "./pages/Staff/Staff";
import Types from "./pages/Types/Types";
import YourAnesthesiologist from "./pages/YourAnesthesiolgist/YourAnesthesiologist";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="questions-and-answers" element={<QA />} />
        <Route path="staff" element={<Staff />} />
        <Route path="general-and-preop" element={<General />} />
        <Route
          path="your-anesthesiologist"
          element={<YourAnesthesiologist />}
        />
        <Route path="types-of-anesthesia" element={<Types />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
