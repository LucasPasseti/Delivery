import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Service from './pages/servicePage/Service';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Motoboy from "./pages/motoboys/Motoboy";
import AddMotoboy from "./pages/addMotoboy/AddMotoboy";

import { AuthContextProvider } from "./components/context/AuthContext";
import { MotoboyContextProvider } from "./components/context/MotoboyContext";
import Equipe from "./pages/equipe/Equipe";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MotoboyContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<List />} />
            <Route path="/services/:id" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/motoboy" element={<Motoboy />} />
            <Route path="/adicionar-motoboy" element={<AddMotoboy />} />
            <Route path="/equipe" element={<Equipe/>} />
          </Routes>
        </MotoboyContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;