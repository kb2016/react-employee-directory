import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
