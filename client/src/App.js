import React from "react";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Service from './pages/servicePage/Service';
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<List />} />
          <Route path="/services/:id" element={<Service />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
