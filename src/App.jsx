import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import Description from "./components/Description/Description";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />

          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
