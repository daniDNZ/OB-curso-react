import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/pure/Dashboard";
import Login from "./components/pure/Login";
import { Button } from "@mui/material";

function App() {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLogged(!logged);
  };

  useEffect(() => {
    logged ? navigate("/") : navigate("/login");
  }, [logged, navigate]);

  return (
    <div className="app">
      <Button variant="outlined" onClick={handleClick}>
        {logged ? "Logout" : "Login"}
      </Button>
      <Routes>
        <Route
          path="/"
          element={logged ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
