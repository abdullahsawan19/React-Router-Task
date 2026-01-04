import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate(); // عشان نحول اليوزر بالكود

  const handleSearch = () => {
    if (text) {
      navigate(`/search?q=${text}`);
    }
  };

  return (
    <nav
      style={{
        background: "#333",
        padding: "10px",
        color: "white",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        الرئيسية 🏠
      </Link>
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
        الداشبورد 📊
      </Link>

      <div style={{ marginLeft: "auto" }}>
        <input
          placeholder="ابحث هنا..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>بحث 🔎</button>
      </div>
    </nav>
  );
}
