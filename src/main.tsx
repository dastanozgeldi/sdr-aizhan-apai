import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <main className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center justify-center p-4">
            <Outlet />
          </main>
        }
      >
        <Route path="/" element={<App />} />
        <Route path="/step-1" element={<div>yo this is step one!</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
