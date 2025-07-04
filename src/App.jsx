import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Orchids/NavBar/NavBar";
import OrchidsContainer from "./components/Orchids/OrchidsContainer";
import OrchidDetail from "./components/Orchids/OrchidDetail";
import Contact from "./components/Orchids/Contact/Contact";
import About from "./components/Orchids/About/About";
import orchidData from "./data/ListOfOrchids";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // tim kiếm //
  const filteredOrchids = useMemo(() => {
    if (!searchTerm.trim()) return orchidData;
    return orchidData.filter((orchid) =>
      orchid.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // lưu sáng tối //
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar onSearch={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={<OrchidsContainer orchids={filteredOrchids} />}
        />
        <Route
          path="/orchid/:id"
          element={<OrchidDetail orchids={orchidData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
