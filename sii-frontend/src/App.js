import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/nav/Navbar";
import Upload from "./components/upload/upload";
import Home from "./components/home/home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imageGenerator" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
