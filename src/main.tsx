import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StepOne } from "./components/step-1.tsx";
import { StepTwo } from "./components/step-2.tsx";
import { StepFinal } from "./components/step-final.tsx";

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
        <Route path="/step-1" element={<StepOne />} />
        <Route path="/step-2" element={<StepTwo />} />
        <Route path="/step-final" element={<StepFinal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
