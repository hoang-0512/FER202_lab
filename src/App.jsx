import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Orchids/NavBar/NavBar";
import OrchidsContainer from "./components/Orchids/OrchidsContainer";
import OrchidDetail from "./components/Orchids/OrchidDetail";
import Contact from "./components/Orchids/Contact/Contact";
import orchidData from "./data/ListOfOrchids";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách hoa lan theo tên (không phân biệt hoa thường/hoa in)
  const filteredOrchids = useMemo(() => {
    if (!searchTerm.trim()) return orchidData;
    return orchidData.filter((orchid) =>
      orchid.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Không cần quản lý darkMode ở cấp App nữa vì NavBar đã quản lý
  useEffect(() => {
    // Đọc darkMode từ localStorage khi khởi tạo
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
