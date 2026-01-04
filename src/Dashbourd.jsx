import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashbourd = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <nav style={{ width: "200px", background: "#eee", height: "100vh" }}>
        <ul>
          <li>
            <Link to="analytics">Analytics</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <main style={{ padding: "20px", flex: 1 }}>
        <h1>لوحة التحكم الرئيسية</h1>
        <hr />

        <Outlet />
      </main>
    </div>
  );
};

export default Dashbourd;
