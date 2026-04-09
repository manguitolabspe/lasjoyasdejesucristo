import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Levels } from "./pages/Levels";
import { Workshops } from "./pages/Workshops";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";
import { Dashboard } from "./components/Dashboard";
import { useAuth } from "./AuthContext";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-school-blue">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Layout>
        <Routes>
          {/* Public Routes */}
          {!user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AboutUs />} />
              <Route path="/niveles" element={<Levels />} />
              <Route path="/talleres" element={<Workshops />} />
              <Route path="/equipo" element={<Team />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              {/* Protected Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
