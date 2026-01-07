# 🛒 React Router Practice - Product Manager App

A dynamic Single Page Application (SPA) built with **React** and **React Router v6** to demonstrate advanced routing concepts. This project simulates a product management system with features like search filtering, dynamic product details, and a nested dashboard layout.


- **Dynamic Routing:** View individual product details using URL parameters (`/products/:id`).
- **Search Functionality:** Real-time filtering using Query Strings (`?q=...`) without page reload.
- **Nested Routes:** A Dashboard section with sub-pages (Analytics, Settings) rendered via `<Outlet />`.
- **Protected Layouts:** Persistent Sidebar navigation within the Dashboard.
- **Programmatic Navigation:** "Go Back" functionality using `useNavigate` hook.
- **Active Navigation:** Custom Navbar that persists across all pages.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Routing:** React Router DOM (v6.4+)
- **Styling:** CSS Modules / Inline Styles
- **Data:** Mock JSON data

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx       # Global Navigation
│   └── ...
├── pages/
│   ├── Home.jsx         # Product Listing & Search Input
│   ├── ProductDetails.jsx # Dynamic Route for single product
│   ├── Search.jsx       # Search Results Page
│   ├── Dashboard.jsx    # Parent Layout for Dashboard
│   ├── Analytics.jsx    # Child Route
│   └── Settings.jsx     # Child Route
├── App.js               # Main Router Configuration
└── data.js              # Mock Data Source

```

🧠 Key Concepts Learned
1-This project focuses on mastering React Router v6 hooks and components:

2-BrowserRouter, Routes, Route: Setting up the main routing architecture.

3-useParams: Extracting parameters from the URL (e.g., product IDs).

4-useSearchParams: Managing URL query strings for search and filtering.

5-Outlet: Rendering child routes within a parent layout (Used in Dashboard).

6-useNavigate: navigating programmatically (e.g., Back button, Search form submission).

7-Link: For client-side navigation without refreshing the page.
